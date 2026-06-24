import { SectionHeader } from "@/components/shared/section-header";
import { valuePropositions } from "@/lib/data/content";

export function ValueSection() {
  return (
    <section id="value" className="border-y border-white/10 bg-surface py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="VALUE PROPOSITION"
          title="Mengapa Danawangsa Capital?"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valuePropositions.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="rounded-3xl border border-white/10 bg-background p-7 text-center"
              >
                <div className="value-icon mx-auto mb-5">
                  <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                </div>
                <h4 className="mb-2.5 text-lg font-semibold tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}