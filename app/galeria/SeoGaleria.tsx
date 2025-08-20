// app/galeria/SeoGaleria.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería de Videos y Fotos | Bar Ruso Kalashnikov Cuenca | 📸 Momentos Únicos",
  description: "🎥 Videos exclusivos y fotos del Bar Ruso Kalashnikov 📸 Ambiente nocturno único 🍹 Cócteles flameados 🎭 Experiencias memorables 📱 Actualización semanal de contenido",
  keywords: [
    // Keywords principales de galería
    "galeria bar ruso kalashnikov",
    "videos bar cuenca",
    "fotos bar kalashnikov cuenca",
    "galeria fotos bar cuenca",
    "videos cocteles flameados cuenca",
    
    // Contenido multimedia
    "videos preparacion cocteles",
    "ambiente nocturno cuenca fotos",
    "galeria multimedia bar cuenca",
    "videos exclusivos bar ruso",
    "fotos interior bar kalashnikov",
    
    // Experiencias visuales
    "momentos unicos bar cuenca",
    "experiencia visual bar ruso",
    "decoracion bar cuenca fotos",
    "equipo trabajo bar kalashnikov",
    "eventos especiales bar cuenca",
    
    // Términos de búsqueda específicos
    "ver fotos bar ruso kalashnikov",
    "videos reales bar cuenca",
    "como es bar kalashnikov por dentro",
    "ambiente real bar ruso cuenca",
    "galeria instagram bar cuenca",
    
    // Long tail keywords
    "galeria completa bar ruso kalashnikov cuenca",
    "videos preparacion tragos bar cuenca ecuador",
    "fotos ambiente nocturno cuenca azuay",
    "mejores momentos bar kalashnikov galeria",
    "contenido exclusivo bar ruso cuenca"
  ],
  
  openGraph: {
    title: "📸 Galería Exclusiva | Bar Ruso Kalashnikov | Videos y Fotos Únicas",
    description: "🎥 Descubre momentos únicos 📸 Videos de cócteles flameados 🌃 Ambiente nocturno auténtico 🍹 Experiencias memorables 📱 Contenido actualizado semanalmente",
    url: "https://rusobar.com/galeria",
    siteName: "Bar Ruso Kalashnikov",
    type: "website",
    locale: "es_EC",
    images: [
      {
        url: "https://rusobar.com/Imagenes/logo_bar.jpeg",
        width: 1200,
        height: 630,
        alt: "Galería Bar Ruso Kalashnikov - Videos y fotos exclusivas"
      },
      {
        url: "https://rusobar.com/Imagenes/galeria_foto_1.jpg",
        width: 800,
        height: 600,
        alt: "Ambiente nocturno Bar Ruso Kalashnikov"
      },
      {
        url: "https://rusobar.com/Imagenes/galeria_foto_2.jpeg",
        width: 800,
        height: 600,
        alt: "Nuestras visitas Bar Kalashnikov"
      },
      {
        url: "https://rusobar.com/Imagenes/galeria_foto_3.jpg",
        width: 800,
        height: 600,
        alt: "Interior renovado Bar Ruso"
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@BarRusoKalashnikov",
    creator: "@BarRusoKalashnikov",
    title: "📸 Galería Exclusiva | Bar Ruso Kalashnikov Cuenca",
    description: "🎥 Videos únicos 📸 Fotos exclusivas 🍹 Momentos memorables",
    images: ["https://rusobar.com/Imagenes/logo_bar.jpeg"]
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
    canonical: "https://rusobar.com/galeria",
    languages: {
      'es-EC': 'https://rusobar.com/galeria',
      'es': 'https://rusobar.com/galeria',
    },
  },
  
  authors: [{ name: "Bar Ruso Kalashnikov", url: "https://rusobar.com" }],
  
  category: "Galería, Videos, Fotos, Multimedia",
  
  verification: {
    google: "tu-codigo-de-verificacion-google",
    yandex: "tu-codigo-yandex",
  },
  
  other: {
    // Schema.org para Rich Snippets
    'application/ld+json': JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Galería Bar Ruso Kalashnikov",
        "description": "Galería exclusiva con videos y fotografías del Bar Ruso Kalashnikov en Cuenca. Contenido actualizado semanalmente mostrando ambiente nocturno, preparación de cócteles y experiencias únicas.",
        "url": "https://rusobar.com/galeria",
        "mainEntity": {
          "@type": "BarOrPub",
          "@id": "https://rusobar.com/#bar"
        },
        "associatedMedia": [
          {
            "@type": "VideoObject",
            "name": "Preparación de Cócteles",
            "description": "Video exclusivo mostrando la preparación artesanal de cócteles en Bar Ruso Kalashnikov",
            "contentUrl": "https://rusobar.com/videos/Video-1.mp4",
            "thumbnailUrl": "https://rusobar.com/Imagenes/logo_bar.jpeg",
            "uploadDate": "2025-01-01",
            "duration": "PT30S"
          },
          {
            "@type": "VideoObject",
            "name": "Cócteles Flameados",
            "description": "Técnicas especiales de flameado en cócteles del Bar Ruso Kalashnikov",
            "contentUrl": "https://rusobar.com/videos/Video-2.mp4",
            "thumbnailUrl": "https://rusobar.com/Imagenes/logo_bar.jpeg",
            "uploadDate": "2025-01-01",
            "duration": "PT45S"
          },
          {
            "@type": "ImageObject",
            "name": "Ambiente Nocturno",
            "description": "Fotografía del ambiente nocturno único del Bar Ruso Kalashnikov",
            "contentUrl": "https://rusobar.com/Imagenes/galeria_foto_1.jpg",
            "width": "800",
            "height": "600"
          },
          {
            "@type": "ImageObject",
            "name": "Nuestras Visitas",
            "description": "Clientes disfrutando la experiencia en Bar Ruso Kalashnikov",
            "contentUrl": "https://rusobar.com/Imagenes/galeria_foto_2.jpeg",
            "width": "800",
            "height": "600"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BarOrPub",
        "@id": "https://rusobar.com/#bar",
        "name": "Bar Ruso Kalashnikov",
        "image": [
          "https://rusobar.com/Imagenes/logo_bar.jpeg",
          "https://rusobar.com/Imagenes/galeria_foto_1.jpg",
          "https://rusobar.com/Imagenes/galeria_foto_2.jpeg",
          "https://rusobar.com/Imagenes/galeria_foto_3.jpg",
          "https://rusobar.com/Imagenes/galeria_foto_4.jpg",
          "https://rusobar.com/Imagenes/galeria_foto_5.jpg"
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
            "opens": "15:00",
            "closes": "00:00"
          }
        ],
        "sameAs": [
          "https://facebook.com/barrusokalashnikov",
          "https://www.instagram.com/explore/locations/764588696/bar-ruso-kalashnikov/",
          "https://www.google.com/maps/place/Bar+Ruso+Kalashnikov/@-2.9053604,-79.0121328,433m/data=!3m1!1e3!4m10!1m2!2m1!1scocteles!3m6!1s0x91cd194baa33c27f:0x1bd14ff355480aa5!8m2!3d-2.9053604!4d-79.0112284!15sCghjb2N0ZWxlc1oKIghjb2N0ZWxlc5IBA2JhcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNMmIxbHhlRkZuRUFFqgFICggvbS8wMjRnNhABKgwiCGNvY3RlbGVzKA4yHhABIhpKWkOv7yyP5zgKC63_-P0b64-6vWa_9As5rDIMEAIiCGNvY3RlbGVz4AEA-gEECAAQQA!16s%2Fg%2F11gjj1nnvp?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D"
        ],
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
            "name": "Galería",
            "item": "https://rusobar.com/galeria"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "MediaGallery",
        "name": "Galería Multimedia - Bar Ruso Kalashnikov",
        "description": "Colección exclusiva de videos y fotografías del Bar Ruso Kalashnikov. Actualizada semanalmente con nuevo contenido del ambiente nocturno y experiencias únicas.",
        "url": "https://rusobar.com/galeria",
        "contentLocation": {
          "@type": "BarOrPub",
          "name": "Bar Ruso Kalashnikov",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cuenca",
            "addressCountry": "EC"
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Con qué frecuencia se actualiza la galería?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Actualizamos nuestra galería semanalmente con nuevos videos y fotografías que capturan los momentos más especiales de nuestras noches. Cada semana compartimos contenido exclusivo del ambiente nocturno y experiencias únicas."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué tipo de contenido encuentro en la galería?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nuestra galería incluye videos de preparación de cócteles artesanales, cócteles flameados, ambiente nocturno, equipo de trabajo, momentos especiales y fotografías del interior renovado, decoración especial y nuestras visitas."
            }
          },
          {
            "@type": "Question",
            "name": "¿Puedo aparecer en la galería del bar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "¡Por supuesto! Visítanos y vive momentos únicos que podrían aparecer en nuestra próxima actualización semanal. Cada noche es una nueva historia y nos encanta compartir las experiencias especiales de nuestros clientes."
            }
          },
          {
            "@type": "Question",
            "name": "¿Los videos muestran la preparación real de cócteles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, todos nuestros videos son auténticos y muestran la preparación real de nuestros cócteles artesanales. Podrás ver técnicas de flameado, mixología profesional y el arte detrás de cada bebida que servimos."
            }
          },
          {
            "@type": "Question",
            "name": "¿Puedo compartir el contenido de la galería?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Te invitamos a seguirnos en Instagram y compartir tu experiencia. Etiquétanos para que tu momento especial también pueda formar parte de nuestra galería semanal."
            }
          }
        ]
      }
    ]),
    
    // Meta tags adicionales para multimedia
    'fb:app_id': 'tu_app_id_facebook',
    'og:locale:alternate': ['es_ES', 'es_MX'],
    'og:video:type': 'video/mp4',
    'og:video:width': '1920',
    'og:video:height': '1080',
    
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
    
    // Meta tags específicos para galería
    'gallery:type': 'multimedia',
    'gallery:content': 'videos, fotografías, experiencias',
    'gallery:update_frequency': 'weekly',
    'gallery:total_items': '12+',
    'gallery:categories': 'cócteles, ambiente, equipo, momentos especiales',
    
    // Meta tags para contenido multimedia
    'video:duration': 'Variable',
    'video:release_date': '2025-01-01',
    'image:width': '800',
    'image:height': '600',
    'image:type': 'image/jpeg',
    
    // Horarios específicos
    'business:hours:day': 'monday tuesday wednesday thursday friday saturday',
    'business:hours:start': '15:00',
    'business:hours:end': '00:00',
    
    // Meta tags adicionales para SEO local
    'article:author': 'Bar Ruso Kalashnikov',
    'article:publisher': 'https://rusobar.com',
    'article:section': 'Galería Multimedia',
    
    // Meta tags para redes sociales específicas
    'instagram:account': '@bar_ruso_kalashnikov_cuenca',
    'facebook:page': 'barrusokalashnikov',
    'social:media_type': 'multimedia_gallery'
  }
};

// Función para generar metadata dinámica basada en filtros
export function generateFilterMetadata(filter: 'all' | 'video' | 'photo'): Metadata {
  const baseMetadata = { ...metadata };
  
  const filterTitles = {
    all: "Galería Completa | Bar Ruso Kalashnikov | Videos y Fotos",
    video: "Videos Exclusivos | Bar Ruso Kalashnikov | Cócteles y Ambiente", 
    photo: "Fotografías Únicas | Bar Ruso Kalashnikov | Interior y Momentos"
  };
  
  const filterDescriptions = {
    all: "🎥📸 Galería completa con videos y fotografías del Bar Ruso Kalashnikov 🍹 Cócteles artesanales 🌃 Ambiente nocturno único",
    video: "🎥 Videos exclusivos del Bar Ruso Kalashnikov 🔥 Cócteles flameados 🍹 Preparación artesanal 👨‍🍳 Equipo profesional",
    photo: "📸 Fotografías únicas del Bar Ruso Kalashnikov 🏪 Interior renovado 👥 Momentos especiales 🎭 Decoración rusa auténtica"
  };
  
  baseMetadata.title = filterTitles[filter];
  baseMetadata.description = filterDescriptions[filter];
  
  if (baseMetadata.openGraph) {
    baseMetadata.openGraph.title = filterTitles[filter];
    baseMetadata.openGraph.description = filterDescriptions[filter];
  }
  
  return baseMetadata;
}

// Función para metadata de eventos especiales
export function generateEventGalleryMetadata(eventName: string, eventDate: string): Metadata {
  const baseMetadata = { ...metadata };
  
  baseMetadata.title = `${eventName} | Galería Bar Ruso Kalashnikov | ${eventDate}`;
  baseMetadata.description = `🎉 Galería exclusiva del evento ${eventName} 📸 Fotos y videos únicos 🍹 Momentos memorables en Bar Ruso Kalashnikov ${eventDate}`;
  
  if (baseMetadata.openGraph) {
    baseMetadata.openGraph.title = `${eventName} | Galería Exclusiva Bar Ruso Kalashnikov`;
    baseMetadata.openGraph.description = baseMetadata.description;
  }
  
  return baseMetadata;
}