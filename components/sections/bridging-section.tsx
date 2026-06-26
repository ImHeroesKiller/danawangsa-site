"use client";

import { useLocale } from "next-intl";

import { ServiceTeaserSection } from "@/components/sections/service-teaser-section";
import { getServiceBySlug } from "@/lib/data/services";
import type { Locale } from "@/i18n/routing";

export function BridgingSection() {
  const locale = useLocale() as Locale;
  const service = getServiceBySlug("bridging-restrukturisasi", locale);

  if (!service) return null;

  return (
    <ServiceTeaserSection service={service} sectionId="bridging-loan" />
  );
}