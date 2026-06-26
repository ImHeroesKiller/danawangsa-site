import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { termsOfServiceContent } from "@/lib/data/legal-content";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: `Syarat & Ketentuan Konsultasi • ${siteConfig.name}`,
  description:
    "Syarat layanan konsultasi Danawangsa Capital — scope advisory, struktur fee, milestone pembayaran, batasan tanggung jawab, dan hak kekayaan intelektual.",
  path: "/syarat-konsultasi",
  imageAlt: `Syarat Konsultasi — ${siteConfig.name}`,
});

export default function TermsPage() {
  return <LegalPageShell content={termsOfServiceContent} />;
}