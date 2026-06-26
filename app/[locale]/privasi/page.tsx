import { setRequestLocale } from "next-intl/server";

import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { getPrivacyContent } from "@/lib/data/legal";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import type { Locale } from "@/i18n/routing";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const content = getPrivacyContent(locale as Locale);

  return createPageMetadata({
    locale: locale as Locale,
    title: `${content.title} • ${siteConfig.name}`,
    description: content.subtitle,
    path: `/${locale}/privasi`,
    imageAlt: `${content.title} — ${siteConfig.name}`,
  });
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = getPrivacyContent(locale as Locale);

  return <LegalPageShell content={content} />;
}