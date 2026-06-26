import { ArrowRight, FileText } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ServiceNav } from "@/components/layanan/service-nav";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { Link } from "@/lib/i18n/navigation";
import { getServiceDetailPath, getServices } from "@/lib/data/services";
import { createPageMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbSchema,
  buildServicesListSchema,
} from "@/lib/structured-data";
import { siteConfig } from "@/lib/site-config";
import type { Locale } from "@/i18n/routing";

type LayananPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LayananPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.layanan" });

  return createPageMetadata({
    locale: locale as Locale,
    title: `${t("title")} • ${siteConfig.name}`,
    description: t("description"),
    path: `/${locale}/layanan`,
    imageAlt: t("imageAlt"),
    keywords: t.raw("keywords") as string[],
  });
}

export default async function LayananPage({ params }: LayananPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("layanan");
  const tBreadcrumb = await getTranslations("breadcrumb");
  const services = getServices(locale as Locale);
  const localeKey = locale as Locale;

  const structuredData = [
    buildBreadcrumbSchema([
      { name: tBreadcrumb("home"), path: `/${localeKey}` },
      { name: tBreadcrumb("services"), path: `/${localeKey}/layanan` },
    ]),
    buildServicesListSchema(
      localeKey,
      services.map((service) => ({
        name: service.listing.title,
        description: service.listing.description,
        slug: service.slug,
      })),
    ),
  ];

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <JsonLd data={structuredData} />
      <Breadcrumb
        items={[
          { label: tBreadcrumb("home"), href: "/" },
          { label: tBreadcrumb("services") },
        ]}
      />
      <ServiceNav />

      <header className="mt-10 text-center">
        <Badge className="mb-4">{t("badge")}</Badge>
        <h1 className="heading-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-white/65">{t("description")}</p>
      </header>

      <div className="mt-12 space-y-5">
        {services.map((service) => (
          <article
            key={service.slug}
            className="premium-card rounded-3xl p-7 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium tracking-wider text-gold">
                  {service.listing.category}
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  {service.listing.title}
                </h2>
              </div>
              {service.listing.badge && (
                <Badge variant="amber">{service.listing.badge}</Badge>
              )}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              {service.listing.description}
            </p>
            <Button className="mt-6" asChild>
              <Link
                href={getServiceDetailPath(service.slug)}
                className="inline-flex items-center gap-2"
              >
                {t("viewDetail")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </article>
        ))}
      </div>

      <section
        id="proses"
        className="mt-16 scroll-mt-24 border-t border-white/10 pt-14"
      >
        <SectionHeader
          eyebrow={t("process.eyebrow")}
          title={t("process.title")}
          description={t("process.description")}
          showDivider
        />
        <div className="mt-8 space-y-4">
          {(t.raw("process.steps") as { step: string; title: string; description: string }[]).map(
            (step) => (
              <article
                key={step.step}
                className="rounded-3xl border border-white/10 bg-surface p-6 sm:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                  <div className="step-number flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-white/65">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      <div className="mt-10 rounded-3xl border border-white/10 bg-surface p-6 text-center text-sm text-white/55">
        <FileText className="mx-auto mb-3 h-6 w-6 text-gold/60" />
        {t("moreServicesPrefix")}{" "}
        <Link href="/#solutions" className="text-gold hover:underline">
          {t("moreServicesLink")}
        </Link>
        .
      </div>
    </div>
  );
}