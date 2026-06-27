import type { Locale } from "@/i18n/routing";
import type { ConsultationTopicKey } from "@/lib/data/content";
import type { ConversationMessage } from "./memory/conversation-memory";

const TOPIC_RULES: {
  topic: ConsultationTopicKey;
  keywords: string[];
}[] = [
  {
    topic: "bridging",
    keywords: [
      "bridging",
      "restrukturisasi",
      "restructuring",
      "jatuh tempo",
      "maturity",
      "到期",
      "重组",
      "过桥",
    ],
  },
  {
    topic: "assetCollateral",
    keywords: [
      "asset collateral",
      "collateral program",
      "collateral partnership",
      "jaminan aset",
      "kemitraan jaminan",
      "抵押",
      "资产抵押",
    ],
  },
  {
    topic: "modalKerja",
    keywords: ["skbdn", "modal kerja", "working capital", "营运资金", "贸易单据"],
  },
  {
    topic: "modalUsaha",
    keywords: [
      "modal usaha",
      "business capital",
      "jaminan aset",
      "经营性资金",
      "营运资金融资",
    ],
  },
  {
    topic: "advisory",
    keywords: ["advisory", "konsultasi strategis", "strategic", "顾问", "战略"],
  },
];

const SUMMARY_HEADERS: Record<Locale, string> = {
  id: "Ringkasan percakapan dengan IDA:",
  en: "Summary of conversation with IDA:",
  zh: "与 IDA 的对话摘要：",
};

export interface IdaHandoffPrefill {
  topic: ConsultationTopicKey;
  description: string;
}

function scoreTopic(text: string, keywords: string[]): number {
  const lower = text.toLowerCase();
  return keywords.reduce((score, keyword) => {
    return lower.includes(keyword.toLowerCase()) ? score + 1 : score;
  }, 0);
}

export function inferConsultationTopic(
  messages: ConversationMessage[],
): ConsultationTopicKey {
  const combined = messages.map((message) => message.content).join("\n");

  let best = TOPIC_RULES[0]!;
  let bestScore = 0;

  for (const rule of TOPIC_RULES) {
    const score = scoreTopic(combined, rule.keywords);
    if (score > bestScore) {
      bestScore = score;
      best = rule;
    }
  }

  return best.topic;
}

export function buildConversationSummary(
  messages: ConversationMessage[],
  locale: Locale,
  maxLength = 1800,
): string {
  const header = SUMMARY_HEADERS[locale];
  const lines = messages
    .filter((message) => message.content.trim())
    .map((message) => {
      const roleLabel =
        message.role === "user"
          ? locale === "zh"
            ? "用户"
            : locale === "en"
              ? "User"
              : "Pengguna"
          : "IDA";
      return `${roleLabel}: ${message.content.trim()}`;
    });

  const body = lines.join("\n");
  const summary = `${header}\n\n${body}`;

  if (summary.length <= maxLength) return summary;

  return `${summary.slice(0, maxLength - 3)}...`;
}

export function buildIdaHandoffPrefill(
  messages: ConversationMessage[],
  locale: Locale,
): IdaHandoffPrefill {
  const apiMessages = messages.filter((message) => message.content.trim());
  const topic = inferConsultationTopic(apiMessages);

  return {
    topic,
    description: buildConversationSummary(apiMessages, locale),
  };
}