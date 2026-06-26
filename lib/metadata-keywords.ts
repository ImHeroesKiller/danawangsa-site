import type { Locale } from "@/i18n/routing";

const SERVICE_KEYWORDS: Record<Locale, Record<string, string[]>> = {
  id: {
    "bridging-restrukturisasi": [
      "bridging finance",
      "restrukturisasi kredit",
      "konsultasi keuangan",
      "pinjaman bank jatuh tempo",
      "danawangsa capital",
    ],
    "modal-usaha-jaminan-aset": [
      "modal usaha",
      "jaminan aset",
      "pembiayaan bisnis",
      "konsultasi pendanaan",
      "danawangsa capital",
    ],
    "modal-kerja-skbdn": [
      "modal kerja",
      "SKBDN",
      "surat berharga",
      "konsultasi keuangan",
      "danawangsa capital",
    ],
    "asset-collateral-program": [
      "asset collateral",
      "skema tripartit",
      "jaminan aset",
      "konsultasi investasi",
      "danawangsa capital",
    ],
    "business-financial-advisory": [
      "konsultasi bisnis",
      "financial advisory",
      "strategi keuangan",
      "konsultasi korporat",
      "danawangsa capital",
    ],
    "pembiayaan-energi-terbarukan": [
      "pembiayaan energi terbarukan",
      "green financing",
      "efisiensi energi",
      "ESG financing",
      "danawangsa capital",
    ],
  },
  en: {
    "bridging-restrukturisasi": [
      "bridging finance",
      "credit restructuring",
      "financial consulting",
      "loan maturity",
      "danawangsa capital",
    ],
    "modal-usaha-jaminan-aset": [
      "business capital",
      "asset collateral",
      "business financing",
      "funding advisory",
      "danawangsa capital",
    ],
    "modal-kerja-skbdn": [
      "working capital",
      "SKBDN",
      "debt securities",
      "financial consulting",
      "danawangsa capital",
    ],
    "asset-collateral-program": [
      "asset collateral program",
      "tripartite scheme",
      "collateral advisory",
      "investment consulting",
      "danawangsa capital",
    ],
    "business-financial-advisory": [
      "business consulting",
      "financial advisory",
      "corporate strategy",
      "strategic advisory",
      "danawangsa capital",
    ],
    "pembiayaan-energi-terbarukan": [
      "renewable energy financing",
      "green financing",
      "energy efficiency",
      "ESG financing",
      "danawangsa capital",
    ],
  },
  zh: {
    "bridging-restrukturisasi": [
      "过桥融资",
      "信贷重组",
      "财务咨询",
      "银行贷款到期",
      "danawangsa capital",
    ],
    "modal-usaha-jaminan-aset": [
      "营运资金",
      "资产抵押",
      "商业融资",
      "融资咨询",
      "danawangsa capital",
    ],
    "modal-kerja-skbdn": [
      "流动资金",
      "SKBDN",
      "债务证券",
      "财务咨询",
      "danawangsa capital",
    ],
    "asset-collateral-program": [
      "资产抵押计划",
      "三方结构",
      "抵押咨询",
      "投资咨询",
      "danawangsa capital",
    ],
    "business-financial-advisory": [
      "商业咨询",
      "财务顾问",
      "企业战略",
      "战略咨询",
      "danawangsa capital",
    ],
    "pembiayaan-energi-terbarukan": [
      "可再生能源融资",
      "绿色融资",
      "能效项目",
      "ESG融资",
      "danawangsa capital",
    ],
  },
};

/** Locale-specific SEO keywords for a service detail page */
export function getServiceKeywords(locale: Locale, slug: string): string[] {
  return SERVICE_KEYWORDS[locale][slug] ?? SERVICE_KEYWORDS[locale]["business-financial-advisory"];
}