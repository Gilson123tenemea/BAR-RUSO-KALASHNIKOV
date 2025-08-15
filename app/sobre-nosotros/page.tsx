"use client"
import { motion } from "framer-motion"
import { MapPin, Star, Facebook, Instagram, Phone, Wine, Users, Sparkles } from "lucide-react"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"
import Image from 'next/image'
import { useState, useEffect } from "react"

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

export default function SobreNosotrosPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen bg-black text-white overflow-x-hidden" 
    >
      <SharedHeader />
      <HeroSection />
      <ExperienceSection />
      <HistorySection />
      <FeaturesSection />
      <TeamSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </motion.div>
  )
}

function HeroSection() {
  const handleUbicacionClick = () => {
    window.open(
      "https://www.google.com/maps/place/Bar+Ruso+Kalashnikov/@-2.9053604,-79.0121328,225m/data=!3m1!1e3!4m10!1m2!2m1!1scocteles!3m6!1s0x91cd194baa33c27f:0x1bd14ff355480aa5!8m2!3d-2.9053604!4d-79.0112284!15sCghjb2N0ZWxlc1oKIghjb2N0ZWxlc5IBA2JhcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNMmIxbHhlRkZuRUFFqgFICggvbS8wMjRnNhABKgwiCGNvY3RlbGVzKA4yHhABIhpKWkOv7yyP5zgKC63_-P0b64-6vWa_9As5rDIMEAIiCGNvY3RlbGVz4AEA-gEECAAQQA!16s%2Fg%2F11gjj1nnvp?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D",
      "_blank",
    )
  }

  return (
    <section id="hero" className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-gradient-to-br from-amber-900/40 via-orange-500/30 to-red-800/50 flex items-center justify-center"
          style={{
            backgroundImage: "url('/Imagenes/sobre nosotros logo.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="text-center text-gray-400">
            <div className="w-full h-full bg-gray-800/20 flex items-center justify-center">
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>

      <div className="container mx-auto px-4 relative z-20 pt-24">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-2xl font-bold mb-0">Más que un bar, una </h1>
          <h1 className="text-5xl md:text-2xl font-bold mb-6">experiencia</h1>

          <p className="text-gray-300 text-lg mb-8 max-w-md">
            Un espacio donde la creatividad, el ambiente y la coctelería de autor se unen para ofrecerte momentos
            inolvidables.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleUbicacionClick}
            className="bg-orange-500 text-black px-8 py-3 font-semibold hover:bg-orange-600 transition-colors flex items-center space-x-2 rounded-md"
          >
            <MapPin className="w-5 h-5" />
            <span>Ubicación</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              {/* Contenedor del video - puedes ajustar las dimensiones aquí */}
              <div className="w-full max-w-sm mx-auto h-150 relative rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  preload="auto"
                >
                  <source src="/videos/e.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>

                {/* Overlay opcional con gradiente suave */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none rounded-lg"></div>
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
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-orange-500">Nuestra historia</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Desde 2018, creamos un ambiente al que siempre querrás volver. Nuestras infusiones propias, el uso de
                productos locales y un equipo apasionado han hecho de este lugar un referente en la ciudad.
              </p>
              <p>
                Contamos con más de 250 cócteles en carta, 90 asientos disponibles y 3 salas únicas para que cada
                cliente viva su propia experiencia.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-lg"
            >
              <div
                className="w-full h-100 bg-gradient-to-br from-blue-900/60 via-cyan-800/50 to-teal-600/40 flex items-center justify-center relative"
                style={{
                  backgroundImage: "url('/Imagenes/frase del bar.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
                />
                {/* Overlay oscuro para mejor contraste si hay texto en la imagen */}
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            </motion.div>
          </motion.div>
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
        "Cócteles únicos creados por nuestros mixólogos expertos con ingredientes premium importados directamente de Rusia.",
    },
  ]

  return (
    <section className="py-10 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center p-6 bg-black/50 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-orange-500 mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section className="py-10 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              {/* Contenedor del video - puedes ajustar las dimensiones aquí */}
              <div className="w-full max-w-sm mx-auto h-150 relative rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  preload="auto"
                >
                  <source src="/videos/d.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>

                {/* Overlay opcional con gradiente suave */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none rounded-lg"></div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
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
          </div>

        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-orange-500 text-sm font-semibold mb-2">TESTIMONIOS</p>
          <h2 className="text-2xl font-bold">Lo que dicen nuestros clientes</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
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