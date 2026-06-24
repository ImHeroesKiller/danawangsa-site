"use client";

import { FileText, Shield, SlidersHorizontal } from "lucide-react";

import { useConsultation } from "@/components/consultation/consultation-context";
import { FeeCard } from "@/components/shared/fee-card";
import { RiskReversal } from "@/components/shared/risk-reversal";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { feeItems, feeNotes } from "@/lib/data/content";

const feeNoteIcons = [Shield, FileText, SlidersHorizontal];

export function FeeSection() {
  const { openConsultation } = useConsultation();

  return (
    <section id="fee" className="mx-auto max-w-7xl px-5 pb-16 sm:px-6">
      <SectionHeader
        eyebrow="STRUKTUR FEE KONSULTASI"
        title="Transparan, Profesional & Berbasis Hasil"
        description="Tidak ada biaya tersembunyi. Setiap komponen fee dijelaskan di awal dalam Perjanjian Konsultasi sebelum pekerjaan dimulai."
      />

      <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {feeItems.map((fee) => (
          <FeeCard key={fee.id} fee={fee} />
        ))}
      </div>

      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-surface p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 font-semibold">Konsultasi Awal Gratis</p>
            <p className="text-sm text-white/60">
              Diskusi 30 menit untuk memahami kasus Anda — tanpa komitmen dan
              tanpa biaya.
            </p>
          </div>
          <Button
            className="shrink-0"
            onClick={() => openConsultation("general")}
          >
            Jadwalkan Konsultasi Awal Gratis
          </Button>
        </div>

        <RiskReversal className="mt-4 text-center sm:text-left" />

        <div className="mt-5 space-y-1 border-t border-white/10 pt-5 text-xs text-white/45">
          {feeNotes.map((note, index) => {
            const Icon = feeNoteIcons[index];
            return (
              <p key={note} className="flex items-start gap-1">
                <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                {note}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}