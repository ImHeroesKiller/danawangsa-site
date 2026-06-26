import type { Locale } from "@/i18n/routing";

export type LocalizedString = Record<Locale, string>;

/** Create a localized string with fallback to Indonesian */
export function ls(
  strings: Partial<LocalizedString> & { id: string },
): LocalizedString {
  return {
    id: strings.id,
    en: strings.en ?? strings.id,
    zh: strings.zh ?? strings.en ?? strings.id,
  };
}

/** Pick the string for a locale with fallback */
export function pick(str: LocalizedString, locale: Locale): string {
  return str[locale] ?? str.id;
}