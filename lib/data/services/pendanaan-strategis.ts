import type { ServicePageData } from "@/types/service";

export const pendanaanStrategisService: ServicePageData = {
  slug: "pendanaan-strategis",
  path: "/layanan/pendanaan-strategis",
  navLabel: "Konsultasi Pendanaan Strategis",
  consultationModalType: "general",

  meta: {
    title: "Konsultasi Pendanaan Strategis",
    description:
      "Konsultasi strategi pembiayaan, optimalisasi aset, dan struktur modal kerja untuk perusahaan. Pendampingan analisis & negosiasi — bukan lembaga pembiayaan.",
  },

  listing: {
    category: "KONSULTASI PENDANAAN",
    title: "Konsultasi Pendanaan Strategis",
    description:
      "Merancang strategi pembiayaan optimal — dari modal kerja, ekspansi usaha, optimalisasi jaminan aset, hingga struktur SKBDN — dengan pendampingan profesional.",
  },

  hero: {
    badge: { label: "LAYANAN KONSULTASI STRATEGIS", variant: "amber" },
    title: "Konsultasi",
    titleHighlight: "Pendanaan Strategis",
    description:
      "Partner konsultasi untuk merancang strategi pembiayaan yang tepat — kami analisis posisi keuangan, optimalisasi aset, dan dampingi negosiasi dengan bank atau mitra, bukan menyalurkan dana langsung.",
    positioning:
      "Konsultan bisnis & keuangan strategis — bukan bank, bukan lembaga pembiayaan.",
    secondaryCta: {
      label: "Lihat Struktur Fee",
      href: "/layanan/pendanaan-strategis#fee",
    },
  },

  teaser: {
    badge: { label: "KONSULTASI PENDANAAN", variant: "amber" },
    title: "STRATEGI PEMBIAYAAN",
    titleHighlight: "Optimal & Terukur",
    description:
      "Butuh modal kerja, ekspansi, atau restrukturisasi aset? Kami bantu merancang strategi pendanaan yang sesuai profil bisnis Anda — dengan analisis mendalam dan pendampingan negosiasi.",
    highlights: [
      { label: "Analisis Mendalam", icon: "shield" },
      { label: "Struktur Jaminan Tepat", icon: "wallet" },
      { label: "Pendampingan Negosiasi", icon: "zap" },
    ],
    benefitBullets: [
      "Modal kerja lebih efisien",
      "Aset dimanfaatkan optimal",
      "Akses fasilitas bank lebih kuat",
    ],
    card: {
      eyebrow: "INGIN OPTIMALKAN STRUKTUR PENDANAAN?",
      description:
        "Pelajari proses 5 langkah, struktur fee, FAQ, dan profil klien yang cocok — semuanya di halaman detail layanan.",
      footnote:
        "Bukan penyaluran dana langsung • Kami bantu rancang strategi & dampingi proses",
    },
  },

  masalah: {
    eyebrow: "MASALAH YANG SERING DIALAMI",
    title: "Ketika Struktur Pendanaan Menghambat Pertumbuhan",
    description:
      "Tanpa strategi pendanaan yang tepat, bisnis kehilangan peluang ekspansi, arus kas tertekan, dan aset tidak dimanfaatkan secara optimal.",
    items: [
      {
        title: "Struktur Pendanaan Tidak Efisien",
        description:
          "Kombinasi fasilitas kredit, tenor, dan jaminan yang tidak selaras dengan siklus bisnis — menghasilkan beban bunga tinggi dan cash flow yang rapuh.",
      },
      {
        title: "Aset Belum Dimanfaatkan Optimal",
        description:
          "Tanah, bangunan, atau aset produktif belum distrukturkan sebagai jaminan atau sumber pendapatan — padahal potensinya besar untuk mendukung pembiayaan.",
      },
      {
        title: "Modal Kerja Tidak Terencana",
        description:
          "Kebutuhan modal kerja proyek atau operasional tidak terukur — menyebabkan kekurangan likuiditas di tengah ekspansi atau kontrak besar.",
      },
      {
        title: "Kesulitan Akses Fasilitas Bank",
        description:
          "Dokumentasi kurang kuat, narasi bisnis belum meyakinkan, atau struktur keuangan perlu disusun ulang sebelum bank bersedia memberikan plafon.",
      },
    ],
  },

  solusi: {
    eyebrow: "SOLUSI KAMI",
    title: "Konsultasi Strategi — Bukan Penyaluran Dana",
    description:
      "Danawangsa Capital membantu merancang dan mengeksekusi strategi pendanaan yang disesuaikan dengan profil bisnis, aset, dan tujuan jangka panjang Anda.",
    items: [
      "Analisis mendalam posisi keuangan, aset, arus kas, dan kebutuhan pendanaan",
      "Merancang struktur pembiayaan optimal — modal kerja, ekspansi, atau optimalisasi jaminan",
      "Rekomendasi skema pendanaan & struktur jaminan yang sesuai profil risiko",
      "Penyusunan dokumentasi dan narasi bisnis untuk negosiasi dengan bank atau mitra",
      "Pendampingan eksekusi, monitoring arus kas, dan evaluasi berkala pasca-kesepakatan",
    ],
    ctaLabel: "Diskusikan Kebutuhan Pendanaan",
  },

  manfaat: {
    eyebrow: "MANFAAT UTAMA",
    title: "Apa yang Anda Dapatkan",
    items: [
      {
        title: "Struktur Modal Efisien",
        description:
          "Skema pendanaan yang dirancang selaras dengan siklus bisnis — meminimalkan beban bunga dan menjaga likuiditas operasional.",
        icon: "wallet",
      },
      {
        title: "Aset Bekerja untuk Bisnis",
        description:
          "Rekomendasi pemanfaatan aset tetap sebagai jaminan atau sumber pendapatan tambahan tanpa mengorbankan operasional.",
        icon: "zap",
      },
      {
        title: "Pertumbuhan Lebih Terukur",
        description:
          "Peta pendanaan jangka menengah yang mendukung ekspansi, kontrak proyek, dan pemulihan akses fasilitas bank.",
        icon: "trending-up",
      },
    ],
  },

  proses: {
    eyebrow: "PROSES KERJA",
    title: "5 Langkah Strategi yang Kami Dampingi",
    description:
      "Setiap tahap memiliki deliverable yang jelas — dari pemetaan kebutuhan hingga evaluasi pasca-eksekusi.",
    items: [
      {
        step: 1,
        title: "Discovery & Goal Mapping",
        description:
          "Sesi konsultasi awal untuk memahami tujuan bisnis, kebutuhan pendanaan, timeline, dan urgensi. Kami memetakan apakah fokus pada modal kerja, ekspansi, optimalisasi aset, atau kombinasi.",
        deliverable: "Ringkasan kebutuhan & rekomendasi langkah awal",
      },
      {
        step: 2,
        title: "Analisis Posisi Keuangan & Aset",
        description:
          "Review laporan keuangan, struktur pinjaman aktif, portofolio aset, arus kas, dan kapasitas pembayaran. Identifikasi celah risiko dan peluang strukturisasi.",
        deliverable: "Laporan analisis & peta aset-keuangan",
      },
      {
        step: 3,
        title: "Perancangan Strategi Pendanaan",
        description:
          "Menyusun skenario pembiayaan — struktur jaminan, tenor, skema modal kerja atau SKBDN — beserta timeline dan opsi koordinasi dengan pihak ketiga.",
        deliverable: "Dokumen strategi & proposal fee transparan",
      },
      {
        step: 4,
        title: "Pendampingan Eksekusi & Negosiasi",
        description:
          "Mendampingi komunikasi dengan bank atau mitra: penyusunan dokumen, persiapan meeting, negosiasi syarat, dan follow-up hingga kesepakatan prinsip.",
        deliverable: "Dokumentasi negosiasi & action plan",
      },
      {
        step: 5,
        title: "Monitoring & Evaluasi",
        description:
          "Evaluasi hasil pendanaan, monitoring arus kas pasca-kesepakatan, dan rekomendasi penyesuaian struktur untuk efisiensi jangka panjang.",
        deliverable: "Laporan evaluasi & rekomendasi lanjutan",
      },
    ],
  },

  strukturFee: {
    eyebrow: "STRUKTUR FEE",
    title: "Transparan & Berbasis Deliverable",
    description:
      "Fee konsultasi dijelaskan di awal dalam proposal dan Perjanjian Konsultasi — terpisah dari biaya pihak ketiga.",
    items: [
      {
        id: "base",
        title: "Retainer / Base Fee",
        amount: "35–50%",
        description:
          "DP di awal (non-refundable) untuk memulai analisis mendalam, due diligence, dan penyusunan strategi pendanaan.",
      },
      {
        id: "milestone",
        title: "Milestone Payment",
        amount: "Bertahap",
        description:
          "Pembayaran per tahap: analisis selesai, strategi disetujui klien, negosiasi dengan bank atau mitra dimulai.",
      },
      {
        id: "final",
        title: "Final / Pelunasan Fee",
        amount: "Sisa",
        description:
          "Pelunasan saat deliverable diserahkan: laporan final, dokumen strategi, atau milestone yang disepakati tercapai.",
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
      "UMKM & perusahaan menengah yang butuh modal kerja",
      "Bisnis dalam fase ekspansi atau diversifikasi",
      "Pemilik aset tetap yang ingin optimalisasi jaminan",
      "Supplier, kontraktor, & perusahaan trading",
      "Manajemen yang ingin restrukturisasi fasilitas kredit",
      "Perusahaan yang membutuhkan struktur SKBDN",
    ],
  },

  faq: {
    eyebrow: "FAQ PENDANAAN STRATEGIS",
    title: "Pertanyaan Umum",
    items: [
      {
        id: "p1",
        question:
          "Apakah Danawangsa Capital menyalurkan dana atau memberikan pinjaman?",
        answer:
          "Tidak. Kami adalah konsultan strategis — bukan lembaga pembiayaan. Kami merancang strategi pendanaan dan mendampingi proses negosiasi dengan bank atau mitra. Penyaluran dana sepenuhnya melalui lembaga keuangan resmi.",
      },
      {
        id: "p2",
        question:
          "Apa perbedaan layanan ini dengan Bridging & Restrukturisasi?",
        answer:
          "Bridging fokus pada kasus urgent jatuh tempo dan restrukturisasi kredit. Konsultasi Pendanaan Strategis lebih luas — mencakup perencanaan modal kerja, ekspansi, optimalisasi aset, dan struktur pembiayaan jangka menengah tanpa urgensi krisis.",
      },
      {
        id: "p3",
        question: "Berapa lama proses konsultasi pendanaan strategis?",
        answer:
          "Analisis awal umumnya 3–5 hari kerja. Proses lengkap — dari strategi hingga negosiasi — bervariasi 2–6 minggu untuk kasus standar, hingga 1–3 bulan untuk struktur kompleks dengan multi-pihak.",
      },
      {
        id: "p4",
        question: "Apakah Anda menjamin persetujuan kredit dari bank?",
        answer:
          "Tidak ada yang bisa menjamin persetujuan kredit — keputusan sepenuhnya di tangan bank. Namun, kami memaksimalkan peluang dengan strategi yang tepat, dokumentasi lengkap, dan pendampingan negosiasi profesional.",
      },
      {
        id: "p5",
        question: "Dokumen apa yang perlu disiapkan klien?",
        answer:
          "Umumnya meliputi: laporan keuangan 2–3 tahun terakhir, struktur pinjaman aktif, daftar aset & jaminan, proyeksi arus kas, dan akta/legalitas perusahaan. Daftar lengkap disesuaikan setelah discovery call.",
      },
      {
        id: "p6",
        question: "Bisakah saya mulai dengan konsultasi gratis?",
        answer:
          "Ya. Konsultasi awal ±30 menit gratis dan tanpa komitmen. Kami akan menilai kebutuhan pendanaan Anda dan menjelaskan langkah selanjutnya sebelum Perjanjian Konsultasi ditandatangani.",
      },
    ],
  },

  cta: {
    badge: { label: "KONSULTASI AWAL GRATIS • 30 MENIT" },
    title: "Rancang Strategi Pendanaan yang Tepat untuk Bisnis Anda",
    description:
      "Ceritakan kebutuhan modal kerja, ekspansi, atau optimalisasi aset Anda. Tim advisor kami siap merespons dalam 1×24 jam dengan analisis awal dan rekomendasi langkah selanjutnya.",
    secondaryCta: { label: "Lihat Layanan Lainnya", href: "/layanan" },
    footnote:
      "Bukan penyaluran dana langsung • Kami bantu rancang strategi & dampingi proses",
  },
};