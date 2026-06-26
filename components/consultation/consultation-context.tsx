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
import type { ConsultationModalType } from "@/types";

export interface OpenConsultationOptions {
  /** Where the CTA was clicked — used for GA4 event `source` */
  source?: string;
  /** Track as primary CTA ("Jadwalkan Konsultasi Gratis") */
  trackPrimaryCta?: boolean;
}

interface ConsultationContextValue {
  isOpen: boolean;
  modalType: ConsultationModalType;
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

  const openConsultation = useCallback(
    (
      type: ConsultationModalType = "general",
      options?: OpenConsultationOptions,
    ) => {
      if (options?.trackPrimaryCta && options.source) {
        trackConsultationCtaClick(options.source, type);
      }

      setModalType(type);
      setIsOpen(true);
    },
    [],
  );

  const closeConsultation = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, modalType, openConsultation, closeConsultation }),
    [isOpen, modalType, openConsultation, closeConsultation],
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