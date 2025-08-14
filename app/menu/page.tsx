"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Download, Facebook, Instagram, Phone } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import SharedHeader from "@/components/shared-header"

interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuSection {
  id: string
  title: string
  items: MenuItem[]
  animationDirection: "left" | "right"
  image: string
}

const menuSections: MenuSection[] = [
  {
    id: "shots-ruso",
    title: "SHOTS DEL RUSO",
    animationDirection: "right",
    image: "Shots con humo/vapor",
    items: [
      { name: "SIBERIANO", description: "VODKA Y LICOR DE MENTA", price: "$3.00" },
      { name: "GATO VASILIY", description: "GIN, LIMÓN FRESCO Y GRANADINA", price: "$3.00" },
      { name: "LÍNEA DE BIKINI", description: "VODKA, LICOR DE CAFÉ Y FRUTILLA", price: "$3.00" },
      { name: "VIENTO DE MENTA", description: "TEQUILA, LICOR DE MENTA Y BLUE CURAÇAO", price: "$3.75" },
      { name: "BOLLARSKIY", description: "VODKA, TABASCO Y GRANADINA", price: "$3.75" },
      { name: "TEQUILA AZUL", description: "TEQUILA Y BLUE CURAÇAO", price: "$4.50" },
      { name: "MEDUSA", description: "RON, TRIPLE SEC, IRISH CREAM Y BLUE CURAÇAO", price: "$3.75" },
      {
        name: "BANDERA ECUATORIANA",
        description: "VODKA, BLUE CURAÇAO, LICOR DE MARACUYÁ Y GRANADINA",
        price: "$4.00",
      },
      { name: "BANDERA RUSA", description: "VODKA, BLUE CURAÇAO Y GRANADINA", price: "$4.00" },
      {
        name: "SEMÁFORO (3 SHOTS)",
        description: "VODKA, LICOR DE MENTA, LICOR DE MARACUYÁ Y GRANADINA",
        price: "$4.50",
      },
      { name: "QUÍMICO", description: "10 TUBOS DE ENSAYO, RECETA DE LA CASA", price: "$4.50" },
    ],
  },
  {
    id: "shots-flameados",
    title: "SHOTS FLAMEADOS",
    animationDirection: "left",
    image: "Shot flameado con fuego azul",
    items: [
      { name: "TNT", description: "GIN, TEQUILA, VODKA, RON", price: "$6.00" },
      { name: "BUDA", description: "VODKA, TEQUILA, RON, GIN, TRIPLE SEC Y GRANADINA", price: "$5.00" },
      { name: "B-52", description: "VODKA, LICOR DE CAFÉ, IRISH CREAM", price: "$8.50" },
      { name: "MEXICAN FLAG SHOT", description: "TEQUILA, LICOR DE MENTA Y GRANADINA", price: "$4.00" },
      { name: "SIN NOMBRE", description: "VODKA, BLUE CURAÇAO, IRISH CREAM Y GRANADINA", price: "$3.50" },
      { name: "BESO NEGRO", description: "RON, IRISH CREAM Y GRANADINA", price: "$3.50" },
    ],
  },
  {
    id: "cocteles-flameados",
    title: "CÓCTELES FLAMEADOS",
    animationDirection: "right",
    image: "Cócteles flameados con fuego",
    items: [
      { name: "Ferrari", description: "Ron, triple sec, blue curaçao, granadina", price: "$5.00" },
      { name: "Lamborghini", description: "Vodka, licor de café, Irish cream, blue curaçao", price: "$5.00" },
      {
        name: "Casco de Ingeniero Civil",
        description: "Tequila, blue curaçao, Irish cream, vodka y triple sec",
        price: "$6.50",
      },
      { name: "Lágrima de Culebra", description: "Tequila, limón fresco y licor de café", price: "$8.50" },
      { name: "Chernobyl", description: "Vodka, tequila, ron, whisky, sprite, coca-cola y granadina", price: "$8.50" },
      {
        name: "Luces Navideñas",
        description:
          "Ron, vodka, blue curaçao, vino tinto, Irish cream, triple sec, licor de menta, licor amaretto y granadina",
        price: "$10.50",
      },
      { name: "Abiamo", description: "Vodka, ron, gin, triple sec (método: sobre un embudo)", price: "$10.50" },
      { name: "Lada-14", description: "Licor de hierbas, gin, vodka y limón fresco", price: "$10.50" },
      {
        name: "Inmortal con Fatality",
        description: "Ron, triple sec, granadina, blue curaçao, Irish cream, licor de menta, cerveza, vodka, tequila",
        price: "$15.00",
      },
      { name: "Super Ferrari", description: "Absenta, blue curaçao, granadina, ron y triple sec", price: "$15.00" },
      { name: "Lamborgini Kalina", description: "Ron, blue curaçao, tequila, gin y granadina", price: "$15.00" },
    ],
  },
  {
    id: "cocteles-cerveza",
    title: "CÓCTELES CON CERVEZA",
    animationDirection: "left",
    image: "Cóctel con cerveza",
    items: [],
  },
  {
    id: "cervezas",
    title: "CERVEZAS",
    animationDirection: "right",
    image: "Cerveza",
    items: [],
  },
  {
    id: "cervezas-artesanales",
    title: "CERVEZAS ARTESANALES",
    animationDirection: "left",
    image: "Cerveza artesanal",
    items: [],
  },
  {
    id: "jarras-1l",
    title: "JARRAS 1 LITRO",
    animationDirection: "right",
    image: "Jarra de cerveza 1L",
    items: [],
  },
  {
    id: "jarras-2l",
    title: "JARRAS 2 LITROS",
    animationDirection: "left",
    image: "Jarra de cerveza 2L",
    items: [],
  },
  {
    id: "jarras-3l",
    title: "JARRAS 3 LITROS",
    animationDirection: "right",
    image: "Jarra de cerveza 3L",
    items: [],
  },
  {
    id: "sin-alcohol",
    title: "CÓCTELES SIN ALCOHOL",
    animationDirection: "left",
    image: "Bebida sin alcohol",
    items: [],
  },
  {
    id: "aguas-gaseosas",
    title: "AGUAS Y GASEOSAS",
    animationDirection: "right",
    image: "Bebidas gaseosas",
    items: [],
  },
  {
    id: "long-drinks",
    title: "LONG DRINKS",
    animationDirection: "left",
    image: "Long drinks",
    items: [],
  },
  {
    id: "especiales",
    title: "ESPECIALES",
    animationDirection: "right",
    image: "Cócteles especiales",
    items: [],
  },
  {
    id: "bebidas-calientes",
    title: "BEBIDAS CALIENTES",
    animationDirection: "left",
    image: "Bebidas calientes",
    items: [],
  },
  {
    id: "licores",
    title: "LICORES",
    animationDirection: "right",
    image: "Licores",
    items: [],
  },
]

export default function MenuPage() {
  const searchParams = useSearchParams()
  const [openSections, setOpenSections] = useState<string[]>(["shots-ruso"])

  useEffect(() => {
    const openParam = searchParams.get("open")
    if (openParam) {
      const sectionMap: { [key: string]: string } = {
        "SHOTS DEL RUSO": "shots-ruso",
        "CÓCTELES FLAMEADOS": "cocteles-flameados",
        ESPECIALES: "especiales",
        "CERVEZAS ARTESANALES": "cervezas-artesanales",
        "CÓCTELES SIN ALCOHOL": "sin-alcohol",
      }

      const sectionId = sectionMap[openParam]
      if (sectionId) {
        setOpenSections([sectionId])
      }
    }
  }, [searchParams])

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => (prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]))
  }

  const handleDownloadMenu = () => {
    const link = document.createElement("a")
    link.href = "/menu-bar-kalashnikov.pdf"
    link.download = "Menu-Bar-Ruso-Kalashnikov.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen bg-black text-white"
    >
      <SharedHeader />
      <HeroSection onDownload={handleDownloadMenu} />
      <MenuSections sections={menuSections} openSections={openSections} onToggle={toggleSection} />
      <Footer />
      <WhatsAppButton />
    </motion.div>
  )
}

function HeroSection({ onDownload }: { onDownload: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-green-900/40 via-emerald-500/30 to-teal-800/50 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="w-full h-full bg-gray-800/20 flex items-center justify-center">
              <span className="text-lg">Imagen de cóctel verde con humo - Fondo completo hasta header</span>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Explora nuestra carta</h1>

          <p className="text-gray-300 text-lg mb-8 max-w-md">
            Desde cócteles clásicos hasta nuestras creaciones más audaces, cada opción está pensada para sorprender y
            deleitar tu paladar.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onDownload}
            className="bg-orange-500 text-black px-8 py-3 font-semibold hover:bg-orange-600 transition-colors flex items-center space-x-2 rounded-md"
          >
            <Download className="w-5 h-5" />
            <span>Descargar Menú</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function MenuSections({
  sections,
  openSections,
  onToggle,
}: {
  sections: MenuSection[]
  openSections: string[]
  onToggle: (id: string) => void
}) {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        {sections.map((section, index) => (
          <MenuSectionItem
            key={section.id}
            section={section}
            isOpen={openSections.includes(section.id)}
            onToggle={() => onToggle(section.id)}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

function MenuSectionItem({
  section,
  isOpen,
  onToggle,
  index,
}: {
  section: MenuSection
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="mb-4"
    >
      <motion.button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-6 bg-gray-900/50 hover:bg-gray-800/50 transition-colors border-b border-gray-800"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
            <Plus className="w-6 h-6 text-orange-500" />
          </motion.div>
          <span className="text-xl font-semibold text-orange-500">{section.title}</span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
              x: section.animationDirection === "left" ? -50 : 50,
            }}
            animate={{
              height: "auto",
              opacity: 1,
              x: 0,
            }}
            exit={{
              height: 0,
              opacity: 0,
              x: section.animationDirection === "left" ? -50 : 50,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-gray-900/30"
          >
            <div className="p-6">
              {section.items.length > 0 ? (
                <div
                  className={`grid md:grid-cols-2 gap-8 items-start ${
                    section.animationDirection === "left" ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`space-y-4 ${section.animationDirection === "left" ? "md:order-2" : ""}`}>
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: itemIndex * 0.05, duration: 0.3 }}
                        className="border-b border-gray-700 pb-4"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-white">{item.name}</h3>
                          <span className="text-orange-500 font-bold">{item.price}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    className={`flex justify-center ${section.animationDirection === "left" ? "md:order-1" : ""}`}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        rotate: [0, -3, 3, 0],
                        transition: { duration: 0.4 },
                      }}
                      className="relative"
                    >
                      <div className="w-64 h-64 bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg"
                        />
                        <div className="text-gray-400 text-center z-10">
                          <span className="text-sm">{section.image}</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                      type: "spring",
                      bounce: 0.3,
                    }}
                  >
                    <div className="w-48 h-48 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-400 text-sm text-center">{section.image}</span>
                    </div>
                  </motion.div>
                  <p className="text-gray-400">Próximamente disponible</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
