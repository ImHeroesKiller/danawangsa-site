import { NextResponse } from "next/server";
import { z } from "zod";

import {
  createAdminSessionToken,
  IDA_ADMIN_COOKIE,
  isAdminConfigured,
  verifyAdminPassword,
} from "@/lib/admin/auth";

const loginSchema = z.object({
  password: z.string().min(1),
});

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "Admin login is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Password is required." }, { status: 400 });
  }

  if (!verifyAdminPassword(parsed.data.password)) {
    return NextResponse.json({ error: "Invalid password." }, { status: 401 });
  }

  const token = createAdminSessionToken();

  if (!token) {
    return NextResponse.json(
      { error: "Failed to create session." },
      { status: 500 },
    );
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set(IDA_ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 12 * 60 * 60,
  });

  return response;
}