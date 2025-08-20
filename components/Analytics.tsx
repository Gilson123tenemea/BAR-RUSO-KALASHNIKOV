"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, Suspense } from "react"
import * as gtag from "@/lib/gtag"

// Componente interno que usa useSearchParams
function AnalyticsContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      const url = pathname + searchParams.toString()
      gtag.pageview(url)
    }
  }, [pathname, searchParams])

  return null
}

// Componente principal envuelto en Suspense
export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  )
}