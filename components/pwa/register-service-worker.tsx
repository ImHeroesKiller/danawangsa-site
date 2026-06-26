"use client";

import { useEffect } from "react";

/** Registers minimal service worker for PWA installability */
export function RegisterServiceWorker() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
      // Silent fail — SW is enhancement only
    });
  }, []);

  return null;
}