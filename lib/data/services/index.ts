import { bridgingRestrukturisasiService } from "./bridging-restrukturisasi";
import { pendanaanStrategisService } from "./pendanaan-strategis";
import type { ServicePageData } from "@/types/service";

/** Semua layanan yang punya halaman detail — tambahkan entry baru di sini */
export const services: ServicePageData[] = [
  bridgingRestrukturisasiService,
  pendanaanStrategisService,
];

export { bridgingRestrukturisasiService } from "./bridging-restrukturisasi";
export { pendanaanStrategisService } from "./pendanaan-strategis";

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return services.find((service) => service.slug === slug);
}