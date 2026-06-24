import { ServiceCard } from "@/components/shared/service-card";
import { SectionHeader } from "@/components/shared/section-header";
import { services } from "@/lib/data/content";

export function ServicesSection() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-5 pb-16 sm:px-6">
      <SectionHeader
        eyebrow="SOLUSI KONSULTASI STRATEGIS"
        title=""
        showDivider
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}