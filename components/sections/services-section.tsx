import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";

/** Concise services overview — detail pages hold full process, fee, and FAQ */
export function ServicesSection() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-5 pb-16 sm:px-6">
      <SectionHeader
        eyebrow="SOLUSI KONSULTASI STRATEGIS"
        title="Pilih Layanan yang Sesuai Kebutuhan"
        description="Ringkasan layanan utama. Proses lengkap, struktur fee, dan FAQ tersedia di halaman detail masing-masing."
        showDivider
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.slug}
            className="premium-card flex flex-col rounded-3xl p-7 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <p className="text-xs font-medium tracking-wider text-gold">
                {service.listing.category}
              </p>
              {service.listing.badge && (
                <Badge variant="amber">{service.listing.badge}</Badge>
              )}
            </div>

            <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
              {service.listing.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
              {service.listing.description}
            </p>

            <ul className="mt-4 space-y-1.5 text-xs text-white/55">
              {service.teaser.benefitBullets.map((benefit) => (
                <li key={benefit}>• {benefit}</li>
              ))}
            </ul>

            <Button className="mt-6 w-full sm:w-auto" asChild>
              <Link
                href={service.path}
                className="inline-flex items-center gap-2"
              >
                Lihat Detail Layanan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" asChild>
          <Link href="/layanan">Lihat Semua Layanan</Link>
        </Button>
      </div>
    </section>
  );
}