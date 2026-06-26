import type { NavLink } from "@/types";

/** Determines whether a main nav link should show the active state */
export function isMainNavLinkActive(pathname: string, link: NavLink): boolean {
  switch (link.label) {
    case "Beranda":
      return pathname === "/";
    case "Layanan":
      return pathname.startsWith("/layanan");
    case "Proses Kerja":
      return pathname === "/layanan";
    case "Testimoni":
      return pathname === "/";
    default:
      return pathname === link.href || pathname.startsWith(`${link.href}/`);
  }
}

export function isLegalNavLinkActive(pathname: string, href: string): boolean {
  return pathname === href;
}