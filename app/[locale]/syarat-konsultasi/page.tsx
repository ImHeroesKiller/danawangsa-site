import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { getTermsContent } from "@/lib/data/legal";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site-config";
import type { Locale } from "@/i18n/routing";

type TermsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: TermsPageProps) {
  const { locale } = await params;
  const content = getTermsContent(locale as Locale);

  return createPageMetadata({
    locale: locale as Locale,
    title: `${content.title} • ${siteConfig.name}`,
    description: content.subtitle,
    path: `/${locale}/syarat-konsultasi`,
    imageAlt: `${content.title} — ${siteConfig.name}`,
  });
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = getTermsContent(locale as Locale);
  const localeKey = locale as Locale;
  const tBreadcrumb = await getTranslations({
    locale,
    namespace: "breadcrumb",
  });

  const structuredData = buildBreadcrumbSchema([
    { name: tBreadcrumb("home"), path: `/${localeKey}` },
    { name: tBreadcrumb("terms"), path: `/${localeKey}/syarat-konsultasi` },
  ]);

  return (
    <>
      <JsonLd data={structuredData} />
      <LegalPageShell content={content} />
    </>
  );
}