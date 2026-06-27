/**
 * Index IDA knowledge base into Supabase pgvector.
 *
 * Usage: npm run index:ida
 * Requires: GEMINI_API_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 */
import "dotenv/config";

import { runIdaReindex } from "../lib/ida/rag/index-knowledge";
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

  console.log("Running IDA knowledge re-index...");
  const result = await runIdaReindex();
  console.log(`  ${result.sourceDocuments} source documents loaded.`);
  console.log(`  ${result.chunks} chunks indexed.`);
  console.log("  By locale:", result.byLocale);
  console.log("  By source type:", result.byType);
  console.log("Done.");
}

main().catch((error) => {
  console.error("Indexing failed:", error);
  process.exit(1);
});