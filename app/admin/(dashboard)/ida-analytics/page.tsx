import { MetricCard } from "@/components/admin/metric-card";
import { ReindexPanel } from "@/components/admin/reindex-panel";
import { SimpleBarChart } from "@/components/admin/simple-bar-chart";
import { getAnalyticsMetrics } from "@/lib/admin/queries";
import { getLatestReindexJobs } from "@/lib/admin/reindex-jobs";
import { isSupabaseConfigured } from "@/lib/supabase/admin";

export default async function IdaAnalyticsPage() {
  if (!isSupabaseConfigured()) {
    return (
      <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 text-sm text-amber-200">
        Supabase belum dikonfigurasi. Set{" "}
        <code className="text-gold">SUPABASE_URL</code> dan{" "}
        <code className="text-gold">SUPABASE_SERVICE_ROLE_KEY</code> di environment.
      </div>
    );
  }

  const [metrics, jobs] = await Promise.all([
    getAnalyticsMetrics(),
    getLatestReindexJobs(),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">IDA Analytics</h1>
        <p className="mt-1 text-sm text-white/50">
          Metrik percakapan chatbot dan konversi ke formulir konsultasi.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          label="Total Exchanges"
          value={String(metrics.totalExchanges)}
          hint="Jumlah pasangan user ↔ IDA"
        />
        <MetricCard
          label="Unique Sessions"
          value={String(metrics.uniqueSessions)}
        />
        <MetricCard
          label="Form Conversions"
          value={String(metrics.convertedSessions)}
          hint={`${(metrics.conversionRate * 100).toFixed(1)}% conversion rate`}
        />
        <MetricCard
          label="Avg. per Session"
          value={metrics.avgExchangesPerSession.toFixed(1)}
          hint="Rata-rata panjang percakapan"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <SimpleBarChart
          title="Topik / Layanan Paling Sering Ditanyakan"
          items={metrics.topTopics.map((topic) => ({
            label: topic.label,
            value: topic.count,
          }))}
        />
        <SimpleBarChart
          title="Volume per Locale"
          items={metrics.byLocale.map((item) => ({
            label: item.locale.toUpperCase(),
            value: item.count,
          }))}
        />
      </div>

      <SimpleBarChart
        title="Volume Harian (14 hari terakhir)"
        items={metrics.dailyVolume.map((item) => ({
          label: item.date,
          value: item.count,
        }))}
      />

      <ReindexPanel initialJobs={jobs} />
    </div>
  );
}