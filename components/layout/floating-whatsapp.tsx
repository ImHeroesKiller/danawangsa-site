"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { trackWhatsAppClick } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/site-config";

export function FloatingWhatsApp() {
  return (
    <Link
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      onClick={() => trackWhatsAppClick("floating_button")}
      className="wa-float fixed bottom-20 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] transition-all hover:scale-105 hover:bg-[#1fb855] sm:bottom-6"
    >
      <MessageCircle className="h-7 w-7 fill-white text-white" />
    </Link>
  );
}