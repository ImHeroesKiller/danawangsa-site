import type { LucideIcon } from "lucide-react";

/** Navigation link used in Navbar & Footer */
export interface NavLink {
  label: string;
  href: string;
}

/** Trust bar statistic */
export interface TrustStat {
  value: string;
  label: string;
}

/** Consulting service card */
export interface Service {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

/** Fee structure card */
export interface FeeItem {
  id: string;
  title: string;
  amount: string;
  description: string;
  footnote: string;
  icon: LucideIcon;
  highlighted?: boolean;
}

/** Process workflow step */
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

/** Client testimonial */
export interface Testimonial {
  id: string;
  quote: string;
  role: string;
  company: string;
}

/** Value proposition item */
export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

/** FAQ item */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/** Consultation form topic options */
export type ConsultationTopic =
  | "Strategi Bridging & Restrukturisasi Kredit"
  | "Optimalisasi Modal Usaha & Aset"
  | "Perencanaan Pendapatan Pasif dari Aset"
  | "Struktur Modal Kerja & SKBDN"
  | "Konsultasi Bisnis & Keuangan Umum";

/** General consultation form payload — ready for Server Actions / API */
export interface ConsultationFormData {
  name: string;
  whatsapp: string;
  email: string;
  topic: ConsultationTopic | "";
  description: string;
}

/** Bridging-specific consultation form */
export interface BridgingFormData {
  companyName: string;
  whatsapp: string;
  email: string;
  bank: string;
  loanAmount: string;
}

export type ConsultationModalType = "general" | "bridging";