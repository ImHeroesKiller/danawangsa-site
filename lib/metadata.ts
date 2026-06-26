import type { Metadata } from "next";

import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";

/** Open Graph image — replace public/og-image.png to update share preview */
export const OG_IMAGE = {
  path: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
} as const;

const OG_LOCALE_MAP: Record<Locale, string> = {
  id: "id_ID",
  en: "en_US",
  zh: "zh_CN",
};

export function getAbsoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

function buildOgImages(alt?: string) {
  return [
    {
      url: OG_IMAGE.path,
      width: OG_IMAGE.width,
      height: OG_IMAGE.height,
      alt: alt ?? OG_IMAGE.alt,
      type: "image/png",
    },
  ];
}

function buildLanguageAlternates(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const segments = normalized.split("/").filter(Boolean);

  let pathWithoutLocale = normalized;
  if (segments.length > 0 && routing.locales.includes(segments[0] as Locale)) {
    pathWithoutLocale = `/${segments.slice(1).join("/")}` || "/";
  }

  const languages = Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      getAbsoluteUrl(
        pathWithoutLocale === "/"
          ? `/${locale}`
          : `/${locale}${pathWithoutLocale}`,
      ),
    ]),
  );

  return { canonical: getAbsoluteUrl(normalized), languages };
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  imageAlt?: string;
  noIndex?: boolean;
  locale?: Locale;
  keywords?: string[];
}

/** Shared metadata factory for all pages */
export function createPageMetadata({
  title,
  description,
  path = "/",
  imageAlt,
  noIndex = false,
  locale = "id",
  keywords,
}: PageMetadataOptions): Metadata {
  const alternates = buildLanguageAlternates(path);
  const isHome =
    path === "/" ||
    path === `/${locale}` ||
    routing.locales.some((l) => path === `/${l}`);

  const fullTitle = isHome
    ? `${siteConfig.name} • ${siteConfig.tagline}`
    : title;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: alternates.canonical,
      siteName: siteConfig.name,
      locale: OG_LOCALE_MAP[locale],
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => OG_LOCALE_MAP[l]),
      type: "website",
      images: buildOgImages(imageAlt),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.path],
    },
    keywords: keywords ?? [
      "konsultasi bisnis",
      "konsultasi keuangan",
      "strategic advisory",
      "danawangsa capital",
      "restrukturisasi kredit",
      "bridging strategy",
    ],
  };
}