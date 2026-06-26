import type { ServicePageData } from "@/types/service";

import {
  ADVISORY_POSITIONING,
  createServiceCta,
  createStandardFaq,
  generalStrukturFee,
} from "./shared-content";

const slug = "asset-collateral-program";
const path = `/layanan/${slug}`;
const name = "Asset Collateral Program";

export const assetCollateralProgramService: ServicePageData = {
  slug,
  path,
  navLabel: name,
  consultationModalType: "general",

  meta: {
    title: name,
    description:
      "Konsultasi Asset Collateral Program — optimalisasi aset tetap sebagai jaminan dan sumber pendapatan. Pendampingan strategi & legal, bukan lembaga pembiayaan.",
  },

  listing: {
    category: "OPTIMALISASI ASET",
    title: name,
    description:
      "Program konsultasi untuk mengoptimalkan aset tetap sebagai jaminan pembiayaan dan sumber pendapatan tambahan — tanpa harus menjual aset.",
  },

  hero: {
    badge: { label: "PROGRAM KONSULTASI ASET", variant: "amber" },
    title: "Asset Collateral",
    titleHighlight: "Program",
    description:
      "Partner konsultasi untuk mengoptimalkan aset tetap perusahaan — kami analisis potensi aset, rancang struktur jaminan & imbal hasil, dan dampingi proses legal, bukan menyalurkan dana langsung.",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: { label: "Lihat Struktur Fee", href: `${path}#fee` },
  },

  teaser: {
    badge: { label: "OPTIMALISASI ASET", variant: "amber" },
    title: "ASSET COLLATERAL",
    titleHighlight: "Program",
    description:
      "Miliki aset tetap yang belum optimal? Kami bantu merancang strategi pemanfaatan aset sebagai jaminan dan sumber pendapatan — dengan pendampingan profesional.",
    highlights: [
      { label: "Analisis Potensi Aset", icon: "shield" },
      { label: "Struktur Imbal Hasil", icon: "wallet" },
      { label: "Pendampingan Legal", icon: "zap" },
    ],
    benefitBullets: [
      "Aset tetap dimanfaatkan optimal",
      "Pendapatan tambahan stabil",
      "Tanpa menjual aset produktif",
    ],
    card: {
      eyebrow: "MAKSIMALKAN NILAI ASET ANDA?",
      description:
        "Pelajari proses 5 langkah, struktur fee, FAQ, dan profil klien yang cocok di halaman detail layanan.",
      footnote:
        "Bukan penyaluran dana langsung • Kami bantu rancang strategi & dampingi proses",
    },
  },

  masalah: {
    eyebrow: "MASALAH YANG SERING DIALAMI",
    title: "Ketika Aset Tidak Bekerja untuk Bisnis",
    description:
      "Aset tetap yang tidak dioptimalkan menjadi beban — bukan kontributor — terhadap likuiditas dan pertumbuhan perusahaan.",
    items: [
      {
        title: "Aset Idle & Underutilized",
        description:
          "Tanah, bangunan, atau aset produktif tidak dimanfaatkan sebagai jaminan atau sumber pendapatan.",
      },
      {
        title: "Nilai Aset Tidak Tersalurkan",
        description:
          "Potensi collateral value aset belum dipetakan untuk mendukung kebutuhan pembiayaan bisnis.",
      },
      {
        title: "Struktur Legal & Kontrak Lemah",
        description:
          "Skema pemanfaatan aset belum didukung dokumentasi legal dan kontrak yang kuat.",
      },
      {
        title: "Risiko Imbal Hasil Tidak Terukur",
        description:
          "Tanpa analisis profesional, strategi pendapatan dari aset berisiko tinggi dan tidak sustainable.",
      },
    ],
  },

  solusi: {
    eyebrow: "SOLUSI KAMI",
    title: "Asset Collateral Advisory — Bukan Penyaluran Dana",
    description:
      "Danawangsa Capital membantu merancang Asset Collateral Program yang disesuaikan dengan portofolio aset dan tujuan bisnis Anda.",
    items: [
      "Analisis mendalam potensi dan nilai aset tetap perusahaan",
      "Rekomendasi struktur jaminan dan skema imbal hasil yang aman",
      "Perancangan strategi pemanfaatan aset tanpa menjual aset produktif",
      "Pendampingan legal, kontrak, dan koordinasi dengan pihak ketiga",
      "Monitoring & evaluasi berkala performa program",
    ],
    ctaLabel: "Diskusikan Potensi Aset Anda",
  },

  manfaat: {
    eyebrow: "MANFAAT UTAMA",
    title: "Apa yang Anda Dapatkan",
    items: [
      {
        title: "Aset Produktif",
        description:
          "Strategi yang mengaktifkan aset tetap sebagai kontributor likuiditas dan pendapatan.",
        icon: "wallet",
      },
      {
        title: "Struktur Aman",
        description:
          "Rekomendasi skema dengan due diligence dan pendampingan legal yang profesional.",
        icon: "shield",
      },
      {
        title: "Pendapatan Stabil",
        description:
          "Pendekatan jangka menengah untuk pendapatan tambahan yang sustainable dari aset.",
        icon: "trending-up",
      },
    ],
  },

  proses: {
    eyebrow: "PROSES KERJA",
    title: "5 Langkah Program yang Kami Dampingi",
    description: "Setiap tahap memiliki deliverable yang jelas dan terukur.",
    items: [
      {
        step: 1,
        title: "Discovery & Asset Inventory",
        description:
          "Memetakan portofolio aset, status legal, nilai pasar, dan tujuan pemanfaatan.",
        deliverable: "Inventaris aset & ringkasan potensi",
      },
      {
        step: 2,
        title: "Analisis Potensi & Risiko",
        description:
          "Evaluasi nilai collateral, opsi pemanfaatan, risiko hukum, dan profil imbal hasil.",
        deliverable: "Laporan analisis potensi & risiko",
      },
      {
        step: 3,
        title: "Perancangan Program",
        description:
          "Menyusun Asset Collateral Program — struktur jaminan, skema pendapatan, dan timeline.",
        deliverable: "Dokumen program & proposal fee transparan",
      },
      {
        step: 4,
        title: "Pendampingan Eksekusi",
        description:
          "Koordinasi legal, kontrak, negosiasi dengan bank atau mitra, dan implementasi.",
        deliverable: "Dokumentasi eksekusi & action plan",
      },
      {
        step: 5,
        title: "Monitoring & Evaluasi",
        description:
          "Evaluasi performa program dan rekomendasi penyesuaian strategi jangka panjang.",
        deliverable: "Laporan evaluasi & rekomendasi lanjutan",
      },
    ],
  },

  strukturFee: generalStrukturFee,

  cocokUntuk: {
    eyebrow: "COCOK UNTUK",
    title: "Siapa yang Membutuhkan Layanan Ini?",
    items: [
      "Pemilik aset tetap (tanah, bangunan, properti komersial)",
      "Perusahaan dengan portofolio aset besar",
      "Bisnis yang ingin pendapatan pasif dari aset",
      "Entitas yang butuh optimalisasi jaminan kredit",
      "Investor & holding company",
      "Manajemen yang ingin monetisasi aset tanpa divestasi",
    ],
  },

  faq: createStandardFaq("ASET", "Asset Collateral Program"),

  cta: createServiceCta(
    "Aktifkan Nilai Aset Anda dengan Strategi yang Tepat",
    "Ceritakan portofolio aset dan tujuan bisnis Anda. Tim advisor kami siap merespons dalam 1×24 jam.",
  ),
};