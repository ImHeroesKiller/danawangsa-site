import type { FeeItem } from "@/types";
import { cn } from "@/lib/utils";

interface FeeCardProps {
  fee: FeeItem;
}

export function FeeCard({ fee }: FeeCardProps) {
  const Icon = fee.icon;

  return (
    <article
      className={cn(
        "fee-card rounded-3xl p-6",
        fee.highlighted && "border-gold/30",
      )}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <h4 className="mb-2 font-semibold text-gold">{fee.title}</h4>
      <p className="mb-2 text-2xl font-semibold">{fee.amount}</p>
      <p className="text-sm leading-relaxed text-white/65">{fee.description}</p>
      <p className="mt-3 text-[11px] text-white/40">{fee.footnote}</p>
    </article>
  );
}