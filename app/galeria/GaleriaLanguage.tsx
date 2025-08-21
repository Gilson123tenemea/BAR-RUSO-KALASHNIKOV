// app/galeria/GaleriaLanguage.tsx
"use client"

import { useLanguage } from '../../components/LanguageContext'

// Definir las claves de traducción específicas para la página de Galería
export type GaleriaTranslationKeys = 
  | 'hero.title'
  | 'hero.subtitle'
  | 'gallery.title'
  | 'gallery.subtitle'
  | 'gallery.filter.all'
  | 'gallery.filter.videos'
  | 'gallery.filter.photos'
  | 'gallery.loadMore'
  | 'gallery.remaining'
  | 'gallery.bePartTitle'
  | 'gallery.bePartSubtitle'
  | 'gallery.menuButton'
  | 'gallery.instagramButton'
  | 'gallery.videoBadge'
  | 'gallery.photoBadge'
  | 'footer.pages'
  | 'footer.hours'
  | 'footer.openNow'
  | 'footer.closedNow'
  | 'footer.currentTime'
  | 'footer.copyright'
  | 'footer.description'
  | 'footer.monday'
  | 'footer.tuesday'
  | 'footer.wednesday'
  | 'footer.thursday'
  | 'footer.friday'
  | 'footer.saturday'
  | 'footer.sunday'
  | 'footer.closed'
  | 'whatsapp.message'
  // Nuevas traducciones para los enlaces del footer
  | 'footer.nav.home'
  | 'footer.nav.about'
  | 'footer.nav.menu'
  | 'footer.nav.contact'
  | 'footer.nav.gallery'
  // Títulos dinámicos de los items de galería
  | 'gallery.items.cocktailPreparation'
  | 'gallery.items.nightAmbiance'
  | 'gallery.items.flamedCocktails'
  | 'gallery.items.ourVisits'
  | 'gallery.items.specials'
  | 'gallery.items.renovatedInterior'
  | 'gallery.items.specialCocktailPrep'
  | 'gallery.items.weekendAmbiance'
  | 'gallery.items.workTeam'
  | 'gallery.items.specialMoments'
  | 'gallery.items.specialDecoration'
  | 'gallery.items.beers'

type Language = 'es' | 'en' | 'ru'
type GaleriaTranslations = Record<Language, Record<GaleriaTranslationKeys, string>>

// Traducciones específicas para la página de Galería
const galeriaTranslations: GaleriaTranslations = {
  es: {
    'hero.title': 'Momentos que inspiran',
    'hero.subtitle': 'Descubre la magia de nuestras noches a través de videos y fotografías que capturan la esencia única de Bar Ruso Kalashnikov.',
    'gallery.title': 'Nuestra Galería',
    'gallery.subtitle': 'Cada semana compartimos nuevos momentos de nuestras noches únicas. Videos exclusivos y fotografías que muestran la experiencia completa del Bar Ruso Kalashnikov.',
    'gallery.filter.all': 'Todo',
    'gallery.filter.videos': 'Videos',
    'gallery.filter.photos': 'Fotos',
    'gallery.loadMore': 'Cargar más',
    'gallery.remaining': 'restantes',
    'gallery.bePartTitle': '¿Quieres ser parte de nuestra galería?',
    'gallery.bePartSubtitle': 'Visítanos y vive momentos únicos que podrían aparecer en nuestra próxima actualización semanal. ¡Cada noche es una nueva historia!',
    'gallery.menuButton': 'Menús',
    'gallery.instagramButton': 'Síguenos en Instagram',
    'gallery.videoBadge': 'VIDEO',
    'gallery.photoBadge': 'FOTO',
    'footer.pages': 'Páginas',
    'footer.hours': 'Horarios de Apertura',
    'footer.openNow': 'ABIERTO AHORA',
    'footer.closedNow': 'CERRADO AHORA',
    'footer.currentTime': 'Hora actual',
    'footer.copyright': '© 2025 Bar Ruso Kalashnikov. Todos los derechos reservados.',
    'footer.description': 'La experiencia nocturna más exclusiva de Cuenca. Donde la tradición se encuentra con la innovación.',
    'footer.monday': 'Lunes - Jueves',
    'footer.tuesday': 'Lunes - Jueves',
    'footer.wednesday': 'Lunes - Jueves',
    'footer.thursday': 'Lunes - Jueves',
    'footer.friday': 'Viernes',
    'footer.saturday': 'Sábado',
    'footer.sunday': 'Domingo',
    'footer.closed': 'CERRADO',
    'whatsapp.message': 'Hola, me gustaría hacer una reserva en Bar Ruso Kalashnikov',
    // Navegación del footer
    'footer.nav.home': 'Inicio',
    'footer.nav.about': 'Sobre Nosotros',
    'footer.nav.menu': 'Menú',
    'footer.nav.contact': 'Contacto',
    'footer.nav.gallery': 'Galería',
    // Títulos de items de galería
    'gallery.items.cocktailPreparation': 'Preparación de Cócteles',
    'gallery.items.nightAmbiance': 'Ambiente Nocturno',
    'gallery.items.flamedCocktails': 'Cócteles Flameados',
    'gallery.items.ourVisits': 'Nuestras Visitas',
    'gallery.items.specials': 'Especiales',
    'gallery.items.renovatedInterior': 'Interior Renovado',
    'gallery.items.specialCocktailPrep': 'Preparación de Cócteles Especiales',
    'gallery.items.weekendAmbiance': 'Ambiente de Fin de Semana',
    'gallery.items.workTeam': 'Equipo de Trabajo',
    'gallery.items.specialMoments': 'Momentos Especiales',
    'gallery.items.specialDecoration': 'Decoración Especial',
    'gallery.items.beers': 'Cervezas',
  },
  en: {
    'hero.title': 'Inspiring Moments',
    'hero.subtitle': 'Discover the magic of our nights through videos and photographs that capture the unique essence of Bar Ruso Kalashnikov.',
    'gallery.title': 'Our Gallery',
    'gallery.subtitle': 'Every week we share new moments from our unique nights. Exclusive videos and photographs showing the complete experience of Bar Ruso Kalashnikov.',
    'gallery.filter.all': 'All',
    'gallery.filter.videos': 'Videos',
    'gallery.filter.photos': 'Photos',
    'gallery.loadMore': 'Load more',
    'gallery.remaining': 'remaining',
    'gallery.bePartTitle': 'Want to be part of our gallery?',
    'gallery.bePartSubtitle': 'Visit us and live unique moments that could appear in our next weekly update. Every night is a new story!',
    'gallery.menuButton': 'Menus',
    'gallery.instagramButton': 'Follow us on Instagram',
    'gallery.videoBadge': 'VIDEO',
    'gallery.photoBadge': 'PHOTO',
    'footer.pages': 'Pages',
    'footer.hours': 'Opening Hours',
    'footer.openNow': 'OPEN NOW',
    'footer.closedNow': 'CLOSED NOW',
    'footer.currentTime': 'Current time',
    'footer.copyright': '© 2025 Bar Ruso Kalashnikov. All rights reserved.',
    'footer.description': 'The most exclusive nightlife experience in Cuenca. Where tradition meets innovation.',
    'footer.monday': 'Monday - Thursday',
    'footer.tuesday': 'Monday - Thursday',
    'footer.wednesday': 'Monday - Thursday',
    'footer.thursday': 'Monday - Thursday',
    'footer.friday': 'Friday',
    'footer.saturday': 'Saturday',
    'footer.sunday': 'Sunday',
    'footer.closed': 'CLOSED',
    'whatsapp.message': 'Hello, I would like to make a reservation at Bar Ruso Kalashnikov',
    // Footer navigation
    'footer.nav.home': 'Home',
    'footer.nav.about': 'About Us',
    'footer.nav.menu': 'Menu',
    'footer.nav.contact': 'Contact',
    'footer.nav.gallery': 'Gallery',
    // Gallery items titles
    'gallery.items.cocktailPreparation': 'Cocktail Preparation',
    'gallery.items.nightAmbiance': 'Night Ambiance',
    'gallery.items.flamedCocktails': 'Flamed Cocktails',
    'gallery.items.ourVisits': 'Our Visitors',
    'gallery.items.specials': 'Specials',
    'gallery.items.renovatedInterior': 'Renovated Interior',
    'gallery.items.specialCocktailPrep': 'Special Cocktail Preparation',
    'gallery.items.weekendAmbiance': 'Weekend Ambiance',
    'gallery.items.workTeam': 'Work Team',
    'gallery.items.specialMoments': 'Special Moments',
    'gallery.items.specialDecoration': 'Special Decoration',
    'gallery.items.beers': 'Beers',
  },
  ru: {
    'hero.title': 'Вдохновляющие моменты',
    'hero.subtitle': 'Откройте для себя магию наших ночей через видео и фотографии, которые передают уникальную сущность Bar Ruso Kalashnikov.',
    'gallery.title': 'Наша галерея',
    'gallery.subtitle': 'Каждую неделю мы делимся новыми моментами наших уникальных ночей. Эксклюзивные видео и фотографии, показывающие полный опыт Bar Ruso Kalashnikov.',
    'gallery.filter.all': 'Все',
    'gallery.filter.videos': 'Видео',
    'gallery.filter.photos': 'Фото',
    'gallery.loadMore': 'Загрузить еще',
    'gallery.remaining': 'осталось',
    'gallery.bePartTitle': 'Хотите стать частью нашей галереи?',
    'gallery.bePartSubtitle': 'Посетите нас и переживите уникальные моменты, которые могут появиться в нашем следующем еженедельном обновлении. Каждая ночь - новая история!',
    'gallery.menuButton': 'Меню',
    'gallery.instagramButton': 'Подпишитесь на нас в Instagram',
    'gallery.videoBadge': 'ВИДЕО',
    'gallery.photoBadge': 'ФОТО',
    'footer.pages': 'Страницы',
    'footer.hours': 'Часы работы',
    'footer.openNow': 'ОТКРЫТО СЕЙЧАС',
    'footer.closedNow': 'ЗАКРЫТО СЕЙЧАС',
    'footer.currentTime': 'Текущее время',
    'footer.copyright': '© 2025 Bar Ruso Kalashnikov. Все права защищены.',
    'footer.description': 'Самый эксклюзивный ночной опыт в Куэнке. Где традиции встречаются с инновациями.',
    'footer.monday': 'Понедельник - Четверг',
    'footer.tuesday': 'Понедельник - Четверг',
    'footer.wednesday': 'Понедельник - Четверг',
    'footer.thursday': 'Понедельник - Четверг',
    'footer.friday': 'Пятница',
    'footer.saturday': 'Суббота',
    'footer.sunday': 'Воскресенье',
    'footer.closed': 'ЗАКРЫТО',
    'whatsapp.message': 'Привет, я хотел бы забронировать столик в Bar Ruso Kalashnikov',
    // Навигация футера
    'footer.nav.home': 'Главная',
    'footer.nav.about': 'О нас',
    'footer.nav.menu': 'Меню',
    'footer.nav.contact': 'Контакты',
    'footer.nav.gallery': 'Галерея',
    // Заголовки элементов галереи
    'gallery.items.cocktailPreparation': 'Приготовление коктейлей',
    'gallery.items.nightAmbiance': 'Ночная атмосфера',
    'gallery.items.flamedCocktails': 'Коктейли с огнем',
    'gallery.items.ourVisits': 'Наши посетители',
    'gallery.items.specials': 'Специальные предложения',
    'gallery.items.renovatedInterior': 'Обновленный интерьер',
    'gallery.items.specialCocktailPrep': 'Приготовление особых коктейлей',
    'gallery.items.weekendAmbiance': 'Атмосфера выходных',
    'gallery.items.workTeam': 'Рабочая команда',
    'gallery.items.specialMoments': 'Особые моменты',
    'gallery.items.specialDecoration': 'Особое украшение',
    'gallery.items.beers': 'Пиво',
  }
}

// Hook personalizado para las traducciones de Galería
export function useGaleriaLanguage() {
  const { currentLanguage } = useLanguage()
  
  const tGaleria = (key: GaleriaTranslationKeys): string => {
    return galeriaTranslations[currentLanguage][key] || key
  }
  
  return { tGaleria, currentLanguage }
}

// Función para obtener el título traducido de un item de galería
export function getTranslatedGalleryItemTitle(originalTitle: string, currentLanguage: Language): string {
  const titleMap: Record<string, GaleriaTranslationKeys> = {
    'Preparación de Cócteles': 'gallery.items.cocktailPreparation',
    'Ambiente Nocturno': 'gallery.items.nightAmbiance',
    'Cócteles Flameados': 'gallery.items.flamedCocktails',
    'Nuestras Visitas': 'gallery.items.ourVisits',
    'Especiales': 'gallery.items.specials',
    'Interior Renovado': 'gallery.items.renovatedInterior',
    'Preparación de Cócteles Especiales': 'gallery.items.specialCocktailPrep',
    'Ambiente de Fin de Semana': 'gallery.items.weekendAmbiance',
    'Equipo de Trabajo': 'gallery.items.workTeam',
    'Momentos Especiales': 'gallery.items.specialMoments',
    'Decoración Especial': 'gallery.items.specialDecoration',
    'Cervezas': 'gallery.items.beers',
  }
  
  const translationKey = titleMap[originalTitle]
  if (translationKey) {
    return galeriaTranslations[currentLanguage][translationKey]
  }
  
  return originalTitle // Fallback al título original si no se encuentra traducción
}