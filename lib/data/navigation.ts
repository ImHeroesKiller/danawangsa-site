import type { Locale } from "@/i18n/routing";
import { getServices } from "@/lib/data/services";
import { getLegalNavLinks } from "@/lib/data/legal";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import type { NavLink } from "@/types";

export type NavLinkKey =
  | "home"
  | "services"
  | "process"
  | "testimonials"
  | "allServices"
  | "contactUs";

interface NavLinkDefinition {
  key: NavLinkKey;
  href: string;
}

/** Primary header navigation — labels resolved via next-intl in components */
export const mainNavLinkDefs: NavLinkDefinition[] = [
  { key: "home", href: "/" },
  { key: "services", href: "/layanan" },
  { key: "process", href: "/layanan" },
  { key: "testimonials", href: "/#testimonials" },
];

export function getFooterServiceLinks(locale: Locale): NavLink[] {
  const services = getServices(locale);

  return [
    ...services.map((service) => ({
      label: service.listing.title,
      href: `/layanan/${service.slug}`,
    })),
    { label: "allServices", href: "/layanan" },
  ];
}

export const footerCompanyLinkDefs: NavLinkDefinition[] = [
  { key: "process", href: "/layanan" },
  { key: "testimonials", href: "/#testimonials" },
  { key: "contactUs", href: "/#cta-section" },
];

export function getFooterLegalLinks(locale: Locale): NavLink[] {
  return getLegalNavLinks(locale).map((link) => ({
    label: link.label,
    href: link.href.replace(`/${locale}`, "") || "/",
  }));
}

export function getFooterContactLinks(): NavLink[] {
  return [
    { label: siteConfig.phone, href: `tel:+${siteConfig.phoneRaw}` },
    { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: "WhatsApp", href: getWhatsAppUrl() },
  ];
}