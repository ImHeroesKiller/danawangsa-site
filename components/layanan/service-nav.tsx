"use client";

import { ArrowLeft, Home, Layers } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

interface ServiceNavProps {
  currentLabel?: string;
}

/** Navigation for service detail pages */
export function ServiceNav({ currentLabel }: ServiceNavProps) {
  const pathname = usePathname();
  const t = useTranslations("serviceNav");
  const tCommon = useTranslations("common");

  const links = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/layanan", label: t("allServices"), icon: Layers },
  ];

  return (
    <nav
      aria-label={t("ariaLabel")}
      className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <Button
        variant="ghost"
        size="sm"
        className="w-fit px-0 hover:bg-transparent"
        asChild
      >
        <Link
          href="/layanan"
          className="inline-flex items-center gap-2 text-white/60 hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          {tCommon("backToServices")}
        </Link>
      </Button>

      <div className="flex flex-wrap gap-2">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-gold/50 bg-gold/10 text-gold"
                  : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white",
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
        {currentLabel && (
          <span className="inline-flex items-center rounded-2xl border border-gold/30 bg-gold/5 px-4 py-2 text-sm font-medium text-gold">
            {currentLabel}
          </span>
        )}
      </div>
    </nav>
  );
}