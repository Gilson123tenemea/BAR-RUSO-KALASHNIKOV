"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from './LanguageContext'

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸', initial: 'ES' },
  { code: 'en', name: 'English', flag: '🇺🇸', initial: 'EN' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', initial: 'RU' }
] as const

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentLanguage, setLanguage } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (langCode: 'es' | 'en' | 'ru') => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md border border-orange-500/30 hover:border-orange-500 transition-all duration-200 hover:bg-orange-500/10"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Globe className="w-4 h-4 text-orange-500" />
        {/* Mostrar bandera en desktop, iniciales en móvil */}
        <span className="text-sm font-medium md:hidden">{currentLang.initial}</span>
        <span className="hidden md:block text-sm font-medium">{currentLang.flag}</span>
        <span className="hidden lg:block text-sm">{currentLang.name}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-orange-500" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 right-0 bg-black/95 backdrop-blur-sm border border-gray-700 rounded-md shadow-lg overflow-hidden z-50 min-w-[140px]"
          >
            {languages.map((language, index) => (
              <motion.button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full px-4 py-3 text-left flex items-center space-x-3 transition-colors duration-200 ${
                  currentLanguage === language.code
                    ? 'bg-orange-500/20 text-orange-500'
                    : 'hover:bg-gray-800 text-white hover:text-orange-500'
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4 }}
              >
                {/* Mostrar bandera en desktop, iniciales en móvil */}
                <span className="text-lg md:hidden font-bold">{language.initial}</span>
                <span className="hidden md:block text-lg">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
                {currentLanguage === language.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto w-2 h-2 bg-orange-500 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
