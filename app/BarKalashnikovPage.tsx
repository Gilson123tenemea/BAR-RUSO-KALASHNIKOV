"use client"

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Facebook, Instagram, Phone } from "lucide-react"
import SharedHeader from "@/components/shared-header"
import { InicioLanguageProvider, useInicioLanguage, InicioTranslationKeys} from "./translations/InicioLanguageContext"
import { useLanguage } from "@/components/LanguageContext"
import Link from "next/link"
import Image from 'next/image'
import { Star, MessageCircle } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Tipos TypeScript
interface CarouselImage {
  id: number;
  src: string;
  altKey: InicioTranslationKeys;   
  titleKey: InicioTranslationKeys;  
  descriptionKey: InicioTranslationKeys; 
}

// ✅ IMÁGENES OPTIMIZADAS CON PRIORIDADES
const CAROUSEL_IMAGES = [
  '/Imagenes/Inicio_1.webp',
  '/Imagenes/Inicio_2.webp',
  '/Imagenes/Inicio_3.webp',
  '/Imagenes/Inicio_4.webp',
  '/Imagenes/Inicio_5.webp',
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
        <ShirtsSection />
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
            src="/Imagenes/logo_bar.webp"
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
          src="/Imagenes/Inicio_logo.webp"
          alt="Bar Ruso Kalashnikov - Ambiente"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli21llxqkRBBDMVZwGVZABgZV0AakjBUXRlZ2Xx5Fxb7LFcNGULNkUgAfLQ4qp3KdI4LS9w=="
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


const carouselImages: CarouselImage[] = [
  {
    id: 1,
    src: "/Imagenes/tequilanueva.webp",
    altKey: "carousel.boxing.alt",
    titleKey: "carousel.boxing.title",
    descriptionKey: "carousel.boxing.description"
  },
  {
    id: 2,
    src: "/Imagenes/Semana2_Carrusel1.webp",
    altKey: "carousel.ufc.alt",
    titleKey: "carousel.ufc.title",
    descriptionKey: "carousel.ufc.description"
  },
  {
    id: 3,
    src: "/Imagenes/carrusel1.webp",
    altKey: "carousel.experts.alt",
    titleKey: "carousel.experts.title",
    descriptionKey: "carousel.experts.description"
  },
  //{
  //  id: 4,
  //  src: "/Imagenes/batbonny.webp",
  //  altKey: "carousel.experience.alt",
  //  titleKey: "carousel.experience.title",
  //  descriptionKey: "carousel.experience.description"
  //},
  {
    id: 5,
    src: "/Imagenes/musica.webp",
    altKey: "carousel.music.alt",
    titleKey: "carousel.music.title",
    descriptionKey: "carousel.music.description"
  }
];

const ImageCarousel: React.FC = () => {
  const { tInicio } = useInicioLanguage(); // Hook para traducciones
  const [translateX, setTranslateX] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Duplicamos el array para crear el efecto infinito perfecto
  const duplicatedImages = [...carouselImages, ...carouselImages, ...carouselImages];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setTranslateX(prev => {
        const cardWidth = 320; // 300px + 20px gap
        const newTranslate = prev - 1; // Movimiento suave pixel por pixel
        
        // Resetear cuando haya recorrido todas las imágenes originales
        if (Math.abs(newTranslate) >= cardWidth * carouselImages.length) {
          return 0;
        }
        
        return newTranslate;
      });
    }, 25); // Movimiento suave a 40fps

    return () => clearInterval(interval);
  }, [isPaused, carouselImages.length]);

  // Funciones para navegación manual
  const handlePrevious = () => {
    setTranslateX(prev => {
      const cardWidth = 320;
      const newTranslate = prev + cardWidth;
      
      // Si llegamos al inicio, ir al final
      if (newTranslate > 0) {
        return -(cardWidth * carouselImages.length - cardWidth);
      }
      
      return newTranslate;
    });
  };

  const handleNext = () => {
    setTranslateX(prev => {
      const cardWidth = 320;
      const newTranslate = prev - cardWidth;
      
      // Si llegamos al final, resetear al inicio
      if (Math.abs(newTranslate) >= cardWidth * carouselImages.length) {
        return 0;
      }
      
      return newTranslate;
    });
  };

  return (
    <div 
      className="relative w-full h-[420px] overflow-hidden rounded-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Contenedor de tarjetas con movimiento continuo */}
      <div 
        className="flex gap-5 h-full"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isPaused ? 'transform 0.5s ease-out' : 'none'
        }}
      >
        {duplicatedImages.map((image: CarouselImage, index: number) => (
          <div 
            key={`${image.id}-${index}`} 
            className="flex-shrink-0 w-[300px] h-full relative bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group"
          >
            {/* Imagen principal */}
            <div className="relative h-[280px] overflow-hidden">
              <img
                src={image.src}
                alt={tInicio(image.altKey)} // ✅ Traducido
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay gradient para texto legible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Efecto hover naranja */}
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-all duration-300" />
            </div>
            
            {/* Contenido de texto */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-3 text-orange-400 tracking-wide transform group-hover:translate-y-[-2px] transition-transform duration-300">
                {tInicio(image.titleKey)} {/* ✅ Traducido */}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {tInicio(image.descriptionKey)} {/* ✅ Traducido */}
              </p>
            </div>
            
            {/* Borde sutil que se ilumina en hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-orange-500/30 rounded-xl transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Botón de navegación izquierda - En el área del desvanecido */}
      <button
        onClick={handlePrevious}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/70 hover:bg-orange-500/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-white/10 hover:border-orange-500/50"
      >
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Botón de navegación derecha - En el área del desvanecido */}
      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/70 hover:bg-orange-500/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-white/10 hover:border-orange-500/50"
      >
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Gradientes laterales para efecto fade profesional */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black via-black/60 to-transparent pointer-events-none z-10" />
      
      {/* Indicador de estado discreto */}
      <div className="absolute top-4 right-6 z-20 opacity-50 hover:opacity-100 transition-opacity">
        <div className={`w-2 h-2 rounded-full transition-colors duration-300 shadow-lg ${
          isPaused ? 'bg-orange-500 animate-pulse' : 'bg-green-400'
        }`} />
      </div>
    </div>
  );
};

// ✅ WELCOME SECTION ACTUALIZADA
const WelcomeSection = React.memo(function WelcomeSection() {
  const { tInicio } = useInicioLanguage();

  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        {/* Header de la sección */}
        <div className="text-center mb-6">
          <div className="inline-block">
            <p className="text-orange-500 text-sm font-semibold mb-4 tracking-wider uppercase">
              {tInicio('welcome.badge')}
            </p>
            <h2 className="text-1xl md:text-1xl font mb-2 leading-tight text-gray max-w-4xl mx-auto">
              {tInicio('welcome.description')}
            </h2>
          </div>
        </div>

        {/* Carrusel traducido */}
        <div className="max-w-7xl mx-auto mb-3">
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
});

const ShirtsSection = React.memo(function ShirtsSection() {
  const { tInicio } = useInicioLanguage();
  const [selectedShirt, setSelectedShirt] = useState(0);
  
  // Datos de las camisetas
  const shirtsData = useMemo(() => [
    {
      id: 1,
      nameKey: 'shirts.classic.name' as const,
      price: "$25.00",
      originalPrice: "$41.60",
      image: "/Imagenes/CamisetaVenta1.webp",
      rating: 5,
      colors: ["#000000", "#8B4513", "#808080"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
      sale: true
    },
    {
      id: 2,
      nameKey: 'shirts.sport.name' as const,
      price: "$25.50",
      originalPrice: "$35.00",
      image: "/Imagenes/CamisetaVenta2.webp",
      rating: 4,
      colors: ["#FFFFFF", "#000000", "#FF0000"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
      sale: true
    },
    {
      id: 3,
      nameKey: 'shirts.casual.name' as const,
      price: "$20.00",
      originalPrice: "$45.00",
      image: "/Imagenes/CamisetaVenta4.webp",
      rating: 5,
      colors: ["#0066CC", "#000000", "#00CC00"],
      sizes: ["M", "L", "XL"],
      inStock: true,
      sale: false
    },
    {
      id: 4,
      nameKey: 'shirts.urban.name' as const,
      price: "$20.99",
      originalPrice: "$50.00",
      image: "/Imagenes/CamisetaVenta3.webp",
      rating: 4,
      colors: ["#333333", "#FFFFFF", "#FF6600"],
      sizes: ["S", "M", "L"],
      inStock: true,
      sale: true
    }
  ], []);

  const handleShirtSelect = useCallback((index: number) => {
    setSelectedShirt(index);
  }, []);

  const currentShirt = shirtsData[selectedShirt];

  const renderStars = useCallback((rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  }, []);

  const handleWhatsAppOrder = useCallback(() => {
    const shirtName = tInicio(currentShirt.nameKey);
    const message = encodeURIComponent(
      `${tInicio('shirts.whatsapp.message')} ${shirtName} ${tInicio('shirts.whatsapp.price')} ${currentShirt.price}. ${tInicio('shirts.whatsapp.question')}`
    );
    window.open(`https://wa.me/593995575335?text=${message}`, '_blank');
  }, [currentShirt, tInicio]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header de la sección */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-6">
            <span className="bg-orange-500 text-black px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full">
              {tInicio('shirts.badge')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {tInicio('shirts.title.part1')} <span className="text-orange-500">{tInicio('shirts.title.part2')}</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            {tInicio('shirts.description')}
          </p>
        </motion.div>

        {/* Galería Principal */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Columna Izquierda - Miniaturas */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 flex justify-center lg:block"
            >
              <div className="grid grid-cols-4 lg:grid-cols-1 gap-2 max-w-fit">
                {shirtsData.slice(0, 4).map((shirt, index) => (
                  <motion.div
                    key={shirt.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 w-20 h-24 ${
                      selectedShirt === index
                        ? 'border-orange-500 shadow-lg shadow-orange-500/30'
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                    onClick={() => handleShirtSelect(index)}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 p-1">
                      <img
                        src={shirt.image}
                        alt={tInicio(shirt.nameKey)}
                        className="w-full h-full object-cover rounded"
                      />
                      {shirt.sale && (
                        <div className="absolute top-1 right-1 bg-red-500 text-white text-[10px] px-1 py-0.5 rounded">
                          {tInicio('shirts.sale')}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Columna Central - Imagen Principal */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedShirt}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <div className="aspect-[3/4] p-8">
                      <img
                        src={currentShirt.image}
                        alt={tInicio(currentShirt.nameKey)}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    {currentShirt.sale && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-lg font-bold shadow-lg">
                        {tInicio('shirts.sale')}
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="flex items-center gap-1">
                        {renderStars(currentShirt.rating)}
                        <span className="text-white text-sm ml-2">
                          ({currentShirt.rating}.0)
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Columna Derecha - Información del Producto */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-3"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedShirt}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
                >
                  {/* Título y Rating */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {tInicio(currentShirt.nameKey)}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {renderStars(currentShirt.rating)}
                      </div>
                      <span className="text-gray-400 text-sm">
                        ({currentShirt.rating} {tInicio('shirts.stars')})
                      </span>
                    </div>
                  </div>

                  {/* Precios */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-orange-500">
                        {currentShirt.price}
                      </span>
                      {currentShirt.originalPrice && (
                        <span className="text-xl text-gray-500 line-through">
                          {currentShirt.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-green-400 text-sm mt-1">
                      ✓ {tInicio('shirts.inStock')} 
                    </p>
                  </div>

                  {/* Colores - Oculto */}
                  <div className="mb-6" style={{ display: 'none' }}>
                    <h4 className="text-white font-semibold mb-3">{tInicio('shirts.color')}:</h4>
                    <div className="flex gap-2">
                      {currentShirt.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-full border-2 border-gray-600 cursor-pointer hover:border-orange-500 transition-colors"
                          style={{ backgroundColor: color }}
                          title={`${tInicio('shirts.color')} ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Tallas */}
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">{tInicio('shirts.size')}:</h4>
                    <div className="flex gap-2 flex-wrap">
                      {currentShirt.sizes.map((size) => (
                        <button
                          key={size}
                          className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-orange-500 hover:text-orange-500 transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Botón de WhatsApp */}
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-green-500/25 hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {tInicio('shirts.orderWhatsapp')}
                  </button>

                  {/* Información adicional */}
                  <div className="mt-6 text-center">
                    <p className="text-gray-400 text-sm">
                      💫 {tInicio('shirts.premiumQuality')}<br/>
                      🚚 {tInicio('shirts.fastShipping')}<br/>
                      💝 {tInicio('shirts.satisfaction')}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>
        </div>

        {/* Indicadores inferiores para móvil */}
        <div className="flex justify-center mt-8 lg:hidden">
          <div className="flex gap-2">
            {shirtsData.slice(0, 4).map((_, index) => (
              <button
                key={index}
                onClick={() => handleShirtSelect(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  selectedShirt === index
                    ? 'bg-orange-500'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
// ✅ MENU SECTION OPTIMIZADO
const MenuSection = React.memo(function MenuSection() {
  const { tInicio } = useInicioLanguage()

  const menuItems = useMemo(() => [
    { name: tInicio('menu.shots'), src: "/Imagenes/Shots del Ruso.webp" },
    { name: tInicio('menu.flamed'), src: "/Imagenes/Cocteles_Flameados.webp" },
    { name: tInicio('menu.specials'), src: "/Imagenes/Especiales.webp" },
    { name: tInicio('menu.beers'), src: "/Imagenes/Cervezas_Artesanales.webp" },
    { name: tInicio('menu.nonAlcoholic'), src: "/Imagenes/Cocteles_sin_alcohol.webp" },
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
              src="/Imagenes/local.webp"
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
    "/Imagenes/Instagram_1.webp",
    "/Imagenes/Instagram_2.webp",
    "/Imagenes/Instagram_3.webp",
    "/Imagenes/Instagram_4.webp",
  ], [])

  return (
    <footer id="contacto" className="bg-black py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center relative">
                <Image
                  src="/Imagenes/logo_bar.webp"
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
                <span>15:00 - 02:00</span>
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