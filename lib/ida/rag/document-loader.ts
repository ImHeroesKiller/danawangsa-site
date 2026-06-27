import type { Locale } from "@/i18n/routing";
import { getPrivacyContent, getTermsContent } from "@/lib/data/legal";
import { getServicesForLocale } from "@/lib/data/services/locales";
import type { LegalPageContent } from "@/lib/data/legal-content";
import type { ServicePageData } from "@/types/service";

import type { IdaSourceDocument } from "./types";

function pushDocument(
  documents: IdaSourceDocument[],
  doc: Omit<IdaSourceDocument, "metadata"> & {
    metadata?: Record<string, string>;
  },
) {
  const content = doc.content.trim();
  if (!content) return;

  documents.push({
    ...doc,
    metadata: doc.metadata ?? {},
  });
}

function extractServiceDocuments(
  service: ServicePageData,
  locale: Locale,
): IdaSourceDocument[] {
  const documents: IdaSourceDocument[] = [];
  const base = {
    locale,
    pageSlug: service.slug,
    metadata: { title: service.listing.title },
  };

  pushDocument(documents, {
    ...base,
    section: "listing",
    sourceType: "service",
    content: [
      `Layanan: ${service.listing.title}`,
      `Kategori: ${service.listing.category}`,
      service.listing.description,
    ].join("\n"),
  });

  pushDocument(documents, {
    ...base,
    section: "hero",
    sourceType: "service",
    content: [
      `${service.hero.title} ${service.hero.titleHighlight}`,
      service.hero.description,
      service.hero.positioning,
    ].join("\n"),
  });

  pushDocument(documents, {
    ...base,
    section: "masalah",
    sourceType: "service",
    content: [
      service.masalah.title,
      service.masalah.description ?? "",
      ...service.masalah.items.map(
        (item) => `- ${item.title}: ${item.description}`,
      ),
    ].join("\n"),
  });

  pushDocument(documents, {
    ...base,
    section: "solusi",
    sourceType: "service",
    content: [
      service.solusi.title,
      service.solusi.description ?? "",
      ...service.solusi.items.map((item) => `- ${item}`),
    ].join("\n"),
  });

  pushDocument(documents, {
    ...base,
    section: "manfaat",
    sourceType: "service",
    content: [
      service.manfaat.title,
      service.manfaat.description ?? "",
      ...service.manfaat.items.map(
        (item) => `- ${item.title}: ${item.description}`,
      ),
    ].join("\n"),
  });

  pushDocument(documents, {
    ...base,
    section: "proses",
    sourceType: "service",
    content: [
      service.proses.title,
      service.proses.description ?? "",
      ...service.proses.items.map(
        (step) =>
          `Langkah ${step.step} — ${step.title}: ${step.description} (Deliverable: ${step.deliverable})`,
      ),
    ].join("\n"),
  });

  pushDocument(documents, {
    ...base,
    section: "struktur-fee",
    sourceType: "service",
    content: [
      service.strukturFee.title,
      service.strukturFee.description ?? "",
      ...service.strukturFee.items.map(
        (item) => `- ${item.title} (${item.amount}): ${item.description}`,
      ),
      service.strukturFee.footnote,
    ].join("\n"),
  });

  pushDocument(documents, {
    ...base,
    section: "cocok-untuk",
    sourceType: "service",
    content: [
      service.cocokUntuk.title,
      service.cocokUntuk.description ?? "",
      ...service.cocokUntuk.items.map((item) => `- ${item}`),
    ].join("\n"),
  });

  pushDocument(documents, {
    ...base,
    section: "cta",
    sourceType: "service",
    content: [service.cta.title, service.cta.description, service.cta.footnote ?? ""]
      .filter(Boolean)
      .join("\n"),
  });

  for (const item of service.faq.items) {
    pushDocument(documents, {
      locale,
      pageSlug: service.slug,
      section: `faq-${item.id}`,
      sourceType: "faq",
      metadata: { title: service.listing.title, faqId: item.id },
      content: `Pertanyaan: ${item.question}\nJawaban: ${item.answer}`,
    });
  }

  return documents;
}

function extractLegalDocuments(
  content: LegalPageContent,
  locale: Locale,
): IdaSourceDocument[] {
  const documents: IdaSourceDocument[] = [];

  pushDocument(documents, {
    locale,
    pageSlug: content.slug,
    section: "overview",
    sourceType: "legal",
    metadata: { title: content.title },
    content: [content.title, content.subtitle].join("\n"),
  });

  for (const section of content.sections) {
    const body = [
      section.title,
      ...(section.paragraphs ?? []),
      ...(section.bullets?.map((bullet) => `- ${bullet}`) ?? []),
    ].join("\n");

    pushDocument(documents, {
      locale,
      pageSlug: content.slug,
      section: section.id,
      sourceType: "legal",
      metadata: { title: content.title, sectionTitle: section.title },
      content: body,
    });
  }

  return documents;
}

/** Load all source documents for indexing (services + FAQ + legal) */
export function loadIdaSourceDocuments(locale: Locale): IdaSourceDocument[] {
  const services = getServicesForLocale(locale);
  const privacy = getPrivacyContent(locale);
  const terms = getTermsContent(locale);

  return [
    ...services.flatMap((service) => extractServiceDocuments(service, locale)),
    ...extractLegalDocuments(privacy, locale),
    ...extractLegalDocuments(terms, locale),
  ];
}

/** Load source documents for all supported locales */
export function loadAllIdaSourceDocuments(): IdaSourceDocument[] {
  const locales: Locale[] = ["id", "en", "zh"];
  return locales.flatMap((locale) => loadIdaSourceDocuments(locale));
}