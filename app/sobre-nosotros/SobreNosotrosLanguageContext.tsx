"use client"

import { createContext, useContext, ReactNode } from 'react'
import { useLanguage } from '../../components/LanguageContext'

// Definir el tipo de las traducciones específicas para Sobre Nosotros
type SobreNosotrosTranslationKeys = 
  // Hero Section
  | 'hero.title.part1'
  | 'hero.title.part2'
  | 'hero.description'
  | 'hero.button.ubicacion'
  
  // Experience Section
  | 'experience.title1'
  | 'experience.description1'
  | 'experience.title2'
  | 'experience.description2'
  
  // History Section
  | 'history.title'
  | 'history.paragraph1'
  | 'history.paragraph2'
  
  // Features Section
  | 'features.cocktail.title'
  | 'features.cocktail.description'
  | 'features.drinks.title'
  | 'features.drinks.description'
  | 'features.atmosphere.title'
  | 'features.atmosphere.description'
  
  // Team Section
  | 'team.title1'
  | 'team.description1'
  | 'team.title2'
  | 'team.description2'
  
  // Testimonials Section
  | 'testimonials.subtitle'
  | 'testimonials.title'
  | 'testimonials.maria.comment'
  | 'testimonials.carlos.comment'
  | 'testimonials.ana.comment'
  | 'testimonials.maria.time'
  | 'testimonials.carlos.time'
  | 'testimonials.ana.time'
  
  // Footer
  | 'footer.description'
  | 'footer.pages.title'
  | 'footer.pages.home'
  | 'footer.pages.about'
  | 'footer.pages.menu'
  | 'footer.pages.contact'
  | 'footer.pages.gallery'
  | 'footer.schedule.title'
  | 'footer.schedule.monday_thursday'
  | 'footer.schedule.friday'
  | 'footer.schedule.saturday'
  | 'footer.schedule.sunday'
  | 'footer.schedule.closed'
  | 'footer.status.open'
  | 'footer.status.closed'
  | 'footer.status.current_time'
  | 'footer.instagram.title'
  | 'footer.copyright'
  
  // WhatsApp
  | 'whatsapp.message'

type Language = 'es' | 'en' | 'ru'
type SobreNosotrosTranslations = Record<Language, Record<SobreNosotrosTranslationKeys, string>>

// Traducciones específicas para la página Sobre Nosotros
const sobreNosotrosTranslations: SobreNosotrosTranslations = {
  es: {
    // Hero Section
    'hero.title.part1': 'Más que un bar, una',
    'hero.title.part2': 'experiencia',
    'hero.description': 'Un espacio donde la creatividad, el ambiente y la coctelería de autor se unen para ofrecerte momentos inolvidables.',
    'hero.button.ubicacion': 'Ubicación',
    
    // Experience Section
    'experience.title1': 'Experiencia que inspira',
    'experience.description1': 'Cada detalle de nuestro bar está pensado para cautivar tus sentidos: luces suaves, música perfecta y un equipo que convierte cada visita en un momento único.',
    'experience.title2': 'Arte en cada copa',
    'experience.description2': 'Más que bebidas, creamos piezas de arte líquido. Ingredientes frescos, técnicas de autor y pasión en cada preparación.',
    
    // History Section
    'history.title': 'Nuestra historia',
    'history.paragraph1': 'Desde 2014, creamos un ambiente al que siempre querrás volver. Nuestras infusiones propias, el uso de productos locales y un equipo apasionado han hecho de este lugar un referente en la ciudad.',
    'history.paragraph2': 'Contamos con más de 250 cócteles en carta, 90 asientos disponibles y 3 salas únicas para que cada cliente viva su propia experiencia.',
    
    // Features Section
    'features.cocktail.title': 'Coctelería Artesanal',
    'features.cocktail.description': 'Cócteles únicos creados por nuestros mixólogos expertos con ingredientes premium importados directamente de Rusia.',
    'features.drinks.title': 'Bebidas Rusa',
    'features.drinks.description': 'Cócteles y tragos tradicionales rusos reinventados con técnicas modernas y presentación contemporánea, ofreciendo una experiencia única en cada sorbo.',
    'features.atmosphere.title': 'Ambiente Exclusivo',
    'features.atmosphere.description': 'Vive una atmósfera elegante e inspiradora, perfecta para compartir momentos únicos, rodeado de buena música y hospitalidad rusa.',
    
    // Team Section
    'team.title1': 'Equipo experto en coctelería',
    'team.description1': 'Con años de experiencia y un dominio impecable de las técnicas más sofisticadas, nuestro equipo crea bebidas que combinan precisión, sabor y presentación de alto nivel.',
    'team.title2': 'Bebidas que cuentan historias',
    'team.description2': 'Desde clásicos rusos hasta creaciones de autor, cada trago refleja dedicación, tradición y un toque contemporáneo que te invita a volver.',
    
    // Testimonials Section
    'testimonials.subtitle': 'TESTIMONIOS',
    'testimonials.title': 'Lo que dicen nuestros clientes',
    'testimonials.maria.comment': 'Ambiente increíble, cócteles únicos y música perfecta. ¡El mejor bar de Cuenca!',
    'testimonials.carlos.comment': 'La decoración rusa es espectacular y los tragos están buenísimos. Muy recomendado.',
    'testimonials.ana.comment': 'Excelente atención y ambiente nocturno. Perfecto para salir con amigos.',
    'testimonials.maria.time': 'Hace 1 semana',
    'testimonials.carlos.time': 'Hace 2 semanas',
    'testimonials.ana.time': 'Hace 3 semanas',
    
    // Footer
    'footer.description': 'La experiencia nocturna más exclusiva de Cuenca. Donde la tradición se encuentra con la innovación.',
    'footer.pages.title': 'Páginas',
    'footer.pages.home': 'Inicio',
    'footer.pages.about': 'Sobre Nosotros',
    'footer.pages.menu': 'Menú',
    'footer.pages.contact': 'Contacto',
    'footer.pages.gallery': 'Galería',
    'footer.schedule.title': 'Horarios de Apertura',
    'footer.schedule.monday_thursday': 'Lunes - Miércoles:',
    'footer.schedule.friday': 'Jueves - Viernes:',
    'footer.schedule.saturday': 'Sábado:',
    'footer.schedule.sunday': 'Domingo:',
    'footer.schedule.closed': 'CERRADO',
    'footer.status.open': 'ABIERTO AHORA',
    'footer.status.closed': 'CERRADO AHORA',
    'footer.status.current_time': 'Hora actual:',
    'footer.instagram.title': 'Instagram',
    'footer.copyright': '© 2025 Bar Ruso Kalashnikov. Todos los derechos reservados.',
    
    // WhatsApp
    'whatsapp.message': 'Hola, me gustaría hacer una reserva en Bar Ruso Kalashnikov'
  },
  
  en: {
    // Hero Section
    'hero.title.part1': 'More than a bar, an',
    'hero.title.part2': 'experience',
    'hero.description': 'A space where creativity, atmosphere and signature cocktails come together to offer you unforgettable moments.',
    'hero.button.ubicacion': 'Location',
    
    // Experience Section
    'experience.title1': 'Experience that inspires',
    'experience.description1': 'Every detail of our bar is designed to captivate your senses: soft lights, perfect music and a team that turns every visit into a unique moment.',
    'experience.title2': 'Art in every glass',
    'experience.description2': 'More than drinks, we create pieces of liquid art. Fresh ingredients, signature techniques and passion in every preparation.',
    
    // History Section
    'history.title': 'Our story',
    'history.paragraph1': 'Since 2014, we create an atmosphere you will always want to return to. Our own infusions, the use of local products and a passionate team have made this place a benchmark in the city.',
    'history.paragraph2': 'We have more than 250 cocktails on the menu, 90 seats available and 3 unique rooms so that each customer can live their own experience.',
    
    // Features Section
    'features.cocktail.title': 'Artisan Cocktails',
    'features.cocktail.description': 'Unique cocktails created by our expert mixologists with premium ingredients imported directly from Russia.',
    'features.drinks.title': 'Russian Drinks',
    'features.drinks.description': 'Traditional Russian cocktails and drinks reinvented with modern techniques and contemporary presentation, offering a unique experience in every sip.',
    'features.atmosphere.title': 'Exclusive Atmosphere',
    'features.atmosphere.description': 'Experience an elegant and inspiring atmosphere, perfect for sharing unique moments, surrounded by good music and Russian hospitality.',
    
    // Team Section
    'team.title1': 'Expert cocktail team',
    'team.description1': 'With years of experience and impeccable mastery of the most sophisticated techniques, our team creates drinks that combine precision, flavor and high-level presentation.',
    'team.title2': 'Drinks that tell stories',
    'team.description2': 'From Russian classics to signature creations, each drink reflects dedication, tradition and a contemporary touch that invites you to return.',
    
    // Testimonials Section
    'testimonials.subtitle': 'TESTIMONIALS',
    'testimonials.title': 'What our customers say',
    'testimonials.maria.comment': 'Amazing atmosphere, unique cocktails and perfect music. The best bar in Cuenca!',
    'testimonials.carlos.comment': 'The Russian decoration is spectacular and the drinks are delicious. Highly recommended.',
    'testimonials.ana.comment': 'Excellent service and nighttime atmosphere. Perfect for going out with friends.',
    'testimonials.maria.time': '1 week ago',
    'testimonials.carlos.time': '2 weeks ago',
    'testimonials.ana.time': '3 weeks ago',
    
    // Footer
    'footer.description': 'The most exclusive nighttime experience in Cuenca. Where tradition meets innovation.',
    'footer.pages.title': 'Pages',
    'footer.pages.home': 'Home',
    'footer.pages.about': 'About Us',
    'footer.pages.menu': 'Menu',
    'footer.pages.contact': 'Contact',
    'footer.pages.gallery': 'Gallery',
    'footer.schedule.title': 'Opening Hours',
    'footer.schedule.monday_thursday': 'Monday - Wednesday:',
    'footer.schedule.friday': 'Thursday - Friday:',
    'footer.schedule.saturday': 'Saturday:',
    'footer.schedule.sunday': 'Sunday:',
    'footer.schedule.closed': 'CLOSED',
    'footer.status.open': 'OPEN NOW',
    'footer.status.closed': 'CLOSED NOW',
    'footer.status.current_time': 'Current time:',
    'footer.instagram.title': 'Instagram',
    'footer.copyright': '© 2025 Bar Ruso Kalashnikov. All rights reserved.',
    
    // WhatsApp
    'whatsapp.message': 'Hello, I would like to make a reservation at Bar Ruso Kalashnikov'
  },
  
  ru: {
    // Hero Section
    'hero.title.part1': 'Больше чем бар,',
    'hero.title.part2': 'опыт',
    'hero.description': 'Пространство, где творчество, атмосфера и авторские коктейли объединяются, чтобы подарить вам незабываемые моменты.',
    'hero.button.ubicacion': 'Расположение',
    
    // Experience Section
    'experience.title1': 'Опыт, который вдохновляет',
    'experience.description1': 'Каждая деталь нашего бара призвана пленить ваши чувства: мягкий свет, идеальная музыка и команда, которая превращает каждое посещение в уникальный момент.',
    'experience.title2': 'Искусство в каждом бокале',
    'experience.description2': 'Больше чем напитки, мы создаем произведения жидкого искусства. Свежие ингредиенты, авторские техники и страсть в каждом приготовлении.',
    
    // History Section
    'history.title': 'Наша история',
    'history.paragraph1': 'С 2014 года мы создаем атмосферу, в которую вы всегда захотите вернуться. Наши собственные настойки, использование местных продуктов и страстная команда сделали это место эталоном в городе.',
    'history.paragraph2': 'У нас более 250 коктейлей в меню, 90 доступных мест и 3 уникальных зала, чтобы каждый клиент мог прожить свой собственный опыт.',
    
    // Features Section
    'features.cocktail.title': 'Ремесленные коктейли',
    'features.cocktail.description': 'Уникальные коктейли, созданные нашими опытными миксологами с премиальными ингредиентами, импортированными непосредственно из России.',
    'features.drinks.title': 'Русские напитки',
    'features.drinks.description': 'Традиционные русские коктейли и напитки, переосмысленные с современными техниками и современной подачей, предлагающие уникальный опыт в каждом глотке.',
    'features.atmosphere.title': 'Эксклюзивная атмосфера',
    'features.atmosphere.description': 'Испытайте элегантную и вдохновляющую атмосферу, идеальную для особенных моментов, в окружении хорошей музыки и русского гостеприимства.',
    
    // Team Section
    'team.title1': 'Команда экспертов по коктейлям',
    'team.description1': 'С годами опыта и безупречным владением самых сложных техник, наша команда создает напитки, которые сочетают точность, вкус и высокий уровень подачи.',
    'team.title2': 'Напитки, которые рассказывают истории',
    'team.description2': 'От русской классики до авторских творений, каждый напиток отражает преданность, традицию и современный штрих, который приглашает вас вернуться.',
    
    // Testimonials Section
    'testimonials.subtitle': 'ОТЗЫВЫ',
    'testimonials.title': 'Что говорят наши клиенты',
    'testimonials.maria.comment': 'Невероятная атмосфера, уникальные коктейли и идеальная музыка. Лучший бар в Куэнке!',
    'testimonials.carlos.comment': 'Русское оформление впечатляет, а напитки восхитительны. Очень рекомендую.',
    'testimonials.ana.comment': 'Отличное обслуживание и ночная атмосфера. Идеально для прогулок с друзьями.',
    'testimonials.maria.time': '1 неделю назад',
    'testimonials.carlos.time': '2 недели назад',
    'testimonials.ana.time': '3 недели назад',
    
    // Footer
    'footer.description': 'Самый эксклюзивный ночной опыт в Куэнке. Где традиция встречается с инновацией.',
    'footer.pages.title': 'Страницы',
    'footer.pages.home': 'Главная',
    'footer.pages.about': 'О нас',
    'footer.pages.menu': 'Меню',
    'footer.pages.contact': 'Контакты',
    'footer.pages.gallery': 'Галерея',
    'footer.schedule.title': 'Часы работы',
    'footer.schedule.monday_thursday': 'Понедельник - Среда:',
    'footer.schedule.friday': 'Четверг - Пятница:',
    'footer.schedule.saturday': 'Суббота:',
    'footer.schedule.sunday': 'Воскресенье:',
    'footer.schedule.closed': 'ЗАКРЫТО',
    'footer.status.open': 'СЕЙЧАС ОТКРЫТО',
    'footer.status.closed': 'СЕЙЧАС ЗАКРЫТО',
    'footer.status.current_time': 'Текущее время:',
    'footer.instagram.title': 'Instagram',
    'footer.copyright': '© 2025 Бар Русо Калашников. Все права защищены.',
    
    // WhatsApp
    'whatsapp.message': 'Привет, я хотел бы забронировать столик в Bar Ruso Kalashnikov'
  }
}

interface SobreNosotrosLanguageContextType {
  t: (key: SobreNosotrosTranslationKeys) => string
  currentLanguage: Language
}

const SobreNosotrosLanguageContext = createContext<SobreNosotrosLanguageContextType | undefined>(undefined)

interface SobreNosotrosLanguageProviderProps {
  children: ReactNode
}

export function SobreNosotrosLanguageProvider({ children }: SobreNosotrosLanguageProviderProps) {
  // 🔧 SOLUCIÓN: Hook con manejo de errores
  let currentLanguage: Language = 'es' // valor por defecto
  
  try {
    const languageContext = useLanguage()
    currentLanguage = languageContext.currentLanguage
  } catch (error) {
    // Si no hay LanguageProvider disponible, usar español por defecto
    console.warn('LanguageProvider no está disponible, usando idioma por defecto (es)')
  }
  
  const t = (key: SobreNosotrosTranslationKeys): string => {
    return sobreNosotrosTranslations[currentLanguage][key] || key
  }

  return (
    <SobreNosotrosLanguageContext.Provider value={{ t, currentLanguage }}>
      {children}
    </SobreNosotrosLanguageContext.Provider>
  )
}

export function useSobreNosotrosLanguage() {
  const context = useContext(SobreNosotrosLanguageContext)
  if (context === undefined) {
    throw new Error('useSobreNosotrosLanguage must be used within a SobreNosotrosLanguageProvider')
  }
  return context
}