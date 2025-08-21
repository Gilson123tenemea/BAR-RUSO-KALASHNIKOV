import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Script from "next/script" 
import Analytics from "@/components/Analytics" 
import { LanguageProvider } from "@/components/LanguageContext" // 👈 Agregar esta línea

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rusobar.com"), 
  title: "Bar Ruso Kalashnikov",
  description:
    "La experiencia nocturna más exclusiva de Cuenca. Más de 250 cócteles únicos en un ambiente sofisticado.",
  generator: 'Gilson.Tenemea',
  icons: {
    icon: '/Imagenes/logo_bar.png',
    shortcut: '/Imagenes/logo_bar.png',
    apple: '/Imagenes/logo_bar.png',
  },
  openGraph: {
    title: 'Bar Ruso Kalashnikov',
    description: 'La experiencia nocturna más exclusiva de Cuenca. Cócteles premium y ambiente exclusivo.',
    url: 'https://rusobar.com/',
    siteName: 'Bar Ruso Kalashnikov',
    type: 'website',
    images: [
      {
        url: '/Imagenes/logo_bar.png',
        width: 1200,
        height: 630,
        alt: 'Logo del Bar Ruso Kalashnikov',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bar Ruso Kalashnikov",
    description: "Cócteles premium y ambiente exclusivo en Cuenca.",
    images: ["/Imagenes/logo_bar.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CT1YJSFVSS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CT1YJSFVSS');
          `}
        </Script>
      </head>
      <body className="font-sans">
        <LanguageProvider> {/* 👈 Envolver aquí */}
          {children}
          <Analytics />
        </LanguageProvider> {/* 👈 Cerrar aquí */}
      </body>
    </html>
  )
}