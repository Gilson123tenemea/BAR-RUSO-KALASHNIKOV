"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Download, Facebook, Instagram, Phone } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import SharedHeader from "@/components/shared-header"
import Image from 'next/image'


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
  imageSize?: {
    width: number
    height: number
  }
}

const menuSections: MenuSection[] = [
  {
    id: "shots-ruso",
    title: "SHOTS DEL RUSO",
    animationDirection: "right",
    image: "/Imagenes/shots del ruso_menu.png",
    imageSize: { width: 550, height: 700 },
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
    image: "/Imagenes/shot flameado_menu.png",
    imageSize: { width: 550, height: 500 },
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
    image: "/Imagenes/cocteles_flameados_menu.png",
    imageSize: { width: 550, height: 700 },
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
    image: "/Imagenes/coctel_cerveza.png",
    imageSize: { width: 550, height: 700 },
    items: [
      { name: "MICHELADA CLÁSICA", description: "CERVEZA CLUB, LIMÓN FRESCO, SAL, PIMIENTA, SALSA INGLESA Y TABASCO", price: "$4.50" },
      { name: "MICHELADA MIX", description: "CERVEZA CLUB, LIMÓN FRESCO, SAL, PIMIENTA, SALSA WORCESTERSHIRE Y TABASCO", price: "$4.50" },
      { name: "BOMBA", description: "CERVEZA CLUB, BLUE CURAÇAO, TRIPLE SEC Y AMARETTO", price: "$5.00" },
      { name: "FUEGO", description: "CERVEZA CLUB, AMARETTO Y RON", price: "$4.25" },
      { name: "SUBMARINO RUSO", description: "CERVEZA CLUB Y VODKA", price: "$4.75" },
      { name: "SÚPER MEXICANO", description: "CERVEZA CLUB Y TEQUILA", price: "$4.75" },
      { name: "CERVEZA AZUL", description: "CERVEZA CLUB, TRIPLE SEC Y TEQUILA", price: "$5.00" },
      { name: "TURBO BIELA RUSA", description: "CERVEZA CLUB, TEQUILA Y VODKA", price: "$5.00" },
      { name: "REY NACADOR", description: "CERVEZA CLUB, LICOR DE HIERBAS Y CERVEZA NEGRA", price: "$5.50" },
      { name: "MICHELADA MEXICANA ORIGINAL", description: "CERVEZA CORONA, LIMÓN FRESCO Y TEQUILA", price: "$5.50" }
    ]
  },
  {
    id: "cervezas",
    title: "CERVEZAS",
    animationDirection: "right",
    image: "/Imagenes/cerveza.png",
    imageSize: { width: 270, height: 270 },
    items: [
      { name: "HEINEKEN (330ML)", description: "", price: "$4.00" },
      { name: "CLUB (550ML)", description: "", price: "$4.00" },
      { name: "CORONA EXTRA (355ML)", description: "", price: "$4.00" },
      { name: "STELLA ARTOIS (330ML)", description: "", price: "$4.00" }
    ],
  },
  {
    id: "cervezas-artesanales",
    title: "CERVEZAS ARTESANALES",
    animationDirection: "left",
    image: "/Imagenes/cerveza artesanal.png",
    imageSize: { width: 420, height: 480 },
    items: [
      { name: "DRY STOUT (500 ML)", description: "", price: "$7.00" },
      { name: "RED IPA (500 ML)", description: "", price: "$7.00" },
      { name: "BELGIAN TRIPLE (500 ML)", description: "", price: "$7.00" },
      { name: "CREAM ALE (500 ML)", description: "", price: "$7.00" },
      { name: "DRY STOUT (330 ML)", description: "", price: "$4.00" },
      { name: "RED IPA (330 ML)", description: "", price: "$4.00" },
      { name: "BELGIAN TRIPLE (330 ML)", description: "", price: "$4.00" },
      { name: "CREAM ALE (330 ML)", description: "", price: "$4.00" }
    ],
  },
  {
    id: "jarras-1l",
    title: "JARRAS 1 LITRO",
    animationDirection: "right",
    image: "/Imagenes/jarra 1l.png",
    imageSize: { width: 550, height: 680 },
    items: [
      { name: "CUBA LIBRE", description: "", price: "$20.00" },
      { name: "DESTORNILLADOR", description: "", price: "$20.00" },
      { name: "VINO HERVIDO", description: "", price: "$20.00" },
      { name: "MOJITO CLÁSICO", description: "", price: "$20.00" },
      { name: "CAIPIROSHKA", description: "", price: "$20.00" },
      { name: "GIN TONIC", description: "", price: "$20.00" },
      { name: "MOSCU MULE", description: "", price: "$20.00" },
      { name: "SANGRÍA RUSA", description: "", price: "$20.00" },
      { name: "TURBO BIELA RUSA", description: "", price: "$20.00" },
      { name: "LONG ISLAND ICE TEA", description: "", price: "$20.00" },
      { name: "CERVEZA AZUL", description: "", price: "$20.00" },
      { name: "PADRINO", description: "", price: "$25.00" }
    ],
  },
  {
    id: "jarras-2l",
    title: "JARRAS 2 LITROS",
    animationDirection: "left",
    image: "/Imagenes/jarra 2l.png",
    imageSize: { width: 530, height: 680 },
    items: [
      { name: "CUBA LIBRE", description: "", price: "$30.00" },
      { name: "DESTORNILLADOR", description: "", price: "$30.00" },
      { name: "VINO HERVIDO", description: "", price: "$30.00" },
      { name: "MOJITO CLÁSICO", description: "", price: "$35.00" },
      { name: "CAIPIROSHKA", description: "", price: "$35.00" },
      { name: "GIN TONIC", description: "", price: "$35.00" },
      { name: "MOSCU MULE", description: "", price: "$35.00" },
      { name: "SANGRÍA RUSA", description: "", price: "$35.00" },
      { name: "TURBO BIELA RUSA", description: "", price: "$35.00" },
      { name: "LONG ISLAND ICE TEA", description: "", price: "$35.00" },
      { name: "CERVEZA AZUL", description: "", price: "$35.00" },
      { name: "PADRINO", description: "", price: "$40.00" }
    ],
  },
  {
    id: "jarras-3l",
    title: "JARRAS 3 LITROS",
    animationDirection: "right",
    image: "/Imagenes/jarra 3l.png",
    imageSize: { width: 530, height: 680 },
    items: [
      { name: "CUBA LIBRE", description: "", price: "$40.00" },
      { name: "DESTORNILLADOR", description: "", price: "$40.00" },
      { name: "MOJITO CLÁSICO", description: "", price: "$42.00" },
      { name: "MOJITO MIX", description: "", price: "$42.00" },
      { name: "GIN TONIC", description: "", price: "$42.00" },
      { name: "MOSCU MULE", description: "", price: "$42.00" },
      { name: "SANGRÍA RUSA", description: "", price: "$42.00" },
      { name: "TURBO BIELA RUSA", description: "", price: "$42.00" },
      { name: "LONG ISLAND ICE TEA", description: "", price: "$42.00" },
      { name: "CERVEZA AZUL", description: "", price: "$42.00" },
      { name: "PADRINO", description: "", price: "$55.00" },
      { name: "HADA VERDE", description: "", price: "$65.00" }
    ],
  },
  {
    id: "sin-alcohol",
    title: "CÓCTELES SIN ALCOHOL",
    animationDirection: "left",
    image: "/Imagenes/cocteles sin alcohol.png",
    imageSize: { width: 530, height: 680 },
    items: [
      { name: "LIMONADA DE FRUTILLA", description: "", price: "$3.00" },
      { name: "BATMAN", description: "", price: "$3.50" },
      { name: "MOJITO CLÁSICO", description: "", price: "$3.50" },
      { name: "MOJITO DE NARANJA", description: "", price: "$3.50" },
      { name: "PATITAS DE GATO", description: "", price: "$4.00" },
      { name: "PIÑA COLADA", description: "", price: "$5.00" },
      { name: "PIÑA COLADA DE FRUTILLA", description: "", price: "$5.50" },
      { name: "JUGO DE NARANJA (NATURAL)", description: "", price: "$4.00" },
      { name: "JUGO DE PIÑA (NATURAL)", description: "", price: "$4.00" },
      { name: "TASA TÉ", description: "", price: "$1.00" },
      { name: "CAFÉ AMERICANO", description: "", price: "$1.50" }
    ],
  },
  {
    id: "aguas-gaseosas",
    title: "AGUAS Y GASEOSAS",
    animationDirection: "right",
    image: "/Imagenes/aguas y gaseosas.png",
    imageSize: { width: 1000, height: 350 },
    items: [
      { name: "AGUA SIN GAS", description: "", price: "$1.50" },
      { name: "AGUA CON GAS", description: "", price: "$1.50" },
      { name: "ENERGIZANTE", description: "", price: "$3.00" },
      { name: "SPRITE", description: "", price: "$1.50" },
      { name: "COCA-COLA", description: "", price: "$1.50" }
    ],
  },
  {
    id: "long-drinks",
    title: "LONG DRINKS",
    animationDirection: "left",
    image: "/Imagenes/Long drinks.png",
    imageSize: { width: 1000, height: 1300 },
    items: [
      { name: "TEQUILA SUNRISE", description: "(TEQUILA, JUGO DE NARANJA, GRANADINA)", price: "$6.00" },
      { name: "MARGARITA CLÁSICA", description: "(TEQUILA, LIMÓN FRESCO, TRIPLE SEC)", price: "$7.00" },
      { name: "MARGARITA MIX", description: "(TEQUILA, LIMÓN FRESCO, TRIPLE SEC, FRUTAS: FRESA, MORA, NARANJA, MARACUYÁ)", price: "$7.50" },
      { name: "WHITE RUSSIAN", description: "(VODKA, LICOR DE CAFÉ, IRISH CREAM)", price: "$6.00" },
      { name: "BLACK RUSSIAN", description: "(VODKA, LICOR DE CAFÉ)", price: "$6.00" },
      { name: "CAIPIROSHKA MIX", description: "(VODKA, LIMÓN FRESCO, FRUTAS: FRESA, MORA, NARANJA, MARACUYÁ)", price: "$6.00" },
      { name: "GINA", description: "(VODKA, MARACUYÁ, LIMÓN FRESCO, VINO TINTO)", price: "$6.00" },
      { name: "MOSCU MULE", description: "(VODKA, LICOR DE JENGIBRE, JENGIBRE)", price: "$7.00" },
      { name: "BESO DE ARAÑA", description: "(VODKA, LICOR DE LIMÓN, JUGO DE NARANJA)", price: "$5.50" },
      { name: "SANGRÍA RUSA", description: "(VODKA, LIMÓN FRESCO, AZÚCAR, JENGIBRE)", price: "$5.50" },
      { name: "DESTORNILLADOR", description: "(VODKA, JUGO DE NARANJA)", price: "$5.00" },
      { name: "CUBA LIBRE", description: "(RON, LIMÓN FRESCO, COCA-COLA, ANGOSTURA BITTER)", price: "$5.00" },
      { name: "MOJITO", description: "(RON BLANCO, LIMÓN FRESCO, AZÚCAR, HIERBA BUENA)", price: "$5.00" },
      { name: "MOJITO MIX", description: "(RON, LIMÓN FRESCO, HIERBA BUENA, FRUTAS: FRESA, MORA, NARANJA, MARACUYÁ)", price: "$5.50" },
      { name: "DAIQUIRI", description: "(RON, LIMÓN FRESCO, AZÚCAR, FRUTAS: FRESA, MORA, NARANJA, MARACUYÁ)", price: "$6.00" },
      { name: "PIÑA COLADA", description: "(RON, PIÑA HAWAIANA, IRISH CREAM, CREMA DE LECHE)", price: "$8.00" },
      { name: "EL PADRINO", description: "(RED LABEL, LICOR AMARETTO)", price: "$6.50" },
      { name: "LUCIFER", description: "(RED LABEL, LICOR AMARETTO, JUGO DE NARANJA)", price: "$6.50" },
      { name: "OLD FASHIONED", description: "(RED LABEL, ANGOSTURA BITTER, AZÚCAR, NARANJA)", price: "$8.00" },
      { name: "GIN TONIC", description: "(GIN, LIMÓN FRESCO, AGUA TONICA, BOTANICAS)", price: "$6.00" },
      { name: "RED GIN", description: "(GIN, MORA, HIERBA BUENA, JENGIBRE)", price: "$6.00" },
      { name: "NEGRONI", description: "(GIN, CAMPARI, VERMOUTH ROSSO)", price: "$8.00" },
      { name: "WHISKY SOUR NEW YORK", description: "(RED LABEL, LIMÓN FRESCO, AZÚCAR, CLARA DE HUEVO)", price: "$10.00" }
    ],
  },
  {
    id: "especiales",
    title: "ESPECIALES",
    animationDirection: "right",
    image: "/Imagenes/especialesmenu.png",
    imageSize: { width: 1000, height: 480 },
    items: [
      { name: "ZHUMIRINHA", description: "(ZHUMIR, LIMÓN FRESCO, AZÚCAR)", price: "$6.00" },
      { name: "MAI-TAI", description: "(RON BLANCO, RON NEGRO, JUGO DE NARANJA, PINA, LICOR AMARETTO, GRANADINA)", price: "$8.00" },
      { name: "LONG ISLAND", description: "(VODKA, GIN, TRIPLE SEC, TEQUILA, RON BLANCO, COCA-COLA)", price: "$7.00" },
      { name: "HADA VERDE", description: "(VODKA, RON BLANCO, GIN, BLUE CURAÇAO, LICOR DE MELÓN, LIMÓN, SPRITE)", price: "$7.00" },
      { name: "K-12", description: "(GIN, TEQUILA, TRIPLE SEC, ENERGIZANTE, SPRITE)", price: "$7.00" },
      { name: "JAGGER BOMB DE LA CASA", description: "(LICOR DE HIERBAS, ENERGIZANTE)", price: "$8.00" }
    ],
  },
  {
    id: "bebidas-calientes",
    title: "BEBIDAS CALIENTES",
    animationDirection: "left",
    image: "/Imagenes/bebidascalientes.png",
    imageSize: { width: 400, height: 200 },
    items: [
      { name: "VINO HERVIDO", description: "(VINO, RON, ESPECIAS PROCESADAS ARTESANALMENTE)", price: "$5.00" },
      { name: "CANELAZO", description: "(AGUARDIENTE, NARANJILLA, CANELA)", price: "$5.00" }
    ],
  },
  {
    id: "licores",
    title: "LICORES",
    animationDirection: "right",
    image: "/Imagenes/licores.png",
    imageSize: { width: 400, height: 1300 },
    items: [
      { name: "MERLOT", description: "", price: "$5.00" },
      { name: "CABERNET SAUVIGNON", description: "", price: "$5.00" },
      { name: "VINO BLANCO", description: "", price: "$5.00" },
      { name: "TANQUERAY", description: "", price: "$7.00" },
      { name: "BEFEATER", description: "", price: "$8.00" },
      { name: "BOMBAY", description: "", price: "$9.00" },
      { name: "JOHNNY WALKER RED LABEL", description: "", price: "$5.00" },
      { name: "JOHNNY WALKER DOUBLE BLACK", description: "", price: "$6.00" },
      { name: "JACK DANIEL'S", description: "(TENNESSEE-HONEY-FIRE)", price: "$12.00" },
      { name: "BUCHANANS", description: "", price: "$8.00" },
      { name: "CARUPANO 8 AÑOS", description: "", price: "$18.00" },
      { name: "DIPLOMÁTICO RESERVA EXCLUSIVA", description: "", price: "$12.00" },
      { name: "ZACAPA 12 AÑOS", description: "", price: "$18.00" },
      { name: "RON DE BOBBY", description: "", price: "$15.00" },
      { name: "PATRÓN", description: "", price: "$15.00" },
      { name: "JOSE CUERVO (ORO/PLATA)", description: "", price: "$8.00" },
      { name: "DE LA CASA", description: "", price: "$5.00" },
      { name: "ANTIOQUEÑO", description: "", price: "$10.00" },
      { name: "CACHAZO", description: "", price: "$10.00" }
    ],
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
    const link = document.createElement("a");
    link.href = "/Pdf/MENU_COCTELES_KALASHNIKOV.pdf"; 
    link.download = "MENU_COCTELES_KALASHNIKOV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    <section className="relative h-[600px] flex items-center">
      {/* Imagen de fondo - usando el método que funciona */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            backgroundImage: "url('/Imagenes/Menu_logo.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </div>
      </div>

      {/* Gradiente más suave - igual al que funciona */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>

      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="pt-24"></div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="max-w-2xl"
        >
          {/* Texto directo sobre la imagen sin fondo */}
          <h1 className="text-2xl md:text-2xl font-bold mb-6 text-white drop-shadow-2xl">
            Explora nuestra carta
          </h1>

          <p className="text-gray-200 text-lg mb-10 max-w-md drop-shadow-xl">
            Desde cócteles clásicos hasta nuestras creaciones más audaces, cada opción está pensada para sorprender y
            deleitar tu paladar.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onDownload}
            className="bg-orange-500 text-black px-8 py-3 font-semibold hover:bg-orange-600 transition-colors flex items-center space-x-2 rounded-md shadow-2xl"
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
    <section className="py-5 bg-black">
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
  // Tamaño por defecto si no se especifica imageSize
  const defaultSize = { width: 256, height: 256 }
  const imageSize = section.imageSize || defaultSize

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
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Contenedor de la imagen */}
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    className={`flex justify-center ${section.animationDirection === "left" ? "md:order-1" : "md:order-2"
                      }`}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        rotate: [0, -3, 3, 0],
                        transition: { duration: 0.4 },
                      }}
                      className="relative"
                    >
                      {section.image.startsWith('/') ? (
                        <div
                          className="relative"
                          style={{
                            width: `${imageSize.width}px`,
                            height: `${imageSize.height}px`
                          }}
                        >
                          <Image
                            src={section.image}
                            alt={section.title}
                            fill
                            className="object-contain"
                            sizes={`${Math.max(imageSize.width, imageSize.height)}px`}
                          />
                        </div>
                      ) : (
                        <div
                          className="bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden"
                          style={{
                            width: `${imageSize.width}px`,
                            height: `${imageSize.height}px`
                          }}
                        >
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
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Contenedor del menú */}
                  <div className={`space-y-4 ${section.animationDirection === "left" ? "md:order-2" : "md:order-1"
                    }`}>
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
                    <div
                      className="flex items-center justify-center mx-auto mb-4 relative"
                      style={{
                        width: `${imageSize.width}px`,
                        height: `${imageSize.height}px`
                      }}
                    >
                      {section.image.startsWith('/') ? (
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-contain"
                          sizes={`${Math.max(imageSize.width, imageSize.height)}px`}
                        />
                      ) : (
                        <div className="bg-gray-800 rounded-lg w-full h-full flex items-center justify-center">
                          <span className="text-gray-400 text-sm text-center">{section.image}</span>
                        </div>
                      )}
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
