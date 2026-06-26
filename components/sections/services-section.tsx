"use client";

import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/i18n/navigation";
import { getServiceDetailPath, getServices } from "@/lib/data/services";
import type { Locale } from "@/i18n/routing";

/** Concise services overview — detail pages hold full process, fee, and FAQ */
export function ServicesSection() {
  const locale = useLocale() as Locale;
  const t = useTranslations("servicesSection");
  const services = getServices(locale);

  return (
    <section
      id="solutions"
      className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-16 pt-4 sm:px-6"
    >
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        showDivider
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const detailPath = getServiceDetailPath(service.slug);

          return (
            <article
              key={service.slug}
              className="premium-card flex flex-col rounded-3xl p-7 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="text-xs font-medium tracking-wider text-gold">
                  {service.listing.category}
                </p>
                {service.listing.badge && (
                  <Badge variant="amber">{service.listing.badge}</Badge>
                )}
              </div>

              <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                {service.listing.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                {service.listing.description}
              </p>

              <ul className="mt-4 space-y-1.5 text-xs text-white/55">
                {service.teaser.benefitBullets.map((benefit) => (
                  <li key={benefit}>• {benefit}</li>
                ))}
              </ul>

              <Button className="mt-6 w-full sm:w-auto" asChild>
                <Link
                  href={detailPath}
                  className="inline-flex items-center gap-2"
                >
                  {t("viewDetail")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </article>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" asChild>
          <Link href="/layanan" className="inline-flex items-center gap-2">
            {t("viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}