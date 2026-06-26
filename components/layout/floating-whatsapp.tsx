"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

import { trackWhatsAppClick } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/site-config";

export function FloatingWhatsApp() {
  const t = useTranslations("floatingWhatsapp");
  const tCommon = useTranslations("common");

  return (
    <a
      href={getWhatsAppUrl(tCommon("whatsappMessage"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("ariaLabel")}
      onClick={() => trackWhatsAppClick("floating_button")}
      className="wa-float fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] transition-all hover:scale-105 hover:bg-[#1fb855] sm:bottom-6"
    >
      <MessageCircle className="h-7 w-7 fill-white text-white" />
    </a>
  );
}