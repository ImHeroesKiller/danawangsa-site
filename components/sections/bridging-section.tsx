"use client";

import { Check } from "lucide-react";

import { useConsultation } from "@/components/consultation/consultation-context";
import { RiskReversal } from "@/components/shared/risk-reversal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  bridgingBenefits,
  bridgingHighlights,
  bridgingSteps,
  bridgingTargets,
} from "@/lib/data/content";
import { siteConfig } from "@/lib/site-config";

export function BridgingSection() {
  const { openConsultation } = useConsultation();

  return (
    <section id="bridging-loan" className="mx-auto max-w-7xl px-5 pb-16 sm:px-6">
      <div className="rounded-3xl border border-gold/30 bg-surface p-8 md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="lg:w-5/12">
            <Badge variant="amber" className="mb-4">
              SOLUSI STRATEGIS
            </Badge>

            <h2 className="mb-4 text-3xl font-semibold leading-none tracking-tighter md:text-4xl">
              KONSULTASI STRATEGI
              <br />
              <span className="text-gold">Bridging & Restrukturisasi</span>
            </h2>

            <p className="mb-6 text-[15px] text-white/75">
              Butuh solusi cepat untuk mengatasi jatuh tempo pinjaman bank? Kami
              membantu <strong className="text-white/90">merancang strategi</strong>{" "}
              bridging dan restrukturisasi — lalu{" "}
              <strong className="text-white/90">mendampingi</strong> proses
              negosiasi dengan bank melalui jaringan mitra keuangan terpercaya.
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              {bridgingHighlights.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-x-2 rounded-2xl bg-white/5 px-4 py-2 text-sm"
                >
                  <Icon className="h-4 w-4 text-gold" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <Button onClick={() => openConsultation("bridging")}>
              {siteConfig.ctaLabel}
            </Button>
            <p className="mt-3 text-[10px] text-white/50">
              Bukan penyaluran dana langsung • Kami bantu rancang strategi &
              dampingi proses
            </p>
            <RiskReversal className="mt-2 text-[10px]" />
          </div>

          <div className="lg:w-7/12">
            <p className="mb-4 text-sm font-medium tracking-wider text-gold">
              LANGKAH STRATEGI YANG KAMI DAMPINGI
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {bridgingSteps.map((step, index) => (
                <div
                  key={step}
                  className={`flex flex-col items-center text-center ${
                    index === 4 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <div className="step-number mb-3 flex h-8 w-8 items-center justify-center rounded-full">
                    {index + 1}
                  </div>
                  <p className="text-xs font-medium leading-snug">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-xs text-white/60">
              {bridgingBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-x-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="mb-4 text-xs tracking-[2px] text-gold">
            COCOK UNTUK PERUSAHAAN YANG
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3 md:grid-cols-6">
            {bridgingTargets.map((target) => (
              <div
                key={target}
                className="rounded-2xl bg-white/5 px-4 py-3"
              >
                {target}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}