import type { NavLinkKey } from "@/lib/data/navigation";

/** Strip locale prefix from pathname for active-state checks */
export function stripLocalePrefix(pathname: string): string {
  const match = pathname.match(/^\/(id|en|zh)(\/|$)/);
  if (!match) return pathname;

  const rest = pathname.slice(match[0].length - 1);
  return rest || "/";
}

/** Split an internal nav href into path and optional hash segment */
export function parseNavHref(href: string): { path: string; hash: string } {
  const [rawPath, ...hashParts] = href.split("#");
  const path = rawPath || "/";
  const hash = hashParts.length > 0 ? `#${hashParts.join("#")}` : "";

  return { path, hash };
}

/**
 * Determines whether a main nav link should show the active state.
 * Only one item is active at a time — hash-aware for anchor links.
 */
export function isMainNavLinkActive(
  pathname: string,
  key: NavLinkKey,
  href: string,
  currentHash = "",
): boolean {
  const path = stripLocalePrefix(pathname);
  const normalizedHash = currentHash || "";

  switch (key) {
    case "home":
      return path === "/" && normalizedHash !== "#testimonials";
    case "testimonials":
      return path === "/" && normalizedHash === "#testimonials";
    case "services":
      return (
        path.startsWith("/layanan/") ||
        (path === "/layanan" && normalizedHash !== "#proses")
      );
    case "process":
      return path === "/layanan" && normalizedHash === "#proses";
    default:
      return path === href || path.startsWith(`${href}/`);
  }
}

export function isLegalNavLinkActive(pathname: string, href: string): boolean {
  const path = stripLocalePrefix(pathname);
  const normalizedHref = href.startsWith("/") ? href : `/${href}`;
  return path === normalizedHref;
}