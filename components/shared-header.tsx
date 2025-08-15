"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from 'next/image'

interface SharedHeaderProps {
  scrolled?: boolean
}

export default function SharedHeader({ scrolled: externalScrolled }: SharedHeaderProps) {
  const [internalScrolled, setInternalScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Use external scrolled state if provided, otherwise use internal
  const scrolled = externalScrolled !== undefined ? externalScrolled : internalScrolled

  useEffect(() => {
    if (externalScrolled === undefined) {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 100
        setInternalScrolled(isScrolled)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [externalScrolled])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/menu", label: "Menú" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros" },
    { href: "/contacto", label: "Contacto" },
    { href: "/galeria", label: "Galería" },
  ]

  const handleContactClick = () => {
    const phoneNumber = "593995575335"
    const message = "Hola, me gustaría hacer una reserva en Bar Ruso Kalashnikov"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-40 py-4 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center relative">
            <Image
              src="/Imagenes/logo_bar.png"
              alt="Bar Ruso Kalashnikov"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg font-bold text-[#FF9D00]">BAR RUSO KALASHNIKOV</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 transition-all duration-200 rounded-md ${pathname === item.href
                  ? "border border-orange-500 bg-orange-500/10 text-orange-500 rounded-md"
                  : "hover:text-orange-500"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={handleContactClick}
          className="hidden md:block border border-orange-500 px-6 py-2 hover:bg-orange-500 hover:text-black transition-colors rounded-md"
        >
          Contactar
        </button>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 transition-all duration-200 rounded-md ${pathname === item.href
                      ? "border border-orange-500 bg-orange-500/10 text-orange-500 rounded-md"
                      : "hover:text-orange-500"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  handleContactClick()
                  setMobileMenuOpen(false)
                }}
                className="border border-orange-500 px-6 py-2 hover:bg-orange-500 hover:text-black transition-colors rounded-md text-center"
              >
                Contactar
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
