"use client";

import { ServiceTeaserSection } from "@/components/sections/service-teaser-section";
import { pendanaanStrategisService } from "@/lib/data/services";

/** Homepage teaser — full detail at /layanan/konsultasi-pendanaan-strategis */
export function PendanaanStrategisSection() {
  return (
    <ServiceTeaserSection
      service={pendanaanStrategisService}
      sectionId="pendanaan-strategis"
    />
  );
}