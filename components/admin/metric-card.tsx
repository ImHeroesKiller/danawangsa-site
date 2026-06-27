interface MetricCardProps {
  label: string;
  value: string;
  hint?: string;
}

export function MetricCard({ label, value, hint }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface p-5">
      <p className="text-xs tracking-wider text-white/45">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-gold">{value}</p>
      {hint && <p className="mt-1 text-xs text-white/40">{hint}</p>}
    </div>
  );
}