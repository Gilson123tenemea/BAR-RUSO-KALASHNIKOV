// 3. Header actualizado con el selector de idiomas
"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from 'next/image'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from './LanguageContext'

interface SharedHeaderProps {
  scrolled?: boolean
}

const preloadLogo = () => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = '/Imagenes/logo_bar.png'
    link.as = 'image'
    document.head.appendChild(link)
  }
}

export default function SharedHeader({ scrolled: externalScrolled }: SharedHeaderProps) {
  const [internalScrolled, setInternalScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const scrolled = externalScrolled !== undefined ? externalScrolled : internalScrolled

  // Elementos de navegación ahora usando traducciones
  const navItems = useMemo(() => [
    { href: "/", label: t('nav.home') },
    { href: "/menu", label: t('nav.menu') },
    { href: "/sobre-nosotros", label: t('nav.about') },
    { href: "/contacto", label: t('nav.contact') },
    { href: "/galeria", label: t('nav.gallery') },
  ], [t])

  useEffect(() => {
    preloadLogo()
    const img = new window.Image()
    img.onload = () => setLogoLoaded(true)
    img.src = '/Imagenes/logo_bar.png'
  }, [])

  useEffect(() => {
    if (externalScrolled === undefined) {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 100
        setInternalScrolled(isScrolled)
      }

      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [externalScrolled])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleContactClick = useCallback(() => {
    const phoneNumber = "593995575335"
    const message = t('whatsapp.message')
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }, [t])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  const headerClasses = useMemo(() => 
    `fixed top-0 w-full z-50 py-4 transition-all duration-300 ${
      scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
    }`, [scrolled]
  )

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween"
      }}
      className={headerClasses}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center space-x-4"
          style={{ transform: 'translateZ(0)' }}
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center relative overflow-hidden">
            {!logoLoaded && (
              <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 bg-orange-500/40 rounded-full"></div>
              </div>
            )}
            
            <Image
              src="/Imagenes/logo_bar.png"
              alt="Bar Ruso Kalashnikov"
              fill
              className={`object-contain transition-opacity duration-300 ${
                logoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              priority
              quality={95}
              sizes="64px"
              onLoad={() => setLogoLoaded(true)}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQABADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
          
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-lg font-bold text-[#FF9D00]"
          >
            BAR RUSO KALASHNIKOV
          </motion.span>
        </Link>

        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.3, 
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="hidden md:flex space-x-8"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.2, 
                delay: 0.4 + (index * 0.05),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Link
                href={item.href}
                className={`px-4 py-2 transition-all duration-200 rounded-md ${
                  pathname === item.href
                    ? "border border-orange-500 bg-orange-500/10 text-orange-500 rounded-md"
                    : "hover:text-orange-500"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Selector de idiomas reemplaza completamente al botón de contactar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.3, 
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <LanguageSelector />
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ 
            duration: 0.3, 
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          onClick={toggleMobileMenu} 
          className="md:hidden text-white p-2 hover:text-orange-500 transition-colors duration-200"
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu sin botón de contactar */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          transition={{ 
            duration: 0.25,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800 overflow-hidden"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: index * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`px-4 py-2 transition-all duration-200 rounded-md block ${
                      pathname === item.href
                        ? "border border-orange-500 bg-orange-500/10 text-orange-500 rounded-md"
                        : "hover:text-orange-500 hover:bg-gray-800/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}