import type { ServicePageData } from "@/types/service";

const ADVISORY_POSITIONING =
  "Strategic business & financial consultant — not a bank, not a lending institution.";

const ADVISORY_FOOTNOTE =
  "Not direct fund disbursement • We help design strategy & accompany the process";

const FEE_FOOTNOTE =
  "Full details will be set out in the official Consultation Agreement. Consultation fees are separate from bank, notary, appraisal, and legal costs.";

const generalStrukturFee: ServicePageData["strukturFee"] = {
  eyebrow: "FEE STRUCTURE",
  title: "Transparent & Deliverable-Based",
  description:
    "Consultation fees are explained upfront in the proposal and Consultation Agreement — separate from third-party costs.",
  items: [
    {
      id: "base",
      title: "Retainer / Base Fee",
      amount: "35–50%",
      description:
        "Upfront deposit (non-refundable) to commence in-depth analysis, due diligence, and strategy development.",
    },
    {
      id: "milestone",
      title: "Milestone Payment",
      amount: "Phased",
      description:
        "Payment per stage: analysis completed, strategy approved by client, negotiation or execution commenced.",
    },
    {
      id: "final",
      title: "Final / Settlement Fee",
      amount: "Balance",
      description:
        "Final payment upon delivery of deliverables: final report, strategy documents, or agreed milestones achieved.",
      highlighted: true,
    },
  ],
  footnote: FEE_FOOTNOTE,
};

function createServiceCta(
  title: string,
  description: string,
): ServicePageData["cta"] {
  return {
    badge: { label: "FREE INITIAL CONSULTATION • 30 MINUTES" },
    title,
    description,
    secondaryCta: { label: "View Other Services", href: "/layanan" },
    footnote: ADVISORY_FOOTNOTE,
  };
}

function createStandardFaq(
  prefix: string,
  serviceName: string,
): ServicePageData["faq"] {
  return {
    eyebrow: `FAQ ${prefix}`,
    title: "Frequently Asked Questions",
    items: [
      {
        id: `${prefix}-1`,
        question: `Does Danawangsa Capital disburse funds for ${serviceName}?`,
        answer:
          "No. We are strategic consultants — not a lending institution. We design strategy and accompany negotiation processes with banks or partners. Fund disbursement is entirely through official financial institutions.",
      },
      {
        id: `${prefix}-2`,
        question: "How long does the consultation process usually take?",
        answer:
          "Initial analysis typically takes 3–5 business days. The full process varies from 2–6 weeks for standard cases, up to 1–3 months for complex multi-party structures.",
      },
      {
        id: `${prefix}-3`,
        question: "Do you guarantee credit approval from the bank?",
        answer:
          "No one can guarantee credit approval — the decision rests entirely with the bank. However, we maximize your chances with the right strategy, complete documentation, and professional negotiation support.",
      },
      {
        id: `${prefix}-4`,
        question: "Can I start with a free consultation?",
        answer:
          "Yes. The initial ±30-minute consultation is free and without commitment. We will assess your needs and explain next steps before the Consultation Agreement is signed.",
      },
    ],
  };
}

const bridgingStrukturFee: ServicePageData["strukturFee"] = {
  eyebrow: "FEE STRUCTURE",
  title: "Transparent & Results-Based",
  description:
    "Bridging fees are explained upfront in the proposal and Consultation Agreement — separate from third-party costs.",
  items: [
    {
      id: "base",
      title: "Retainer / Base Fee",
      amount: "35–50%",
      description:
        "Upfront deposit (non-refundable) to commence in-depth analysis, due diligence, and bridging strategy development.",
    },
    {
      id: "milestone",
      title: "Milestone Payment",
      amount: "Phased",
      description:
        "Payment per stage: analysis completed, strategy approved by client, bank negotiation commenced.",
    },
    {
      id: "success",
      title: "Success Fee",
      amount: "3–6%",
      description:
        "Specific to bridging & restructuring — only payable if funding is successfully disbursed or restructuring is approved by the bank.",
      highlighted: true,
    },
  ],
  footnote: FEE_FOOTNOTE,
};

export const bridgingRestrukturisasiService: ServicePageData = {
  slug: "bridging-restrukturisasi",
  path: "/layanan/bridging-restrukturisasi",
  navLabel: "Bridging Finance & Financial Restructuring",
  consultationModalType: "bridging",

  meta: {
    title: "Bridging Finance & Financial Restructuring",
    description:
      "Strategic bridging finance & financial restructuring consultation for companies. Professional support — not a lending institution. 1–2 day analysis for urgent cases.",
  },

  listing: {
    category: "BRIDGING & RESTRUCTURING",
    title: "Bridging Finance & Financial Restructuring",
    description:
      "Strategic consultation for bridging finance and financial restructuring to address bank loan maturities, credit restructuring, and credit limit recovery.",
    badge: "Popular",
  },

  hero: {
    badge: { label: "STRATEGIC CONSULTATION SERVICE", variant: "amber" },
    title: "Bridging Finance &",
    titleHighlight: "Financial Restructuring",
    description:
      "Consulting partner to address bank loan maturities — we design bridging finance & financial restructuring strategy and accompany negotiations, not disburse funds directly.",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: {
      label: "View Fee Structure",
      href: "/layanan/bridging-restrukturisasi#fee",
    },
  },

  teaser: {
    badge: { label: "STRATEGIC SOLUTION", variant: "amber" },
    title: "BRIDGING FINANCE &",
    titleHighlight: "Financial Restructuring",
    description:
      "Bank loan approaching maturity? We help design bridging finance strategy and accompany financial restructuring — not direct fund disbursement.",
    highlights: [
      { label: "Fast Analysis 1-2 Days", icon: "bolt" },
      { label: "Short-Term Strategy", icon: "clock" },
      { label: "Professional Support", icon: "shield" },
    ],
    benefitBullets: [
      "Cash flow remains controlled",
      "Operations uninterrupted",
      "Bank credit limit can be restored",
    ],
    card: {
      eyebrow: "NEED IMMEDIATE SUPPORT?",
      description:
        "Learn about the 5-step process, fee structure, FAQ, and suitable client criteria — all on the service detail page.",
      footnote: ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "COMMON CHALLENGES",
    title: "When Bank Loan Maturity Pressures the Business",
    description:
      "Many business owners face this critical situation — without the right strategy, operational and credit reputation risks increase dramatically.",
    items: [
      {
        title: "Bank Loan Approaching Maturity",
        description:
          "Credit facilities nearing repayment date while operational funds are unavailable or projects are still ongoing.",
      },
      {
        title: "Credit Limit Locked",
        description:
          "Bank access is difficult due to payment history, incomplete documentation, or financial position needing restructuring.",
      },
      {
        title: "Cash Flow Pressure",
        description:
          "Supplier payments, payroll, or project commitments clash with tight bank installment schedules.",
      },
      {
        title: "Limited Time for Negotiation",
        description:
          "Management lacks bandwidth or network to design strategy and negotiate effectively with the bank.",
      },
    ],
  },

  solusi: {
    eyebrow: "OUR SOLUTION",
    title: "Bridging Finance Advisory — Not Fund Disbursement",
    description:
      "Danawangsa Capital helps you design and execute bridging finance & financial restructuring strategy with professional support at every stage.",
    items: [
      "In-depth analysis of financial position, maturities, and credit exposure per bank",
      "Design realistic bridging strategy aligned with company risk profile",
      "Prepare documentation and business narrative for strong bank negotiations",
      "Active support during restructuring or facility extension processes",
      "Cash flow monitoring and repayment milestones until credit position recovers",
    ],
    ctaLabel: "Discuss Your Case",
  },

  manfaat: {
    eyebrow: "KEY BENEFITS",
    title: "What You Get",
    items: [
      {
        title: "Safe Cash Flow",
        description:
          "Strategy designed to maintain operational liquidity throughout the bridging process.",
        icon: "wallet",
      },
      {
        title: "Operations Keep Running",
        description:
          "Approach that minimizes disruption to suppliers, projects, and daily business commitments.",
        icon: "zap",
      },
      {
        title: "Bank Limit Restored",
        description:
          "Long-term recommendations to restore credit reputation and regain bank facility access.",
        icon: "trending-up",
      },
    ],
  },

  proses: {
    eyebrow: "WORK PROCESS",
    title: "5 Strategy Steps We Accompany",
    description:
      "More detailed than the homepage summary — each stage has clear deliverables.",
    items: [
      {
        step: 1,
        title: "Discovery & Urgency Assessment",
        description:
          "Initial consultation to map maturities, loan values, related banks, and urgency level. We determine whether the case requires 1–2 day response or a structured medium-term approach.",
        deliverable: "Situation summary & initial step recommendations",
      },
      {
        step: 2,
        title: "Financial Position Analysis",
        description:
          "Review financial statements, loan structure, collateral, project cash flow, and credit history. Identify risk gaps and bank negotiation opportunities.",
        deliverable: "Analysis report & risk map",
      },
      {
        step: 3,
        title: "Bridging Strategy Design",
        description:
          "Develop bridging and/or restructuring scenarios — including timeline, interim payment structure, and third-party coordination options.",
        deliverable: "Strategy document & transparent fee proposal",
      },
      {
        step: 4,
        title: "Bank Negotiation Support",
        description:
          "Accompany bank communication: document preparation, meeting prep, term negotiation, and follow-up until principle agreement is reached.",
        deliverable: "Negotiation documentation & action plan",
      },
      {
        step: 5,
        title: "Monitoring & Limit Recovery",
        description:
          "Evaluate restructuring outcomes, monitor post-agreement cash flow, and recommend steps to restore long-term credit reputation and limits.",
        deliverable: "Final report & follow-up recommendations",
      },
    ],
  },

  strukturFee: bridgingStrukturFee,

  cocokUntuk: {
    eyebrow: "SUITABLE FOR",
    title: "Who Needs This Service?",
    items: [
      "Has bank loans approaching maturity",
      "Needs time for restructuring",
      "Wants to maintain credit reputation",
      "Project suppliers & contractors",
      "State-owned / private vendors",
      "Companies with active credit facilities",
    ],
  },

  faq: {
    eyebrow: "BRIDGING FAQ",
    title: "Frequently Asked Questions",
    items: [
      {
        id: "b1",
        question: "Does Danawangsa Capital disburse bridging funds directly?",
        answer:
          "No. We are strategic consultants — not a lending institution. We design bridging strategy and accompany negotiation with banks or third parties. Fund disbursement is entirely through official financial institutions.",
      },
      {
        id: "b2",
        question: "How long does the bridging consultation process usually take?",
        answer:
          "Initial analysis for urgent cases can be completed within 1–2 business days. The full process — from strategy to negotiation — typically 2–6 weeks, depending on complexity, number of banks involved, and client document readiness.",
      },
      {
        id: "b3",
        question: "What is the success fee for bridging cases?",
        answer:
          "Success fee ranges 3–6% of the transaction value or loan successfully disbursed/restructured. This fee is only payable if agreed outcomes are achieved — explained transparently in the proposal before work begins.",
      },
      {
        id: "b4",
        question: "Do you guarantee bank restructuring approval?",
        answer:
          "No one can guarantee bank approval. However, we maximize your chances with the right strategy, complete documentation, and professional negotiation support based on experience with dozens of similar cases.",
      },
      {
        id: "b5",
        question: "What documents should the client prepare?",
        answer:
          "Generally includes: financial statements for the last 2–3 years, active loan structure, maturity schedule, collateral documents, project cash flow (if applicable), and company legal documents. Full list is customized after the discovery call.",
      },
      {
        id: "b6",
        question: "Can I start with a free consultation?",
        answer:
          "Yes. The initial ±30-minute consultation is free and without commitment. We will assess your case urgency and explain next steps before the Consultation Agreement is signed.",
      },
    ],
  },

  cta: {
    badge: { label: "FREE INITIAL CONSULTATION • 30 MINUTES" },
    title: "Face Maturity with the Right Strategy",
    description:
      "Tell us about your bank loan situation. Our advisor team is ready to respond within 24 hours with initial analysis and recommended next steps.",
    secondaryCta: { label: "View Other Services", href: "/layanan" },
    footnote: ADVISORY_FOOTNOTE,
  },
};

const modalUsahaSlug = "modal-usaha-jaminan-aset";
const modalUsahaPath = `/layanan/${modalUsahaSlug}`;
const modalUsahaName = "Business Capital Financing with Asset Collateral";

export const modalUsahaJaminanAsetService: ServicePageData = {
  slug: modalUsahaSlug,
  path: modalUsahaPath,
  navLabel: modalUsahaName,
  consultationModalType: "general",

  meta: {
    title: modalUsahaName,
    description:
      "Strategic business capital financing consultation with asset collateral — working capital planning, expansion, and optimal collateral structure. Professional support, not a lending institution.",
  },

  listing: {
    category: "STRATEGIC FUNDING CONSULTATION",
    title: modalUsahaName,
    description:
      "Design business capital financing strategy with the right asset collateral structure — from needs analysis to bank negotiation support.",
  },

  hero: {
    badge: { label: "STRATEGIC CONSULTATION SERVICE", variant: "amber" },
    title: "Business Capital Financing",
    titleHighlight: "with Asset Collateral",
    description:
      "Consulting partner to design business capital financing strategy — we analyze financial position, optimize asset collateral, and accompany bank negotiations, not disburse funds directly.",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: { label: "View Fee Structure", href: `${modalUsahaPath}#fee` },
  },

  teaser: {
    badge: { label: "FUNDING CONSULTATION", variant: "amber" },
    title: "BUSINESS CAPITAL &",
    titleHighlight: "Asset Collateral",
    description:
      "Need working capital or business expansion? We help design financing structure with optimal asset collateral — in-depth analysis and negotiation support.",
    highlights: [
      { label: "Right Collateral Structure", icon: "wallet" },
      { label: "In-Depth Analysis", icon: "shield" },
      { label: "Negotiation Support", icon: "zap" },
    ],
    benefitBullets: [
      "More efficient working capital",
      "Optimally structured asset collateral",
      "Stronger bank facility access",
    ],
    card: {
      eyebrow: "NEED THE RIGHT FINANCING STRUCTURE?",
      description:
        "Learn about the 5-step process, fee structure, FAQ, and suitable client profiles on the service detail page.",
      footnote: ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "COMMON CHALLENGES",
    title: "When Business Capital Needs Go Unmet",
    description:
      "Without the right financing strategy and collateral structure, business growth is hindered and assets are not utilized optimally.",
    items: [
      {
        title: "Insufficient Working Capital",
        description:
          "Operational or expansion needs increase while credit access is limited or loan structure is inefficient.",
      },
      {
        title: "Collateral Not Optimized",
        description:
          "Company fixed assets are not structured as strong collateral to support financing limits.",
      },
      {
        title: "Misaligned Financing Structure",
        description:
          "Tenor, interest, and credit facility composition don't match business cycles — pressuring cash flow and margins.",
      },
      {
        title: "Weak Documentation & Narrative",
        description:
          "Bank proposals lack conviction because financial analysis and business strategy are not professionally prepared.",
      },
    ],
  },

  solusi: {
    eyebrow: "OUR SOLUTION",
    title: "Strategy Consultation — Not Fund Disbursement",
    description:
      "Danawangsa Capital helps design business capital financing strategy with asset collateral tailored to your business profile.",
    items: [
      "Analysis of working capital needs, expansion, and repayment capacity",
      "Review and recommendation of optimal asset collateral structure",
      "Financing scheme design and execution timeline",
      "Documentation and business narrative preparation for bank negotiation",
      "Negotiation support and post-agreement monitoring",
    ],
    ctaLabel: "Discuss Your Capital Needs",
  },

  manfaat: {
    eyebrow: "KEY BENEFITS",
    title: "What You Get",
    items: [
      {
        title: "Efficient Capital Structure",
        description:
          "Financing scheme aligned with business cycles and medium-term working capital needs.",
        icon: "wallet",
      },
      {
        title: "Optimal Asset Collateral",
        description:
          "Recommendations for utilizing fixed assets as strong collateral without compromising operations.",
        icon: "shield",
      },
      {
        title: "Measured Expansion",
        description:
          "Funding roadmap supporting business growth with controlled risk.",
        icon: "trending-up",
      },
    ],
  },

  proses: {
    eyebrow: "WORK PROCESS",
    title: "5 Strategy Steps We Accompany",
    description: "Each stage has clear and measurable deliverables.",
    items: [
      {
        step: 1,
        title: "Discovery & Assessment",
        description:
          "Map business capital needs, expansion goals, available assets, and financing urgency.",
        deliverable: "Needs summary & initial step recommendations",
      },
      {
        step: 2,
        title: "Financial & Asset Analysis",
        description:
          "Review financial statements, asset portfolio, active loan structure, and repayment capacity.",
        deliverable: "Analysis report & asset-finance map",
      },
      {
        step: 3,
        title: "Financing Strategy Design",
        description:
          "Develop financing scheme, collateral structure, tenor, and bank coordination options.",
        deliverable: "Strategy document & transparent fee proposal",
      },
      {
        step: 4,
        title: "Negotiation Support",
        description:
          "Accompany bank communication: documents, meetings, term negotiation, and follow-up.",
        deliverable: "Negotiation documentation & action plan",
      },
      {
        step: 5,
        title: "Monitoring & Evaluation",
        description:
          "Evaluate financing outcomes and recommend long-term structure adjustments.",
        deliverable: "Evaluation report & follow-up recommendations",
      },
    ],
  },

  strukturFee: generalStrukturFee,

  cocokUntuk: {
    eyebrow: "SUITABLE FOR",
    title: "Who Needs This Service?",
    items: [
      "SMEs & mid-size companies needing working capital",
      "Businesses in expansion or diversification phase",
      "Fixed asset owners seeking collateral optimization",
      "Manufacturing, distribution, & trading companies",
      "Management seeking credit facility restructuring",
      "Entities with medium-term financing needs",
    ],
  },

  faq: createStandardFaq("BUSINESS CAPITAL", "business capital financing with asset collateral"),

  cta: createServiceCta(
    "Design the Right Business Capital Financing Strategy",
    "Tell us about your working capital needs and collateral assets. Our advisor team is ready to respond within 24 hours with initial analysis.",
  ),
};

const skbdnSlug = "modal-kerja-skbdn";
const skbdnPath = `/layanan/${skbdnSlug}`;
const skbdnName = "SKBDN-Based Working Capital Financing";

export const modalKerjaSkbdnService: ServicePageData = {
  slug: skbdnSlug,
  path: skbdnPath,
  navLabel: skbdnName,
  consultationModalType: "general",

  meta: {
    title: skbdnName,
    description:
      "SKBDN-based working capital financing strategy consultation for suppliers, contractors, and trading. Analysis & negotiation support — not a lending institution.",
  },

  listing: {
    category: "WORKING CAPITAL STRUCTURE",
    title: skbdnName,
    description:
      "Design and optimize SKBDN-based working capital structure — from project analysis to negotiation support.",
  },

  hero: {
    badge: { label: "STRATEGIC CONSULTATION SERVICE", variant: "amber" },
    title: "Working Capital Financing",
    titleHighlight: "SKBDN-Based",
    description:
      "Consulting partner to design SKBDN-based working capital structure — we analyze project needs, prepare documents, and accompany bank negotiations, not disburse funds directly.",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: { label: "View Fee Structure", href: `${skbdnPath}#fee` },
  },

  teaser: {
    badge: { label: "WORKING CAPITAL STRUCTURE", variant: "amber" },
    title: "WORKING CAPITAL",
    titleHighlight: "SKBDN-Based",
    description:
      "Supplier, contractor, or trading business? We help design efficient SKBDN-based working capital structure — with professional negotiation support.",
    highlights: [
      { label: "Project Analysis", icon: "shield" },
      { label: "Right Document Structure", icon: "wallet" },
      { label: "Cash Flow Monitoring", icon: "zap" },
    ],
    benefitBullets: [
      "Controlled project cash flow",
      "Efficient SKBDN structure",
      "More optimal profit margins",
    ],
    card: {
      eyebrow: "MANAGE YOUR PROJECT WORKING CAPITAL?",
      description:
        "Learn about the 5-step process, fee structure, FAQ, and suitable client profiles on the service detail page.",
      footnote: ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "COMMON CHALLENGES",
    title: "When Project Working Capital Is Unmanaged",
    description:
      "Improper SKBDN structure can hinder project cash flow and suppress business profitability.",
    items: [
      {
        title: "Project Needs Not Measured",
        description:
          "Inaccurate project working capital estimates — causing liquidity shortfall or surplus mid-contract.",
      },
      {
        title: "Inefficient SKBDN Structure",
        description:
          "Trade documents and financing schemes don't align with project cycles and bank requirements.",
      },
      {
        title: "Project Cash Flow Under Pressure",
        description:
          "Disbursement and repayment not coordinated with project milestones — eroding profit margins.",
      },
      {
        title: "Suboptimal Bank Negotiation",
        description:
          "Management lacks bandwidth or strategy to negotiate project financing terms effectively.",
      },
    ],
  },

  solusi: {
    eyebrow: "OUR SOLUTION",
    title: "Strategy Consultation — Not Fund Disbursement",
    description:
      "Danawangsa Capital helps design efficient SKBDN-based working capital structure for your project business.",
    items: [
      "Working capital needs analysis per project and cash flow cycles",
      "SKBDN document structure and financing scheme recommendations",
      "Business narrative and documentation preparation for bank negotiation",
      "Negotiation support for terms, tenor, and disbursement milestones",
      "Project cash flow monitoring and periodic evaluation",
    ],
    ctaLabel: "Discuss Your SKBDN Structure",
  },

  manfaat: {
    eyebrow: "KEY BENEFITS",
    title: "What You Get",
    items: [
      {
        title: "Controlled Cash Flow",
        description:
          "SKBDN structure designed to align with project milestones and operational needs.",
        icon: "wallet",
      },
      {
        title: "Structured Documents",
        description:
          "Recommendations for strong trade document structure for bank negotiations.",
        icon: "shield",
      },
      {
        title: "Project Profitability",
        description:
          "Approach that minimizes financing costs and maximizes project margins.",
        icon: "trending-up",
      },
    ],
  },

  proses: {
    eyebrow: "WORK PROCESS",
    title: "5 Strategy Steps We Accompany",
    description: "Each stage has clear and measurable deliverables.",
    items: [
      {
        step: 1,
        title: "Discovery & Project Mapping",
        description:
          "Map project contracts, working capital needs, disbursement schedule, and related banks.",
        deliverable: "Project summary & working capital needs",
      },
      {
        step: 2,
        title: "Project Cash Flow Analysis",
        description:
          "Review contracts, payment schedules, credit exposure, and project risk profile.",
        deliverable: "Cash flow report & project risk map",
      },
      {
        step: 3,
        title: "SKBDN Structure Design",
        description:
          "Develop financing scheme, document structure, tenor, and execution timeline.",
        deliverable: "Strategy document & transparent fee proposal",
      },
      {
        step: 4,
        title: "Bank Negotiation Support",
        description:
          "Accompany bank communication until principle agreement is reached.",
        deliverable: "Negotiation documentation & action plan",
      },
      {
        step: 5,
        title: "Monitoring & Evaluation",
        description:
          "Monitor post-agreement cash flow and recommend structure adjustments.",
        deliverable: "Evaluation report & follow-up recommendations",
      },
    ],
  },

  strukturFee: generalStrukturFee,

  cocokUntuk: {
    eyebrow: "SUITABLE FOR",
    title: "Who Needs This Service?",
    items: [
      "State-owned / private suppliers & vendors",
      "Construction & infrastructure project contractors",
      "Trading & distribution companies",
      "Businesses with recurring project contracts",
      "Management seeking working capital efficiency",
      "Entities with active SKBDN facilities",
    ],
  },

  faq: createStandardFaq("SKBDN", "SKBDN-based working capital financing"),

  cta: createServiceCta(
    "Optimize Your SKBDN-Based Working Capital Structure",
    "Tell us about your project profile and working capital needs. Our advisor team is ready to respond within 24 hours.",
  ),
};

const assetSlug = "asset-collateral-program";
const assetPath = `/layanan/${assetSlug}`;
const assetName = "Asset Collateral Program";

export const assetCollateralProgramService: ServicePageData = {
  slug: assetSlug,
  path: assetPath,
  navLabel: assetName,
  consultationModalType: "general",

  meta: {
    title: assetName,
    description:
      "Collateral Partnership Scheme consultation — connecting Asset Owners, Investors, and Fund Users through a tripartite structure & separate legal contracts. Not a lending institution.",
  },

  listing: {
    category: "COLLATERAL PARTNERSHIP",
    title: assetName,
    description:
      "Collateral partnership scheme with two main pathways — Asset/Collateral Liquidation Scheme & Fresh Money Scheme — for fast disbursement and structured returns.",
  },

  hero: {
    badge: { label: "ASSET CONSULTATION PROGRAM", variant: "amber" },
    title: "Asset Collateral",
    titleHighlight: "Program",
    description:
      "Consulting partner to design Collateral Partnership Schemes — we structure tripartite relationships between Asset Owners, Investors, and Fund Users with separate legal contracts, not disburse funds directly.",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: { label: "View Fee Structure", href: `${assetPath}#fee` },
  },

  teaser: {
    badge: { label: "ASSET OPTIMIZATION", variant: "amber" },
    title: "ASSET COLLATERAL",
    titleHighlight: "Program",
    description:
      "Need fast liquidity or want to monetize assets? We help design collateral partnership schemes via two pathways — Liquidation & Fresh Money — with professional support.",
    highlights: [
      { label: "10% Fee per 3-Month Cycle", icon: "wallet" },
      { label: "Up to 4× per Year", icon: "trending-up" },
      { label: "Fast Disbursement", icon: "bolt" },
    ],
    benefitBullets: [
      "Clear tripartite structure",
      "Separate legal contracts per party",
      "Without selling productive assets",
    ],
    card: {
      eyebrow: "MAXIMIZE YOUR ASSET VALUE?",
      description:
        "Learn about the 5-step process, fee structure, FAQ, and suitable client profiles on the service detail page.",
      footnote: ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "COMMON CHALLENGES",
    title: "When Liquidity Needs Meet Idle Assets",
    description:
      "Without a clear partnership structure, all three parties — Asset Owners, Investors, and Fund Users — often struggle to find a scheme that is safe, fast, and profitable.",
    items: [
      {
        title: "Asset Owners Struggle to Monetize",
        description:
          "High-value fixed assets cannot be activated as income sources without selling or undergoing complex liquidation processes.",
      },
      {
        title: "Fund Users Need Fast Disbursement",
        description:
          "Urgent capital needs go unmet because conventional bank processes are slow or credit limits are insufficient.",
      },
      {
        title: "Investors Seek Measurable Returns",
        description:
          "Capital sits idle because no transparent collateral scheme exists with mapped risk and return profiles.",
      },
      {
        title: "Multi-Party Structure Is Unclear",
        description:
          "Relationships between parties are not governed by separate legal contracts, increasing dispute and execution risk.",
      },
    ],
  },

  solusi: {
    eyebrow: "OUR SOLUTION",
    title: "Collateral Partnership Scheme — Two Main Pathways",
    description:
      "Danawangsa Capital designs and accompanies Collateral Partnership Schemes with a tripartite structure tailored to each party's needs — not direct fund disbursement.",
    items: [
      "Asset/Collateral Liquidation Scheme — structured utilization of assets or collateral through a liquidation scheme with clear timeline and returns",
      "Fresh Money Scheme — fresh money structure with asset collateral for short-term liquidity needs of Fund Users",
      "Mapping roles & obligations of Asset Owners, Investors, and Fund Users within one partnership framework",
      "Drafting separate legal contracts for each party — not one ambiguous combined agreement",
      "Due diligence, negotiation, and cycle monitoring support",
    ],
    ctaLabel: "Discuss Your Partnership Scheme",
  },

  manfaat: {
    eyebrow: "KEY BENEFITS",
    title: "Collateral Partnership Scheme Advantages",
    items: [
      {
        title: "One Time Fee 10% per Cycle",
        description:
          "Transparent return structure — 10% per 3-month cycle, enabling clear planning for Investors and Asset Owners.",
        icon: "wallet",
      },
      {
        title: "Up to 4× per Year",
        description:
          "With 3-month cycles, the scheme can be extended up to 4 times per year — maximizing capital rotation and income.",
        icon: "trending-up",
      },
      {
        title: "Fast Disbursement",
        description:
          "Standardized tripartite structure accelerates matching, contracting, and disbursement compared to conventional channels.",
        icon: "bolt",
      },
    ],
  },

  proses: {
    eyebrow: "WORK PROCESS",
    title: "Tripartite Structure & Separate Legal Contracts",
    description:
      "Each scheme involves three parties with distinct roles, risks, and legally separate contracts.",
    items: [
      {
        step: 1,
        title: "Party Assessment & Matching",
        description:
          "Identify Asset Owners, Investors, and Fund Users — evaluate asset profiles, funding needs, and return expectations.",
        deliverable: "Tripartite profile & scheme recommendation (Liquidation / Fresh Money)",
      },
      {
        step: 2,
        title: "Due Diligence & Asset Valuation",
        description:
          "Verify asset legality, collateral appraisal, and risk analysis for all three parties.",
        deliverable: "Due diligence report & collateral valuation",
      },
      {
        step: 3,
        title: "Separate Contract Drafting",
        description:
          "Prepare independent legal contracts: Asset Owner ↔ Investor, Investor ↔ Fund User, plus collateral agreements — each with clear rights, obligations, and exit clauses.",
        deliverable: "Separate contract drafts per party & term sheet",
      },
      {
        step: 4,
        title: "Execution & Disbursement",
        description:
          "Coordinate signing, fund disbursement, and collateral registration per the selected scheme.",
        deliverable: "Execution documentation & disbursement proof",
      },
      {
        step: 5,
        title: "Cycle Monitoring & Renewal",
        description:
          "Monitor 3-month cycles, evaluate performance, and recommend renewals up to 4 cycles per year.",
        deliverable: "Monitoring report & next-cycle recommendations",
      },
    ],
  },

  strukturFee: {
    eyebrow: "FEE STRUCTURE",
    title: "One Time Fee 10% per Cycle",
    description:
      "Scheme fees are calculated per 3-month cycle — transparent, measurable, and explained upfront before execution.",
    items: [
      {
        id: "cycle-fee",
        title: "One Time Fee per Cycle",
        amount: "10%",
        description:
          "Charged once per 3-month cycle on the agreed transaction or collateral value — applies to each cycle renewal.",
        highlighted: true,
      },
      {
        id: "annual-potential",
        title: "Annual Potential",
        amount: "4× / Year",
        description:
          "With 3-month cycles, the scheme can be renewed up to 4 times per year — 10% fee applies per active cycle.",
      },
      {
        id: "consultation",
        title: "Danawangsa Consultation Fee",
        amount: "Separate",
        description:
          "Strategy, legal, and execution support fees are set in the Consultation Agreement — separate from partnership scheme fees between parties.",
      },
    ],
    footnote:
      "Full fee details for the scheme and consultation are set out in the official proposal and agreements. Danawangsa Capital is a strategic consultant — not a fund disbursing party.",
  },

  cocokUntuk: {
    eyebrow: "SUITABLE FOR",
    title: "Three Parties in the Collateral Partnership Scheme",
    items: [
      "Asset Owners — owners of land, buildings, commercial property, or productive assets seeking monetization without selling",
      "Investors — individuals or institutions seeking structured returns from collateral assets (10% per 3-month cycle)",
      "Fund Users — companies or SMEs needing fast liquidity with asset collateral via Fresh Money or Liquidation Scheme",
    ],
  },

  faq: {
    eyebrow: "FAQ COLLATERAL PARTNERSHIP",
    title: "Frequently Asked Questions",
    items: [
      {
        id: "aset-1",
        question: "Does Danawangsa Capital disburse funds in this scheme?",
        answer:
          "No. We are strategic consultants who design structures, draft contracts, and accompany the process. Fund disbursement occurs directly between Investors and Fund Users per the agreed agreements.",
      },
      {
        id: "aset-2",
        question:
          "What is the difference between Asset/Collateral Liquidation Scheme and Fresh Money Scheme?",
        answer:
          "The Liquidation Scheme utilizes assets or collateral through a structured liquidation process with a clear timeline. The Fresh Money Scheme provides new liquidity to Fund Users with asset collateral from Asset Owners — suited for short-term capital needs.",
      },
      {
        id: "aset-3",
        question: "Why must legal contracts be separate per party?",
        answer:
          "Separate contracts protect the rights and obligations of each party — Asset Owner, Investor, and Fund User — and minimize dispute risk. Each contract has specific exit clauses, collateral, and resolution mechanisms.",
      },
      {
        id: "aset-4",
        question: "How are collateral and execution risks managed?",
        answer:
          "Risks are mitigated through asset due diligence, independent valuation, and collateral execution clauses in contracts. We do not guarantee investment returns — but ensure structure, documentation, and process follow best practices.",
      },
      {
        id: "aset-5",
        question: "Can the scheme be renewed beyond one cycle?",
        answer:
          "Yes. Each cycle runs 3 months and can be renewed up to 4 times per year. The 10% One Time Fee applies per active cycle, with consent from all three parties.",
      },
      {
        id: "aset-6",
        question: "Can I start with a free consultation?",
        answer:
          "Yes. The initial ±30-minute consultation is free and without commitment. We will assess your profile — as Asset Owner, Investor, or Fund User — and explain the most suitable scheme.",
      },
    ],
  },

  cta: createServiceCta(
    "Design the Right Collateral Partnership Scheme for You",
    "Tell us your role — Asset Owner, Investor, or Fund User. Our advisor team is ready to respond within 24 hours.",
  ),
};

const advisorySlug = "business-financial-advisory";
const advisoryPath = `/layanan/${advisorySlug}`;
const advisoryName = "Business & Financial Advisory";

export const businessFinancialAdvisoryService: ServicePageData = {
  slug: advisorySlug,
  path: advisoryPath,
  navLabel: advisoryName,
  consultationModalType: "general",

  meta: {
    title: advisoryName,
    description:
      "Business & Financial Advisory for business development, financial planning, and profitability improvement. Strategic consultation — not a lending institution.",
  },

  listing: {
    category: "STRATEGIC CONSULTATION",
    title: advisoryName,
    description:
      "Comprehensive support to develop business, strengthen financial structure, improve profitability, and prepare for expansion.",
  },

  hero: {
    badge: { label: "STRATEGIC ADVISORY", variant: "amber" },
    title: "Business & Financial",
    titleHighlight: "Advisory",
    description:
      "Consulting partner for holistic business & financial strategy — we analyze company conditions, design strategic recommendations, and accompany implementation, not disburse funds directly.",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: { label: "View Fee Structure", href: `${advisoryPath}#fee` },
  },

  teaser: {
    badge: { label: "STRATEGIC CONSULTATION", variant: "amber" },
    title: "BUSINESS & FINANCIAL",
    titleHighlight: "Advisory",
    description:
      "Need strategic guidance for business and finance? We provide in-depth analysis, planning, and execution support — transparent and results-oriented.",
    highlights: [
      { label: "Business Analysis", icon: "shield" },
      { label: "Financial Planning", icon: "wallet" },
      { label: "Personalized Solutions", icon: "zap" },
    ],
    benefitBullets: [
      "More focused business strategy",
      "Stronger financial structure",
      "Improved profitability",
    ],
    card: {
      eyebrow: "WANT TO STRENGTHEN YOUR BUSINESS?",
      description:
        "Learn about the 5-step process, fee structure, FAQ, and suitable client profiles on the service detail page.",
      footnote: ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "COMMON CHALLENGES",
    title: "When Business Needs Clear Strategic Direction",
    description:
      "Without proper advisory, companies struggle to make financial and business decisions with long-term impact.",
    items: [
      {
        title: "Unfocused Business Strategy",
        description:
          "Expansion, investment, or restructuring decisions made without in-depth financial analysis.",
      },
      {
        title: "Fragile Financial Structure",
        description:
          "Capital composition, debt, and cash flow not optimized — hindering growth and business resilience.",
      },
      {
        title: "Stagnant Profitability",
        description:
          "Margins decline due to operational inefficiency, high financing costs, or incorrect pricing.",
      },
      {
        title: "Insufficient Expansion Readiness",
        description:
          "Company not financially and operationally ready to enter new markets or segments.",
      },
    ],
  },

  solusi: {
    eyebrow: "OUR SOLUTION",
    title: "Strategic Advisory — Not Fund Disbursement",
    description:
      "Danawangsa Capital provides Business & Financial Advisory tailored to your company's specific conditions and goals.",
    items: [
      "In-depth analysis of business conditions, finance, and market position",
      "Medium-term business & financial strategy design",
      "Operational efficiency and funding structure recommendations",
      "Strategy implementation support and multi-party coordination",
      "Periodic evaluation and adjustment recommendations",
    ],
    ctaLabel: "Discuss Your Advisory Needs",
  },

  manfaat: {
    eyebrow: "KEY BENEFITS",
    title: "What You Get",
    items: [
      {
        title: "Informed Decisions",
        description:
          "Recommendations based on data and professional analysis — not assumptions.",
        icon: "shield",
      },
      {
        title: "Stronger Finance",
        description:
          "Capital structure and cash flow designed for long-term resilience.",
        icon: "wallet",
      },
      {
        title: "Sustainable Growth",
        description:
          "Strategy roadmap supporting expansion and profitability improvement.",
        icon: "trending-up",
      },
    ],
  },

  proses: {
    eyebrow: "WORK PROCESS",
    title: "5 Advisory Steps We Accompany",
    description: "Each stage has clear and measurable deliverables.",
    items: [
      {
        step: 1,
        title: "Discovery",
        description:
          "Initial session to understand business conditions, management goals, challenges, and strategic priorities.",
        deliverable: "Situation summary & advisory scope",
      },
      {
        step: 2,
        title: "Analysis & Diagnosis",
        description:
          "Review financial statements, operations, organizational structure, and competitive position.",
        deliverable: "Diagnosis report & key findings",
      },
      {
        step: 3,
        title: "Strategy Design",
        description:
          "Develop business & financial strategy recommendations with implementation timeline.",
        deliverable: "Strategy document & transparent fee proposal",
      },
      {
        step: 4,
        title: "Implementation Support",
        description:
          "Accompany strategy execution, stakeholder coordination, and progress monitoring.",
        deliverable: "Action plan & implementation documentation",
      },
      {
        step: 5,
        title: "Evaluation & Final Report",
        description:
          "Evaluate advisory outcomes, deliver final report, and recommend next steps.",
        deliverable: "Final report & follow-up recommendations",
      },
    ],
  },

  strukturFee: generalStrukturFee,

  cocokUntuk: {
    eyebrow: "SUITABLE FOR",
    title: "Who Needs This Service?",
    items: [
      "Business owners & directors seeking strategic second opinion",
      "SMEs to mid-size companies in transformation phase",
      "Management preparing for expansion or investment",
      "Family businesses seeking financial professionalization",
      "Post-merger or organizational restructuring entities",
      "Businesses needing profitability improvement",
    ],
  },

  faq: createStandardFaq("ADVISORY", "Business & Financial Advisory"),

  cta: createServiceCta(
    "Strengthen Your Business with the Right Advisory",
    "Tell us about your business and financial challenges. Our advisor team is ready to respond within 24 hours.",
  ),
};