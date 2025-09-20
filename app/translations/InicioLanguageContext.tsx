// components/InicioLanguageContext.tsx
"use client"

import { createContext, useContext, ReactNode } from 'react'
import { useLanguage } from '../../components/LanguageContext'

type Language = 'es' | 'en' | 'ru'

// Definir claves de traducción específicas para la página de inicio
export type InicioTranslationKeys =
  // Loading Screen
  | 'loading.title'
  | 'loading.loading'
  | 'loading.preparing'

  // Hero Section
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.description'
  | 'hero.moreInfo'

  // Welcome Section
  | 'welcome.badge'
  | 'welcome.title'
  | 'welcome.description'
  | 'welcome.button'

  // Menu Section
  | 'menu.title'
  | 'menu.description'
  | 'menu.shots'
  | 'menu.flamed'
  | 'menu.specials'
  | 'menu.beers'
  | 'menu.nonAlcoholic'

  // Bar Interior Section
  | 'barInterior.title'
  | 'barInterior.description'

  // Local Section
  | 'local.badge'
  | 'local.description1'
  | 'local.description2'

  // Stats Section
  | 'stats.rating'
  | 'stats.reviews'
  | 'stats.cocktails'
  | 'stats.followers'

  // Footer
  | 'footer.description'
  | 'footer.pages'
  | 'footer.schedule'
  | 'footer.monday'
  | 'footer.friday'
  | 'footer.saturday'
  | 'footer.sunday'
  | 'footer.openNow'
  | 'footer.closedNow'
  | 'footer.currentTime'
  | 'footer.closed'
  | 'footer.instagram'
  | 'footer.copyright'

  //carrusel secction
  | 'carousel.boxing.title'
  | 'carousel.boxing.description'
  | 'carousel.boxing.alt'
  | 'carousel.ufc.title'
  | 'carousel.ufc.description'
  | 'carousel.ufc.alt'
  | 'carousel.experts.title'
  | 'carousel.experts.description'
  | 'carousel.experts.alt'
  | 'carousel.experience.title'
  | 'carousel.experience.description'
  | 'carousel.experience.alt'
  | 'carousel.music.title'
  | 'carousel.music.description'
  | 'carousel.music.alt'



interface InicioLanguageContextType {
  currentLanguage: Language
  tInicio: (key: InicioTranslationKeys) => string
}

const InicioLanguageContext = createContext<InicioLanguageContextType | undefined>(undefined)

// 🚀 TRADUCCIONES OPTIMIZADAS - CARGA RÁPIDA
const inicioTranslations = {
  es: {
    // Loading Screen
    'loading.title': 'BAR RUSO KALASHNIKOV',
    'loading.loading': 'Cargando experiencia...',
    'loading.preparing': 'Preparando tu experiencia única...',

    // Hero Section
    'hero.title': 'Cócteles con carácter.',
    'hero.subtitle': 'Veladas con sabor.',
    'hero.description': 'Un bar íntimo en el centro de la ciudad: más de 250 cócteles, catas y música. Ven a disfrutar de una velada perfecta.',
    'hero.moreInfo': 'Más Información',

    // Welcome Section
    'welcome.badge': 'BIENVENIDOS',
    'welcome.title': 'Una experiencia única',
    'welcome.description': 'En Ruso Bar no solo encuentras tragos y música, encuentras una experiencia que te acompaña en cada momento. Estamos aquí para asegurarnos de que la pases verdaderamente bien, siempre.',
    'welcome.button': 'Conocer Más',

    //carrusel secction
    'carousel.boxing.title': 'PROXIMO LANZAMIENTO',
    'carousel.boxing.description': 'Nuevo tequila exclusivo muy pronto',
    'carousel.boxing.alt': 'Botella Ferrari Flamed Cocktail',

    'carousel.ufc.title': 'EDICIÓN LIMITADA',
    'carousel.ufc.description': 'Camisetas exclusivas próximamente',
    'carousel.ufc.alt': 'Camiseta Chernobyl Edition',

    'carousel.experts.title': 'EXPERTOS EN LO QUE HACEMOS',
    'carousel.experts.description': 'Experiencias únicas diseñadas para los paladares más exigentes',
    'carousel.experts.alt': 'Líderes en lo que ofrecemos',

    'carousel.experience.title': 'CONCIERTO DE BAD BUNNY',
    'carousel.experience.description': 'Hoy 20 de Septiembre a las 7:30pm, Ven y disruta con una bebida',
    'carousel.experience.alt': 'Personas disfrutando en el bar',

    'carousel.music.title': 'SONIDOS QUE MUEVEN',
    'carousel.music.description': 'Déjate llevar por los ritmos que hacen vibrar cada momento',
    'carousel.music.alt': 'Música para disfrutar en el bar',


    // Menu Section
    'menu.title': 'NUESTRO MENÚ',
    'menu.description': 'Hemos creado una carta de cócteles pensada para cautivar todos tus sentidos, combinando recetas clásicas y creaciones exclusivas que te transportarán a un universo de aromas, colores y sensaciones únicas.',
    'menu.shots': 'Shots del Ruso',
    'menu.flamed': 'Cócteles Flameados',
    'menu.specials': 'Especiales',
    'menu.beers': 'Cervezas Artesanales',
    'menu.nonAlcoholic': 'Cócteles Sin Alcohol',

    // Bar Interior Section
    'barInterior.title': 'TU DESEO, SERVIDO EN UNA COPA',
    'barInterior.description': 'En Kalashnikov, tú pides y recibes: la bebida perfecta que imaginas, creada a la medida de tus deseos por manos expertas. Aquí, cada cóctel es una promesa cumplida, un instante pensado solo para ti, donde el sabor, la pasión y la tradición se unen para ofrecerte una experiencia única e inolvidable.',

    // Local Section
    'local.badge': 'NUESTRO LOCAL',
    'local.description1': 'Nuestra coctelería une la elegancia de la tradición rusa con la innovación contemporánea, creando bebidas que combinan destilados selectos, técnicas de mixología de alto nivel y presentaciones que cautivan a la vista y al paladar, al nivel de los mejores bares del mundo.',
    'local.description2': 'Ubicado en un espacio de diseño sofisticado y atmósfera envolvente, nuestro bar transporta a cada visitante a un viaje sensorial donde el lujo, la cultura y el arte de la coctelería se encuentran para crear experiencias inolvidables.',

    // Stats Section
    'stats.rating': 'Calificación de Google',
    'stats.reviews': 'Reseñas',
    'stats.cocktails': 'Cócteles Únicos',
    'stats.followers': 'Seguidores',

    // Footer
    'footer.description': 'La experiencia nocturna más exclusiva de Cuenca. Donde la tradición se encuentra con la innovación.',
    'footer.pages': 'Páginas',
    'footer.schedule': 'Horarios de Apertura',
    'footer.monday': 'Lunes - Miércoles:',
    'footer.friday': 'Jueves - Viernes:',
    'footer.saturday': 'Sábado:',
    'footer.sunday': 'Domingo:',
    'footer.openNow': 'ABIERTO AHORA',
    'footer.closedNow': 'CERRADO AHORA',
    'footer.currentTime': 'Hora actual:',
    'footer.closed': 'CERRADO',
    'footer.instagram': 'Instagram',
    'footer.copyright': '© 2025 Bar Ruso Kalashnikov. Todos los derechos reservados.'
  },

  en: {
    // Loading Screen
    'loading.title': 'BAR RUSO KALASHNIKOV',
    'loading.loading': 'Loading experience...',
    'loading.preparing': 'Preparing your unique experience...',

    // Hero Section
    'hero.title': 'Cocktails with character.',
    'hero.subtitle': 'Evenings with flavor.',
    'hero.description': 'An intimate bar in the city center: over 250 cocktails, tastings and music. Come enjoy a perfect evening.',
    'hero.moreInfo': 'More Information',

    // Welcome Section
    'welcome.badge': 'WELCOME',
    'welcome.title': 'A unique experience',
    'welcome.description': 'At Ruso Bar, you do not just find drinks and music, you find an experience that stays with you every moment. We are here to make sure you have a truly great time, always.',
    'welcome.button': 'Learn More',

    //carrusel secction
    'carousel.boxing.title': 'UPCOMING RELEASE',
    'carousel.boxing.description': 'New exclusive tequila coming soon',
    'carousel.boxing.alt': 'Ferrari Flamed Cocktail bottle',

    'carousel.ufc.title': 'LIMITED EDITION',
    'carousel.ufc.description': 'Exclusive T-shirts coming soon',
    'carousel.ufc.alt': 'Chernobyl Edition T-shirt',

    'carousel.experts.title': 'EXPERTS IN WHAT WE DO',
    'carousel.experts.description': 'Unique experiences designed for the most demanding palates',
    'carousel.experts.alt': 'Leaders in what we offer',

    'carousel.experience.title': 'BAD BUNNY CONCERT',
    'carousel.experience.description': 'Today, September 20th at 7:30pm. Come and enjoy a drink',
    'carousel.experience.alt': 'People enjoying at the bar',

    'carousel.music.title': 'SOUNDS THAT MOVE',
    'carousel.music.description': 'Let yourself be carried away by the rhythms that make every moment vibrate',
    'carousel.music.alt': 'Music to enjoy at the bar',

    // Menu Section
    'menu.title': 'OUR MENU',
    'menu.description': 'We have created a cocktail menu designed to captivate all your senses, combining classic recipes and exclusive creations that will transport you to a universe of unique aromas, colors and sensations.',
    'menu.shots': 'Russian Shots',
    'menu.flamed': 'Flamed Cocktails',
    'menu.specials': 'Specials',
    'menu.beers': 'Craft Beers',
    'menu.nonAlcoholic': 'Non-Alcoholic Cocktails',

    // Bar Interior Section
    'barInterior.title': 'YOUR DESIRE, SERVED IN A GLASS',
    'barInterior.description': 'At Kalashnikov, you ask and receive: the perfect drink you imagine, created to measure your desires by expert hands. Here, each cocktail is a fulfilled promise, a moment thought just for you, where flavor, passion and tradition come together to offer you a unique and unforgettable experience.',

    // Local Section
    'local.badge': 'OUR VENUE',
    'local.description1': 'Our cocktail bar unites the elegance of Russian tradition with contemporary innovation, creating drinks that combine select spirits, high-level mixology techniques and presentations that captivate the eye and palate, at the level of the world\'s best bars.',
    'local.description2': 'Located in a space of sophisticated design and enveloping atmosphere, our bar transports each visitor on a sensory journey where luxury, culture and the art of mixology come together to create unforgettable experiences.',

    // Stats Section
    'stats.rating': 'Google Rating',
    'stats.reviews': 'Reviews',
    'stats.cocktails': 'Unique Cocktails',
    'stats.followers': 'Followers',

    // Footer
    'footer.description': 'Cuenca\'s most exclusive nightlife experience. Where tradition meets innovation.',
    'footer.pages': 'Pages',
    'footer.schedule': 'Opening Hours',
    'footer.monday': 'Monday - Wednesday:',
    'footer.friday': 'Thursday - Friday:',
    'footer.saturday': 'Saturday:',
    'footer.sunday': 'Sunday:',
    'footer.openNow': 'OPEN NOW',
    'footer.closedNow': 'CLOSED NOW',
    'footer.currentTime': 'Current time:',
    'footer.closed': 'CLOSED',
    'footer.instagram': 'Instagram',
    'footer.copyright': '© 2025 Bar Ruso Kalashnikov. All rights reserved.'
  },

  ru: {
    // Loading Screen
    'loading.title': 'БАР РУССКИЙ КАЛАШНИКОВ',
    'loading.loading': 'Загружается опыт...',
    'loading.preparing': 'Готовим ваш уникальный опыт...',

    // Hero Section
    'hero.title': 'Коктейли с характером.',
    'hero.subtitle': 'Вечера со вкусом.',
    'hero.description': 'Уютный бар в центре города: более 250 коктейлей, дегустации и музыка. Приходите насладиться идеальным вечером.',
    'hero.moreInfo': 'Подробнее',

    // Welcome Section
    'welcome.badge': 'ДОБРО ПОЖАЛОВАТЬ',
    'welcome.title': 'Уникальный опыт',
    'welcome.description': 'В баре Ruso вы найдете не просто напитки и музыку, но и впечатления, которые останутся с вами навсегда. Мы здесь, чтобы вы всегда отлично проводили время.',
    'welcome.button': 'Узнать больше',

    //carrusel secction
    'carousel.boxing.title': 'СКОРО В ПРОДАЖЕ',
    'carousel.boxing.description': 'Новая эксклюзивная текила совсем скоро',
    'carousel.boxing.alt': 'Бутылка Ferrari Flamed Cocktail',

    'carousel.ufc.title': 'ЛИМИТИРОВАННАЯ СЕРИЯ',
    'carousel.ufc.description': 'Эксклюзивные футболки скоро в продаже',
    'carousel.ufc.alt': 'Футболка Chernobyl Edition',


    'carousel.experts.title': 'ЭКСПЕРТЫ В ТОМ, ЧТО ДЕЛАЕМ',
    'carousel.experts.description': 'Уникальные впечатления для самых взыскательных вкусов',
    'carousel.experts.alt': 'Лидеры в том, что предлагаем',

    'carousel.experience.title': 'КОНЦЕРТ BAD BUNNY',
    'carousel.experience.description': 'Сегодня, 20 сентября, в 19:30. Приходите выпить',
    'carousel.experience.alt': 'Люди наслаждаются в баре',

    'carousel.music.title': 'ЗВУКИ, КОТОРЫЕ ДВИЖУТ',
    'carousel.music.description': 'Позвольте себе увлечься ритмами, которые заставляют вибрировать каждый момент',
    'carousel.music.alt': 'Музыка для наслаждения в баре',

    // Menu Section
    'menu.title': 'НАШЕ МЕНЮ',
    'menu.description': 'Мы создали коктейльную карту, призванную пленить все ваши чувства, сочетая классические рецепты и эксклюзивные творения, которые перенесут вас во вселенную уникальных ароматов, цветов и ощущений.',
    'menu.shots': 'Русские шоты',
    'menu.flamed': 'Фламбированные коктейли',
    'menu.specials': 'Особые',
    'menu.beers': 'Крафтовое пиво',
    'menu.nonAlcoholic': 'Безалкогольные коктейли',

    // Bar Interior Section
    'barInterior.title': 'ВАШЕ ЖЕЛАНИЕ, ПОДАННОЕ В БОКАЛЕ',
    'barInterior.description': 'В Калашникове вы просите и получаете: идеальный напиток, который вы представляете, созданный по мере ваших желаний опытными руками. Здесь каждый коктейль - это исполненное обещание, мгновение, созданное только для вас, где вкус, страсть и традиция объединяются, чтобы предложить вам уникальный и незабываемый опыт.',

    // Local Section
    'local.badge': 'НАШЕ ЗАВЕДЕНИЕ',
    'local.description1': 'Наш коктейль-бар объединяет элегантность русской традиции с современными инновациями, создавая напитки, которые сочетают отборные спиртные напитки, высокоуровневые техники миксологии и презентации, пленяющие глаз и нёбо, на уровне лучших баров мира.',
    'local.description2': 'Расположенный в пространстве изысканного дизайна и обволакивающей атмосферы, наш бар переносит каждого посетителя в сенсорное путешествие, где роскошь, культура и искусство миксологии встречаются, чтобы создать незабываемые впечатления.',

    // Stats Section
    'stats.rating': 'Рейтинг Google',
    'stats.reviews': 'Отзывы',
    'stats.cocktails': 'Уникальные коктейли',
    'stats.followers': 'Подписчики',

    // Footer
    'footer.description': 'Самый эксклюзивный ночной опыт Куэнки. Где традиция встречается с инновациями.',
    'footer.pages': 'Страницы',
    'footer.schedule': 'Часы работы',
    'footer.monday': 'Понедельник - Среда:',
    'footer.friday': 'Четверг - Пятница:',
    'footer.saturday': 'Суббота:',
    'footer.sunday': 'Воскресенье:',
    'footer.openNow': 'ОТКРЫТО СЕЙЧАС',
    'footer.closedNow': 'ЗАКРЫТО СЕЙЧАС',
    'footer.currentTime': 'Текущее время:',
    'footer.closed': 'ЗАКРЫТО',
    'footer.instagram': 'Instagram',
    'footer.copyright': '© 2025 Бар Русский Калашников. Все права защищены.'
  }
} as const

interface InicioLanguageProviderProps {
  children: ReactNode
}

export function InicioLanguageProvider({ children }: InicioLanguageProviderProps) {
  const { currentLanguage } = useLanguage() // 🚀 REUTILIZA el idioma del header

  const tInicio = (key: InicioTranslationKeys): string => {
    return inicioTranslations[currentLanguage][key] || key
  }

  return (
    <InicioLanguageContext.Provider value={{ currentLanguage, tInicio }}>
      {children}
    </InicioLanguageContext.Provider>
  )
}

export function useInicioLanguage() {
  const context = useContext(InicioLanguageContext)
  if (context === undefined) {
    throw new Error('useInicioLanguage must be used within a InicioLanguageProvider')
  }
  return context
}