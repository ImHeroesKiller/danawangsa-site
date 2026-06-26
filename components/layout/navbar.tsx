"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useConsultation } from "@/components/consultation/consultation-context";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data/content";
import { legalNavLinks } from "@/lib/data/legal-content";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openConsultation } = useConsultation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl transition-colors",
        scrolled ? "nav-scrolled bg-background/97" : "bg-background/95",
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-x-7 text-sm font-medium lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-x-3">
            <Button
              variant="goldOutline"
              size="sm"
              className="hidden md:inline-flex"
              asChild
            >
              <Link href="/#cta-section">Hubungi Kami</Link>
            </Button>
            <Button
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => openConsultation("general")}
            >
              {siteConfig.ctaLabel}
            </Button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white/80 transition-colors hover:bg-white/10 hover:text-white md:hidden"
              aria-label="Menu"
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
        <div className="mobile-menu border-t border-white/10 bg-background md:hidden">
          <div className="flex flex-col gap-y-1 px-5 py-4 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 hover:bg-white/5"
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}
            <div className="mx-4 my-2 h-px bg-white/10" />
            <Link
              href="/#cta-section"
              className="rounded-2xl px-4 py-3 font-medium hover:bg-white/5"
              onClick={closeMobile}
            >
              Hubungi Kami
            </Link>
            <div className="mx-4 my-2 h-px bg-white/10" />
            <p className="px-4 text-[10px] tracking-wider text-white/30">
              LEGAL
            </p>
            {legalNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 hover:bg-white/5"
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}