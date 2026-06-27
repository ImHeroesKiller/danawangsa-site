import { loadAllIdaSourceDocuments } from "./document-loader";
import { splitIdaDocuments } from "./text-splitter";
import { clearIdaChunks, upsertIdaChunks } from "./vector-store";

export interface IdaReindexResult {
  sourceDocuments: number;
  chunks: number;
  byLocale: Record<string, number>;
  byType: Record<string, number>;
}

/** Index (or re-index) the full IDA knowledge base into Supabase */
export async function runIdaReindex(): Promise<IdaReindexResult> {
  const sourceDocuments = loadAllIdaSourceDocuments();
  const chunks = await splitIdaDocuments(sourceDocuments);

  const byLocale = chunks.reduce<Record<string, number>>((acc, chunk) => {
    acc[chunk.locale] = (acc[chunk.locale] ?? 0) + 1;
    return acc;
  }, {});

  const byType = chunks.reduce<Record<string, number>>((acc, chunk) => {
    acc[chunk.sourceType] = (acc[chunk.sourceType] ?? 0) + 1;
    return acc;
  }, {});

  await clearIdaChunks();
  await upsertIdaChunks(chunks);

  return {
    sourceDocuments: sourceDocuments.length,
    chunks: chunks.length,
    byLocale,
    byType,
  };
}