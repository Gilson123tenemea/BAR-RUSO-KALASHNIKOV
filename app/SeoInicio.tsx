// app/SeoInicio.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Título optimizado con palabras clave de alta búsqueda en Cuenca
  title: "Bar Ruso Kalashnikov",
  
  // Meta descripción optimizada con emojis y call-to-action
  description: "⭐ #1 BAR EN CUENCA ⭐ +250 cócteles únicos 🍹 Shots del Ruso 🔥 Mixología premium 🎉 Centro histórico 📍 Reservas: 099-557-5335 ✅ ABIERTO HOY",
  
  // Keywords expandidas con términos locales y de búsqueda alta
  keywords: [
    // Términos principales
    "mejor bar cuenca ecuador",
    "bar ruso kalashnikov cuenca",
    "cocteleria cuenca centro",
    
    // Búsquedas locales específicas
    "bares centro historico cuenca",
    "vida nocturna cuenca ecuador",
    "donde tomar cuenca",
    "bares abiertos cuenca",
    "cocteleria premium cuenca",
    
    // Productos específicos
    "shots del ruso cuenca",
    "cocteles flameados cuenca",
    "moscow mule cuenca",
    "vodka cuenca",
    "mixologia cuenca",
    
    // Búsquedas de actividades
    "que hacer en cuenca por la noche",
    "plan nocturno cuenca",
    "citas romanticas cuenca",
    "celebraciones cuenca",
    "cumpleaños cuenca",
    
    // Términos comerciales
    "reservar bar cuenca",
    "bar con ambiente cuenca",
    "bar exclusivo cuenca",
    "happy hour cuenca",
    
    // Ubicación específica
    "bares zona rosa cuenca",
    "bares calderon cuenca",
    "bar calle larga cuenca",
    "bares turisticos cuenca",
    
    // Long tail keywords
    "donde tomar un buen trago en cuenca",
    "bar ruso en cuenca ecuador",
    "mejores cocteles de cuenca"
  ],
  
  // OpenGraph optimizado y funcional
  openGraph: {
    title: "🔥 Bar Ruso Kalashnikov | #1 BAR EN CUENCA ECUADOR 🍸",
    description: "⭐ +250 CÓCTELES ÚNICOS ⭐ Shots del Ruso 🔥 Mixología Premium 🎯 Centro Histórico 📞 RESERVA: 099-557-5335",
    url: "https://rusobar.com/",
    siteName: "Bar Ruso Kalashnikov Cuenca",
    type: "website",
    locale: "es_EC",
    images: [
      {
        url: "https://rusobar.com/Imagenes/Inicio_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bar Ruso Kalashnikov - El #1 bar de Cuenca Ecuador con más de 250 cócteles únicos"
      },
      {
        url: "https://rusobar.com/Imagenes/local.jpeg", 
        width: 1200,
        height: 630,
        alt: "Interior del mejor bar de Cuenca - Bar Ruso Kalashnikov"
      }
    ],
  },
  
  // Twitter Cards optimizado
  twitter: {
    card: "summary_large_image",
    title: "🍸 Bar Ruso Kalashnikov | Mejor Bar de Cuenca Ecuador",
    description: "⭐ #1 EN CUENCA ⭐ +250 cócteles únicos 🔥 Shots del Ruso 📍 Centro histórico ✅ RESERVA: 099-557-5335",
    images: ["https://rusobar.com/Imagenes/Inicio_logo.jpg"]
  },
  
  // Configuración de robots mejorada
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Información adicional del negocio
  category: "Bar & Restaurant",
  
  // Información geográfica
  other: {
    "geo.region": "EC-A",
    "geo.placename": "Cuenca", 
    "geo.position": "-2.9001285;-79.0058965",
    "ICBM": "-2.9001285, -79.0058965",
    "business.contact_data.phone_number": "+593995575335",
    "business.contact_data.locality": "Cuenca",
    "business.contact_data.region": "Azuay",
    "business.contact_data.country": "Ecuador"
  },
  
  // Verificaciones (agrega tus códigos reales)
  verification: {
    google: "your-google-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification"
    }
  },
  
  // Información del autor/negocio
  authors: [{ name: "Bar Ruso Kalashnikov" }],
  creator: "Bar Ruso Kalashnikov",
  publisher: "Bar Ruso Kalashnikov Cuenca",
  
  // URLs alternativas y canónicas
  alternates: {
    canonical: "https://rusobar.com",
    languages: {
      'es-EC': 'https://rusobar.com'
    }
  }
};