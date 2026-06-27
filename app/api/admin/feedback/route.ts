import { NextResponse } from "next/server";
import { z } from "zod";

import { requireAdminApi } from "@/lib/admin/auth";
import { upsertConversationFeedback } from "@/lib/admin/queries";

const feedbackSchema = z.object({
  sessionId: z.string().min(8).max(64),
  rating: z.enum(["up", "down"]).nullable().optional(),
  needsKbImprovement: z.boolean().optional(),
  adminNotes: z.string().max(2000).optional(),
});

export async function POST(request: Request) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = feedbackSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid feedback payload." }, { status: 400 });
  }

  try {
    await upsertConversationFeedback({
      sessionId: parsed.data.sessionId,
      rating: parsed.data.rating,
      needsKbImprovement: parsed.data.needsKbImprovement,
      adminNotes: parsed.data.adminNotes,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[admin feedback]", error);
    return NextResponse.json(
      { error: "Failed to save feedback." },
      { status: 500 },
    );
  }
}