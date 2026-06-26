import type { ServicePageData } from "@/types/service";

import {
  ADVISORY_FOOTNOTE,
  ADVISORY_POSITIONING,
  generalStrukturFee,
} from "./shared-content";

export const bridgingRestrukturisasiService: ServicePageData = {
  slug: "bridging-restrukturisasi",
  path: "/layanan/bridging-restrukturisasi",
  navLabel: "Bridging Finance & Financial Restructuring",
  consultationModalType: "bridging",

  meta: {
    title: "Bridging Finance & Financial Restructuring",
    description:
      "Konsultasi strategi Bridging Finance & Financial Restructuring untuk perusahaan. Strategic Business & Financial Consultant — analisis 1–2 hari untuk kasus urgent.",
  },

  listing: {
    category: "BRIDGING & RESTRUCTURING",
    title: "Bridging Finance & Financial Restructuring",
    description:
      "Konsultasi strategi bridging finance dan restrukturisasi keuangan untuk mengatasi jatuh tempo pinjaman bank, restrukturisasi kredit, dan pemulihan plafon.",
    badge: "Populer",
  },

  hero: {
    badge: { label: "LAYANAN KONSULTASI STRATEGIS", variant: "amber" },
    title: "Bridging Finance &",
    titleHighlight: "Financial Restructuring",
    description:
      "Strategic Business & Financial Consultant untuk mengatasi jatuh tempo pinjaman — kami merancang strategi Bridging Finance & Financial Restructuring dan mendampingi negosiasi secara profesional.",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: {
      label: "Lihat Struktur Fee",
      href: "/layanan/bridging-restrukturisasi#fee",
    },
  },

  teaser: {
    badge: { label: "SOLUSI STRATEGIS", variant: "amber" },
    title: "BRIDGING FINANCE &",
    titleHighlight: "Financial Restructuring",
    description:
      "Pinjaman bank mendekati jatuh tempo? Kami membantu merancang strategi Bridging Finance dan mendampingi Financial Restructuring secara profesional.",
    highlights: [
      { label: "Analisis Cepat 1-2 Hari", icon: "bolt" },
      { label: "Strategi Jangka Pendek", icon: "clock" },
      { label: "Pendampingan Profesional", icon: "shield" },
    ],
    benefitBullets: [
      "Cash flow tetap terkendali",
      "Operasional tidak terganggu",
      "Plafon bank dapat dipulihkan",
    ],
    card: {
      eyebrow: "BUTUH PENDAMPATAN SEGERA?",
      description:
        "Pelajari proses 5 langkah, struktur fee, FAQ, dan kriteria klien yang cocok — semuanya di halaman detail layanan.",
      footnote:
        ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "MASALAH YANG SERING DIALAMI",
    title: "Ketika Jatuh Tempo Pinjaman Bank Menekan Bisnis",
    description:
      "Banyak pemilik usaha menghadapi situasi kritis ini — tanpa strategi yang tepat, risiko operasional dan reputasi kredit meningkat drastis.",
    items: [
      {
        title: "Pinjaman Bank Jatuh Tempo",
        description:
          "Fasilitas kredit mendekati tanggal pelunasan, sementara dana operasional belum tersedia atau proyek masih berjalan.",
      },
      {
        title: "Plafon Kredit Terkunci",
        description:
          "Bank sulit diakses kembali karena histori pembayaran, dokumentasi kurang lengkap, atau posisi keuangan yang perlu distrukturkan ulang.",
      },
      {
        title: "Tekanan Arus Kas",
        description:
          "Kebutuhan bayar supplier, gaji, atau komitmen proyek bertabrakan dengan jadwal cicilan bank yang padat.",
      },
      {
        title: "Waktu Terbatas untuk Negosiasi",
        description:
          "Manajemen tidak punya bandwidth atau jaringan yang cukup untuk merancang strategi dan bernegosiasi dengan bank secara efektif.",
      },
    ],
  },

  solusi: {
    eyebrow: "SOLUSI KAMI",
    title: "Strategic Business & Financial Consultant",
    description:
      "Danawangsa Capital membantu Anda merancang dan mengeksekusi strategi bridging finance & financial restructuring dengan pendampingan profesional di setiap tahap.",
    items: [
      "Analisis mendalam posisi keuangan, jatuh tempo, dan exposure kredit per bank",
      "Merancang strategi bridging yang realistis sesuai profil risiko perusahaan",
      "Menyusun dokumentasi dan narasi bisnis yang kuat untuk negosiasi dengan bank",
      "Pendampingan aktif dalam proses restrukturisasi atau perpanjangan fasilitas",
      "Monitoring arus kas dan milestone pelunasan hingga posisi kredit kembali sehat",
    ],
    ctaLabel: "Diskusikan Kasus Anda",
  },

  manfaat: {
    eyebrow: "MANFAAT UTAMA",
    title: "Apa yang Anda Dapatkan",
    items: [
      {
        title: "Cash Flow Aman",
        description:
          "Strategi yang dirancang untuk menjaga likuiditas operasional selama proses bridging berlangsung.",
        icon: "wallet",
      },
      {
        title: "Operasional Tetap Jalan",
        description:
          "Pendekatan yang meminimalkan gangguan pada supplier, proyek, dan komitmen bisnis harian.",
        icon: "zap",
      },
      {
        title: "Plafon Bank Dipulihkan",
        description:
          "Rekomendasi jangka panjang untuk memulihkan reputasi kredit dan akses fasilitas bank kembali.",
        icon: "trending-up",
      },
    ],
  },

  proses: {
    eyebrow: "PROSES KERJA",
    title: "5 Langkah Strategi yang Kami Dampingi",
    description:
      "Lebih mendetail dari ringkasan di homepage — setiap tahap memiliki deliverable yang jelas.",
    items: [
      {
        step: 1,
        title: "Discovery & Urgency Assessment",
        description:
          "Sesi konsultasi awal untuk memetakan jatuh tempo, nilai pinjaman, bank terkait, dan tingkat urgensi. Kami menentukan apakah kasus memerlukan respons 1–2 hari atau pendekatan terstruktur jangka menengah.",
        deliverable: "Ringkasan situasi & rekomendasi langkah awal",
      },
      {
        step: 2,
        title: "Analisis Posisi Keuangan",
        description:
          "Review laporan keuangan, struktur pinjaman, agunan, arus kas proyek, dan histori kredit. Identifikasi celah risiko dan peluang negosiasi dengan bank.",
        deliverable: "Laporan analisis & peta risiko",
      },
      {
        step: 3,
        title: "Perancangan Strategi Bridging",
        description:
          "Menyusun skenario bridging dan/atau restrukturisasi — termasuk timeline, struktur pembayaran sementara, dan opsi koordinasi dengan pihak ketiga.",
        deliverable: "Dokumen strategi & proposal fee transparan",
      },
      {
        step: 4,
        title: "Pendampingan Negosiasi Bank",
        description:
          "Mendampingi komunikasi dengan bank: penyusunan dokumen, persiapan meeting, negosiasi syarat, dan follow-up hingga kesepakatan prinsip tercapai.",
        deliverable: "Dokumentasi negosiasi & action plan",
      },
      {
        step: 5,
        title: "Monitoring & Pemulihan Plafon",
        description:
          "Evaluasi hasil restrukturisasi, monitoring arus kas pasca-kesepakatan, dan rekomendasi langkah untuk memulihkan reputasi kredit serta plafon jangka panjang.",
        deliverable: "Laporan final & rekomendasi lanjutan",
      },
    ],
  },

  strukturFee: generalStrukturFee,

  cocokUntuk: {
    eyebrow: "COCOK UNTUK",
    title: "Siapa yang Membutuhkan Layanan Ini?",
    items: [
      "Memiliki pinjaman bank mendekati jatuh tempo",
      "Butuh waktu untuk restrukturisasi",
      "Ingin menjaga reputasi kredit",
      "Supplier & Kontraktor proyek",
      "Vendor BUMN / Swasta",
      "Perusahaan dengan fasilitas kredit aktif",
    ],
  },

  faq: {
    eyebrow: "FAQ BRIDGING",
    title: "Pertanyaan Umum",
    items: [
      {
        id: "b1",
        question:
          "Apa peran Danawangsa Capital dalam Bridging Finance & Financial Restructuring?",
        answer:
          "Danawangsa Capital adalah Strategic Business & Financial Consultant yang merancang strategi bridging, menyusun dokumentasi, dan mendampingi proses negosiasi dengan mitra pendanaan serta pihak terkait.",
      },
      {
        id: "b2",
        question: "Berapa lama proses konsultasi bridging biasanya?",
        answer:
          "Analisis awal untuk kasus urgent dapat selesai dalam 1–2 hari kerja. Proses lengkap — dari strategi hingga negosiasi — umumnya 2–6 minggu, tergantung kompleksitas, jumlah bank terlibat, dan kesiapan dokumen klien.",
      },
      {
        id: "b3",
        question: "Bagaimana struktur fee konsultasi bridging ditentukan?",
        answer:
          "Struktur fee disesuaikan dengan kompleksitas dan kebutuhan proyek. Biaya konsultasi akan dibahas lebih lanjut setelah proses assessment awal, sebelum pekerjaan dimulai.",
      },
      {
        id: "b4",
        question: "Apakah Anda menjamin restrukturisasi disetujui bank?",
        answer:
          "Tidak ada yang bisa menjamin persetujuan bank. Namun, kami memaksimalkan peluang dengan strategi yang tepat, dokumentasi lengkap, dan pendampingan negosiasi profesional berdasarkan pengalaman puluhan kasus serupa.",
      },
      {
        id: "b5",
        question: "Dokumen apa yang perlu disiapkan klien?",
        answer:
          "Umumnya meliputi: laporan keuangan 2–3 tahun terakhir, struktur pinjaman aktif, jadwal jatuh tempo, dokumen agunan, arus kas proyek (jika ada), dan akta/legalitas perusahaan. Daftar lengkap disesuaikan setelah discovery call.",
      },
      {
        id: "b6",
        question: "Bisakah saya mulai dengan konsultasi gratis?",
        answer:
          "Ya. Konsultasi awal ±30 menit gratis dan tanpa komitmen. Kami akan menilai urgensi kasus Anda dan menjelaskan langkah selanjutnya sebelum Perjanjian Konsultasi ditandatangani.",
      },
    ],
  },

  cta: {
    badge: { label: "KONSULTASI AWAL GRATIS • 30 MENIT" },
    title: "Hadapi Jatuh Tempo dengan Strategi yang Tepat",
    description:
      "Ceritakan situasi pinjaman bank Anda. Tim advisor kami siap merespons dalam 1×24 jam dengan analisis awal dan rekomendasi langkah selanjutnya.",
    secondaryCta: { label: "Lihat Layanan Lainnya", href: "/layanan" },
    footnote: ADVISORY_FOOTNOTE,
  },
};