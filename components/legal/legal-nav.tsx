"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, FileText, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { legalNavLinks } from "@/lib/data/legal-content";
import { cn } from "@/lib/utils";

const linkIcons: Record<string, typeof Shield> = {
  "/privasi": Shield,
  "/syarat-konsultasi": FileText,
};

/** Cross-navigation between legal pages + back to homepage */
export function LegalNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigasi halaman legal"
      className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <Button variant="ghost" size="sm" className="w-fit px-0 hover:bg-transparent" asChild>
        <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-gold">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Beranda
        </Link>
      </Button>

      <div className="flex flex-wrap gap-2">
        {legalNavLinks.map((link) => {
          const Icon = linkIcons[link.href] ?? FileText;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-gold/50 bg-gold/10 text-gold"
                  : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}