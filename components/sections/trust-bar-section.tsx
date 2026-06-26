"use client";

import { useLocale, useTranslations } from "next-intl";

import { TrustStatItem } from "@/components/shared/trust-stat-item";
import { getTrustStats } from "@/lib/data/content";
import type { Locale } from "@/i18n/routing";

export function TrustBarSection() {
  const locale = useLocale() as Locale;
  const t = useTranslations("trustBar");
  const stats = getTrustStats(locale, {
    experience: t("experience"),
    casesHandled: t("casesHandled"),
    initialAnalysis: t("initialAnalysis"),
    transparentFee: t("transparentFee"),
  });

  return (
    <section className="mx-auto max-w-5xl px-5 pb-12 sm:px-6">
      <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-surface sm:grid-cols-4">
        {stats.map((stat) => (
          <TrustStatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}