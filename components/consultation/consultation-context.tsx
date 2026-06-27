"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { trackConsultationCtaClick } from "@/lib/analytics";
import type { ConsultationTopicKey } from "@/lib/data/content";
import type { ConsultationModalType } from "@/types";

export interface ConsultationPrefill {
  topic?: ConsultationTopicKey;
  description?: string;
}

export interface OpenConsultationOptions {
  /** Where the CTA was clicked — used for GA4 event `source` */
  source?: string;
  /** Track as primary CTA ("Jadwalkan Konsultasi Gratis") */
  trackPrimaryCta?: boolean;
  /** Pre-fill form fields (e.g. from IDA chat handoff) */
  prefill?: ConsultationPrefill;
}

interface ConsultationContextValue {
  isOpen: boolean;
  modalType: ConsultationModalType;
  prefill: ConsultationPrefill | null;
  openConsultation: (
    type?: ConsultationModalType,
    options?: OpenConsultationOptions,
  ) => void;
  closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextValue | null>(
  null,
);

/** Global consultation modal state — used by Navbar, CTAs, StickyCTA */
export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] =
    useState<ConsultationModalType>("general");
  const [prefill, setPrefill] = useState<ConsultationPrefill | null>(null);

  const openConsultation = useCallback(
    (
      type: ConsultationModalType = "general",
      options?: OpenConsultationOptions,
    ) => {
      if (options?.trackPrimaryCta && options.source) {
        trackConsultationCtaClick(options.source, type);
      }

      setModalType(type);
      setPrefill(options?.prefill ?? null);
      setIsOpen(true);
    },
    [],
  );

  const closeConsultation = useCallback(() => {
    setIsOpen(false);
    setPrefill(null);
  }, []);

  const value = useMemo(
    () => ({ isOpen, modalType, prefill, openConsultation, closeConsultation }),
    [isOpen, modalType, prefill, openConsultation, closeConsultation],
  );

  return (
    <ConsultationContext.Provider value={value}>
      {children}
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error("useConsultation must be used within ConsultationProvider");
  }
  return context;
}