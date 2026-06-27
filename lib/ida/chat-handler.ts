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

export interface IdaChatHandlerInput {
  messages: ConversationMessage[];
  locale: Locale;
  sessionId?: string;
}

export interface IdaChatHandlerResult {
  message: string;
  retrievedChunks: number;
  usedRag: boolean;
}

export async function handleIdaChat(
  input: IdaChatHandlerInput,
): Promise<IdaChatHandlerResult> {
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

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: IDA_CONFIG.model,
    systemInstruction,
  });

  const history = messages.slice(0, -1).map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content }],
  }));

  const chat = model.startChat({ history });
  const result = await chat.sendMessage(lastMessage.content);
  const text = result.response.text().trim();

  if (!text) {
    throw new Error("Empty response from model.");
  }

  if (sessionId) {
    const updatedMessages: ConversationMessage[] = [
      ...messages,
      { role: "assistant", content: text },
    ];

    void persistSessionMessages({
      sessionId,
      locale,
      messages: updatedMessages,
    });
  }

  return {
    message: text,
    retrievedChunks: retrieval.chunks.length,
    usedRag: retrieval.chunks.length > 0,
  };
}