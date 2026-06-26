import type { Locale } from "@/i18n/routing";
import { getServices } from "@/lib/data/services";

/** Service summaries injected into IDA's system prompt */
export function buildServicesKnowledge(locale: Locale): string {
  const services = getServices(locale);

  return services
    .map((service, index) => {
      const path = `/${locale}${service.path}`;
      return `${index + 1}. **${service.listing.title}**
   - Kategori: ${service.listing.category}
   - Ringkasan: ${service.listing.description}
   - Halaman detail: ${path}`;
    })
    .join("\n\n");
}