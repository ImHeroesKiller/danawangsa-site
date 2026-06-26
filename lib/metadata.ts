import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

/** Open Graph image — replace public/og-image.png to update share preview */
export const OG_IMAGE = {
  path: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
} as const;

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

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  imageAlt?: string;
  noIndex?: boolean;
}

/** Shared metadata factory for all pages */
export function createPageMetadata({
  title,
  description,
  path = "/",
  imageAlt,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = getAbsoluteUrl(path);
  const fullTitle =
    path === "/" ? `${siteConfig.name} • ${siteConfig.tagline}` : title;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "id_ID",
      type: "website",
      images: buildOgImages(imageAlt),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.path],
    },
    keywords: [
      "konsultasi bisnis",
      "konsultasi keuangan",
      "strategic advisory",
      "danawangsa capital",
      "restrukturisasi kredit",
      "bridging strategy",
    ],
  };
}

/** Default homepage / root layout metadata */
export const rootMetadata: Metadata = createPageMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
  imageAlt: OG_IMAGE.alt,
});