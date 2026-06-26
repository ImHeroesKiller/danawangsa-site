"use client";

import { useTranslations } from "next-intl";

import { useConsultation } from "@/components/consultation/consultation-context";
import { LegalNav } from "@/components/legal/legal-nav";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import type { LegalPageContent } from "@/lib/data/legal-content";
import { Badge } from "@/components/ui/badge";

interface LegalPageShellProps {
  content: LegalPageContent;
}

/** Shared layout wrapper for all legal/document pages */
export function LegalPageShell({ content }: LegalPageShellProps) {
  const { openConsultation } = useConsultation();
  const t = useTranslations("legal");
  const tBreadcrumb = useTranslations("breadcrumb");

  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <Breadcrumb
        items={[
          { label: tBreadcrumb("home"), href: "/" },
          {
            label:
              content.slug === "privasi"
                ? tBreadcrumb("privacy")
                : tBreadcrumb("terms"),
          },
        ]}
      />
      <LegalNav />

      <header className="mt-10 border-b border-white/10 pb-8">
        <Badge className="mb-4">{t("documentBadge")}</Badge>
        <h1 className="heading-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          {content.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/65">
          {content.subtitle}
        </p>
        <p className="mt-3 text-xs text-white/40">
          {t("lastUpdated")} {content.lastUpdated}
        </p>
      </header>

      <div className="mt-10 space-y-8">
        {content.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="rounded-3xl border border-white/10 bg-surface p-6 sm:p-8"
          >
            <h2 className="mb-4 text-lg font-semibold tracking-tight text-gold">
              {section.title}
            </h2>

            {section.paragraphs?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mb-3 text-sm leading-relaxed text-white/70 last:mb-0"
              >
                {paragraph}
              </p>
            ))}

            {section.bullets && (
              <ul className="mt-2 space-y-2 text-sm text-white/70">
                {section.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <footer className="mt-12 rounded-3xl border border-gold/20 bg-gold/5 p-6 text-center text-sm text-white/60">
        <p>
          {t("footerNote")}
          <br />
          {t("footerDisclaimer")}{" "}
          <button
            type="button"
            onClick={() =>
              openConsultation("general", { source: "legal_footer" })
            }
            className="text-gold hover:underline"
          >
            {t("footerContactLink")}
          </button>
          .
        </p>
      </footer>
    </article>
  );
}