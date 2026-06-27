import type { ConsultationTopicKey } from "@/lib/data/content";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export const TOPIC_LABELS: Record<ConsultationTopicKey, string> = {
  bridging: "Bridging Finance & Restructuring",
  modalUsaha: "Modal Usaha (Jaminan Aset)",
  modalKerja: "Modal Kerja (SKBDN)",
  assetCollateral: "Asset Collateral Program",
  advisory: "Business & Financial Advisory",
};

export interface IdaAnalyticsMetrics {
  totalExchanges: number;
  uniqueSessions: number;
  convertedSessions: number;
  conversionRate: number;
  avgExchangesPerSession: number;
  topTopics: { topic: string; label: string; count: number }[];
  byLocale: { locale: string; count: number }[];
  dailyVolume: { date: string; count: number }[];
}

interface ConversationLogRow {
  id: string;
  session_id: string;
  user_message: string;
  assistant_reply: string;
  retrieved_chunks: number;
  locale: string;
  inferred_topic: string | null;
  converted_to_form: boolean;
  created_at: string;
}

interface FeedbackRow {
  session_id: string;
  rating: "up" | "down" | null;
  needs_kb_improvement: boolean;
  admin_notes: string | null;
}

export interface ConversationListItem {
  sessionId: string;
  locale: string;
  exchangeCount: number;
  convertedToForm: boolean;
  lastMessageAt: string;
  preview: string;
  inferredTopic: string | null;
  feedbackRating: "up" | "down" | null;
  needsKbImprovement: boolean;
}

export interface ConversationDetail {
  sessionId: string;
  locale: string;
  convertedToForm: boolean;
  exchanges: {
    id: string;
    userMessage: string;
    assistantReply: string;
    retrievedChunks: number;
    inferredTopic: string | null;
    createdAt: string;
  }[];
  feedback: {
    rating: "up" | "down" | null;
    needsKbImprovement: boolean;
    adminNotes: string | null;
  } | null;
}

export async function getAnalyticsMetrics(): Promise<IdaAnalyticsMetrics> {
  const supabase = getSupabaseAdmin();

  const { data: logs, error } = await supabase
    .from("ida_conversation_logs")
    .select("session_id, locale, inferred_topic, converted_to_form, created_at")
    .order("created_at", { ascending: false })
    .limit(5000);

  if (error) throw new Error(error.message);

  const rows = logs ?? [];
  const sessionMap = new Map<
    string,
    { locale: string; exchanges: number; converted: boolean }
  >();

  const topicCounts = new Map<string, number>();
  const localeCounts = new Map<string, number>();
  const dailyCounts = new Map<string, number>();

  for (const row of rows) {
    const session = sessionMap.get(row.session_id) ?? {
      locale: row.locale,
      exchanges: 0,
      converted: false,
    };

    session.exchanges += 1;
    session.converted = session.converted || row.converted_to_form;
    sessionMap.set(row.session_id, session);

    if (row.inferred_topic) {
      topicCounts.set(
        row.inferred_topic,
        (topicCounts.get(row.inferred_topic) ?? 0) + 1,
      );
    }

    localeCounts.set(row.locale, (localeCounts.get(row.locale) ?? 0) + 1);

    const day = row.created_at.slice(0, 10);
    dailyCounts.set(day, (dailyCounts.get(day) ?? 0) + 1);
  }

  const uniqueSessions = sessionMap.size;
  const convertedSessions = [...sessionMap.values()].filter(
    (session) => session.converted,
  ).length;

  const topTopics = [...topicCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([topic, count]) => ({
      topic,
      label:
        TOPIC_LABELS[topic as ConsultationTopicKey] ?? topic,
      count,
    }));

  const byLocale = [...localeCounts.entries()].map(([locale, count]) => ({
    locale,
    count,
  }));

  const dailyVolume = [...dailyCounts.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-14)
    .map(([date, count]) => ({ date, count }));

  const totalExchanges = rows.length;

  return {
    totalExchanges,
    uniqueSessions,
    convertedSessions,
    conversionRate:
      uniqueSessions > 0 ? convertedSessions / uniqueSessions : 0,
    avgExchangesPerSession:
      uniqueSessions > 0 ? totalExchanges / uniqueSessions : 0,
    topTopics,
    byLocale,
    dailyVolume,
  };
}

export async function listConversations(filters: {
  locale?: string;
  converted?: string;
  from?: string;
  to?: string;
}): Promise<ConversationListItem[]> {
  const supabase = getSupabaseAdmin();

  let query = supabase
    .from("ida_conversation_logs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(2000);

  if (filters.locale) query = query.eq("locale", filters.locale);
  if (filters.converted === "true") query = query.eq("converted_to_form", true);
  if (filters.converted === "false") query = query.eq("converted_to_form", false);
  if (filters.from) query = query.gte("created_at", filters.from);
  if (filters.to) query = query.lte("created_at", `${filters.to}T23:59:59.999Z`);

  const { data: logs, error } = await query;
  if (error) throw new Error(error.message);

  const { data: feedbackRows } = await supabase
    .from("ida_conversation_feedback")
    .select("session_id, rating, needs_kb_improvement");

  const feedbackMap = new Map(
    (feedbackRows as FeedbackRow[] | null)?.map((row) => [row.session_id, row]) ??
      [],
  );

  const sessions = new Map<string, ConversationListItem>();

  for (const row of (logs as ConversationLogRow[]) ?? []) {
    const existing = sessions.get(row.session_id);

    if (!existing) {
      const feedback = feedbackMap.get(row.session_id);

      sessions.set(row.session_id, {
        sessionId: row.session_id,
        locale: row.locale,
        exchangeCount: 1,
        convertedToForm: row.converted_to_form,
        lastMessageAt: row.created_at,
        preview: row.user_message.slice(0, 120),
        inferredTopic: row.inferred_topic,
        feedbackRating: feedback?.rating ?? null,
        needsKbImprovement: feedback?.needs_kb_improvement ?? false,
      });
    } else {
      existing.exchangeCount += 1;
      existing.convertedToForm =
        existing.convertedToForm || row.converted_to_form;
    }
  }

  return [...sessions.values()].sort((a, b) =>
    b.lastMessageAt.localeCompare(a.lastMessageAt),
  );
}

export async function getConversationDetail(
  sessionId: string,
): Promise<ConversationDetail | null> {
  const supabase = getSupabaseAdmin();

  const { data: logs, error } = await supabase
    .from("ida_conversation_logs")
    .select("*")
    .eq("session_id", sessionId)
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);
  if (!logs?.length) return null;

  const { data: feedback } = await supabase
    .from("ida_conversation_feedback")
    .select("rating, needs_kb_improvement, admin_notes")
    .eq("session_id", sessionId)
    .maybeSingle();

  const first = logs[0] as ConversationLogRow;

  return {
    sessionId,
    locale: first.locale,
    convertedToForm: logs.some(
      (row) => (row as ConversationLogRow).converted_to_form,
    ),
    exchanges: (logs as ConversationLogRow[]).map((row) => ({
      id: row.id,
      userMessage: row.user_message,
      assistantReply: row.assistant_reply,
      retrievedChunks: row.retrieved_chunks,
      inferredTopic: row.inferred_topic,
      createdAt: row.created_at,
    })),
    feedback: feedback
      ? {
          rating: feedback.rating as "up" | "down" | null,
          needsKbImprovement: feedback.needs_kb_improvement,
          adminNotes: feedback.admin_notes,
        }
      : null,
  };
}

export async function upsertConversationFeedback(input: {
  sessionId: string;
  rating?: "up" | "down" | null;
  needsKbImprovement?: boolean;
  adminNotes?: string;
}): Promise<void> {
  const supabase = getSupabaseAdmin();

  const { error } = await supabase.from("ida_conversation_feedback").upsert(
    {
      session_id: input.sessionId,
      rating: input.rating ?? null,
      needs_kb_improvement: input.needsKbImprovement ?? false,
      admin_notes: input.adminNotes ?? null,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "session_id" },
  );

  if (error) throw new Error(error.message);
}