"use client";

import { useCallback, useState, useTransition } from "react";
import { AlertCircle, Check, Loader2 } from "lucide-react";

import {
  submitBridgingRequest,
  submitConsultationRequest,
} from "@/app/actions/consultation";
import { useConsultation } from "@/components/consultation/consultation-context";
import { FieldError } from "@/components/shared/field-error";
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
import { trackConsultationFormSuccess } from "@/lib/analytics";
import { consultationTopics } from "@/lib/data/content";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "success" | "error";

export function ConsultationModal() {
  const { isOpen, modalType, closeConsultation } = useConsultation();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();

  const resetFormState = useCallback(() => {
    setStatus("idle");
    setMessage("");
    setFieldErrors({});
  }, []);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeConsultation();
      setTimeout(resetFormState, 200);
    }
  };

  const handleGeneralSubmit = (formData: FormData) => {
    setFieldErrors({});
    setMessage("");

    startTransition(async () => {
      const result = await submitConsultationRequest(formData);

      if (result.success) {
        trackConsultationFormSuccess("general");
        setStatus("success");
        setMessage(result.message);
        return;
      }

      setStatus("error");
      setMessage(result.message);
      if (result.fieldErrors) setFieldErrors(result.fieldErrors);
    });
  };

  const handleBridgingSubmit = (formData: FormData) => {
    setFieldErrors({});
    setMessage("");

    startTransition(async () => {
      const result = await submitBridgingRequest(formData);

      if (result.success) {
        trackConsultationFormSuccess("bridging");
        setStatus("success");
        setMessage(result.message);
        return;
      }

      setStatus("error");
      setMessage(result.message);
      if (result.fieldErrors) setFieldErrors(result.fieldErrors);
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto p-0 sm:max-h-[85vh]">
        {status === "success" ? (
          <div className="px-6 py-12 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold">
              <Check className="h-7 w-7 text-gold" />
            </div>
            <h3 className="mb-1.5 text-xl font-semibold tracking-tight">
              Permintaan Konsultasi Diterima
            </h3>
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-white/70">
              {message}
            </p>
            <Button
              variant="outline"
              className="mt-7 w-full sm:w-auto"
              onClick={() => handleOpenChange(false)}
            >
              Tutup
            </Button>
          </div>
        ) : modalType === "bridging" ? (
          <div className="px-5 pb-5 pt-6 sm:px-6 sm:pt-7">
            <div className="mb-4 flex items-start justify-between gap-3">
              <DialogHeader>
                <p className="text-xs tracking-wider text-amber-400">
                  STRATEGI BRIDGING & RESTRUKTURISASI
                </p>
                <DialogTitle>Konsultasi Khusus</DialogTitle>
              </DialogHeader>
              <DialogCloseButton />
            </div>

            {status === "error" && message && (
              <FormAlert message={message} />
            )}

            <form action={handleBridgingSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="companyName">NAMA PERUSAHAAN</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    placeholder="PT Maju Bersama"
                    aria-invalid={!!fieldErrors.companyName}
                    disabled={isPending}
                  />
                  <FieldError message={fieldErrors.companyName} />
                </div>
                <div>
                  <Label htmlFor="bridging-whatsapp">NO. WHATSAPP</Label>
                  <Input
                    id="bridging-whatsapp"
                    name="whatsapp"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={siteConfig.phone.replace(/-/g, "")}
                    aria-invalid={!!fieldErrors.whatsapp}
                    disabled={isPending}
                  />
                  <FieldError message={fieldErrors.whatsapp} />
                </div>
              </div>
              <div>
                <Label htmlFor="bridging-email">EMAIL</Label>
                <Input
                  id="bridging-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={siteConfig.email}
                  aria-invalid={!!fieldErrors.email}
                  disabled={isPending}
                />
                <FieldError message={fieldErrors.email} />
              </div>
              <div>
                <Label htmlFor="bank">BANK YANG MENGALAMI JATUH TEMPO</Label>
                <Input
                  id="bank"
                  name="bank"
                  placeholder="Bank Mandiri / BRI / BCA / dll"
                  aria-invalid={!!fieldErrors.bank}
                  disabled={isPending}
                />
                <FieldError message={fieldErrors.bank} />
              </div>
              <div>
                <Label htmlFor="loanAmount">ESTIMASI NILAI PINJAMAN</Label>
                <Input
                  id="loanAmount"
                  name="loanAmount"
                  placeholder="Rp 350.000.000"
                  aria-invalid={!!fieldErrors.loanAmount}
                  disabled={isPending}
                />
                <FieldError message={fieldErrors.loanAmount} />
              </div>
              <SubmitButton isPending={isPending} />
              <p className="text-center text-[10px] text-white/40">
                Kami bantu rancang strategi & dampingi proses • Bukan penyaluran
                dana
              </p>
            </form>
          </div>
        ) : (
          <>
            <div className="px-5 pb-5 pt-6 sm:px-6 sm:pt-7">
              <div className="mb-5 flex items-start justify-between gap-3">
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

              {status === "error" && message && (
                <FormAlert message={message} />
              )}

              <form action={handleGeneralSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">NAMA LENGKAP / PERUSAHAAN</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="PT Maju Bersama"
                    autoComplete="organization"
                    aria-invalid={!!fieldErrors.name}
                    disabled={isPending}
                  />
                  <FieldError message={fieldErrors.name} />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="whatsapp">NO. WHATSAPP</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder={siteConfig.phone.replace(/-/g, "")}
                      aria-invalid={!!fieldErrors.whatsapp}
                      disabled={isPending}
                    />
                    <FieldError message={fieldErrors.whatsapp} />
                  </div>
                  <div>
                    <Label htmlFor="email">EMAIL</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder={siteConfig.email}
                      aria-invalid={!!fieldErrors.email}
                      disabled={isPending}
                    />
                    <FieldError message={fieldErrors.email} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="topic">TOPIK KONSULTASI</Label>
                  <select
                    id="topic"
                    name="topic"
                    defaultValue=""
                    aria-invalid={!!fieldErrors.topic}
                    disabled={isPending}
                    className={cn(
                      "flex h-11 w-full rounded-2xl border border-white/20 bg-black px-4 py-3 text-sm text-white focus-visible:border-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/30 disabled:opacity-50",
                      fieldErrors.topic && "border-red-400/60",
                    )}
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
                  <FieldError message={fieldErrors.topic} />
                </div>
                <div>
                  <Label htmlFor="description">
                    DESKRIPSI SINGKAT MASALAH / KEBUTUHAN
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Contoh: Butuh solusi untuk pinjaman bank yang akan jatuh tempo dalam 2 minggu..."
                    aria-invalid={!!fieldErrors.description}
                    disabled={isPending}
                  />
                  <FieldError message={fieldErrors.description} />
                </div>
                <SubmitButton isPending={isPending} />
              </form>
            </div>
            <div className="border-t border-white/10 bg-black/40 px-5 py-3.5 text-center text-[10px] text-white/40 sm:px-6">
              Data dilindungi • Hanya untuk keperluan konsultasi
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function FormAlert({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="mb-4 flex items-start gap-2 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
    >
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{message}</span>
    </div>
  );
}

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button type="submit" className="w-full" disabled={isPending}>
      {isPending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Mengirim...
        </>
      ) : (
        "KIRIM PERMINTAAN KONSULTASI"
      )}
    </Button>
  );
}