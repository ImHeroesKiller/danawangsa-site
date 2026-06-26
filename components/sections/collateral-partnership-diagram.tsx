"use client";

import {
  ArrowDown,
  ArrowRight,
  Building2,
  FileText,
  Landmark,
  RefreshCw,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useId, useState } from "react";

import { cn } from "@/lib/utils";

interface CollateralPartnershipDiagramProps {
  className?: string;
}

type FlowKey = "collateral" | "funds" | "return" | "collateralLink";
type PartyKey = "assetOwner" | "investor" | "fundUser";

const PARTY_ICONS: Record<PartyKey, LucideIcon> = {
  assetOwner: Building2,
  investor: Landmark,
  fundUser: Wallet,
};

const FLOW_PARTIES: Record<FlowKey, PartyKey[]> = {
  collateral: ["assetOwner", "investor"],
  funds: ["investor", "fundUser"],
  return: ["fundUser", "investor"],
  collateralLink: ["assetOwner", "fundUser"],
};

function FlowTooltip({ text }: { text: string }) {
  return (
    <div
      role="tooltip"
      className="absolute left-1/2 top-[calc(100%+0.5rem)] z-20 w-52 -translate-x-1/2 rounded-xl border border-gold/30 bg-surface px-3 py-2.5 text-left text-[11px] leading-relaxed text-white/75 shadow-lg shadow-black/40 sm:w-60 sm:text-xs"
    >
      <span
        className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-gold/30 bg-surface"
        aria-hidden
      />
      {text}
    </div>
  );
}

function InteractiveFlowLabel({
  flowKey,
  label,
  tooltip,
  isActive,
  isPinned,
  onHover,
  onLeave,
  onTogglePin,
  children,
  className,
}: {
  flowKey: FlowKey;
  label: string;
  tooltip: string;
  isActive: boolean;
  isPinned: boolean;
  onHover: (key: FlowKey) => void;
  onLeave: () => void;
  onTogglePin: (key: FlowKey) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const showTooltip = isActive || isPinned;

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        aria-label={label}
        aria-expanded={showTooltip}
        aria-describedby={showTooltip ? `flow-tip-${flowKey}` : undefined}
        onMouseEnter={() => onHover(flowKey)}
        onMouseLeave={onLeave}
        onFocus={() => onHover(flowKey)}
        onBlur={onLeave}
        onClick={() => onTogglePin(flowKey)}
        className={cn(
          "inline-flex cursor-pointer items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-wide transition-colors sm:text-xs",
          showTooltip
            ? "border-gold/60 bg-gold/15 text-gold"
            : "border-gold/30 bg-gold/5 text-gold hover:border-gold/50 hover:bg-gold/10",
        )}
      >
        {children}
      </button>
      {showTooltip && (
        <div id={`flow-tip-${flowKey}`}>
          <FlowTooltip text={tooltip} />
        </div>
      )}
    </div>
  );
}

function PartyNode({
  partyKey,
  icon: Icon,
  title,
  subtitle,
  isHighlighted,
  isDimmed,
}: {
  partyKey: PartyKey;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  isHighlighted: boolean;
  isDimmed: boolean;
}) {
  return (
    <div
      className={cn(
        "diagram-node flex flex-col items-center text-center transition-opacity duration-200",
        isHighlighted && "diagram-node--active",
        isDimmed ? "opacity-50" : "opacity-100",
      )}
      data-party={partyKey}
    >
      <div className="diagram-node-icon value-icon mb-3 h-14 w-14">
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
  const markerId = useId().replace(/:/g, "");
  const [hoveredFlow, setHoveredFlow] = useState<FlowKey | null>(null);
  const [pinnedFlow, setPinnedFlow] = useState<FlowKey | null>(null);

  const activeFlow = hoveredFlow ?? pinnedFlow;

  const isPartyHighlighted = useCallback(
    (party: PartyKey) => {
      if (!activeFlow) return false;
      return FLOW_PARTIES[activeFlow].includes(party);
    },
    [activeFlow],
  );

  const isPartyDimmed = useCallback(
    (party: PartyKey) => {
      if (!activeFlow) return false;
      return !FLOW_PARTIES[activeFlow].includes(party);
    },
    [activeFlow],
  );

  const handleHover = (key: FlowKey) => setHoveredFlow(key);
  const handleLeave = () => setHoveredFlow(null);

  const handleTogglePin = (key: FlowKey) => {
    setPinnedFlow((current) => (current === key ? null : key));
  };

  const flowLineClass = (key: FlowKey) =>
    cn("diagram-flow-line", activeFlow === key && "diagram-flow-line--active");

  const flowProps = (key: FlowKey) => ({
    flowKey: key,
    label: t(`flows.${key}`),
    tooltip: t(`tooltips.${key}`),
    isActive: hoveredFlow === key,
    isPinned: pinnedFlow === key,
    onHover: handleHover,
    onLeave: handleLeave,
    onTogglePin: handleTogglePin,
  });

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

      <div className="relative mx-auto max-w-3xl">
        {/* Desktop connector SVG — interactive hit areas */}
        <svg
          className="absolute inset-0 hidden h-full w-full md:block"
          viewBox="0 0 600 200"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <marker
              id={`arrow-gold-${markerId}`}
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="#d4af37" fillOpacity="0.7" />
            </marker>
          </defs>

          <path
            d="M 100 80 Q 200 40 300 80"
            fill="none"
            stroke="#d4af37"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            markerEnd={`url(#arrow-gold-${markerId})`}
            className={flowLineClass("collateral")}
          />
          <path
            d="M 340 100 L 500 100"
            fill="none"
            stroke="#d4af37"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeDasharray="8 4"
            markerEnd={`url(#arrow-gold-${markerId})`}
            className={flowLineClass("funds")}
          />
          <path
            d="M 500 120 Q 400 160 300 120"
            fill="none"
            stroke="#d4af37"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            markerEnd={`url(#arrow-gold-${markerId})`}
            className={flowLineClass("return")}
          />
          <path
            d="M 120 100 Q 300 150 480 100"
            fill="none"
            stroke="#d4af37"
            strokeOpacity="0.2"
            strokeWidth="1"
            strokeDasharray="4 6"
            className={flowLineClass("collateralLink")}
          />

          {/* Invisible hit targets */}
          <path
            d="M 100 80 Q 200 40 300 80"
            fill="none"
            stroke="transparent"
            strokeWidth="20"
            className="cursor-pointer"
            onMouseEnter={() => handleHover("collateral")}
            onMouseLeave={handleLeave}
          />
          <path
            d="M 340 100 L 500 100"
            fill="none"
            stroke="transparent"
            strokeWidth="20"
            className="cursor-pointer"
            onMouseEnter={() => handleHover("funds")}
            onMouseLeave={handleLeave}
          />
          <path
            d="M 500 120 Q 400 160 300 120"
            fill="none"
            stroke="transparent"
            strokeWidth="20"
            className="cursor-pointer"
            onMouseEnter={() => handleHover("return")}
            onMouseLeave={handleLeave}
          />
          <path
            d="M 120 100 Q 300 150 480 100"
            fill="none"
            stroke="transparent"
            strokeWidth="20"
            className="cursor-pointer"
            onMouseEnter={() => handleHover("collateralLink")}
            onMouseLeave={handleLeave}
          />
        </svg>

        {/* Mobile layout */}
        <div className="flex flex-col items-center gap-3 md:hidden">
          <PartyNode
            partyKey="assetOwner"
            icon={PARTY_ICONS.assetOwner}
            title={t("parties.assetOwner.title")}
            subtitle={t("parties.assetOwner.subtitle")}
            isHighlighted={isPartyHighlighted("assetOwner")}
            isDimmed={isPartyDimmed("assetOwner")}
          />
          <InteractiveFlowLabel {...flowProps("collateral")}>
            <ArrowDown className="h-3 w-3" />
            {t("flows.collateral")}
          </InteractiveFlowLabel>
          <PartyNode
            partyKey="investor"
            icon={PARTY_ICONS.investor}
            title={t("parties.investor.title")}
            subtitle={t("parties.investor.subtitle")}
            isHighlighted={isPartyHighlighted("investor")}
            isDimmed={isPartyDimmed("investor")}
          />
          <InteractiveFlowLabel {...flowProps("funds")}>
            <ArrowDown className="h-3 w-3" />
            {t("flows.funds")}
          </InteractiveFlowLabel>
          <PartyNode
            partyKey="fundUser"
            icon={PARTY_ICONS.fundUser}
            title={t("parties.fundUser.title")}
            subtitle={t("parties.fundUser.subtitle")}
            isHighlighted={isPartyHighlighted("fundUser")}
            isDimmed={isPartyDimmed("fundUser")}
          />
          <InteractiveFlowLabel {...flowProps("return")}>
            <RefreshCw className="h-3 w-3" />
            {t("flows.return")}
          </InteractiveFlowLabel>
        </div>

        {/* Desktop layout */}
        <div className="relative hidden grid-cols-3 gap-4 md:grid">
          <div className="flex flex-col items-center pt-2">
            <PartyNode
              partyKey="assetOwner"
              icon={PARTY_ICONS.assetOwner}
              title={t("parties.assetOwner.title")}
              subtitle={t("parties.assetOwner.subtitle")}
              isHighlighted={isPartyHighlighted("assetOwner")}
              isDimmed={isPartyDimmed("assetOwner")}
            />
            <InteractiveFlowLabel className="mt-4" {...flowProps("collateral")}>
              {t("flows.collateral")}
            </InteractiveFlowLabel>
          </div>

          <div className="flex flex-col items-center justify-center">
            <PartyNode
              partyKey="investor"
              icon={PARTY_ICONS.investor}
              title={t("parties.investor.title")}
              subtitle={t("parties.investor.subtitle")}
              isHighlighted={isPartyHighlighted("investor")}
              isDimmed={isPartyDimmed("investor")}
            />
            <div className="mt-4 flex flex-col items-center gap-2">
              <InteractiveFlowLabel {...flowProps("funds")}>
                <ArrowRight className="h-3 w-3" />
                {t("flows.funds")}
              </InteractiveFlowLabel>
              <InteractiveFlowLabel {...flowProps("return")}>
                <RefreshCw className="h-3 w-3" />
                {t("flows.return")}
              </InteractiveFlowLabel>
            </div>
          </div>

          <div className="flex flex-col items-center pt-2">
            <PartyNode
              partyKey="fundUser"
              icon={PARTY_ICONS.fundUser}
              title={t("parties.fundUser.title")}
              subtitle={t("parties.fundUser.subtitle")}
              isHighlighted={isPartyHighlighted("fundUser")}
              isDimmed={isPartyDimmed("fundUser")}
            />
            <InteractiveFlowLabel
              className="mt-4"
              {...flowProps("collateralLink")}
            >
              {t("flows.collateralLink")}
            </InteractiveFlowLabel>
          </div>
        </div>

        <p className="mt-4 text-center text-[10px] text-white/35 md:mt-6">
          {t("tooltipHint")}
        </p>
      </div>

      {/* Separate legal contracts */}
      <div className="mt-8 border-t border-white/10 pt-6 sm:mt-10 sm:pt-8">
        <div className="mb-4 flex items-center justify-center gap-2">
          <FileText className="h-4 w-4 text-gold" aria-hidden />
          <h4 className="text-sm font-semibold text-gold">
            {t("contracts.title")}
          </h4>
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