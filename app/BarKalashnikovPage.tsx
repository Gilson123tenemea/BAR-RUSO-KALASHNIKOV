"use client"

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Facebook, Instagram, Phone } from "lucide-react"
import SharedHeader from "@/components/shared-header"
import { InicioLanguageProvider, useInicioLanguage } from "./translations/InicioLanguageContext"
import { useLanguage } from "@/components/LanguageContext"
import Link from "next/link"
import Image from 'next/image'

// ✅ IMÁGENES OPTIMIZADAS CON PRIORIDADES
const CAROUSEL_IMAGES = [
  '/Imagenes/Inicio_1.jpg',
  '/Imagenes/Inicio_2.jpg',
  '/Imagenes/Inicio_3.jpg',
  '/Imagenes/Inicio_4.jpg',
  '/Imagenes/Inicio_5.jpg'
]

// 🚀 HOOK DE PRECARGA SUPER OPTIMIZADO
function useOptimizedImagePreloader(imageUrls: string[], immediate = false) {
  const [loadedCount, setLoadedCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState<string[]>([])
  const loadedImagesRef = useRef(new Set<string>())
  const progressRef = useRef(0)
  
  // Evitar re-renders con useCallback estable
  const updateProgress = useCallback(() => {
    setLoadedCount(loadedImagesRef.current.size)
    progressRef.current = (loadedImagesRef.current.size / imageUrls.length) * 100
  }, [imageUrls.length])

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setIsLoading(false)
      return
    }

    console.log(`🚀 PRECARGA OPTIMIZADA de ${imageUrls.length} imágenes`)
    setIsLoading(true)
    setLoadedCount(0)
    setErrors([])
    loadedImagesRef.current.clear()
    progressRef.current = 0

    // PRECARGA CON POOL DE CONEXIONES (máximo 3 simultáneas para móvil)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const maxConcurrent = isMobile ? 2 : 4
    
    let loadingQueue = [...imageUrls]
    let activeLoads = 0
    let completed = 0

    const processNext = () => {
      while (activeLoads < maxConcurrent && loadingQueue.length > 0) {
        const url = loadingQueue.shift()!
        activeLoads++

        const img = new window.Image()
        
        // Configuración optimizada para móvil
        if (immediate) {
          img.fetchPriority = 'high'
          img.loading = 'eager'
        }
        
        // Configurar tamaños para móvil
        if (isMobile) {
          img.sizes = '100vw'
        }

        img.onload = () => {
          loadedImagesRef.current.add(url)
          activeLoads--
          completed++
          
          // Batch update - solo actualizar cada 2 imágenes o al final
          if (completed % 2 === 0 || completed === imageUrls.length) {
            updateProgress()
          }
          
          if (completed === imageUrls.length) {
            console.log(`✅ PRECARGA COMPLETA: ${completed}/${imageUrls.length}`)
            setIsLoading(false)
          } else {
            processNext()
          }
        }

        img.onerror = () => {
          console.error(`❌ Error en imagen:`, url.split('/').pop())
          setErrors(prev => [...prev, url])
          activeLoads--
          completed++
          
          if (completed === imageUrls.length) {
            setIsLoading(false)
          } else {
            processNext()
          }
        }

        img.src = url
      }
    }

    processNext()
  }, immediate ? [] : [imageUrls.length, updateProgress])

  return { 
    loadedCount, 
    isLoading, 
    errors,
    progress: progressRef.current,
    loadedImages: loadedImagesRef.current
  }
}

// 🎯 HOOK DE ANIMACIÓN COUNTER OPTIMIZADO
function useCountAnimation(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const hasAnimatedRef = useRef(false)
  const animationRef = useRef<number | undefined>(undefined)

  const startAnimation = useCallback(() => {
    if (hasAnimatedRef.current) return
    hasAnimatedRef.current = true

    const startTime = performance.now()
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing suave
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(end * easeOutQuart)
      
      setCount(currentValue)
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }
    
    animationRef.current = requestAnimationFrame(animate)
  }, [end, duration])

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return { count, startAnimation }
}

// 🚀 COMPONENTE PRINCIPAL
export default function BarKalashnikovPage() {
  return (
    <InicioLanguageProvider>
      <BarKalashnikovContent />
    </InicioLanguageProvider>
  )
}

function BarKalashnikovContent() {
  const [loading, setLoading] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [readyToShow, setReadyToShow] = useState(false)

  // Precarga optimizada del carrusel
  const { loadedCount, isLoading: carouselLoading, progress } = useOptimizedImagePreloader(CAROUSEL_IMAGES, true)

  // Control de loading más inteligente
  useEffect(() => {
    let minLoadingTime: NodeJS.Timeout
    let allReady = false

    // Tiempo mínimo de loading para evitar flashes
    const minTime = setTimeout(() => {
      if (allReady) {
        setLoading(false)
      }
    }, 2000)

    // Verificar si todo está listo
    if (!carouselLoading && loadedCount >= 3) { // Al menos las primeras 3 imágenes
      allReady = true
      setReadyToShow(true)
      
      if (minTime) {
        clearTimeout(minTime)
        // Transición suave después de un breve delay
        setTimeout(() => setLoading(false), 300)
      }
    }

    return () => {
      if (minTime) clearTimeout(minTime)
    }
  }, [carouselLoading, loadedCount])

  // Scroll optimizado con throttle
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 100)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen
            key="loading"
            progress={progress}
            loadedCount={loadedCount}
            total={CAROUSEL_IMAGES.length}
            readyToShow={readyToShow}
          />
        )}
      </AnimatePresence>

      {/* Contenido principal con transición suave */}
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={loading ? "invisible" : "visible"}
      >
        <SharedHeader scrolled={scrolled} />
        <HeroSection />
        <WelcomeSection />
        <MenuSection />
        <BarInteriorSection />
        <StatsSection />
        <OptimizedLocalSection preloadedImages={new Set(loadedCount >= CAROUSEL_IMAGES.length ? CAROUSEL_IMAGES : [])} />
        <Footer />
        <WhatsAppButton />
      </motion.div>
    </div>
  )
}

// ✅ LOADING SCREEN MEJORADO
function LoadingScreen({ 
  progress, 
  loadedCount, 
  total, 
  readyToShow 
}: { 
  progress: number
  loadedCount: number
  total: number
  readyToShow: boolean
}) {
  const { tInicio } = useInicioLanguage()

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-50 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo animado más suave */}
        <motion.div
          animate={{
            rotate: 360,
            scale: readyToShow ? [1, 1.2, 1] : [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-32 h-32 mx-auto mb-8 relative"
        >
          <Image
            src="/Imagenes/logo_bar.png"
            alt="Bar Ruso Kalashnikov"
            fill
            className="object-contain rounded-full"
            priority
            quality={90}
          />
          {/* Anillo de progreso */}
          <div className="absolute inset-0 w-full h-full rounded-full border-4 border-orange-500/20">
            <div 
              className="absolute inset-0 w-full h-full rounded-full border-4 border-t-orange-500 border-r-transparent border-b-transparent border-l-transparent transition-transform duration-300"
              style={{
                transform: `rotate(${progress * 3.6}deg)`
              }}
            />
          </div>
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl font-bold text-orange-500 mb-6"
        >
          {tInicio('loading.title')}
        </motion.h1>

        {/* Barra de progreso moderna */}
        <div className="max-w-sm mx-auto mb-6">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-2 bg-gray-800 rounded-full overflow-hidden relative"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
            </motion.div>
          </motion.div>
        </div>

        {/* Estado dinámico */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400"
        >
          {readyToShow ? (
            <motion.p
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-green-400 font-semibold"
            >
              ✨ {tInicio('loading.preparing')}
            </motion.p>
          ) : (
            <p>
              {tInicio('loading.loading')} {loadedCount}/{total} • {Math.round(progress)}%
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

// ✅ HERO SECTION OPTIMIZADO
const HeroSection = React.memo(function HeroSection() {
  const { tInicio } = useInicioLanguage()

  return (
    <section id="inicio" className="relative h-[600px] flex items-center">
      {/* Background optimizado */}
      <div className="absolute inset-0">
        <Image
          src="/Imagenes/Inicio_logo.jpg"
          alt="Bar Ruso Kalashnikov - Ambiente"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli21llxqkRBBDMVZwGVZABgZV0AakjBUXRlZ2Xx5Fxb7LFcNGULNkUgAfLQ4qp3KdI4LS9w=="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="max-w-lg"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
            {tInicio('hero.title')}
            <br />
            <span className="text-orange-500">{tInicio('hero.subtitle')}</span>
          </h1>

          <p className="text-gray-300 text-sm mb-8 max-w-md leading-relaxed">
            {tInicio('hero.description')}
          </p>

          <Link href="/sobre-nosotros">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-black px-8 py-3 text-sm font-semibold hover:bg-orange-600 transition-all duration-300 rounded-md shadow-lg hover:shadow-orange-500/25"
            >
              {tInicio('hero.moreInfo')}
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Redes sociales */}
      <div className="absolute bottom-6 right-6 flex space-x-4 z-20">
        <motion.a
          whileHover={{ scale: 1.1, y: -2 }}
          href="https://facebook.com/barrusokalashnikov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full bg-white/10 backdrop-blur-sm"
        >
          <Facebook className="w-5 h-5" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, y: -2 }}
          href="https://www.instagram.com/explore/locations/764588696/bar-ruso-kalashnikov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full bg-white/10 backdrop-blur-sm"
        >
          <Instagram className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  )
})

// ✅ WELCOME SECTION OPTIMIZADO
const WelcomeSection = React.memo(function WelcomeSection() {
  const { tInicio } = useInicioLanguage()

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen optimizada */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-2xl overflow-hidden group"
          >
            <Image
              src="/Imagenes/cerveza_inicio.jpg"
              alt="Cerveza artesanal en copa helada"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Contenido */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-orange-500 text-sm font-semibold mb-4 tracking-wider uppercase"
            >
              {tInicio('welcome.badge')}
            </motion.p>
            
            <h2 className="text-3xl font-bold mb-6 leading-tight">
              {tInicio('welcome.title')}
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              {tInicio('welcome.description')}
            </p>
            
            <Link href="/galeria">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-black px-8 py-4 font-semibold hover:bg-orange-600 transition-all duration-300 rounded-md shadow-lg hover:shadow-orange-500/25"
              >
                {tInicio('welcome.button')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

// ✅ MENU SECTION OPTIMIZADO
const MenuSection = React.memo(function MenuSection() {
  const { tInicio } = useInicioLanguage()

  const menuItems = useMemo(() => [
    { name: tInicio('menu.shots'), src: "/Imagenes/Shots del Ruso.png" },
    { name: tInicio('menu.flamed'), src: "/Imagenes/Cocteles_Flameados.png" },
    { name: tInicio('menu.specials'), src: "/Imagenes/Especiales.png" },
    { name: tInicio('menu.beers'), src: "/Imagenes/Cervezas_Artesanales.png" },
    { name: tInicio('menu.nonAlcoholic'), src: "/Imagenes/Cocteles_sin_alcohol.png" },
  ], [tInicio])

  return (
    <section id="menu" className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">{tInicio('menu.title')}</h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg">
            {tInicio('menu.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center group cursor-pointer"
            >
              <div className="rounded-lg p-6 mb-4 h-72 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-contain"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 20vw"
                    quality={85}
                  />
                </div>
              </div>
              <Link href="/menu">
                <button className="bg-orange-500 text-black px-6 py-3 font-semibold hover:bg-orange-600 transition-colors w-full rounded-md shadow-lg hover:shadow-orange-500/25">
                  {item.name}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

// ✅ BAR INTERIOR SECTION OPTIMIZADO
const BarInteriorSection = React.memo(function BarInteriorSection() {
  const { tInicio } = useInicioLanguage()

  return (
    <section className="py-16 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative w-full h-96 rounded-2xl overflow-hidden group">
            <Image
              src="/Imagenes/local.jpeg"
              alt="Interior del Bar Ruso Kalashnikov mostrando decoración y mesas"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">{tInicio('barInterior.title')}</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {tInicio('barInterior.description')}
          </p>
        </motion.div>
      </div>
    </section>
  )
})

// ✅ STATS SECTION OPTIMIZADO
const StatsSection = React.memo(function StatsSection() {
  const { tInicio } = useInicioLanguage()

  const rating = useCountAnimation(44, 2000)
  const reviews = useCountAnimation(127, 2500)
  const cocktails = useCountAnimation(50, 2200)
  const followers = useCountAnimation(3909, 3000)

  const stats = useMemo(() => [
    { hook: rating, display: "4.4", label: tInicio('stats.rating') },
    { hook: reviews, display: "127+", label: tInicio('stats.reviews') },
    { hook: cocktails, display: "50+", label: tInicio('stats.cocktails') },
    { hook: followers, display: "3909", label: tInicio('stats.followers') },
  ], [rating, reviews, cocktails, followers, tInicio])

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: index * 0.1,
                  duration: 0.6,
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
              onViewportEnter={() => stat.hook.startAnimation()}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
                {index === 0
                  ? (stat.hook.count / 10).toFixed(1)
                  : index === 1
                    ? `${stat.hook.count}+`
                    : index === 2
                      ? `${stat.hook.count}+`
                      : stat.hook.count}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

// ✅ LOCAL SECTION OPTIMIZADO
const OptimizedLocalSection = React.memo(function OptimizedLocalSection({ 
  preloadedImages 
}: { 
  preloadedImages: Set<string> 
}) {
  const { tInicio } = useInicioLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentIndex(prev => {
      const next = (prev + 1) % CAROUSEL_IMAGES.length
      if (preloadedImages.has(CAROUSEL_IMAGES[next])) {
        return next
      }
      return prev
    })
  }, [preloadedImages])

  useEffect(() => {
    if (preloadedImages.size < CAROUSEL_IMAGES.length) return

    const interval = setInterval(nextImage, 4000)
    return () => clearInterval(interval)
  }, [nextImage, preloadedImages.size])

  return (
    <section id="sobre-nosotros" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="w-full h-96 rounded-2xl relative overflow-hidden">
              {preloadedImages.size < CAROUSEL_IMAGES.length ? (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center rounded-2xl">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mb-4 mx-auto"></div>
                    <p className="text-gray-400 text-sm">
                      Galería lista: {preloadedImages.size}/{CAROUSEL_IMAGES.length}
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <Image
                    src={CAROUSEL_IMAGES[currentIndex]}
                    alt={`Vista del local ${currentIndex + 1}`}
                    fill
                    className="object-cover rounded-2xl transition-opacity duration-500"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={currentIndex === 0}
                  />

                  {/* Indicadores */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {CAROUSEL_IMAGES.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'bg-orange-500 scale-125' : 'bg-white/30 hover:bg-white/50'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Ver imagen ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Botones de navegación */}
                  <button
                    onClick={() => setCurrentIndex(prev => prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                    aria-label="Imagen anterior"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setCurrentIndex(prev => (prev + 1) % CAROUSEL_IMAGES.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                    aria-label="Imagen siguiente"
                  >
                    →
                  </button>
                </>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-orange-500 text-sm font-semibold mb-4 tracking-wider uppercase">
              {tInicio('local.badge')}
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              {tInicio('local.description1')}
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              {tInicio('local.description2')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

// ✅ FOOTER OPTIMIZADO
const Footer = React.memo(function Footer() {
  const { tInicio } = useInicioLanguage()
  const { t } = useLanguage()
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const [isOpen, setIsOpen] = useState<boolean>(false)

  type ScheduleDay = {
    open: number;
    close: number;
  } | null;

  type Schedule = {
    [key: number]: ScheduleDay;
  };

  const schedule: Schedule = useMemo(() => ({
    1: { open: 15, close: 24 },
    2: { open: 15, close: 24 },
    3: { open: 15, close: 24 },
    4: { open: 15, close: 24 },
    5: { open: 15, close: 26 },
    6: { open: 15, close: 24 },
    0: null
  }), [])

  const getEcuadorTime = useCallback((): Date => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utc + (-5 * 3600000));
  }, [])

  const checkIfOpen = useCallback((time: Date): boolean => {
    const dayOfWeek: number = time.getDay();
    const hours: number = time.getHours();
    const minutes: number = time.getMinutes();
    const currentTimeInMinutes: number = hours * 60 + minutes;

    const todaySchedule: ScheduleDay = schedule[dayOfWeek];

    if (!todaySchedule) {
      return false;
    }

    const openTime: number = todaySchedule.open * 60;
    let closeTime: number = todaySchedule.close * 60;

    if (todaySchedule.close > 24) {
      if (currentTimeInMinutes >= openTime || currentTimeInMinutes <= (closeTime - 24 * 60)) {
        return true;
      }
    } else {
      if (currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime) {
        return true;
      }
    }

    return false;
  }, [schedule])

  useEffect(() => {
    const updateTime = () => {
      const ecuadorTime = getEcuadorTime();
      setCurrentTime(ecuadorTime);
      setIsOpen(checkIfOpen(ecuadorTime));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [getEcuadorTime, checkIfOpen]);

  const instagramImages = useMemo(() => [
    "/Imagenes/Instagram_1.png",
    "/Imagenes/Instagram_2.png",
    "/Imagenes/Instagram_3.png",
    "/Imagenes/Instagram_4.png"
  ], [])

  return (
    <footer id="contacto" className="bg-black py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center relative">
                <Image
                  src="/Imagenes/logo_bar.png"
                  alt="Bar Ruso Kalashnikov"
                  fill
                  className="object-contain rounded-full"
                  loading="lazy"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Bar Ruso Kalashnikov</h3>
            <p className="text-gray-400 text-sm mb-6">
              {tInicio('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/barrusokalashnikov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/explore/locations/764588696/bar-ruso-kalashnikov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{tInicio('footer.pages')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-white">{t('nav.home')}</a></li>
              <li><a href="/sobre-nosotros" className="hover:text-white">{t('nav.about')}</a></li>
              <li><a href="/menu" className="hover:text-white">{t('nav.menu')}</a></li>
              <li><a href="/contacto" className="hover:text-white">{t('nav.contact')}</a></li>
              <li><a href="/galeria" className="hover:text-white">{t('nav.gallery')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{tInicio('footer.schedule')}</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex justify-between">
                <span>{tInicio('footer.monday')}</span>
                <span>15:00 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span>{tInicio('footer.friday')}</span>
                <span>15:00 - 02:00</span>
              </div>
              <div className="flex justify-between">
                <span>{tInicio('footer.saturday')}</span>
                <span>15:00 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span>{tInicio('footer.sunday')}</span>
                <span className="text-red-500">{tInicio('footer.closed')}</span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-gray-900 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-semibold ${isOpen ? 'text-green-500' : 'text-red-500'}`}>
                    {isOpen ? tInicio('footer.openNow') : tInicio('footer.closedNow')}
                  </p>
                  <p className="text-xs text-gray-400">
                    {tInicio('footer.currentTime')}: {currentTime.toLocaleTimeString('es-EC', {
                      timeZone: 'America/Guayaquil',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{tInicio('footer.instagram')}</h4>
            <div className="grid grid-cols-2 gap-2">
              {instagramImages.map((src, index) => (
                <div
                  key={index}
                  className="rounded overflow-hidden aspect-square relative"
                >
                  <Image
                    src={src}
                    alt={`Instagram ${index + 1}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 25vw, 12vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          {tInicio('footer.copyright')}
        </div>
      </div>
    </footer>
  )
})

// ✅ WHATSAPP BUTTON OPTIMIZADO
const WhatsAppButton = React.memo(function WhatsAppButton() {
  const { t } = useLanguage()
  const phoneNumber = "593995575335"

  const handleWhatsAppClick = useCallback(() => {
    const message = t('whatsapp.message')
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }, [phoneNumber, t])

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-30"
    >
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
        aria-label="Contactar por WhatsApp"
      >
        <Phone className="w-6 h-6 text-white" />
      </button>
    </motion.div>
  )
})