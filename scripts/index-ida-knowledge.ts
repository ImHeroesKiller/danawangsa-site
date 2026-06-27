/**
 * Index IDA knowledge base into Supabase pgvector.
 *
 * Usage: npm run index:ida
 * Requires: GEMINI_API_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 */
import "dotenv/config";

import { loadAllIdaSourceDocuments } from "../lib/ida/rag/document-loader";
import { splitIdaDocuments } from "../lib/ida/rag/text-splitter";
import { clearIdaChunks, upsertIdaChunks } from "../lib/ida/rag/vector-store";
import { isSupabaseConfigured } from "../lib/supabase/admin";

async function main() {
  if (!process.env.GEMINI_API_KEY) {
    console.error("Missing GEMINI_API_KEY in environment.");
    process.exit(1);
  }

  if (!isSupabaseConfigured()) {
    console.error(
      "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.",
    );
    process.exit(1);
  }

  console.log("Loading source documents...");
  const sourceDocuments = loadAllIdaSourceDocuments();
  console.log(`  ${sourceDocuments.length} source documents loaded.`);

  console.log("Splitting into chunks (LangChain RecursiveCharacterTextSplitter)...");
  const chunks = await splitIdaDocuments(sourceDocuments);
  console.log(`  ${chunks.length} chunks created.`);

  const byLocale = chunks.reduce<Record<string, number>>((acc, chunk) => {
    acc[chunk.locale] = (acc[chunk.locale] ?? 0) + 1;
    return acc;
  }, {});
  console.log("  By locale:", byLocale);

  const byType = chunks.reduce<Record<string, number>>((acc, chunk) => {
    acc[chunk.sourceType] = (acc[chunk.sourceType] ?? 0) + 1;
    return acc;
  }, {});
  console.log("  By source type:", byType);

  console.log("Clearing existing chunks...");
  await clearIdaChunks();

  console.log("Generating embeddings (text-embedding-004) and upserting...");
  const inserted = await upsertIdaChunks(chunks);
  console.log(`Done. ${inserted} chunks indexed in Supabase.`);
}

main().catch((error) => {
  console.error("Indexing failed:", error);
  process.exit(1);
});