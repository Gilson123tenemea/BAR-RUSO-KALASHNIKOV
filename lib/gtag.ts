// lib/gtag.ts

// 👉 Declaración global para evitar error de TS
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export const GA_TRACKING_ID = "G-CT1YJSFVSS"


// Registrar un pageview
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    })
  }
}
