import { CheckCircle2, ChevronRight, X, XCircle } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { positioningNo, positioningYes } from "@/lib/data/content";

export function PositioningSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 pb-16 sm:px-6">
      <SectionHeader
        eyebrow="POSISI KAMI"
        title="Strategic Business & Financial Advisory"
        description="Kami mendampingi Anda merancang dan mengeksekusi strategi keuangan — dari analisis hingga negosiasi dengan pihak ketiga."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div className="positioning-yes rounded-3xl bg-surface p-6 sm:p-7">
          <div className="mb-4 flex items-center gap-x-2">
            <CheckCircle2 className="h-5 w-5 text-gold" />
            <span className="text-sm font-semibold tracking-wider text-gold">
              APA YANG KAMI LAKUKAN
            </span>
          </div>
          <ul className="space-y-3 text-sm text-white/75">
            {positioningYes.map((item) => (
              <li key={item} className="flex items-start gap-x-2">
                <ChevronRight className="mt-1 h-3 w-3 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="positioning-not rounded-3xl bg-surface p-6 sm:p-7">
          <div className="mb-4 flex items-center gap-x-2">
            <XCircle className="h-5 w-5 text-red-400/80" />
            <span className="text-sm font-semibold tracking-wider text-red-400/80">
              BUKAN LAYANAN KAMI
            </span>
          </div>
          <ul className="space-y-3 text-sm text-white/60">
            {positioningNo.map((item) => (
              <li key={item} className="flex items-start gap-x-2">
                <X className="mt-1 h-3 w-3 shrink-0 text-red-400/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}