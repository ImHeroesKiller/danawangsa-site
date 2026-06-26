"use client";

import { ServiceTeaserSection } from "@/components/sections/service-teaser-section";
import { bridgingRestrukturisasiService } from "@/lib/data/services";

export function BridgingSection() {
  return (
    <ServiceTeaserSection
      service={bridgingRestrukturisasiService}
      sectionId="bridging-loan"
    />
  );
}