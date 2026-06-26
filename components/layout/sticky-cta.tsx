"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { useConsultation } from "@/components/consultation/consultation-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Mobile-only sticky CTA — appears after scroll, hides near final CTA */
export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const { openConsultation } = useConsultation();
  const t = useTranslations("common");

  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth >= 768) {
        setVisible(false);
        return;
      }
      const ctaSection = document.getElementById("cta-section");
      const ctaTop = ctaSection?.getBoundingClientRect().top ?? Infinity;
      setVisible(window.scrollY > 400 && ctaTop > window.innerHeight);
    };

    const onResize = () => {
      if (window.innerWidth >= 768) setVisible(false);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className={cn(
        "sticky-cta-bar fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-background/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden",
        visible && "visible",
      )}
    >
      <Button
        className="w-full"
        onClick={() =>
          openConsultation("general", {
            trackPrimaryCta: true,
            source: "sticky_cta",
          })
        }
      >
        {t("ctaLabel")}
      </Button>
    </div>
  );
}