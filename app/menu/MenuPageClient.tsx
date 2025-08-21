
"use client"

import { useState, useEffect, useMemo, useCallback, memo } from "react"
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
      { name: "VIENTO DE MENTA", description: "TEQUILA, LICOR DE MENTA Y BLUE CURACAO", price: "$3.75" },
      { name: "BOLLARSKIY", description: "VODKA, TABASCO Y GRANADINA", price: "$3.75" },
      { name: "TEQUILA AZUL", description: "TEQUILA Y BLUE CURACAO", price: "$4.50" },
      { name: "MEDUSA", description: "RON, TRIPLE SEC, IRISH CREAM Y BLUE CURACAO", price: "$3.75" },
      {
        name: "BANDERA ECUATORIANA",
        description: "VODKA, BLUE CURACAO, LICOR DE MARACUYÁ Y GRANADINA",
        price: "$4.00",
      },
      { name: "BANDERA RUSA", description: "VODKA, BLUE CURACAO Y GRANADINA", price: "$4.00" },
      {
        name: "SEMÁFORO (3 SHOTS)",
        description: "VODKA, LICOR DE MENTA, LICOR DE MARACUYÁ Y GRANADINA",
        price: "$6.00",
      },
      { name: "QUÍMICO", description: "10 TUBOS DE ENSAYO, RECETA DE LA CASA", price: "$9.00" },
    ],
  },
  {
    id: "shots-flameados",
    title: "SHOTS FLAMEADOS",
    animationDirection: "left",
    image: "/Imagenes/shot flameado_menu.png",
    imageSize: { width: 450, height: 500 },
    items: [
      { name: "TNT", description: "GIN, TEQUILA, VODKA, RON", price: "$6.00" },
      { name: "BUDA", description: "VODKA, TEQUILA, RON, GIN, TRIPLE SEC Y GRANADINA", price: "$5.00" },
      { name: "B-52", description: "VODKA, LICOR DE CAFÉ, IRISH CREAM", price: "$4.00" },
      { name: "MEXICAN FLAG SHOT", description: "TEQUILA, LICOR DE MENTA Y GRANADINA", price: "$4.00" },
      { name: "SIN NOMBRE", description: "VODKA, BLUE CURACAO, IRISH CREAM Y GRANADINA", price: "$3.50" },
      { name: "BESO NEGRO", description: "RON, IRISH CREAM Y GRANADINA", price: "$3.50" },
    ],
  },
  {
    id: "cocteles-flameados",
    title: "CÓCTELES FLAMEADOS",
    animationDirection: "right",
    image: "/Imagenes/cocteles_flameados_menu.png",
    imageSize: { width: 650, height: 750 },
    items: [
      { name: "FERRARI", description: "RON, TRIPLE SEC, BLUE CURACAO, GRANADINA", price: "$5.00" },
      { name: "LAMBORGHINI", description: "VODKA, LICOR DE CAFÉ, IRISH CREAM, BLUE CURACAO", price: "$5.00" },
      {
        name: "CASCO DE INGENIERO CIVIL",
        description: "TEQUILA, BLUE CURACAO, IRISH CREAM, VODKA Y TRIPLE SEC",
        price: "$8.00",
      },
      { name: "LÁGRIMA DE CULEBRA", description: "TEQUILA, LIMÓN FRESCO Y LICOR DE CAFÉ", price: "$8.00" },
      { name: "CHERNOBYL", description: "VODKA, TEQUILA, RON, WHISKY, SPRITE, COCA-COLA Y GRANADINA", price: "$8.00" },
      {
        name: "LUCES NAVIDEÑAS",
        description:
          "RON, VODKA, BLUE CURAÇAO, VINO TINTO, IRISH CREAM, TRIPLE SEC, LICOR DE MENTA, LICOR AMARETTO Y GRANADINA",
        price: "$10.00",
      },
      { name: "ABIAMO", description: "VODKA, RON, GIN, TRIPLE SEC (MÉTODO: SOBRE UN EMBUDO)", price: "$10.00" },
      { name: "LADA-14", description: "LICOR DE HIERBAS, GIN, VODKA Y LIMÓN FRESCO", price: "$10.00" },
      {
        name: "INMORTAL CON FATALITY",
        description: "RON, TRIPLE SEC, GRANADINA, BLUE CURACAO, IRISH CREAM, LICOR DE MENTA, CERVEZA, VODKA, TEQUILA",
        price: "$15.00",
      },
      { name: "SUPER FERRARI", description: "ABSENTA, BLUE CURACAO, GRANADINA, RON Y TRIPLE SEC", price: "$15.00" },
      { name: "LAMBORGINI KALINA", description: "RON, BLUE CURACAO, TEQUILA, GIN Y GRANADINA, METODO: TORRES DE COPAS FLAMEADAS", price: "$15.00" },
    ],
  },

  {
    id: "cocteles-cerveza",
    title: "CÓCTELES CON CERVEZA",
    animationDirection: "left",
    image: "/Imagenes/coctel_cerveza.png",
    imageSize: { width: 550, height: 700 },
    items: [
      { name: "MICHELADA CLÁSICA", description: "CERVEZA CLUB, LIMÓN FRESCO, SAL, PIMIENTA, SALSA WORCESTERSHIPE Y TABASCO", price: "$4.00" },
      { name: "MICHELADA MIX", description: "CERVEZA CLUB, LIMÓN FRESCO, SAL, PIMIENTA, SALSA WORCESTERSHIRE Y TABASCO, FRUTAS: FRESA, MORA, NARANJA, MARACUYA", price: "$4.50" },
      { name: "MICHELADA CON TEQUILA", description: "TEQUILA, CERVEZA CLUB, LIMÓN FRESCO, SAL, PIMIENTA, SALSA WORCESTERSHIRE Y TABASCO", price: "$6.00" },
      { name: "BOMBA", description: "CERVEZA CLUB, BLUE CURACAO, TRIPLE SEC Y GRANADINA", price: "$4.00" },
      { name: "FUEGO", description: "CERVEZA CLUB, AMARETTO Y RON", price: "$4.25" },
      { name: "SUBMARINO RUSO", description: "CERVEZA CLUB Y VODKA", price: "$4.75" },
      { name: "SUBMARINO MEXICANO", description: "CERVEZA CLUB Y TEQUILA", price: "$4.75" },
      { name: "CERVEZA AZUL", description: "CERVEZA CLUB, TRIPLE SEC, TEQUILA Y BLUE CURACAO", price: "$6.00" },
      { name: "TURBO BIELA RUSA", description: "CERVEZA CLUB, VODKA, TRIPLE SEC, GIN, RON, TEQUILA", price: "$6.00" },
      { name: "NEGRO CAZADOR", description: "LICOR DE HIERBAS Y CERVEZA NEGRA", price: "$9.00" },
      { name: "MICHELADA MEXICANA ORIGINAL", description: "CERVEZA CORONA, LIMÓN FRESCO, TABASCO Y TEQUILA", price: "$8.00" }
    ]
  },
  {
    id: "cervezas",
    title: "CERVEZAS",
    animationDirection: "right",
    image: "/Imagenes/cerveza.png",
    imageSize: { width: 170, height: 300 },
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
    imageSize: { width: 250, height: 380 },
    items: [
      { name: "DRY STOUT (500 ML)", description: "", price: "$7.00" },
      { name: "RED IPA (500 ML)", description: "", price: "$7.00" },
      { name: "BELGIAN TRIPLE (500 ML)", description: "", price: "$7.00" },
      { name: "CREAM ALE (500 ML)", description: "", price: "$7.00" }
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
      { name: "PADRINO", description: "", price: "$55.00" }
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
    imageSize: { width: 250, height: 500 },
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
    imageSize: { width: 1000, height: 1800 },
    items: [
      { name: "TEQUILA SUNRISE", description: "(TEQUILA, JUGO DE NARANJA, GRANADINA)", price: "$6.00" },
      { name: "MARGARITA CLÁSICA", description: "(TEQUILA, LIMÓN FRESCO, TRIPLE SEC)", price: "$7.00" },
      { name: "MARGARITA MIX", description: "(TEQUILA, LIMÓN FRESCO, TRIPLE SEC, FRUTAS: FRESA, MORA, NARANJA, MARACUYÁ)", price: "$7.50" },
      { name: "WHITE RUSSIAN", description: "(VODKA, LICOR DE CAFÉ, IRISH CREAM)", price: "$6.00" },
      { name: "BLACK RUSSIAN", description: "(VODKA, LICOR DE CAFÉ)", price: "$6.00" },
      { name: "CAIPIROSHKA MIX", description: "(VODKA, LIMÓN FRESCO, FRUTAS: FRESA, MORA, NARANJA, MARACUYÁ)", price: "$6.00" },
      { name: "GINA", description: "(VODKA, MARACUYÁ, LIMÓN FRESCO, VINO TINTO)", price: "$6.00" },
      { name: "MOSCU MULE", description: "(VODKA, LICOR DE FRESCO, GINGER ALE SIROPE JENGIBRE)", price: "$7.00" },
      { name: "BESO DE ARAÑA", description: "(VODKA, LICOR DE MELON, LIMON FRESCO)", price: "$6.00" },
      { name: "SANGRÍA RUSA", description: "(VODKA, VINO TINTO, LIMON FRESCO, NARANJA, MORA)", price: "$5.50" },
      { name: "DESTORNILLADOR", description: "(VODKA, GRANADINA, JUGO DE NARANJA)", price: "$5.00" },
      { name: "VODKA TONIC", description: "(VODKA, AGUA TONICA)", price: "$5.00" },
      { name: "CUBA LIBRE", description: "(RON, LIMÓN FRESCO, COCA-COLA, ANGOSTURA BITTER)", price: "$5.00" },
      { name: "MOJITO", description: "(RON BLANCO, LIMÓN FRESCO, AZÚCAR, HIERBA BUENA)", price: "$5.00" },
      { name: "MOJITO MIX", description: "(RON, LIMÓN FRESCO, HIERBA BUENA, FRUTAS: FRESA, MORA, NARANJA, MARACUYÁ)", price: "$5.50" },
      { name: "DAIQUIRI", description: "(RON, LIMÓN FRESCO, AZÚCAR, FRUTAS: FRESA, MORA, NARANJA, MARACUYÁ)", price: "$6.00" },
      { name: "PIÑA COLADA", description: "(RON, PIÑA HAWAIANA, IRISH CREAM, CREMA DE LECHE)", price: "$8.00" },
      { name: "EL PADRINO", description: "(RED LABEL, LICOR AMARETTO)", price: "$6.50" },
      { name: "LUCIFER", description: "(RED LABEL, LICOR AMARETTO, JUGO DE NARANJA)", price: "$6.50" },
      { name: "OLD FASHIONED", description: "(RED LABEL, ANGOSTURA BITTER, AZÚCAR, NARANJA)", price: "$8.00" },
      { name: "WHISKY SOUR NEW YORK", description: "(RED LABEL, LIMÓN FRESCO, AZÚCAR, CLARA DE HUEVO)", price: "$10.00" },
      { name: "GIN TONIC", description: "(GIN, LIMÓN FRESCO, AGUA TONICA, BOTANICAS)", price: "$6.00" },
      { name: "RED GIN", description: "(GIN, MORA, HIERBA BUENA, JENGIBRE ALE)", price: "$6.00" },
      { name: "NEGRONI", description: "(GIN, CAMPARI, VERMOUTH ROSSO)", price: "$8.00" }
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
      { name: "MAI-TAI", description: "(RON BLANCO, RON NEGRO, JUGO DE NARANJA, PIÑA, LICOR AMARETTO, GRANADINA)", price: "$8.00" },
      { name: "LONG ISLAND", description: "(VODKA, GIN, TRIPLE SEC, TEQUILA, RON BLANCO, COCA-COLA)", price: "$7.00" },
      { name: "HADA VERDE", description: "(VODKA, RON BLANCO, GIN, BLUE CURACAO, LICOR DE MELÓN, LIMÓN FRESCO, ENERGIZANTE)", price: "$7.00" },
      { name: "K-12", description: "(GIN, TEQUILA, TRIPLE SEC, ENERGIZANTE, SPRITE)", price: "$7.00" },
      { name: "JAGGER BOMB DE LA CASA", description: "(LICOR DE HIERBAS, ENERGIZANTE)", price: "$8.00" }
    ],
  },
  {
    id: "bebidas-calientes",
    title: "BEBIDAS CALIENTES",
    animationDirection: "left",
    image: "/Imagenes/bebidascalientes.png",
    imageSize: { width: 150, height: 150 },
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
      { name: "TANQUERAY", description: "", price: "$8.00" },
      { name: "BEFEATER", description: "", price: "$8.00" },
      { name: "BOMBAY", description: "", price: "$9.00" },
      { name: "JOHNNY WALKER RED LABEL", description: "", price: "$5.00" },
      { name: "JOHNNY WALKER DOUBLE BLACK", description: "", price: "$10.00" },
      { name: "JACK DANIEL'S", description: "(TENNESSEE-HONEY-FIRE)", price: "$12.00" },
      { name: "BUCHANANS", description: "", price: "$12.00" },
      { name: "DIPLOMÁTICO MANTUANO", description: "", price: "$10.00" },
      { name: "DIPLOMÁTICO RESERVA EXCLUSIVA", description: "", price: "$12.00" },
      { name: "ABUELO 7 AÑOS", description: "", price: "$8.00" },
      { name: "ABUELO ANEJO", description: "", price: "$5.00" },
      { name: "JOSE CUERVO (PLATA)", description: "", price: "$8.00" },
      { name: "JOSE CUERVO (ORO)", description: "", price: "$8.00" },
      { name: "DE LA CASA", description: "", price: "$4.00" },
      { name: "ANTIOQUEÑO", description: "", price: "$5.00" },
      { name: "CACHACA", description: "", price: "$10.00" },
      { name: "PISCO  ", description: "", price: "$10.00" }

    ],
  },
]
const useImagePreloader = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set())
  const [isMobile, setIsMobile] = useState(false)

  // Detectar móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const preloadImage = useCallback((url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (loadedImages.has(url)) {
        resolve()
        return
      }

      if (loadingImages.has(url)) {
        const checkLoaded = () => {
          if (loadedImages.has(url)) {
            resolve()
          } else {
            setTimeout(checkLoaded, 50) // ✅ Reducido para móviles
          }
        }
        checkLoaded()
        return
      }

      setLoadingImages(prev => new Set([...prev, url]))

      const img = new window.Image()
      
      // ✅ NUEVO: Configuración optimizada para móviles
      img.loading = 'eager'
      img.decoding = 'async'
      img.fetchPriority = 'high'
      
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, url]))
        setLoadingImages(prev => {
          const newSet = new Set(prev)
          newSet.delete(url)
          return newSet
        })
        resolve()
      }
      
      img.onerror = () => {
        setLoadingImages(prev => {
          const newSet = new Set(prev)
          newSet.delete(url)
          return newSet
        })
        reject(new Error(`Failed to load ${url}`))
      }

      img.src = url
    })
  }, [loadedImages, loadingImages])

  // ✅ MEJORADO: Precarga con prioridades específicas para móvil
  const preloadImages = useCallback(async (urls: string[], priority: 'immediate' | 'high' | 'normal' | 'low' = 'normal') => {
    const validUrls = urls.filter(url => url.startsWith('/') && !loadedImages.has(url))
    
    if (validUrls.length === 0) return

    try {
      if (priority === 'immediate') {
        // ✅ NUEVO: Para móviles, carga inmediata sin delays
        await Promise.all(validUrls.map(url => preloadImage(url)))
      } else if (priority === 'high') {
        // Cargar en chunks pequeños con delays mínimos
        const chunks = isMobile ? validUrls.map(url => [url]) : // 1 por chunk en móvil
          validUrls.reduce((acc, url, i) => {
            const chunkIndex = Math.floor(i / 2)
            if (!acc[chunkIndex]) acc[chunkIndex] = []
            acc[chunkIndex].push(url)
            return acc
          }, [] as string[][])
        
        for (const chunk of chunks) {
          await Promise.allSettled(chunk.map(url => preloadImage(url)))
          if (!isMobile) await new Promise(resolve => setTimeout(resolve, 30))
        }
      } else {
        // Para prioridades normales y bajas, mantener el comportamiento actual
        const delay = priority === 'normal' ? (isMobile ? 50 : 100) : (isMobile ? 200 : 500)
        for (const url of validUrls) {
          try {
            await preloadImage(url)
            await new Promise(resolve => setTimeout(resolve, delay))
          } catch (error) {
            continue
          }
        }
      }
    } catch (error) {
      console.warn('Error in batch preload:', error)
    }
  }, [loadedImages, preloadImage, isMobile])

  return { 
    loadedImages, 
    loadingImages, 
    preloadImages,
    isImageLoaded: (url: string) => loadedImages.has(url),
    isImageLoading: (url: string) => loadingImages.has(url),
    isMobile
  }
}

// ✅ OPTIMIZADO: Componente principal con precarga anticipada
export default function MenuPage() {
  const searchParams = useSearchParams()
  const [openSections, setOpenSections] = useState<string[]>(["shots-ruso"])
  
  const allImageUrls = useMemo(() => 
    menuSections
      .filter(section => section.image.startsWith('/'))
      .map(section => section.image), 
    []
  )
  
  const { loadedImages, loadingImages, preloadImages, isImageLoaded, isImageLoading, isMobile } = useImagePreloader()

  // ✅ MEJORADO: Estrategia de precarga más agresiva para móviles
  useEffect(() => {
    const preloadStrategy = async () => {
      // 1. En móvil, cargar TODAS las imágenes críticas inmediatamente
      const criticalImages = menuSections
        .filter(section => section.image.startsWith('/'))
        .map(section => section.image)
        .slice(0, isMobile ? 6 : 3) // Más imágenes críticas en móvil

      if (criticalImages.length > 0) {
        await preloadImages(criticalImages, 'immediate')
      }

      // 2. Cargar el resto con prioridad alta en móvil
      const remainingImages = allImageUrls.filter(url => !criticalImages.includes(url))
      if (remainingImages.length > 0) {
        await preloadImages(remainingImages, isMobile ? 'high' : 'normal')
      }
    }

    // ✅ NUEVO: Sin delay inicial en móviles para mejor UX
    const initialDelay = isMobile ? 0 : 200
    
    const timer = setTimeout(preloadStrategy, initialDelay)
    return () => clearTimeout(timer)
  }, [allImageUrls, preloadImages, isMobile])

  // ✅ MEJORADO: Precarga inmediata y anticipada al abrir secciones
  const toggleSection = useCallback((sectionId: string) => {
    setOpenSections((prev) => {
      const isOpening = !prev.includes(sectionId)
      const newOpenSections = isOpening 
        ? [...prev, sectionId] 
        : prev.filter((id) => id !== sectionId)
      
      if (isOpening) {
        const section = menuSections.find(s => s.id === sectionId)
        if (section && section.image.startsWith('/')) {
          // ✅ CRÍTICO: Precarga inmediata de la imagen antes de mostrar el contenido
          if (!isImageLoaded(section.image)) {
            preloadImages([section.image], 'immediate')
          }
          
          // Precargar secciones adyacentes con mayor prioridad en móvil
          const currentIndex = menuSections.findIndex(s => s.id === sectionId)
          const adjacentSections = [
            menuSections[currentIndex + 1],
            menuSections[currentIndex - 1],
            menuSections[currentIndex + 2], // ✅ NUEVO: Precargar más secciones en móvil
            menuSections[currentIndex - 2]
          ].filter(Boolean)
          
          const adjacentImages = adjacentSections
            .map(s => s.image)
            .filter(img => img.startsWith('/'))
          
          if (adjacentImages.length > 0) {
            setTimeout(() => preloadImages(adjacentImages, isMobile ? 'high' : 'normal'), isMobile ? 100 : 300)
          }
        }
      }
      
      return newOpenSections
    })
  }, [preloadImages, isImageLoaded, isMobile])

  const handleDownloadMenu = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/Pdf/MENU_COCTELES_KALASHNIKOV.pdf";
    link.download = "MENU_COCTELES_KALASHNIKOV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen bg-black text-white"
    >
      <SharedHeader />
      <HeroSection onDownload={handleDownloadMenu} />
      <MenuSections 
        sections={menuSections} 
        openSections={openSections} 
        onToggle={toggleSection}
        isImageLoaded={isImageLoaded}
        isImageLoading={isImageLoading}
        isMobile={isMobile}
      />
      <Footer />
      <WhatsAppButton />
    </motion.div>
  )
}

// ✅ OPTIMIZADO: MenuSections con wait para imágenes en móvil
const MenuSections = memo(({
  sections,
  openSections,
  onToggle,
  isImageLoaded,
  isImageLoading,
  isMobile,
}: {
  sections: MenuSection[]
  openSections: string[]
  onToggle: (id: string) => void
  isImageLoaded: (url: string) => boolean
  isImageLoading: (url: string) => boolean
  isMobile: boolean
}) => {
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
            isImageLoaded={isImageLoaded(section.image)}
            isImageLoading={isImageLoading(section.image)}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  )
})

MenuSections.displayName = 'MenuSections'

// ✅ CRÍTICO: MenuSectionItem con sincronización imagen-contenido
const MenuSectionItem = memo(({
  section,
  isOpen,
  onToggle,
  index,
  isImageLoaded,
  isImageLoading,
  isMobile,
}: {
  section: MenuSection
  isOpen: boolean
  onToggle: () => void
  index: number
  isImageLoaded: boolean
  isImageLoading: boolean
  isMobile: boolean
}) => {
  const defaultSize = { width: 256, height: 256 }
  const imageSize = section.imageSize || defaultSize
  
  // ✅ CRÍTICO: Estado para controlar cuándo mostrar el contenido
  const [showContent, setShowContent] = useState(false)

  // ✅ NUEVO: Lógica para sincronizar imagen y contenido
  useEffect(() => {
    if (isOpen) {
      if (isMobile && section.image.startsWith('/')) {
        // En móvil, esperar a que la imagen esté cargada o dar timeout
        if (isImageLoaded) {
          setShowContent(true)
        } else {
          // ✅ NUEVO: Timeout de seguridad para evitar esperas infinitas
          const timeout = setTimeout(() => {
            setShowContent(true)
          }, 800) // Máximo 800ms de espera
          
          return () => clearTimeout(timeout)
        }
      } else {
        // En desktop o secciones sin imagen, mostrar inmediatamente
        setShowContent(true)
      }
    } else {
      setShowContent(false)
    }
  }, [isOpen, isImageLoaded, isMobile, section.image])

  // ✅ MEJORADO: Placeholder con mejor feedback visual
  const ImagePlaceholder = ({ width, height, isMobile = false }: { width: number, height: number, isMobile?: boolean }) => (
    <div
      className="bg-gray-800 rounded-lg flex flex-col items-center justify-center relative overflow-hidden"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Skeleton loader más elaborado */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/20 to-transparent animate-pulse" 
             style={{ animationDuration: '1.5s' }}></div>
      </div>
      <div className="relative z-10 text-center">
        <div className={`${isMobile ? 'w-8 h-8' : 'w-12 h-12'} bg-gray-600 rounded-full mb-3 mx-auto`}>
          <div className="w-full h-full bg-orange-500/30 rounded-full animate-ping"></div>
        </div>
        <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-400 font-medium`}>
          {isImageLoading ? 'Preparando...' : 'Imagen no disponible'}
        </div>
        {isImageLoading && (
          <div className="mt-3">
            <div className={`${isMobile ? 'w-16 h-1.5' : 'w-20 h-2'} bg-gray-700 rounded-full overflow-hidden mx-auto`}>
              <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 animate-pulse rounded-full"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ delay: index * 0.02, duration: 0.3 }}
      className="mb-4"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-4 md:px-6 bg-gray-900/50 hover:bg-gray-800/50 transition-colors border-b border-gray-800"
      >
        <div className="flex items-center space-x-4">
          <motion.div 
            animate={{ rotate: isOpen ? 45 : 0 }} 
            transition={{ duration: 0.15 }}
          >
            <Plus className="w-6 h-6 text-orange-500" />
          </motion.div>
          <span className="text-lg md:text-xl font-semibold text-orange-500">{section.title}</span>
        </div>
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              // ✅ NUEVO: Animación más suave en móvil
              transition: { 
                duration: isMobile ? 0.25 : 0.2, 
                ease: "easeOut",
                opacity: { delay: isMobile ? 0.1 : 0 }
              }
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden bg-gray-900/30"
          >
            <div className="p-4 md:p-6">
              {/* ✅ CRÍTICO: Mostrar contenido solo cuando showContent es true */}
              <AnimatePresence mode="wait">
                {showContent ? (
                  section.items.length > 0 ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-start"
                    >
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className={`flex justify-center w-full order-1 ${section.animationDirection === "left" ? "lg:order-1" : "lg:order-2"}`}
                      >
                        <div className="relative flex justify-center">
                          {section.image.startsWith('/') ? (
                            <div className="relative flex justify-center w-full">
                              {/* Desktop */}
                              <div className="hidden lg:block relative">
                                {!isImageLoaded && (
                                  <ImagePlaceholder width={imageSize.width} height={imageSize.height} />
                                )}
                                <Image
                                  src={section.image}
                                  alt={section.title}
                                  width={imageSize.width}
                                  height={imageSize.height}
                                  className={`object-contain max-w-full h-auto transition-all duration-300 ${
                                    isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
                                  }`}
                                  style={{
                                    maxWidth: `${imageSize.width}px`,
                                    maxHeight: '70vh'
                                  }}
                                  sizes={`(min-width: 1024px) ${imageSize.width}px, 280px`}
                                  priority={isOpen && index < 3}
                                  quality={90}
                                  placeholder="blur"
                                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                />
                              </div>

                              {/* Mobile */}
                              <div className="block lg:hidden relative mx-auto">
                                {!isImageLoaded && (
                                  <ImagePlaceholder width={280} height={300} isMobile />
                                )}
                                <Image
                                  src={section.image}
                                  alt={section.title}
                                  width={280}
                                  height={300}
                                  className={`object-contain w-full h-auto transition-all duration-300 ${
                                    isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
                                  }`}
                                  style={{
                                    maxWidth: '280px',
                                    maxHeight: '300px'
                                  }}
                                  sizes="280px"
                                  priority={isOpen && index < 4} // ✅ Mayor prioridad en móvil
                                  quality={85}
                                  placeholder="blur"
                                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                />
                              </div>
                            </div>
                          ) : (
                            <ImagePlaceholder 
                              width={imageSize.width} 
                              height={imageSize.height} 
                            />
                          )}
                        </div>
                      </motion.div>

                      {/* ✅ MEJORADO: Contenedor del menú con mejor animación */}
                      <motion.div 
                        initial={{ opacity: 0, x: section.animationDirection === "left" ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15, duration: 0.25 }}
                        className={`space-y-3 md:space-y-4 w-full order-2 ${section.animationDirection === "left" ? "lg:order-2" : "lg:order-1"}`}
                      >
                        {section.items.map((item, itemIndex) => (
                          <motion.div
                            key={`${item.name}-${itemIndex}`}
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ 
                              delay: 0.2 + (itemIndex * 0.015), // ✅ Delay más rápido
                              duration: 0.2 
                            }}
                            className="border-b border-gray-700 pb-3 md:pb-4"
                          >
                            <div className="flex justify-between items-start mb-1 md:mb-2 gap-2">
                              <h3 className="font-semibold text-white text-sm md:text-base leading-tight flex-1">
                                {item.name}
                              </h3>
                              <span className="text-orange-500 font-bold text-sm md:text-base whitespace-nowrap ml-2">
                                {item.price}
                              </span>
                            </div>
                            {item.description && (
                              <p className="text-gray-400 text-xs md:text-sm leading-relaxed pr-2">
                                {item.description}
                              </p>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-6 md:py-8"
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="flex justify-center"
                      >
                        {section.image.startsWith('/') ? (
                          <div className="relative">
                            {!isImageLoaded && (
                              <ImagePlaceholder 
                                width={imageSize.width} 
                                height={imageSize.height} 
                              />
                            )}
                            <Image
                              src={section.image}
                              alt={section.title}
                              width={imageSize.width}
                              height={imageSize.height}
                              className={`object-contain max-w-full h-auto transition-all duration-300 ${
                                isImageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
                              }`}
                              priority={isOpen && index < 3}
                              quality={90}
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            />
                          </div>
                        ) : (
                          <ImagePlaceholder 
                            width={imageSize.width} 
                            height={imageSize.height} 
                          />
                        )}
                      </motion.div>
                      <p className="text-gray-400 mt-4 text-sm md:text-base">Próximamente disponible</p>
                    </motion.div>
                  )
                ) : (
                  // ✅ NUEVO: Loading state mientras esperamos la imagen en móvil
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center items-center py-8"
                  >
                    <div className="text-center">
                      <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                      <p className="text-gray-400 text-sm">Cargando contenido...</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
})

MenuSectionItem.displayName = 'MenuSectionItem'

const HeroSection = memo(({ onDownload }: { onDownload: () => void }) => {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/Imagenes/Menu_logo.jpg"
          alt="Menu background"
          fill
          priority={true}
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="pt-24"></div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="max-w-2xl"
        >
          <h1 className="text-2xl md:text-2xl font-bold mb-6 text-white drop-shadow-2xl">
            Explora nuestra carta
          </h1>

          <p className="text-gray-300 text-sm mb-10 max-w-xs">
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
})

HeroSection.displayName = 'HeroSection'

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

Footer.displayName = 'Footer'

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