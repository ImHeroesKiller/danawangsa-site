import { GoogleGenerativeAI } from "@google/generative-ai";

import { IDA_CONFIG } from "@/lib/ida/config";

export const EMBEDDING_DIMENSIONS = 768;

export function getGeminiApiKey(): string | undefined {
  return process.env.GEMINI_API_KEY;
}

/** Generate embedding vector using Google text-embedding-004 */
export async function embedText(text: string): Promise<number[]> {
  const apiKey = getGeminiApiKey();

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: IDA_CONFIG.embeddingModel });

  const result = await model.embedContent(text);
  const values = result.embedding.values;

  if (!values?.length) {
    throw new Error("Empty embedding returned from model.");
  }

  if (values.length !== EMBEDDING_DIMENSIONS) {
    throw new Error(
      `Unexpected embedding dimensions: ${values.length} (expected ${EMBEDDING_DIMENSIONS}).`,
    );
  }

  return values;
}

export async function embedTexts(texts: string[]): Promise<number[][]> {
  const embeddings: number[][] = [];

  for (const text of texts) {
    embeddings.push(await embedText(text));
  }

  return embeddings;
}