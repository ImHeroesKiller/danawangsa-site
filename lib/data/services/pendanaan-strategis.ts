/**
 * Template layanan baru — salin file ini, ganti slug/path, dan isi konten.
 *
 * Langkah menambah layanan:
 * 1. Duplikasi file ini → `nama-layanan.ts`
 * 2. Isi semua field `ServicePageData` (hero, teaser, masalah, dll.)
 * 3. Export constant & daftarkan di `lib/data/services/index.ts`
 * 4. Buat route `app/layanan/[slug]/page.tsx` atau page khusus yang memanggil
 *    `<ServiceDetailContent service={namaLayananService} />`
 * 5. (Opsional) Tambahkan teaser section di homepage yang membaca `service.teaser`
 *
 * @example
 * export const pendanaanStrategisService: ServicePageData = { ... };
 */

import type { ServicePageData } from "@/types/service";

export const pendanaanStrategisService: ServicePageData = {
  slug: "pendanaan-strategis",
  path: "/layanan/pendanaan-strategis",
  navLabel: "Pendanaan Strategis",
  consultationModalType: "general",

  meta: {
    title: "Pendanaan Strategis",
    description: "Deskripsi singkat untuk SEO — isi sesuai positioning layanan.",
  },

  listing: {
    category: "KATEGORI LAYANAN",
    title: "Pendanaan Strategis",
    description: "Ringkasan untuk halaman indeks /layanan.",
  },

  hero: {
    badge: { label: "LAYANAN KONSULTASI", variant: "default" },
    title: "Judul Hero Baris 1",
    titleHighlight: "Judul Hero Baris 2 (gold)",
    description: "Paragraf utama hero.",
    positioning: "Positioning statement — bukan lembaga pembiayaan.",
    secondaryCta: { label: "Lihat Struktur Fee", href: "/#fee" },
  },

  teaser: {
    badge: { label: "TEASER BADGE", variant: "amber" },
    title: "JUDUL TEASER",
    titleHighlight: "Highlight Teaser",
    description: "Deskripsi singkat untuk section homepage.",
    highlights: [
      { label: "Highlight 1", icon: "bolt" },
      { label: "Highlight 2", icon: "clock" },
      { label: "Highlight 3", icon: "shield" },
    ],
    benefitBullets: ["Manfaat 1", "Manfaat 2", "Manfaat 3"],
    card: {
      eyebrow: "EYEBROW KARTU",
      description: "Copy kartu CTA di teaser homepage.",
      footnote: "Catatan kaki teaser.",
    },
  },

  masalah: {
    eyebrow: "MASALAH",
    title: "Judul Section Masalah",
    description: "Deskripsi section masalah.",
    items: [{ title: "Masalah 1", description: "Deskripsi masalah." }],
  },

  solusi: {
    eyebrow: "SOLUSI",
    title: "Judul Section Solusi",
    description: "Deskripsi section solusi.",
    items: ["Poin solusi 1", "Poin solusi 2"],
    ctaLabel: "Diskusikan Kasus Anda",
  },

  manfaat: {
    eyebrow: "MANFAAT",
    title: "Apa yang Anda Dapatkan",
    items: [
      {
        title: "Manfaat 1",
        description: "Deskripsi manfaat.",
        icon: "wallet",
      },
    ],
  },

  proses: {
    eyebrow: "PROSES",
    title: "Langkah yang Kami Dampingi",
    description: "Deskripsi proses.",
    items: [
      {
        step: 1,
        title: "Langkah 1",
        description: "Deskripsi langkah.",
        deliverable: "Deliverable langkah 1",
      },
    ],
  },

  strukturFee: {
    eyebrow: "STRUKTUR FEE",
    title: "Transparan & Berbasis Hasil",
    description: "Deskripsi fee.",
    items: [
      {
        id: "base",
        title: "Retainer",
        amount: "—",
        description: "Deskripsi fee.",
      },
    ],
    footnote: "Catatan kaki struktur fee.",
  },

  cocokUntuk: {
    eyebrow: "COCOK UNTUK",
    title: "Siapa yang Membutuhkan Layanan Ini?",
    items: ["Profil klien 1", "Profil klien 2"],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Pertanyaan Umum",
    items: [
      {
        id: "f1",
        question: "Pertanyaan?",
        answer: "Jawaban.",
      },
    ],
  },

  cta: {
    badge: { label: "KONSULTASI AWAL GRATIS • 30 MENIT" },
    title: "Judul CTA Akhir",
    description: "Deskripsi CTA akhir.",
    secondaryCta: { label: "Lihat Layanan Lainnya", href: "/layanan" },
    footnote: "Catatan kaki CTA.",
  },
};