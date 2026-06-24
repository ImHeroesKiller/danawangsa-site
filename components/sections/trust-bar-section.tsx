import { TrustStatItem } from "@/components/shared/trust-stat-item";
import { trustStats } from "@/lib/data/content";

export function TrustBarSection() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-12 sm:px-6">
      <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-surface sm:grid-cols-4">
        {trustStats.map((stat) => (
          <TrustStatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}