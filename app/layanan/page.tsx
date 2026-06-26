import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

import { ServiceNav } from "@/components/layanan/service-nav";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getServiceDetailPath, services } from "@/lib/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: `Layanan Konsultasi • ${siteConfig.name}`,
  description:
    "Daftar layanan konsultasi Danawangsa Capital — Bridging Finance, pembiayaan modal usaha, SKBDN, Asset Collateral Program, dan Business & Financial Advisory.",
  path: "/layanan",
  imageAlt: `Layanan Konsultasi — ${siteConfig.name}`,
});

export default function LayananPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Layanan" },
        ]}
      />
      <ServiceNav />

      <header className="mt-10 text-center">
        <Badge className="mb-4">LAYANAN KONSULTASI</Badge>
        <h1 className="heading-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Solusi Konsultasi Strategis
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-white/65">
          Pendampingan profesional untuk strategi bisnis & keuangan — bukan
          lembaga pembiayaan.
        </p>
      </header>

      <div className="mt-12 space-y-5">
        {services.map((service) => (
          <article
            key={service.slug}
            className="premium-card rounded-3xl p-7 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium tracking-wider text-gold">
                  {service.listing.category}
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  {service.listing.title}
                </h2>
              </div>
              {service.listing.badge && (
                <Badge variant="amber">{service.listing.badge}</Badge>
              )}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              {service.listing.description}
            </p>
            <Button className="mt-6" asChild>
              <Link
                href={getServiceDetailPath(service.slug)}
                className="inline-flex items-center gap-2"
              >
                Lihat Detail Layanan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-surface p-6 text-center text-sm text-white/55">
        <FileText className="mx-auto mb-3 h-6 w-6 text-gold/60" />
        Layanan konsultasi lainnya tersedia di{" "}
        <Link href="/#solutions" className="text-gold hover:underline">
          halaman utama
        </Link>
        .
      </div>
    </div>
  );
}