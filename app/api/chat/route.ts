import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { z } from "zod";

import { locales } from "@/i18n/routing";
import { IDA_CONFIG } from "@/lib/ida/config";
import { buildIdaSystemPrompt } from "@/lib/ida/system-prompt";
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
});

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json<IdaChatErrorResponse>(
      { error: "Chat service is not configured." },
      { status: 503 },
    );
  }

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

  const { messages, locale } = parsed.data;
  const lastMessage = messages[messages.length - 1];

  if (lastMessage.role !== "user") {
    return NextResponse.json<IdaChatErrorResponse>(
      { error: "Last message must be from the user." },
      { status: 400 },
    );
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: IDA_CONFIG.model,
      systemInstruction: buildIdaSystemPrompt(locale),
    });

    const history = messages.slice(0, -1).map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: message.content }],
    }));

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(lastMessage.content);
    const text = result.response.text().trim();

    if (!text) {
      return NextResponse.json<IdaChatErrorResponse>(
        { error: "Empty response from model." },
        { status: 502 },
      );
    }

    return NextResponse.json<IdaChatResponse>({ message: text });
  } catch (error) {
    console.error("[IDA chat]", error);

    return NextResponse.json<IdaChatErrorResponse>(
      { error: "Failed to generate response." },
      { status: 500 },
    );
  }
}