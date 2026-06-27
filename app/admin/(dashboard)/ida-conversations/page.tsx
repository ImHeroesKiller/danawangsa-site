import Link from "next/link";

import { ConversationFilters } from "@/components/admin/conversation-filters";
import { TOPIC_LABELS, listConversations } from "@/lib/admin/queries";
import type { ConsultationTopicKey } from "@/lib/data/content";
import { isSupabaseConfigured } from "@/lib/supabase/admin";

interface PageProps {
  searchParams: Promise<{
    locale?: string;
    converted?: string;
    from?: string;
    to?: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function IdaConversationsPage({ searchParams }: PageProps) {
  const filters = await searchParams;

  if (!isSupabaseConfigured()) {
    return (
      <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 text-sm text-amber-200">
        Supabase belum dikonfigurasi.
      </div>
    );
  }

  const conversations = await listConversations(filters);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">IDA Conversations</h1>
        <p className="mt-1 text-sm text-white/50">
          Review percakapan, beri feedback, dan tandai yang perlu perbaikan KB.
        </p>
      </div>

      <ConversationFilters />

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-surface">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs text-white/40">
              <th className="px-4 py-3">Session</th>
              <th className="px-4 py-3">Locale</th>
              <th className="px-4 py-3">Exchanges</th>
              <th className="px-4 py-3">Topic</th>
              <th className="px-4 py-3">Converted</th>
              <th className="px-4 py-3">Feedback</th>
              <th className="px-4 py-3">Last Activity</th>
            </tr>
          </thead>
          <tbody>
            {conversations.map((conversation) => (
              <tr
                key={conversation.sessionId}
                className="border-b border-white/5 hover:bg-white/5"
              >
                <td className="px-4 py-3">
                  <Link
                    href={`/admin/ida-conversations/${encodeURIComponent(conversation.sessionId)}`}
                    className="font-mono text-xs text-gold hover:underline"
                  >
                    {conversation.sessionId.slice(0, 18)}…
                  </Link>
                  <p className="mt-1 max-w-xs truncate text-xs text-white/45">
                    {conversation.preview}
                  </p>
                </td>
                <td className="px-4 py-3 uppercase">{conversation.locale}</td>
                <td className="px-4 py-3">{conversation.exchangeCount}</td>
                <td className="px-4 py-3 text-xs text-white/60">
                  {conversation.inferredTopic
                    ? TOPIC_LABELS[
                        conversation.inferredTopic as ConsultationTopicKey
                      ] ?? conversation.inferredTopic
                    : "—"}
                </td>
                <td className="px-4 py-3">
                  {conversation.convertedToForm ? (
                    <span className="text-gold">Yes</span>
                  ) : (
                    <span className="text-white/40">No</span>
                  )}
                </td>
                <td className="px-4 py-3 text-xs">
                  {conversation.feedbackRating === "up" && "👍"}
                  {conversation.feedbackRating === "down" && "👎"}
                  {conversation.needsKbImprovement && " 📚"}
                  {!conversation.feedbackRating &&
                    !conversation.needsKbImprovement &&
                    "—"}
                </td>
                <td className="px-4 py-3 text-xs text-white/50">
                  {new Date(conversation.lastMessageAt).toLocaleString("id-ID")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {conversations.length === 0 && (
          <p className="px-4 py-8 text-center text-sm text-white/40">
            Belum ada percakapan yang tercatat.
          </p>
        )}
      </div>
    </div>
  );
}