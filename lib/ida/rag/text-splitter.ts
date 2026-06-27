import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { createHash } from "crypto";

import type { IdaDocumentChunk, IdaSourceDocument } from "./types";

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 800,
  chunkOverlap: 120,
  separators: ["\n\n", "\n", ". ", " ", ""],
});

function hashContent(parts: string[]): string {
  return createHash("sha256").update(parts.join("|")).digest("hex");
}

/** Split source documents into retrieval-ready chunks with metadata */
export async function splitIdaDocuments(
  documents: IdaSourceDocument[],
): Promise<IdaDocumentChunk[]> {
  const chunks: IdaDocumentChunk[] = [];

  for (const document of documents) {
    const splits = await splitter.splitText(document.content);

    splits.forEach((content, index) => {
      const trimmed = content.trim();
      if (!trimmed) return;

      chunks.push({
        content: trimmed,
        locale: document.locale,
        pageSlug: document.pageSlug,
        section: `${document.section}#${index + 1}`,
        sourceType: document.sourceType,
        metadata: {
          ...document.metadata,
          chunkIndex: String(index + 1),
          totalChunks: String(splits.length),
        },
        contentHash: hashContent([
          document.locale,
          document.pageSlug,
          document.section,
          String(index),
          trimmed,
        ]),
      });
    });
  }

  return chunks;
}