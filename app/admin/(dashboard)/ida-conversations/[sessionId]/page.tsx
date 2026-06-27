import Link from "next/link";
import { notFound } from "next/navigation";

import { ConversationFeedbackForm } from "@/components/admin/conversation-feedback-form";
import { TOPIC_LABELS, getConversationDetail } from "@/lib/admin/queries";
import type { ConsultationTopicKey } from "@/lib/data/content";
import { isSupabaseConfigured } from "@/lib/supabase/admin";

interface PageProps {
  params: Promise<{ sessionId: string }>;
}

export default async function ConversationDetailPage({ params }: PageProps) {
  const { sessionId } = await params;

  if (!isSupabaseConfigured()) {
    notFound();
  }

  const detail = await getConversationDetail(decodeURIComponent(sessionId));

  if (!detail) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/ida-conversations"
          className="text-xs text-white/45 hover:text-gold"
        >
          ← Back to conversations
        </Link>
        <h1 className="mt-3 font-mono text-lg text-gold">{detail.sessionId}</h1>
        <p className="mt-1 text-sm text-white/50">
          Locale: {detail.locale.toUpperCase()} •{" "}
          {detail.convertedToForm ? (
            <span className="text-gold">Converted to form</span>
          ) : (
            "Not converted"
          )}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          {detail.exchanges.map((exchange, index) => (
            <div
              key={exchange.id}
              className="rounded-2xl border border-white/10 bg-surface p-4"
            >
              <p className="text-xs text-white/40">
                Exchange {index + 1} •{" "}
                {new Date(exchange.createdAt).toLocaleString("id-ID")} • RAG:{" "}
                {exchange.retrievedChunks} chunks
                {exchange.inferredTopic && (
                  <>
                    {" "}
                    • Topic:{" "}
                    {TOPIC_LABELS[
                      exchange.inferredTopic as ConsultationTopicKey
                    ] ?? exchange.inferredTopic}
                  </>
                )}
              </p>
              <div className="mt-3 space-y-3">
                <div className="rounded-xl bg-gold/10 px-3 py-2 text-sm text-gold">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold/70">
                    User
                  </span>
                  <p className="mt-1 whitespace-pre-wrap text-white">
                    {exchange.userMessage}
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                    IDA
                  </span>
                  <p className="mt-1 whitespace-pre-wrap text-white/85">
                    {exchange.assistantReply}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ConversationFeedbackForm
          sessionId={detail.sessionId}
          initialRating={detail.feedback?.rating ?? null}
          initialNeedsKbImprovement={
            detail.feedback?.needsKbImprovement ?? false
          }
          initialNotes={detail.feedback?.adminNotes ?? ""}
        />
      </div>
    </div>
  );
}