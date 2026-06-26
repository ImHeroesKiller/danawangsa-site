import { services } from "@/lib/data/services";
import { legalNavLinks } from "@/lib/data/legal-content";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import type { NavLink } from "@/types";

/** Primary header navigation — keep lean and consistent with footer */
export const mainNavLinks: NavLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  { label: "Proses Kerja", href: "/layanan" },
  { label: "Testimoni", href: "/#testimonials" },
];

export const footerServiceLinks: NavLink[] = [
  ...services.map((service) => ({
    label: service.listing.title,
    href: service.path,
  })),
  { label: "Semua Layanan", href: "/layanan" },
];

export const footerCompanyLinks: NavLink[] = [
  { label: "Proses Kerja", href: "/layanan" },
  { label: "Testimoni", href: "/#testimonials" },
  { label: "Hubungi Kami", href: "/#cta-section" },
];

export const footerLegalLinks: NavLink[] = [...legalNavLinks];

export const footerContactLinks: NavLink[] = [
  { label: siteConfig.phone, href: `tel:+${siteConfig.phoneRaw}` },
  { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "WhatsApp", href: getWhatsAppUrl() },
];