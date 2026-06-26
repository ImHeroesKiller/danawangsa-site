"use client";

import {
  ArrowDown,
  ArrowRight,
  Building2,
  FileText,
  Landmark,
  RefreshCw,
  Wallet,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

interface CollateralPartnershipDiagramProps {
  className?: string;
}

const PARTY_ICONS = {
  assetOwner: Building2,
  investor: Landmark,
  fundUser: Wallet,
} as const;

function FlowLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-gold sm:text-xs",
        className,
      )}
    >
      {children}
    </span>
  );
}

function PartyNode({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: typeof Building2;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="value-icon mb-3 h-14 w-14">
        <Icon className="h-6 w-6 text-gold" aria-hidden />
      </div>
      <h4 className="text-sm font-semibold text-white sm:text-base">{title}</h4>
      <p className="mt-1 max-w-[9rem] text-[11px] leading-snug text-white/50 sm:max-w-[10rem] sm:text-xs">
        {subtitle}
      </p>
    </div>
  );
}

/** Visual diagram for Collateral Partnership Scheme — tripartite structure */
export function CollateralPartnershipDiagram({
  className,
}: CollateralPartnershipDiagramProps) {
  const t = useTranslations("collateralDiagram");

  return (
    <div
      className={cn(
        "rounded-3xl border border-gold/20 bg-background p-5 sm:p-8",
        className,
      )}
      role="img"
      aria-label={t("ariaLabel")}
    >
      <div className="mb-6 text-center sm:mb-8">
        <p className="text-xs font-medium tracking-wider text-gold">
          {t("eyebrow")}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
          {t("title")}
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-xs text-white/55 sm:text-sm">
          {t("subtitle")}
        </p>
      </div>

      {/* Tripartite flow — mobile: vertical, desktop: horizontal */}
      <div className="relative mx-auto max-w-3xl">
        {/* Desktop connector SVG */}
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          viewBox="0 0 600 200"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <marker
              id="arrow-gold"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="#d4af37" fillOpacity="0.7" />
            </marker>
          </defs>
          {/* Asset Owner → Investor (collateral) */}
          <path
            d="M 100 80 Q 200 40 300 80"
            fill="none"
            stroke="#d4af37"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            markerEnd="url(#arrow-gold)"
          />
          {/* Investor → Fund User (funds) */}
          <path
            d="M 340 100 L 500 100"
            fill="none"
            stroke="#d4af37"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            markerEnd="url(#arrow-gold)"
          />
          {/* Fund User → Investor (return) */}
          <path
            d="M 500 120 Q 400 160 300 120"
            fill="none"
            stroke="#d4af37"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            markerEnd="url(#arrow-gold)"
          />
          {/* Asset Owner → Fund User (collateral link) */}
          <path
            d="M 120 100 Q 300 150 480 100"
            fill="none"
            stroke="#d4af37"
            strokeOpacity="0.2"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        </svg>

        {/* Mobile layout */}
        <div className="flex flex-col items-center gap-3 md:hidden">
          <PartyNode
            icon={PARTY_ICONS.assetOwner}
            title={t("parties.assetOwner.title")}
            subtitle={t("parties.assetOwner.subtitle")}
          />
          <FlowLabel>
            <ArrowDown className="h-3 w-3" />
            {t("flows.collateral")}
          </FlowLabel>
          <PartyNode
            icon={PARTY_ICONS.investor}
            title={t("parties.investor.title")}
            subtitle={t("parties.investor.subtitle")}
          />
          <FlowLabel>
            <ArrowDown className="h-3 w-3" />
            {t("flows.funds")}
          </FlowLabel>
          <PartyNode
            icon={PARTY_ICONS.fundUser}
            title={t("parties.fundUser.title")}
            subtitle={t("parties.fundUser.subtitle")}
          />
          <FlowLabel>
            <RefreshCw className="h-3 w-3" />
            {t("flows.return")}
          </FlowLabel>
        </div>

        {/* Desktop layout */}
        <div className="relative hidden grid-cols-3 gap-4 md:grid">
          <div className="flex flex-col items-center pt-2">
            <PartyNode
              icon={PARTY_ICONS.assetOwner}
              title={t("parties.assetOwner.title")}
              subtitle={t("parties.assetOwner.subtitle")}
            />
            <FlowLabel className="mt-4">{t("flows.collateral")}</FlowLabel>
          </div>

          <div className="flex flex-col items-center justify-center">
            <PartyNode
              icon={PARTY_ICONS.investor}
              title={t("parties.investor.title")}
              subtitle={t("parties.investor.subtitle")}
            />
            <div className="mt-4 flex flex-col items-center gap-2">
              <FlowLabel>
                <ArrowRight className="h-3 w-3" />
                {t("flows.funds")}
              </FlowLabel>
              <FlowLabel>
                <RefreshCw className="h-3 w-3" />
                {t("flows.return")}
              </FlowLabel>
            </div>
          </div>

          <div className="flex flex-col items-center pt-2">
            <PartyNode
              icon={PARTY_ICONS.fundUser}
              title={t("parties.fundUser.title")}
              subtitle={t("parties.fundUser.subtitle")}
            />
            <FlowLabel className="mt-4">{t("flows.collateralLink")}</FlowLabel>
          </div>
        </div>
      </div>

      {/* Separate legal contracts */}
      <div className="mt-8 border-t border-white/10 pt-6 sm:mt-10 sm:pt-8">
        <div className="mb-4 flex items-center justify-center gap-2">
          <FileText className="h-4 w-4 text-gold" aria-hidden />
          <h4 className="text-sm font-semibold text-gold">{t("contracts.title")}</h4>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <div className="rounded-2xl border border-white/10 bg-surface p-4 sm:p-5">
            <p className="text-[10px] font-medium tracking-wider text-gold/80">
              {t("contracts.contractA.badge")}
            </p>
            <p className="mt-2 text-sm font-semibold">
              {t("contracts.contractA.title")}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/55">
              {t("contracts.contractA.description")}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-surface p-4 sm:p-5">
            <p className="text-[10px] font-medium tracking-wider text-gold/80">
              {t("contracts.contractB.badge")}
            </p>
            <p className="mt-2 text-sm font-semibold">
              {t("contracts.contractB.title")}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/55">
              {t("contracts.contractB.description")}
            </p>
          </div>
        </div>
        <p className="mt-3 text-center text-[10px] text-white/40">
          {t("contracts.note")}
        </p>
      </div>

      {/* Two scheme pathways */}
      <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
        <div className="rounded-2xl border border-gold/25 bg-gold/5 p-4 sm:p-5">
          <p className="text-[10px] font-medium tracking-wider text-gold">
            {t("schemes.liquidation.badge")}
          </p>
          <h4 className="mt-2 text-sm font-semibold">
            {t("schemes.liquidation.title")}
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-white/60">
            {t("schemes.liquidation.description")}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-surface p-4 sm:p-5">
          <p className="text-[10px] font-medium tracking-wider text-gold/80">
            {t("schemes.freshMoney.badge")}
          </p>
          <h4 className="mt-2 text-sm font-semibold">
            {t("schemes.freshMoney.title")}
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-white/60">
            {t("schemes.freshMoney.description")}
          </p>
        </div>
      </div>
    </div>
  );
}