import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { ServiceDetailContent } from "@/components/layanan/service-detail-content";
import { JsonLd } from "@/components/seo/json-ld";
import { routing, type Locale } from "@/i18n/routing";
import {
  getServiceBySlug,
  getServiceCanonicalPath,
  getServices,
} from "@/lib/data/services";
import { getServiceKeywords } from "@/lib/metadata-keywords";
import { createPageMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
} from "@/lib/structured-data";
import { siteConfig } from "@/lib/site-config";

type ServicePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getServices(locale).map((service) => ({
      locale,
      slug: service.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug, locale as Locale);

  if (!service) {
    const t = await getTranslations({ locale, namespace: "layanan.notFound" });
    return { title: `${t("title")} • ${siteConfig.name}` };
  }

  return createPageMetadata({
    locale: locale as Locale,
    title: `${service.meta.title} • ${siteConfig.name}`,
    description: service.meta.description,
    path: getServiceCanonicalPath(slug, locale as Locale),
    imageAlt: `${service.meta.title} — ${siteConfig.name}`,
    keywords: getServiceKeywords(locale as Locale, slug),
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getServiceBySlug(slug, locale as Locale);

  if (!service) {
    notFound();
  }

  const localeKey = locale as Locale;
  const tBreadcrumb = await getTranslations({
    locale,
    namespace: "breadcrumb",
  });

  const structuredData = [
    buildServiceSchema({
      locale: localeKey,
      name: service.meta.title,
      description: service.meta.description,
      slug: service.slug,
    }),
    buildBreadcrumbSchema([
      { name: tBreadcrumb("home"), path: `/${localeKey}` },
      { name: tBreadcrumb("services"), path: `/${localeKey}/layanan` },
      {
        name: service.navLabel,
        path: `/${localeKey}/layanan/${service.slug}`,
      },
    ]),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <ServiceDetailContent service={service} />
    </>
  );
}