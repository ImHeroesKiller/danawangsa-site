import type { Locale } from "@/i18n/routing";

import type { LegalPageContent } from "../legal-content";
import { localizeHref } from "../services/locale-utils";

import * as en from "./locales/en";
import * as id from "./locales/id";
import * as zh from "./locales/zh";

export type { LegalPageContent, LegalSection } from "../legal-content";

const privacyByLocale: Record<Locale, LegalPageContent> = {
  id: id.privacyPolicyContent,
  en: en.privacyPolicyContent,
  zh: zh.privacyPolicyContent,
};

const termsByLocale: Record<Locale, LegalPageContent> = {
  id: id.consultationTermsContent,
  en: en.consultationTermsContent,
  zh: zh.consultationTermsContent,
};

const navLabels: Record<Locale, { privacy: string; terms: string }> = {
  id: { privacy: "Kebijakan Privasi", terms: "Syarat Konsultasi" },
  en: { privacy: "Privacy Policy", terms: "Consultation Terms" },
  zh: { privacy: "隐私政策", terms: "咨询条款" },
};

/** Privacy policy content for a locale */
export function getPrivacyContent(locale: Locale): LegalPageContent {
  return privacyByLocale[locale];
}

/** Consultation terms content for a locale */
export function getTermsContent(locale: Locale): LegalPageContent {
  return termsByLocale[locale];
}

/** Legal page nav links with locale-prefixed hrefs (e.g. `/en/privasi`) */
export function getLegalNavLinks(
  locale: Locale,
): { label: string; href: string }[] {
  const labels = navLabels[locale];

  return [
    { label: labels.privacy, href: localizeHref("/privasi", locale) },
    { label: labels.terms, href: localizeHref("/syarat-konsultasi", locale) },
  ];
}