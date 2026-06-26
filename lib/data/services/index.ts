import type { Locale } from "@/i18n/routing";
import { localizeHref } from "./locale-utils";
import { assetCollateralProgramService } from "./asset-collateral-program";
import { bridgingRestrukturisasiService } from "./bridging-restrukturisasi";
import { businessFinancialAdvisoryService } from "./business-financial-advisory";
import { getServicesForLocale } from "./locales";
import { modalKerjaSkbdnService } from "./modal-kerja-skbdn";
import { modalUsahaJaminanAsetService } from "./modal-usaha-jaminan-aset";
import type { ServicePageData } from "@/types/service";

/** All services (Indonesian, no locale prefix) — backward compatible */
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
export { getServicesForLocale } from "./locales";
export { applyLocaleToService, localizeHref } from "./locale-utils";

/** Locale-aware service list */
export function getServices(locale: Locale): ServicePageData[] {
  return getServicesForLocale(locale);
}

/** Find a service by slug — with optional locale for localized paths/content */
export function getServiceBySlug(
  slug: string,
  locale?: Locale,
): ServicePageData | undefined {
  if (locale) {
    return getServicesForLocale(locale).find((service) => service.slug === slug);
  }

  return services.find((service) => service.slug === slug);
}

/** Internal app path for next-intl Link — `/layanan/[slug]` */
export function getServiceDetailPath(slug: string): string {
  return `/layanan/${slug}`;
}

/** Canonical URL path for metadata — `/{locale}/layanan/[slug]` */
export function getServiceCanonicalPath(slug: string, locale: Locale): string {
  return localizeHref(`/layanan/${slug}`, locale);
}