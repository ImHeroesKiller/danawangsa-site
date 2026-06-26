"use client";

import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { useConsultation } from "@/components/consultation/consultation-context";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Logo } from "@/components/layout/logo";
import { SiteNavLink } from "@/components/layout/site-nav-link";
import { Button } from "@/components/ui/button";
import {
  getFooterLegalLinks,
  mainNavLinkDefs,
  type NavLinkKey,
} from "@/lib/data/navigation";
import { usePathname } from "@/lib/i18n/navigation";
import { isLegalNavLinkActive, isMainNavLinkActive } from "@/lib/nav-utils";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const NAV_LABEL_KEYS: Record<NavLinkKey, string> = {
  home: "home",
  services: "services",
  process: "process",
  testimonials: "testimonials",
  allServices: "allServices",
  contactUs: "contactUs",
};

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openConsultation } = useConsultation();
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");
  const tFooter = useTranslations("footer");
  const locale = useLocale() as Locale;

  const legalLinks = getFooterLegalLinks(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobile = () => setMobileOpen(false);

  const getNavLabel = (key: NavLinkKey) => {
    if (key === "allServices") return tFooter("allServices");
    if (key === "contactUs") return tFooter("contactUs");
    return tNav(NAV_LABEL_KEYS[key]);
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl transition-colors",
        scrolled ? "nav-scrolled bg-background/97" : "bg-background/95",
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Logo />

          <div className="hidden items-center gap-x-1 lg:flex">
            {mainNavLinkDefs.map((link) => {
              const isActive = isMainNavLinkActive(pathname, link.key, link.href);

              return (
                <SiteNavLink
                  key={link.href + link.key}
                  href={link.href}
                  isActive={isActive}
                  className={cn(
                    "rounded-2xl px-3.5 py-2 text-sm",
                    isActive && "bg-gold/10",
                  )}
                >
                  {getNavLabel(link.key)}
                </SiteNavLink>
              );
            })}
          </div>

          <div className="flex items-center gap-x-3">
            <LanguageSwitcher className="hidden sm:flex" />
            <Button
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() =>
                openConsultation("general", {
                  trackPrimaryCta: true,
                  source: "navbar",
                })
              }
            >
              {tCommon("ctaLabel")}
            </Button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
              aria-label={mobileOpen ? tNav("closeMenu") : tNav("openMenu")}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-menu max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-background lg:hidden">
          <div className="flex flex-col gap-y-1 px-5 py-4 text-sm">
            {mainNavLinkDefs.map((link) => {
              const isActive = isMainNavLinkActive(pathname, link.key, link.href);

              return (
                <SiteNavLink
                  key={link.href + link.key}
                  href={link.href}
                  isActive={isActive}
                  className={cn(
                    "block rounded-2xl px-4 py-3",
                    isActive
                      ? "bg-gold/10 text-gold"
                      : "text-white/85 hover:bg-white/5",
                  )}
                  onClick={closeMobile}
                >
                  {getNavLabel(link.key)}
                </SiteNavLink>
              );
            })}
            <div className="mx-4 my-2 h-px bg-white/10" />
            <LanguageSwitcher className="mx-4" />
            <Button
              className="mx-4"
              onClick={() => {
                openConsultation("general", {
                  trackPrimaryCta: true,
                  source: "navbar_mobile",
                });
                closeMobile();
              }}
            >
              {tCommon("ctaLabel")}
            </Button>
            <div className="mx-4 my-2 h-px bg-white/10" />
            <p className="px-4 text-[10px] tracking-wider text-white/30">
              {tNav("legalSection")}
            </p>
            {legalLinks.map((link) => {
              const isActive = isLegalNavLinkActive(pathname, link.href);

              return (
                <SiteNavLink
                  key={link.href}
                  href={link.href}
                  isActive={isActive}
                  className={cn(
                    "block rounded-2xl px-4 py-3",
                    isActive
                      ? "bg-gold/10 text-gold"
                      : "text-white/85 hover:bg-white/5",
                  )}
                  onClick={closeMobile}
                >
                  {link.label}
                </SiteNavLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}