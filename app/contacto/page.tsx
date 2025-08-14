"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send } from "lucide-react"
import Link from "next/link"
import emailjs from "@emailjs/browser"
import SharedHeader from "@/components/shared-header"

export default function ContactoPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen bg-black text-white"
    >
      <SharedHeader />
      <HeroSection />
      <ContactSection />
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
              <span className="text-lg">Imagen de bartender preparando cócteles - Fondo completo hasta header</span>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hablemos de tu próxima visita</h1>

          <p className="text-gray-300 text-lg mb-8 max-w-md">
            Estamos aquí para responder tus preguntas y brindarte la información que necesitas. Ven a disfrutar de una
            velada perfecta desde esta noche.
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

function ContactSection() {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    setIsSubmitting(true)

    try {
      // Configuración de EmailJS - Reemplaza con tus credenciales
      await emailjs.sendForm(
        "YOUR_SERVICE_ID", // Reemplaza con tu Service ID
        "YOUR_TEMPLATE_ID", // Reemplaza con tu Template ID
        form.current,
        "YOUR_PUBLIC_KEY", // Reemplaza con tu Public Key
      )

      setSubmitStatus("success")
      form.current.reset()
    } catch (error) {
      console.error("Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const handleGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Bar+Ruso+Kalashnikov/@-2.9053604,-79.0121328,225m/data=!3m1!1e3!4m10!1m2!2m1!1scocteles!3m6!1s0x91cd194baa33c27f:0x1bd14ff355480aa5!8m2!3d-2.9053604!4d-79.0112284!15sCghjb2N0ZWxlc1oKIghjb2N0ZWxlc5IBA2JhcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNMmIxbHhlRkZuRUFFqgFICggvbS8wMjRnNhABKgwiCGNvY3RlbGVzKA4yHhABIhpKWkOv7yyP5zgKC63_-P0b64-6vWa_9As5rDIMEAIiCGNvY3RlbGVz4AEA-gEECAAQQA!16s%2Fg%2F11gjj1nnvp?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D",
      "_blank",
    )
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <p className="text-orange-500 text-sm font-semibold mb-2">Estamos para atenderte</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulario de Contacto */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ponte en contacto con nosotros</h2>
            <p className="text-gray-300 mb-8">
              ¿Tienes alguna duda o quieres más información? Nuestro equipo está listo para atenderte y ayudarte a vivir
              la mejor experiencia en nuestro bar.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">NOMBRE</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">CORREO ELECTRÓNICO</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">ASUNTO</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">COMENTARIO</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos más detalles..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-500 text-black py-3 px-6 font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 rounded-md"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? "Enviando..." : "ENVIAR"}</span>
              </motion.button>

              {submitStatus === "success" && (
                <p className="text-green-500 text-center">¡Mensaje enviado exitosamente!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 text-center">Error al enviar el mensaje. Inténtalo de nuevo.</p>
              )}
            </form>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Tus Detalles</h3>
              <p className="text-gray-300 mb-8">
                Completa tus datos y escríbenos tu mensaje. Te responderemos lo antes posible.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
              >
                <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Dirección</h4>
                  <p className="text-gray-300 text-sm">
                    Remigio Crespo 1-87 y Agustín Cueva
                    <br />
                    Cuenca, Ecuador
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
              >
                <Phone className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Teléfono</h4>
                  <p className="text-gray-300 text-sm">+593 99 557 5335</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300 text-sm">rusobarkalashnikov@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
              >
                <Clock className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Horarios</h4>
                  <div className="text-gray-300 text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Lun - Jue: 15:00 - 00:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Vie: 15:00 - 02:00 | Sáb: 15:00 - 00:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span className="text-red-500">CERRADO</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.button
              onClick={handleGoogleMaps}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gray-800 text-white py-3 px-6 font-semibold hover:bg-gray-700 transition-colors border border-gray-700 hover:border-orange-500 rounded-md"
            >
              Ver en Google Maps
            </motion.button>

            <div>
              <h4 className="font-semibold mb-4">SÍGUENOS</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://facebook.com/barrusokalashnikov"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/barrusokalashnikov"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
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
