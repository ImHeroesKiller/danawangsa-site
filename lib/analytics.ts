export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const AnalyticsEvents = {
  CONSULTATION_CTA_CLICK: "consultation_cta_click",
  CONSULTATION_FORM_SUCCESS: "consultation_form_success",
  WHATSAPP_CLICK: "whatsapp_click",
} as const;

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export function isAnalyticsEnabled(): boolean {
  return Boolean(GA_MEASUREMENT_ID);
}

/** Send a GA4 custom event — no-op when measurement ID is unset */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  if (!isAnalyticsEnabled() || typeof window === "undefined") return;

  window.gtag?.("event", eventName, params);
}

export function trackConsultationCtaClick(
  source: string,
  consultationType: "general" | "bridging" = "general",
) {
  trackEvent(AnalyticsEvents.CONSULTATION_CTA_CLICK, {
    event_category: "engagement",
    button_label: "Jadwalkan Konsultasi Gratis",
    source,
    consultation_type: consultationType,
  });
}

export function trackConsultationFormSuccess(
  consultationType: "general" | "bridging",
) {
  trackEvent(AnalyticsEvents.CONSULTATION_FORM_SUCCESS, {
    event_category: "conversion",
    consultation_type: consultationType,
  });
}

export function trackWhatsAppClick(source = "floating_button") {
  trackEvent(AnalyticsEvents.WHATSAPP_CLICK, {
    event_category: "engagement",
    source,
  });
}