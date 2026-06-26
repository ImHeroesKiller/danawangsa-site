import type { ServicePageData } from "@/types/service";

import {
  ADVISORY_FOOTNOTE,
  ADVISORY_POSITIONING,
  createServiceCta,
  createStandardFaq,
  generalStrukturFee,
} from "./shared-content";

const slug = "modal-kerja-skbdn";
const path = `/layanan/${slug}`;
const name = "Pembiayaan Modal Kerja Berbasis SKBDN";

export const modalKerjaSkbdnService: ServicePageData = {
  slug,
  path,
  navLabel: name,
  consultationModalType: "general",

  meta: {
    title: name,
    description:
      "Konsultasi strategi pembiayaan modal kerja berbasis SKBDN untuk supplier, kontraktor, dan trading. Strategic Business & Financial Consultant.",
  },

  listing: {
    category: "STRUKTUR MODAL KERJA",
    title: name,
    description:
      "Merancang dan mengoptimalkan struktur modal kerja berbasis dokumen perdagangan (SKBDN) — dari analisis proyek hingga pendampingan negosiasi.",
  },

  hero: {
    badge: { label: "LAYANAN KONSULTASI STRATEGIS", variant: "amber" },
    title: "Pembiayaan Modal Kerja",
    titleHighlight: "Berbasis SKBDN",
    description:
      "Strategic Business & Financial Consultant untuk merancang struktur modal kerja berbasis SKBDN — analisis kebutuhan proyek, penyusunan dokumen, dan pendampingan negosiasi profesional.",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: { label: "Lihat Struktur Fee", href: `${path}#fee` },
  },

  teaser: {
    badge: { label: "STRUKTUR MODAL KERJA", variant: "amber" },
    title: "MODAL KERJA",
    titleHighlight: "Berbasis SKBDN",
    description:
      "Supplier, kontraktor, atau trading? Kami bantu merancang struktur modal kerja berbasis SKBDN yang efisien — dengan pendampingan negosiasi profesional.",
    highlights: [
      { label: "Analisis Proyek", icon: "shield" },
      { label: "Struktur Dokumen Tepat", icon: "wallet" },
      { label: "Monitoring Arus Kas", icon: "zap" },
    ],
    benefitBullets: [
      "Arus kas proyek terkendali",
      "Struktur SKBDN efisien",
      "Margin profit lebih optimal",
    ],
    card: {
      eyebrow: "KELOLA MODAL KERJA PROYEK ANDA?",
      description:
        "Pelajari proses 5 langkah, struktur fee, FAQ, dan profil klien yang cocok di halaman detail layanan.",
      footnote:
        ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "MASALAH YANG SERING DIALAMI",
    title: "Ketika Modal Kerja Proyek Tidak Terkelola",
    description:
      "Struktur SKBDN yang tidak tepat dapat menghambat arus kas proyek dan menekan profitabilitas bisnis.",
    items: [
      {
        title: "Kebutuhan Proyek Tidak Terukur",
        description:
          "Estimasi modal kerja proyek tidak akurat — menyebabkan kekurangan atau kelebihan likuiditas di tengah kontrak.",
      },
      {
        title: "Struktur SKBDN Tidak Efisien",
        description:
          "Dokumen perdagangan dan skema pembiayaan tidak selaras dengan siklus proyek dan syarat bank.",
      },
      {
        title: "Arus Kas Proyek Tertekan",
        description:
          "Pencairan dan pelunasan tidak terkoordinasi dengan milestone proyek — margin profit tergerus.",
      },
      {
        title: "Negosiasi Bank Kurang Optimal",
        description:
          "Manajemen tidak memiliki bandwidth atau strategi yang cukup untuk bernegosiasi syarat pembiayaan proyek.",
      },
    ],
  },

  solusi: {
    eyebrow: "SOLUSI KAMI",
    title: "Strategic Business & Financial Consultant",
    description:
      "Danawangsa Capital membantu merancang struktur modal kerja berbasis SKBDN yang efisien untuk bisnis proyek Anda.",
    items: [
      "Analisis kebutuhan modal kerja per proyek dan siklus arus kas",
      "Rekomendasi struktur dokumen SKBDN dan skema pembiayaan",
      "Penyusunan narasi bisnis dan dokumentasi untuk negosiasi bank",
      "Pendampingan negosiasi syarat, tenor, dan milestone pencairan",
      "Monitoring arus kas proyek dan evaluasi berkala",
    ],
    ctaLabel: "Diskusikan Struktur SKBDN Anda",
  },

  manfaat: {
    eyebrow: "MANFAAT UTAMA",
    title: "Apa yang Anda Dapatkan",
    items: [
      {
        title: "Arus Kas Terkendali",
        description:
          "Struktur SKBDN yang dirancang selaras dengan milestone proyek dan kebutuhan operasional.",
        icon: "wallet",
      },
      {
        title: "Dokumen Terstruktur",
        description:
          "Rekomendasi struktur dokumen perdagangan yang kuat untuk negosiasi dengan bank.",
        icon: "shield",
      },
      {
        title: "Profitabilitas Proyek",
        description:
          "Pendekatan yang meminimalkan biaya pembiayaan dan memaksimalkan margin proyek.",
        icon: "trending-up",
      },
    ],
  },

  proses: {
    eyebrow: "PROSES KERJA",
    title: "5 Langkah Strategi yang Kami Dampingi",
    description: "Setiap tahap memiliki deliverable yang jelas dan terukur.",
    items: [
      {
        step: 1,
        title: "Discovery & Project Mapping",
        description:
          "Memetakan kontrak proyek, kebutuhan modal kerja, jadwal pencairan, dan bank terkait.",
        deliverable: "Ringkasan proyek & kebutuhan modal kerja",
      },
      {
        step: 2,
        title: "Analisis Arus Kas Proyek",
        description:
          "Review kontrak, jadwal pembayaran, exposure kredit, dan profil risiko proyek.",
        deliverable: "Laporan arus kas & peta risiko proyek",
      },
      {
        step: 3,
        title: "Perancangan Struktur SKBDN",
        description:
          "Menyusun skema pembiayaan, struktur dokumen, tenor, dan timeline eksekusi.",
        deliverable: "Dokumen strategi & proposal fee transparan",
      },
      {
        step: 4,
        title: "Pendampingan Negosiasi Bank",
        description:
          "Mendampingi komunikasi dengan bank hingga kesepakatan prinsip tercapai.",
        deliverable: "Dokumentasi negosiasi & action plan",
      },
      {
        step: 5,
        title: "Monitoring & Evaluasi",
        description:
          "Monitoring arus kas pasca-kesepakatan dan rekomendasi penyesuaian struktur.",
        deliverable: "Laporan evaluasi & rekomendasi lanjutan",
      },
    ],
  },

  strukturFee: generalStrukturFee,

  cocokUntuk: {
    eyebrow: "COCOK UNTUK",
    title: "Siapa yang Membutuhkan Layanan Ini?",
    items: [
      "Supplier & vendor BUMN / swasta",
      "Kontraktor proyek konstruksi & infrastruktur",
      "Perusahaan trading & distribusi",
      "Bisnis dengan kontrak proyek berulang",
      "Manajemen yang butuh efisiensi modal kerja",
      "Entitas dengan fasilitas SKBDN aktif",
    ],
  },

  faq: createStandardFaq("SKBDN", "pembiayaan modal kerja berbasis SKBDN"),

  cta: createServiceCta(
    "Optimalkan Struktur Modal Kerja Berbasis SKBDN",
    "Ceritakan profil proyek dan kebutuhan modal kerja Anda. Tim advisor kami siap merespons dalam 1×24 jam.",
  ),
};