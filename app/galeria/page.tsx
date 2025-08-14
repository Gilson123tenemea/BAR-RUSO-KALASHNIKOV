"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Calendar, Instagram, Facebook, Phone } from "lucide-react"
import Link from "next/link"
import SharedHeader from "@/components/shared-header"

const galleryItems = [
  { type: "video", title: "Noche de Cócteles Flameados", date: "2025-01-15", thumbnail: "Video de cócteles flameados" },
  { type: "photo", title: "Ambiente Nocturno", date: "2025-01-14", thumbnail: "Foto del ambiente nocturno" },
  { type: "video", title: "Preparación de Moscow Mule", date: "2025-01-13", thumbnail: "Video preparando Moscow Mule" },
  { type: "photo", title: "Nuevos Cócteles de Temporada", date: "2025-01-12", thumbnail: "Foto de cócteles nuevos" },
  { type: "video", title: "Behind the Scenes", date: "2025-01-11", thumbnail: "Video detrás de cámaras" },
  { type: "photo", title: "Interior Renovado", date: "2025-01-10", thumbnail: "Foto del interior renovado" },
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
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-purple-900/40 via-blue-500/30 to-cyan-800/50 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="w-full h-full bg-gray-800/20 flex items-center justify-center">
              <span className="text-lg">Imagen de galería de fotos y videos del bar - Fondo completo hasta header</span>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Momentos que inspiran</h1>

          <p className="text-gray-300 text-lg mb-8 max-w-md">
            Descubre la magia de nuestras noches a través de videos y fotografías que capturan la esencia única de Bar
            Ruso Kalashnikov.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-black px-8 py-3 font-semibold hover:bg-orange-600 transition-colors inline-flex items-center space-x-2 rounded-md"
          >
            <Calendar className="w-5 h-5" />
            <span>Contenido Semanal</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function GallerySection() {
  const [filter, setFilter] = useState<"all" | "video" | "photo">("all")

  const filteredItems = galleryItems.filter((item) => filter === "all" || item.type === filter)

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Nuestra Galería</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Cada semana compartimos nuevos momentos de nuestras noches únicas. Videos exclusivos y fotografías que
            muestran la experiencia completa del Bar Ruso Kalashnikov.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
                onClick={() => setFilter(filterOption.key as any)}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
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
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"
                />

                <div className="text-center text-gray-400 z-10">
                  <span className="text-sm">{item.thumbnail}</span>
                </div>

                {item.type === "video" && (
                  <motion.div whileHover={{ scale: 1.1 }} className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-orange-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </motion.div>
                )}

                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === "video" ? "bg-red-500/80 text-white" : "bg-blue-500/80 text-white"
                    }`}
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
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
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
              href="https://instagram.com/barrusokalashnikov"
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
        </motion.div>
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
    <footer className="bg-black py-16 border-t border-gray-800">
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

          <div>
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
