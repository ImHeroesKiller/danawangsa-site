import type { ServicePageData } from "@/types/service";

export const ADVISORY_POSITIONING = "Strategic Business & Financial Consultant";

export const ADVISORY_FOOTNOTE =
  "Strategic Business & Financial Consultant — merancang strategi & mendampingi proses Anda";

export const FEE_FOOTNOTE =
  "Struktur fee disesuaikan dengan kompleksitas dan kebutuhan proyek. Detail lengkap dibahas setelah proses assessment awal dan dituangkan dalam Perjanjian Konsultasi resmi.";

export const generalStrukturFee: ServicePageData["strukturFee"] = {
  eyebrow: "STRUKTUR FEE",
  title: "Fleksibel & Disesuaikan dengan Proyek",
  description:
    "Struktur fee disesuaikan dengan kompleksitas dan kebutuhan proyek. Biaya konsultasi akan dibahas lebih lanjut setelah proses assessment.",
  items: [
    {
      id: "assessment",
      title: "Tahap Assessment",
      amount: "Disesuaikan",
      description:
        "Biaya awal untuk analisis kebutuhan, scope proyek, dan rekomendasi strategis.",
    },
    {
      id: "advisory",
      title: "Tahap Pendampingan",
      amount: "Fleksibel",
      description:
        "Skema pembayaran yang fleksibel dan disesuaikan dengan tahapan pekerjaan konsultasi.",
    },
    {
      id: "closing",
      title: "Tahap Penyelesaian",
      amount: "Disesuaikan",
      description:
        "Komponen fee final ditentukan berdasarkan deliverable dan kompleksitas proyek.",
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
        question: `Apa peran Danawangsa Capital dalam ${serviceName}?`,
        answer:
          "Danawangsa Capital adalah Strategic Business & Financial Consultant yang merancang strategi, menyusun rekomendasi, dan mendampingi proses negosiasi dengan mitra pendanaan serta pihak terkait.",
      },
      {
        id: `${prefix}-2`,
        question: "Berapa lama proses konsultasi biasanya?",
        answer:
          "Analisis awal umumnya 3–5 hari kerja. Proses lengkap bervariasi 2–6 minggu untuk kasus standar, hingga 1–3 bulan untuk struktur kompleks dengan multi-pihak.",
      },
      {
        id: `${prefix}-3`,
        question: "Bagaimana struktur fee konsultasi ditentukan?",
        answer:
          "Struktur fee disesuaikan dengan kompleksitas dan kebutuhan proyek. Biaya konsultasi akan dibahas lebih lanjut setelah proses assessment awal, sebelum pekerjaan dimulai.",
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