import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

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
  title: "Bar Ruso Kalashnikov",
  description:
    "La experiencia nocturna más exclusiva de Cuenca. Más de 250 cócteles únicos en un ambiente sofisticado.",
  generator: 'Gilson.Tenemea',
  
  icons: {
    icon: '/Imagenes/logo_bar.png',
    shortcut: '/Imagenes/logo_bar.png',
    apple: '/Imagenes/logo_bar.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
