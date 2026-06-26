import { ServiceDetailContent } from "@/components/layanan/service-detail-content";
import { bridgingRestrukturisasiService } from "@/lib/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

const { meta, path } = bridgingRestrukturisasiService;

export const metadata = createPageMetadata({
  title: `${meta.title} • ${siteConfig.name}`,
  description: meta.description,
  path,
  imageAlt: `${meta.title} — ${siteConfig.name}`,
});

export default function BridgingRestrukturisasiPage() {
  return <ServiceDetailContent service={bridgingRestrukturisasiService} />;
}