import { z } from "zod";

import { consultationTopics } from "@/lib/data/content";

const whatsappSchema = z
  .string()
  .trim()
  .min(10, "Nomor WhatsApp minimal 10 digit")
  .max(16, "Nomor WhatsApp terlalu panjang")
  .regex(
    /^(\+?62|0)[0-9]{8,13}$/,
    "Format WhatsApp tidak valid (contoh: 081214144214)",
  );

const emailSchema = z
  .string()
  .trim()
  .email("Alamat email tidak valid")
  .max(120, "Email terlalu panjang");

/** General consultation form schema */
export const generalConsultationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nama / perusahaan minimal 2 karakter")
    .max(120, "Nama / perusahaan terlalu panjang"),
  whatsapp: whatsappSchema,
  email: emailSchema,
  topic: z.enum(consultationTopics, {
    message: "Pilih topik konsultasi",
  }),
  description: z
    .string()
    .trim()
    .min(10, "Deskripsi minimal 10 karakter")
    .max(2000, "Deskripsi maksimal 2000 karakter"),
});

/** Bridging consultation form schema */
export const bridgingConsultationSchema = z.object({
  companyName: z
    .string()
    .trim()
    .min(2, "Nama perusahaan minimal 2 karakter")
    .max(120, "Nama perusahaan terlalu panjang"),
  whatsapp: whatsappSchema,
  email: emailSchema,
  bank: z
    .string()
    .trim()
    .min(2, "Nama bank wajib diisi")
    .max(80, "Nama bank terlalu panjang"),
  loanAmount: z
    .string()
    .trim()
    .min(3, "Estimasi nilai pinjaman wajib diisi")
    .max(50, "Estimasi nilai pinjaman terlalu panjang"),
});

export type GeneralConsultationInput = z.infer<typeof generalConsultationSchema>;
export type BridgingConsultationInput = z.infer<
  typeof bridgingConsultationSchema
>;

/** Flatten Zod errors into field → message map for the UI */
export function formatZodErrors(
  error: z.ZodError,
): Record<string, string> {
  const fieldErrors: Record<string, string> = {};
  for (const issue of error.issues) {
    const field = issue.path[0];
    if (typeof field === "string" && !fieldErrors[field]) {
      fieldErrors[field] = issue.message;
    }
  }
  return fieldErrors;
}