import { NextResponse } from "next/server";
import { z } from "zod";

import { locales } from "@/i18n/routing";
import { handleIdaChat } from "@/lib/ida/chat-handler";
import { IDA_CONFIG } from "@/lib/ida/config";
import type { IdaChatResponse, IdaChatErrorResponse } from "@/types/ida";

const chatRequestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z
          .string()
          .min(1)
          .max(IDA_CONFIG.maxMessageLength),
      }),
    )
    .min(1)
    .max(IDA_CONFIG.maxMessages),
  locale: z.enum(locales),
  sessionId: z.string().min(8).max(64).optional(),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json<IdaChatErrorResponse>(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = chatRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json<IdaChatErrorResponse>(
      { error: "Invalid chat payload." },
      { status: 400 },
    );
  }

  const { messages, locale, sessionId } = parsed.data;

  try {
    const result = await handleIdaChat({ messages, locale, sessionId });

    return NextResponse.json<IdaChatResponse>({
      message: result.message,
      meta: {
        retrievedChunks: result.retrievedChunks,
        usedRag: result.usedRag,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error && error.message === "Chat service is not configured."
        ? "Chat service is not configured."
        : "Failed to generate response.";

    const status =
      error instanceof Error && error.message === "Chat service is not configured."
        ? 503
        : 500;

    console.error("[IDA chat]", error);

    return NextResponse.json<IdaChatErrorResponse>({ error: message }, { status });
  }
}