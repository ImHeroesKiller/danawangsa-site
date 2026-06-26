"use client";

import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

interface RiskReversalProps {
  className?: string;
}

export function RiskReversal({ className }: RiskReversalProps) {
  const t = useTranslations("common");

  return (
    <p className={cn("text-xs text-white/45", className)}>
      {t("riskReversal")}
    </p>
  );
}