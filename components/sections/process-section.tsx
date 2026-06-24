import { ProcessStepCard } from "@/components/shared/process-step-card";
import { SectionHeader } from "@/components/shared/section-header";
import { processSteps } from "@/lib/data/content";

export function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-5 pb-16 sm:px-6">
      <SectionHeader
        eyebrow="PROSES KERJA"
        title="Bagaimana Kami Bekerja"
        description="Empat langkah terstruktur dari konsultasi awal hingga eksekusi strategi — dengan transparansi penuh di setiap tahap."
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <ProcessStepCard key={step.step} step={step} />
        ))}
      </div>
    </section>
  );
}