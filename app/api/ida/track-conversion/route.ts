import { NextResponse } from "next/server";
import { z } from "zod";

import { markSessionConverted } from "@/lib/ida/analytics/log-conversation";

const schema = z.object({
  sessionId: z.string().min(8).max(64),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid session ID." }, { status: 400 });
  }

  await markSessionConverted(parsed.data.sessionId);

  return NextResponse.json({ success: true });
}