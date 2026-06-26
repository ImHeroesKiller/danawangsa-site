import { ArrowLeft, FileQuestion } from "lucide-react";
import Link from "next/link";

import { ServiceNav } from "@/components/layanan/service-nav";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ServiceNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-20">
      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Layanan", href: "/layanan" },
          { label: "Tidak Ditemukan" },
        ]}
      />
      <ServiceNav />

      <div className="mt-12 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-surface">
          <FileQuestion className="h-8 w-8 text-gold" />
        </div>

        <Badge variant="amber" className="mb-5">
          404 — LAYANAN TIDAK DITEMUKAN
        </Badge>

        <h1 className="heading-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Layanan tidak ditemukan
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
          Maaf, layanan yang kamu cari tidak tersedia. Periksa kembali URL atau
          lihat daftar layanan konsultasi kami.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/layanan" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Lihat Semua Layanan
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">Kembali ke Beranda</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}