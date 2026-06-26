import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { ConsultationModal } from "@/components/consultation/consultation-modal";
import { ConsultationProvider } from "@/components/consultation/consultation-context";
import { IdaChat } from "@/components/ida/ida-chat";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { StickyCTA } from "@/components/layout/sticky-cta";
import { RegisterServiceWorker } from "@/components/pwa/register-service-worker";
import { JsonLd } from "@/components/seo/json-ld";
import { routing, type Locale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/structured-data";
import { siteConfig } from "@/lib/site-config";

import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const viewport: Viewport = {
  themeColor: "#d4af37",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "metadata" });

  return createPageMetadata({
    locale: locale as Locale,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: t("siteDescription"),
    path: `/${locale}`,
    imageAlt: t("ogImageAlt"),
    keywords: t.raw("keywords") as string[],
  });
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "metadata" });
  const description = t("siteDescription");

  const structuredData = [
    buildOrganizationSchema(locale as Locale, description),
    buildWebSiteSchema(locale as Locale, description),
  ];

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <GoogleAnalytics />
      <body className="min-h-screen bg-background pb-24 text-white antialiased md:pb-0">
        <JsonLd data={structuredData} />
        <RegisterServiceWorker />
        <NextIntlClientProvider messages={messages}>
          <ConsultationProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <StickyCTA />
            <IdaChat />
            <ConsultationModal />
          </ConsultationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}