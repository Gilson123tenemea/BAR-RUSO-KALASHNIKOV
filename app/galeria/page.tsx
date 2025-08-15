"use client"

import { useState,useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Calendar, Instagram, Facebook, Phone, X } from "lucide-react"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"
import Image from 'next/image'


const galleryItems = [
  { type: "video", title: "Noche de Cócteles Flameados", date: "2025-01-15", thumbnail: "Video de cócteles flameados", videoSrc: "/videos/Video-1.mp4" },
  { type: "photo", title: "Ambiente Nocturno", date: "2025-01-14", thumbnail: "Foto del ambiente nocturno", imageSrc: "/Imagenes/galeria_foto_1.jpg" },
  { type: "video", title: "Preparación de Moscow Mule", date: "2025-01-13", thumbnail: "Video preparando Moscow Mule", videoSrc: "/videos/Video-2.mp4" },
  { type: "photo", title: "Nuevos Cócteles de Temporada", date: "2025-01-12", thumbnail: "Foto de cócteles nuevos", imageSrc: "/Imagenes/galeria_foto_2.jpeg" },
  { type: "video", title: "Behind the Scenes", date: "2025-01-11", thumbnail: "Video detrás de cámaras", videoSrc: "/videos/Video-3.mp4" },
  { type: "photo", title: "Interior Renovado", date: "2025-01-10", thumbnail: "Foto del interior renovado", imageSrc: "/Imagenes/galeria_foto_3.jpg" },
  { type: "video", title: "Preparación de Cócteles Especiales", date: "2025-01-09", thumbnail: "Video preparando cócteles especiales", videoSrc: "/videos/Video-4.mp4" },
  { type: "video", title: "Ambiente de Fin de Semana", date: "2025-01-08", thumbnail: "Video del ambiente de fin de semana", videoSrc: "/videos/Video-5.mp4" },
  { type: "video", title: "Técnicas de Bartending", date: "2025-01-07", thumbnail: "Video de técnicas de bartending", videoSrc: "/videos/Video-6.mp4" },
  { type: "video", title: "Momentos Especiales", date: "2025-01-06", thumbnail: "Video de momentos especiales", videoSrc: "/videos/Video-7.mp4" },
  { type: "photo", title: "Decoración Especial", date: "2025-01-05", thumbnail: "Foto de decoración especial", imageSrc: "/Imagenes/galeria_foto_4.jpg" },
  { type: "photo", title: "Vista Panorámica", date: "2025-01-04", thumbnail: "Foto vista panorámica", imageSrc: "/Imagenes/galeria_foto_5.jpg" },
]

export default function GaleriaPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
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
    <section className="relative h-[700px] flex items-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/Imagenes/galeria logo.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>

      {/* Gradiente encima de la imagen */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>

      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-20 pt-24">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-2xl font-bold mb-6 text-[#FF9D00]">
            Momentos que inspiran
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-md">
            Descubre la magia de nuestras noches a través de videos y fotografías
            que capturan la esencia única de Bar Ruso Kalashnikov.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [filter, setFilter] = useState<"all" | "video" | "photo">("all")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const filteredItems = galleryItems.filter((item) => filter === "all" || item.type === filter)

  const handleVideoClick = (videoSrc: string | undefined) => {
    if (videoSrc) {
      setSelectedVideo(videoSrc)
    }
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  return (
    <>
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Nuestra Galería</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Cada semana compartimos nuevos momentos de nuestras noches únicas. Videos exclusivos y fotografías que
              muestran la experiencia completa del Bar Ruso Kalashnikov.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-gray-900/50 p-2 rounded-lg">
              {[
                { key: "all", label: "Todo" },
                { key: "video", label: "Videos" },
                { key: "photo", label: "Fotos" },
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key as any)}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${filter === filterOption.key
                    ? "bg-orange-500 text-black font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                >
                  {filterOption.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Galería - SIN ANIMACIONES DE CARGA */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
                onClick={() => item.type === "video" && handleVideoClick(item.videoSrc)}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  {/* Si tiene videoSrc, mostrar el video como thumbnail */}
                  {item.videoSrc ? (
                    <>
                      <video
                        src={item.videoSrc}
                        className="absolute inset-0 w-full h-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                      {/* Overlay oscuro para mejor legibilidad */}
                      <div className="absolute inset-0 bg-black/30"></div>
                    </>
                  ) : item.imageSrc ? (
                    /* Si tiene imageSrc, mostrar la imagen real */
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    /* Fallback para elementos sin imagen/video */
                    <div className="text-center text-gray-400 z-10">
                      <span className="text-sm">{item.thumbnail}</span>
                    </div>
                  )}

                  {item.type === "video" && (
                    <motion.div 
                      whileHover={{ scale: 1.1 }} 
                      className="absolute inset-0 flex items-center justify-center z-20"
                    >
                      <div className="w-16 h-16 bg-orange-500/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </motion.div>
                  )}

                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${item.type === "video" ? "bg-red-500/90 text-white" : "bg-blue-500/80 text-white"
                        } backdrop-blur-sm`}
                    >
                      {item.type === "video" ? "VIDEO" : "FOTO"}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{item.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>
                      {new Date(item.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">¿Quieres ser parte de nuestra galería?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Visítanos y vive momentos únicos que podrían aparecer en nuestra próxima actualización semanal. ¡Cada noche
              es una nueva historia!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-black px-8 py-3 font-semibold hover:bg-orange-600 transition-colors rounded-md"
                >
                  Menús
                </motion.button>
              </Link>
              <motion.a
                href="https://www.instagram.com/explore/locations/764588696/bar-ruso-kalashnikov/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-orange-500 text-orange-500 px-8 py-3 font-semibold hover:bg-orange-500 hover:text-black transition-colors inline-flex items-center justify-center space-x-2 rounded-md"
              >
                <Instagram className="w-5 h-5" />
                <span>Síguenos en Instagram</span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Video */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full rounded-lg"
            >
              Tu navegador no soporta la reproducción de video.
            </video>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

function Footer() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Tipos para los horarios
  type ScheduleDay = {
    open: number;
    close: number;
  } | null;

  type Schedule = {
    [key: number]: ScheduleDay;
  };

  // Horarios del bar
  const schedule: Schedule = {
    1: { open: 15, close: 24 }, // Lunes
    2: { open: 15, close: 24 }, // Martes
    3: { open: 15, close: 24 }, // Miércoles
    4: { open: 15, close: 24 }, // Jueves
    5: { open: 15, close: 26 }, // Viernes (26 = 2:00 AM del siguiente día)
    6: { open: 15, close: 24 }, // Sábado
    0: null // Domingo - cerrado
  };

  // Función para obtener la hora actual en Ecuador (GMT-5)
  const getEcuadorTime = (): Date => {
    const now = new Date();
    // Ecuador está en GMT-5
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utc + (-5 * 3600000));
  };

  // Función para verificar si está abierto
  const checkIfOpen = (time: Date): boolean => {
    const dayOfWeek: number = time.getDay();
    const hours: number = time.getHours();
    const minutes: number = time.getMinutes();
    const currentTimeInMinutes: number = hours * 60 + minutes;

    const todaySchedule: ScheduleDay = schedule[dayOfWeek];
    
    if (!todaySchedule) {
      return false; // Cerrado los domingos
    }

    const openTime: number = todaySchedule.open * 60; // 15:00 = 900 minutos
    let closeTime: number = todaySchedule.close * 60;

    // Si cierra después de medianoche
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
  };

  // Actualizar cada minuto
  useEffect(() => {
    const updateTime = () => {
      const ecuadorTime = getEcuadorTime();
      setCurrentTime(ecuadorTime);
      setIsOpen(checkIfOpen(ecuadorTime));
    };

    // Actualizar inmediatamente
    updateTime();

    // Actualizar cada minuto
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contacto" className="bg-black py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center relative">
                <Image
                  src="/imagenes/logo_bar.png"
                  alt="Bar Ruso Kalashnikov"
                  fill
                  className="object-contain rounded-full"
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
              <li>
                <a href="#inicio" className="hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/sobre-nosotros" className="hover:text-white">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:text-white">
                  Menú
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-white">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/galeria" className="hover:text-white">
                  Galería
                </a>
              </li>
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
            
            {/* SECCIÓN DE ESTADO DINÁMICO */}
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
              {[
                "/imagenes/Instagram_1.png",
                "/imagenes/Instagram_2.png",
                "/imagenes/Instagram_3.png",
                "/imagenes/Instagram_4.png"
              ].map((src, index) => (
                <div
                  key={index}
                  className="rounded overflow-hidden aspect-square relative"
                >
                  <Image
                    src={src}
                    alt={`Instagram ${index + 1}`}
                    fill
                    className="object-cover"
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

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.4, duration: 0.3 }}
      className="fixed bottom-8 right-8 z-30"
    >
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
      >
        <Phone className="w-6 h-6 text-white" />
      </button>
    </motion.div>
  )
}