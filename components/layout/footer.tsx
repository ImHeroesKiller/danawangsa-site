import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { navLinks } from "@/lib/data/content";
import { legalNavLinks } from "@/lib/data/legal-content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-y-5 md:flex-row">
          <div className="flex items-center gap-x-3 text-sm text-white/60">
            <Logo compact />
            <span>© 2026 Danawangsa Capital — Strategic Advisory</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/layanan"
              className="transition-colors hover:text-gold"
            >
              Layanan
            </Link>
            <Link
              href="/#cta-section"
              className="transition-colors hover:text-gold"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-white/10 pt-5 text-xs text-white/40">
          <span className="text-white/30">Legal:</span>
          {legalNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}