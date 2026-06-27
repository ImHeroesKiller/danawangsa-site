import type { Locale } from "@/i18n/routing";
import { isSupabaseConfigured } from "@/lib/supabase/admin";
import { IDA_CONFIG } from "@/lib/ida/config";

import { searchIdaChunks } from "./vector-store";
import type { IdaRetrievedChunk } from "./types";

export function formatRetrievedContext(chunks: IdaRetrievedChunk[]): string {
  if (chunks.length === 0) {
    return "Tidak ada dokumen relevan ditemukan di knowledge base.";
  }

  return chunks
    .map((chunk, index) => {
      return `[${index + 1}] (${chunk.sourceType} | ${chunk.pageSlug} | ${chunk.section} | relevansi: ${(chunk.similarity * 100).toFixed(0)}%)
${chunk.content}`;
    })
    .join("\n\n");
}

/** Retrieve relevant knowledge base chunks for a user query */
export async function retrieveIdaContext(options: {
  query: string;
  locale: Locale;
}): Promise<{ chunks: IdaRetrievedChunk[]; context: string }> {
  if (!isSupabaseConfigured()) {
    return { chunks: [], context: "" };
  }

  try {
    const chunks = await searchIdaChunks({
      query: options.query,
      locale: options.locale,
      matchCount: IDA_CONFIG.retrievalTopK,
      matchThreshold: IDA_CONFIG.retrievalThreshold,
    });

    return {
      chunks,
      context: formatRetrievedContext(chunks),
    };
  } catch (error) {
    console.error("[IDA retrieval]", error);
    return { chunks: [], context: "" };
  }
}