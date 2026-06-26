import type { ServicePageData } from "@/types/service";

import {
  ADVISORY_FOOTNOTE,
  ADVISORY_POSITIONING,
  createServiceCta,
  createStandardFaq,
  generalStrukturFee,
} from "./shared-content";

const slug = "modal-usaha-jaminan-aset";
const path = `/layanan/${slug}`;
const name = "Pembiayaan Modal Usaha dengan Jaminan Aset";

export const modalUsahaJaminanAsetService: ServicePageData = {
  slug,
  path,
  navLabel: name,
  consultationModalType: "general",

  meta: {
    title: name,
    description:
      "Konsultasi strategi pembiayaan modal usaha dengan jaminan aset — perencanaan modal kerja, ekspansi, dan struktur jaminan optimal. Strategic Business & Financial Consultant.",
  },

  listing: {
    category: "KONSULTASI PENDANAAN STRATEGIS",
    title: name,
    description:
      "Merancang strategi pembiayaan modal usaha dengan struktur jaminan aset yang tepat — dari analisis kebutuhan hingga pendampingan negosiasi dengan bank.",
  },

  hero: {
    badge: { label: "LAYANAN KONSULTASI STRATEGIS", variant: "amber" },
    title: "Pembiayaan Modal Usaha",
    titleHighlight: "dengan Jaminan Aset",
    description:
      "Strategic Business & Financial Consultant untuk merancang strategi pembiayaan modal usaha — analisis posisi keuangan, optimalisasi jaminan aset, dan pendampingan negosiasi profesional.",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: { label: "Lihat Struktur Fee", href: `${path}#fee` },
  },

  teaser: {
    badge: { label: "KONSULTASI PENDANAAN", variant: "amber" },
    title: "MODAL USAHA &",
    titleHighlight: "Jaminan Aset",
    description:
      "Butuh modal kerja atau ekspansi usaha? Kami bantu merancang struktur pembiayaan dengan jaminan aset yang optimal — analisis mendalam dan pendampingan negosiasi.",
    highlights: [
      { label: "Struktur Jaminan Tepat", icon: "wallet" },
      { label: "Analisis Mendalam", icon: "shield" },
      { label: "Pendampingan Negosiasi", icon: "zap" },
    ],
    benefitBullets: [
      "Modal kerja lebih efisien",
      "Jaminan aset terstruktur optimal",
      "Akses fasilitas bank lebih kuat",
    ],
    card: {
      eyebrow: "BUTUH STRUKTUR PEMBIAYAAN YANG TEPAT?",
      description:
        "Pelajari proses 5 langkah, struktur fee, FAQ, dan profil klien yang cocok di halaman detail layanan.",
      footnote:
        ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "MASALAH YANG SERING DIALAMI",
    title: "Ketika Kebutuhan Modal Usaha Tidak Terpenuhi",
    description:
      "Tanpa strategi pembiayaan dan struktur jaminan yang tepat, pertumbuhan bisnis terhambat dan aset tidak dimanfaatkan secara optimal.",
    items: [
      {
        title: "Modal Kerja Tidak Cukup",
        description:
          "Kebutuhan operasional atau ekspansi meningkat, sementara akses kredit terbatas atau struktur pinjaman belum efisien.",
      },
      {
        title: "Jaminan Aset Belum Optimal",
        description:
          "Aset tetap perusahaan belum distrukturkan sebagai jaminan yang kuat untuk mendukung plafon pembiayaan.",
      },
      {
        title: "Struktur Pembiayaan Tidak Selaras",
        description:
          "Tenor, bunga, dan komposisi fasilitas kredit tidak sesuai siklus bisnis — menekan arus kas dan margin.",
      },
      {
        title: "Dokumentasi & Narasi Lemah",
        description:
          "Proposal ke bank kurang meyakinkan karena analisis keuangan dan strategi bisnis belum disusun secara profesional.",
      },
    ],
  },

  solusi: {
    eyebrow: "SOLUSI KAMI",
    title: "Strategic Business & Financial Consultant",
    description:
      "Danawangsa Capital membantu merancang strategi pembiayaan modal usaha dengan jaminan aset yang disesuaikan profil bisnis Anda.",
    items: [
      "Analisis kebutuhan modal kerja, ekspansi, dan kapasitas pembayaran",
      "Review dan rekomendasi struktur jaminan aset yang optimal",
      "Perancangan skema pembiayaan dan timeline eksekusi",
      "Penyusunan dokumentasi dan narasi bisnis untuk negosiasi bank",
      "Pendampingan negosiasi dan monitoring pasca-kesepakatan",
    ],
    ctaLabel: "Diskusikan Kebutuhan Modal Usaha",
  },

  manfaat: {
    eyebrow: "MANFAAT UTAMA",
    title: "Apa yang Anda Dapatkan",
    items: [
      {
        title: "Struktur Modal Efisien",
        description:
          "Skema pembiayaan yang selaras dengan siklus bisnis dan kebutuhan modal kerja jangka menengah.",
        icon: "wallet",
      },
      {
        title: "Jaminan Aset Optimal",
        description:
          "Rekomendasi pemanfaatan aset tetap sebagai jaminan yang kuat tanpa mengorbankan operasional.",
        icon: "shield",
      },
      {
        title: "Ekspansi Lebih Terukur",
        description:
          "Peta pendanaan yang mendukung pertumbuhan usaha dengan risiko yang terkendali.",
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
        title: "Discovery & Assessment",
        description:
          "Memetakan kebutuhan modal usaha, tujuan ekspansi, aset yang tersedia, dan urgensi pembiayaan.",
        deliverable: "Ringkasan kebutuhan & rekomendasi langkah awal",
      },
      {
        step: 2,
        title: "Analisis Keuangan & Aset",
        description:
          "Review laporan keuangan, portofolio aset, struktur pinjaman aktif, dan kapasitas pembayaran.",
        deliverable: "Laporan analisis & peta aset-keuangan",
      },
      {
        step: 3,
        title: "Perancangan Strategi Pembiayaan",
        description:
          "Menyusun skema pembiayaan, struktur jaminan, tenor, dan opsi koordinasi dengan bank.",
        deliverable: "Dokumen strategi & proposal fee transparan",
      },
      {
        step: 4,
        title: "Pendampingan Negosiasi",
        description:
          "Mendampingi komunikasi dengan bank: dokumen, meeting, negosiasi syarat, dan follow-up.",
        deliverable: "Dokumentasi negosiasi & action plan",
      },
      {
        step: 5,
        title: "Monitoring & Evaluasi",
        description:
          "Evaluasi hasil pembiayaan dan rekomendasi penyesuaian struktur jangka panjang.",
        deliverable: "Laporan evaluasi & rekomendasi lanjutan",
      },
    ],
  },

  strukturFee: generalStrukturFee,

  cocokUntuk: {
    eyebrow: "COCOK UNTUK",
    title: "Siapa yang Membutuhkan Layanan Ini?",
    items: [
      "UMKM & perusahaan menengah yang butuh modal kerja",
      "Bisnis dalam fase ekspansi atau diversifikasi",
      "Pemilik aset tetap yang ingin optimalisasi jaminan",
      "Perusahaan manufaktur, distribusi, & trading",
      "Manajemen yang ingin restrukturisasi fasilitas kredit",
      "Entitas dengan kebutuhan pembiayaan jangka menengah",
    ],
  },

  faq: createStandardFaq("MODAL USAHA", "modal usaha dengan jaminan aset"),

  cta: createServiceCta(
    "Rancang Strategi Pembiayaan Modal Usaha yang Tepat",
    "Ceritakan kebutuhan modal kerja dan aset jaminan Anda. Tim advisor kami siap merespons dalam 1×24 jam dengan analisis awal.",
  ),
};