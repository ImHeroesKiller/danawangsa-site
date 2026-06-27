import type { Locale } from "@/i18n/routing";

export type IdaSourceType = "service" | "faq" | "legal";

export interface IdaSourceDocument {
  content: string;
  locale: Locale;
  pageSlug: string;
  section: string;
  sourceType: IdaSourceType;
  metadata: Record<string, string>;
}

export interface IdaDocumentChunk {
  content: string;
  locale: Locale;
  pageSlug: string;
  section: string;
  sourceType: IdaSourceType;
  metadata: Record<string, string>;
  contentHash: string;
}

export interface IdaRetrievedChunk {
  id: string;
  content: string;
  pageSlug: string;
  section: string;
  sourceType: IdaSourceType;
  similarity: number;
}