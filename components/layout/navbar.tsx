"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useConsultation } from "@/components/consultation/consultation-context";
import { Logo } from "@/components/layout/logo";
import { SiteNavLink } from "@/components/layout/site-nav-link";
import { Button } from "@/components/ui/button";
import { footerLegalLinks, mainNavLinks } from "@/lib/data/navigation";
import { isLegalNavLinkActive, isMainNavLinkActive } from "@/lib/nav-utils";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openConsultation } = useConsultation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobile = () => setMobileOpen(false);

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
            {mainNavLinks.map((link) => {
              const isActive = isMainNavLinkActive(pathname, link);

              return (
                <SiteNavLink
                  key={link.href + link.label}
                  href={link.href}
                  isActive={isActive}
                  className={cn(
                    "rounded-2xl px-3.5 py-2 text-sm",
                    isActive && "bg-gold/10",
                  )}
                >
                  {link.label}
                </SiteNavLink>
              );
            })}
          </div>

          <div className="flex items-center gap-x-3">
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
              {siteConfig.ctaLabel}
            </Button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
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
            {mainNavLinks.map((link) => {
              const isActive = isMainNavLinkActive(pathname, link);

              return (
                <SiteNavLink
                  key={link.href + link.label}
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
            <div className="mx-4 my-2 h-px bg-white/10" />
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
              {siteConfig.ctaLabel}
            </Button>
            <div className="mx-4 my-2 h-px bg-white/10" />
            <p className="px-4 text-[10px] tracking-wider text-white/30">
              LEGAL
            </p>
            {footerLegalLinks.map((link) => {
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