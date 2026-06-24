import { trustBadges } from "@/lib/data/content";

export function WhyUsSection() {
  return (
    <section id="why" className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-xs tracking-[2.5px] text-gold">
          INTEGRITY • PROFESSIONALISM • TRUST • GROWTH
        </p>
        <h2 className="mb-5 text-[32px] font-semibold leading-none tracking-[-1.2px] sm:text-5xl">
          Partner konsultasi terpercaya
          <br />
          untuk pertumbuhan bisnis
          <br />
          yang berkelanjutan.
        </h2>
        <p className="mb-8 text-[15px] text-white/70">
          Kami mendampingi Anda merancang strategi keuangan yang tepat agar
          bisnis tetap sehat dan berkembang.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-xs">
          {trustBadges.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/60"
            >
              <Icon className="mr-1.5 h-3.5 w-3.5 text-gold" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}