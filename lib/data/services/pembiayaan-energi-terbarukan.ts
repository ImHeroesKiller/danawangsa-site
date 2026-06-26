import type { ServicePageData } from "@/types/service";

import {
  ADVISORY_FOOTNOTE,
  ADVISORY_POSITIONING,
  createServiceCta,
  generalStrukturFee,
} from "./shared-content";

const slug = "pembiayaan-energi-terbarukan";
const path = `/layanan/${slug}`;
const name = "Konsultasi Pembiayaan Energi Terbarukan";

export const renewableEnergyFinancingService: ServicePageData = {
  slug,
  path,
  navLabel: name,
  consultationModalType: "general",

  meta: {
    title: name,
    description:
      "Konsultasi strategis pembiayaan energi terbarukan dan efisiensi energi untuk proyek solar, wind, hydro, biomass, dan waste-to-energy. Strategic Business & Financial Consultant.",
  },

  listing: {
    category: "GREEN FINANCING ADVISORY",
    title: name,
    description:
      "Pendampingan strategis perancangan dan strukturisasi pembiayaan proyek energi terbarukan, efisiensi energi industri, serta pembiayaan hijau berbasis ESG.",
    badge: "Baru",
  },

  hero: {
    badge: { label: "GREEN FINANCING ADVISORY", variant: "amber" },
    title: "Konsultasi Pembiayaan",
    titleHighlight: "Energi Terbarukan",
    description:
      "Strategic Business & Financial Consultant untuk merancang dan mendampingi pembiayaan proyek energi terbarukan serta efisiensi energi — penyusunan strategi, struktur, dan koordinasi dengan sumber pendanaan hijau.",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: { label: "Lihat Struktur Fee", href: `${path}#fee` },
  },

  teaser: {
    badge: { label: "GREEN FINANCING", variant: "amber" },
    title: "RENEWABLE ENERGY",
    titleHighlight: "Financing Advisory",
    description:
      "Butuh pendampingan strategis untuk pembiayaan proyek solar, wind, hydro, atau efisiensi energi? Kami bantu rancang struktur optimal dan akses sumber pendanaan hijau.",
    highlights: [
      { label: "Strategi Pembiayaan Hijau", icon: "zap" },
      { label: "Efisiensi Energi", icon: "bolt" },
      { label: "Kepatuhan ESG", icon: "shield" },
    ],
    benefitBullets: [
      "Struktur pembiayaan lebih optimal",
      "Akses sumber pendanaan hijau lebih terarah",
      "Percepatan eksekusi proyek energi",
    ],
    card: {
      eyebrow: "MEMPERSIAPKAN PROYEK ENERGI TERBARUKAN?",
      description:
        "Pelajari proses 5 langkah, struktur fee, FAQ, dan profil klien yang cocok di halaman detail layanan.",
      footnote: ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "MASALAH YANG SERING DIALAMI",
    title: "Ketika Proyek Energi Terbarukan Terhambat Pendanaan",
    description:
      "Banyak proyek energi terbarukan dan efisiensi energi gagal berjalan bukan karena teknologinya, melainkan karena struktur pembiayaan dan kesiapan dokumen yang belum matang.",
    items: [
      {
        title: "Struktur Pembiayaan Belum Jelas",
        description:
          "Proyek solar, wind, hydro, atau biomass belum memiliki skema pembiayaan yang sesuai profil risiko, tenor, dan arus kas proyek.",
      },
      {
        title: "Akses Pendanaan Hijau Terbatas",
        description:
          "Perusahaan kesulitan mengidentifikasi dan menyiapkan diri untuk green loan, sustainability-linked financing, atau investor impact.",
      },
      {
        title: "Proyek Efisiensi Energi Sulit Di-justify",
        description:
          "Investasi efisiensi energi di pabrik atau gedung belum terukur ROI-nya secara finansial — menghambat persetujuan pendanaan internal maupun eksternal.",
      },
      {
        title: "Kesiapan ESG & Dokumentasi Kurang",
        description:
          "Laporan keberlanjutan, baseline emisi, dan dokumen due diligence belum memenuhi standar yang dibutuhkan sumber pendanaan hijau.",
      },
    ],
  },

  solusi: {
    eyebrow: "SOLUSI KAMI",
    title: "Strategic Green Financing Advisory",
    description:
      "Danawangsa Capital mendampingi perusahaan dan pengembang proyek sebagai Strategic Business & Financial Consultant dalam merancang strategi pembiayaan energi terbarukan.",
    items: [
      "Strategi pembiayaan proyek energi terbarukan (solar, wind, hydro, biomass, waste-to-energy)",
      "Pendampingan proyek efisiensi energi di industri dan gedung komersial",
      "Perancangan struktur pembiayaan hijau dan sustainability-linked financing",
      "Business matching dengan sumber pendanaan hijau dan investor strategis",
      "Penyusunan dokumen investasi, financial model, dan materi presentasi proyek",
    ],
    ctaLabel: "Diskusikan Proyek Energi Anda",
  },

  manfaat: {
    eyebrow: "MANFAAT UTAMA",
    title: "Apa yang Anda Dapatkan",
    items: [
      {
        title: "Akses Pendanaan Lebih Terarah",
        description:
          "Peta sumber pendanaan hijau yang relevan dengan profil proyek dan kapasitas perusahaan Anda.",
        icon: "wallet",
      },
      {
        title: "Struktur Pembiayaan Optimal",
        description:
          "Skema tenor, covenant, dan cash flow yang selaras dengan karakteristik proyek energi terbarukan.",
        icon: "zap",
      },
      {
        title: "Percepatan Eksekusi Proyek",
        description:
          "Dokumentasi dan strategi yang siap presentasi — mempercepat proses due diligence dan negosiasi.",
        icon: "bolt",
      },
      {
        title: "Kepatuhan ESG Terintegrasi",
        description:
          "Pendekatan pembiayaan yang selaras dengan target keberlanjutan dan pelaporan ESG perusahaan.",
        icon: "shield",
      },
    ],
  },

  proses: {
    eyebrow: "PROSES KERJA",
    title: "5 Langkah Pendampingan yang Kami Dampingi",
    description:
      "Setiap tahap memiliki deliverable jelas — dari assessment awal hingga penutupan pembiayaan.",
    items: [
      {
        step: 1,
        title: "Assessment & Scoping",
        description:
          "Evaluasi awal profil proyek, kapasitas teknis, kebutuhan pendanaan, dan target ESG perusahaan.",
        deliverable: "Ringkasan assessment & scope konsultasi",
      },
      {
        step: 2,
        title: "Studi Kelayakan Finansial",
        description:
          "Analisis arus kas proyek, sensitivitas risiko, dan perbandingan skema pembiayaan yang memungkinkan.",
        deliverable: "Financial model & laporan kelayakan awal",
      },
      {
        step: 3,
        title: "Perancangan Struktur Pembiayaan",
        description:
          "Menyusun struktur green financing, sustainability-linked financing, atau skema investor yang sesuai.",
        deliverable: "Dokumen strategi pembiayaan & proposal fee",
      },
      {
        step: 4,
        title: "Pendampingan Sourcing & Negosiasi",
        description:
          "Koordinasi presentasi proyek, due diligence, dan negosiasi dengan sumber pendanaan hijau atau investor.",
        deliverable: "Pitch deck, data room checklist & action plan",
      },
      {
        step: 5,
        title: "Closing & Evaluasi",
        description:
          "Pendampingan penutupan transaksi pembiayaan dan evaluasi pasca-implementasi strategi.",
        deliverable: "Laporan closing & rekomendasi tindak lanjut",
      },
    ],
  },

  strukturFee: generalStrukturFee,

  cocokUntuk: {
    eyebrow: "COCOK UNTUK",
    title: "Siapa yang Membutuhkan Layanan Ini?",
    items: [
      "Pengembang proyek energi terbarukan (solar, wind, hydro, biomass, waste-to-energy)",
      "Perusahaan industri yang ingin membiayai proyek efisiensi energi",
      "Pengelola gedung komersial & properti yang bertransisi ke energi bersih",
      "Korporasi dengan target net-zero atau komitmen ESG",
      "Perusahaan yang mempersiapkan green loan atau sustainability-linked loan",
      "Investor atau konsorsium yang membutuhkan advisory struktur pembiayaan proyek",
    ],
  },

  faq: {
    eyebrow: "FAQ GREEN FINANCING",
    title: "Pertanyaan Umum",
    items: [
      {
        id: "renewable-1",
        question:
          "Apa peran Danawangsa Capital dalam pembiayaan energi terbarukan?",
        answer:
          "Danawangsa Capital adalah Strategic Business & Financial Consultant yang merancang strategi, menyusun dokumen, dan mendampingi proses sourcing pendanaan hijau bersama mitra pendanaan serta pihak terkait.",
      },
      {
        id: "renewable-2",
        question:
          "Jenis proyek energi terbarukan apa yang bisa didampingi?",
        answer:
          "Kami mendampingi konsultasi pembiayaan untuk solar (PLTS), wind, hydro, biomass, waste-to-energy, serta proyek efisiensi energi di industri dan gedung. Scope spesifik disesuaikan dalam proposal konsultasi.",
      },
      {
        id: "renewable-3",
        question: "Apa itu sustainability-linked financing dan apakah bisa didampingi?",
        answer:
          "Ya. Sustainability-linked financing (SLF) adalah fasilitas kredit dengan margin yang terkait pencapaian target keberlanjutan. Kami bantu merancang struktur, KPI ESG, dan dokumentasi yang dibutuhkan untuk pendekatan ini.",
      },
      {
        id: "renewable-4",
        question: "Berapa lama proses konsultasi pembiayaan proyek energi?",
        answer:
          "Assessment awal umumnya 1–2 minggu. Proses lengkap bervariasi 4–8 minggu untuk proyek menengah, hingga 2–4 bulan untuk proyek skala besar dengan multi-pihak dan due diligence mendalam.",
      },
      {
        id: "renewable-5",
        question: "Apakah proyek efisiensi energi juga termasuk dalam layanan ini?",
        answer:
          "Ya. Kami mendampingi pembiayaan proyek efisiensi energi — mulai dari audit energi finansial, perhitungan ROI/payback, hingga strukturisasi pendanaan untuk retrofit industri atau gedung.",
      },
      {
        id: "renewable-6",
        question: "Apakah Anda menjamin proyek mendapat pendanaan?",
        answer:
          "Tidak ada yang bisa menjamin persetujuan pendanaan — keputusan sepenuhnya di tangan lembaga keuangan atau investor. Namun, kami memaksimalkan peluang dengan strategi yang tepat, dokumentasi lengkap, dan pendampingan profesional.",
      },
    ],
  },

  cta: createServiceCta(
    "Rancang Strategi Pembiayaan Energi Terbarukan yang Tepat",
    "Ceritakan profil proyek dan kebutuhan pendanaan Anda. Tim advisor kami siap merespons dalam 1×24 jam.",
  ),
};