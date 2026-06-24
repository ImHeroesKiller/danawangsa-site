import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface RiskReversalProps {
  className?: string;
}

export function RiskReversal({ className }: RiskReversalProps) {
  return (
    <p className={cn("text-xs text-white/45", className)}>
      {siteConfig.riskReversal}
    </p>
  );
}