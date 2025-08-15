"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Facebook, Instagram, Phone } from "lucide-react"
import SharedHeader from "@/components/shared-header"
import Link from "next/link"
import Image from 'next/image'

function useCountAnimation(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  const startAnimation = () => {
    if (hasAnimated) return

    setHasAnimated(true)
    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  return { count, startAnimation }
}

export default function BarKalashnikovPage() {
  const [loading, setLoading] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-black text-white overflow-x-hidden" 
        >
          <SharedHeader scrolled={scrolled} />
          <HeroSection />
          <WelcomeSection />
          <MenuSection />
          <BarInteriorSection />
          <StatsSection />
          <LocalSection />
          <Footer />
          <WhatsAppButton />
        </motion.div>
      )}
    </>
  )
}

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
          }}
          className="w-32 h-32 mx-auto mb-8 relative"
        >
          {/* Logo en el centro */}
          <Image
            src="/imagenes/logo_bar.png"
            alt="Bar Ruso Kalashnikov"
            fill
            className="object-contain rounded-full"
            priority
          />
          {/* Borde giratorio */}
          <div className="absolute inset-0 w-full h-full rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold text-orange-500 mb-4"
        >
          BAR RUSO KALASHNIKOV
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 1.5 }}
          className="h-1 bg-orange-500 mx-auto max-w-xs"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-gray-400 mt-4"
        >
          Preparando tu experiencia única...
        </motion.p>
      </div>
    </motion.div>
  )
}

function HeroSection() {
  return (
    <section id="inicio" className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-gradient-to-br from-blue-900/30 via-cyan-500/20 to-blue-800/40 flex items-center justify-center"
          style={{
            backgroundImage: "url('/imagenes/Inicio_logo.jpg')",
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

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-lg"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-10">
            Cócteles con carácter.
            <br />
            <span className="text_blank-500">Veladas con sabor.</span>
          </h1>

          <p className="text-gray-300 text-sm mb-10 max-w-xs">
            Un bar íntimo en el centro de la ciudad: más de 250 cócteles, catas y sesiones de DJ los fines de semana.
            Ven a disfrutar de una velada perfecta.
          </p>

          <Link href="/sobre-nosotros">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-black px-6 py-2 text-sm font-semibold hover:bg-orange-600 transition-colors rounded-md"
            >
              Más Información
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-4 right-4 flex space-x-3 z-20">
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
    </section>
  )
}

function WelcomeSection() {
  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-8 flex items-center justify-center h-100"
          >
            <div className="w-full h-full rounded-lg relative">
              <Image
                src="/Imagenes/cerveza_inicio.jpg"
                alt="Moscow Mule en copa metálica"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <p className="text-orange-500 text-sm font-semibold mb-4">BIENVENIDOS</p>
            <h2 className="text-2xl font-bold mb-0">Una experiencia</h2>
            <h2 className="text-2xl font-bold mb-6">única</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              En el corazón de Cuenca, Bar Ruso Kalashnikov combina la tradición rusa con la innovación culinaria
              moderna. Nuestros mixólogos expertos crean cócteles únicos, mientras nuestros chefs preparan platos
              auténticos con un toque contemporáneo. Cada visita es un viaje sensorial donde los técnicas vanguardistas,
              creando momentos inolvidables en un ambiente sofisticado y acogedor.
            </p>
            <Link href="/galeria">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-black px-8 py-3 font-semibold hover:bg-orange-600 transition-colors rounded-md"
              >
                Conocer Más
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MenuSection() {
  const menuItems = [
    { name: "Shots del Ruso", image: "/Imagenes/Shots del Ruso.png" },
    { name: "Cócteles Flameados", image: "/Imagenes/Cocteles_Flameados.png" },
    { name: "Especiales", image: "/Imagenes/Especiales.png" },
    { name: "Cervezas Artesanales", image: "/Imagenes/Cervezas_Artesanales.png" },
    { name: "Cócteles Sin Alcohol", image: "/Imagenes/Cocteles_sin_alcohol.png" },
  ]

  return (
    <section id="menu" className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold mb-8">NUESTRO MENÚ</h2>
          <p className="text-gray-300 max-w-4xl mx-auto">
            Hemos creado una carta de cócteles pensada para cautivar todos tus sentidos, combinando recetas clásicas y
            creaciones exclusivas que te transportarán a un universo de aromas, colores y sensaciones únicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center group cursor-pointer"
            >
              <div className="rounded-lg p-8 mb-4 h-80 flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <Link href="/menu">
                <button className="bg-orange-500 text-black px-6 py-2 font-semibold hover:bg-orange-600 transition-colors w-full rounded-md">
                  {item.name}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BarInteriorSection() {
  return (
    <section className="py-10 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Imagen del local */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative w-full h-80 rounded-lg overflow-hidden">
            <Image
              src="/Imagenes/local.jpeg"
              alt="Interior del Bar Ruso Kalashnikov"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Textos */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-8">TU DESEO, SERVIDO EN UNA COPA</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            En Kalashnikov, tú pides y recibes: la bebida perfecta que imaginas, creada a la medida de tus deseos por
            manos expertas. Aquí, cada cóctel es una promesa cumplida, un instante pensado solo para ti, donde el sabor,
            la pasión y la tradición se unen para ofrecerte una experiencia única e inolvidable.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function StatsSection() {
  const rating = useCountAnimation(44, 2000)  // Cambié de 4.8 a 44
  const reviews = useCountAnimation(127, 2500)
  const cocktails = useCountAnimation(50, 2200)
  const followers = useCountAnimation(3909, 3000)

  const stats = [
    { hook: rating, display: "4.4", label: "Calificación de Google" },
    { hook: reviews, display: "127+", label: "Reseñas" },
    { hook: cocktails, display: "50+", label: "Cócteles Únicos" },
    { hook: followers, display: "3909", label: "Seguidores" },
  ]

  return (
    <section className="py-10 bg-black">
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
                  onComplete: () => stat.hook.startAnimation(),
                },
              }}
              onViewportEnter={() => stat.hook.startAnimation()}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                {index === 0
                  ? (stat.hook.count / 10).toFixed(1)  // 44 / 10 = 4.4
                  : index === 1
                    ? `${stat.hook.count}+`
                    : index === 2
                      ? `${stat.hook.count}+`
                      : stat.hook.count}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocalSection() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    '/Imagenes/Inicio_1.jpg',
    '/Imagenes/Inicio_2.jpg',
    '/Imagenes/Inicio_3.jpg',
    '/Imagenes/Inicio_4.jpg',
    '/Imagenes/Inicio_5.jpg'
  ]

  console.log('Imagen actual:', images[currentImage])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section id="sobre-nosotros" className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-8 flex items-center justify-center h-[400px]"
          >
            <div className="w-full h-80 rounded-lg relative overflow-hidden">
              <Image
                src={images[currentImage]}
                alt={`Imagen del local ${currentImage + 1}`}
                fill
                className="object-cover rounded-lg transition-opacity duration-500"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => console.log('Error cargando imagen:', images[currentImage])}
                onLoad={() => console.log('Imagen cargada:', images[currentImage])}
              />
            </div>
          </motion.div>

          <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <p className="text-orange-500 text-sm font-semibold mb-4">NUESTRO LOCAL</p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Nuestra coctelería fusiona la elegancia de la tradición rusa con la creatividad contemporánea, ofreciendo
              bebidas que combinan destilados selectos, técnicas de mixología de alto nivel y una cuidada presentación
              digna de los mejores bares del mundo.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Ubicado en un espacio de diseño sofisticado y atmósfera envolvente, nuestro bar transporta a cada
              visitante a un viaje sensorial donde el lujo, la cultura y el arte de la coctelería se encuentran para
              crear experiencias inolvidables.
            </p>
          </motion.div>
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
      transition={{ delay: 1, duration: 0.5 }}
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
