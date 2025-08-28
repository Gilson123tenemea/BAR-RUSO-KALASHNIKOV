// app/menu/SeoMenu.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menú de Cócteles | Bar Ruso Kalashnikov Cuenca | +250 Bebidas Premium",
  description: "🔥 MENÚ COMPLETO Bar Ruso Kalashnikov ✨ Shots del Ruso $3 ✨ Cócteles Flameados ✨ Long Drinks ✨ Cervezas Artesanales ✨ Jarras 1L-3L ⭐ Los MEJORES precios de Cuenca 📞 099-557-5335",
  keywords: [
    // Keywords principales
    "menu bar ruso kalashnikov",
    "carta cocteles cuenca",
    "precios bar cuenca",
    "shots del ruso menu",
    "cocteles flameados precios",
    
    // Categorías específicas del menú
    "shots baratos cuenca",
    "cocteles con cerveza cuenca",
    "jarras de cocteles cuenca",
    "long drinks cuenca",
    "cervezas artesanales cuenca",
    "bebidas sin alcohol bar cuenca",
    
    // Bebidas específicas populares
    "mojito cuenca precio",
    "margarita bar cuenca",
    "piña colada cuenca",
    "cuba libre precio cuenca",
    "tequila sunrise cuenca",
    "gin tonic cuenca",
    
    // Términos de búsqueda local
    "mejor carta cocteles cuenca",
    "bar economico cuenca",
    "happy hour cuenca",
    "promociones bar cuenca",
    "bar centro historico cuenca menu",
    
    // Long tail keywords
    "donde tomar cocteles baratos en cuenca",
    "mejor bar para shots en cuenca",
    "cocteles flameados cuenca ecuador",
    "bar con jarras grandes cuenca"
  ],
  
  openGraph: {
    title: "🍸 MENÚ Bar Ruso Kalashnikov | +250 Cócteles | Mejores Precios Cuenca",
    description: "📋 CARTA COMPLETA ⭐ Shots desde $3 ⭐ Cócteles Flameados ⭐ Jarras 1L-3L ⭐ Cervezas Artesanales ⭐ ¡DESCARGA el menú PDF! 📞 Reservas: 099-557-5335",
    url: "https://rusobar.com/menu",
    siteName: "Bar Ruso Kalashnikov",
    type: "website",
    locale: "es_EC",
    images: [
      {
        url: "https://rusobar.com/Imagenes/Menu_logo.webp",
        width: 1200,
        height: 630,
        alt: "Menú completo Bar Ruso Kalashnikov - Cócteles y precios"
      },
      {
        url: "https://rusobar.com/Imagenes/shots_del_ruso_menu.webp",
        width: 800,
        height: 800,
        alt: "Shots del Ruso - Especialidad de la casa"
      },
      {
        url: "https://rusobar.com/Imagenes/cocteles_flameados_menu.webp",
        width: 800,
        height: 800,
        alt: "Cócteles Flameados - Show en tu mesa"
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@BarRusoKalashnikov",
    creator: "@BarRusoKalashnikov",
    title: "📋 MENÚ Bar Ruso Kalashnikov | +250 Cócteles Premium",
    description: "🔥 Shots desde $3 🔥 Cócteles Flameados 🔥 Jarras hasta 3L 🔥 Los mejores precios de Cuenca",
    images: ["https://rusobar.com/Imagenes/Menu_logo.webp"],
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
    canonical: "https://rusobar.com/menu",
    languages: {
      'es-EC': 'https://rusobar.com/menu',
      'es': 'https://rusobar.com/menu',
    },
  },
  
  authors: [{ name: "Bar Ruso Kalashnikov", url: "https://rusobar.com" }],
  
  category: "Bar, Restaurante, Entretenimiento",
  
  other: {
    // Schema.org para Rich Snippets
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Bar Ruso Kalashnikov",
      "image": "https://rusobar.com/Imagenes/logo_bar.webp",
      "url": "https://rusobar.com",
      "telephone": "+593995575335",
      "menu": "https://rusobar.com/menu",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Centro Histórico",
        "addressLocality": "Cuenca",
        "addressRegion": "Azuay",
        "postalCode": "010150",
        "addressCountry": "EC"
      },
      "servesCuisine": "Cócteles, Bebidas Premium",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "15:00",
          "closes": "00:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "15:00",
          "closes": "02:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "15:00",
          "closes": "00:00"
        }
      ],
      "hasMenu": {
        "@type": "Menu",
        "name": "Menú de Cócteles",
        "description": "Más de 250 cócteles únicos, shots especiales y bebidas premium",
        "hasMenuSection": [
          {
            "@type": "MenuSection",
            "name": "Shots del Ruso",
            "description": "Shots únicos de la casa desde $3",
            "hasMenuItem": [
              {
                "@type": "MenuItem",
                "name": "Siberiano",
                "description": "Vodka y licor de menta",
                "offers": {
                  "@type": "Offer",
                  "price": "3.00",
                  "priceCurrency": "USD"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Bandera Ecuatoriana",
                "description": "Vodka, Blue Curacao, Licor de Maracuyá y Granadina",
                "offers": {
                  "@type": "Offer",
                  "price": "4.00",
                  "priceCurrency": "USD"
                }
              }
            ]
          },
          {
            "@type": "MenuSection",
            "name": "Cócteles Flameados",
            "description": "Espectáculo de fuego en tu mesa",
            "hasMenuItem": [
              {
                "@type": "MenuItem",
                "name": "Ferrari",
                "description": "Ron, Triple Sec, Blue Curacao, Granadina",
                "offers": {
                  "@type": "Offer",
                  "price": "5.00",
                  "priceCurrency": "USD"
                }
              }
            ]
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "523"
      }
    }),
    
    // Meta tags adicionales para redes sociales locales
    'fb:app_id': 'tu_app_id_facebook',
    'og:locale:alternate': ['es_ES', 'es_MX'],
    
    // Meta tags para geolocalización
    'geo.region': 'EC-A',
    'geo.placename': 'Cuenca',
    'geo.position': '-2.9001285;-79.0058965',
    'ICBM': '-2.9001285, -79.0058965',
  }
};

export function generateDynamicMetadata(searchParams: { open?: string }): Metadata {
  const baseMetadata = { ...metadata };

  if (searchParams.open) {
    const sectionTitle = searchParams.open;
    baseMetadata.title = `${sectionTitle} | Menú Bar Ruso Kalashnikov | Precios Actualizados`;
    baseMetadata.description = `🔥 ${sectionTitle} en Bar Ruso Kalashnikov ✨ Los mejores precios de Cuenca ✨ Ver carta completa y precios actualizados ✨ Reservas: 099-557-5335`;

    if (baseMetadata.openGraph) {
      baseMetadata.openGraph.title = `${sectionTitle} | Bar Ruso Kalashnikov`;
      baseMetadata.openGraph.description = baseMetadata.description;
    }
  }

  return baseMetadata;
}

