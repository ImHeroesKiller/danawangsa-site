import type { MetadataRoute } from "next";

import { routing, type Locale } from "@/i18n/routing";
import { getServices } from "@/lib/data/services";
import { getAbsoluteUrl } from "@/lib/metadata";

const STATIC_PATHS = ["", "/layanan", "/privasi", "/syarat-konsultasi"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const locale of routing.locales) {
    for (const path of STATIC_PATHS) {
      const url = getAbsoluteUrl(path ? `/${locale}${path}` : `/${locale}`);

      entries.push({
        url,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/layanan" ? 0.9 : 0.5,
        alternates: {
          languages: buildAlternateLanguages(path),
        },
      });
    }

    for (const service of getServices(locale as Locale)) {
      const path = `/layanan/${service.slug}`;
      entries.push({
        url: getAbsoluteUrl(`/${locale}${path}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: buildAlternateLanguages(path),
        },
      });
    }
  }

  return entries;
}

function buildAlternateLanguages(pathSuffix: string) {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      getAbsoluteUrl(pathSuffix ? `/${locale}${pathSuffix}` : `/${locale}`),
    ]),
  );

  languages["x-default"] = getAbsoluteUrl(
    pathSuffix ? `/id${pathSuffix}` : "/id",
  );

  return languages;
}