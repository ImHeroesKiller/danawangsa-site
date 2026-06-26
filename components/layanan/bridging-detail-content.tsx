"use client";

import { ServiceDetailContent } from "@/components/layanan/service-detail-content";
import { bridgingRestrukturisasiService } from "@/lib/data/services";

export function BridgingDetailContent() {
  return <ServiceDetailContent service={bridgingRestrukturisasiService} />;
}