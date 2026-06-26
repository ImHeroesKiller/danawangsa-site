import type { ServicePageData } from "@/types/service";

import {
  ADVISORY_FOOTNOTE,
  ADVISORY_POSITIONING,
  createServiceCta,
  FEE_FOOTNOTE,
} from "./shared-content";

const slug = "asset-collateral-program";
const path = `/layanan/${slug}`;
const name = "Asset Collateral Program";

const collateralStrukturFee: ServicePageData["strukturFee"] = {
  eyebrow: "STRUKTUR FEE",
  title: "Fleksibel & Disesuaikan dengan Proyek",
  description:
    "Struktur fee konsultasi disesuaikan dengan kompleksitas skema kemitraan. Biaya akan dibahas lebih lanjut setelah proses assessment.",
  items: [
    {
      id: "scheme",
      title: "Struktur Skema Kemitraan",
      amount: "Disesuaikan",
      description:
        "Imbal hasil terstruktur per siklus investasi — dirancang transparan dan disepakati ketiga pihak sebelum eksekusi.",
      highlighted: true,
    },
    {
      id: "cycle",
      title: "Siklus Program",
      amount: "Fleksibel",
      description:
        "Skema berjalan per siklus dengan potensi perpanjangan — disesuaikan kebutuhan Pemilik Aset, Investor, dan Pengguna Dana.",
    },
    {
      id: "consultation",
      title: "Fee Konsultasi Danawangsa",
      amount: "Disesuaikan",
      description:
        "Fee pendampingan strategi, legal, dan eksekusi diatur dalam Perjanjian Konsultasi setelah assessment awal.",
    },
  ],
  footnote: FEE_FOOTNOTE,
};

export const assetCollateralProgramService: ServicePageData = {
  slug,
  path,
  navLabel: name,
  consultationModalType: "general",

  meta: {
    title: name,
    description:
      "Konsultasi Collateral Partnership Scheme — menghubungkan Pemilik Aset, Investor, dan Pengguna Dana melalui struktur tripartit & kontrak legal terpisah. Strategic Business & Financial Consultant.",
  },

  listing: {
    category: "COLLATERAL PARTNERSHIP",
    title: name,
    description:
      "Skema kemitraan jaminan dengan dua jalur utama — Asset/Collateral Liquidation Scheme & Fresh Money Scheme — untuk pencairan cepat dan imbal hasil terstruktur.",
  },

  hero: {
    badge: { label: "PROGRAM KONSULTASI ASET", variant: "amber" },
    title: "Asset Collateral",
    titleHighlight: "Program",
    description:
      "Strategic Business & Financial Consultant untuk merancang Collateral Partnership Scheme — struktur tripartit antara Pemilik Aset, Investor, dan Pengguna Dana dengan kontrak legal terpisah.",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: { label: "Lihat Struktur Fee", href: `${path}#fee` },
  },

  teaser: {
    badge: { label: "OPTIMALISASI ASET", variant: "amber" },
    title: "ASSET COLLATERAL",
    titleHighlight: "Program",
    description:
      "Butuh likuiditas cepat atau ingin monetisasi aset? Kami bantu merancang skema kemitraan jaminan dengan dua jalur — Liquidation & Fresh Money — melalui pendampingan profesional.",
    highlights: [
      { label: "Imbal Hasil Terstruktur per Siklus", icon: "wallet" },
      { label: "Potensi Perpanjangan Siklus", icon: "trending-up" },
      { label: "Pencairan Cepat", icon: "bolt" },
    ],
    benefitBullets: [
      "Struktur tripartit yang jelas",
      "Kontrak legal terpisah per pihak",
      "Tanpa menjual aset produktif",
    ],
    card: {
      eyebrow: "MAKSIMALKAN NILAI ASET ANDA?",
      description:
        "Pelajari proses 5 langkah, struktur fee, FAQ, dan profil klien yang cocok di halaman detail layanan.",
      footnote: ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "MASALAH YANG SERING DIALAMI",
    title: "Ketika Kebutuhan Likuiditas Bertemu Aset yang Idle",
    description:
      "Tanpa struktur kemitraan yang jelas, ketiga pihak — Pemilik Aset, Investor, dan Pengguna Dana — sering kesulitan menemukan skema yang aman, cepat, dan menguntungkan.",
    items: [
      {
        title: "Pemilik Aset Sulit Monetisasi",
        description:
          "Aset tetap bernilai tinggi tetapi tidak bisa diaktifkan sebagai sumber pendapatan tanpa menjual atau mengalami proses likuidasi yang rumit.",
      },
      {
        title: "Pengguna Dana Butuh Pencairan Cepat",
        description:
          "Kebutuhan modal mendesak tidak terlayani karena proses pembiayaan konvensional lambat atau plafon kredit terbatas.",
      },
      {
        title: "Investor Mencari Imbal Hasil Terukur",
        description:
          "Modal menganggur karena belum ada skema jaminan yang transparan, dengan risiko dan return yang dapat dipetakan.",
      },
      {
        title: "Struktur Multi-Pihak Tidak Jelas",
        description:
          "Hubungan antar pihak belum diatur dengan kontrak legal terpisah, sehingga risiko sengketa dan eksekusi meningkat.",
      },
    ],
  },

  solusi: {
    eyebrow: "SOLUSI KAMI",
    title: "Collateral Partnership Scheme — Dua Jalur Utama",
    description:
      "Danawangsa Capital merancang dan mendampingi Collateral Partnership Scheme dengan struktur tripartit yang disesuaikan kebutuhan masing-masing pihak sebagai Strategic Business & Financial Consultant.",
    items: [
      "Asset/Collateral Liquidation Scheme — pemanfaatan aset atau jaminan melalui skema likuidasi terstruktur dengan timeline dan imbal hasil yang jelas",
      "Fresh Money Scheme — struktur fresh money dengan jaminan aset untuk kebutuhan likuiditas jangka pendek Pengguna Dana",
      "Pemetaan peran & kewajiban Pemilik Aset, Investor, dan Pengguna Dana dalam satu kerangka kemitraan",
      "Penyusunan kontrak legal terpisah untuk setiap pihak — bukan satu kontrak gabungan yang ambigu",
      "Pendampingan due diligence, negosiasi, dan monitoring siklus program",
    ],
    ctaLabel: "Diskusikan Skema Kemitraan Anda",
  },

  manfaat: {
    eyebrow: "MANFAAT UTAMA",
    title: "Keunggulan Collateral Partnership Scheme",
    items: [
      {
        title: "Imbal Hasil Terstruktur per Siklus",
        description:
          "Struktur imbal hasil transparan per siklus investasi — memudahkan perencanaan bagi Investor dan Pemilik Aset.",
        icon: "wallet",
      },
      {
        title: "Potensi Perpanjangan Siklus",
        description:
          "Skema berpotensi diperpanjang dalam beberapa siklus per tahun — memaksimalkan rotasi modal dan pendapatan.",
        icon: "trending-up",
      },
      {
        title: "Pencairan Cepat",
        description:
          "Struktur tripartit yang sudah distandarkan mempercepat proses matching, kontrak, dan pencairan dibanding jalur konvensional.",
        icon: "bolt",
      },
    ],
  },

  proses: {
    eyebrow: "PROSES KERJA",
    title: "Struktur Tripartit & Kontrak Legal Terpisah",
    description:
      "Setiap skema melibatkan tiga pihak dengan peran, risiko, dan kontrak yang terpisah secara legal.",
    items: [
      {
        step: 1,
        title: "Assessment & Matching Pihak",
        description:
          "Identifikasi Pemilik Aset, Investor, dan Pengguna Dana — evaluasi profil aset, kebutuhan dana, dan ekspektasi imbal hasil.",
        deliverable: "Profil tripartit & rekomendasi skema (Liquidation / Fresh Money)",
      },
      {
        step: 2,
        title: "Due Diligence & Valuasi Aset",
        description:
          "Verifikasi legal aset, appraisal nilai jaminan, dan analisis risiko untuk ketiga pihak.",
        deliverable: "Laporan due diligence & valuasi jaminan",
      },
      {
        step: 3,
        title: "Perancangan Kontrak Terpisah",
        description:
          "Penyusunan kontrak legal independen: Pemilik Aset ↔ Investor, Investor ↔ Pengguna Dana, serta perjanjian jaminan — masing-masing dengan hak, kewajiban, dan exit clause yang jelas.",
        deliverable: "Draft kontrak terpisah per pihak & term sheet",
      },
      {
        step: 4,
        title: "Eksekusi & Pencairan",
        description:
          "Koordinasi penandatanganan, pencairan dana, dan pendaftaran jaminan sesuai skema yang dipilih.",
        deliverable: "Dokumentasi eksekusi & bukti pencairan",
      },
      {
        step: 5,
        title: "Monitoring Siklus & Perpanjangan",
        description:
          "Pemantauan siklus program, evaluasi performa, dan rekomendasi perpanjangan sesuai kesepakatan ketiga pihak.",
        deliverable: "Laporan monitoring & rekomendasi siklus berikutnya",
      },
    ],
  },

  strukturFee: collateralStrukturFee,

  cocokUntuk: {
    eyebrow: "COCOK UNTUK",
    title: "Tiga Pihak dalam Collateral Partnership Scheme",
    items: [
      "Pemilik Aset — pemilik tanah, bangunan, properti komersial, atau aset produktif yang ingin monetisasi tanpa menjual",
      "Investor — individu atau institusi yang mencari imbal hasil terstruktur dari aset jaminan per siklus investasi",
      "Pengguna Dana — perusahaan atau UMKM yang membutuhkan likuiditas cepat dengan jaminan aset melalui Fresh Money atau Liquidation Scheme",
    ],
  },

  faq: {
    eyebrow: "FAQ COLLATERAL PARTNERSHIP",
    title: "Pertanyaan Umum",
    items: [
      {
        id: "aset-1",
        question:
          "Apa peran Danawangsa Capital dalam Collateral Partnership Scheme?",
        answer:
          "Danawangsa Capital adalah Strategic Business & Financial Consultant yang merancang struktur, menyusun kontrak, dan mendampingi proses kemitraan antar Pemilik Aset, Investor, dan Pengguna Dana.",
      },
      {
        id: "aset-2",
        question:
          "Apa beda Asset/Collateral Liquidation Scheme dan Fresh Money Scheme?",
        answer:
          "Liquidation Scheme memanfaatkan aset atau jaminan melalui proses likuidasi terstruktur dengan timeline jelas. Fresh Money Scheme menyediakan likuiditas baru kepada Pengguna Dana dengan jaminan aset dari Pemilik Aset — cocok untuk kebutuhan modal jangka pendek.",
      },
      {
        id: "aset-3",
        question: "Mengapa kontrak legal harus terpisah per pihak?",
        answer:
          "Pemisahan kontrak melindungi hak dan kewajiban masing-masing pihak — Pemilik Aset, Investor, dan Pengguna Dana — serta meminimalkan risiko sengketa. Setiap kontrak memiliki exit clause, jaminan, dan mekanisme penyelesaian yang spesifik.",
      },
      {
        id: "aset-4",
        question: "Bagaimana risiko jaminan dan eksekusi ditangani?",
        answer:
          "Risiko diminimalkan melalui due diligence aset, valuasi independen, dan klausul eksekusi jaminan dalam kontrak. Kami memastikan struktur, dokumentasi, dan proses sesuai praktik terbaik.",
      },
      {
        id: "aset-5",
        question: "Apakah skema bisa diperpanjang lebih dari satu siklus?",
        answer:
          "Ya. Skema berjalan per siklus dan dapat diperpanjang sesuai kesepakatan ketiga pihak, dengan struktur imbal hasil yang transparan per siklus aktif.",
      },
      {
        id: "aset-6",
        question: "Bisakah saya mulai dengan konsultasi gratis?",
        answer:
          "Ya. Konsultasi awal ±30 menit gratis dan tanpa komitmen. Kami akan menilai profil Anda — sebagai Pemilik Aset, Investor, atau Pengguna Dana — dan menjelaskan skema yang paling sesuai.",
      },
    ],
  },

  cta: createServiceCta(
    "Rancang Collateral Partnership Scheme yang Tepat untuk Anda",
    "Ceritakan peran Anda — Pemilik Aset, Investor, atau Pengguna Dana. Tim advisor kami siap merespons dalam 1×24 jam.",
  ),
};