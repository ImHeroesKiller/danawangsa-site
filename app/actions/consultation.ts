"use server";

import { getTranslations } from "next-intl/server";

import { hasLocale } from "next-intl";
import { routing, type Locale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";
import {
  createBridgingConsultationSchema,
  createGeneralConsultationSchema,
  formatZodErrors,
} from "@/lib/validations/consultation";
import type { ConsultationActionResult } from "@/types";

type WebhookPayload = {
  type: "general" | "bridging";
  submittedAt: string;
  source: string;
  siteUrl: string;
  locale: string;
  [key: string]: string;
};

function resolveLocale(raw: string): Locale {
  return hasLocale(routing.locales, raw) ? raw : routing.defaultLocale;
}

async function getValidationMessages(locale: Locale) {
  const t = await getTranslations({ locale, namespace: "consultation.errors" });

  return {
    whatsappMin: t("whatsappMin"),
    whatsappMax: t("whatsappMax"),
    whatsappFormat: t("whatsappFormat"),
    emailInvalid: t("emailInvalid"),
    emailMax: t("emailMax"),
    nameMin: t("nameMin"),
    nameMax: t("nameMax"),
    topicRequired: t("topicRequired"),
    descriptionMin: t("descriptionMin"),
    descriptionMax: t("descriptionMax"),
    companyNameMin: t("companyNameMin"),
    companyNameMax: t("companyNameMax"),
    bankMin: t("bankMin"),
    bankMax: t("bankMax"),
    loanAmountMin: t("loanAmountMin"),
    loanAmountMax: t("loanAmountMax"),
  };
}

/** POST validated payload to CONSULTATION_WEBHOOK_URL */
async function sendToWebhook(
  payload: WebhookPayload,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const webhookUrl = process.env.CONSULTATION_WEBHOOK_URL?.trim();
  const t = await getTranslations({
    locale: resolveLocale(payload.locale),
    namespace: "consultation.errors",
  });

  if (!webhookUrl) {
    console.error("[Consultation] CONSULTATION_WEBHOOK_URL is not set");
    return { ok: false, message: t("webhookMissing") };
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
      return { ok: false, message: t("generic") };
    }

    return { ok: true };
  } catch (error) {
    console.error("[Consultation] Webhook request error:", error);
    return { ok: false, message: t("generic") };
  }
}

/** Submit general consultation form */
export async function submitConsultationRequest(
  formData: FormData,
): Promise<ConsultationActionResult> {
  const locale = resolveLocale(String(formData.get("locale") ?? "id"));
  const messages = await getValidationMessages(locale);
  const t = await getTranslations({ locale, namespace: "consultation" });

  const raw = {
    name: String(formData.get("name") ?? ""),
    whatsapp: String(formData.get("whatsapp") ?? ""),
    email: String(formData.get("email") ?? ""),
    topic: String(formData.get("topic") ?? ""),
    description: String(formData.get("description") ?? ""),
  };

  const parsed = createGeneralConsultationSchema(messages).safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: t("errors.validation"),
      fieldErrors: formatZodErrors(parsed.error),
    };
  }

  const webhookResult = await sendToWebhook({
    type: "general",
    submittedAt: new Date().toISOString(),
    source: "danawangsa-capital",
    siteUrl: siteConfig.url,
    locale,
    name: parsed.data.name,
    whatsapp: parsed.data.whatsapp,
    email: parsed.data.email,
    topic: parsed.data.topic,
    description: parsed.data.description,
  });

  if (!webhookResult.ok) {
    return { success: false, message: webhookResult.message };
  }

  return { success: true, message: t("success.message") };
}

/** Submit bridging consultation form */
export async function submitBridgingRequest(
  formData: FormData,
): Promise<ConsultationActionResult> {
  const locale = resolveLocale(String(formData.get("locale") ?? "id"));
  const messages = await getValidationMessages(locale);
  const t = await getTranslations({ locale, namespace: "consultation" });

  const raw = {
    companyName: String(formData.get("companyName") ?? ""),
    whatsapp: String(formData.get("whatsapp") ?? ""),
    email: String(formData.get("email") ?? ""),
    bank: String(formData.get("bank") ?? ""),
    loanAmount: String(formData.get("loanAmount") ?? ""),
  };

  const parsed = createBridgingConsultationSchema(messages).safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: t("errors.validation"),
      fieldErrors: formatZodErrors(parsed.error),
    };
  }

  const webhookResult = await sendToWebhook({
    type: "bridging",
    submittedAt: new Date().toISOString(),
    source: "danawangsa-capital",
    siteUrl: siteConfig.url,
    locale,
    companyName: parsed.data.companyName,
    whatsapp: parsed.data.whatsapp,
    email: parsed.data.email,
    bank: parsed.data.bank,
    loanAmount: parsed.data.loanAmount,
  });

  if (!webhookResult.ok) {
    return { success: false, message: webhookResult.message };
  }

  return { success: true, message: t("success.message") };
}