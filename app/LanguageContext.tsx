"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'es' | 'en' | 'ru'

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKeys) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 🔥 TODAS LAS CLAVES DE TRADUCCIÓN EXPANDIDAS
type TranslationKeys = 
  // Navegación (ya existentes)
  | 'nav.home'
  | 'nav.menu'
  | 'nav.about'
  | 'nav.contact'
  | 'nav.gallery'
  | 'header.contact'
  | 'whatsapp.message'
  
  // Hero Section
  | 'hero.title.line1'
  | 'hero.title.line2'
  | 'hero.description'
  | 'hero.button.more'
  
  // Welcome Section
  | 'welcome.badge'
  | 'welcome.title.line1'
  | 'welcome.title.line2'
  | 'welcome.description'
  | 'welcome.button.know'
  
  // Menu Section
  | 'menu.title'
  | 'menu.description'
  | 'menu.items.shots'
  | 'menu.items.flamed'
  | 'menu.items.specials'
  | 'menu.items.beers'
  | 'menu.items.nonalcoholic'
  
  // Bar Interior Section
  | 'interior.title'
  | 'interior.description'
  
  // Local Section
  | 'local.badge'
  | 'local.description.paragraph1'
  | 'local.description.paragraph2'
  
  // Stats Section
  | 'stats.rating'
  | 'stats.reviews'
  | 'stats.cocktails'
  | 'stats.followers'
  
  // Footer
  | 'footer.description'
  | 'footer.pages'
  | 'footer.schedules'
  | 'footer.days.monday'
  | 'footer.days.tuesday'
  | 'footer.days.wednesday'
  | 'footer.days.thursday'
  | 'footer.days.friday'
  | 'footer.days.saturday'
  | 'footer.days.sunday'
  | 'footer.status.open'
  | 'footer.status.closed'
  | 'footer.time.current'
  | 'footer.rights'
  
  // Loading Screen
  | 'loading.loading'
  | 'loading.preparing'
  | 'loading.progress'
  
  // Gallery
  | 'gallery.ready'
  | 'gallery.of'

type Translations = Record<Language, Record<TranslationKeys, string>>

// 🌍 TRADUCCIONES COMPLETAS
const translations: Translations = {
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.menu': 'Menú',
    'nav.about': 'Sobre Nosotros',
    'nav.contact': 'Contacto',
    'nav.gallery': 'Galería',
    'header.contact': 'Contactar',
    'whatsapp.message': 'Hola, me gustaría hacer una reserva en Bar Ruso Kalashnikov',
    
    // Hero Section
    'hero.title.line1': 'Cócteles con carácter.',
    'hero.title.line2': 'Veladas con sabor.',
    'hero.description': 'Un bar íntimo en el centro de la ciudad: más de 250 cócteles, catas y música. Ven a disfrutar de una velada perfecta.',
    'hero.button.more': 'Más Información',
    
    // Welcome Section
    'welcome.badge': 'BIENVENIDOS',
    'welcome.title.line1': 'Una experiencia',
    'welcome.title.line2': 'única',
    'welcome.description': 'En el corazón de Cuenca, Bar Ruso Kalashnikov combina la tradición rusa con la creatividad en la coctelería moderna. Nuestros mixólogos expertos elaboran bebidas únicas que fusionan técnicas clásicas y vanguardistas. Cada visita es una experiencia sensorial que invita a disfrutar de momentos inolvidables en un ambiente vibrante, acogedor y lleno de energía.',
    'welcome.button.know': 'Conocer Más',
    
    // Menu Section
    'menu.title': 'NUESTRO MENÚ',
    'menu.description': 'Hemos creado una carta de cócteles pensada para cautivar todos tus sentidos, combinando recetas clásicas y creaciones exclusivas que te transportarán a un universo de aromas, colores y sensaciones únicas.',
    'menu.items.shots': 'Shots del Ruso',
    'menu.items.flamed': 'Cócteles Flameados',
    'menu.items.specials': 'Especiales',
    'menu.items.beers': 'Cervezas Artesanales',
    'menu.items.nonalcoholic': 'Cócteles Sin Alcohol',
    
    // Bar Interior Section
    'interior.title': 'TU DESEO, SERVIDO EN UNA COPA',
    'interior.description': 'En Kalashnikov, tú pides y recibes: la bebida perfecta que imaginas, creada a la medida de tus deseos por manos expertas. Aquí, cada cóctel es una promesa cumplida, un instante pensado solo para ti, donde el sabor, la pasión y la tradición se unen para ofrecerte una experiencia única e inolvidable.',
    
    // Local Section
    'local.badge': 'NUESTRO LOCAL',
    'local.description.paragraph1': 'Nuestra coctelería une la elegancia de la tradición rusa con la innovación contemporánea, creando bebidas que combinan destilados selectos, técnicas de mixología de alto nivel y presentaciones que cautivan a la vista y al paladar, al nivel de los mejores bares del mundo.',
    'local.description.paragraph2': 'Ubicado en un espacio de diseño sofisticado y atmósfera envolvente, nuestro bar transporta a cada visitante a un viaje sensorial donde el lujo, la cultura y el arte de la coctelería se encuentran para crear experiencias inolvidables.',
    
    // Stats
    'stats.rating': 'Calificación de Google',
    'stats.reviews': 'Reseñas',
    'stats.cocktails': 'Cócteles Únicos',
    'stats.followers': 'Seguidores',
    
    // Footer
    'footer.description': 'La experiencia nocturna más exclusiva de Cuenca. Donde la tradición se encuentra con la innovación.',
    'footer.pages': 'Páginas',
    'footer.schedules': 'Horarios de Apertura',
    'footer.days.monday': 'Lunes - Jueves:',
    'footer.days.tuesday': 'Martes:',
    'footer.days.wednesday': 'Miércoles:',
    'footer.days.thursday': 'Jueves:',
    'footer.days.friday': 'Viernes:',
    'footer.days.saturday': 'Sábado:',
    'footer.days.sunday': 'Domingo:',
    'footer.status.open': 'ABIERTO AHORA',
    'footer.status.closed': 'CERRADO AHORA',
    'footer.time.current': 'Hora actual:',
    'footer.rights': '© 2025 Bar Ruso Kalashnikov. Todos los derechos reservados.',
    
    // Loading
    'loading.loading': 'Cargando experiencia...',
    'loading.preparing': 'Preparando tu experiencia única...',
    'loading.progress': 'Galería lista:',
    
    // Gallery
    'gallery.ready': 'Galería lista:',
    'gallery.of': 'de'
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.gallery': 'Gallery',
    'header.contact': 'Contact',
    'whatsapp.message': 'Hello, I would like to make a reservation at Bar Ruso Kalashnikov',
    
    // Hero Section
    'hero.title.line1': 'Cocktails with character.',
    'hero.title.line2': 'Evenings with flavor.',
    'hero.description': 'An intimate bar in the city center: over 250 cocktails, tastings, and music. Come enjoy a perfect evening.',
    'hero.button.more': 'More Information',
    
    // Welcome Section
    'welcome.badge': 'WELCOME',
    'welcome.title.line1': 'A unique',
    'welcome.title.line2': 'experience',
    'welcome.description': 'In the heart of Cuenca, Bar Ruso Kalashnikov combines Russian tradition with creativity in modern mixology. Our expert mixologists craft unique drinks that fuse classic and avant-garde techniques. Every visit is a sensory experience that invites you to enjoy unforgettable moments in a vibrant, cozy atmosphere full of energy.',
    'welcome.button.know': 'Learn More',
    
    // Menu Section
    'menu.title': 'OUR MENU',
    'menu.description': 'We have created a cocktail menu designed to captivate all your senses, combining classic recipes and exclusive creations that will transport you to a universe of aromas, colors, and unique sensations.',
    'menu.items.shots': 'Russian Shots',
    'menu.items.flamed': 'Flamed Cocktails',
    'menu.items.specials': 'Specials',
    'menu.items.beers': 'Craft Beers',
    'menu.items.nonalcoholic': 'Non-Alcoholic Cocktails',
    
    // Bar Interior Section
    'interior.title': 'YOUR DESIRE, SERVED IN A GLASS',
    'interior.description': 'At Kalashnikov, you ask and receive: the perfect drink you imagine, crafted to your desires by expert hands. Here, every cocktail is a fulfilled promise, a moment designed just for you, where flavor, passion, and tradition unite to offer you a unique and unforgettable experience.',
    
    // Local Section
    'local.badge': 'OUR VENUE',
    'local.description.paragraph1': 'Our cocktail bar unites the elegance of Russian tradition with contemporary innovation, creating drinks that combine select spirits, high-level mixology techniques, and presentations that captivate both sight and palate, on par with the world\'s finest bars.',
    'local.description.paragraph2': 'Located in a space of sophisticated design and enveloping atmosphere, our bar transports every visitor on a sensory journey where luxury, culture, and the art of mixology come together to create unforgettable experiences.',
    
    // Stats
    'stats.rating': 'Google Rating',
    'stats.reviews': 'Reviews',
    'stats.cocktails': 'Unique Cocktails',
    'stats.followers': 'Followers',
    
    // Footer
    'footer.description': 'Cuenca\'s most exclusive nightlife experience. Where tradition meets innovation.',
    'footer.pages': 'Pages',
    'footer.schedules': 'Opening Hours',
    'footer.days.monday': 'Monday - Thursday:',
    'footer.days.tuesday': 'Tuesday:',
    'footer.days.wednesday': 'Wednesday:',
    'footer.days.thursday': 'Thursday:',
    'footer.days.friday': 'Friday:',
    'footer.days.saturday': 'Saturday:',
    'footer.days.sunday': 'Sunday:',
    'footer.status.open': 'OPEN NOW',
    'footer.status.closed': 'CLOSED NOW',
    'footer.time.current': 'Current time:',
    'footer.rights': '© 2025 Bar Ruso Kalashnikov. All rights reserved.',
    
    // Loading
    'loading.loading': 'Loading experience...',
    'loading.preparing': 'Preparing your unique experience...',
    'loading.progress': 'Gallery ready:',
    
    // Gallery
    'gallery.ready': 'Gallery ready:',
    'gallery.of': 'of'
  },
  
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.menu': 'Меню',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'nav.gallery': 'Галерея',
    'header.contact': 'Связаться',
    'whatsapp.message': 'Привет, я хотел бы забронировать столик в Bar Ruso Kalashnikov',
    
    // Hero Section
    'hero.title.line1': 'Коктейли с характером.',
    'hero.title.line2': 'Вечера со вкусом.',
    'hero.description': 'Уютный бар в центре города: более 250 коктейлей, дегустации и музыка. Приходите насладиться идеальным вечером.',
    'hero.button.more': 'Подробнее',
    
    // Welcome Section
    'welcome.badge': 'ДОБРО ПОЖАЛОВАТЬ',
    'welcome.title.line1': 'Уникальный',
    'welcome.title.line2': 'опыт',
    'welcome.description': 'В сердце Куэнки Bar Ruso Kalashnikov сочетает русские традиции с творческим подходом к современной миксологии. Наши опытные бармены создают уникальные напитки, объединяющие классические и авангардные техники. Каждый визит - это чувственный опыт, который приглашает насладиться незабываемыми моментами в яркой, уютной атмосфере, полной энергии.',
    'welcome.button.know': 'Узнать больше',
    
    // Menu Section
    'menu.title': 'НАШЕ МЕНЮ',
    'menu.description': 'Мы создали карту коктейлей, призванную пленить все ваши чувства, сочетая классические рецепты и эксклюзивные творения, которые перенесут вас во вселенную ароматов, цветов и уникальных ощущений.',
    'menu.items.shots': 'Русские Шоты',
    'menu.items.flamed': 'Фламбированные коктейли',
    'menu.items.specials': 'Фирменные',
    'menu.items.beers': 'Крафтовое пиво',
    'menu.items.nonalcoholic': 'Безалкогольные коктейли',
    
    // Bar Interior Section
    'interior.title': 'ВАШЕ ЖЕЛАНИЕ, ПОДАННОЕ В БОКАЛЕ',
    'interior.description': 'В Калашникове вы просите и получаете: идеальный напиток, который вы представляете, созданный по вашему желанию опытными руками. Здесь каждый коктейль - это исполненное обещание, момент, созданный только для вас, где вкус, страсть и традиция объединяются, чтобы предложить вам уникальный и незабываемый опыт.',
    
    // Local Section
    'local.badge': 'НАШ ЗАЛ',
    'local.description.paragraph1': 'Наш коктейльный бар объединяет элегантность русских традиций с современными инновациями, создавая напитки, сочетающие отборные спиртные напитки, высокоуровневые техники миксологии и подачу, которая пленит взгляд и вкус, на уровне лучших баров мира.',
    'local.description.paragraph2': 'Расположенный в пространстве изысканного дизайна и окутывающей атмосферы, наш бар переносит каждого посетителя в чувственное путешествие, где роскошь, культура и искусство миксологии встречаются, чтобы создать незабываемые впечатления.',
    
    // Stats
    'stats.rating': 'Рейтинг Google',
    'stats.reviews': 'Отзывы',
    'stats.cocktails': 'Уникальные коктейли',
    'stats.followers': 'Подписчики',
    
    // Footer
    'footer.description': 'Самый эксклюзивный ночной опыт Куэнки. Где традиция встречается с инновациями.',
    'footer.pages': 'Страницы',
    'footer.schedules': 'Часы работы',
    'footer.days.monday': 'Понедельник - Четверг:',
    'footer.days.tuesday': 'Вторник:',
    'footer.days.wednesday': 'Среда:',
    'footer.days.thursday': 'Четверг:',
    'footer.days.friday': 'Пятница:',
    'footer.days.saturday': 'Суббота:',
    'footer.days.sunday': 'Воскресенье:',
    'footer.status.open': 'СЕЙЧАС ОТКРЫТО',
    'footer.status.closed': 'СЕЙЧАС ЗАКРЫТО',
    'footer.time.current': 'Текущее время:',
    'footer.rights': '© 2025 Bar Ruso Kalashnikov. Все права защищены.',
    
    // Loading
    'loading.loading': 'Загрузка опыта...',
    'loading.preparing': 'Готовим ваш уникальный опыт...',
    'loading.progress': 'Галерея готова:',
    
    // Gallery
    'gallery.ready': 'Галерея готова:',
    'gallery.of': 'из'
  }
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('es')

  useEffect(() => {
    // Cargar idioma guardado en localStorage
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['es', 'en', 'ru'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: TranslationKeys): string => {
    return translations[currentLanguage][key] || key
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}