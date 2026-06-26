import { setRequestLocale } from "next-intl/server";

import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { getTermsContent } from "@/lib/data/legal";
import { createPageMetadata } from "@/lib/metadata";
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

  return <LegalPageShell content={content} />;
}