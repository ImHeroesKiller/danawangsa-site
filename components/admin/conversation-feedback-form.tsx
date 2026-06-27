"use client";

import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface ConversationFeedbackFormProps {
  sessionId: string;
  initialRating: "up" | "down" | null;
  initialNeedsKbImprovement: boolean;
  initialNotes: string;
}

export function ConversationFeedbackForm({
  sessionId,
  initialRating,
  initialNeedsKbImprovement,
  initialNotes,
}: ConversationFeedbackFormProps) {
  const [rating, setRating] = useState<"up" | "down" | null>(initialRating);
  const [needsKbImprovement, setNeedsKbImprovement] = useState(
    initialNeedsKbImprovement,
  );
  const [notes, setNotes] = useState(initialNotes);
  const [status, setStatus] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const save = async (updates: {
    rating?: "up" | "down" | null;
    needsKbImprovement?: boolean;
    adminNotes?: string;
  }) => {
    setIsSaving(true);
    setStatus(null);

    try {
      const response = await fetch("/api/admin/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          rating: updates.rating ?? rating,
          needsKbImprovement:
            updates.needsKbImprovement ?? needsKbImprovement,
          adminNotes: updates.adminNotes ?? notes,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save feedback.");
      }

      setStatus("Feedback saved.");
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "Failed to save feedback.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-surface p-5">
      <h3 className="text-sm font-semibold text-white">Admin Feedback</h3>
      <p className="mt-1 text-xs text-white/45">
        Tandai kualitas percakapan dan kebutuhan perbaikan knowledge base.
      </p>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          disabled={isSaving}
          onClick={() => {
            const next = rating === "up" ? null : "up";
            setRating(next);
            void save({ rating: next });
          }}
          className={cn(
            "inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm transition-colors",
            rating === "up"
              ? "border-gold/40 bg-gold/15 text-gold"
              : "border-white/15 text-white/60 hover:border-white/25",
          )}
        >
          <ThumbsUp className="h-4 w-4" />
          Good
        </button>
        <button
          type="button"
          disabled={isSaving}
          onClick={() => {
            const next = rating === "down" ? null : "down";
            setRating(next);
            void save({ rating: next });
          }}
          className={cn(
            "inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm transition-colors",
            rating === "down"
              ? "border-red-400/40 bg-red-400/10 text-red-300"
              : "border-white/15 text-white/60 hover:border-white/25",
          )}
        >
          <ThumbsDown className="h-4 w-4" />
          Needs work
        </button>
      </div>

      <label className="mt-4 flex items-center gap-2 text-xs text-white/60">
        <input
          type="checkbox"
          checked={needsKbImprovement}
          onChange={(event) => {
            setNeedsKbImprovement(event.target.checked);
            void save({ needsKbImprovement: event.target.checked });
          }}
          className="rounded border-white/20 bg-black"
        />
        Perlu perbaikan knowledge base
      </label>

      <textarea
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
        onBlur={() => void save({ adminNotes: notes })}
        placeholder="Catatan admin (opsional)..."
        rows={3}
        className="mt-3 w-full rounded-2xl border border-white/15 bg-black px-3 py-2 text-sm text-white placeholder:text-white/35 focus-visible:border-gold focus-visible:outline-none"
      />

      {status && <p className="mt-2 text-xs text-white/45">{status}</p>}
    </div>
  );
}