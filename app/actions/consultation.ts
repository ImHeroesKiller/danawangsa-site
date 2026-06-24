"use server";

import type { BridgingFormData, ConsultationFormData } from "@/types";

/**
 * Placeholder Server Action — wire to email, CRM, or database later.
 * Set CONSULTATION_WEBHOOK_URL in .env.local for external integration.
 */
export async function submitConsultationRequest(
  data: ConsultationFormData,
): Promise<{ success: boolean; message: string }> {
  const webhookUrl = process.env.CONSULTATION_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "general", ...data }),
      });
    } catch {
      return {
        success: false,
        message: "Gagal mengirim permintaan. Silakan coba lagi atau hubungi WhatsApp.",
      };
    }
  }

  // Simulated success until backend is connected
  console.info("[Consultation] General request received:", data);

  return {
    success: true,
    message:
      "Tim Danawangsa Capital akan menghubungi Anda dalam 1×24 jam untuk menjadwalkan sesi konsultasi.",
  };
}

export async function submitBridgingRequest(
  data: BridgingFormData,
): Promise<{ success: boolean; message: string }> {
  const webhookUrl = process.env.CONSULTATION_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "bridging", ...data }),
      });
    } catch {
      return {
        success: false,
        message: "Gagal mengirim permintaan. Silakan coba lagi atau hubungi WhatsApp.",
      };
    }
  }

  console.info("[Consultation] Bridging request received:", data);

  return {
    success: true,
    message:
      "Tim Danawangsa Capital akan menghubungi Anda dalam 1×24 jam untuk menjadwalkan sesi konsultasi.",
  };
}