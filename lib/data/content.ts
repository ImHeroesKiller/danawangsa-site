import type { Testimonial, TrustStat } from "@/types";

export const trustStats: TrustStat[] = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "150+", label: "Kasus Ditangani" },
  { value: "1–2 Hari", label: "Analisis Awal" },
  { value: "100%", label: "Fee Transparan" },
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

export const consultationTopics = [
  "Bridging Finance & Financial Restructuring",
  "Pembiayaan Modal Usaha dengan Jaminan Aset",
  "Pembiayaan Modal Kerja Berbasis SKBDN",
  "Asset Collateral Program",
  "Business & Financial Advisory",
] as const;