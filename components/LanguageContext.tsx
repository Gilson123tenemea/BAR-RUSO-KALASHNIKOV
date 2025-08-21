// 1. Crear el contexto de idioma (src/contexts/LanguageContext.tsx)
"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'es' | 'en' | 'ru'

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKeys) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Definir el tipo de las traducciones
type TranslationKeys = 
  | 'nav.home'
  | 'nav.menu' 
  | 'nav.about'
  | 'nav.contact'
  | 'nav.gallery'
  | 'header.contact'
  | 'whatsapp.message'

type Translations = Record<Language, Record<TranslationKeys, string>>

// Traducciones básicas para el header
const translations: Translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.menu': 'Menú',
    'nav.about': 'Sobre Nosotros',
    'nav.contact': 'Contacto',
    'nav.gallery': 'Galería',
    'header.contact': 'Contactar',
    'whatsapp.message': 'Hola, me gustaría hacer una reserva en Bar Ruso Kalashnikov'
  },
  en: {
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.gallery': 'Gallery',
    'header.contact': 'Contact',
    'whatsapp.message': 'Hello, I would like to make a reservation at Bar Ruso Kalashnikov'
  },
  ru: {
    'nav.home': 'Главная',
    'nav.menu': 'Меню',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'nav.gallery': 'Галерея',
    'header.contact': 'Связаться',
    'whatsapp.message': 'Привет, я хотел бы забронировать столик в Bar Ruso Kalashnikov'
  }
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('es')

  useEffect(() => {
    // Cargar idioma guardado en localStorage
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['es', 'en', 'ru'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: TranslationKeys): string => {
    return translations[currentLanguage][key] || key
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}