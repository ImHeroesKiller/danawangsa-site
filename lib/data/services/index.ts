import { assetCollateralProgramService } from "./asset-collateral-program";
import { bridgingRestrukturisasiService } from "./bridging-restrukturisasi";
import { businessFinancialAdvisoryService } from "./business-financial-advisory";
import { modalKerjaSkbdnService } from "./modal-kerja-skbdn";
import { modalUsahaJaminanAsetService } from "./modal-usaha-jaminan-aset";
import type { ServicePageData } from "@/types/service";

/** Semua layanan — urutan sesuai Company Profile Danawangsa Capital */
export const services: ServicePageData[] = [
  bridgingRestrukturisasiService,
  modalUsahaJaminanAsetService,
  modalKerjaSkbdnService,
  assetCollateralProgramService,
  businessFinancialAdvisoryService,
];

export { bridgingRestrukturisasiService } from "./bridging-restrukturisasi";
export { modalUsahaJaminanAsetService } from "./modal-usaha-jaminan-aset";
export { modalKerjaSkbdnService } from "./modal-kerja-skbdn";
export { assetCollateralProgramService } from "./asset-collateral-program";
export { businessFinancialAdvisoryService } from "./business-financial-advisory";

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return services.find((service) => service.slug === slug);
}

/** Canonical detail path — always `/layanan/[slug]` */
export function getServiceDetailPath(slug: string): string {
  return `/layanan/${slug}`;
}