"use server";

import { siteConfig } from "@/lib/site-config";
import {
  bridgingConsultationSchema,
  formatZodErrors,
  generalConsultationSchema,
} from "@/lib/validations/consultation";
import type { ConsultationActionResult } from "@/types";

const SUCCESS_MESSAGE =
  "Terima kasih. Tim kami akan menghubungi Anda dalam 1×24 jam.";

const WEBHOOK_MISSING_MESSAGE =
  "Layanan formulir belum dikonfigurasi. Silakan hubungi kami via WhatsApp.";

const GENERIC_ERROR_MESSAGE =
  "Gagal mengirim permintaan. Silakan coba lagi atau hubungi WhatsApp.";

type WebhookPayload = {
  type: "general" | "bridging";
  submittedAt: string;
  source: string;
  siteUrl: string;
  [key: string]: string;
};

/** POST validated payload to CONSULTATION_WEBHOOK_URL */
async function sendToWebhook(
  payload: WebhookPayload,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const webhookUrl = process.env.CONSULTATION_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    console.error("[Consultation] CONSULTATION_WEBHOOK_URL is not set");
    return { ok: false, message: WEBHOOK_MISSING_MESSAGE };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "DanawangsaCapital-ConsultationForm/1.0",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      console.error(
        `[Consultation] Webhook failed: ${response.status} ${response.statusText}`,
        body.slice(0, 500),
      );
      return { ok: false, message: GENERIC_ERROR_MESSAGE };
    }

    return { ok: true };
  } catch (error) {
    console.error("[Consultation] Webhook request error:", error);
    return { ok: false, message: GENERIC_ERROR_MESSAGE };
  }
}

/** Submit general consultation form */
export async function submitConsultationRequest(
  formData: FormData,
): Promise<ConsultationActionResult> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    whatsapp: String(formData.get("whatsapp") ?? ""),
    email: String(formData.get("email") ?? ""),
    topic: String(formData.get("topic") ?? ""),
    description: String(formData.get("description") ?? ""),
  };

  const parsed = generalConsultationSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Periksa kembali data yang Anda isi.",
      fieldErrors: formatZodErrors(parsed.error),
    };
  }

  const webhookResult = await sendToWebhook({
    type: "general",
    submittedAt: new Date().toISOString(),
    source: "danawangsa-capital",
    siteUrl: siteConfig.url,
    name: parsed.data.name,
    whatsapp: parsed.data.whatsapp,
    email: parsed.data.email,
    topic: parsed.data.topic,
    description: parsed.data.description,
  });

  if (!webhookResult.ok) {
    return { success: false, message: webhookResult.message };
  }

  return { success: true, message: SUCCESS_MESSAGE };
}

/** Submit bridging consultation form */
export async function submitBridgingRequest(
  formData: FormData,
): Promise<ConsultationActionResult> {
  const raw = {
    companyName: String(formData.get("companyName") ?? ""),
    whatsapp: String(formData.get("whatsapp") ?? ""),
    email: String(formData.get("email") ?? ""),
    bank: String(formData.get("bank") ?? ""),
    loanAmount: String(formData.get("loanAmount") ?? ""),
  };

  const parsed = bridgingConsultationSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Periksa kembali data yang Anda isi.",
      fieldErrors: formatZodErrors(parsed.error),
    };
  }

  const webhookResult = await sendToWebhook({
    type: "bridging",
    submittedAt: new Date().toISOString(),
    source: "danawangsa-capital",
    siteUrl: siteConfig.url,
    companyName: parsed.data.companyName,
    whatsapp: parsed.data.whatsapp,
    email: parsed.data.email,
    bank: parsed.data.bank,
    loanAmount: parsed.data.loanAmount,
  });

  if (!webhookResult.ok) {
    return { success: false, message: webhookResult.message };
  }

  return { success: true, message: SUCCESS_MESSAGE };
}