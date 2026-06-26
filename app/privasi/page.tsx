import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { privacyPolicyContent } from "@/lib/data/legal-content";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: `Kebijakan Privasi • ${siteConfig.name}`,
  description:
    "Kebijakan privasi Danawangsa Capital — perlindungan data klien konsultasi bisnis & keuangan strategis, kerahasiaan NDA, dan hak pengguna.",
  path: "/privasi",
  imageAlt: `Kebijakan Privasi — ${siteConfig.name}`,
});

export default function PrivacyPage() {
  return <LegalPageShell content={privacyPolicyContent} />;
}