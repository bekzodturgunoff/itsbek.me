import type { I18n } from './types';

const ru: I18n = {
  nav: {
    links: { about: 'Обо мне', skills: 'Навыки', caseStudy: 'Кейс-стади', work: 'Портфолио', contact: 'Контакты', resume: 'Резюме' },
  },
  hero: {
  name: 'itsbek.me',
    titleTop: 'Софтуэр-инженер',
    titleBottom: 'с фокусом на UX и надежность',
    description: `Софтуэр-инженер с 4+ годами опыта. Делаю быстрые и доступные продукты на React и Astro, работаю в тесной связке с дизайном и бэкендом. Уверенно использую JavaScript/TypeScript, Python и подхожу к задачам на уровне C/системного мышления.`,
    location: 'Сеул, Южная Корея',
    availability: 'Открыт для новых проектов',
    timezoneLabel: 'KST (GMT +9)',
    buttons: {
      contact: 'Связаться',
      viewWork: 'Смотреть работы',
      viewCaseStudy: 'Смотреть кейс'
    }
  },
  about: {
    intro: `Я софтуэр-инженер, совмещаю продакт-мышление и фронтенд-практики. Забочусь о производительности, доступности и безопасности. Учусь в Университете Седжон на программе Computer Information Security, поэтому смотрю на продукт и через призму безопасности.`,
    basedIn: 'Живу в Сеуле, Южная Корея',
    languagesLine: 'Языки: Английский (основной), Русский, Корейский'
  },
  contact: {
    heading: `Давайте работать вместе`,
    intro: `Хотите создать что-то крутое, исправить сложный баг или просто обсудить идею? Напишите мне — я всегда на связи.`,
    availability: 'Отвечаю в течение 24 часов (Сеул).',
    ctas: { call: 'Позвонить', email: 'Написать на почту', telegram: 'Написать в Telegram' },
    form: {
      name: 'Имя',
      namePlaceholder: 'Ваше имя',
      email: 'Электронная почта',
      emailPlaceholder: 'your@email.com',
      message: 'Сообщение',
      messagePlaceholder: "Не стесняйтесь, пишите что угодно.",
      submit: 'Отправить сообщение'
    }
  },
  projects: {
    selectedWork: 'Избранные проекты'
  },
  bronUzCaseStudy: {
    badge: 'Кейс-стади',
    title: 'BronUz — Venue Reservation Platform',
    subtitle: "Designing and shipping Uzbekistan's first full-stack reservation platform in 3 days.",
    meta: [
      { label: 'Клиент', value: 'Личный проект' },
      { label: 'Роль', value: 'Full-Stack Engineer · Product Designer' },
      { label: 'Сроки', value: '3 дня · 2026' },
      { label: 'Стек', value: 'React, Vite, TypeScript, Tailwind CSS, Supabase, PostgreSQL, React Query, Zustand, Leaflet, Recharts, i18next, Vercel' }
    ],
    problem: {
      title: 'Задача',
      body: "В Узбекистане нет единой платформы, где пользователи могут находить и бронировать местные заведения — кафе, рестораны, футбольные поля, игровые клубы, барбершопы, спортзалы, коворкинги и многое другое. Бизнес управляет бронированиями вручную через телефонные звонки и WhatsApp. У пользователей нет возможности увидеть доступность в реальном времени, прочитать проверенные отзывы или подтвердить бронь без звонка. Цель — построить платформу, решающую всё это полностью: полноценное веб-приложение, инструменты для владельцев бизнеса и полную административную панель — на едином Supabase-бэкенде, за 3 дня."
    },
    research: {
      title: 'Что я сделал',
      bullets: [
        "Спроектировал и построил полную full-stack архитектуру с нуля: React + Vite фронтенд, Supabase бэкенд с 13 таблицами базы данных, политиками безопасности на уровне строк (RLS) и Edge Functions.",
        "Построил 15+ страниц, включая поиск заведений с картой Leaflet, бронирование слотов в реальном времени и синхронизируемые по URL фильтры поиска по 25+ категориям заведений.",
        "Панель владельца бизнеса с аналитикой доходов, календарём бронирований, управлением доступностью слотов, управлением персоналом, созданием промокодов и графиками Recharts.",
        "Полная админ-панель с рабочим процессом подтверждения заведений (одобрить/отклонить), управлением пользователями с назначением ролей, аналитикой всей платформы и SECURITY DEFINER RPC функциями, чтобы администраторы не могли напрямую редактировать данные владельцев.",
        "Интегрировал Telegram-бота с вебхуками для подтверждения бронирований, автоматическими напоминаниями за 24 часа, верификацией пользователей через глубокие ссылки с помощью Supabase Edge Functions и AI-чатом для поддержки клиентов.",
        "Система баллов лояльности (начисление за бронирование, использование для скидок), лист ожидания для занятых слотов, промокоды, групповые бронирования, выбор персонала и политика отмены для каждого заведения.",
        "Развернул как PWA с офлайн-кешированием Workbox, установкой с определением iOS и автоматическим cron-заданием напоминаний о бронированиях через Supabase Edge Functions.",
      ]
    },
    design: {
      title: 'Результат',
      bullets: [
        "Запущен на bronuz.vercel.app с полной аутентификацией, реальными данными заведений и сквозным циклом бронирования в продакшене.",
        "Три полностью разделённые роли пользователей — клиент, владелец бизнеса, администратор — каждая со своей защищённой панелью и возможностями.",
        "Вся платформа — от пустой папки до развёрнутого full-stack продукта — готова за 3 дня."
      ]
    },
    images: [
      { src: '/images/projects/bronuz_homepage.png', alt: 'BronUz homepage — hero with search bar and venue category pills', caption: 'BronUz homepage — hero with search bar and venue category pills' },
      { src: '/images/projects/bronuz_homepage_2.png', alt: 'BronUz homepage — search results with map and venue cards', caption: 'BronUz homepage — search results with map and venue cards' },
      { src: '/images/projects/bronuz_venue.png', alt: 'BronUz venue detail — photo gallery, slot picker, and booking sidebar', caption: 'BronUz venue detail — photo gallery, slot picker, and booking sidebar' },
      
      { src: '/images/projects/bronuz_business.png', alt: "BronUz business dashboard — revenue analytics and today's bookings", caption: "BronUz business dashboard — revenue analytics and today's bookings" },
      { src: '/images/projects/bronuz_business_2.png', alt: 'BronUz business dashboard — slot management and calendar', caption: 'BronUz business dashboard — slot management and calendar' },
      { src: '/images/projects/bronuz_admin.png', alt: 'BronUz admin panel — venue approvals and platform analytics', caption: 'BronUz admin panel — venue approvals and platform analytics' }
    ],
    cta: { label: 'Посетить сайт', href: 'https://bronuz.vercel.app' }
  },
  caseStudy: {
    badge: 'Кейс-стади',
    title: 'Лендинг Octopos',
    subtitle: 'За 4 недели превратил сложный продукт в понятный лендинг с хорошей конверсией.',
    meta: [
      { label: 'Клиент', value: 'Octopos' },
      { label: 'Роль', value: 'Продуктовый дизайнер · Софтуэр-инженер' },
      { label: 'Сроки', value: '4 недели · 2025' },
      { label: 'Стек', value: 'Astro, Tailwind, Vercel, Resend' }
    ],
    problem: {
      title: 'Задача',
      body: 'Octopos нужен современный лендинг, который четко объясняет продукт и мотивирует попробовать его. Предыдущая версия была устаревшей, плохо показывала ценность и не была адаптирована под мобильные устройства.'
    },
    research: {
      title: 'Что я сделал',
      bullets: [
        'Полностью переработал и пересобрал сайт с нуля, чтобы сделать его быстрее, нагляднее и понятнее.',
        'Создал кастомные мокапы приложения Octopos в рамках iMac, iPad и iPhone, чтобы посетители могли увидеть инструмент в действии.',
        'Разработал простую форму-визард, которая собирает информацию о пользователе и предоставляет немедленный доступ к бесплатной пробной версии трех ключевых приложений Octopos.'
      ]
    },
    design: {
      title: 'Результат',
      bullets: [
        'Новый сайт выглядит чисто, работает быстро и профессионально, помогая людям понять Octopos за секунды и мотивируя больше посетителей попробовать продукт.'
      ]
    },
    images: [
      { src: '/images/projects/before.png', alt: 'Оригинальный лендинг Octopos до редизайна', caption: 'Исходный MVP-экран до редизайна — много текста, низкий контраст, нет четкого призыва к действию.' },
      { src: '/images/projects/octopos.png', alt: 'Скриншот лендинга Octopos', caption: 'Десктопный экран с высоким разрешением, демонстрирующий переработанный главный экран, примеры использования и социальные доказательства.' }
    ],
    cta: { label: 'Посетить сайт', href: 'https://octopos.uz' }
  },
  skills: {
    title: 'Технологии, с которыми я работаю',
    groups: [
      { title: 'Основное', items: ['React','Astro','TypeScript','JavaScript','Node.js','Tailwind','Sass','HTML/CSS','Supabase','PostgreSQL'] },
      { title: 'Системы', items: ['C','Assembly','Python'] },
      { title: 'Инструменты', items: ['Git','GitHub Actions','Тестирование (Jest/Vitest)','CI/CD','Аудиты доступности и производительности','Vercel'] },
    ]
  },
  footer: {
    reserved: 'Все права защищены.',
    email: 'Почта',
    github: 'GitHub',
    telegram: 'Telegram',
    resume: 'Резюме',
  bandName: 'itsbek.me',
    maintenance: 'Сделано с любовью, кофеином и парой загадочных ошибок. Если что-то сломалось — значит, я чему-то научился. (Исправление уже в пути… почти.)',
  }
};

export default ru;
