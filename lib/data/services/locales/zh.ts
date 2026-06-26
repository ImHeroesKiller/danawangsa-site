import type { ServicePageData } from "@/types/service";

const ADVISORY_POSITIONING =
  "战略商业与财务顾问——非银行，非放贷机构。";

const ADVISORY_FOOTNOTE =
  "非直接资金发放 • 我们协助制定策略并全程陪同";

const FEE_FOOTNOTE =
  "完整条款将载于正式咨询服务协议。咨询费用与银行、公证、评估及法律费用分开计算。";

const generalStrukturFee: ServicePageData["strukturFee"] = {
  eyebrow: "费用结构",
  title: "透明且按交付成果计费",
  description:
    "咨询费用在提案与咨询服务协议中事先说明——与第三方费用分开。",
  items: [
    {
      id: "base",
      title: "预付金 / 基础费用",
      amount: "35–50%",
      description:
        "前期定金（不可退还），用于启动深度分析、尽职调查及策略制定。",
    },
    {
      id: "milestone",
      title: "里程碑付款",
      amount: "分期",
      description:
        "按阶段付款：分析完成、客户批准策略、启动谈判或执行。",
    },
    {
      id: "final",
      title: "尾款 / 结算费用",
      amount: "余额",
      description:
        "交付成果时支付尾款：最终报告、策略文件或达成约定里程碑。",
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
    badge: { label: "免费初次咨询 • 30分钟" },
    title,
    description,
    secondaryCta: { label: "查看其他服务", href: "/layanan" },
    footnote: ADVISORY_FOOTNOTE,
  };
}

function createStandardFaq(
  prefix: string,
  serviceName: string,
): ServicePageData["faq"] {
  return {
    eyebrow: `${prefix} 常见问题`,
    title: "常见问题",
    items: [
      {
        id: `${prefix}-1`,
        question: `Danawangsa Capital 是否为${serviceName}直接发放资金？`,
        answer:
          "否。我们是战略顾问——非放贷机构。我们制定策略并陪同与银行或合作伙伴的谈判流程。资金发放完全通过正规金融机构进行。",
      },
      {
        id: `${prefix}-2`,
        question: "咨询流程通常需要多长时间？",
        answer:
          "初步分析通常需要3–5个工作日。完整流程视情况而定：标准案例2–6周，涉及多方的复杂结构可达1–3个月。",
      },
      {
        id: `${prefix}-3`,
        question: "你们是否保证银行批准信贷？",
        answer:
          "无人能保证银行批准信贷——决定权完全在银行。然而，我们通过正确策略、完整文件及专业谈判陪同，最大化您的获批机会。",
      },
      {
        id: `${prefix}-4`,
        question: "我可以先进行免费咨询吗？",
        answer:
          "可以。初次约30分钟咨询免费且无承诺。我们将在签署咨询服务协议前评估您的需求并说明后续步骤。",
      },
    ],
  };
}

const bridgingStrukturFee: ServicePageData["strukturFee"] = {
  eyebrow: "费用结构",
  title: "透明且按成果计费",
  description:
    "过桥融资费用在提案与咨询服务协议中事先说明——与第三方费用分开。",
  items: [
    {
      id: "base",
      title: "预付金 / 基础费用",
      amount: "35–50%",
      description:
        "前期定金（不可退还），用于启动深度分析、尽职调查及过桥策略制定。",
    },
    {
      id: "milestone",
      title: "里程碑付款",
      amount: "分期",
      description:
        "按阶段付款：分析完成、客户批准策略、启动银行谈判。",
    },
    {
      id: "success",
      title: "成功费用",
      amount: "3–6%",
      description:
        "专用于过桥与重组——仅在资金成功发放或银行批准重组时支付。",
      highlighted: true,
    },
  ],
  footnote: FEE_FOOTNOTE,
};

export const bridgingRestrukturisasiService: ServicePageData = {
  slug: "bridging-restrukturisasi",
  path: "/layanan/bridging-restrukturisasi",
  navLabel: "过桥融资与财务重组",
  consultationModalType: "bridging",

  meta: {
    title: "过桥融资与财务重组",
    description:
      "为企业提供的过桥融资与财务重组战略咨询。专业陪同——非放贷机构。紧急案例1–2天完成分析。",
  },

  listing: {
    category: "过桥与重组",
    title: "过桥融资与财务重组",
    description:
      "过桥融资与财务重组战略咨询，应对银行贷款到期、信贷重组及额度恢复。",
    badge: "热门",
  },

  hero: {
    badge: { label: "战略咨询服务", variant: "amber" },
    title: "过桥融资与",
    titleHighlight: "财务重组",
    description:
      "应对银行贷款到期的咨询伙伴——我们制定过桥融资与财务重组策略并陪同谈判，非直接发放资金。",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: {
      label: "查看费用结构",
      href: "/layanan/bridging-restrukturisasi#fee",
    },
  },

  teaser: {
    badge: { label: "战略解决方案", variant: "amber" },
    title: "过桥融资与",
    titleHighlight: "财务重组",
    description:
      "银行贷款即将到期？我们协助制定过桥融资策略并陪同财务重组——非直接资金发放。",
    highlights: [
      { label: "快速分析1-2天", icon: "bolt" },
      { label: "短期策略", icon: "clock" },
      { label: "专业陪同", icon: "shield" },
    ],
    benefitBullets: [
      "现金流保持可控",
      "运营不受影响",
      "银行额度可恢复",
    ],
    card: {
      eyebrow: "需要立即陪同？",
      description:
        "了解5步流程、费用结构、常见问题及适合客户标准——详见服务详情页。",
      footnote: ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "常见挑战",
    title: "当银行贷款到期压迫业务时",
    description:
      "许多企业主面临这一关键局面——缺乏正确策略，运营与信用声誉风险将急剧上升。",
    items: [
      {
        title: "银行贷款即将到期",
        description:
          "信贷额度临近还款日，而运营资金尚未到位或项目仍在进行中。",
      },
      {
        title: "信贷额度被锁定",
        description:
          "因还款记录、文件不全或需重组的财务状况，难以再次获得银行授信。",
      },
      {
        title: "现金流压力",
        description:
          "供应商付款、薪资或项目承诺与紧张的银行还款计划相互冲突。",
      },
      {
        title: "谈判时间有限",
        description:
          "管理层缺乏足够精力或人脉，无法有效制定策略并与银行谈判。",
      },
    ],
  },

  solusi: {
    eyebrow: "我们的解决方案",
    title: "过桥融资顾问——非资金发放",
    description:
      "Danawangsa Capital 协助您制定并执行过桥融资与财务重组策略，每个阶段均有专业陪同。",
    items: [
      "深度分析财务状况、到期日及各银行信贷敞口",
      "根据企业风险状况制定切实可行的过桥策略",
      "编制有力文件与商业叙述以支持银行谈判",
      "在重组或展期过程中提供积极陪同",
      "监控现金流与还款里程碑，直至信贷状况恢复健康",
    ],
    ctaLabel: "讨论您的情况",
  },

  manfaat: {
    eyebrow: "主要优势",
    title: "您将获得",
    items: [
      {
        title: "现金流安全",
        description:
          "策略设计旨在过桥过程中维持运营流动性。",
        icon: "wallet",
      },
      {
        title: "运营持续进行",
        description:
          "最大限度减少对供应商、项目及日常业务承诺的干扰。",
        icon: "zap",
      },
      {
        title: "银行额度恢复",
        description:
          "长期建议以恢复信用声誉并重新获得银行授信。",
        icon: "trending-up",
      },
    ],
  },

  proses: {
    eyebrow: "工作流程",
    title: "我们陪同的5步策略",
    description:
      "比首页摘要更详细——每个阶段均有明确交付成果。",
    items: [
      {
        step: 1,
        title: "发现与紧急评估",
        description:
          "初步咨询以梳理到期日、贷款金额、相关银行及紧急程度。我们判断案例是否需要1–2天响应或采用结构化中期方案。",
        deliverable: "情况摘要与初步步骤建议",
      },
      {
        step: 2,
        title: "财务状况分析",
        description:
          "审阅财务报表、贷款结构、抵押品、项目现金流及信用记录。识别风险缺口与银行谈判机会。",
        deliverable: "分析报告与风险图谱",
      },
      {
        step: 3,
        title: "过桥策略设计",
        description:
          "制定过桥及/或重组方案——包括时间表、临时还款结构及第三方协调选项。",
        deliverable: "策略文件与透明费用提案",
      },
      {
        step: 4,
        title: "银行谈判陪同",
        description:
          "陪同与银行沟通：文件准备、会议筹备、条款谈判及跟进，直至达成原则协议。",
        deliverable: "谈判记录与行动计划",
      },
      {
        step: 5,
        title: "监控与额度恢复",
        description:
          "评估重组结果，监控协议后现金流，并建议恢复长期信用声誉与额度的步骤。",
        deliverable: "最终报告与后续建议",
      },
    ],
  },

  strukturFee: bridgingStrukturFee,

  cocokUntuk: {
    eyebrow: "适合对象",
    title: "谁需要此服务？",
    items: [
      "银行贷款即将到期者",
      "需要时间进行重组者",
      "希望维护信用声誉者",
      "项目供应商与承包商",
      "国企/民企供应商",
      "拥有活跃信贷额度的企业",
    ],
  },

  faq: {
    eyebrow: "过桥融资常见问题",
    title: "常见问题",
    items: [
      {
        id: "b1",
        question: "Danawangsa Capital 是否直接发放过桥资金？",
        answer:
          "否。我们是战略顾问——非放贷机构。我们制定过桥策略并陪同与银行或第三方的谈判。资金发放完全通过正规金融机构进行。",
      },
      {
        id: "b2",
        question: "过桥咨询流程通常需要多长时间？",
        answer:
          "紧急案例的初步分析可在1–2个工作日内完成。完整流程——从策略到谈判——通常2–6周，视复杂程度、涉及银行数量及客户文件准备情况而定。",
      },
      {
        id: "b3",
        question: "过桥案例的成功费用是多少？",
        answer:
          "成功费用为成功发放/重组贷款或交易金额的3–6%。仅在达成约定成果时支付——在工作开始前于提案中透明说明。",
      },
      {
        id: "b4",
        question: "你们是否保证银行批准重组？",
        answer:
          "无人能保证银行批准。然而，我们凭借正确策略、完整文件及基于数十个类似案例经验的专业谈判陪同，最大化您的获批机会。",
      },
      {
        id: "b5",
        question: "客户需准备哪些文件？",
        answer:
          "通常包括：近2–3年财务报表、当前贷款结构、到期时间表、抵押文件、项目现金流（如适用）及公司法律文件。完整清单在发现会议后定制。",
      },
      {
        id: "b6",
        question: "我可以先进行免费咨询吗？",
        answer:
          "可以。初次约30分钟咨询免费且无承诺。我们将在签署咨询服务协议前评估案例紧急程度并说明后续步骤。",
      },
    ],
  },

  cta: {
    badge: { label: "免费初次咨询 • 30分钟" },
    title: "以正确策略应对到期压力",
    description:
      "告诉我们您的银行贷款情况。顾问团队将在24小时内回复，提供初步分析与建议后续步骤。",
    secondaryCta: { label: "查看其他服务", href: "/layanan" },
    footnote: ADVISORY_FOOTNOTE,
  },
};

const modalUsahaSlug = "modal-usaha-jaminan-aset";
const modalUsahaPath = `/layanan/${modalUsahaSlug}`;
const modalUsahaName = "资产抵押经营性资金融资";

export const modalUsahaJaminanAsetService: ServicePageData = {
  slug: modalUsahaSlug,
  path: modalUsahaPath,
  navLabel: modalUsahaName,
  consultationModalType: "general",

  meta: {
    title: modalUsahaName,
    description:
      "资产抵押经营性资金融资战略咨询——营运资金规划、业务扩张及最优抵押结构。专业陪同，非放贷机构。",
  },

  listing: {
    category: "战略融资咨询",
    title: modalUsahaName,
    description:
      "设计资产抵押经营性资金融资策略——从需求分析到银行谈判陪同。",
  },

  hero: {
    badge: { label: "战略咨询服务", variant: "amber" },
    title: "经营性资金融资",
    titleHighlight: "资产抵押",
    description:
      "经营性资金融资策略咨询伙伴——我们分析财务状况、优化资产抵押并陪同银行谈判，非直接发放资金。",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: { label: "查看费用结构", href: `${modalUsahaPath}#fee` },
  },

  teaser: {
    badge: { label: "融资咨询", variant: "amber" },
    title: "经营性资金与",
    titleHighlight: "资产抵押",
    description:
      "需要营运资金或业务扩张？我们协助设计最优资产抵押融资结构——深度分析与谈判陪同。",
    highlights: [
      { label: "合适抵押结构", icon: "wallet" },
      { label: "深度分析", icon: "shield" },
      { label: "谈判陪同", icon: "zap" },
    ],
    benefitBullets: [
      "更高效的营运资金",
      "最优结构化资产抵押",
      "更强的银行授信渠道",
    ],
    card: {
      eyebrow: "需要合适的融资结构？",
      description:
        "了解5步流程、费用结构、常见问题及适合客户画像——详见服务详情页。",
      footnote: ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "常见挑战",
    title: "当经营性资金需求无法满足时",
    description:
      "缺乏正确融资策略与抵押结构，业务增长受阻，资产未能充分利用。",
    items: [
      {
        title: "营运资金不足",
        description:
          "运营或扩张需求增加，而信贷渠道有限或贷款结构效率低下。",
      },
      {
        title: "抵押资产未优化",
        description:
          "企业固定资产尚未构成为支持融资额度的有力抵押。",
      },
      {
        title: "融资结构不匹配",
        description:
          "期限、利率及信贷组合与业务周期不符——挤压现金流与利润。",
      },
      {
        title: "文件与叙述薄弱",
        description:
          "银行提案缺乏说服力，因财务分析与商业策略未经专业编制。",
      },
    ],
  },

  solusi: {
    eyebrow: "我们的解决方案",
    title: "战略咨询——非资金发放",
    description:
      "Danawangsa Capital 协助制定符合您业务画像的资产抵押经营性资金融资策略。",
    items: [
      "分析营运资金需求、扩张计划及还款能力",
      "审阅并推荐最优资产抵押结构",
      "设计融资方案与执行时间表",
      "编制文件与商业叙述以支持银行谈判",
      "谈判陪同及协议后监控",
    ],
    ctaLabel: "讨论您的资金需求",
  },

  manfaat: {
    eyebrow: "主要优势",
    title: "您将获得",
    items: [
      {
        title: "高效资金结构",
        description:
          "与业务周期及中期营运资金需求相匹配的融资方案。",
        icon: "wallet",
      },
      {
        title: "最优资产抵押",
        description:
          "在不损害运营的前提下，将固定资产作为有力抵押的建议。",
        icon: "shield",
      },
      {
        title: "可控扩张",
        description:
          "支持业务增长且风险可控的融资路线图。",
        icon: "trending-up",
      },
    ],
  },

  proses: {
    eyebrow: "工作流程",
    title: "我们陪同的5步策略",
    description: "每个阶段均有明确可衡量的交付成果。",
    items: [
      {
        step: 1,
        title: "发现与评估",
        description:
          "梳理经营性资金需求、扩张目标、可用资产及融资紧急程度。",
        deliverable: "需求摘要与初步步骤建议",
      },
      {
        step: 2,
        title: "财务与资产分析",
        description:
          "审阅财务报表、资产组合、当前贷款结构及还款能力。",
        deliverable: "分析报告与资产-财务图谱",
      },
      {
        step: 3,
        title: "融资策略设计",
        description:
          "制定融资方案、抵押结构、期限及银行协调选项。",
        deliverable: "策略文件与透明费用提案",
      },
      {
        step: 4,
        title: "谈判陪同",
        description:
          "陪同与银行沟通：文件、会议、条款谈判及跟进。",
        deliverable: "谈判记录与行动计划",
      },
      {
        step: 5,
        title: "监控与评估",
        description:
          "评估融资成果并建议长期结构调整。",
        deliverable: "评估报告与后续建议",
      },
    ],
  },

  strukturFee: generalStrukturFee,

  cocokUntuk: {
    eyebrow: "适合对象",
    title: "谁需要此服务？",
    items: [
      "需要营运资金的中小企业及中型公司",
      "处于扩张或多元化阶段的业务",
      "希望优化抵押的固定资产所有者",
      "制造、分销及贸易公司",
      "寻求信贷额度重组的管理层",
      "有中期融资需求的实体",
    ],
  },

  faq: createStandardFaq("经营性资金", "资产抵押经营性资金融资"),

  cta: createServiceCta(
    "制定合适的经营性资金融资策略",
    "告诉我们您的营运资金需求与抵押资产。顾问团队将在24小时内回复并提供初步分析。",
  ),
};

const skbdnSlug = "modal-kerja-skbdn";
const skbdnPath = `/layanan/${skbdnSlug}`;
const skbdnName = "基于SKBDN的营运资金融资";

export const modalKerjaSkbdnService: ServicePageData = {
  slug: skbdnSlug,
  path: skbdnPath,
  navLabel: skbdnName,
  consultationModalType: "general",

  meta: {
    title: skbdnName,
    description:
      "为供应商、承包商及贸易企业提供的SKBDN营运资金融资战略咨询。分析与谈判陪同——非放贷机构。",
  },

  listing: {
    category: "营运资金结构",
    title: skbdnName,
    description:
      "设计并优化基于贸易单据（SKBDN）的营运资金结构——从项目分析到谈判陪同。",
  },

  hero: {
    badge: { label: "战略咨询服务", variant: "amber" },
    title: "营运资金融资",
    titleHighlight: "基于SKBDN",
    description:
      "SKBDN营运资金结构咨询伙伴——我们分析项目需求、编制文件并陪同银行谈判，非直接发放资金。",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: { label: "查看费用结构", href: `${skbdnPath}#fee` },
  },

  teaser: {
    badge: { label: "营运资金结构", variant: "amber" },
    title: "营运资金",
    titleHighlight: "基于SKBDN",
    description:
      "供应商、承包商或贸易企业？我们协助设计高效的SKBDN营运资金结构——专业谈判陪同。",
    highlights: [
      { label: "项目分析", icon: "shield" },
      { label: "合适单据结构", icon: "wallet" },
      { label: "现金流监控", icon: "zap" },
    ],
    benefitBullets: [
      "项目现金流可控",
      "高效SKBDN结构",
      "更优利润空间",
    ],
    card: {
      eyebrow: "管理您的项目营运资金？",
      description:
        "了解5步流程、费用结构、常见问题及适合客户画像——详见服务详情页。",
      footnote: ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "常见挑战",
    title: "当项目营运资金失控时",
    description:
      "不当的SKBDN结构会阻碍项目现金流并压低业务盈利能力。",
    items: [
      {
        title: "项目需求未量化",
        description:
          "项目营运资金估算不准确——导致合同中期流动性不足或过剩。",
      },
      {
        title: "SKBDN结构效率低",
        description:
          "贸易单据与融资方案与项目周期及银行要求不符。",
      },
      {
        title: "项目现金流受压",
        description:
          "放款与还款未与项目里程碑协调——侵蚀利润。",
      },
      {
        title: "银行谈判不充分",
        description:
          "管理层缺乏足够精力或策略，无法有效谈判项目融资条款。",
      },
    ],
  },

  solusi: {
    eyebrow: "我们的解决方案",
    title: "战略咨询——非资金发放",
    description:
      "Danawangsa Capital 协助为您的项目业务设计高效的SKBDN营运资金结构。",
    items: [
      "按项目及现金流周期分析营运资金需求",
      "推荐SKBDN单据结构与融资方案",
      "编制商业叙述与文件以支持银行谈判",
      "陪同谈判条款、期限及放款里程碑",
      "项目现金流监控与定期评估",
    ],
    ctaLabel: "讨论您的SKBDN结构",
  },

  manfaat: {
    eyebrow: "主要优势",
    title: "您将获得",
    items: [
      {
        title: "可控现金流",
        description:
          "与项目里程碑及运营需求相匹配的SKBDN结构。",
        icon: "wallet",
      },
      {
        title: "结构化文件",
        description:
          "为银行谈判提供有力贸易单据结构建议。",
        icon: "shield",
      },
      {
        title: "项目盈利能力",
        description:
          "最大限度降低融资成本并提高项目利润。",
        icon: "trending-up",
      },
    ],
  },

  proses: {
    eyebrow: "工作流程",
    title: "我们陪同的5步策略",
    description: "每个阶段均有明确可衡量的交付成果。",
    items: [
      {
        step: 1,
        title: "发现与项目梳理",
        description:
          "梳理项目合同、营运资金需求、放款计划及相关银行。",
        deliverable: "项目摘要与营运资金需求",
      },
      {
        step: 2,
        title: "项目现金流分析",
        description:
          "审阅合同、付款计划、信贷敞口及项目风险状况。",
        deliverable: "现金流报告与项目风险图谱",
      },
      {
        step: 3,
        title: "SKBDN结构设计",
        description:
          "制定融资方案、单据结构、期限及执行时间表。",
        deliverable: "策略文件与透明费用提案",
      },
      {
        step: 4,
        title: "银行谈判陪同",
        description:
          "陪同与银行沟通直至达成原则协议。",
        deliverable: "谈判记录与行动计划",
      },
      {
        step: 5,
        title: "监控与评估",
        description:
          "监控协议后现金流并建议结构调整。",
        deliverable: "评估报告与后续建议",
      },
    ],
  },

  strukturFee: generalStrukturFee,

  cocokUntuk: {
    eyebrow: "适合对象",
    title: "谁需要此服务？",
    items: [
      "国企/民企供应商与承包商",
      "建筑与基础设施项目承包商",
      "贸易与分销公司",
      "有重复项目合同的业务",
      "寻求营运资金效率的管理层",
      "拥有活跃SKBDN额度的实体",
    ],
  },

  faq: createStandardFaq("SKBDN", "基于SKBDN的营运资金融资"),

  cta: createServiceCta(
    "优化您的SKBDN营运资金结构",
    "告诉我们您的项目概况与营运资金需求。顾问团队将在24小时内回复。",
  ),
};

const assetSlug = "asset-collateral-program";
const assetPath = `/layanan/${assetSlug}`;
const assetName = "资产抵押计划";

export const assetCollateralProgramService: ServicePageData = {
  slug: assetSlug,
  path: assetPath,
  navLabel: assetName,
  consultationModalType: "general",

  meta: {
    title: assetName,
    description:
      "抵押合伙方案咨询——通过三方结构与独立法律合同连接资产所有者、投资者与资金使用者。非放贷机构。",
  },

  listing: {
    category: "抵押合伙",
    title: assetName,
    description:
      "抵押合伙方案，两大路径——资产/抵押品清算方案与新鲜资金方案——实现快速放款与结构化回报。",
  },

  hero: {
    badge: { label: "资产咨询计划", variant: "amber" },
    title: "资产抵押",
    titleHighlight: "计划",
    description:
      "抵押合伙方案咨询伙伴——我们构建资产所有者、投资者与资金使用者之间的三方关系及独立法律合同，非直接发放资金。",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: { label: "查看费用结构", href: `${assetPath}#fee` },
  },

  teaser: {
    badge: { label: "资产优化", variant: "amber" },
    title: "资产抵押",
    titleHighlight: "计划",
    description:
      "需要快速流动性或希望盘活资产？我们协助设计抵押合伙方案，两大路径——清算与新鲜资金——专业陪同。",
    highlights: [
      { label: "每周期3个月收费10%", icon: "wallet" },
      { label: "每年最多4次", icon: "trending-up" },
      { label: "快速放款", icon: "bolt" },
    ],
    benefitBullets: [
      "清晰的三方结构",
      "各方独立法律合同",
      "无需出售生产性资产",
    ],
    card: {
      eyebrow: "最大化您的资产价值？",
      description:
        "了解5步流程、费用结构、常见问题及适合客户画像——详见服务详情页。",
      footnote: ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "常见挑战",
    title: "当流动性需求遇上闲置资产",
    description:
      "缺乏清晰的合伙结构时，三方——资产所有者、投资者与资金使用者——往往难以找到安全、快速且有利可图的方案。",
    items: [
      {
        title: "资产所有者难以变现",
        description:
          "高价值固定资产无法在不出售或经历复杂清算的情况下转化为收入来源。",
      },
      {
        title: "资金使用者需要快速放款",
        description:
          "紧急资金需求无法满足，因传统银行流程缓慢或信贷额度有限。",
      },
      {
        title: "投资者寻求可量化回报",
        description:
          "资金闲置，因缺乏透明、风险与回报可映射的抵押方案。",
      },
      {
        title: "多方结构不清晰",
        description:
          "各方关系未以独立法律合同规范，争议与执行风险增加。",
      },
    ],
  },

  solusi: {
    eyebrow: "我们的解决方案",
    title: "抵押合伙方案——两大路径",
    description:
      "Danawangsa Capital 设计并陪同抵押合伙方案，按各方需求构建三方结构——非直接资金发放。",
    items: [
      "资产/抵押品清算方案——通过结构化清算流程利用资产或抵押品，时间表与回报清晰",
      "新鲜资金方案——以资产抵押为资金使用者提供短期流动性",
      "在合伙框架内梳理资产所有者、投资者与资金使用者的角色与义务",
      "为各方起草独立法律合同——非模糊的统一合同",
      "尽职调查、谈判及周期监控陪同",
    ],
    ctaLabel: "讨论您的合伙方案",
  },

  manfaat: {
    eyebrow: "主要优势",
    title: "抵押合伙方案优势",
    items: [
      {
        title: "每周期一次性收费10%",
        description:
          "透明回报结构——每3个月周期10%，便于投资者与资产所有者规划。",
        icon: "wallet",
      },
      {
        title: "每年最多4次",
        description:
          "3个月为一周期，每年最多可续4次——最大化资金轮转与收入。",
        icon: "trending-up",
      },
      {
        title: "快速放款",
        description:
          "标准化三方结构加速匹配、签约与放款，优于传统渠道。",
        icon: "bolt",
      },
    ],
  },

  proses: {
    eyebrow: "工作流程",
    title: "三方结构与独立法律合同",
    description:
      "每个方案涉及三方，各方角色、风险及法律合同相互独立。",
    items: [
      {
        step: 1,
        title: "各方评估与匹配",
        description:
          "识别资产所有者、投资者与资金使用者——评估资产概况、资金需求与回报预期。",
        deliverable: "三方概况与方案建议（清算/新鲜资金）",
      },
      {
        step: 2,
        title: "尽职调查与资产估值",
        description:
          "核实资产合法性、抵押品评估及三方风险分析。",
        deliverable: "尽职调查报告与抵押估值",
      },
      {
        step: 3,
        title: "独立合同起草",
        description:
          "起草独立法律合同：资产所有者↔投资者、投资者↔资金使用者及抵押协议——各方权利、义务与退出条款明确。",
        deliverable: "各方合同草案与条款清单",
      },
      {
        step: 4,
        title: "执行与放款",
        description:
          "协调签署、资金放款及按所选方案办理抵押登记。",
        deliverable: "执行文件与放款凭证",
      },
      {
        step: 5,
        title: "周期监控与续期",
        description:
          "监控3个月周期，评估绩效，建议每年最多4次续期。",
        deliverable: "监控报告与下周期建议",
      },
    ],
  },

  strukturFee: {
    eyebrow: "费用结构",
    title: "每周期一次性收费10%",
    description:
      "方案费用按3个月周期计算——透明、可衡量，执行前事先说明。",
    items: [
      {
        id: "cycle-fee",
        title: "每周期一次性费用",
        amount: "10%",
        description:
          "每3个月周期按约定交易或抵押价值收取一次——每次续期均适用。",
        highlighted: true,
      },
      {
        id: "annual-potential",
        title: "年度潜力",
        amount: "每年4次",
        description:
          "3个月为一周期，每年最多可续4次——每个活跃周期收取10%费用。",
      },
      {
        id: "consultation",
        title: "Danawangsa咨询费",
        amount: "另行约定",
        description:
          "战略、法律及执行陪同费用在咨询服务协议中约定——与各方之间的合伙方案费用分开。",
      },
    ],
    footnote:
      "方案与咨询费用的完整条款载于正式提案与协议。Danawangsa Capital为战略顾问——非资金发放方。",
  },

  cocokUntuk: {
    eyebrow: "适合对象",
    title: "抵押合伙方案三方",
    items: [
      "资产所有者——拥有土地、建筑、商业地产或生产性资产，希望在不出售的情况下变现",
      "投资者——寻求抵押资产结构化回报的个人或机构（每3个月周期10%）",
      "资金使用者——通过新鲜资金或清算方案、以资产抵押获得快速流动性的企业或中小企业",
    ],
  },

  faq: {
    eyebrow: "抵押合伙常见问题",
    title: "常见问题",
    items: [
      {
        id: "aset-1",
        question: "Danawangsa Capital是否在本方案中发放资金？",
        answer:
          "否。我们是战略顾问，负责设计方案、起草合同并陪同流程。资金由投资者与资金使用者按约定协议直接往来。",
      },
      {
        id: "aset-2",
        question: "资产/抵押品清算方案与新鲜资金方案有何区别？",
        answer:
          "清算方案通过结构化清算流程利用资产或抵押品，时间表明确。新鲜资金方案以资产所有者的资产抵押为资金使用者提供新流动性——适合短期资金需求。",
      },
      {
        id: "aset-3",
        question: "为何法律合同必须各方独立？",
        answer:
          "独立合同保护各方——资产所有者、投资者与资金使用者——的权利与义务，降低争议风险。每份合同均有具体的退出条款、抵押与争议解决机制。",
      },
      {
        id: "aset-4",
        question: "抵押与执行风险如何管理？",
        answer:
          "通过资产尽职调查、独立估值及合同中的抵押执行条款降低风险。我们不保证投资回报——但确保结构、文件与流程符合最佳实践。",
      },
      {
        id: "aset-5",
        question: "方案可否续期超过一个周期？",
        answer:
          "可以。每周期3个月，每年最多可续4次。每个活跃周期收取10%一次性费用，须三方同意。",
      },
      {
        id: "aset-6",
        question: "可以先免费咨询吗？",
        answer:
          "可以。初次约30分钟咨询免费且无承诺。我们将评估您作为资产所有者、投资者或资金使用者的角色，并说明最合适的方案。",
      },
    ],
  },

  cta: createServiceCta(
    "为您设计合适的抵押合伙方案",
    "告诉我们您的角色——资产所有者、投资者或资金使用者。顾问团队将在24小时内回复。",
  ),
};

const advisorySlug = "business-financial-advisory";
const advisoryPath = `/layanan/${advisorySlug}`;
const advisoryName = "商业与财务顾问";

export const businessFinancialAdvisoryService: ServicePageData = {
  slug: advisorySlug,
  path: advisoryPath,
  navLabel: advisoryName,
  consultationModalType: "general",

  meta: {
    title: advisoryName,
    description:
      "商业与财务顾问服务——业务发展、财务规划及盈利能力提升。战略咨询，非放贷机构。",
  },

  listing: {
    category: "战略咨询",
    title: advisoryName,
    description:
      "全面支持业务发展、强化财务结构、提升盈利能力并为扩张做好准备。",
  },

  hero: {
    badge: { label: "战略顾问", variant: "amber" },
    title: "商业与财务",
    titleHighlight: "顾问",
    description:
      "全方位商业与财务战略咨询伙伴——我们分析企业状况、制定战略建议并陪同实施，非直接发放资金。",
    positioning: ADVISORY_POSITIONING,
    secondaryCta: { label: "查看费用结构", href: `${advisoryPath}#fee` },
  },

  teaser: {
    badge: { label: "战略咨询", variant: "amber" },
    title: "商业与财务",
    titleHighlight: "顾问",
    description:
      "需要商业与财务战略指导？我们提供深度分析、规划及执行陪同——透明且以成果为导向。",
    highlights: [
      { label: "商业分析", icon: "shield" },
      { label: "财务规划", icon: "wallet" },
      { label: "个性化方案", icon: "zap" },
    ],
    benefitBullets: [
      "更聚焦的商业战略",
      "更稳健的财务结构",
      "盈利能力提升",
    ],
    card: {
      eyebrow: "希望强化您的业务？",
      description:
        "了解5步流程、费用结构、常见问题及适合客户画像——详见服务详情页。",
      footnote: ADVISORY_FOOTNOTE,
    },
  },

  masalah: {
    eyebrow: "常见挑战",
    title: "当业务需要明确战略方向时",
    description:
      "缺乏适当顾问，企业难以做出具有长期影响的财务与商业决策。",
    items: [
      {
        title: "商业战略缺乏焦点",
        description:
          "扩张、投资或重组决策未经深度财务分析即作出。",
      },
      {
        title: "财务结构脆弱",
        description:
          "资本构成、债务与现金流未优化——阻碍增长与业务韧性。",
      },
      {
        title: "盈利能力停滞",
        description:
          "因运营低效、高融资成本或定价不当导致利润率下降。",
      },
      {
        title: "扩张准备不足",
        description:
          "企业在财务与运营上尚未准备好进入新市场或细分。",
      },
    ],
  },

  solusi: {
    eyebrow: "我们的解决方案",
    title: "战略顾问——非资金发放",
    description:
      "Danawangsa Capital 提供符合您企业具体情况与目标的商业与财务顾问服务。",
    items: [
      "深度分析业务状况、财务及市场地位",
      "制定中期商业与财务战略",
      "运营效率与融资结构建议",
      "战略实施陪同及多方协调",
      "定期评估与调整建议",
    ],
    ctaLabel: "讨论您的顾问需求",
  },

  manfaat: {
    eyebrow: "主要优势",
    title: "您将获得",
    items: [
      {
        title: "有据决策",
        description:
          "基于数据与专业分析的建议——而非假设。",
        icon: "shield",
      },
      {
        title: "更稳健财务",
        description:
          "为长期韧性而设计的资本结构与现金流。",
        icon: "wallet",
      },
      {
        title: "可持续增长",
        description:
          "支持扩张与盈利能力提升的战略路线图。",
        icon: "trending-up",
      },
    ],
  },

  proses: {
    eyebrow: "工作流程",
    title: "我们陪同的5步顾问流程",
    description: "每个阶段均有明确可衡量的交付成果。",
    items: [
      {
        step: 1,
        title: "发现",
        description:
          "初步会议了解业务状况、管理层目标、挑战及战略优先级。",
        deliverable: "情况摘要与顾问范围",
      },
      {
        step: 2,
        title: "分析与诊断",
        description:
          "审阅财务报表、运营、组织结构及竞争地位。",
        deliverable: "诊断报告与关键发现",
      },
      {
        step: 3,
        title: "战略设计",
        description:
          "制定商业与财务战略建议及实施时间表。",
        deliverable: "战略文件与透明费用提案",
      },
      {
        step: 4,
        title: "实施陪同",
        description:
          "陪同战略执行、利益相关方协调及进展监控。",
        deliverable: "行动计划与实施记录",
      },
      {
        step: 5,
        title: "评估与最终报告",
        description:
          "评估顾问成果、交付最终报告并建议后续步骤。",
        deliverable: "最终报告与后续建议",
      },
    ],
  },

  strukturFee: generalStrukturFee,

  cocokUntuk: {
    eyebrow: "适合对象",
    title: "谁需要此服务？",
    items: [
      "需要战略第二意见的企业主与董事",
      "处于转型阶段的中小企业至中型公司",
      "为扩张或投资做准备的管理层",
      "希望财务专业化的家族企业",
      "并购后或组织重组的实体",
      "需要提升盈利能力的企业",
    ],
  },

  faq: createStandardFaq("顾问", "商业与财务顾问"),

  cta: createServiceCta(
    "以合适顾问强化您的业务",
    "告诉我们您的商业与财务挑战。顾问团队将在24小时内回复。",
  ),
};