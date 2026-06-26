import { bridgingRestrukturisasiService } from "./bridging-restrukturisasi";
import type { ServicePageData } from "@/types/service";

/** Semua layanan yang punya halaman detail — tambahkan entry baru di sini */
export const services: ServicePageData[] = [
  bridgingRestrukturisasiService,
];

export { bridgingRestrukturisasiService } from "./bridging-restrukturisasi";
export { pendanaanStrategisService } from "./pendanaan-strategis";

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return services.find((service) => service.slug === slug);
}