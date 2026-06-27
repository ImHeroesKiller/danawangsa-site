import { getSupabaseAdmin } from "@/lib/supabase/admin";

export async function createReindexJob(triggeredBy: string): Promise<string> {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("ida_reindex_jobs")
    .insert({
      status: "running",
      triggered_by: triggeredBy,
      started_at: new Date().toISOString(),
    })
    .select("id")
    .single();

  if (error) throw new Error(error.message);

  return data.id as string;
}

export async function completeReindexJob(
  jobId: string,
  chunksIndexed: number,
): Promise<void> {
  const supabase = getSupabaseAdmin();

  await supabase
    .from("ida_reindex_jobs")
    .update({
      status: "completed",
      chunks_indexed: chunksIndexed,
      completed_at: new Date().toISOString(),
    })
    .eq("id", jobId);
}

export async function failReindexJob(
  jobId: string,
  errorMessage: string,
): Promise<void> {
  const supabase = getSupabaseAdmin();

  await supabase
    .from("ida_reindex_jobs")
    .update({
      status: "failed",
      error_message: errorMessage,
      completed_at: new Date().toISOString(),
    })
    .eq("id", jobId);
}

export async function getLatestReindexJobs(limit = 5) {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("ida_reindex_jobs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw new Error(error.message);

  return data ?? [];
}