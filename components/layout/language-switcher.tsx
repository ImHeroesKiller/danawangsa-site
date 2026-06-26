"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALE_LABELS: Record<Locale, string> = {
  id: "indonesia",
  en: "english",
  zh: "chinese",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");

  const handleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Globe className="h-4 w-4 text-white/50" aria-hidden />
      <label htmlFor="language-switcher" className="sr-only">
        {t("label")}
      </label>
      <select
        id="language-switcher"
        value={locale}
        onChange={(event) => handleChange(event.target.value as Locale)}
        className="h-9 rounded-xl border border-white/15 bg-black/40 px-2.5 text-xs text-white/80 focus-visible:border-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/30"
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc}>
            {t(LOCALE_LABELS[loc])}
          </option>
        ))}
      </select>
    </div>
  );
}