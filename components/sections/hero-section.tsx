"use client";

import { Info } from "lucide-react";
import { useTranslations } from "next-intl";

import { useConsultation } from "@/components/consultation/consultation-context";
import { RiskReversal } from "@/components/shared/risk-reversal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/i18n/navigation";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const { openConsultation } = useConsultation();
  const t = useTranslations("hero");
  const tCommon = useTranslations("common");

  return (
    <section className="mx-auto max-w-5xl px-5 pb-14 pt-16 text-center sm:px-6">
      <div className="mb-5">
        <Badge>{siteConfig.tagline.toUpperCase()}</Badge>
      </div>

      <h1 className="hero-title heading-serif mb-5 text-[52px] font-semibold leading-[0.95] tracking-[-3.8px] sm:text-6xl md:text-[82px]">
        {t("titleLine1")}
        <br />
        {t("titleLine2")}
      </h1>

      <p className="mx-auto mb-4 max-w-xl text-[17px] leading-relaxed text-white/70">
        {t("description")}
      </p>

      <p className="mx-auto mb-9 flex max-w-lg items-center justify-center gap-1 text-sm font-medium text-gold">
        <Info className="h-4 w-4 shrink-0" />
        {t("positioning")}
      </p>

      <div className="flex flex-col justify-center gap-3 px-2 sm:flex-row">
        <Button
          size="lg"
          onClick={() =>
            openConsultation("general", {
              trackPrimaryCta: true,
              source: "hero",
            })
          }
        >
          {tCommon("ctaLabel")}
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="#solutions">{t("ctaSecondary")}</Link>
        </Button>
      </div>

      <RiskReversal className="mt-4" />
    </section>
  );
}