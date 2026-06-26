import {
  Banknote,
  Briefcase,
  Castle,
  FileSignature,
  Flag,
  HandCoins,
  Handshake,
  Layers,
  MessageSquare,
  Shield,
  Target,
  Trophy,
  Zap,
} from "lucide-react";

import type {
  FaqItem,
  FeeItem,
  ProcessStep,
  Service,
  Testimonial,
  TrustStat,
  ValueProposition,
} from "@/types";

export const trustStats: TrustStat[] = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "150+", label: "Kasus Ditangani" },
  { value: "1–2 Hari", label: "Analisis Awal" },
  { value: "100%", label: "Fee Transparan" },
];

export const positioningYes: string[] = [
  "Konsultasi strategi bisnis & keuangan untuk UMKM hingga korporasi",
  "Analisis posisi keuangan, aset, dan arus kas perusahaan",
  "Merancang struktur pendanaan & pendampingan negosiasi dengan bank/mitra",
  "Bridging strategy & restrukturisasi kredit dengan pendampingan penuh",
  "Laporan strategis, monitoring progres, dan evaluasi berkala",
];

export const positioningNo: string[] = [
  "Tidak mencairkan dana atau memberikan pinjaman kepada klien",
  "Bukan lembaga pembiayaan, bank, multifinance, atau pemberi kredit",
  "Bukan penjual produk investasi atau skema return dijamin",
  "Tidak menjamin persetujuan kredit dari pihak ketiga",
  "Fee konsultasi terpisah dari biaya pihak ketiga (bank, notaris, dll.)",
];

export const services: Service[] = [
  {
    id: "funding",
    number: "01",
    category: "KONSULTASI PENDANAAN STRATEGIS",
    title: "Optimalisasi Modal Usaha & Jaminan Aset",
    description:
      "Konsultasi mendalam untuk merancang strategi pendanaan optimal — kami dampingi analisis, perencanaan, dan negosiasi, bukan menyalurkan dana.",
    features: [
      "Perencanaan modal kerja",
      "Strategi ekspansi usaha",
      "Struktur jaminan yang tepat",
      "Negosiasi & pendampingan",
      "Rekomendasi skema terbaik",
    ],
    icon: Castle,
  },
  {
    id: "passive-income",
    number: "02",
    category: "PENDAPATAN PASIF",
    title: "Perencanaan Pendapatan Pasif dari Aset",
    description:
      "Konsultasi untuk mengoptimalkan aset tetap menjadi sumber pendapatan tambahan yang stabil tanpa harus menjual aset.",
    features: [
      "Analisis potensi aset",
      "Struktur imbal hasil",
      "Rekomendasi skema aman",
      "Pendampingan legal & kontrak",
      "Monitoring & evaluasi",
    ],
    icon: HandCoins,
  },
  {
    id: "working-capital",
    number: "03",
    category: "STRUKTUR MODAL KERJA",
    title: "Konsultasi Struktur Modal Kerja & SKBDN",
    description:
      "Pendampingan dalam merancang dan mengoptimalkan struktur modal kerja berbasis dokumen perdagangan (SKBDN) untuk supplier, kontraktor, dan trading.",
    features: [
      "Analisis kebutuhan proyek",
      "Struktur dokumen yang tepat",
      "Rekomendasi skema pembiayaan",
      "Pendampingan negosiasi",
      "Monitoring arus kas proyek",
    ],
    icon: Briefcase,
  },
  {
    id: "general",
    number: "04",
    category: "KONSULTASI",
    title: "Konsultasi Bisnis dan Keuangan Strategis",
    description:
      "Layanan pendampingan menyeluruh untuk mengembangkan bisnis, memperkuat struktur keuangan, dan meningkatkan profitabilitas.",
    features: [
      "Analisis & strategi bisnis",
      "Perencanaan keuangan",
      "Struktur pendanaan optimal",
      "Efisiensi & profitabilitas",
      "Persiapan investasi & ekspansi",
    ],
    icon: MessageSquare,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description:
      "Sesi awal gratis untuk memahami kebutuhan, kondisi keuangan, dan urgensi kasus Anda.",
  },
  {
    step: 2,
    title: "Analisis & Strategi",
    description:
      "Tim kami menganalisis data, merancang strategi, dan menyampaikan proposal fee yang jelas sebelum dimulai.",
  },
  {
    step: 3,
    title: "Pendampingan Eksekusi",
    description:
      "Implementasi strategi dengan pendampingan aktif — negosiasi, dokumentasi, dan koordinasi dengan mitra.",
  },
  {
    step: 4,
    title: "Laporan & Monitoring",
    description:
      "Serah terima laporan final, evaluasi hasil, dan rekomendasi langkah selanjutnya untuk bisnis Anda.",
  },
];

export const feeItems: FeeItem[] = [
  {
    id: "retainer",
    title: "Retainer / Base Fee",
    amount: "35–50%",
    description:
      "DP di awal (non-refundable) untuk memulai analisis mendalam & penyusunan strategi.",
    footnote: "Fee konsultasi, terpisah dari biaya pihak ketiga.",
    icon: FileSignature,
  },
  {
    id: "milestone",
    title: "Milestone Payment",
    amount: "Bertahap",
    description:
      "Pembayaran per tahap: analisis selesai, strategi disetujui, negosiasi dimulai.",
    footnote: "Transparan per milestone yang disepakati bersama.",
    icon: Layers,
  },
  {
    id: "final",
    title: "Final / Pelunasan Fee",
    amount: "Sisa",
    description:
      "Pelunasan saat deliverable diserahkan: laporan final, dokumen strategi, atau milestone tercapai.",
    footnote: "Dibayar setelah hasil kerja konsultasi diserahkan.",
    icon: Flag,
  },
  {
    id: "success",
    title: "Success Fee",
    amount: "3–6%",
    description:
      "Khusus Bridging & Restrukturisasi — hanya dibayar jika pendanaan berhasil dicairkan atau restrukturisasi disetujui.",
    footnote: "Berbasis hasil, bukan janji pencairan dana.",
    icon: Trophy,
    highlighted: true,
  },
];

export const feeNotes = [
  "Fee konsultasi terpisah dari biaya pihak ketiga (bank, legal, notaris, appraisal, dll.)",
  "Detail lengkap akan dituangkan dalam Perjanjian Konsultasi resmi",
  "Fee dapat disesuaikan berdasarkan kompleksitas, nilai transaksi, dan urgensi kasus",
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Pinjaman bank kami jatuh tempo dalam 10 hari. Tim Danawangsa merancang strategi bridging yang tepat dan mendampingi negosiasi hingga plafon kami kembali normal.",
    role: "Direktur Keuangan",
    company: "Perusahaan Konstruksi • Jakarta",
  },
  {
    id: "2",
    quote:
      "Awalnya kami kira ini lembaga pembiayaan. Ternyata mereka benar-benar konsultan — analisisnya mendalam dan fee-nya transparan sejak proposal awal.",
    role: "Owner UMKM",
    company: "Distribusi & Trading • Surabaya",
  },
  {
    id: "3",
    quote:
      "Struktur modal kerja SKBDN kami sebelumnya tidak efisien. Setelah konsultasi, arus kas proyek jauh lebih terkendali dan margin profit naik signifikan.",
    role: "Direktur Operasional",
    company: "Perusahaan Logistik • Jakarta",
  },
];

export const valuePropositions: ValueProposition[] = [
  {
    id: "speed",
    title: "RESPONS CEPAT",
    description:
      "Analisis dan rekomendasi strategi dalam waktu singkat dan tepat sasaran.",
    icon: Zap,
  },
  {
    id: "network",
    title: "JARINGAN STRATEGIS",
    description:
      "Didukung jaringan profesional di bidang keuangan, hukum, dan perbankan.",
    icon: Handshake,
  },
  {
    id: "personalized",
    title: "SOLUSI TERPERSONALISASI",
    description:
      "Setiap rekomendasi disesuaikan dengan kondisi dan kebutuhan spesifik klien.",
    icon: Target,
  },
  {
    id: "confidential",
    title: "KONFIDENTIAL & PROFESIONAL",
    description:
      "Menjaga kerahasiaan data dan informasi klien dengan standar profesional tinggi.",
    icon: Shield,
  },
];

export const trustBadges = [
  { label: "NDA & Kerahasiaan", icon: Shield },
  { label: "Tim Berpengalaman", icon: Briefcase },
  { label: "Jaringan Bank & Legal", icon: Banknote },
];

export const faqItems: FaqItem[] = [
  {
    id: "financing",
    question: "Apakah Danawangsa Capital adalah lembaga pembiayaan atau bank?",
    answer:
      "Tidak. Kami bukan lembaga pembiayaan maupun bank. Danawangsa Capital adalah firma konsultasi bisnis & keuangan strategis. Kami tidak mencairkan dana, tidak memberikan pinjaman, dan tidak bertindak sebagai lembaga pembiayaan. Peran kami adalah menganalisis, merancang strategi, dan mendampingi Anda dalam proses pendanaan dengan pihak ketiga.",
  },
  {
    id: "cost",
    question: "Berapa biaya konsultasi?",
    answer:
      "Fee bervariasi sesuai kompleksitas kasus. Umumnya terdiri dari retainer awal (35–50%), milestone payment, dan final fee. Untuk kasus Bridging, ada success fee 3–6% yang hanya dibayar jika hasil tercapai. Konsultasi awal 30 menit gratis tanpa komitmen.",
  },
  {
    id: "guarantee",
    question: "Apakah Anda menjamin persetujuan kredit dari bank?",
    answer:
      "Tidak ada yang bisa menjamin persetujuan kredit — keputusan sepenuhnya di tangan bank. Namun, kami memaksimalkan peluang dengan strategi yang tepat, dokumentasi lengkap, dan pendampingan negosiasi profesional berdasarkan pengalaman puluhan kasus serupa.",
  },
  {
    id: "duration",
    question: "Berapa lama proses konsultasi biasanya?",
    answer:
      "Analisis awal untuk kasus urgent (bridging) dapat selesai dalam 1–2 hari kerja. Proses lengkap bervariasi: 2–4 minggu untuk konsultasi standar, hingga 1–3 bulan untuk kasus kompleks dengan multi-pihak.",
  },
  {
    id: "security",
    question: "Apakah data perusahaan saya aman?",
    answer:
      "Ya. Kami menandatangani NDA (Non-Disclosure Agreement) sebelum memulai pekerjaan. Semua data keuangan, dokumen legal, dan informasi bisnis dijaga dengan standar kerahasiaan profesional.",
  },
];

export const consultationTopics = [
  "Strategi Bridging & Restrukturisasi Kredit",
  "Optimalisasi Modal Usaha & Aset",
  "Perencanaan Pendapatan Pasif dari Aset",
  "Struktur Modal Kerja & SKBDN",
  "Konsultasi Bisnis & Keuangan Umum",
] as const;

