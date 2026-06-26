import type { Locale } from "@/i18n/routing";
import type { ServicePageData } from "@/types/service";

import { applyLocaleToService } from "../locale-utils";
import * as en from "./en";
import * as id from "./id";
import * as zh from "./zh";

const SERVICE_KEYS = [
  "bridgingRestrukturisasiService",
  "modalUsahaJaminanAsetService",
  "modalKerjaSkbdnService",
  "assetCollateralProgramService",
  "businessFinancialAdvisoryService",
] as const;

type ServiceKey = (typeof SERVICE_KEYS)[number];

const localeModules: Record<Locale, Record<ServiceKey, ServicePageData>> = {
  id,
  en,
  zh,
};

/** Return all services for a locale with localized paths and CTA hrefs. */
export function getServicesForLocale(locale: Locale): ServicePageData[] {
  const localeBundle = localeModules[locale];

  return SERVICE_KEYS.map((key) => applyLocaleToService(localeBundle[key]));
}