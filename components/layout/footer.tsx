import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { navLinks } from "@/lib/data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-y-3 px-5 text-sm sm:px-6 md:flex-row">
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
            href="#cta-section"
            className="transition-colors hover:text-gold"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </footer>
  );
}