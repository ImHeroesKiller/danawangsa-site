import { z } from "zod";

import { consultationTopicKeys } from "@/lib/data/content";

export function createGeneralConsultationSchema(messages: {
  whatsappMin: string;
  whatsappMax: string;
  whatsappFormat: string;
  emailInvalid: string;
  emailMax: string;
  nameMin: string;
  nameMax: string;
  topicRequired: string;
  descriptionMin: string;
  descriptionMax: string;
}) {
  const whatsappSchema = z
    .string()
    .trim()
    .min(10, messages.whatsappMin)
    .max(16, messages.whatsappMax)
    .regex(/^(\+?62|0)[0-9]{8,13}$/, messages.whatsappFormat);

  const emailSchema = z
    .string()
    .trim()
    .email(messages.emailInvalid)
    .max(120, messages.emailMax);

  return z.object({
    name: z
      .string()
      .trim()
      .min(2, messages.nameMin)
      .max(120, messages.nameMax),
    whatsapp: whatsappSchema,
    email: emailSchema,
    topic: z.enum(consultationTopicKeys, {
      message: messages.topicRequired,
    }),
    description: z
      .string()
      .trim()
      .min(10, messages.descriptionMin)
      .max(2000, messages.descriptionMax),
  });
}

export function createBridgingConsultationSchema(messages: {
  whatsappMin: string;
  whatsappMax: string;
  whatsappFormat: string;
  emailInvalid: string;
  emailMax: string;
  companyNameMin: string;
  companyNameMax: string;
  bankMin: string;
  bankMax: string;
  loanAmountMin: string;
  loanAmountMax: string;
}) {
  const whatsappSchema = z
    .string()
    .trim()
    .min(10, messages.whatsappMin)
    .max(16, messages.whatsappMax)
    .regex(/^(\+?62|0)[0-9]{8,13}$/, messages.whatsappFormat);

  const emailSchema = z
    .string()
    .trim()
    .email(messages.emailInvalid)
    .max(120, messages.emailMax);

  return z.object({
    companyName: z
      .string()
      .trim()
      .min(2, messages.companyNameMin)
      .max(120, messages.companyNameMax),
    whatsapp: whatsappSchema,
    email: emailSchema,
    bank: z
      .string()
      .trim()
      .min(2, messages.bankMin)
      .max(80, messages.bankMax),
    loanAmount: z
      .string()
      .trim()
      .min(3, messages.loanAmountMin)
      .max(50, messages.loanAmountMax),
  });
}

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