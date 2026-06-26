import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";

import { routing, type Locale } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

/** Return 404 for paths that look like unsupported locale codes (e.g. /fr, /de/page) */
function isInvalidLocalePath(pathname: string): boolean {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (!segment || segment.length !== 2) return false;

  return !routing.locales.includes(segment as Locale);
}

export default function middleware(request: NextRequest) {
  if (isInvalidLocalePath(request.nextUrl.pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};