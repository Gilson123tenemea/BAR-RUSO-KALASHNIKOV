// src/components/ContactoLanguage.tsx
"use client"

import { useLanguage } from '../../components/LanguageContext'

// Hook personalizado para traducciones de la página de contacto
export function useContactoLanguage() {
  const { currentLanguage } = useLanguage()

  // Traducciones específicas para la página de contacto
  const contactoTranslations = {
    es: {
      // Hero Section
      heroTitle: 'Hablemos de tu próxima visita',
      heroSubtitle: 'Estamos aquí para responder tus preguntas y brindarte la información que necesitas. Ven a disfrutar de una velada perfecta desde esta noche.',
      locationButton: 'Ubicación',
      
      // Contact Section
      sectionSubtitle: '--- Estamos para atenderte ---',
      formTitle: 'Ponte en contacto con nosotros',
      formDescription: '¿Tienes alguna duda o quieres más información? Nuestro equipo está listo para atenderte y ayudarte a vivir la mejor experiencia en nuestro bar.',
      
      // Form Fields
      nameLabel: 'NOMBRE',
      namePlaceholder: 'Tu nombre completo',
      emailLabel: 'CORREO ELECTRÓNICO',
      emailPlaceholder: 'tu@email.com',
      subjectLabel: 'ASUNTO',
      subjectPlaceholder: '¿En qué podemos ayudarte?',
      messageLabel: 'COMENTARIO',
      messagePlaceholder: 'Cuéntanos más detalles...',
      sendButton: 'ENVIAR',
      sending: 'Enviando...',
      successMessage: '¡Mensaje enviado exitosamente!',
      errorMessage: 'Error al enviar el mensaje. Inténtalo de nuevo.',
      
      // Contact Info
      infoTitle: 'Tus Detalles',
      infoDescription: 'Completa tus datos y escríbenos tu mensaje. Te responderemos lo antes posible.',
      addressLabel: 'Dirección',
      phoneLabel: 'Teléfono',
      emailInfoLabel: 'Email',
      scheduleLabel: 'Horarios',
      scheduleMonThu: 'Lun - Jue: 15:00 - 00:00',
      scheduleFri: 'Vie: 15:00 - 02:00 | Sáb: 15:00 - 00:00',
      scheduleSun: 'Domingo:',
      scheduleClosed: 'CERRADO',
      googleMapsButton: 'Ver en Google Maps',
      followUs: 'SÍGUENOS',
      
      // Footer
      footerTitle: 'Bar Ruso Kalashnikov',
      footerDescription: 'La experiencia nocturna más exclusiva de Cuenca. Donde la tradición se encuentra con la innovación.',
      pagesTitle: 'Páginas',
      openingHours: 'Horarios de Apertura',
      openNow: 'ABIERTO AHORA',
      closedNow: 'CERRADO AHORA',
      currentTime: 'Hora actual:',
      instagramTitle: 'Instagram',
      copyright: '© 2025 Bar Ruso Kalashnikov. Todos los derechos reservados.',
      
      // WhatsApp
      whatsappMessage: 'Hola, me gustaría hacer una reserva en Bar Ruso Kalashnikov'
    },
    
    en: {
      // Hero Section
      heroTitle: "Let's talk about your next visit",
      heroSubtitle: 'We are here to answer your questions and provide you with the information you need. Come enjoy a perfect evening starting tonight.',
      locationButton: 'Location',
      
      // Contact Section
      sectionSubtitle: '--- We are here to serve you ---',
      formTitle: 'Get in touch with us',
      formDescription: 'Have any questions or need more information? Our team is ready to assist you and help you have the best experience at our bar.',
      
      // Form Fields
      nameLabel: 'NAME',
      namePlaceholder: 'Your full name',
      emailLabel: 'EMAIL ADDRESS',
      emailPlaceholder: 'your@email.com',
      subjectLabel: 'SUBJECT',
      subjectPlaceholder: 'How can we help you?',
      messageLabel: 'MESSAGE',
      messagePlaceholder: 'Tell us more details...',
      sendButton: 'SEND',
      sending: 'Sending...',
      successMessage: 'Message sent successfully!',
      errorMessage: 'Error sending message. Please try again.',
      
      // Contact Info
      infoTitle: 'Your Details',
      infoDescription: 'Fill in your details and write us your message. We will respond as soon as possible.',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      emailInfoLabel: 'Email',
      scheduleLabel: 'Schedule',
      scheduleMonThu: 'Mon - Thu: 3:00 PM - 12:00 AM',
      scheduleFri: 'Fri: 3:00 PM - 2:00 AM | Sat: 3:00 PM - 12:00 AM',
      scheduleSun: 'Sunday:',
      scheduleClosed: 'CLOSED',
      googleMapsButton: 'View on Google Maps',
      followUs: 'FOLLOW US',
      
      // Footer
      footerTitle: 'Bar Ruso Kalashnikov',
      footerDescription: "Cuenca's most exclusive nightlife experience. Where tradition meets innovation.",
      pagesTitle: 'Pages',
      openingHours: 'Opening Hours',
      openNow: 'OPEN NOW',
      closedNow: 'CLOSED NOW',
      currentTime: 'Current time:',
      instagramTitle: 'Instagram',
      copyright: '© 2025 Bar Ruso Kalashnikov. All rights reserved.',
      
      // WhatsApp
      whatsappMessage: 'Hello, I would like to make a reservation at Bar Ruso Kalashnikov'
    },
    
    ru: {
      // Hero Section
      heroTitle: 'Давайте поговорим о вашем следующем визите',
      heroSubtitle: 'Мы здесь, чтобы ответить на ваши вопросы и предоставить всю необходимую информацию. Приходите наслаждаться идеальным вечером уже сегодня.',
      locationButton: 'Местоположение',
      
      // Contact Section
      sectionSubtitle: '--- Мы здесь, чтобы вам помочь ---',
      formTitle: 'Свяжитесь с нами',
      formDescription: 'Есть вопросы или нужна дополнительная информация? Наша команда готова помочь вам и обеспечить лучший опыт в нашем баре.',
      
      // Form Fields
      nameLabel: 'ИМЯ',
      namePlaceholder: 'Ваше полное имя',
      emailLabel: 'ЭЛЕКТРОННАЯ ПОЧТА',
      emailPlaceholder: 'your@email.com',
      subjectLabel: 'ТЕМА',
      subjectPlaceholder: 'Как мы можем помочь?',
      messageLabel: 'СООБЩЕНИЕ',
      messagePlaceholder: 'Расскажите подробнее...',
      sendButton: 'ОТПРАВИТЬ',
      sending: 'Отправка...',
      successMessage: 'Сообщение отправлено успешно!',
      errorMessage: 'Ошибка при отправке сообщения. Попробуйте еще раз.',
      
      // Contact Info
      infoTitle: 'Ваши данные',
      infoDescription: 'Заполните свои данные и напишите нам сообщение. Мы ответим как можно скорее.',
      addressLabel: 'Адрес',
      phoneLabel: 'Телефон',
      emailInfoLabel: 'Электронная почта',
      scheduleLabel: 'Расписание',
      scheduleMonThu: 'Пн - Чт: 15:00 - 00:00',
      scheduleFri: 'Пт: 15:00 - 02:00 | Сб: 15:00 - 00:00',
      scheduleSun: 'Воскресенье:',
      scheduleClosed: 'ЗАКРЫТО',
      googleMapsButton: 'Посмотреть на Google Maps',
      followUs: 'ПОДПИСЫВАЙТЕСЬ',
      
      // Footer
      footerTitle: 'Bar Ruso Kalashnikov',
      footerDescription: 'Самый эксклюзивный ночной опыт в Куэнке. Где традиции встречаются с инновациями.',
      pagesTitle: 'Страницы',
      openingHours: 'Часы работы',
      openNow: 'ОТКРЫТО СЕЙЧАС',
      closedNow: 'ЗАКРЫТО СЕЙЧАС',
      currentTime: 'Текущее время:',
      instagramTitle: 'Instagram',
      copyright: '© 2025 Bar Ruso Kalashnikov. Все права защищены.',
      
      // WhatsApp
      whatsappMessage: 'Привет, я хотел бы забронировать столик в Bar Ruso Kalashnikov'
    }
  }

  // Función para obtener traducción
  const tc = (key: keyof typeof contactoTranslations.es): string => {
    return contactoTranslations[currentLanguage]?.[key] || contactoTranslations.es[key] || key
  }

  return { tc, currentLanguage }
}