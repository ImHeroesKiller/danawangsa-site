"use client";

import { useState, useTransition } from "react";
import { Check } from "lucide-react";

import {
  submitBridgingRequest,
  submitConsultationRequest,
} from "@/app/actions/consultation";
import { useConsultation } from "@/components/consultation/consultation-context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogCloseButton,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { consultationTopics } from "@/lib/data/content";
import { siteConfig } from "@/lib/site-config";
import type { ConsultationTopic } from "@/types";

export function ConsultationModal() {
  const { isOpen, modalType, closeConsultation } = useConsultation();
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeConsultation();
      setTimeout(() => {
        setSubmitted(false);
        setMessage("");
      }, 200);
    }
  };

  const handleGeneralSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await submitConsultationRequest({
        name: String(formData.get("name") ?? ""),
        whatsapp: String(formData.get("whatsapp") ?? ""),
        email: String(formData.get("email") ?? ""),
        topic: String(formData.get("topic") ?? "") as ConsultationTopic | "",
        description: String(formData.get("description") ?? ""),
      });
      setMessage(result.message);
      setSubmitted(result.success);
    });
  };

  const handleBridgingSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await submitBridgingRequest({
        companyName: String(formData.get("companyName") ?? ""),
        whatsapp: String(formData.get("whatsapp") ?? ""),
        email: String(formData.get("email") ?? ""),
        bank: String(formData.get("bank") ?? ""),
        loanAmount: String(formData.get("loanAmount") ?? ""),
      });
      setMessage(result.message);
      setSubmitted(result.success);
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="p-0">
        {submitted ? (
          <div className="px-6 py-12 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold">
              <Check className="h-7 w-7 text-gold" />
            </div>
            <h3 className="mb-1.5 text-xl font-semibold tracking-tight">
              Permintaan Konsultasi Diterima
            </h3>
            <p className="mx-auto max-w-[260px] text-sm text-white/70">
              {message}
            </p>
            <Button
              variant="outline"
              className="mt-7"
              onClick={() => handleOpenChange(false)}
            >
              Tutup
            </Button>
          </div>
        ) : modalType === "bridging" ? (
          <div className="px-6 pb-5 pt-7">
            <div className="mb-4 flex items-start justify-between">
              <DialogHeader>
                <p className="text-xs tracking-wider text-amber-400">
                  STRATEGI BRIDGING & RESTRUKTURISASI
                </p>
                <DialogTitle>Konsultasi Khusus</DialogTitle>
              </DialogHeader>
              <DialogCloseButton />
            </div>
            <form action={handleBridgingSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">NAMA PERUSAHAAN</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    placeholder="PT Maju Bersama"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="bridging-whatsapp">NO. WHATSAPP</Label>
                  <Input
                    id="bridging-whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder={siteConfig.phone.replace(/-/g, "")}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="bridging-email">EMAIL</Label>
                <Input
                  id="bridging-email"
                  name="email"
                  type="email"
                  placeholder={siteConfig.email}
                  required
                />
              </div>
              <div>
                <Label htmlFor="bank">BANK YANG MENGALAMI JATUH TEMPO</Label>
                <Input
                  id="bank"
                  name="bank"
                  placeholder="Bank Mandiri / BRI / BCA / dll"
                  required
                />
              </div>
              <div>
                <Label htmlFor="loanAmount">ESTIMASI NILAI PINJAMAN</Label>
                <Input
                  id="loanAmount"
                  name="loanAmount"
                  placeholder="Rp 350.000.000"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Mengirim..." : "KIRIM PERMINTAAN KONSULTASI"}
              </Button>
              <p className="text-center text-[10px] text-white/40">
                Kami bantu rancang strategi & dampingi proses • Bukan penyaluran
                dana
              </p>
            </form>
          </div>
        ) : (
          <>
            <div className="px-6 pb-5 pt-7">
              <div className="mb-5 flex items-start justify-between">
                <DialogHeader>
                  <p className="text-xs tracking-[2.5px] text-gold">
                    DANAWANGSA CAPITAL
                  </p>
                  <DialogTitle>Konsultasi Awal Gratis</DialogTitle>
                  <p className="mt-1 text-xs text-white/45">
                    {siteConfig.tagline}
                  </p>
                </DialogHeader>
                <DialogCloseButton />
              </div>
              <form action={handleGeneralSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">NAMA LENGKAP / PERUSAHAAN</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="PT Maju Bersama"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="whatsapp">NO. WHATSAPP</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      placeholder={siteConfig.phone.replace(/-/g, "")}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">EMAIL</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={siteConfig.email}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="topic">TOPIK KONSULTASI</Label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    className="flex h-11 w-full rounded-2xl border border-white/20 bg-black px-4 py-3 text-sm text-white focus-visible:border-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/30"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Pilih topik
                    </option>
                    {consultationTopics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="description">
                    DESKRIPSI SINGKAT MASALAH / KEBUTUHAN
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Contoh: Butuh solusi untuk pinjaman bank yang akan jatuh tempo dalam 2 minggu..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Mengirim..." : "KIRIM PERMINTAAN KONSULTASI"}
                </Button>
              </form>
            </div>
            <div className="border-t border-white/10 bg-black/40 px-6 py-3.5 text-center text-[10px] text-white/40">
              Data dilindungi • Hanya untuk keperluan konsultasi
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}