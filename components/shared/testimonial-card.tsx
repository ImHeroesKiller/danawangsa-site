import { Star } from "lucide-react";

import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="testimonial-card rounded-3xl p-6">
      <div className="mb-4 flex gap-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="mb-5 text-sm leading-relaxed text-white/75">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="text-sm">
        <p className="font-medium">{testimonial.role}</p>
        <p className="text-xs text-white/45">{testimonial.company}</p>
      </div>
    </article>
  );
}