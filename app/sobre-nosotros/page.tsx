"use client"
import { motion } from "framer-motion"
import { MapPin, Star, Facebook, Instagram, Phone, Wine, Users, Sparkles } from "lucide-react"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"

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
      className="min-h-screen bg-black text-white"
    >
      <SharedHeader />
      <HeroSection />
      <ExperienceSection />
      <FeaturesSection />
      <HistorySection />
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
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-amber-900/40 via-orange-500/30 to-red-800/50 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="w-full h-full bg-gray-800/20 flex items-center justify-center">
              <span className="text-lg">Imagen del interior del bar con personas - Fondo completo hasta header</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Más que un bar, una experiencia</h1>

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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-lg"
            >
              <div className="w-full max-w-sm mx-auto h-96 bg-gradient-to-br from-blue-900/60 via-purple-800/50 to-blue-600/40 flex items-center justify-center relative rounded-lg">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"
                />
                <div className="text-center text-white z-10">
                  <div className="text-3xl font-bold mb-2">A QUÍ VIDEO</div>
                  <span className="text-sm opacity-75">Video vertical del bar</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Experiencia que inspira</h3>
              <p className="text-gray-300 leading-relaxed">
                Cada detalle de nuestro bar está pensado para cautivar tus sentidos: luces suaves, música perfecta y un
                equipo que convierte cada visita en un momento único.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Arte en cada copa</h3>
              <p className="text-gray-300 leading-relaxed">
                Más que bebidas, creamos piezas de arte líquido. Ingredientes frescos, técnicas de autor y pasión en
                cada preparación.
              </p>
            </div>
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
    <section className="py-20 bg-gray-900/30">
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

function HistorySection() {
  return (
    <section className="py-20 bg-black">
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
              <div className="w-full h-80 bg-gradient-to-br from-blue-900/60 via-cyan-800/50 to-teal-600/40 flex items-center justify-center relative">
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
                <div className="text-center text-white z-10">
                  <div className="text-lg mb-2">Interior del bar con luces de neón</div>
                  <div className="text-2xl font-bold text-cyan-400">¿No será de tomar un traguito?</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-lg"
            >
              <div className="w-full max-w-sm mx-auto h-96 bg-gradient-to-br from-purple-900/60 via-blue-800/50 to-indigo-600/40 flex items-center justify-center relative rounded-lg">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg"
                />
                <div className="text-center text-white z-10">
                  <div className="text-3xl font-bold mb-2">A QUÍ VIDEO</div>
                  <span className="text-sm opacity-75">Video vertical del equipo</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Equipo experto en coctelería</h3>
              <p className="text-gray-300 leading-relaxed">
                Con años de experiencia y un dominio impecable de las técnicas más sofisticadas, nuestro equipo crea
                bebidas que combinan precisión, sabor y presentación de alto nivel.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Bebidas que cuentan historias</h3>
              <p className="text-gray-300 leading-relaxed">
                Desde clásicos rusos hasta creaciones de autor, cada trago refleja dedicación, tradición y un toque
                contemporáneo que te invita a volver.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-orange-500 text-sm font-semibold mb-2">TESTIMONIOS</p>
          <h2 className="text-4xl font-bold">Lo que dicen nuestros clientes</h2>
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
  const instagramImages = [
    "Cóctel rojo con decoración",
    "Bebida azul con efectos",
    "Cóctel rosado",
    "Bebida naranja con decoración",
  ]

  return (
    <footer id="contacto" className="bg-black py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">LOGO</span>
              </div>
            </Link>
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
                href="https://instagram.com/barrusokalashnikov"
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
                <Link href="/" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="hover:text-white">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white">
                  Menú
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:text-white">
                  Galería
                </Link>
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
            <p className="text-orange-500 text-sm mt-4 font-semibold">ABIERTO AHORA</p>
          </div>

          <div id="galeria">
            <h4 className="font-semibold mb-4">Instagram</h4>
            <div className="grid grid-cols-2 gap-2">
              {instagramImages.map((image, index) => (
                <div key={index} className="bg-gray-800 rounded aspect-square flex items-center justify-center">
                  <span className="text-gray-400 text-xs text-center">{image}</span>
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
  )
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
