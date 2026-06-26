import type { ServicePageData } from "@/types/service";

import {
  ADVISORY_FOOTNOTE,
  ADVISORY_POSITIONING,
  createServiceCta,
  createStandardFaq,
  generalStrukturFee,
} from "./shared-content";

const slug = "business-financial-advisory";
const path = `/layanan/${slug}`;
const name = "Business & Financial Advisory";

export const businessFinancialAdvisoryService: ServicePageData = {
  slug,
  path,
  navLabel: name,
  consultationModalType: "general",

  meta: {
    title: name,
    description:
      "Business & Financial Advisory untuk pengembangan bisnis, perencanaan keuangan, dan peningkatan profitabilitas. Strategic Business & Financial Consultant.",
  },

  listing: {
    category: "KONSULTASI STRATEGIS",
    title: name,
    description:
      "Pendampingan menyeluruh untuk mengembangkan bisnis, memperkuat struktur keuangan, meningkatkan profitabilitas, dan mempersiapkan ekspansi.",
  },

  hero: {
    badge: { label: "STRATEGIC ADVISORY", variant: "amber" },
    title: "Business & Financial",
    titleHighlight: "Advisory",
    description:
      "Strategic Business & Financial Consultant untuk strategi bisnis & keuangan holistik — analisis kondisi perusahaan, rekomendasi strategis, dan pendampingan implementasi profesional.",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: { label: "Lihat Struktur Fee", href: `${path}#fee` },
  },

  teaser: {
    badge: { label: "KONSULTASI STRATEGIS", variant: "amber" },
    title: "BUSINESS & FINANCIAL",
    titleHighlight: "Advisory",
    description:
      "Butuh panduan strategis untuk bisnis dan keuangan? Kami bantu analisis mendalam, perencanaan, dan pendampingan eksekusi — transparan dan berorientasi hasil.",
    highlights: [
      { label: "Analisis Bisnis", icon: "shield" },
      { label: "Perencanaan Keuangan", icon: "wallet" },
      { label: "Solusi Terpersonalisasi", icon: "zap" },
    ],
    benefitBullets: [
      "Strategi bisnis lebih terarah",
      "Struktur keuangan lebih kuat",
      "Profitabilitas meningkat",
    ],
    card: {
      eyebrow: "INGIN MEMPERKUAT BISNIS ANDA?",
      description:
        "Pelajari proses 5 langkah, struktur fee, FAQ, dan profil klien yang cocok di halaman detail layanan.",
      footnote:
        ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "MASALAH YANG SERING DIALAMI",
    title: "Ketika Bisnis Butuh Arah Strategis yang Jelas",
    description:
      "Tanpa advisory yang tepat, perusahaan kesulitan mengambil keputusan finansial dan bisnis yang berdampak jangka panjang.",
    items: [
      {
        title: "Strategi Bisnis Tidak Terarah",
        description:
          "Keputusan ekspansi, investasi, atau restrukturisasi diambil tanpa analisis keuangan yang mendalam.",
      },
      {
        title: "Struktur Keuangan Rapuh",
        description:
          "Komposisi modal, utang, dan arus kas belum optimal — menghambat pertumbuhan dan ketahanan bisnis.",
      },
      {
        title: "Profitabilitas Stagnan",
        description:
          "Margin menurun karena inefisiensi operasional, biaya pembiayaan tinggi, atau pricing yang tidak tepat.",
      },
      {
        title: "Kesiapan Ekspansi Kurang",
        description:
          "Perusahaan belum siap secara finansial dan operasional untuk masuk ke pasar atau segmen baru.",
      },
    ],
  },

  solusi: {
    eyebrow: "SOLUSI KAMI",
    title: "Strategic Business & Financial Consultant",
    description:
      "Danawangsa Capital memberikan Business & Financial Advisory yang disesuaikan dengan kondisi dan tujuan spesifik perusahaan Anda.",
    items: [
      "Analisis mendalam kondisi bisnis, keuangan, dan posisi pasar",
      "Perancangan strategi bisnis & keuangan jangka menengah",
      "Rekomendasi efisiensi operasional dan struktur pendanaan",
      "Pendampingan implementasi strategi dan koordinasi multi-pihak",
      "Evaluasi berkala dan rekomendasi penyesuaian",
    ],
    ctaLabel: "Diskusikan Kebutuhan Advisory Anda",
  },

  manfaat: {
    eyebrow: "MANFAAT UTAMA",
    title: "Apa yang Anda Dapatkan",
    items: [
      {
        title: "Keputusan Terinformasi",
        description:
          "Rekomendasi berbasis data dan analisis profesional — bukan asumsi.",
        icon: "shield",
      },
      {
        title: "Keuangan Lebih Kuat",
        description:
          "Struktur modal dan arus kas yang dirancang untuk ketahanan jangka panjang.",
        icon: "wallet",
      },
      {
        title: "Pertumbuhan Berkelanjutan",
        description:
          "Peta strategi yang mendukung ekspansi dan peningkatan profitabilitas.",
        icon: "trending-up",
      },
    ],
  },

  proses: {
    eyebrow: "PROSES KERJA",
    title: "5 Langkah Advisory yang Kami Dampingi",
    description: "Setiap tahap memiliki deliverable yang jelas dan terukur.",
    items: [
      {
        step: 1,
        title: "Discovery",
        description:
          "Sesi awal untuk memahami kondisi bisnis, tujuan manajemen, tantangan, dan prioritas strategis.",
        deliverable: "Ringkasan situasi & scope advisory",
      },
      {
        step: 2,
        title: "Analisis & Diagnosis",
        description:
          "Review laporan keuangan, operasional, struktur organisasi, dan posisi kompetitif.",
        deliverable: "Laporan diagnosis & temuan kunci",
      },
      {
        step: 3,
        title: "Perancangan Strategi",
        description:
          "Menyusun rekomendasi strategi bisnis & keuangan beserta timeline implementasi.",
        deliverable: "Dokumen strategi & proposal fee transparan",
      },
      {
        step: 4,
        title: "Pendampingan Implementasi",
        description:
          "Mendampingi eksekusi strategi, koordinasi stakeholder, dan monitoring progres.",
        deliverable: "Action plan & dokumentasi implementasi",
      },
      {
        step: 5,
        title: "Evaluasi & Laporan Final",
        description:
          "Evaluasi hasil advisory, serah terima laporan final, dan rekomendasi langkah selanjutnya.",
        deliverable: "Laporan final & rekomendasi lanjutan",
      },
    ],
  },

  strukturFee: generalStrukturFee,

  cocokUntuk: {
    eyebrow: "COCOK UNTUK",
    title: "Siapa yang Membutuhkan Layanan Ini?",
    items: [
      "Pemilik usaha & direksi yang butuh second opinion strategis",
      "UMKM hingga perusahaan menengah dalam fase transformasi",
      "Manajemen yang mempersiapkan ekspansi atau investasi",
      "Perusahaan keluarga yang ingin profesionalisasi keuangan",
      "Entitas pasca-merger atau restrukturisasi organisasi",
      "Bisnis dengan profitabilitas yang perlu ditingkatkan",
    ],
  },

  faq: createStandardFaq("ADVISORY", "Business & Financial Advisory"),

  cta: createServiceCta(
    "Perkuat Bisnis Anda dengan Advisory yang Tepat",
    "Ceritakan tantangan bisnis dan keuangan Anda. Tim advisor kami siap merespons dalam 1×24 jam.",
  ),
};