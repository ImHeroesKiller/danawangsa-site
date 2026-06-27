import { NextResponse } from "next/server";

import {
  requireAdminApi,
  verifyAdminSessionToken,
  verifyReindexSecret,
} from "@/lib/admin/auth";
import {
  completeReindexJob,
  createReindexJob,
  failReindexJob,
  getLatestReindexJobs,
} from "@/lib/admin/reindex-jobs";
import { runIdaReindex } from "@/lib/ida/rag/index-knowledge";
import { isSupabaseConfigured } from "@/lib/supabase/admin";
import { cookies } from "next/headers";

export const maxDuration = 300;

async function isAuthorized(request: Request): Promise<boolean> {
  if (verifyReindexSecret(request)) return true;

  const cookieStore = await cookies();
  return verifyAdminSessionToken(cookieStore.get("ida_admin_session")?.value);
}

export async function POST(request: Request) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { error: "Supabase is not configured." },
      { status: 503 },
    );
  }

  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY is not configured." },
      { status: 503 },
    );
  }

  if (!(await isAuthorized(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const triggeredBy = verifyReindexSecret(request) ? "api_secret" : "admin_panel";
  let jobId: string | null = null;

  try {
    jobId = await createReindexJob(triggeredBy);
    const result = await runIdaReindex();
    await completeReindexJob(jobId, result.chunks);

    return NextResponse.json({
      success: true,
      jobId,
      ...result,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Reindex failed.";

    if (jobId) {
      await failReindexJob(jobId, message);
    }

    console.error("[IDA reindex]", error);

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  if (!isSupabaseConfigured()) {
    return NextResponse.json({ jobs: [] });
  }

  const jobs = await getLatestReindexJobs();

  return NextResponse.json({ jobs });
}