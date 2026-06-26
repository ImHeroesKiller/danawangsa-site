import { ServiceDetailContent } from "@/components/layanan/service-detail-content";
import { pendanaanStrategisService } from "@/lib/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

const { meta, path } = pendanaanStrategisService;

export const metadata = createPageMetadata({
  title: `${meta.title} • ${siteConfig.name}`,
  description: meta.description,
  path,
  imageAlt: `${meta.title} — ${siteConfig.name}`,
});

export default function PendanaanStrategisPage() {
  return <ServiceDetailContent service={pendanaanStrategisService} />;
}