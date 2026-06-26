import type { Locale } from "@/i18n/routing";
import type { Testimonial, TrustStat } from "@/types";

type TrustBarKey =
  | "experience"
  | "casesHandled"
  | "initialAnalysis"
  | "transparentFee";

const TRUST_STAT_KEYS: TrustBarKey[] = [
  "experience",
  "casesHandled",
  "initialAnalysis",
  "transparentFee",
];

const TRUST_VALUE_BY_LOCALE: Record<Locale, string[]> = {
  id: ["10+", "150+", "1–2 Hari", "100%"],
  en: ["10+", "150+", "1–2 Days", "100%"],
  zh: ["10+", "150+", "1–2 天", "100%"],
};

export function getTrustStats(
  locale: Locale,
  labels: Record<TrustBarKey, string>,
): TrustStat[] {
  const values = TRUST_VALUE_BY_LOCALE[locale];

  return TRUST_STAT_KEYS.map((key, index) => ({
    value: values[index],
    label: labels[key],
  }));
}

const TESTIMONIALS_BY_LOCALE: Record<Locale, Testimonial[]> = {
  id: [
    {
      id: "1",
      quote:
        "Pinjaman bank kami jatuh tempo dalam 10 hari. Tim Danawangsa merancang strategi bridging yang tepat dan mendampingi negosiasi hingga plafon kami kembali normal.",
      role: "Direktur Keuangan",
      company: "Perusahaan Konstruksi • Jakarta",
    },
    {
      id: "2",
      quote:
        "Awalnya kami kira ini lembaga pembiayaan. Ternyata mereka benar-benar konsultan — analisisnya mendalam dan fee-nya transparan sejak proposal awal.",
      role: "Owner UMKM",
      company: "Distribusi & Trading • Surabaya",
    },
    {
      id: "3",
      quote:
        "Struktur modal kerja SKBDN kami sebelumnya tidak efisien. Setelah konsultasi, arus kas proyek jauh lebih terkendali dan margin profit naik signifikan.",
      role: "Direktur Operasional",
      company: "Perusahaan Logistik • Jakarta",
    },
  ],
  en: [
    {
      id: "1",
      quote:
        "Our bank loan was due in 10 days. The Danawangsa team designed the right bridging strategy and supported negotiations until our credit limit was restored.",
      role: "Finance Director",
      company: "Construction Company • Jakarta",
    },
    {
      id: "2",
      quote:
        "We initially thought this was a financing institution. They are truly consultants — their analysis is thorough and fees are transparent from the first proposal.",
      role: "SME Owner",
      company: "Distribution & Trading • Surabaya",
    },
    {
      id: "3",
      quote:
        "Our SKBDN working capital structure was inefficient. After consultation, project cash flow is much more controlled and profit margins improved significantly.",
      role: "Operations Director",
      company: "Logistics Company • Jakarta",
    },
  ],
  zh: [
    {
      id: "1",
      quote:
        "我们的银行贷款将在10天内到期。Danawangsa团队制定了合适的过桥策略，并协助谈判直至恢复授信额度。",
      role: "财务总监",
      company: "建筑公司 • 雅加达",
    },
    {
      id: "2",
      quote:
        "起初我们以为这是融资机构。他们确实是顾问——分析深入，费用从最初方案起就透明。",
      role: "中小企业主",
      company: "分销贸易 • 泗水",
    },
    {
      id: "3",
      quote:
        "我们之前的SKBDN营运资金结构效率不高。咨询后，项目现金流更易管控，利润率显著提升。",
      role: "运营总监",
      company: "物流公司 • 雅加达",
    },
  ],
};

export function getTestimonials(locale: Locale): Testimonial[] {
  return TESTIMONIALS_BY_LOCALE[locale];
}

export const consultationTopicKeys = [
  "bridging",
  "modalUsaha",
  "modalKerja",
  "assetCollateral",
  "advisory",
] as const;

export type ConsultationTopicKey = (typeof consultationTopicKeys)[number];