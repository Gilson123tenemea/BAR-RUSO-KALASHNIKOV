// app/sobre-nosotros/SeoSobreNosotros.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Bar Ruso Kalashnikov Cuenca | 🍸 Historia y Experiencia desde 2014",
  description: "✨ Descubre la historia del Bar Ruso Kalashnikov en Cuenca 🍹 +250 cócteles artesanales 🎭 3 salas únicas 👥 90 asientos 🇷🇺 Tradición rusa con coctelería de autor desde 2014",
  keywords: [
    // Keywords principales sobre nosotros
    "historia bar ruso kalashnikov",
    "sobre nosotros bar cuenca",
    "bar cuenca desde 2014",
    "cocteleria artesanal cuenca",
    "bar ruso cuenca historia",
    
    // Experiencia y servicios
    "250 cocteles bar cuenca",
    "mixologia cuenca ecuador",
    "cocteleria de autor cuenca",
    "bar con salas privadas cuenca",
    "eventos privados bar cuenca",
    
    // Ubicación y ambiente
    "mejor bar cuenca ecuador",
    "ambiente ruso cuenca",
    "decoracion rusa bar cuenca",
    "bar tematico ruso cuenca",
    "experiencia nocturna cuenca",
    
    // Equipo y servicio
    "bartenders expertos cuenca",
    "equipo profesional bar cuenca",
    "servicio premium bar cuenca",
    "atencion personalizada bar cuenca",
    "staff capacitado bar cuenca",
    
    // Long tail keywords
    "por que elegir bar ruso kalashnikov cuenca",
    "que hace especial bar kalashnikov cuenca",
    "historia tradicion rusa bar cuenca ecuador",
    "mejor experiencia nocturna cuenca azuay",
    "bar con mas variedad tragos cuenca"
  ],
  
  openGraph: {
    title: "🍸 Sobre Nosotros | Bar Ruso Kalashnikov | Tradición y Experiencia desde 2014",
    description: "✨ +250 cócteles artesanales 🎭 3 salas únicas 👥 Capacidad 90 personas 🇷🇺 Auténtica experiencia rusa en Cuenca 🏆 Líderes en coctelería de autor",
    url: "https://rusobar.com/sobre-nosotros",
    siteName: "Bar Ruso Kalashnikov",
    type: "website",
    locale: "es_EC",
    images: [
      {
        url: "https://rusobar.com/Imagenes/sobre nosotros logo.jpg",
        width: 1200,
        height: 630,
        alt: "Historia Bar Ruso Kalashnikov - Sobre nosotros"
      },
      {
        url: "https://rusobar.com/Imagenes/frase_del_bar.jpeg",
        width: 800,
        height: 600,
        alt: "Filosofía Bar Ruso Kalashnikov Cuenca"
      },
      {
        url: "https://rusobar.com/Imagenes/local.jpeg",
        width: 800,
        height: 600,
        alt: "Interior y ambiente Bar Ruso Kalashnikov"
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@BarRusoKalashnikov",
    creator: "@BarRusoKalashnikov",
    title: "🍸 Historia y Tradición | Bar Ruso Kalashnikov Cuenca",
    description: "🇷🇺 Desde 2014 🍹 +250 cócteles únicos 🎭 Experiencia auténtica rusa",
    images: ["https://rusobar.com/videos/Video-6.mp4"],
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
    canonical: "https://rusobar.com/sobre-nosotros",
    languages: {
      'es-EC': 'https://rusobar.com/sobre-nosotros',
      'es': 'https://rusobar.com/sobre-nosotros',
    },
  },
  
  authors: [{ name: "Bar Ruso Kalashnikov", url: "https://rusobar.com" }],
  
  category: "Historia, Sobre Nosotros, Experiencia",
  
  verification: {
    google: "tu-codigo-de-verificacion-google",
    yandex: "tu-codigo-yandex",
  },
  
  other: {
    // Schema.org para Rich Snippets
    'application/ld+json': JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "BarOrPub",
        "@id": "https://rusobar.com/#bar",
        "name": "Bar Ruso Kalashnikov",
        "image": [
          "https://rusobar.com/Imagenes/logo_bar.png",
          "https://rusobar.com/Imagenes/frase_del_bar.jpeg",
          "https://rusobar.com/Imagenes/local.jpeg"
        ],
        "url": "https://rusobar.com",
        "telephone": "+593995575335",
        "priceRange": "$$$",
        "foundingDate": "2014",
        "slogan": "Más que un bar, una experiencia",
        "description": "Bar temático ruso en Cuenca con más de 250 cócteles artesanales, 3 salas únicas y capacidad para 90 personas. Experiencia nocturna premium desde 2014.",
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
          }
        ],
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Coctelería Artesanal",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "3 Salas Temáticas",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Capacidad 90 Personas",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "250+ Cócteles",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Eventos Privados",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Tradición Rusa",
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
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "María González"
            },
            "reviewBody": "Ambiente increíble, cócteles únicos y música perfecta. ¡El mejor bar de Cuenca!"
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Carlos Mendoza"
            },
            "reviewBody": "La decoración rusa es espectacular y los tragos están buenísimos. Muy recomendado."
          }
        ],
        "sameAs": [
          "https://facebook.com/barrusokalashnikov",
          "https://www.instagram.com/explore/locations/764588696/bar-ruso-kalashnikov/",
          "https://www.google.com/maps/place/Bar+Ruso+Kalashnikov/@-2.9053604,-79.0121328,433m/data=!3m1!1e3!4m10!1m2!2m1!1scocteles!3m6!1s0x91cd194baa33c27f:0x1bd14ff355480aa5!8m2!3d-2.9053604!4d-79.0112284!15sCghjb2N0ZWxlc1oKIghjb2N0ZWxlc5IBA2JhcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNMmIxbHhlRkZuRUFFqgFICggvbS8wMjRnNhABKgwiCGNvY3RlbGVzKA4yHhABIhpKWkOv7yyP5zgKC63_-P0b64-6vWa_9As5rDIMEAIiCGNvY3RlbGVz4AEA-gEECAAQQA!16s%2Fg%2F11gjj1nnvp?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Bar Ruso Kalashnikov",
        "url": "https://rusobar.com",
        "logo": "https://rusobar.com/Imagenes/logo_bar.png",
        "description": "Bar temático ruso líder en Cuenca, Ecuador. Especialistas en coctelería artesanal con más de 250 recetas únicas y ambiente auténtico ruso desde 2014.",
        "foundingDate": "2014",
        "founders": [
          {
            "@type": "Person",
            "name": "Fundadores Bar Ruso Kalashnikov"
          }
        ],
        "numberOfEmployees": "15-25",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Remigio Crespo 1-87 y Agustín Cueva",
          "addressLocality": "Cuenca",
          "addressRegion": "Azuay",
          "addressCountry": "EC"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+593-99-557-5335",
          "contactType": "customer service",
          "areaServed": "EC",
          "availableLanguage": ["Spanish", "English"]
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
            "name": "Sobre Nosotros",
            "item": "https://rusobar.com/sobre-nosotros"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Sobre Nosotros - Bar Ruso Kalashnikov",
        "description": "Conoce la historia, filosofía y experiencia del Bar Ruso Kalashnikov, líder en coctelería artesanal en Cuenca desde 2014.",
        "url": "https://rusobar.com/sobre-nosotros",
        "mainEntity": {
          "@type": "BarOrPub",
          "@id": "https://rusobar.com/#bar"
        },
        "specialty": [
          "Coctelería Artesanal",
          "Tradición Rusa",
          "Ambiente Temático",
          "Experiencia Premium"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Desde cuándo existe el Bar Ruso Kalashnikov?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bar Ruso Kalashnikov opera desde 2014, siendo pioneros en coctelería artesanal y ambiente temático ruso en Cuenca. Con más de 10 años de experiencia, nos hemos consolidado como referente en la vida nocturna de la ciudad."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuántos cócteles tienen en su carta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Contamos con más de 250 cócteles únicos en nuestra carta, incluyendo clásicos rusos, creaciones de autor y bebidas premium. Nuestros mixólogos expertos utilizan ingredientes locales e importados para crear experiencias únicas."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué capacidad tiene el bar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tenemos capacidad para 90 personas distribuidas en 3 salas temáticas únicas. Cada espacio está diseñado para ofrecer una experiencia diferente, desde ambiente íntimo hasta celebraciones grupales."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué hace único al Bar Ruso Kalashnikov?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nuestra decoración auténtica rusa, coctelería artesanal con infusiones propias, equipo profesional altamente capacitado y ambiente exclusivo nos distinguen. Combinamos tradición rusa con técnicas modernas de mixología."
            }
          },
          {
            "@type": "Question",
            "name": "¿Ofrecen eventos privados?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, organizamos eventos privados, celebraciones corporativas y ocasiones especiales. Con 3 salas disponibles y servicio personalizado, adaptamos el espacio según tus necesidades específicas."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuál es la filosofía del bar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nuestra filosofía es 'Más que un bar, una experiencia'. Creemos que cada visita debe ser memorable, combinando hospitalidad rusa, coctelería de autor y un ambiente que cautive todos los sentidos."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Experiencia Bar Ruso Kalashnikov",
        "description": "Descubre el ambiente único y la experiencia premium del Bar Ruso Kalashnikov en Cuenca",
        "contentUrl": "https://rusobar.com/videos/e.mp4",
        "thumbnailUrl": "https://rusobar.com/Imagenes/sobre nosotros logo.jpg",
        "uploadDate": "2025-01-01",
        "duration": "PT30S"
      }
    ]),
    
    // Meta tags adicionales para redes sociales
    'fb:app_id': 'tu_app_id_facebook',
    'og:locale:alternate': ['es_ES', 'es_MX'],
    
    // Meta tags para geolocalización
    'geo.region': 'EC-A',
    'geo.placename': 'Cuenca',
    'geo.position': '-2.9053604;-79.0112284',
    'ICBM': '-2.9053604, -79.0112284',
    
    // Meta tags empresariales
    'business:contact_data:street_address': 'Remigio Crespo 1-87 y Agustín Cueva',
    'business:contact_data:locality': 'Cuenca',
    'business:contact_data:region': 'Azuay',
    'business:contact_data:postal_code': '010150',
    'business:contact_data:country_name': 'Ecuador',
    'business:contact_data:email': 'rusobarkalashnikov@gmail.com',
    'business:contact_data:phone_number': '+593995575335',
    'business:contact_data:website': 'https://rusobar.com',
    
    // Meta tags específicos para "sobre nosotros"
    'company:founded': '2014',
    'company:industry': 'Bar, Coctelería, Entretenimiento Nocturno',
    'company:employees': '15-25',
    'company:specialty': 'Coctelería Artesanal, Ambiente Ruso, Experiencia Premium',
    
    // Horarios específicos
    'business:hours:day': 'monday tuesday wednesday thursday friday saturday',
    'business:hours:start': '15:00',
    'business:hours:end': '00:00',
    
    // Meta tags adicionales para SEO local
    'article:author': 'Bar Ruso Kalashnikov',
    'article:publisher': 'https://rusobar.com',
    'article:section': 'Sobre Nosotros'
  }
};

// Función para generar metadata dinámica basada en eventos o promociones
export function generateDynamicAboutMetadata(specialEvent?: string): Metadata {
  const baseMetadata = { ...metadata };
  
  if (specialEvent) {
    baseMetadata.title = `${specialEvent} | Bar Ruso Kalashnikov | Historia y Tradición desde 2014`;
    baseMetadata.description = `🎉 ${specialEvent} ✨ Descubre nuestra historia 🍹 +250 cócteles únicos 🇷🇺 Experiencia auténtica rusa en Cuenca desde 2014`;
    
    if (baseMetadata.openGraph) {
      baseMetadata.openGraph.title = `${specialEvent} | Historia Bar Ruso Kalashnikov`;
      baseMetadata.openGraph.description = baseMetadata.description;
    }
  }
  
  return baseMetadata;
}

// Función para metadata específica por sección
export function generateSectionMetadata(section: 'historia' | 'equipo' | 'filosofia' | 'testimonios'): Metadata {
  const baseMetadata = { ...metadata };
  
  const sectionTitles = {
    historia: "Historia desde 2014 | Bar Ruso Kalashnikov Cuenca",
    equipo: "Nuestro Equipo Experto | Bar Ruso Kalashnikov",
    filosofia: "Filosofía y Experiencia | Bar Ruso Kalashnikov",
    testimonios: "Testimonios Clientes | Bar Ruso Kalashnikov"
  };
  
  const sectionDescriptions = {
    historia: "📅 Conoce la historia del Bar Ruso Kalashnikov desde 2014 🏆 Líderes en coctelería artesanal en Cuenca 🇷🇺 Tradición rusa auténtica",
    equipo: "👨‍🍳 Equipo profesional de mixólogos expertos 🍸 Técnicas avanzadas de coctelería 🎯 Servicio personalizado de alto nivel",
    filosofia: "✨ 'Más que un bar, una experiencia' 🎭 Filosofía de hospitalidad rusa 🍹 Arte líquido en cada copa",
    testimonios: "⭐ Testimonios reales de clientes 💬 Experiencias únicas verificadas 🏆 Calificación 4.8/5 estrellas"
  };
  
  baseMetadata.title = sectionTitles[section];
  baseMetadata.description = sectionDescriptions[section];
  
  if (baseMetadata.openGraph) {
    baseMetadata.openGraph.title = sectionTitles[section];
    baseMetadata.openGraph.description = sectionDescriptions[section];
  }
  
  return baseMetadata;
}