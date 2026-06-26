import type { ConsultationModalType, FaqItem } from "@/types";

/** Icon keys — mapped to Lucide icons in presentation components */
export type ServiceIconKey =
  | "wallet"
  | "zap"
  | "trending-up"
  | "bolt"
  | "clock"
  | "shield";

export type ServiceBadgeVariant = "default" | "amber";

export interface ServiceBadge {
  label: string;
  variant?: ServiceBadgeVariant;
}

export interface ServiceCtaLink {
  label: string;
  href: string;
}

export interface ServiceSectionHeader {
  eyebrow: string;
  title: string;
  description?: string;
}

export interface ServiceProblem {
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: ServiceIconKey;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
  deliverable: string;
}

export interface ServiceFeeItem {
  id: string;
  title: string;
  amount: string;
  description: string;
  highlighted?: boolean;
}

export interface ServicePageMeta {
  title: string;
  description: string;
}

export interface ServiceHero {
  badge: ServiceBadge;
  title: string;
  titleHighlight: string;
  description: string;
  positioning: string;
  secondaryCta?: ServiceCtaLink;
}

export interface ServiceTeaser {
  badge: ServiceBadge;
  title: string;
  titleHighlight: string;
  description: string;
  highlights: { label: string; icon: ServiceIconKey }[];
  benefitBullets: string[];
  card: {
    eyebrow: string;
    description: string;
    footnote: string;
  };
}

export interface ServiceListing {
  category: string;
  title: string;
  description: string;
  badge?: string;
}

export interface ServiceCta {
  badge?: ServiceBadge;
  title: string;
  description: string;
  secondaryCta?: ServiceCtaLink;
  footnote?: string;
}

/** Full content model for a service detail page — reusable across layanan */
export interface ServicePageData {
  slug: string;
  path: string;
  navLabel: string;
  consultationModalType: ConsultationModalType;
  meta: ServicePageMeta;
  listing: ServiceListing;
  hero: ServiceHero;
  teaser: ServiceTeaser;
  masalah: ServiceSectionHeader & { items: ServiceProblem[] };
  solusi: ServiceSectionHeader & { items: string[]; ctaLabel?: string };
  manfaat: ServiceSectionHeader & { items: ServiceBenefit[] };
  proses: ServiceSectionHeader & { items: ServiceProcessStep[] };
  strukturFee: ServiceSectionHeader & {
    items: ServiceFeeItem[];
    footnote: string;
  };
  cocokUntuk: ServiceSectionHeader & { items: string[] };
  faq: ServiceSectionHeader & { items: FaqItem[] };
  cta: ServiceCta;
}