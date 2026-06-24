import type { TrustStat } from "@/types";

interface TrustStatItemProps {
  stat: TrustStat;
}

export function TrustStatItem({ stat }: TrustStatItemProps) {
  return (
    <div className="trust-stat px-5 py-6 text-center">
      <div className="heading-serif text-2xl font-semibold text-gold sm:text-3xl">
        {stat.value}
      </div>
      <div className="mt-1 text-xs text-white/55">{stat.label}</div>
    </div>
  );
}