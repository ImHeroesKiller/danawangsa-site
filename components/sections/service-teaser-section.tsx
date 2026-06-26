"use client";

import {
  ArrowRight,
  Bolt,
  Check,
  Clock,
  Shield,
  TrendingUp,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

import { useConsultation } from "@/components/consultation/consultation-context";
import { RiskReversal } from "@/components/shared/risk-reversal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import type { ServiceIconKey, ServicePageData } from "@/types/service";

const TEASER_ICONS: Record<ServiceIconKey, LucideIcon> = {
  bolt: Bolt,
  clock: Clock,
  shield: Shield,
  wallet: Wallet,
  zap: Zap,
  "trending-up": TrendingUp,
};

interface ServiceTeaserSectionProps {
  service: ServicePageData;
  sectionId: string;
}

/** Homepage teaser — links to service detail page */
export function ServiceTeaserSection({
  service,
  sectionId,
}: ServiceTeaserSectionProps) {
  const { openConsultation } = useConsultation();
  const { teaser, path, consultationModalType } = service;

  return (
    <section id={sectionId} className="mx-auto max-w-7xl px-5 pb-16 sm:px-6">
      <div className="rounded-3xl border border-gold/30 bg-surface p-8 md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <Badge
              variant={teaser.badge.variant ?? "default"}
              className="mb-4"
            >
              {teaser.badge.label}
            </Badge>

            <h2 className="mb-4 text-3xl font-semibold leading-none tracking-tighter md:text-4xl">
              {teaser.title}
              <br />
              <span className="text-gold">{teaser.titleHighlight}</span>
            </h2>

            <p className="mb-6 text-[15px] text-white/75">{teaser.description}</p>

            <div className="mb-6 flex flex-wrap gap-2">
              {teaser.highlights.map(({ label, icon }) => {
                const Icon = TEASER_ICONS[icon];
                return (
                  <div
                    key={label}
                    className="flex items-center gap-x-2 rounded-2xl bg-white/5 px-4 py-2 text-sm"
                  >
                    <Icon className="h-4 w-4 text-gold" />
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60">
              {teaser.benefitBullets.map((benefit) => (
                <div key={benefit} className="flex items-center gap-x-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="rounded-3xl border border-white/10 bg-background p-6 sm:p-8">
              <p className="mb-2 text-xs tracking-wider text-gold">
                {teaser.card.eyebrow}
              </p>
              <p className="mb-6 text-sm leading-relaxed text-white/65">
                {teaser.card.description}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="w-full sm:flex-1" asChild>
                  <Link
                    href={path}
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Lihat Detail Layanan
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:flex-1"
                  onClick={() =>
                    openConsultation(consultationModalType, {
                      trackPrimaryCta: true,
                      source: "service_teaser",
                    })
                  }
                >
                  {siteConfig.ctaLabel}
                </Button>
              </div>

              <RiskReversal className="mt-4 text-center sm:text-left" />
              <p className="mt-2 text-[10px] text-white/40">
                {teaser.card.footnote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}