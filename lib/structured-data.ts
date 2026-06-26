import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { getAbsoluteUrl } from "@/lib/metadata";
import { getOrganizationSameAs, siteConfig } from "@/lib/site-config";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** Organization schema — site-wide */
export function buildOrganizationSchema(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: getAbsoluteUrl(`/${locale}`),
    logo: getAbsoluteUrl("/logo.png"),
    description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${siteConfig.phoneRaw}`,
      email: siteConfig.email,
      contactType: "customer service",
      availableLanguage: routing.locales.map((l) =>
        l === "id" ? "Indonesian" : l === "en" ? "English" : "Chinese",
      ),
    },
    sameAs: getOrganizationSameAs(),
  };
}

/** WebSite schema with locale entry points */
export function buildWebSiteSchema(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: getAbsoluteUrl(`/${locale}`),
    description,
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

/** Service detail page schema */
export function buildServiceSchema(options: {
  locale: Locale;
  name: string;
  description: string;
  slug: string;
}) {
  const { locale, name, description, slug } = options;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: getAbsoluteUrl(`/${locale}/layanan/${slug}`),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: getAbsoluteUrl(`/${locale}`),
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    serviceType: "Business & Financial Advisory",
  };
}

/** BreadcrumbList schema */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  };
}

/** Services listing page */
export function buildServicesListSchema(
  locale: Locale,
  services: { name: string; description: string; slug: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Consulting Services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: getAbsoluteUrl(`/${locale}/layanan/${service.slug}`),
      },
    })),
  };
}