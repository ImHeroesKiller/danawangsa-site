import { GoogleGenerativeAI } from "@google/generative-ai";

import type { Locale } from "@/i18n/routing";
import { IDA_CONFIG } from "@/lib/ida/config";

import {
  buildConversationMemoryContext,
  persistSessionMessages,
  type ConversationMessage,
} from "./memory/conversation-memory";
import { retrieveIdaContext } from "./rag/retriever";
import { buildIdaSystemPrompt } from "./system-prompt";
import type { IdaSseMetaPayload } from "./sse";

export interface IdaChatHandlerInput {
  messages: ConversationMessage[];
  locale: Locale;
  sessionId?: string;
}

export interface IdaChatPreparedContext {
  systemInstruction: string;
  history: { role: string; parts: { text: string }[] }[];
  lastUserMessage: string;
  meta: IdaSseMetaPayload;
  sessionMessages: ConversationMessage[];
  locale: Locale;
  sessionId?: string;
}

export async function prepareIdaChatContext(
  input: IdaChatHandlerInput,
): Promise<IdaChatPreparedContext> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Chat service is not configured.");
  }

  const { messages, locale, sessionId } = input;
  const lastMessage = messages[messages.length - 1];

  if (!lastMessage || lastMessage.role !== "user") {
    throw new Error("Last message must be from the user.");
  }

  const [retrieval, memoryContext] = await Promise.all([
    retrieveIdaContext({ query: lastMessage.content, locale }),
    buildConversationMemoryContext(messages),
  ]);

  const systemInstruction = buildIdaSystemPrompt(locale, {
    retrievedContext: retrieval.context,
    conversationMemory: memoryContext,
  });

  const history = messages.slice(0, -1).map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content }],
  }));

  return {
    systemInstruction,
    history,
    lastUserMessage: lastMessage.content,
    meta: {
      retrievedChunks: retrieval.chunks.length,
      usedRag: retrieval.chunks.length > 0,
    },
    sessionMessages: messages,
    locale,
    sessionId,
  };
}

export async function* streamIdaChatResponse(
  context: IdaChatPreparedContext,
): AsyncGenerator<string> {
  const apiKey = process.env.GEMINI_API_KEY!;

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: IDA_CONFIG.model,
    systemInstruction: context.systemInstruction,
  });

  const chat = model.startChat({ history: context.history });
  const result = await chat.sendMessageStream(context.lastUserMessage);

  let fullText = "";

  for await (const chunk of result.stream) {
    const text = chunk.text();

    if (text) {
      fullText += text;
      yield text;
    }
  }

  const finalText = fullText.trim() || (await result.response).text().trim();

  if (!finalText) {
    throw new Error("Empty response from model.");
  }

  if (context.sessionId) {
    const updatedMessages: ConversationMessage[] = [
      ...context.sessionMessages,
      { role: "assistant", content: finalText },
    ];

    void persistSessionMessages({
      sessionId: context.sessionId,
      locale: context.locale,
      messages: updatedMessages,
    });
  }
}

/** Non-streaming fallback — kept for compatibility */
export async function handleIdaChat(
  input: IdaChatHandlerInput,
): Promise<{ message: string; retrievedChunks: number; usedRag: boolean }> {
  const context = await prepareIdaChatContext(input);
  let message = "";

  for await (const token of streamIdaChatResponse(context)) {
    message += token;
  }

  return {
    message: message.trim(),
    retrievedChunks: context.meta.retrievedChunks,
    usedRag: context.meta.usedRag,
  };
}