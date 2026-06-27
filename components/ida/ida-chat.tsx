"use client";

import { Loader2, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";

import { useConsultation } from "@/components/consultation/consultation-context";
import { Button } from "@/components/ui/button";
import { consumeIdaSseStream } from "@/lib/ida/client/parse-sse";
import { IDA_CONFIG } from "@/lib/ida/config";
import { buildIdaHandoffPrefill } from "@/lib/ida/handoff";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";
import type { IdaMessage } from "@/types/ida";

const WELCOME_MESSAGE_ID = "ida-welcome";
const SESSION_STORAGE_KEY = "ida-session-id";

const QUICK_REPLY_KEYS = [
  "bridging",
  "assetCollateral",
  "process",
  "consultation",
] as const;

type QuickReplyKey = (typeof QUICK_REPLY_KEYS)[number];

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";

  let sessionId = sessionStorage.getItem(SESSION_STORAGE_KEY);

  if (!sessionId) {
    sessionId = `ida-${crypto.randomUUID()}`;
    sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);
  }

  return sessionId;
}

function createMessageId() {
  return `ida-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function toApiMessages(messages: IdaMessage[]) {
  return messages
    .filter((message) => message.id !== WELCOME_MESSAGE_ID)
    .map(({ role, content }) => ({ role, content }));
}

interface IdaMessageBubbleProps {
  message: IdaMessage;
  isStreaming?: boolean;
}

function IdaMessageBubble({ message, isStreaming }: IdaMessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full",
        isUser ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          isUser
            ? "rounded-br-md bg-gold text-background"
            : "rounded-bl-md border border-white/10 bg-black/50 text-white/90",
        )}
      >
        <p className="whitespace-pre-wrap">
          {message.content}
          {isStreaming && (
            <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-gold align-middle" />
          )}
        </p>
      </div>
    </div>
  );
}

export function IdaChat() {
  const locale = useLocale() as Locale;
  const t = useTranslations("ida");
  const { openConsultation } = useConsultation();
  const inputId = useId();

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessageId, setStreamingMessageId] = useState<string | null>(
    null,
  );
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [messages, setMessages] = useState<IdaMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const quickReplies = useMemo(
    () =>
      QUICK_REPLY_KEYS.map((key) => ({
        key,
        label: t(`quickReplies.${key}.label`),
        message: t(`quickReplies.${key}.message`),
        action:
          key === "consultation"
            ? ("consultation" as const)
            : ("send" as const),
      })),
    [t],
  );

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, streamingMessageId, scrollToBottom]);

  useEffect(() => {
    if (isOpen && !hasWelcomed) {
      setMessages([
        {
          id: WELCOME_MESSAGE_ID,
          role: "assistant",
          content: t("welcome"),
        },
      ]);
      setHasWelcomed(true);
    }
  }, [isOpen, hasWelcomed, t]);

  useEffect(() => {
    if (isOpen) {
      const timer = window.setTimeout(() => inputRef.current?.focus(), 150);
      return () => window.clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSmartHandoff = useCallback(() => {
    const apiMessages = toApiMessages(messages);
    const handoff = buildIdaHandoffPrefill(apiMessages, locale);

    setIsOpen(false);
    openConsultation("general", {
      source: "ida_chat_handoff",
      prefill: {
        topic: handoff.topic,
        description: handoff.description,
      },
    });
  }, [locale, messages, openConsultation]);

  const sendMessage = async (rawText: string) => {
    const text = rawText.trim();
    if (!text || isLoading) return;

    if (text.length > IDA_CONFIG.maxMessageLength) {
      setError(t("errors.tooLong"));
      return;
    }

    setError(null);

    const userMessage: IdaMessage = {
      id: createMessageId(),
      role: "user",
      content: text,
    };

    const nextMessages = [...messages, userMessage];
    const streamId = createMessageId();
    const streamingPlaceholder: IdaMessage = {
      id: streamId,
      role: "assistant",
      content: "",
    };

    setMessages([...nextMessages, streamingPlaceholder]);
    setStreamingMessageId(streamId);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          sessionId: getOrCreateSessionId(),
          messages: toApiMessages(nextMessages),
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as {
          error?: string;
        };

        if (response.status === 429) {
          throw new Error(t("errors.rateLimit"));
        }

        throw new Error(data.error ?? t("errors.generic"));
      }

      const contentType = response.headers.get("content-type") ?? "";

      if (!contentType.includes("text/event-stream")) {
        throw new Error(t("errors.generic"));
      }

      await consumeIdaSseStream(response, (token) => {
        setMessages((prev) =>
          prev.map((message) =>
            message.id === streamId
              ? { ...message, content: message.content + token }
              : message,
          ),
        );
      });
    } catch (err) {
      setMessages((prev) => prev.filter((message) => message.id !== streamId));

      const message = err instanceof Error ? err.message : t("errors.generic");
      setError(message);
    } finally {
      setStreamingMessageId(null);
      setIsLoading(false);
    }
  };

  const handleQuickReply = (reply: {
    key: QuickReplyKey;
    message: string;
    action: "send" | "consultation";
  }) => {
    if (reply.action === "consultation") {
      handleSmartHandoff();
      return;
    }

    void sendMessage(reply.message);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(input);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={cn(
            "ida-chat-window fixed z-50 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-2xl shadow-black/60",
            "inset-x-4 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] h-[min(70dvh,520px)]",
            "sm:inset-x-auto sm:bottom-24 sm:right-5 sm:h-[min(72dvh,560px)] sm:w-[min(100vw-2rem,400px)]",
          )}
          role="dialog"
          aria-label={t("windowLabel")}
        >
          <header className="flex items-start justify-between gap-3 border-b border-white/10 bg-black/40 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/15 ring-1 ring-gold/30">
                <Sparkles className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight text-white">
                  {IDA_CONFIG.name}
                </p>
                <p className="text-[11px] text-white/50">{t("subtitle")}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-xl text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label={t("close")}
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div className="border-b border-white/10 px-4 py-2.5">
            <Button
              size="sm"
              className="h-8 w-full text-xs"
              onClick={handleSmartHandoff}
            >
              {t("startConsultation")}
            </Button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <IdaMessageBubble
                key={message.id}
                message={message}
                isStreaming={message.id === streamingMessageId}
              />
            ))}
            {isLoading && !streamingMessageId && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-white/10 bg-black/50 px-4 py-2">
                  <Loader2 className="h-4 w-4 animate-spin text-gold" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {error && (
            <p className="px-4 pb-2 text-center text-xs text-red-400/90">
              {error}
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="border-t border-white/10 bg-black/30 p-3"
          >
            <div className="mb-2 flex flex-wrap gap-1.5">
              {quickReplies.map((reply) => (
                <button
                  key={reply.key}
                  type="button"
                  disabled={isLoading}
                  onClick={() => handleQuickReply(reply)}
                  className={cn(
                    "rounded-full border px-2.5 py-1 text-[10px] transition-colors",
                    reply.action === "consultation"
                      ? "border-gold/40 bg-gold/10 text-gold hover:bg-gold/20"
                      : "border-white/15 bg-white/5 text-white/70 hover:border-white/25 hover:text-white",
                    isLoading && "pointer-events-none opacity-50",
                  )}
                >
                  {reply.label}
                </button>
              ))}
            </div>

            <div className="flex items-end gap-2">
              <label htmlFor={inputId} className="sr-only">
                {t("inputLabel")}
              </label>
              <textarea
                id={inputId}
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t("inputPlaceholder")}
                rows={1}
                disabled={isLoading}
                className="max-h-24 min-h-10 flex-1 resize-none rounded-2xl border border-white/15 bg-black px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus-visible:border-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/30 disabled:opacity-50"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                aria-label={t("send")}
                className="h-10 w-10 shrink-0"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="mt-2 text-center text-[10px] text-white/30">
              {t("disclaimer")}
            </p>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? t("close") : t("open")}
        aria-expanded={isOpen}
        className={cn(
          "ida-chat-fab fixed z-50 flex h-14 w-14 items-center justify-center rounded-full transition-all hover:scale-105",
          "bottom-[calc(5rem+env(safe-area-inset-bottom))] right-5 sm:bottom-6",
          isOpen
            ? "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15"
            : "bg-gold text-background shadow-lg shadow-gold/20 hover:bg-gold-dark",
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-7 w-7" />
        )}
      </button>
    </>
  );
}