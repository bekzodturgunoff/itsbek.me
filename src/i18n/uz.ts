import type {I18n} from "./types";

const uz: I18n = {
  nav: {
    links: {
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      caseStudy: "Loyiha tahlili",
      work: "Ishlarim",
      contact: "Aloqa",
      resume: "Rezyume",
    },
  },
  hero: {
    name: "itsbek.me",
    titleTop: "Dasturiy ta'minot muhandisi",
    titleBottom: "foydalanuvchi tajribasiga e'tibor qaratadi",
    description: `3+ yillik tajribaga ega dasturiy ta'minot muhandisi. React va Astro'da tez va qulay mahsulotlar yarataman. JavaScript/TypeScript, Python va C darajasidagi muammolarni hal qilishda ishonchli ishlayman.`,
    location: "O'zbekiston",
    availability: "Yangi loyihalar uchun ochiq",
    timezoneLabel: "Toshkent vaqti (GMT +5)",
    buttons: {
      contact: "Aloqaga chiqish",
      viewWork: "Ishlarimni ko'rish",
      viewCaseStudy: "Loyiha tahlilini ko'rish",
    },
  },
  about: {
    intro: `Men dasturiy ta'minot muhandisi bo'lib, mahsulot fikrlashni frontend mahorati bilan birlashtiraman. Samaradorlik, foydalanish qulayligi va aniq muloqotga e'tibor qarataman — har bir reliz silliq, o'lchanadigan va foydalanuvchilar uchun foydali bo'lishini ta'minlayman. Hozirda Sejong universitetida Kompyuter axborot xavfsizligi yo'nalishida tahsil olaman.`,
    basedIn: "O'zbekistonda istiqomat qiladi",
    languagesLine: "Tillar: Ingliz (asosiy), Rus, Koreys, O'zbek.",
  },
  contact: {
    heading: "Keling bog'lanaylik",
    intro: "Ajoyib narsa yaratmoqchimisiz, murakkab xatoni tuzatmoqchimisiz yoki shunchaki fikr almashmoqchimisiz? Istalgan vaqtda yozing — men doim mavjudman.",
    availability: "24 soat ichida javob.",
    ctas: {
      call: "Qo'ng'iroq qilish",
      email: "Email yuborish",
      telegram: "Telegram'da yozish",
    },
    form: {
      name: "Ism",
      namePlaceholder: "Ismingiz",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "Xabar",
      messagePlaceholder: "Nima demoqchisiz?",
      submit: "Xabarni yuborish",
    },
  },
  projects: {
    selectedWork: "Tanlangan ishlar",
  },
  bronUzCaseStudy: {
    badge: "Loyiha tahlili",
    title: "BronUz — Joy band qilish platformasi",
    subtitle:
      "O'zbekistonning birinchi to'liq-stek band qilish platformasini 3 kunda yaratish.",
    meta: [
      {label: "Mijoz", value: "Shaxsiy loyiha"},
      {label: "Rol", value: "Full-Stack muhandis · Mahsulot dizayneri"},
      {label: "Muddat", value: "2026"},
      {
        label: "Texnologiyalar",
        value:
          "React, Vite, TypeScript, Tailwind CSS, Supabase, PostgreSQL, React Query, Zustand, Leaflet, Recharts, i18next, Vercel",
      },
    ],
    problem: {
      title: "Muammo",
      body: "O'zbekistonda foydalanuvchilar mahalliy joylarni — kafelar, restoranlar, futbol maydonchalari, o'yin klublari, sartaroshxonalar, sport zallari, kovorking markazlari va boshqalarni kashf qilish va band qilish uchun yagona platforma mavjud emas. Tadbirkorlar buyurtmalarni qo'lda telefon va WhatsApp orqali boshqaradi. Foydalanuvchilar real vaqtdagi mavjudlikni ko'rish, tasdiqlangan sharhlarni o'qish yoki qo'ng'iroq qilmasdan buyurtmani tasdiqlash imkoniyatiga ega emas. Maqsad — buni to'liq hal qiladigan platformani qurish: to'liq-stek veb-ilova, tadbirkor vositalari va to'liq admin panel — bitta Supabase backend'da, 3 kunda.",
    },
    research: {
      title: "Nima qurdim",
      bullets: [
        "To'liq full-stack arxitekturani noldan loyihalashtirdim va qurdim: React + Vite frontend, 13 ta jadvalli Supabase backend, row-level security siyosatlari va Edge Functions",
        "Leaflet xarita qidiruvi, real-vaqtda slot band qilish va URL orqali ulashiladigan qidiruv filtrlari bilan 15+ sahifa yaratdim",
        "Tadbirkorlar paneli: daromad analitikasi, buyurtma kalendari, slot mavjudligini boshqarish, xodimlarni boshqarish, promo kodlar va recharts diagrammalari",
        "To'liq admin panel: joylarni tasdiqlash (ma'qullash/rad etish), foydalanuvchilarni boshqarish, platforma analitikasi va SECURITY DEFINER RPC funksiyalari — adminlar tadbirkor ma'lumotlarini to'g'ridan-to'g'ri tahrirlay olmaydi",
        "Telegram bot'ni webhook'ga asoslangan buyurtma tasdiqlashlari, 24 soatlik avtomatik eslatmalar va Supabase Edge Functions orqali foydalanuvchi tekshiruvi bilan integratsiya qildim",
        "Loyalty ballar tizimi (har bir buyurtma uchun ball yig'ish, chegirma sifatida ishlatish), to'liq band bo'lgan slotlar uchun navbat, promo kodlar, guruh buyurtmalari, xodim tanlash va har bir joy uchun bekor qilish siyosatlari",
        "Workbox oflayn kesh bilan PWA sifatida joylashtirdim, iOS aniqlash bilan o'rnatish so'rovi va Supabase Edge Functions orqali avtomatik buyurtma eslatmalari",
      ],
    },
    design: {
      title: "Natijalar",
      bullets: [
        "bronuz.vercel.app'da to'liq autentifikatsiya, real joy ma'lumotlari va ishlab chiqarishdagi buyurtma jarayoni bilan ishga tushdi",
        "Uchta to'liq ajratilgan foydalanuvchi roli — mijoz, tadbirkor, admin — har biri o'z paneli va imkoniyatlariga ega",
        "Butun platforma — bo'sh papkadan to'liq mahsulotgacha — 3 kunda tayyor bo'ldi",
      ],
    },
    images: [
      {
        src: "/images/projects/bronuz/bronuz_homepage_2.png",
        alt: "BronUz bosh sahifasi — xarita va joy kartochkalari bilan qidiruv natijalari",
        caption:
          "BronUz bosh sahifasi — xarita va joy kartochkalari bilan qidiruv natijalari",
      },
      {
        src: "/images/projects/bronuz/bronuz_venue.png",
        alt: "BronUz joy tafsiloti — foto galereya, slot tanlash va buyurtma paneli",
        caption:
          "BronUz joy tafsiloti — foto galereya, slot tanlash va buyurtma paneli",
      },
      {
        src: "/images/projects/bronuz/bronuz_business.png",
        alt: "BronUz tadbirkor paneli — daromad analitikasi va bugungi buyurtmalar",
        caption:
          "BronUz tadbirkor paneli — daromad analitikasi va bugungi buyurtmalar",
      },
      {
        src: "/images/projects/bronuz/bronuz_admin.png",
        alt: "BronUz admin paneli — joylarni tasdiqlash va platforma analitikasi",
        caption: "BronUz admin paneli — joylarni tasdiqlash va platforma analitikasi",
      },
    ],
    cta: {label: "Saytga o'tish", href: "https://bronuz.vercel.app"},
  },
  telegramBotCaseStudy: {
    badge: "Loyiha tahlili",
    title: "Shaxsiy yordamchi bot",
    subtitle: "Biznes xabarlarini boshqaradigan, vazifalarni kuzatadigan va har bir kontakt haqida o'rganadigan AI Telegram bot — chekkada ishlaydi.",
    meta: [
      {label: "Mijoz", value: "Shaxsiy loyiha"},
      {label: "Rol", value: "Dasturiy ta'minot muhandisi"},
      {label: "Muddat", value: "2026"},
      {label: "Texnologiyalar", value: "TypeScript, Cloudflare Workers, KV, Gemini, Groq, grammY, Serper"},
    ],
    problem: {
      title: "Muammo",
      body: "Biznes yuritish kuniga o'nlab Telegram xabarlarni anglatadi — mijozlar xizmatlar haqida so'raydi, hamkorlar kelishadi, topshiriqlarni eslab qolish kerak. Har biriga shaxsan to'g'ri tilda (o'zbek, rus yoki ingliz) javob berish va vazifalarni kuzatib borish juda qiyin edi.",
    },
    research: {
      title: "Nima qildim",
      bullets: [
        "Telegram Business API orqali mijoz xabarlarini tutib, biznes egasi sifatida AI javob beradigan bot yaratdim — bu AI ekanligi hech qachon oshkor etilmaydi.",
        "Cloudflare KV'ga asoslangan uch darajali xotira tizimini (suhbat tarixi, shaxs profillari, uzoq muddatli faktlar) loyihalashtirdim — ma'lumotlar bazasi xarajatisiz har bir kontakt uchun doimiy kontekst.",
        "5 ta Gemini modeli bo'ylab AI model zanjirini avtomatik 24 soatlik kuzatuv bilan amalga oshirdim, bepul tarif cheklovlarini hal qilish uchun, fon tahlil vazifalari uchun ikkinchi darajali Groq zaxirasi bilan.",
        "Regex evristikasi yordamida tashqi NLP bog'liqligisiz jo'natuvchining tiliga mos ravishda o'zbek, rus yoki ingliz tillarida javob beradigan avtomatik til aniqlashni qo'shdim.",
        "Niyat klassifikatori va ishonch ball tizimini qurdim — klassifikator har qanday AI chaqiruvidan oldin ishga tushib, shoshilinchlik, salomlashish, narx so'rovlari va shikoyatlarni aniqlaydi; ball tizimi har bir AI javobini baholaydi va ishonch past bo'lganda insoniy tushuntirishlarga o'tadi.",
        "AI yordamida tabiiy tildagi vaqtni tahlil qilish (\"ertaga soat 3 da eslat\"), kundalik ertalabki brifinglar va muddati o'tgan vazifalar haqida eslatmalar bilan engil vazifa mexanizmini integratsiya qildim — barchasi Gemini tomonidan tuzilgan vazifa obyektlariga pars qilinadi.",
        "Serper.dev orqali jonli veb-qidiruvni uladim — bot ob-havo, yangiliklar va real vaqt ma'lumotlari haqidagi savollarga javob bera oladi.",
        "Har 4-xabardan keyin fonda ishlaydigan Groq asosidagi miya tahlil tizimini qo'shdim, suhbat xulosalari, yangi faktlar, niyat o'zgarishlari va hissiyot o'zgarishlarini chiqarib — davomiylik uchun kelajakdagi javoblarga ma'lumotlarni qayta uzatadi.",
        "HTTP Basic Auth bilan to'liq veb-dashboard qurdim, suhbatlarni kuzatish, AI modellarini sozlash, foydalanish statistikasini ko'rish va qayta joylashtirmasdan ish vaqti sozlamalarini o'zgartirish imkoniyati bilan.",
        "Insoniy javob vaqtlash tizimini yaratdim — yangi kontaktlar kechiktirilgan birinchi javob oladi, sekin javob beruvchilarga mos tezlikda javob qaytariladi va shoshilinch xabarlar navbatni butunlay chetlab o'tadi.",
        "Cloudflare Workers'da past kechikish bilan joylashtirdim, ishlab chiqish uchun Express asosidagi mahalliy zaxira bilan.",
      ],
    },
    design: {
      title: "Natijalar",
      bullets: [
        "Bot kuniga o'nlab suhbatlarni avtonom tarzda boshqaradi — uch tilda tegishli ohang, kontekst va vaqt bilan tabiiy javob beradi.",
        "AI vaqtni tahlil qilish bilan vazifa boshqaruvi — 'ertaga soat 3 da eslat' deyish kifoy, avtomatik ertalabki brifinglar bilan hech narsa o'tkazib yuborilmaydi.",
        "Nol infratuzilma xarajati — Cloudflare Workers bepul tarifi + Gemini bepul tarifi + KV bepul tarifi butun tizimni oyiga $0 da ushlab turadi.",
        "~6,900 qator TypeScript, to'rtta ish vaqti bog'liqligi (grammY, Gemini SDK, Express, dotenv) va serverlarni boshqarmasdan chekkada to'liq ishlaydi.",
      ],
    },
    images: [
      { src: "/images/projects/3d-device-with-ai-assistant.webm", alt: "Telegram Business API integratsiyasi — bot kiruvchi biznes xabarlarini tutib, AI yordamida egasi sifatida javob beradi.", caption: "Telegram Business API integratsiyasi — bot kiruvchi biznes xabarlarini tutib, AI yordamida egasi sifatida jo'natuvchining tili va ohangiga mos javob beradi." },
      { src: "/images/projects/ai-assistant-on-digital-screen-smart-device.webm", alt: "Uch darajali xotira tizimi — bot Cloudflare KV yordamida har bir kontakt uchun suhbat tarixi, shaxs profillari va uzoq muddatli faktlarni saqlaydi.", caption: "Uch darajali xotira tizimi — bot Cloudflare KV yordamida har bir kontakt uchun suhbat tarixi, shaxs profillari va uzoq muddatli faktlarni saqlaydi." },
    ],
    cta: {label: "Manba kodini ko'rish", href: "https://github.com/bekzodturgunoff/personal-assistant"},
  },
  caseStudy: {
    badge: "Loyiha tahlili",
    title: "Octopos Landing Page",
    subtitle: "Murakkab restoran boshqaruvi platformasini aniq, konversiyaga yo'naltirilgan mahsulot tajribasiga aylantirish.",
    meta: [
      {label: "Mijoz", value: "Octopos"},
      {label: "Rol", value: "Frontend muhandisi · Mahsulot implementatsiyasi"},
      {label: "Muddat", value: "4 hafta · 2026"},
      {label: "Texnologiyalar", value: "Astro, Tailwind CSS, Resend"},
    ],
    problem: {
      title: "Muammo",
      body: "Octopos kuchli multi-ilova ekotizimiga (Dash, POS, Kitchen) ega edi, ammo mahsulot qiymati mavjud landing page orqali aniq yetkazilmadi. Saytda tuzilma, zamonaviy UX oqimi va yangi foydalanuvchilar uchun kuchli onbording yo'li yo'q edi.",
    },
    research: {
      title: "Nima qildim",
      bullets: [
        "Katta dasturchi/dizayner tomonidan taqdim etilgan dizayn asosida to'liq landing page'ni amalga oshirib, uni responsiv, ishlab chiqarishga tayyor veb-saytga aylantirdim.",
        "Astro va Tailwind yordamida butun frontendni noldan qurdim, mobil va desktop qurilmalarda piksel-anig'likdagi implementatsiyani ta'minladim.",
        "Dash, POS va Kitchen yagona tizim sifatida qanday birgalikda ishlashini aniq tushuntirish uchun mahsulot maketlari va vizual bo'limlarni ishlab chiqdim.",
        "Lead'larni jalb qilish va platformaga kirish huquqini berish uchun onbording va sinov ro'yxatdan o'tish oqimini amalga oshirdim.",
        "Foydalanuvchi onbordingi va Resend orqali avtomatik elektron pochta bilan ishlash uchun backend xizmatlarini uladim.",
        "Samaradorlik optimallashtirish, mobil moslashuvchanlik va SEO tuzilmasini ta'minladim.",
      ],
    },
    design: {
      title: "Natijalar",
      bullets: [
        "Mahsulot ekotizimi tushunchasini yaxshilagan va foydalanuvchilarning Octopos haqidagi tushunchasini kuchaytirgan tez, zamonaviy SaaS landing page'ni yetkazdim.",
        "Yangi foydalanuvchilar platformani sinab ko'rishdagi to'siqlarni kamaytiruvchi silliq sinov onbording oqimini yaratdim.",
        "Mahsulot va muhandislik jamoasi bilan hamkorlikda to'liq mahsulotni 4 hafta ichida ishga tushirdim.",
      ],
    },
    images: [
      {
        src: "/images/projects/octopos/octopos_before.png",
        alt: "Octopos landing page'ning qayta dizayndan oldingi ko'rinishi",
        caption:
          "Qayta dizayndan oldingi MVP ekrani — zich matn, past kontrast va aniq harakatga chaqiruvsiz.",
      },
      {
        src: "/images/projects/octopos/octopos.png",
        alt: "Octopos landing page'ning skrinshoti",
        caption:
          "Qayta ishlangan hero, foydalanish holatlari va ijtimoiy isbot bilan yuqori aniqlikdagi desktop ekran.",
      },
    ],
    cta: {label: "Saytga o'tish", href: "https://octopos.uz"},
  },
  octoposAppsCaseStudy: {
    badge: "Loyiha tahlili",
    title: "Octopos apps",
    subtitle: "Restoran va chakana savdo korxonalari uchun PWA asosidagi POS, oshxona displeyi va boshqaruv paneli ilovalari to'plami.",
    meta: [
      {label: "Mijoz", value: "Octopos"},
      {label: "Rol", value: "Mahsulot dizayneri · Dasturiy ta'minot muhandisi"},
      {label: "Muddat", value: "2026"},
      {label: "Texnologiyalar", value: "TypeScript, React 18/19, Vite, TanStack Router, TanStack Query, TanStack React DB, Zustand, Tailwind CSS v4, Go, SQLite, NATS"},
    ],
    problem: {
      title: "Mening rolim",
      body: "Frontend dasturchisi sifatida POS, KDS va Dashboard ilovalarida ishladim. Vazifalarimga Go API'larini integratsiya qilish, yangi funksiyalarni amalga oshirish, mavjud dizayn tizimiga mos keladigan foydalanuvchi interfeyslarini ishlab chiqish va biznes talablarini yetkazish uchun backend dasturchilari bilan hamkorlik qilish kiradi. Restoran xodimlari va menejerlari tomonidan foydalaniladigan buyurtma boshqaruvi jarayonlari, mijozlarni boshqarish funksiyalari va operatsion vositalarni yaxshilashga hissa qo'shdim.",
    },
    research: {
      title: "Nima qurdim",
      bullets: [
        "Frontend ilovalarini Swagger/OpenAPI hujjatlari yordamida Go asosidagi REST API'lar bilan integratsiya qildim.",
        "POS (sotuv nuqtasi), KDS (oshxona displey tizimi) va Dashboard modullari bo'ylab hamkorlikdagi jamoa muhitida funksiyalarni ishlab chiqdim va qo'llab-quvvatladim.",
        "POS: buyurtma jarayonlari, mijozlarni qidirish va yaratish, ko'p funksiyali bajarish (ichkarida, olib ketish, yetkazib berish) va turli UI/biznes mantiq yaxshilanishlarini amalga oshirdim.",
        "KDS: chipta hayot aylanishi jarayonlari, bajarish ko'rsatkichlari, filtrlash va real-vaqt operatsion interfeyslarni o'z ichiga olgan jonli buyurtma boshqaruvi funksiyalarini ishlab chiqdim va takomillashtirdim.",
        "Dashboard: dashboard'dan bevosita buyurtma yaratish va mijozlarni boshqarish funksiyalarini o'z ichiga olgan yangi biznes boshqaruvi xususiyatlarini amalga oshirdim.",
        "Backend talablari asosida frontend funksiyalarini yaratdim, yangi API endpointlarini uladim, ma'lumotlar sinxronizatsiyasini boshqardim va integratsiya muammolarini hal qildim.",
        "Yangi funksiyalar mavjud mahsulotning UI/UX standartlariga mos kelishi va ilovaga muammosiz integratsiya qilinishini ta'minlab, dizayn izchilligini saqladim.",
        "Funksiyalarni ishlab chiqish, test qilish va joylashtirish jarayonida backend va frontend dasturchilari bilan yaqindan hamkorlik qildim.",
        "Ishlab chiqarish muammolarini tuzatdim, ilova barqarorligini yaxshiladim va bir nechta modullarda foydalanuvchi tajribasini oshirdim.",
        "TanStack React DB va WASQLite'dan foydalanadigan oflayn-avval POS arxitekturasi bilan ishladim, frontend funksiyalarini oflayn tranzaksiya jarayonlari va sinxronizatsiya mexanizmlari bilan integratsiya qildim.",
      ],
    },
    design: {
      title: "Natijalar",
      bullets: [
        "Uchta ishlab chiqarish PWA bir vaqtda chiqarildi — POS terminal, oshxona displeyi va menejer dashboard — hammasi bir Go/SQLite/NATS backend'ida.",
        "Uzluksiz buyurtma oqimi: ofitsiant POS'da buyurtma oladi → oshxona KDS'da soniyalar ichida ko'radi (3 soniyali polling) → menejer hamma narsani dashboard'da kuzatadi.",
        "Oflayn barqarorlik internet uzilishida ham nol ishlamay qolishni anglatadi — buyurtmalar WASQLite orqali mahalliy navbatga qo'yiladi va avtomatik konflikt hal qilish bilan sinxronlanadi.",
      ],
    },
    images: [
      { src: "/images/projects/octopos_apps/dash_1.png", alt: "Octopos dashboard — daromad diagrammalari va KPI", caption: "Kunlik daromad, faol buyurtmalar va asosiy ko'rsatkichlarni ko'rsatadigan menejer dashboard." },
      { src: "/images/projects/octopos_apps/dash_2.png", alt: "Octopos dashboard — buyurtma ro'yxati va tafsilotlari", caption: "Barcha stollar bo'yicha real-vaqt holati yangilanishlari bilan buyurtma boshqaruvi." },
      { src: "/images/projects/octopos_apps/dash_3.png", alt: "Octopos dashboard — zaxira kuzatuvi va xarid buyurtmalari", caption: "Zaxira ogohlantirishlari, xarid buyurtmalari va menyu boshqaruvi bilan inventar kuzatuvi." },
      { src: "/images/projects/octopos_apps/pos_1.png", alt: "Octopos POS — ierarxik katalog va savat", caption: "Menyu kategoriyalari, mahsulot tanlash va faol savat bilan POS terminali." },
      { src: "/images/projects/octopos_apps/pos_2.png", alt: "Octopos POS — bo'lib to'lov", caption: "Naqd, karta va bo'lib to'lov variantlari bilan avtomatik hisoblangan umumiy summa." },
      { src: "/images/projects/octopos_apps/pos_3.png", alt: "Octopos POS — zal rejasi bilan stol boshqaruvi", caption: "Stol boshqaruvi, mijozlarni qidirish va buyurtma tayinlash bilan vizual zal rejasi." },
      { src: "/images/projects/octopos_apps/kitchen_1.png", alt: "Octopos oshxona displeyi — jonli buyurtma panjarasi", caption: "Yangi buyurtmalar uchun silkitish animatsiyasi va bajarish nishonlari bilan stansiyalar bo'yicha jonli buyurtma chiptalari." },
    ],
    cta: {label: "Octopos'ga o'tish", href: "https://octopos.uz"},
  },
  skills: {
    title: "Nima bilan ishlayman",
    groups: [
      {
        title: "Asosiy",
        items: [
          "React",
          "Astro",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Tailwind",
          "Sass",
          "HTML/CSS",
          "Supabase",
          "PostgreSQL",
        ],
      },
      {title: "Tizimlar", items: ["C", "Assembly", "Python"]},
      {
        title: "Vositalar",
        items: [
          "Git",
          "GitHub Actions",
          "Testing (Jest/Vitest)",
          "CI/CD",
          "Accessibility & Performance Audits",
          "Prompt Engineering",
          "Vercel",
        ],
      },
    ],
  },
  footer: {
    reserved: "Barcha huquqlar himoyalangan.",
    email: "Email",
    github: "GitHub",
    telegram: "Telegram",
    resume: "Rezyume",
    bandName: "itsbek.me",
    maintenance:
      "Sevgi, kofein va bir nechta sirli xatolar bilan yaratilgan. Agar ishlamay qolsa, men yangi narsa o'rgandim. (Tuzatish keladi… tez orada.)",
  },
};

export default uz;
