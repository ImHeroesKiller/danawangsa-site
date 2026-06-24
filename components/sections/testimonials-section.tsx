import { TestimonialCard } from "@/components/shared/testimonial-card";
import { SectionHeader } from "@/components/shared/section-header";
import { testimonials } from "@/lib/data/content";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-y border-white/10 bg-surface py-14"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="TESTIMONI KLIEN"
          title="Dipercaya Pemilik Usaha"
          description="Identitas klien disamarkan untuk menjaga kerahasiaan."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}