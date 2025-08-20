// app/contacto/SeoContacto.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto y Reservas | Bar Ruso Kalashnikov Cuenca | 📞 099-557-5335",
  description: "📍 Ubicación: Remigio Crespo 1-87, Cuenca ⏰ Abierto Lun-Sáb desde 15:00 📞 Reservas: 099-557-5335 ✉️ Contacto directo por WhatsApp | Formulario de contacto | Google Maps",
  keywords: [
    // Keywords principales de contacto
    "contacto bar ruso kalashnikov",
    "reservas bar cuenca",
    "ubicacion bar ruso cuenca",
    "telefono bar kalashnikov",
    "whatsapp bar cuenca",
    
    // Ubicación específica
    "bar remigio crespo cuenca",
    "bar agustin cueva cuenca",
    "bar centro cuenca direccion",
    "como llegar bar ruso kalashnikov",
    "donde queda bar kalashnikov cuenca",
    
    // Reservas y horarios
    "reservar mesa bar cuenca",
    "horarios bar ruso kalashnikov",
    "bar abierto ahora cuenca",
    "bar nocturno cuenca horarios",
    "reservaciones bar cuenca",
    
    // Términos de búsqueda local
    "mejor bar para reservar cuenca",
    "bar con whatsapp cuenca",
    "contacto directo bar cuenca",
    "bar eventos privados cuenca",
    "bar grupos grandes cuenca",
    
    // Long tail keywords
    "como hacer reserva bar ruso kalashnikov",
    "numero whatsapp bar cuenca ecuador",
    "direccion exacta bar kalashnikov cuenca",
    "bar abierto viernes noche cuenca",
    "reservar mesa fin de semana cuenca"
  ],
  
  openGraph: {
    title: "📞 Contacto y Reservas | Bar Ruso Kalashnikov | WhatsApp: 099-557-5335",
    description: "📍 Remigio Crespo 1-87, Cuenca ⏰ Lun-Sáb desde 15:00 🎉 Reserva tu mesa ahora 📱 Respuesta inmediata por WhatsApp ✨ El mejor ambiente nocturno de Cuenca",
    url: "https://rusobar.com/contacto",
    siteName: "Bar Ruso Kalashnikov",
    type: "website",
    locale: "es_EC",
    images: [
      {
        url: "https://rusobar.com/Imagenes/logo_bar.png",
        width: 1200,
        height: 630,
        alt: "Contacto Bar Ruso Kalashnikov - Reservas y ubicación"
      },
      {
        url: "https://rusobar.com/Imagenes/local.jpeg",
        width: 800,
        height: 600,
        alt: "Interior Bar Ruso Kalashnikov Cuenca"
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@BarRusoKalashnikov",
    creator: "@BarRusoKalashnikov",
    title: "📞 Reservas: 099-557-5335 | Bar Ruso Kalashnikov Cuenca",
    description: "📍 Centro de Cuenca ⏰ Abierto Lun-Sáb 🍸 Reserva tu mesa ahora",
    images: ["https://rusobar.com/Imagenes/contacto_logo.jpeg"]
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: "https://rusobar.com/contacto",
    languages: {
      'es-EC': 'https://rusobar.com/contacto',
      'es': 'https://rusobar.com/contacto',
    },
  },
  
  authors: [{ name: "Bar Ruso Kalashnikov", url: "https://rusobar.com" }],
  
  category: "Contacto, Reservas, Ubicación",
  
  verification: {
    google: "tu-codigo-de-verificacion-google",
    yandex: "tu-codigo-yandex",
  },
  
  other: {
    // Schema.org LocalBusiness para Rich Snippets
    'application/ld+json': JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "BarOrPub",
        "@id": "https://rusobar.com/#bar",
        "name": "Bar Ruso Kalashnikov",
        "image": [
          "https://rusobar.com/Imagenes/logo_bar.png",
          "https://rusobar.com/Imagenes/local.jpeg"
        ],
        "url": "https://rusobar.com",
        "telephone": "+593995575335",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Remigio Crespo 1-87 y Agustín Cueva",
          "addressLocality": "Cuenca",
          "addressRegion": "Azuay",
          "postalCode": "010150",
          "addressCountry": "EC"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -2.9053604,
          "longitude": -79.0112284
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Lunes", "Martes", "Miercoles", "Jueves"],
            "opens": "15:00",
            "closes": "00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Viernes",
            "opens": "15:00",
            "closes": "02:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sabado",
            "opens": "15:00",
            "closes": "00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Domingo",
            "opens": "00:00",
            "closes": "00:00",
            "description": "Cerrado los domingos"
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+593-99-557-5335",
          "contactType": "Reservaciones",
          "contactOption": ["TollFree", "HearingImpairedSupported"],
          "areaServed": "EC",
          "availableLanguage": ["Spanish", "English"]
        },
        "sameAs": [
          "https://facebook.com/barrusokalashnikov",
          "https://www.instagram.com/explore/locations/764588696/bar-ruso-kalashnikov/",
          "https://www.google.com/maps/place/Bar+Ruso+Kalashnikov/@-2.9053604,-79.0121328,433m/data=!3m1!1e3!4m10!1m2!2m1!1scocteles!3m6!1s0x91cd194baa33c27f:0x1bd14ff355480aa5!8m2!3d-2.9053604!4d-79.0112284!15sCghjb2N0ZWxlc1oKIghjb2N0ZWxlc5IBA2JhcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNMmIxbHhlRkZuRUFFqgFICggvbS8wMjRnNhABKgwiCGNvY3RlbGVzKA4yHhABIhpKWkOv7yyP5zgKC63_-P0b64-6vWa_9As5rDIMEAIiCGNvY3RlbGVz4AEA-gEECAAQQA!16s%2Fg%2F11gjj1nnvp?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D"
        ],
        "hasMap": "https://www.google.com/maps/place/Bar+Ruso+Kalashnikov/@-2.9053604,-79.0121328,433m/data=!3m1!1e3!4m10!1m2!2m1!1scocteles!3m6!1s0x91cd194baa33c27f:0x1bd14ff355480aa5!8m2!3d-2.9053604!4d-79.0112284!15sCghjb2N0ZWxlc1oKIghjb2N0ZWxlc5IBA2JhcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNMmIxbHhlRkZuRUFFqgFICggvbS8wMjRnNhABKgwiCGNvY3RlbGVzKA4yHhABIhpKWkOv7yyP5zgKC63_-P0b64-6vWa_9As5rDIMEAIiCGNvY3RlbGVz4AEA-gEECAAQQA!16s%2Fg%2F11gjj1nnvp?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D",
        "email": "rusobarkalashnikov@gmail.com",
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Reservaciones",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Wi-Fi Gratis",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Eventos Privados",
            "value": true
          }
        ],
        "paymentAccepted": "Cash, Credit Card, Debit Card",
        "currenciesAccepted": "USD",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "523",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://rusobar.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contacto",
            "item": "https://rusobar.com/contacto"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contacto y Reservas - Bar Ruso Kalashnikov",
        "description": "Página de contacto y reservaciones del Bar Ruso Kalashnikov en Cuenca. Reserva tu mesa por WhatsApp o formulario de contacto.",
        "url": "https://rusobar.com/contacto",
        "mainEntity": {
          "@type": "BarOrPub",
          "@id": "https://rusobar.com/#bar"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cómo puedo hacer una reserva en Bar Ruso Kalashnikov?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Puedes hacer tu reserva de 3 formas: 1) WhatsApp al 099-557-5335, 2) Llamando directamente, 3) Completando nuestro formulario de contacto. Recomendamos WhatsApp para respuesta inmediata."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuál es la dirección exacta del bar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Estamos ubicados en Remigio Crespo 1-87 y Agustín Cueva, en el centro de Cuenca, Ecuador. Puedes encontrarnos fácilmente en Google Maps buscando 'Bar Ruso Kalashnikov'."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuáles son los horarios de atención?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Abrimos de Lunes a Jueves de 15:00 a 00:00, Viernes de 15:00 a 02:00, Sábados de 15:00 a 00:00. Domingos permanecemos cerrados."
            }
          },
          {
            "@type": "Question",
            "name": "¿Aceptan reservas para grupos grandes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, aceptamos reservas para grupos grandes y eventos privados. Contáctanos con anticipación al 099-557-5335 para coordinar tu evento."
            }
          },
          {
            "@type": "Question",
            "name": "¿Tienen estacionamiento disponible?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Contamos con zonas de estacionamiento cercanas en el centro de Cuenca. Nuestro personal puede indicarte las mejores opciones al momento de tu llegada."
            }
          }
        ]
      }
    ]),
    
    // Meta tags adicionales para redes sociales locales
    'fb:app_id': 'tu_app_id_facebook',
    'og:locale:alternate': ['es_ES', 'es_MX'],
    
    // Meta tags para geolocalización mejorada
    'geo.region': 'EC-A',
    'geo.placename': 'Cuenca',
    'geo.position': '-2.9053604;-79.0112284',
    'ICBM': '-2.9053604, -79.0112284',
    
    // Meta tags adicionales para contacto
    'business:contact_data:street_address': 'Remigio Crespo 1-87 y Agustín Cueva',
    'business:contact_data:locality': 'Cuenca',
    'business:contact_data:region': 'Azuay',
    'business:contact_data:postal_code': '010150',
    'business:contact_data:country_name': 'Ecuador',
    'business:contact_data:email': 'rusobarkalashnikov@gmail.com',
    'business:contact_data:phone_number': '+593995575335',
    'business:contact_data:website': 'https://rusobar.com',
    
    // Horarios específicos para búsquedas
    'business:hours:day': 'monday tuesday wednesday thursday friday saturday',
    'business:hours:start': '15:00',
    'business:hours:end': '00:00',
  }
};

// Función para generar metadata dinámica basada en el estado del bar
export function generateDynamicContactMetadata(isOpen: boolean): Metadata {
  const baseMetadata = { ...metadata };
  
  const status = isOpen ? "🟢 ABIERTO AHORA" : "🔴 CERRADO";
  const statusText = isOpen 
    ? "¡Estamos ABIERTOS! Ven a disfrutar" 
    : "Actualmente cerrados. Reserva para mañana";
  
  baseMetadata.title = `${status} | Contacto Bar Ruso Kalashnikov | 📞 099-557-5335`;
  baseMetadata.description = `${statusText} 📍 Remigio Crespo 1-87, Cuenca 📞 Reservas: 099-557-5335 ⏰ Lun-Sáb desde 15:00`;
  
  if (baseMetadata.openGraph) {
    baseMetadata.openGraph.title = `${status} | Bar Ruso Kalashnikov Cuenca`;
    baseMetadata.openGraph.description = baseMetadata.description;
  }
  
  return baseMetadata;
}