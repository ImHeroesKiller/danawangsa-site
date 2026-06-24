/**
 * Central site configuration — reads from env with sensible defaults.
 * Extend here when adding analytics, API keys, or CMS integration.
 */
export const siteConfig = {
  name: "Danawangsa Capital",
  tagline: "Strategic Business & Financial Advisory",
  description:
    "Konsultasi strategis bisnis & keuangan untuk pemilik usaha. Pendampingan profesional dalam optimalisasi aset, struktur pendanaan, dan restrukturisasi kredit — bukan lembaga pembiayaan.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://danawangsa-capital.vercel.app",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "0812-1414-4214",
  phoneRaw: process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW ?? "6281214144214",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "aku@arywibowo.id",
  whatsappMessage:
    "Halo Danawangsa Capital, saya ingin konsultasi strategi keuangan bisnis.",
  ctaLabel: "Jadwalkan Konsultasi Gratis",
  riskReversal:
    "Respon dalam 1×24 jam • Sesi konsultasi awal tanpa komitmen • Data Anda dijaga kerahasiaannya",
} as const;

export function getWhatsAppUrl(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(message)}`;
}