import type { ServicePageData } from "@/types/service";

export const bridgingRestrukturisasiService: ServicePageData = {
  slug: "bridging-restrukturisasi",
  path: "/layanan/bridging-restrukturisasi",
  navLabel: "Bridging & Restrukturisasi",
  consultationModalType: "bridging",

  meta: {
    title: "Bridging & Restrukturisasi",
    description:
      "Konsultasi strategi bridging & restrukturisasi kredit bank untuk perusahaan. Pendampingan profesional — bukan lembaga pembiayaan. Analisis 1–2 hari untuk kasus urgent.",
  },

  listing: {
    category: "SOLUSI STRATEGIS",
    title: "Bridging & Restrukturisasi",
    description:
      "Konsultasi strategi untuk mengatasi jatuh tempo pinjaman bank, restrukturisasi kredit, dan pemulihan plafon — dengan pendampingan negosiasi profesional.",
    badge: "Populer",
  },

  hero: {
    badge: { label: "LAYANAN KONSULTASI STRATEGIS", variant: "amber" },
    title: "Konsultasi Strategi",
    titleHighlight: "Bridging & Restrukturisasi",
    description:
      "Partner konsultasi untuk mengatasi jatuh tempo pinjaman bank — kami merancang strategi dan mendampingi negosiasi, bukan menyalurkan dana langsung.",
    positioning:
      "Konsultan bisnis & keuangan strategis — bukan bank, bukan lembaga pembiayaan.",
    secondaryCta: { label: "Lihat Struktur Fee", href: "/#fee" },
  },

  teaser: {
    badge: { label: "SOLUSI STRATEGIS", variant: "amber" },
    title: "KONSULTASI STRATEGI",
    titleHighlight: "Bridging & Restrukturisasi",
    description:
      "Pinjaman bank mendekati jatuh tempo? Kami membantu merancang strategi bridging dan mendampingi negosiasi restrukturisasi — bukan menyalurkan dana langsung.",
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
        "Bukan penyaluran dana langsung • Kami bantu rancang strategi & dampingi proses",
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
    title: "Konsultasi Strategi — Bukan Penyaluran Dana",
    description:
      "Danawangsa Capital membantu Anda merancang dan mengeksekusi strategi bridging & restrukturisasi dengan pendampingan profesional di setiap tahap.",
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

  strukturFee: {
    eyebrow: "STRUKTUR FEE",
    title: "Transparan & Berbasis Hasil",
    description:
      "Fee bridging dijelaskan di awal dalam proposal dan Perjanjian Konsultasi — terpisah dari biaya pihak ketiga.",
    items: [
      {
        id: "base",
        title: "Retainer / Base Fee",
        amount: "35–50%",
        description:
          "DP di awal (non-refundable) untuk memulai analisis mendalam, due diligence, dan penyusunan strategi bridging.",
      },
      {
        id: "milestone",
        title: "Milestone Payment",
        amount: "Bertahap",
        description:
          "Pembayaran per tahap: analisis selesai, strategi disetujui klien, negosiasi bank dimulai.",
      },
      {
        id: "success",
        title: "Success Fee",
        amount: "3–6%",
        description:
          "Khusus bridging & restrukturisasi — hanya dibayar jika pendanaan berhasil dicairkan atau restrukturisasi disetujui bank.",
        highlighted: true,
      },
    ],
    footnote:
      "Detail lengkap akan dituangkan dalam Perjanjian Konsultasi resmi. Fee konsultasi terpisah dari biaya bank, notaris, appraisal, dan legal.",
  },

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
          "Apakah Danawangsa Capital menyalurkan dana bridging langsung?",
        answer:
          "Tidak. Kami adalah konsultan strategis — bukan lembaga pembiayaan. Kami merancang strategi bridging dan mendampingi proses negosiasi dengan bank atau pihak ketiga. Penyaluran dana sepenuhnya melalui lembaga keuangan resmi.",
      },
      {
        id: "b2",
        question: "Berapa lama proses konsultasi bridging biasanya?",
        answer:
          "Analisis awal untuk kasus urgent dapat selesai dalam 1–2 hari kerja. Proses lengkap — dari strategi hingga negosiasi — umumnya 2–6 minggu, tergantung kompleksitas, jumlah bank terlibat, dan kesiapan dokumen klien.",
      },
      {
        id: "b3",
        question: "Berapa success fee untuk kasus bridging?",
        answer:
          "Success fee berkisar 3–6% dari nilai transaksi atau pinjaman yang berhasil dicairkan/direstrukturisasi. Fee ini hanya dibayar jika hasil yang disepakati tercapai — dijelaskan transparan di proposal sebelum pekerjaan dimulai.",
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
    footnote:
      "Bukan penyaluran dana langsung • Kami bantu rancang strategi & dampingi proses",
  },
};