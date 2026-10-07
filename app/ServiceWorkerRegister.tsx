"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator
    ) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("Service Worker enregistré :", reg.scope);
        })
        .catch((err) => {
          console.log("Erreur Service Worker :", err);
        });
    }
  }, []);

  return null;
}
