// app/galeria/GaleriaPageClient.tsx
"use client"

import React from "react";
import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { motion, AnimatePresence} from "framer-motion"
import { Play, Calendar, Instagram, Facebook, Phone, X } from "lucide-react"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"
import Image from 'next/image'
import { useGaleriaLanguage, getTranslatedGalleryItemTitle } from './GaleriaLanguage'
import { ChevronLeft, ChevronRight } from 'lucide-react';


// Optimización: Mover datos fuera del componente para evitar recreación
// Precargar todas las imágenes para máxima fluidez
const galleryItems = [
  { type: "video", title: "Preparación de Cócteles", videoSrc: "/videos/Video-1.webm", thumbnail: "/Imagenes/imagen_1_video1.webp" },
  { type: "photo", title: "Ambiente Nocturno", imageSrc: "/Imagenes/galeria_foto_1.webp" },
  { type: "video", title: "Cócteles Flameados", videoSrc: "/videos/Video-2.webm", thumbnail: "/Imagenes/imagen_2_video2.webp" },
  { type: "photo", title: "Nuestras Visitas", imageSrc: "/Imagenes/galeria_foto_2.webp" },
  { type: "video", title: "Especiales", videoSrc: "/videos/Video-3.webm", thumbnail: "/Imagenes/imagen_3_video3.webp" },
  { type: "photo", title: "Interior Renovado", imageSrc: "/Imagenes/galeria_foto_3.webp" },
  { type: "video", title: "Preparación de Cócteles Especiales", videoSrc: "/videos/Video-4.webm", thumbnail: "/Imagenes/imagen_4_video4.webp" },
  { type: "video", title: "Ambiente de Fin de Semana", videoSrc: "/videos/Video-5.webm", thumbnail: "/Imagenes/imagen_5_video5.webp" },
  { type: "video", title: "Equipo de Trabajo", videoSrc: "/videos/Video-6.webm", thumbnail: "/Imagenes/imagen_6_video6.webp" },
  { type: "video", title: "Momentos Especiales", videoSrc: "/videos/Video-7.webm", thumbnail: "/Imagenes/imagen_7_video7.webp" },
  { type: "photo", title: "Decoración Especial", imageSrc: "/Imagenes/galeria_foto_4.webp" },
  { type: "photo", title: "Cervezas", imageSrc: "/Imagenes/galeria_foto_5.webp" },
] as const

const INITIAL_VISIBLE_ITEMS = 9
const LOAD_MORE_INCREMENT = 6

export default function GaleriaPage() {
  const { tGaleria, currentLanguage } = useGaleriaLanguage()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="min-h-screen bg-black text-white"
    >
      <SharedHeader />
      <HeroSection tGaleria={tGaleria} />
      <HeroSectioncarrusel tGaleria={tGaleria} />
      <GallerySection tGaleria={tGaleria} currentLanguage={currentLanguage} />
      <Footer tGaleria={tGaleria} />
      <WhatsAppButton tGaleria={tGaleria} />
    </motion.div>
  )
}

function HeroSection({ tGaleria }: { tGaleria: (key: any) => string }) {
  return (
    
    <section className="relative h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/Imagenes/galeria logo.webp"
          alt="Galería Bar Ruso"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>

      <div className="container mx-auto px-4 relative z-20 pt-24">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1
          }}
          className="max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2
            }}
            className="text-5xl md:text-4xl font-bold mb-6 text-[#FF9D00]"
          >
            {tGaleria('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.35
            }}
            className="text-gray-300 text-lg mb-8 max-w-md"
          >
            {tGaleria('hero.subtitle')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

interface HeroSectionProps {
  tGaleria: (key: any) => string;
}

const carouselImages = [
  {
    src: "/Imagenes/carruselgaleria1.webp",
    fallback: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop"
  },
  {
    src: "/Imagenes/carruselgaleria2.webp", 
    fallback: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop"
  },
  {
    src: "/Imagenes/carruselgaleria3.webp",
    fallback: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  {
    src: "/Imagenes/carruselgaleria4.webp",
    fallback: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&h=300&fit=crop"
  },
  {
    src: "/Imagenes/carruselgaleria5.webp",

    fallback: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
  }
];

function HeroSectioncarrusel({ tGaleria }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);

  // Función para avanzar al siguiente slide
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % 5);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  // Función para retroceder al slide anterior
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + 5) % 5);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  // Auto-play del carrusel cada 4 segundos
  useEffect(() => {
    if (!isAutoPlay || isDragging || isTransitioning) return;
    
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, nextSlide, isDragging, isTransitioning]);

  // Función para calcular las posiciones de las 5 imágenes
  const getImagePositions = () => {
    const positions = [];
    const totalImages = 5;
    
    for (let i = 0; i < totalImages; i++) {
      const relativeIndex = (i - currentIndex + totalImages) % totalImages;
      
      // Posiciones específicas para las 5 imágenes
      let transform = '';
      let scale = 1;
      let opacity = 1;
      let zIndex = 10;
      let blur = 0;
      
      switch (relativeIndex) {
        case 0: // Imagen central (principal)
          transform = 'translateX(0) translateZ(200px)';
          scale = 1.2;
          opacity = 1;
          zIndex = 50;
          blur = 0;
          break;
        case 1: // Imagen derecha
          transform = 'translateX(280px) translateZ(0px) rotateY(-25deg)';
          scale = 0.8;
          opacity = 0.7;
          zIndex = 30;
          blur = 1;
          break;
        case 2: // Imagen extrema derecha
          transform = 'translateX(480px) translateZ(-100px) rotateY(-45deg)';
          scale = 0.6;
          opacity = 0.4;
          zIndex = 10;
          blur = 2;
          break;
        case 3: // Imagen extrema izquierda
          transform = 'translateX(-480px) translateZ(-100px) rotateY(45deg)';
          scale = 0.6;
          opacity = 0.4;
          zIndex = 10;
          blur = 2;
          break;
        case 4: // Imagen izquierda
          transform = 'translateX(-280px) translateZ(0px) rotateY(25deg)';
          scale = 0.8;
          opacity = 0.7;
          zIndex = 30;
          blur = 1;
          break;
      }
      
      positions.push({
        ...carouselImages[i],
        transform,
        scale,
        opacity,
        zIndex,
        blur,
        isCenter: relativeIndex === 0,
        index: i
      });
    }
    
    return positions;
  };

  // Manejo de eventos de mouse/touch
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setIsAutoPlay(false);
    startXRef.current = clientX;
    currentXRef.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    currentXRef.current = clientX;
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    const deltaX = currentXRef.current - startXRef.current;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    setIsDragging(false);
    setTimeout(() => setIsAutoPlay(true), 2000);
  };

  // Eventos de mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd();
    }
  };

  // Eventos de touch
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  return (
    <section className="relative h-[700px] flex flex-col items-center overflow-hidden bg-black">
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center mb-12 pt-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-white">{tGaleria('gallery.title')}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          {tGaleria('gallery.subtitle')}
        </p>
      </motion.div>

      {/* Contenedor del carrusel */}
      <div 
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ perspective: '1200px' }}
      >
        {/* Carrusel de 5 imágenes */}
        <div 
          className="relative w-full max-w-7xl mx-auto h-[400px] md:h-[450px] flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {getImagePositions().map((image, idx) => (
            <div
              key={image.index}
              className="absolute transition-all duration-700 ease-out cursor-pointer"
              style={{
                transform: image.transform,
                opacity: image.opacity,
                zIndex: image.zIndex,
                filter: `blur(${image.blur}px)`,
                width: '300px',
                height: '400px'
              }}
              onClick={() => {
                if (!image.isCenter) {
                  setCurrentIndex(image.index);
                  setIsAutoPlay(false);
                  setTimeout(() => setIsAutoPlay(true), 3000);
                }
              }}
            >
              <div className="relative w-full h-full group">
                {/* Carta de imagen */}
                <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${
                  image.isCenter 
                    ? 'bg-gradient-to-t from-gray-800 to-gray-700 border-2 border-amber-400/50 shadow-amber-400/20' 
                    : 'bg-gray-800 border border-gray-600'
                }`}>
                  <img
                    src={image.src}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading={image.isCenter ? 'eager' : 'lazy'}
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      e.currentTarget.src = image.fallback;
                    }}
                  />
                  
                  {/* Overlay dinámico */}
                  <div className={`absolute inset-0 transition-all duration-700 ${
                    image.isCenter
                      ? 'bg-gradient-to-t from-black/70 via-transparent to-black/20'
                      : 'bg-gradient-to-t from-black/60 via-black/20 to-transparent'
                  }`}></div>


                  {/* Indicador de imagen activa */}
                  {image.isCenter && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full shadow-lg animate-pulse"></div>
                  )}

                  {/* Efecto de brillo para imagen activa */}
                  {image.isCenter && (
                    <div className="absolute inset-0 rounded-2xl border border-amber-400/40 shadow-[0_0_30px_rgba(251,191,36,0.3)] animate-pulse"></div>
                  )}

                  {/* Hover effect para imágenes no centrales */}
                  {!image.isCenter && (
                    <div className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors duration-300 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100">

                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 disabled:opacity-50 border border-white/20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 disabled:opacity-50 border border-white/20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicador de swipe (solo móvil) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 md:hidden">
   
        </div>
      </div>

      {/* Estilos CSS personalizados */}
      <style jsx>{`
        @keyframes spin-wheel {
          0% { transform: rotate(0deg) scale(0.8); opacity: 0.5; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 0.7; }
          100% { transform: rotate(360deg) scale(1); opacity: 1; }
        }
        
        .animate-spin-wheel {
          animation: spin-wheel 2s ease-out forwards;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}

// Hook para precargar imágenes
function useImagePreloader() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Precargar todas las imágenes inmediatamente
    const imagesToPreload = galleryItems.map(item =>
      item.type === "video" ? item.thumbnail : item.imageSrc
    )

    const preloadPromises = imagesToPreload.map(src => {
      return new Promise<string>((resolve, reject) => {
        const img = new window.Image()
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(src))
          resolve(src)
        }
        img.onerror = () => {
          // Si falla, usar imagen por defecto
          setLoadedImages(prev => new Set(prev).add(src))
          resolve(src)
        }
        img.src = src
      })
    })

    // Precargar todas las imágenes sin esperar
    Promise.allSettled(preloadPromises)
  }, [])

  return loadedImages
}

// Componente ultra-optimizado sin lazy loading para máxima fluidez
interface GalleryItemProps {
  item: typeof galleryItems[number];
  index: number;
  onClick: (videoSrc: string) => void;
  isImageLoaded: boolean;
  tGaleria: (key: any) => string;
  currentLanguage: any;
}

const GalleryItem = React.memo(function GalleryItem({
  item,
  index,
  onClick,
  isImageLoaded,
  tGaleria,
  currentLanguage
}: GalleryItemProps) {
  const handleClick = useCallback(() => {
    if (item.type === "video" && item.videoSrc) {
      onClick(item.videoSrc)
    }
  }, [item, onClick])

  const imageSrc = item.type === "video" ? item.thumbnail : item.imageSrc

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-orange-500/50 cursor-pointer transition-[border-color] duration-200"
      onClick={handleClick}
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
    >
      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">

        {/* Imagen principal - sin lazy loading para máxima fluidez */}
        <Image
          src={imageSrc}
          alt={getTranslatedGalleryItemTitle(item.title, currentLanguage)}
          fill
          className={`object-cover transition-all duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'
            } ${item.type === "photo" ? 'group-hover:scale-105 transition-transform duration-500' : ''}`}
          priority={index < 9} // Priorizar las primeras 9 imágenes
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />

        {/* Overlay para videos - solo si la imagen está cargada */}
        {item.type === "video" && isImageLoaded && (
          <>
            <div className="absolute inset-0 bg-black/20"></div>
            {/* Botón de play optimizado */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-16 h-16 bg-orange-500/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </>
        )}

        {/* Badge optimizado - solo si la imagen está cargada */}
        {isImageLoaded && (
          <div className="absolute top-4 right-4 z-20">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${item.type === "video"
                  ? "bg-red-500/90 text-white"
                  : "bg-blue-500/90 text-white"
                }`}
            >
              {item.type === "video"
                ? tGaleria('gallery.videoBadge')
                : tGaleria('gallery.photoBadge')
              }
            </span>
          </div>
        )}

        {/* Indicador de carga minimalista */}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors duration-200">
          {getTranslatedGalleryItemTitle(item.title, currentLanguage)}
        </h3>
      </div>
    </motion.div>
  )
})

function GallerySection({ tGaleria, currentLanguage }: {
  tGaleria: (key: any) => string;
  currentLanguage: any;
}) {
  const [filter, setFilter] = useState<"all" | "video" | "photo">("all")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [visibleItems, setVisibleItems] = useState(INITIAL_VISIBLE_ITEMS)
  const loadedImages = useImagePreloader()

  const filteredItems = useMemo(() =>
    galleryItems.filter((item) => filter === "all" || item.type === filter),
    [filter]
  )

  const handleVideoClick = useCallback((videoSrc: string) => {
    setSelectedVideo(videoSrc)
  }, [])

  const closeVideoModal = useCallback(() => {
    setSelectedVideo(null)
  }, [])

  const loadMoreItems = useCallback(() => {
    setVisibleItems(prev => prev + LOAD_MORE_INCREMENT)
  }, [])

  useEffect(() => {
    setVisibleItems(INITIAL_VISIBLE_ITEMS)
  }, [filter])

  const visibleFilteredItems = useMemo(() =>
    filteredItems.slice(0, visibleItems),
    [filteredItems, visibleItems]
  )

  return (
    <>
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          

          {/* Filtros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <div className="flex space-x-4 bg-gray-900/50 p-2 rounded-lg">
              {[
                { key: "all", label: tGaleria('gallery.filter.all') },
                { key: "video", label: tGaleria('gallery.filter.videos') },
                { key: "photo", label: tGaleria('gallery.filter.photos') },
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() =>
                    setFilter(filterOption.key as "all" | "video" | "photo")
                  }
                  className={`px-6 py-2 rounded-md transition-all duration-200 ${filter === filterOption.key
                      ? "bg-orange-500 text-black font-semibold"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                >
                  {filterOption.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid de Galería */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleFilteredItems.map((item, index) => {
              const imageSrc = item.type === "video" ? item.thumbnail : item.imageSrc
              const isImageLoaded = loadedImages.has(imageSrc)

              return (
                <GalleryItem
                  key={`${item.type}-${item.title}-${index}`}
                  item={item}
                  index={index}
                  onClick={handleVideoClick}
                  isImageLoaded={isImageLoaded}
                  tGaleria={tGaleria}
                  currentLanguage={currentLanguage}
                />
              )
            })}
          </div>

          {/* Botón cargar más */}
          {visibleItems < filteredItems.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mt-8"
            >
              <button
                onClick={loadMoreItems}
                className="bg-orange-500 text-black px-8 py-3 font-semibold hover:bg-orange-600 transition-colors rounded-md"
              >
                {tGaleria('gallery.loadMore')} ({filteredItems.length - visibleItems} {tGaleria('gallery.remaining')})
              </button>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold mb-4">{tGaleria('gallery.bePartTitle')}</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {tGaleria('gallery.bePartSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu">
                <button className="bg-orange-500 text-black px-8 py-3 font-semibold hover:bg-orange-600 transition-colors rounded-md">
                  {tGaleria('gallery.menuButton')}
                </button>
              </Link>
              <a
                href="https://www.instagram.com/explore/locations/764588696/bar-ruso-kalashnikov/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-orange-500 text-orange-500 px-8 py-3 font-semibold hover:bg-orange-500 hover:text-black transition-colors inline-flex items-center justify-center space-x-2 rounded-md"
              >
                <Instagram className="w-5 h-5" />
                <span>{tGaleria('gallery.instagramButton')}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal de Video Optimizado y Responsivo */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar mejorado */}
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-orange-500 transition-colors z-10 bg-black/70 hover:bg-black/90 rounded-full p-2 sm:p-3"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Contenedor del video responsivo */}
            <div className="w-full h-full max-w-full max-h-full">
              <video
                src={selectedVideo}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full object-contain rounded-none sm:rounded-lg shadow-2xl"
                style={{
                  maxWidth: '100vw',
                  maxHeight: '100vh'
                }}
              >
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

// Reemplaza el componente Footer en GaleriaPageClient.tsx con esta versión actualizada

function Footer({ tGaleria }: { tGaleria: (key: any) => string }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

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
  }), []);

  const getEcuadorTime = useCallback((): Date => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utc + (-5 * 3600000));
  }, []);

  const checkIfOpen = useCallback((time: Date): boolean => {
    const dayOfWeek: number = time.getDay();
    const hours: number = time.getHours();
    const minutes: number = time.getMinutes();
    const currentTimeInMinutes: number = hours * 60 + minutes;

    const todaySchedule: ScheduleDay = schedule[dayOfWeek];

    if (!todaySchedule) return false;

    const openTime: number = todaySchedule.open * 60;
    let closeTime: number = todaySchedule.close * 60;

    if (todaySchedule.close > 24) {
      return currentTimeInMinutes >= openTime || currentTimeInMinutes <= (closeTime - 24 * 60);
    } else {
      return currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime;
    }
  }, [schedule]);

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
    "/Imagenes/Instagram_4.webp"
  ], []);

  return (
    <footer id="contacto" className="bg-black py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full relative">
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
              {tGaleria('footer.description')}
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

          {/* Sección de páginas actualizada con traducciones */}
          <div>
            <h4 className="font-semibold mb-4">{tGaleria('footer.pages')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  {tGaleria('footer.nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="hover:text-white">
                  {tGaleria('footer.nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white">
                  {tGaleria('footer.nav.menu')}
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white">
                  {tGaleria('footer.nav.contact')}
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:text-white">
                  {tGaleria('footer.nav.gallery')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{tGaleria('footer.hours')}</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex justify-between">
                <span>{tGaleria('footer.monday')}:</span>
                <span>15:00 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span>{tGaleria('footer.friday')}:</span>
                <span>15:00 - 02:00</span>
              </div>
              <div className="flex justify-between">
                <span>{tGaleria('footer.saturday')}:</span>
                <span>15:00 - 02:00</span>
              </div>
              <div className="flex justify-between">
                <span>{tGaleria('footer.sunday')}:</span>
                <span className="text-red-500">{tGaleria('footer.closed')}</span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-gray-900 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-semibold ${isOpen ? 'text-green-500' : 'text-red-500'}`}>
                    {isOpen ? tGaleria('footer.openNow') : tGaleria('footer.closedNow')}
                  </p>
                  <p className="text-xs text-gray-400">
                    {tGaleria('footer.currentTime')}: {currentTime.toLocaleTimeString('es-EC', {
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
            <h4 className="font-semibold mb-4">Instagram</h4>
            <div className="grid grid-cols-2 gap-2">
              {instagramImages.map((src, index) => (
                <div
                  key={`instagram-${index}`}
                  className="rounded overflow-hidden aspect-square relative"
                >
                  <Image
                    src={src}
                    alt={`Instagram ${index + 1}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={70}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          {tGaleria('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton({ tGaleria }: { tGaleria: (key: any) => string }) {
  const phoneNumber = "593995575335"
  const message = tGaleria('whatsapp.message')

  const handleWhatsAppClick = useCallback(() => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }, [message])

  return (
    <div className="fixed bottom-8 right-8 z-30">
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
      >
        <Phone className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}