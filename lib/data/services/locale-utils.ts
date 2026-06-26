import type { Locale } from "@/i18n/routing";
import type { ServiceCtaLink, ServicePageData } from "@/types/service";

/** Prefix an internal path with the locale segment for canonical URLs and metadata. */
export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/")) {
    return href;
  }

  const [pathname, ...hashParts] = href.split("#");
  const hash = hashParts.length > 0 ? `#${hashParts.join("#")}` : "";
  const normalized = pathname.replace(/^\/(id|en|zh)(?=\/|$)/, "") || "/";

  return `/${locale}${normalized === "/" ? "" : normalized}${hash}`;
}

function normalizeInternalHref(href: string): string {
  if (!href.startsWith("/")) {
    return href;
  }

  const [pathname, ...hashParts] = href.split("#");
  const hash = hashParts.length > 0 ? `#${hashParts.join("#")}` : "";
  const normalized = pathname.replace(/^\/(id|en|zh)(?=\/|$)/, "") || "/";

  return `${normalized}${hash}`;
}

function normalizeCtaLink(link: ServiceCtaLink): ServiceCtaLink {
  return {
    ...link,
    href: normalizeInternalHref(link.href),
  };
}

/** Normalize service paths for next-intl navigation (locale prefix added by Link). */
export function applyLocaleToService(service: ServicePageData): ServicePageData {
  return {
    ...service,
    path: `/layanan/${service.slug}`,
    hero: {
      ...service.hero,
      secondaryCta: service.hero.secondaryCta
        ? normalizeCtaLink(service.hero.secondaryCta)
        : undefined,
    },
    cta: {
      ...service.cta,
      secondaryCta: service.cta.secondaryCta
        ? normalizeCtaLink(service.cta.secondaryCta)
        : undefined,
    },
  };
}