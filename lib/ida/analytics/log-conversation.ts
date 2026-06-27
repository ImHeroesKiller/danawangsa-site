import type { Locale } from "@/i18n/routing";
import { inferConsultationTopic } from "@/lib/ida/handoff";
import { isSupabaseConfigured, getSupabaseAdmin } from "@/lib/supabase/admin";

export interface LogConversationInput {
  sessionId?: string;
  userMessage: string;
  assistantReply: string;
  retrievedChunks: number;
  locale: Locale;
}

export async function logIdaConversation(
  input: LogConversationInput,
): Promise<void> {
  if (!isSupabaseConfigured() || !input.sessionId) return;

  try {
    const supabase = getSupabaseAdmin();
    const inferredTopic = inferConsultationTopic([
      { role: "user", content: input.userMessage },
    ]);

    await supabase.from("ida_conversation_logs").insert({
      session_id: input.sessionId,
      user_message: input.userMessage,
      assistant_reply: input.assistantReply,
      retrieved_chunks: input.retrievedChunks,
      locale: input.locale,
      inferred_topic: inferredTopic,
    });
  } catch (error) {
    console.error("[IDA analytics log]", error);
  }
}

export async function markSessionConverted(sessionId: string): Promise<void> {
  if (!isSupabaseConfigured() || !sessionId) return;

  try {
    const supabase = getSupabaseAdmin();

    await supabase
      .from("ida_conversation_logs")
      .update({ converted_to_form: true })
      .eq("session_id", sessionId);
  } catch (error) {
    console.error("[IDA conversion track]", error);
  }
}