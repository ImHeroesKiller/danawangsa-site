"use client";

import { Loader2, RefreshCw } from "lucide-react";
import { useState } from "react";

interface ReindexJob {
  id: string;
  status: string;
  triggered_by: string;
  chunks_indexed: number | null;
  created_at: string;
  error_message: string | null;
}

interface ReindexPanelProps {
  initialJobs: ReindexJob[];
}

export function ReindexPanel({ initialJobs }: ReindexPanelProps) {
  const [jobs, setJobs] = useState(initialJobs);
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleReindex = async () => {
    setIsRunning(true);
    setMessage(null);

    try {
      const response = await fetch("/api/ida/reindex", { method: "POST" });
      const data = (await response.json()) as {
        error?: string;
        chunks?: number;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Reindex failed.");
      }

      setMessage(`Re-index selesai — ${data.chunks ?? 0} chunks.`);

      const jobsResponse = await fetch("/api/ida/reindex");
      const jobsData = (await jobsResponse.json()) as { jobs: ReindexJob[] };
      setJobs(jobsData.jobs ?? []);
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Reindex failed.",
      );
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-surface p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-white">Knowledge Base Re-index</h3>
          <p className="mt-1 text-xs text-white/45">
            Regenerate embeddings dari seluruh konten layanan, FAQ, dan legal.
          </p>
        </div>
        <button
          type="button"
          onClick={() => void handleReindex()}
          disabled={isRunning}
          className="inline-flex items-center gap-2 rounded-2xl bg-gold px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-gold-dark disabled:opacity-50"
        >
          {isRunning ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4" />
          )}
          Trigger Re-index
        </button>
      </div>

      {message && (
        <p className="mt-3 text-xs text-gold">{message}</p>
      )}

      {jobs.length > 0 && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-xs text-white/60">
            <thead>
              <tr className="border-b border-white/10 text-white/40">
                <th className="py-2 pr-3">Status</th>
                <th className="py-2 pr-3">Triggered By</th>
                <th className="py-2 pr-3">Chunks</th>
                <th className="py-2">Waktu</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b border-white/5">
                  <td className="py-2 pr-3 capitalize">{job.status}</td>
                  <td className="py-2 pr-3">{job.triggered_by}</td>
                  <td className="py-2 pr-3">{job.chunks_indexed ?? "—"}</td>
                  <td className="py-2">
                    {new Date(job.created_at).toLocaleString("id-ID")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}