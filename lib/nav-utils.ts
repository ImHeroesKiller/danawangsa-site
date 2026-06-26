import type { NavLinkKey } from "@/lib/data/navigation";

/** Strip locale prefix from pathname for active-state checks */
export function stripLocalePrefix(pathname: string): string {
  const match = pathname.match(/^\/(id|en|zh)(\/|$)/);
  if (!match) return pathname;

  const rest = pathname.slice(match[0].length - 1);
  return rest || "/";
}

/** Determines whether a main nav link should show the active state */
export function isMainNavLinkActive(
  pathname: string,
  key: NavLinkKey,
  href: string,
): boolean {
  const path = stripLocalePrefix(pathname);

  switch (key) {
    case "home":
      return path === "/";
    case "services":
      return path.startsWith("/layanan");
    case "process":
      return path === "/layanan";
    case "testimonials":
      return path === "/";
    default:
      return path === href || path.startsWith(`${href}/`);
  }
}

export function isLegalNavLinkActive(pathname: string, href: string): boolean {
  const path = stripLocalePrefix(pathname);
  const normalizedHref = href.startsWith("/") ? href : `/${href}`;
  return path === normalizedHref;
}