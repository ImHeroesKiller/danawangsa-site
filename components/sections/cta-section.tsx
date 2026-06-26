"use client";

import { Building2, Mail, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { useConsultation } from "@/components/consultation/consultation-context";
import { RiskReversal } from "@/components/shared/risk-reversal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";

export function CtaSection() {
  const { openConsultation } = useConsultation();
  const t = useTranslations("ctaSection");
  const tCommon = useTranslations("common");

  return (
    <section id="cta-section" className="border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-6">
        <Badge className="mb-5 tracking-[2px]">{t("badge")}</Badge>
        <h2 className="mb-3 text-4xl font-semibold tracking-tighter sm:text-5xl">
          {t("titleLine1")}
          <br />
          {t("titleLine2")}
        </h2>
        <p className="mx-auto mb-8 max-w-md text-lg text-white/70">
          {t("description")}
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            onClick={() =>
              openConsultation("general", {
                trackPrimaryCta: true,
                source: "cta_section",
              })
            }
          >
            {tCommon("ctaLabel")}
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href={getWhatsAppUrl(tCommon("whatsappMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2"
            >
              <MessageCircle className="h-5 w-5 text-emerald-400" />
              {t("chatWhatsApp")}
            </a>
          </Button>
        </div>

        <RiskReversal className="mt-6" />

        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/50">
          <span className="inline-flex items-center gap-1">
            <Phone className="h-3.5 w-3.5 text-gold" />
            {siteConfig.phone}
          </span>
          <span className="inline-flex items-center gap-1">
            <Mail className="h-3.5 w-3.5 text-gold" />
            {siteConfig.email}
          </span>
          <span className="inline-flex items-center gap-1">
            <Building2 className="h-3.5 w-3.5 text-gold" />
            {t("strategicAdvisory")}
          </span>
        </div>
      </div>
    </section>
  );
}