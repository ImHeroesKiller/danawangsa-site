"use client";

import { useLocale, useTranslations } from "next-intl";

import { useConsultation } from "@/components/consultation/consultation-context";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Logo } from "@/components/layout/logo";
import { SiteNavLink } from "@/components/layout/site-nav-link";
import {
  footerCompanyLinkDefs,
  getFooterLegalLinks,
  getFooterServiceLinks,
  type NavLinkKey,
} from "@/lib/data/navigation";
import type { Locale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

function FooterColumn({
  title,
  links,
  onConsultationClick,
}: FooterColumnProps & { onConsultationClick?: () => void }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold tracking-wider text-gold">
        {title}
      </h3>
      <ul className="space-y-2 text-sm text-white/55">
        {links.map((link) => (
          <li key={link.href + link.label}>
            {link.href === "/#cta-section" && onConsultationClick ? (
              <button
                type="button"
                onClick={onConsultationClick}
                className="text-left text-white/55 transition-colors hover:text-gold"
              >
                {link.label}
              </button>
            ) : (
              <SiteNavLink href={link.href} className="text-white/55">
                {link.label}
              </SiteNavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const COMPANY_LABEL_KEYS: Record<NavLinkKey, string> = {
  home: "home",
  services: "services",
  process: "process",
  testimonials: "testimonials",
  allServices: "allServices",
  contactUs: "contactUs",
};

export function Footer() {
  const locale = useLocale() as Locale;
  const { openConsultation } = useConsultation();
  const tFooter = useTranslations("footer");
  const tNav = useTranslations("nav");

  const openConsultationForm = () =>
    openConsultation("general", { source: "footer" });

  const serviceLinks = getFooterServiceLinks(locale).map((link) => ({
    ...link,
    label:
      link.label === "allServices"
        ? tFooter("allServices")
        : link.label,
  }));

  const companyLinks = footerCompanyLinkDefs.map((link) => ({
    label:
      link.key === "process" || link.key === "testimonials"
        ? tNav(link.key)
        : tFooter(COMPANY_LABEL_KEYS[link.key]),
    href: link.href,
  }));

  const legalLinks = getFooterLegalLinks(locale);

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo compact />
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/45">
              {siteConfig.tagline}. {tFooter("taglineExtension")}
            </p>
            <LanguageSwitcher className="mt-4" />
          </div>

          <FooterColumn title={tFooter("services")} links={serviceLinks} />
          <FooterColumn
            title={tFooter("company")}
            links={companyLinks}
            onConsultationClick={openConsultationForm}
          />
          <FooterColumn title={tFooter("legal")} links={legalLinks} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>{tFooter("copyright")}</p>
          <p className="text-white/30">{tFooter("disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}