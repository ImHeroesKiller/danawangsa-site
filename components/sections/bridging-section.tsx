"use client";

import { ServiceTeaserSection } from "@/components/sections/service-teaser-section";
import { bridgingRestrukturisasiService } from "@/lib/data/services";

/** Homepage teaser — full detail at /layanan/bridging-restrukturisasi */
export function BridgingSection() {
  return (
    <ServiceTeaserSection
      service={bridgingRestrukturisasiService}
      sectionId="bridging-loan"
    />
  );
}