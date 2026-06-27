"use client";

import { Loader2, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";

import { useConsultation } from "@/components/consultation/consultation-context";
import { Button } from "@/components/ui/button";
import { IDA_CONFIG } from "@/lib/ida/config";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";
import type { IdaMessage } from "@/types/ida";

const WELCOME_MESSAGE_ID = "ida-welcome";
const SESSION_STORAGE_KEY = "ida-session-id";

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

function IdaTypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-1 py-2">
      {[0, 1, 2].map((dot) => (
        <span
          key={dot}
          className="h-2 w-2 animate-bounce rounded-full bg-gold/70"
          style={{ animationDelay: `${dot * 150}ms` }}
        />
      ))}
    </div>
  );
}

interface IdaMessageBubbleProps {
  message: IdaMessage;
}

function IdaMessageBubble({ message }: IdaMessageBubbleProps) {
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
        <p className="whitespace-pre-wrap">{message.content}</p>
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
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [messages, setMessages] = useState<IdaMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

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
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          sessionId: getOrCreateSessionId(),
          messages: nextMessages
            .filter((message) => message.id !== WELCOME_MESSAGE_ID)
            .map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? t("errors.generic"));
      }

      if (!data.message) {
        throw new Error(t("errors.generic"));
      }

      setMessages((prev) => [
        ...prev,
        {
          id: createMessageId(),
          role: "assistant",
          content: data.message!,
        },
      ]);
    } catch (err) {
      const message = err instanceof Error ? err.message : t("errors.generic");
      setError(message);
    } finally {
      setIsLoading(false);
    }
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

  const handleConsultation = () => {
    setIsOpen(false);
    openConsultation("general", { source: "ida_chat" });
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
              onClick={handleConsultation}
            >
              {t("startConsultation")}
            </Button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <IdaMessageBubble key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-white/10 bg-black/50 px-4 py-2">
                  <IdaTypingIndicator />
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