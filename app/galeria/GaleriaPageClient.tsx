// app/galeria/GaleriaPageClient.tsx
"use client"

import React from "react";
import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { motion } from "framer-motion"
import { Play, Calendar, Instagram, Facebook, Phone, X } from "lucide-react"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"
import Image from 'next/image'


// Optimización: Mover datos fuera del componente para evitar recreación
// Precargar todas las imágenes para máxima fluidez
const galleryItems = [
  { type: "video", title: "Preparación de Cócteles", videoSrc: "/videos/Video-1.mp4", thumbnail: "/Imagenes/imagen_1_video1.png" },
  { type: "photo", title: "Ambiente Nocturno", imageSrc: "/Imagenes/galeria_foto_1.jpg" },
  { type: "video", title: "Cócteles Flameados", videoSrc: "/videos/Video-2.mp4", thumbnail: "/Imagenes/imagen_2_video2.png" },
  { type: "photo", title: "Nuestras Visitas", imageSrc: "/Imagenes/galeria_foto_2.jpeg" },
  { type: "video", title: "Especiales", videoSrc: "/videos/Video-3.mp4", thumbnail: "/Imagenes/imagen_3_video3.png" },
  { type: "photo", title: "Interior Renovado", imageSrc: "/Imagenes/galeria_foto_3.jpg" },
  { type: "video", title: "Preparación de Cócteles Especiales", videoSrc: "/videos/Video-4.mp4", thumbnail: "/Imagenes/imagen_4_video4.png" },
  { type: "video", title: "Ambiente de Fin de Semana", videoSrc: "/videos/Video-5.mp4", thumbnail: "/Imagenes/imagen_5_video5.png" },
  { type: "video", title: "Equipo de Trabajo", videoSrc: "/videos/Video-6.mp4", thumbnail: "/Imagenes/imagen_6_video6.png" },
  { type: "video", title: "Momentos Especiales", videoSrc: "/videos/Video-7.mp4", thumbnail: "/Imagenes/imagen_7_video7.png" },
  { type: "photo", title: "Decoración Especial", imageSrc: "/Imagenes/galeria_foto_4.jpg" },
  { type: "photo", title: "Cervezas", imageSrc: "/Imagenes/galeria_foto_5.jpg" },
] as const

const INITIAL_VISIBLE_ITEMS = 9
const LOAD_MORE_INCREMENT = 6

export default function GaleriaPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="min-h-screen bg-black text-white"
    >
      <SharedHeader />
      <HeroSection />
      <GallerySection />
      <Footer />
      <WhatsAppButton />
    </motion.div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/Imagenes/galeria logo.jpeg"
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
            Momentos que inspiran
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
            Descubre la magia de nuestras noches a través de videos y fotografías
            que capturan la esencia única de Bar Ruso Kalashnikov.
          </motion.p>
        </motion.div>
      </div>
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
}

const GalleryItem = React.memo(function GalleryItem({ item, index, onClick, isImageLoaded }: GalleryItemProps) {
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
          alt={item.title}
          fill
          className={`object-cover transition-all duration-300 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          } ${item.type === "photo" ? 'group-hover:scale-105 transition-transform duration-500' : ''}`}
          priority={index < 9} // Priorizar las primeras 9 imágenes
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
              className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                item.type === "video" 
                  ? "bg-red-500/90 text-white" 
                  : "bg-blue-500/90 text-white"
              }`}
            >
              {item.type === "video" ? "VIDEO" : "FOTO"}
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
          {item.title}
        </h3>
      </div>
    </motion.div>
  )
})

function GallerySection() {
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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">Nuestra Galería</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Cada semana compartimos nuevos momentos de nuestras noches únicas. Videos exclusivos y fotografías que
              muestran la experiencia completa del Bar Ruso Kalashnikov.
            </p>
          </motion.div>

          {/* Filtros */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <div className="flex space-x-4 bg-gray-900/50 p-2 rounded-lg">
              {[
                { key: "all", label: "Todo" },
                { key: "video", label: "Videos" },
                { key: "photo", label: "Fotos" },
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() =>
                    setFilter(filterOption.key as "all" | "video" | "photo")
                  }
                  className={`px-6 py-2 rounded-md transition-all duration-200 ${
                    filter === filterOption.key
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
                Cargar más ({filteredItems.length - visibleItems} restantes)
              </button>
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold mb-4">¿Quieres ser parte de nuestra galería?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Visítanos y vive momentos únicos que podrían aparecer en nuestra próxima actualización semanal. ¡Cada noche
              es una nueva historia!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu">
                <button className="bg-orange-500 text-black px-8 py-3 font-semibold hover:bg-orange-600 transition-colors rounded-md">
                  Menús
                </button>
              </Link>
              <a
                href="https://www.instagram.com/explore/locations/764588696/bar-ruso-kalashnikov/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-orange-500 text-orange-500 px-8 py-3 font-semibold hover:bg-orange-500 hover:text-black transition-colors inline-flex items-center justify-center space-x-2 rounded-md"
              >
                <Instagram className="w-5 h-5" />
                <span>Síguenos en Instagram</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal de Video Optimizado */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="w-full h-full rounded-lg shadow-2xl"
            >
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </motion.div>
      )}
    </>
  )
}

// Footer y WhatsAppButton mantienen la misma optimización anterior...
function Footer() {
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
    "/Imagenes/Instagram_1.png",
    "/Imagenes/Instagram_2.png",
    "/Imagenes/Instagram_3.png",
    "/Imagenes/Instagram_4.png"
  ], []);

  return (
    <footer id="contacto" className="bg-black py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full relative">
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
              La experiencia nocturna más exclusiva de Cuenca. Donde la tradición se encuentra con la innovación.
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
            <h4 className="font-semibold mb-4">Páginas</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li><Link href="/sobre-nosotros" className="hover:text-white">Sobre Nosotros</Link></li>
              <li><Link href="/menu" className="hover:text-white">Menú</Link></li>
              <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
              <li><Link href="/galeria" className="hover:text-white">Galería</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horarios de Apertura</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex justify-between">
                <span>Lunes - Jueves:</span>
                <span>15:00 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span>Viernes:</span>
                <span>15:00 - 02:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span>15:00 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-red-500">CERRADO</span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-gray-900 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-semibold ${isOpen ? 'text-green-500' : 'text-red-500'}`}>
                    {isOpen ? 'ABIERTO AHORA' : 'CERRADO AHORA'}
                  </p>
                  <p className="text-xs text-gray-400">
                    Hora actual: {currentTime.toLocaleTimeString('es-EC', {
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
          © 2025 Bar Ruso Kalashnikov. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  const phoneNumber = "593995575335"
  const message = "Hola, me gustaría hacer una reserva en Bar Ruso Kalashnikov"

  const handleWhatsAppClick = useCallback(() => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }, [])

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