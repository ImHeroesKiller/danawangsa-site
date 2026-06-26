/**
 * Central site configuration — reads from env with sensible defaults.
 * Extend here when adding analytics, API keys, or CMS integration.
 */
export const siteConfig = {
  name: "Danawangsa Capital",
  tagline: "Strategic Business & Financial Advisory",
  description:
    "Strategic Business & Financial Consultant untuk pemilik usaha. Pendampingan profesional dalam optimalisasi aset, struktur pendanaan, dan restrukturisasi kredit.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://danawangsa-capital.vercel.app",
  ctaLabel: "Jadwalkan Konsultasi Gratis",
  riskReversal:
    "Respon dalam 1×24 jam • Sesi konsultasi awal tanpa komitmen • Data Anda dijaga kerahasiaannya",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
} as const;

/** Social / official profile URLs for Organization schema sameAs */
export function getOrganizationSameAs(): string[] {
  const urls = [siteConfig.url];

  if (siteConfig.linkedinUrl) {
    urls.push(siteConfig.linkedinUrl);
  }

  return urls;
}

