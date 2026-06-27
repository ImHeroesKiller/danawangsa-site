import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const IDA_ADMIN_COOKIE = "ida_admin_session";
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

function getSessionSecret(): string | null {
  return (
    process.env.IDA_ADMIN_SESSION_SECRET ??
    process.env.IDA_ADMIN_PASSWORD ??
    null
  );
}

export function isAdminConfigured(): boolean {
  return Boolean(process.env.IDA_ADMIN_PASSWORD);
}

export function verifyAdminPassword(password: string): boolean {
  const expected = process.env.IDA_ADMIN_PASSWORD;
  if (!expected) return false;

  const a = Buffer.from(password);
  const b = Buffer.from(expected);

  if (a.length !== b.length) return false;

  return timingSafeEqual(a, b);
}

export function createAdminSessionToken(): string | null {
  const secret = getSessionSecret();
  if (!secret) return null;

  const expiresAt = Date.now() + SESSION_TTL_MS;
  const payload = `admin:${expiresAt}`;
  const signature = createHmac("sha256", secret).update(payload).digest("hex");

  return Buffer.from(`${payload}.${signature}`).toString("base64url");
}

export function verifyAdminSessionToken(token: string | undefined): boolean {
  const secret = getSessionSecret();
  if (!secret || !token) return false;

  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const [payload, signature] = decoded.split(".");

    if (!payload || !signature) return false;

    const expectedSignature = createHmac("sha256", secret)
      .update(payload)
      .digest("hex");

    const sigBuffer = Buffer.from(signature, "hex");
    const expectedBuffer = Buffer.from(expectedSignature, "hex");

    if (sigBuffer.length !== expectedBuffer.length) return false;
    if (!timingSafeEqual(sigBuffer, expectedBuffer)) return false;

    const expiresAt = Number(payload.split(":")[1]);
    return Number.isFinite(expiresAt) && Date.now() < expiresAt;
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return verifyAdminSessionToken(cookieStore.get(IDA_ADMIN_COOKIE)?.value);
}

export function verifyReindexSecret(request: Request): boolean {
  const secret = process.env.IDA_REINDEX_SECRET;
  if (!secret) return false;

  const header = request.headers.get("authorization");
  const bearer = header?.startsWith("Bearer ") ? header.slice(7) : null;
  const bodyKey = request.headers.get("x-ida-reindex-key");

  const provided = bearer ?? bodyKey;
  if (!provided) return false;

  const a = Buffer.from(provided);
  const b = Buffer.from(secret);

  if (a.length !== b.length) return false;

  return timingSafeEqual(a, b);
}

export async function requireAdminApi(): Promise<Response | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(IDA_ADMIN_COOKIE)?.value;

  if (!verifyAdminSessionToken(token)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}