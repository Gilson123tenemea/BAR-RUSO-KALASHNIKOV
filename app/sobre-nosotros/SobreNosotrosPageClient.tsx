"use client"

import { motion } from "framer-motion"
import { MapPin, Star, Facebook, Instagram, Phone, Wine, Users, Sparkles } from "lucide-react"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef, memo } from "react"

const testimonials = [
  {
    name: "María González",
    time: "Hace 1 semana",
    rating: 5,
    comment: "Ambiente increíble, cócteles únicos y música perfecta. ¡El mejor bar de Cuenca!",
  },
  {
    name: "Carlos Mendoza",
    time: "Hace 2 semanas",
    rating: 5,
    comment: "La decoración rusa es espectacular y los tragos están buenísimos. Muy recomendado.",
  },
  {
    name: "Ana Rodríguez",
    time: "Hace 3 semanas",
    rating: 5,
    comment: "Excelente atención y ambiente nocturno. Perfecto para salir con amigos.",
  },
]

// Animaciones optimizadas con menos propiedades
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <SharedHeader />
      <HeroSection />
      <ExperienceSection />
      <HistorySection />
      <FeaturesSection />
      <TeamSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

// Reemplaza la función HeroSection() completa con esta versión corregida:

function HeroSection() {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })
  const isClient = useIsClient()

  // Obtener dimensiones de ventana solo en el cliente
  useEffect(() => {
    if (!isClient) return

    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Establecer dimensiones iniciales
    updateDimensions()

    // Opcional: escuchar cambios de tamaño
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [isClient])

  const handleUbicacionClick = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.open(
        "https://www.google.com/maps/place/Bar+Ruso+Kalashnikov/@-2.9053604,-79.0121328,225m/data=!3m1!1e3!4m10!1m2!2m1!1scocteles!3m6!1s0x91cd194baa33c27f:0x1bd14ff355480aa5!8m2!3d-2.9053604!4d-79.0112284!15sCghjb2N0ZWxlc1oKIghjb2N0ZWxlc5IBA2JhcmoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNMmIxbHhlRkZuRUFFqgFICggvbS8wMjRnNhABKgwiCGNvY3RlbGVzKA4yHhABIhpKWkOv7yyP5zgKC63_-P0b64-6vWa_9As5rDIMEAIiCGNvY3RlbGVz4AEA-gEECAAQQA!16s%2Fg%2F11gjj1nnvp?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D",
        "_blank",
      )
    }
  }, [])

  return (
    <section id="hero" className="relative h-[600px] flex items-center overflow-hidden">
      {/* Imagen de fondo con animación */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0.7 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeOut"
          }
        }}
      >
        <div className="w-full h-full relative">
          <Image
            src="/Imagenes/sobre nosotros logo.jpg"
            alt="Bar Ruso Kalashnikov"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>
      </motion.div>

      {/* Overlay con animación de cortina */}
      <motion.div 
        className="absolute inset-0 z-10"
        initial={{ 
          opacity: 0,
          background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)"
        }}
        animate={{ 
          opacity: 1,
          background: "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
          transition: {
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.3
          }
        }}
      />

      {/* Contenido principal con animaciones desde la izquierda */}
      <div className="container mx-auto px-4 relative z-20 pt-24">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
              staggerChildren: 0.15
            }
          }}
        >
          {/* Títulos con animación individual desde la izquierda */}
          <motion.h1 
            className="text-5xl md:text-2xl font-bold mb-0"
            initial={{ opacity: 0, x: -80 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: 0.2
              }
            }}
          >
            Más que un bar, una{" "}
          </motion.h1>
          
          <motion.h1 
            className="text-5xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -100 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4
              }
            }}
          >
            experiencia
          </motion.h1>

          {/* Descripción con animación desde la izquierda */}
          <motion.p 
            className="text-gray-300 text-sm mb-10 max-w-xs"
            initial={{ opacity: 0, x: -60 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.6
              }
            }}
          >
            Un espacio donde la creatividad, el ambiente y la coctelería de autor se unen para ofrecerte momentos
            inolvidables.
          </motion.p>

          {/* Botón con animación desde la izquierda */}
          <motion.button
            onClick={handleUbicacionClick}
            className="bg-orange-500 text-black px-8 py-3 font-semibold hover:bg-orange-600 transition-colors flex items-center space-x-2 rounded-md shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: 0.8
              }
            }}
            whileHover={{
              scale: 1.05,
              x: 5,
              transition: {
                duration: 0.2,
                ease: "easeInOut"
              }
            }}
            whileTap={{
              scale: 0.98,
              x: 0,
              transition: {
                duration: 0.1
              }
            }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <MapPin className="w-5 h-5" />
            </motion.div>
            <span>Ubicación</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Efecto de partículas flotantes (CORREGIDO) - Solo se renderiza en el cliente */}
      {isClient && windowDimensions.width > 0 && (
        <div className="absolute inset-0 z-5 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
              initial={{
                x: Math.random() * windowDimensions.width,
                y: windowDimensions.height + 10,
                opacity: 0
              }}
              animate={{
                y: -10,
                opacity: [0, 1, 0],
                x: Math.random() * windowDimensions.width
              }}
              transition={{
                duration: Math.random() * 3 + 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}

// Hook para detectar si estamos en el cliente
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}

// Hook para intersection observer mejorado
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [node, setNode] = useState<Element | null>(null)
  const isClient = useIsClient()

  useEffect(() => {
    if (!node || !isClient) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.3, ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [node, isClient, options])

  return [setNode, isIntersecting, isClient] as const
}

// Componente de video optimizado sin problemas de hidratación
const OptimizedVideo = memo(({ src, className = "" }: { src: string; className?: string }) => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [error, setError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isClient = useIsClient()

  const handleCanPlay = useCallback(() => {
    setVideoLoaded(true)
    setError(false)
  }, [])

  const handleError = useCallback(() => {
    setError(true)
    setVideoLoaded(false)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !isClient) return

    const handleLoadedData = () => {
      setVideoLoaded(true)
      setError(false)
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)

    // Si el video ya está cargado (caso de recarga de página)
    if (video.readyState >= 2) {
      handleLoadedData()
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
    }
  }, [isClient, handleCanPlay, handleError])

  // No renderizar nada hasta que estemos en el cliente
  if (!isClient) {
    return (
      <div className={`relative rounded-lg overflow-hidden ${className}`}>
        <div className="w-full h-full bg-gray-800 flex items-center justify-center rounded-lg">
          <div className="text-gray-400 text-sm">Cargando...</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="metadata"
        style={{
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>
      
      {!videoLoaded && !error && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center rounded-lg">
          <div className="flex flex-col items-center space-y-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
            <div className="text-gray-400 text-sm">Cargando video...</div>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center rounded-lg">
          <div className="text-gray-400 text-sm text-center">
            <p>Error al cargar el video</p>
            <button 
              onClick={() => {
                setError(false)
                setVideoLoaded(false)
                const video = videoRef.current
                if (video) {
                  video.load()
                }
              }}
              className="mt-2 text-orange-500 hover:text-orange-400 underline text-xs"
            >
              Intentar de nuevo
            </button>
          </div>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none rounded-lg"></div>
    </div>
  )
})

OptimizedVideo.displayName = 'OptimizedVideo'

function ExperienceSection() {
  const [setRef, isIntersecting, isClient] = useIntersectionObserver()

  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative" ref={setRef}>
            <div className="relative overflow-hidden rounded-lg">
              <div className="w-full max-w-sm mx-auto h-150 relative rounded-lg overflow-hidden">
                {/* Renderizar siempre, pero con estado de carga inicial */}
                <OptimizedVideo 
                  src="/videos/e.mp4" 
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#010510] rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                Experiencia que inspira
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Cada detalle de nuestro bar está pensado para cautivar tus sentidos: luces suaves, música perfecta y un equipo que convierte cada visita en un momento único.
              </p>
            </div>

            <div className="bg-[#010510] rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                Arte en cada copa
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Más que bebidas, creamos piezas de arte líquido. Ingredientes frescos, técnicas de autor y pasión en cada preparación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HistorySection() {
  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-orange-500">Nuestra historia</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Desde 2014, creamos un ambiente al que siempre querrás volver. Nuestras infusiones propias, el uso de
                productos locales y un equipo apasionado han hecho de este lugar un referente en la ciudad.
              </p>
              <p>
                Contamos con más de 250 cócteles en carta, 90 asientos disponibles y 3 salas únicas para que cada
                cliente viva su propia experiencia.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <div
                className="w-full h-100 bg-gradient-to-br from-blue-900/60 via-cyan-800/50 to-teal-600/40 flex items-center justify-center relative"
                style={{
                  backgroundImage: "url('/Imagenes/frase del bar.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: Wine,
      title: "Coctelería Artesanal",
      description:
        "Cócteles únicos creados por nuestros mixólogos expertos con ingredientes premium importados directamente de Rusia.",
    },
    {
      icon: Sparkles,
      title: "Bebidas Rusa",
      description:
        "Cócteles y tragos tradicionales rusos reinventados con técnicas modernas y presentación contemporánea, ofreciendo una experiencia única en cada sorbo.",
    },
    {
      icon: Users,
      title: "Ambiente Exclusivo",
      description:
        "Vive una atmósfera elegante e inspiradora, perfecta para compartir momentos únicos, rodeado de buena música y hospitalidad rusa.",
    },
  ]

  return (
    <section className="py-10 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-black/50 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-500 mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const [setRef, isIntersecting, isClient] = useIntersectionObserver()

  return (
    <section className="py-10 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInVariants} className="relative" ref={setRef}>
            <div className="relative overflow-hidden rounded-lg">
              <div className="w-full max-w-sm mx-auto h-150 relative rounded-lg overflow-hidden">
                {/* Renderizar siempre, pero con estado de carga inicial */}
                <OptimizedVideo 
                  src="/videos/d.mp4" 
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInVariants} className="space-y-8">
            <div className="bg-[#010510] rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                Equipo experto en coctelería
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Con años de experiencia y un dominio impecable de las técnicas más sofisticadas, nuestro equipo crea bebidas que combinan precisión, sabor y presentación de alto nivel.
              </p>
            </div>

            <div className="bg-[#010510] rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                Bebidas que cuentan historias
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Desde clásicos rusos hasta creaciones de autor, cada trago refleja dedicación, tradición y un toque contemporáneo que te invita a volver.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const TestimonialsSection = memo(function TestimonialsSection() {
  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm font-semibold mb-2">TESTIMONIOS</p>
          <h2 className="text-2xl font-bold">Lo que dicen nuestros clientes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">"{testimonial.comment}"</p>

              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

// Hook optimizado para el reloj sin problemas de hidratación
const useEcuadorTime = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isClient = useIsClient()

  const schedule = {
    1: { open: 15, close: 24 }, // Lunes
    2: { open: 15, close: 24 }, // Martes
    3: { open: 15, close: 24 }, // Miércoles
    4: { open: 15, close: 24 }, // Jueves
    5: { open: 15, close: 26 }, // Viernes
    6: { open: 15, close: 24 }, // Sábado
    0: null // Domingo
  };

  const getEcuadorTime = useCallback((): Date => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utc + (-5 * 3600000));
  }, []);

  const checkIfOpen = useCallback((time: Date): boolean => {
    const dayOfWeek = time.getDay();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;

    const todaySchedule = schedule[dayOfWeek as keyof typeof schedule];
    
    if (!todaySchedule) return false;

    const openTime = todaySchedule.open * 60;
    let closeTime = todaySchedule.close * 60;

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
  }, []);

  useEffect(() => {
    if (!isClient) return

    const updateTime = () => {
      const ecuadorTime = getEcuadorTime();
      setCurrentTime(ecuadorTime);
      setIsOpen(checkIfOpen(ecuadorTime));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [isClient, getEcuadorTime, checkIfOpen]);

  return { currentTime, isOpen, isClient };
};

function Footer() {
  const { currentTime, isOpen, isClient } = useEcuadorTime();

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
                  sizes="64px"
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
              {/* CAMBIO: Usar Link en lugar de <a> */}
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
                  {isClient && currentTime && (
                    <p className="text-xs text-gray-400">
                      Hora actual: {currentTime.toLocaleTimeString('es-EC', { 
                        timeZone: 'America/Guayaquil',
                        hour: '2-digit', 
                        minute: '2-digit'
                      })}
                    </p>
                  )}
                </div>
                <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Instagram</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                "/Imagenes/Instagram_1.png",
                "/Imagenes/Instagram_2.png",
                "/Imagenes/Instagram_3.png",
                "/Imagenes/Instagram_4.png"
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
                    loading="lazy"
                    sizes="(max-width: 768px) 25vw, 12vw"
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

const WhatsAppButton = memo(function WhatsAppButton() {
  const phoneNumber = "593995575335"
  const message = "Hola, me gustaría hacer una reserva en Bar Ruso Kalashnikov"

  const handleWhatsAppClick = useCallback(() => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }, [phoneNumber, message])

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
})