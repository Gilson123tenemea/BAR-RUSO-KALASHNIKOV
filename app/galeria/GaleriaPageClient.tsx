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

type GalleryItem = {
  type: "video";
  title: string;
  videoSrc: string;
  thumbnail: string;
} | {
  type: "photo";
  title: string;
  imageSrc: string;
}

// SOLUCIÓN 1: Optimizar el sistema de precarga de imágenes
const imagePreloadManager = {
  loadedImages: new Set<string>(),
  isPreloading: false,
  
  async preloadAllImages(): Promise<void> {
    if (this.isPreloading) return;
    this.isPreloading = true;
    
    const imagesToPreload = galleryItems.map(item =>
      item.type === "video" ? item.thumbnail : item.imageSrc
    );

    await Promise.allSettled(
      imagesToPreload.map(src => {
        return new Promise<void>((resolve) => {
          if (this.loadedImages.has(src)) {
            resolve();
            return;
          }
          
          const img = new window.Image();
          img.onload = () => {
            this.loadedImages.add(src);
            resolve();
          };
          img.onerror = () => {
            resolve(); // Continuar aunque falle
          };
          img.src = src;
        });
      })
    );
    
    this.isPreloading = false;
  }
};

// SOLUCIÓN 2: Hook optimizado para la precarga
function useImagePreloader() {
  const [loadedImages, setLoadedImages] = useState(imagePreloadManager.loadedImages);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;
    
    const initializePreload = async () => {
      setIsInitialized(true);
      await imagePreloadManager.preloadAllImages();
      setLoadedImages(new Set(imagePreloadManager.loadedImages));
    };

    initializePreload();
  }, [isInitialized]);

  return loadedImages;
}

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

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % 5);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + 5) % 5);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  useEffect(() => {
    if (!isAutoPlay || isDragging || isTransitioning) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, nextSlide, isDragging, isTransitioning]);

  const getImagePositions = () => {
    const positions = [];
    const totalImages = 5;
    
    for (let i = 0; i < totalImages; i++) {
      const relativeIndex = (i - currentIndex + totalImages) % totalImages;
      
      let transform = '';
      let scale = 1;
      let opacity = 1;
      let zIndex = 10;
      let blur = 0;
      
      switch (relativeIndex) {
        case 0:
          transform = 'translateX(0) translateZ(200px)';
          scale = 1.2;
          opacity = 1;
          zIndex = 50;
          blur = 0;
          break;
        case 1:
          transform = 'translateX(280px) translateZ(0px) rotateY(-25deg)';
          scale = 0.8;
          opacity = 0.7;
          zIndex = 30;
          blur = 1;
          break;
        case 2:
          transform = 'translateX(480px) translateZ(-100px) rotateY(-45deg)';
          scale = 0.6;
          opacity = 0.4;
          zIndex = 10;
          blur = 2;
          break;
        case 3:
          transform = 'translateX(-480px) translateZ(-100px) rotateY(45deg)';
          scale = 0.6;
          opacity = 0.4;
          zIndex = 10;
          blur = 2;
          break;
        case 4:
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
                      e.currentTarget.src = image.fallback;
                    }}
                  />
                  
                  <div className={`absolute inset-0 transition-all duration-700 ${
                    image.isCenter
                      ? 'bg-gradient-to-t from-black/70 via-transparent to-black/20'
                      : 'bg-gradient-to-t from-black/60 via-black/20 to-transparent'
                  }`}></div>

                  {image.isCenter && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full shadow-lg animate-pulse"></div>
                  )}

                  {image.isCenter && (
                    <div className="absolute inset-0 rounded-2xl border border-amber-400/40 shadow-[0_0_30px_rgba(251,191,36,0.3)] animate-pulse"></div>
                  )}

                  {!image.isCenter && (
                    <div className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors duration-300 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 md:hidden"></div>
      </div>
    </section>
  );
}

// SOLUCIÓN 3: Componente ReelsCarousel optimizado
interface ReelsCarouselProps {
  videos: GalleryItem[];
  onVideoClick: (video: GalleryItem, index: number) => void;
  loadedImages: Set<string>;
  tGaleria: (key: any) => string;
  currentLanguage: any;
  showAll: boolean;
  onToggleShowAll: () => void;
}

const ReelsCarousel = React.memo(function ReelsCarousel({
  videos,
  onVideoClick,
  loadedImages,
  tGaleria,
  currentLanguage,
  showAll,
  onToggleShowAll
}: ReelsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // SOLUCIÓN 4: Memoizar displayedVideos para evitar recálculos
  const displayedVideos = useMemo(() => 
    showAll ? videos : videos.slice(0, 6), 
    [showAll, videos]
  );

  const updateScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }, [])

  useEffect(() => {
    updateScrollButtons()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', updateScrollButtons, { passive: true })
      return () => container.removeEventListener('scroll', updateScrollButtons)
    }
  }, [updateScrollButtons, displayedVideos])

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount)
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }, [])

  if (showAll) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedVideos.map((video, index) => (
          <ReelItem
            key={`${video.type}-${index}`}
            item={video}
            index={index}
            onClick={() => onVideoClick(video, index)}
            loadedImages={loadedImages}
            tGaleria={tGaleria}
            currentLanguage={currentLanguage}
            isGrid={true}
          />
        ))}
        <div className="col-span-full text-center mt-6">
          <button
            onClick={onToggleShowAll}
            className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            {tGaleria('gallery.showLess')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      <div 
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {displayedVideos.map((video, index) => (
          <ReelItem
            key={`${video.type}-${index}`}
            item={video}
            index={index}
            onClick={() => onVideoClick(video, index)}
            loadedImages={loadedImages}
            tGaleria={tGaleria}
            currentLanguage={currentLanguage}
            isGrid={false}
          />
        ))}

        {!showAll && videos.length > 6 && (
          <div className="flex-shrink-0 w-48 md:w-60">
            <div className="h-full flex items-center justify-center bg-gray-900 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors cursor-pointer min-h-[200px]">
              <button
                onClick={onToggleShowAll}
                className="text-center p-4"
              >
                <div className="text-orange-500 mb-2">
                  <Play className="w-8 h-8 mx-auto" />
                </div>
                <p className="text-white font-semibold">
                  {tGaleria('gallery.filter.all')}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  +{videos.length - 6} videos
                </p>
              </button>
            </div>
          </div>
        )}
      </div>

      {canScrollRight && !showAll && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  )
})

// SOLUCIÓN 5: ReelItem optimizado sin animaciones innecesarias
interface ReelItemProps {
  item: GalleryItem;
  index: number;
  onClick: () => void;
  loadedImages: Set<string>;
  tGaleria: (key: any) => string;
  currentLanguage: any;
  isGrid?: boolean;
}

const ReelItem = React.memo(function ReelItem({
  item,
  index,
  onClick,
  loadedImages,
  tGaleria,
  currentLanguage,
  isGrid = false
}: ReelItemProps) {
  const imageSrc = item.type === "video" ? item.thumbnail : item.imageSrc
  const isImageLoaded = loadedImages.has(imageSrc)

  // SOLUCIÓN 6: Remover animación de framer-motion que causa lag
  return (
    <div
      className={`group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-orange-500/50 cursor-pointer transition-all duration-200 hover:scale-105 ${
        isGrid ? 'aspect-[9/16]' : 'flex-shrink-0 w-48 md:w-60 aspect-[9/16]'
      }`}
      onClick={onClick}
      style={{
        opacity: isImageLoaded ? 1 : 0.7,
        transition: 'opacity 0.3s ease, transform 0.2s ease'
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={getTranslatedGalleryItemTitle(item.title, currentLanguage)}
          fill
          className={`object-cover transition-transform duration-300 group-hover:scale-110`}
          priority={index < 6}
          quality={75} // Reducir calidad para mejorar rendimiento
          sizes="(max-width: 768px) 200px, 240px"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

        {item.type === "video" && isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Play className="w-6 h-6 text-black ml-0.5" />
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h4 className="text-white text-sm font-semibold line-clamp-2 leading-tight">
            {getTranslatedGalleryItemTitle(item.title, currentLanguage)}
          </h4>
        </div>

        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  )
})

// SOLUCIÓN 7: GallerySection optimizada
function GallerySection({ tGaleria, currentLanguage }: {
  tGaleria: (key: any) => string;
  currentLanguage: any;
}) {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null)
  const [showAllVideos, setShowAllVideos] = useState(false)
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const loadedImages = useImagePreloader()

  // Memoizar separación de videos y fotos
  const { videos, photos } = useMemo(() => ({
    videos: galleryItems.filter(item => item.type === "video"),
    photos: galleryItems.filter(item => item.type === "photo")
  }), []);

  const handleVideoClick = useCallback((video: GalleryItem, index: number) => {
    const videoIndex = videos.findIndex(v => v === video)
    setSelectedVideoIndex(videoIndex)
  }, [videos])

  const closeVideoModal = useCallback(() => {
    setSelectedVideoIndex(null)
  }, [])

  const navigateVideo = useCallback((direction: 'prev' | 'next') => {
    if (selectedVideoIndex === null) return
    
    const newIndex = direction === 'prev' 
      ? (selectedVideoIndex - 1 + videos.length) % videos.length
      : (selectedVideoIndex + 1) % videos.length
    
    setSelectedVideoIndex(newIndex)
  }, [selectedVideoIndex, videos.length])

  // Keyboard navigation
  useEffect(() => {
    if (selectedVideoIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          navigateVideo('prev')
          break
        case 'ArrowRight':
          e.preventDefault()
          navigateVideo('next')
          break
        case 'Escape':
          e.preventDefault()
          closeVideoModal()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedVideoIndex, navigateVideo, closeVideoModal])

  return (
    <>
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          
          {/* Sección de Videos */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-orange-500"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {tGaleria('gallery.videoBadge')}
              </h2>
              <div className="bg-red-500/20 p-2 rounded-lg">
                <Play className="w-6 h-6 text-red-500" />
              </div>
            </div>

            <ReelsCarousel
              videos={videos}
              onVideoClick={handleVideoClick}
              loadedImages={loadedImages}
              tGaleria={tGaleria}
              currentLanguage={currentLanguage}
              showAll={showAllVideos}
              onToggleShowAll={() => setShowAllVideos(!showAllVideos)}
            />
          </div>

          {/* Sección de Fotos */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-blue-500"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {tGaleria('gallery.photoBadge')}
              </h2>
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
            </div>

            <ReelsCarousel
              videos={photos}
              onVideoClick={(photo, index) => {
                console.log('Photo clicked:', photo)
              }}
              loadedImages={loadedImages}
              tGaleria={tGaleria}
              currentLanguage={currentLanguage}
              showAll={showAllPhotos}
              onToggleShowAll={() => setShowAllPhotos(!showAllPhotos)}
            />
          </div>

          {/* Botones de redirección */}
          <div className="text-center">
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
          </div>
        </div>
      </section>

      {/* Modal de Video estilo Reels */}
      <AnimatePresence>
        {selectedVideoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeVideoModal()
            }}
          >
            <div className="relative w-full h-full max-w-md mx-auto flex items-center justify-center">
              <div className="relative w-full h-full bg-black flex items-center justify-center">
                <video
                  key={selectedVideoIndex}
                  src={videos[selectedVideoIndex]?.type === "video" ? videos[selectedVideoIndex].videoSrc : ""}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                  style={{ maxHeight: '100vh' }}
                >
                  Tu navegador no soporta la reproducción de video.
                </video>

                {videos.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateVideo('prev')}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => navigateVideo('next')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <button
                  onClick={closeVideoModal}
                  className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors bg-black/70 hover:bg-black/90 rounded-full p-2"
                >
                  <X className="w-6 h-6" />
                </button>

                {videos.length > 1 && (
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-1">
                    {videos.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === selectedVideoIndex ? 'bg-orange-500' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <h3 className="text-white text-lg font-semibold">
                    {getTranslatedGalleryItemTitle(videos[selectedVideoIndex]?.title, currentLanguage)}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

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