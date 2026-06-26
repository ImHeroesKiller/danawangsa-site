"use client";

import { useLocale, useTranslations } from "next-intl";

import { TestimonialCard } from "@/components/shared/testimonial-card";
import { SectionHeader } from "@/components/shared/section-header";
import { getTestimonials } from "@/lib/data/content";
import type { Locale } from "@/i18n/routing";

export function TestimonialsSection() {
  const locale = useLocale() as Locale;
  const t = useTranslations("testimonialsSection");
  const testimonials = getTestimonials(locale);

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-y border-white/10 bg-surface py-14"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
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