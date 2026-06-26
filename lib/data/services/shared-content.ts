import type { ServicePageData } from "@/types/service";

export const ADVISORY_POSITIONING =
  "Konsultan bisnis & keuangan strategis — bukan bank, bukan lembaga pembiayaan.";

export const ADVISORY_FOOTNOTE =
  "Bukan penyaluran dana langsung • Kami bantu rancang strategi & dampingi proses";

export const FEE_FOOTNOTE =
  "Detail lengkap akan dituangkan dalam Perjanjian Konsultasi resmi. Fee konsultasi terpisah dari biaya bank, notaris, appraisal, dan legal.";

export const generalStrukturFee: ServicePageData["strukturFee"] = {
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
        "DP di awal (non-refundable) untuk memulai analisis mendalam, due diligence, dan penyusunan strategi.",
    },
    {
      id: "milestone",
      title: "Milestone Payment",
      amount: "Bertahap",
      description:
        "Pembayaran per tahap: analisis selesai, strategi disetujui klien, negosiasi atau eksekusi dimulai.",
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
  footnote: FEE_FOOTNOTE,
};

export function createServiceCta(
  title: string,
  description: string,
): ServicePageData["cta"] {
  return {
    badge: { label: "KONSULTASI AWAL GRATIS • 30 MENIT" },
    title,
    description,
    secondaryCta: { label: "Lihat Layanan Lainnya", href: "/layanan" },
    footnote: ADVISORY_FOOTNOTE,
  };
}

export function createStandardFaq(
  prefix: string,
  serviceName: string,
): ServicePageData["faq"] {
  return {
    eyebrow: `FAQ ${prefix}`,
    title: "Pertanyaan Umum",
    items: [
      {
        id: `${prefix}-1`,
        question: `Apakah Danawangsa Capital menyalurkan dana untuk ${serviceName}?`,
        answer:
          "Tidak. Kami adalah konsultan strategis — bukan lembaga pembiayaan. Kami merancang strategi dan mendampingi proses negosiasi dengan bank atau mitra. Penyaluran dana sepenuhnya melalui lembaga keuangan resmi.",
      },
      {
        id: `${prefix}-2`,
        question: "Berapa lama proses konsultasi biasanya?",
        answer:
          "Analisis awal umumnya 3–5 hari kerja. Proses lengkap bervariasi 2–6 minggu untuk kasus standar, hingga 1–3 bulan untuk struktur kompleks dengan multi-pihak.",
      },
      {
        id: `${prefix}-3`,
        question: "Apakah Anda menjamin persetujuan kredit dari bank?",
        answer:
          "Tidak ada yang bisa menjamin persetujuan kredit — keputusan sepenuhnya di tangan bank. Namun, kami memaksimalkan peluang dengan strategi yang tepat, dokumentasi lengkap, dan pendampingan negosiasi profesional.",
      },
      {
        id: `${prefix}-4`,
        question: "Bisakah saya mulai dengan konsultasi gratis?",
        answer:
          "Ya. Konsultasi awal ±30 menit gratis dan tanpa komitmen. Kami akan menilai kebutuhan Anda dan menjelaskan langkah selanjutnya sebelum Perjanjian Konsultasi ditandatangani.",
      },
    ],
  };
}