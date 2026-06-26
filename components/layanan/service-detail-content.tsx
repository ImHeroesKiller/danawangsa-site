"use client";

import {
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
import { ServiceNav } from "@/components/layanan/service-nav";
import { RiskReversal } from "@/components/shared/risk-reversal";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import type { ServiceIconKey, ServicePageData } from "@/types/service";

const SERVICE_ICONS: Record<ServiceIconKey, LucideIcon> = {
  wallet: Wallet,
  zap: Zap,
  "trending-up": TrendingUp,
  bolt: Bolt,
  clock: Clock,
  shield: Shield,
};

interface ServiceDetailContentProps {
  service: ServicePageData;
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const { openConsultation } = useConsultation();

  return (
    <div className="pb-16">
      <section className="border-b border-white/10 bg-surface">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
          <ServiceNav currentLabel={service.navLabel} />

          <div className="mt-10 text-center">
            <Badge
              variant={service.hero.badge.variant ?? "default"}
              className="mb-5"
            >
              {service.hero.badge.label}
            </Badge>
            <h1 className="heading-serif text-3xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-[56px]">
              {service.hero.title}
              <br />
              <span className="text-gold">{service.hero.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {service.hero.description}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-gold">
              {service.hero.positioning}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={() =>
                  openConsultation(service.consultationModalType)
                }
              >
                {siteConfig.ctaLabel}
              </Button>
              {service.hero.secondaryCta && (
                <Button variant="outline" size="lg" asChild>
                  <Link href={service.hero.secondaryCta.href}>
                    {service.hero.secondaryCta.label}
                  </Link>
                </Button>
              )}
            </div>
            <RiskReversal className="mt-4" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6">
        <SectionHeader
          eyebrow={service.masalah.eyebrow}
          title={service.masalah.title}
          description={service.masalah.description}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {service.masalah.items.map((problem) => (
            <article
              key={problem.title}
              className="rounded-3xl border border-white/10 bg-surface p-6"
            >
              <h3 className="mb-2 font-semibold text-gold">{problem.title}</h3>
              <p className="text-sm leading-relaxed text-white/65">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-surface py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <SectionHeader
            eyebrow={service.solusi.eyebrow}
            title={service.solusi.title}
            description={service.solusi.description}
          />
          <ul className="space-y-3">
            {service.solusi.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-background px-5 py-4 text-sm text-white/75"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Button
              onClick={() =>
                openConsultation(service.consultationModalType)
              }
            >
              {service.solusi.ctaLabel ?? "Diskusikan Kasus Anda"}
            </Button>
            <RiskReversal className="mt-3" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6">
        <SectionHeader
          eyebrow={service.manfaat.eyebrow}
          title={service.manfaat.title}
          description={service.manfaat.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {service.manfaat.items.map((benefit) => {
            const Icon = SERVICE_ICONS[benefit.icon];
            return (
              <article
                key={benefit.title}
                className="premium-card rounded-3xl p-6 text-center"
              >
                <div className="value-icon mx-auto mb-4">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                <p className="text-sm text-white/65">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/10 bg-surface py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <SectionHeader
            eyebrow={service.proses.eyebrow}
            title={service.proses.title}
            description={service.proses.description}
          />
          <div className="space-y-4">
            {service.proses.items.map((step) => (
              <article
                key={step.step}
                className="rounded-3xl border border-white/10 bg-background p-6 sm:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                  <div className="step-number flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                    <p className="mb-3 text-sm leading-relaxed text-white/65">
                      {step.description}
                    </p>
                    <p className="text-xs text-gold/80">
                      <span className="font-semibold text-gold">
                        Deliverable:
                      </span>{" "}
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6">
        <SectionHeader
          eyebrow={service.strukturFee.eyebrow}
          title={service.strukturFee.title}
          description={service.strukturFee.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {service.strukturFee.items.map((fee) => (
            <article
              key={fee.id}
              className={`fee-card rounded-3xl p-6 ${
                fee.highlighted ? "border-gold/30" : ""
              }`}
            >
              <h3 className="mb-2 font-semibold text-gold">{fee.title}</h3>
              <p className="mb-2 text-2xl font-semibold">{fee.amount}</p>
              <p className="text-sm leading-relaxed text-white/65">
                {fee.description}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 flex items-start gap-2 text-xs text-white/45">
          <Shield className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
          {service.strukturFee.footnote}
        </p>
      </section>

      <section className="border-y border-white/10 bg-surface py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <SectionHeader
            eyebrow={service.cocokUntuk.eyebrow}
            title={service.cocokUntuk.title}
            description={service.cocokUntuk.description}
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {service.cocokUntuk.items.map((target) => (
              <div
                key={target}
                className="rounded-2xl border border-white/10 bg-background px-4 py-3 text-sm text-white/75"
              >
                {target}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-6">
        <SectionHeader
          eyebrow={service.faq.eyebrow}
          title={service.faq.title}
          description={service.faq.description}
        />
        <Accordion type="single" collapsible className="space-y-3">
          {service.faq.items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-6">
          {service.cta.badge && (
            <Badge
              variant={service.cta.badge.variant ?? "default"}
              className="mb-5"
            >
              {service.cta.badge.label}
            </Badge>
          )}
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {service.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            {service.cta.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={() =>
                openConsultation(service.consultationModalType)
              }
            >
              {siteConfig.ctaLabel}
            </Button>
            {service.cta.secondaryCta && (
              <Button variant="outline" size="lg" asChild>
                <Link href={service.cta.secondaryCta.href}>
                  {service.cta.secondaryCta.label}
                </Link>
              </Button>
            )}
          </div>
          <RiskReversal className="mt-6" />
          {service.cta.footnote && (
            <p className="mt-4 text-[10px] text-white/40">
              {service.cta.footnote}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}