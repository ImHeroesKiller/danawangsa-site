export interface LegalSection {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalPageContent {
  slug: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const privacyPolicyContent: LegalPageContent = {
  slug: "privasi",
  title: "Kebijakan Privasi",
  subtitle:
    "Komitmen Danawangsa Capital dalam melindungi data dan informasi klien konsultasi bisnis & keuangan strategis.",
  lastUpdated: "24 Juni 2026",
  sections: [
    {
      id: "pendahuluan",
      title: "1. Pendahuluan",
      paragraphs: [
        "Danawangsa Capital («kami») adalah firma konsultasi bisnis & keuangan strategis. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi yang Anda berikan melalui website, formulir konsultasi, komunikasi email, WhatsApp, atau pertemuan bisnis.",
        "Kebijakan ini berlaku untuk seluruh layanan konsultasi kami. Kami bukan lembaga pembiayaan, bank, atau pemberi kredit — data yang kami kumpulkan digunakan semata-mata untuk keperluan konsultasi dan pendampingan strategis.",
      ],
    },
    {
      id: "data-dikumpulkan",
      title: "2. Data yang Kami Kumpulkan",
      bullets: [
        "Identitas: nama lengkap, nama perusahaan, jabatan, dan kontak (email, nomor WhatsApp/telepon).",
        "Informasi bisnis & keuangan: laporan keuangan, struktur pinjaman, aset, arus kas, dan dokumen pendukung yang Anda berikan secara sukarela untuk keperluan analisis konsultasi.",
        "Data formulir konsultasi: topik konsultasi, deskripsi kebutuhan, bank terkait (untuk kasus bridging), dan estimasi nilai transaksi.",
        "Data teknis: alamat IP, jenis perangkat, browser, dan aktivitas navigasi website (jika analytics diaktifkan).",
      ],
    },
    {
      id: "penggunaan-data",
      title: "3. Penggunaan Data",
      bullets: [
        "Menyediakan layanan konsultasi bisnis & keuangan strategis sesuai scope yang disepakati.",
        "Menghubungi Anda terkait permintaan konsultasi, jadwal meeting, dan tindak lanjut proposal.",
        "Menyusun analisis, strategi, laporan, dan rekomendasi yang disesuaikan dengan kondisi bisnis Anda.",
        "Memenuhi kewajiban hukum, regulasi, dan permintaan otoritas yang berwenang apabila diwajibkan oleh hukum.",
        "Meningkatkan kualitas layanan dan keamanan website — tanpa menjual data kepada pihak ketiga.",
      ],
    },
    {
      id: "kerahasiaan",
      title: "4. Kerahasiaan Data Klien",
      paragraphs: [
        "Kerahasiaan adalah fondasi layanan kami. Sebelum memulai pekerjaan konsultasi substantif, kami menawarkan penandatanganan Non-Disclosure Agreement (NDA) untuk melindungi informasi bisnis dan keuangan Anda.",
      ],
      bullets: [
        "Akses data dibatasi hanya kepada personel dan mitra profesional yang terlibat langsung dalam proyek konsultasi Anda.",
        "Dokumen dan data klien tidak dibagikan kepada pihak ketiga tanpa persetujuan tertulis, kecuali diwajibkan oleh hukum.",
        "Kami menerapkan praktik keamanan informasi yang wajar untuk mencegah akses, pengungkapan, atau perubahan data tanpa izin.",
      ],
    },
    {
      id: "penyimpanan",
      title: "5. Penyimpanan & Retensi Data",
      paragraphs: [
        "Data disimpan selama diperlukan untuk menyelesaikan layanan konsultasi, memenuhi kewajiban kontrak, dan kepatuhan hukum. Setelah periode retensi berakhir, data akan dihapus atau dianonimkan sesuai kebijakan internal kami.",
      ],
    },
    {
      id: "hak-anda",
      title: "6. Hak Anda",
      bullets: [
        "Meminta akses, koreksi, atau pembaruan data pribadi yang kami simpan.",
        "Meminta penghapusan data tertentu, sejauh tidak bertentangan dengan kewajiban hukum atau kontrak yang berlaku.",
        "Menarik persetujuan penggunaan data untuk komunikasi pemasaran (jika ada).",
        "Mengajukan pertanyaan atau keluhan terkait privasi melalui kontak resmi kami.",
      ],
    },
    {
      id: "pihak-ketiga",
      title: "7. Pihak Ketiga & Transfer Data",
      paragraphs: [
        "Kami dapat menggunakan penyedia layanan pihak ketiga (misalnya hosting, email, formulir webhook) yang memproses data atas nama kami. Penyedia tersebut terikat kewajiban kerahasiaan dan hanya memproses data sesuai instruksi kami.",
        "Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi klien kepada pihak ketiga untuk tujuan komersial.",
      ],
    },
    {
      id: "perubahan",
      title: "8. Perubahan Kebijakan",
      paragraphs: [
        "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan material akan diinformasikan melalui website. Tanggal pembaruan terakhir tercantum di bagian atas halaman ini.",
      ],
    },
    {
      id: "kontak",
      title: "9. Kontak",
      paragraphs: [
        "Untuk pertanyaan terkait privasi dan perlindungan data, hubungi kami melalui informasi kontak yang tersedia di website atau formulir konsultasi resmi Danawangsa Capital.",
      ],
    },
  ],
};

export const termsOfServiceContent: LegalPageContent = {
  slug: "syarat-konsultasi",
  title: "Syarat & Ketentuan Layanan Konsultasi",
  subtitle:
    "Ketentuan resmi yang mengatur hubungan konsultasi antara Danawangsa Capital dan klien — Strategic Business & Financial Advisory.",
  lastUpdated: "24 Juni 2026",
  sections: [
    {
      id: "definisi",
      title: "1. Definisi & Posisi Layanan",
      paragraphs: [
        "Danawangsa Capital menyediakan layanan konsultasi bisnis & keuangan strategis, termasuk analisis, perencanaan strategi, penyusunan rekomendasi, dan pendampingan negosiasi dengan pihak ketiga (bank, investor, mitra legal, dll.).",
        "Kami secara tegas bukan lembaga pembiayaan, bank, multifinance, atau pemberi kredit. Kami tidak mencairkan dana, tidak memberikan pinjaman, dan tidak menjamin persetujuan kredit dari pihak ketiga mana pun.",
      ],
    },
    {
      id: "scope",
      title: "2. Scope Layanan Konsultasi",
      bullets: [
        "Discovery call dan analisis awal untuk memahami kebutuhan klien.",
        "Penyusunan strategi keuangan, struktur pendanaan, bridging strategy, restrukturisasi, dan optimalisasi aset.",
        "Pendampingan profesional dalam negosiasi, dokumentasi, dan koordinasi dengan pihak ketiga.",
        "Penyerahan laporan, rekomendasi, dan evaluasi sesuai scope of work dalam Perjanjian Konsultasi.",
        "Layanan di luar scope hanya dilakukan setelah disepakati secara tertulis (addendum atau proposal baru).",
      ],
    },
    {
      id: "konsultasi-awal",
      title: "3. Konsultasi Awal Gratis",
      paragraphs: [
        "Konsultasi awal (±30 menit) ditawarkan tanpa biaya dan tanpa komitmen kontrak. Sesi ini bertujuan memahami kasus Anda dan menjelaskan langkah selanjutnya. Informasi yang diberikan pada tahap ini belum merupakan nasihat final hingga Perjanjian Konsultasi ditandatangani.",
      ],
    },
    {
      id: "pembayaran",
      title: "4. Pembayaran, Retainer & Milestone",
      paragraphs: [
        "Struktur fee konsultasi dijelaskan secara transparan dalam proposal dan Perjanjian Konsultasi resmi sebelum pekerjaan dimulai. Komponen fee umum meliputi:",
      ],
      bullets: [
        "Retainer / Base Fee (35–50%): pembayaran di awal, non-refundable, untuk memulai analisis dan penyusunan strategi.",
        "Milestone Payment: pembayaran bertahap sesuai progres pekerjaan (analisis, strategi, negosiasi).",
        "Final / Pelunasan Fee: dibayar saat deliverable diserahkan atau milestone akhir tercapai.",
        "Success Fee (khusus Bridging & Restrukturisasi, 3–6%): hanya dibayar jika hasil yang disepakati tercapai.",
        "Fee konsultasi terpisah dari biaya pihak ketiga (bank, notaris, appraisal, legal, dll.).",
      ],
    },
    {
      id: "kewajiban-klien",
      title: "5. Kewajiban Klien",
      bullets: [
        "Memberikan informasi dan dokumen yang akurat, lengkap, dan tepat waktu.",
        "Menghadiri sesi konsultasi yang dijadwalkan atau memberitahu perubahan jadwal minimal 24 jam sebelumnya.",
        "Melakukan pembayaran sesuai jadwal yang disepakati dalam Perjanjian Konsultasi.",
        "Tidak menggunakan nama, materi, atau rekomendasi Danawangsa Capital untuk tujuan yang melanggar hukum.",
      ],
    },
    {
      id: "batasan-tanggung-jawab",
      title: "6. Batasan Tanggung Jawab",
      paragraphs: [
        "Layanan kami bersifat advisory dan pendampingan profesional. Keputusan akhir atas pendanaan, kredit, investasi, atau transaksi bisnis sepenuhnya menjadi tanggung jawab klien dan pihak ketiga terkait (misalnya bank).",
      ],
      bullets: [
        "Kami tidak menjamin pencairan dana, persetujuan kredit, atau hasil tertentu dari pihak ketiga.",
        "Kami tidak bertanggung jawab atas kerugian yang timbul dari keputusan bisnis klien di luar rekomendasi yang telah disepakati dalam scope of work.",
        "Tanggung jawab kami dibatasi pada nilai fee konsultasi yang telah dibayar untuk proyek terkait, kecuali diatur lain dalam perjanjian tertulis.",
        "Force majeure: kami dibebaskan dari keterlambatan atau kegagalan yang disebabkan oleh peristiwa di luar kendali wajar (bencana alam, gangguan sistem, regulasi mendadak, dll.).",
      ],
    },
    {
      id: "hki",
      title: "7. Hak Kekayaan Intelektual",
      bullets: [
        "Materi metodologi, template, framework, dan konten proprietary Danawangsa Capital tetap menjadi milik kami.",
        "Laporan, analisis, dan deliverable yang diserahkan kepada klien memberikan lisensi penggunaan internal untuk keperluan bisnis klien — bukan untuk distribusi ulang, publikasi, atau komersialisasi tanpa izin tertulis.",
        "Klien tidak diperkenankan menyalin, memodifikasi, atau mendistribusikan materi konsultasi kepada pihak ketiga tanpa persetujuan tertulis dari Danawangsa Capital.",
      ],
    },
    {
      id: "kerahasiaan",
      title: "8. Kerahasiaan & NDA",
      paragraphs: [
        "Kedua belah pihak wajib menjaga kerahasiaan informasi sensitif yang dipertukarkan selama masa konsultasi. Kewajiban kerahasiaan tetap berlaku setelah perjanjian berakhir, sesuai ketentuan NDA atau klausul kerahasiaan dalam Perjanjian Konsultasi.",
      ],
    },
    {
      id: "pengakhiran",
      title: "9. Pengakhiran Layanan",
      bullets: [
        "Salah satu pihak dapat mengakhiri perjanjian sesuai ketentuan dalam Perjanjian Konsultasi dengan pemberitahuan tertulis.",
        "Fee retainer yang telah dibayar untuk pekerjaan yang telah dilakukan bersifat non-refundable.",
        "Pekerjaan yang belum diselesaikan akan dihentikan sesuai milestone terakhir yang tercapai, kecuali disepakati lain secara tertulis.",
      ],
    },
    {
      id: "hukum",
      title: "10. Hukum yang Berlaku",
      paragraphs: [
        "Syarat & Ketentuan ini diatur oleh hukum Republik Indonesia. Sengketa yang tidak dapat diselesaikan secara musyawarah akan diselesaikan melalui mekanisme yang disepakati dalam Perjanjian Konsultasi, dengan preferensi penyelesaian melalui mediasi sebelum litigasi.",
      ],
    },
    {
      id: "kontak",
      title: "11. Kontak",
      paragraphs: [
        "Untuk pertanyaan terkait syarat layanan konsultasi, silakan hubungi tim Danawangsa Capital melalui kontak resmi di website atau jadwalkan konsultasi awal gratis.",
      ],
    },
  ],
};

export {
  getLegalNavLinks,
  getPrivacyContent,
  getTermsContent,
} from "./legal";