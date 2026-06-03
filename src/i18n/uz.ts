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
      {label: "Texnologiyalar", value: "TypeScript, Cloudflare Workers, KV, Gemini, grammY, Serper"},
    ],
    problem: {
      title: "Muammo",
      body: "Biznes yuritish kuniga o'nlab Telegram xabarlarni anglatadi — mijozlar xizmatlar haqida so'raydi, hamkorlar kelishadi, topshiriqlarni eslab qolish kerak. Har biriga shaxsan to'g'ri tilda (o'zbek, rus yoki ingliz) javob berish va vazifalarni kuzatib borish juda qiyin edi.",
    },
    research: {
      title: "Nima qildim",
      bullets: [
        "Telegram Business API orqali mijoz xabarlarini tutib, biznes egasi sifatida AI javob beradigan bot yaratdim — bu AI ekanligi hech qachon oshkor etilmaydi.",
        "Cloudflare KV'ga asoslangan uch darajali xotira tizimini (suhbat tarixi, shaxs profillari, uzoq muddatli faktlar) loyihalashtirdim — ma'lumotlar bazasisiz har bir kontakt uchun doimiy kontekst.",
        "Gemini bepul tarif cheklovlarini hal qilish uchun avtomatik 24 soatlik kuzatuv bilan AI model zanjirini yaratdim.",
        "Avtomatik til aniqlash — jo'natuvchining tiliga mos ravishda o'zbek, rus yoki ingliz tillarida javob beradi.",
        "AI yordamida tabiiy tildagi vaqtni tahlil qilish, kundalik ertalabki brifinglar va muddati o'tgan vazifalar haqida eslatmalar bilan engil vazifa mexanizmini integratsiya qildim.",
        "Serper.dev orqali jonli veb-qidiruvni uladim — AI ob-havo, yangiliklar, narxlar va real vaqt ma'lumotlari haqidagi savollarga javob bera oladi.",
        "Cloudflare Workers'da past kechikish bilan joylashtirdim, Express asosidagi mahalliy rivojlantirish opsiyasi bilan.",
      ],
    },
    design: {
      title: "Natijalar",
      bullets: [
        "Bot kuniga o'nlab suhbatlarni avtonom tarzda boshqaradi — uch tilda tegishli ohang va kontekst bilan tabiiy javob beradi.",
        "AI vaqtni tahlil qilish bilan vazifa boshqaruvi — 'ertaga soat 3 da eslat' deyish kifoy, avtomatik ertalabki brifinglar bilan hech narsa o'tkazib yuborilmaydi.",
        "Nol infratuzilma xarajati — Cloudflare Workers bepul tarifi + Gemini bepul tarifi + KV bepul tarifi butun tizimni oyiga $0 da ushlab turadi.",
        "~1,500 qator TypeScript, to'rtta ish vaqti bog'liqligi (grammY, Gemini SDK, Express, dotenv) va serverlarni boshqarmasdan chekkada to'liq ishlaydi.",
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
    subtitle:
      "Murakkab bilim platformasini to'rt haftada yuqori konversiyali ishga tushirish sahifasiga aylantirish.",
    meta: [
      {label: "Mijoz", value: "Octopos"},
      {label: "Rol", value: "Mahsulot dizayneri · Dasturiy ta'minot muhandisi"},
      {label: "Muddat", value: "4 hafta · 2025"},
      {label: "Texnologiyalar", value: "Astro, Tailwind, Resend"},
    ],
    problem: {
      title: "Muammo",
      body: "Octopos'ga mahsulotni aniq tushuntirib, foydalanuvchilarni sinab ko'rishga undaydigan zamonaviy landing page kerak edi. Oldingi versiya eskirgan ko'rinardi, mahsulot qiymatini yaxshi ko'rsatmasdi va mobil qurilmalarda qulay emas edi.",
    },
    research: {
      title: "Nima qildim",
      bullets: [
        "Butun veb-saytni noldan qayta qurdim — arxitektura, dizayn, kontent va implementatsiya.",
        "Asboblar turli qurilmalarda qanday ishlashini ko'rsatish uchun aniq, vizual mahsulot maketlarini loyihalashtirdim.",
        "Foydalanuvchi ma'lumotlarini yig'ish va uchta asosiy ilovaga tezkor sinov kirishini berish uchun oddiy onboarding jarayonini yaratdim.",
      ],
    },
    design: {
      title: "Natijalar",
      bullets: [
        "Yangi sayt toza, tez va professional ko'rinadi, odamlarga Octopos'ni soniyalarda tushunishga yordam beradi va ko'proq tashrif buyuruvchilarni sinab ko'rishga undaydi.",
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
    title: "Octopos POS — Mobil va Dashboard ilovalari",
    subtitle: "Restoran va chakana savdo korxonalari uchun kross-platforma POS va dashboard ilovalari to'plami.",
    meta: [
      {label: "Mijoz", value: "Octopos"},
      {label: "Rol", value: "Mahsulot dizayneri · Dasturiy ta'minot muhandisi"},
      {label: "Muddat", value: "2025"},
      {label: "Texnologiyalar", value: "React Native, Expo, TypeScript, Tailwind, Supabase, PostgreSQL"},
    ],
    problem: {
      title: "Muammo",
      body: "Octopos'ga to'liq POS ekotizim kerak edi: ofitsiantlar uchun ishonchli POS ilovasi, oshxona uchun displey tizimi va menejerlar uchun dashboard. Har bir ilova oflayn rejimda ham barqaror ishlashi va sekundning bir qismida buyurtmalarni sinxronlashtirishi kerak edi.",
    },
    research: {
      title: "Nima qurdim",
      bullets: [
        "Menyu ko'rish, savat boshqaruvi, buyurtma o'zgartirishlar (qo'shimchalar, almashtirishlar, eslatmalar), bir necha to'lov usullari (karta, naqd, QR) va avtomatik soliq/chegirma hisoblash bilan POS ilovasi.",
        "Oshxona displey tizimi — real vaqtdagi buyurtmalar stansiyalar bo'yicha guruhlangan, rang-kodli ustuvorlik, taom vaqti (ishtaha → asosiy → shirinlik) va bajarish/o'zgartirish harakatlari.",
        "Real vaqtdagi savdo analitikasi, buyurtma holatini boshqarish, xodimlarni boshqarish, inventar kuzatuvi, smena hisobotlari va menyu boshqaruvi bilan dashboard.",
        "Supabase real-vaqt sinxronizatsiyasi — har qanday POS terminalidagi buyurtmalar KDS va dashboard'da bir zumda aks etadi — sekundning bir qismidan kam kechikish.",
        "Oflayn-avval arxitektura — ulanish tiklanganda avtomatik sinxronlanadigan buyurtma navbati bilan restoran hech qachon to'xtamaydi.",
      ],
    },
    design: {
      title: "Natijalar",
      bullets: [
        "Uchta ishlab chiqarish ilovasi bir vaqtda chiqarildi — POS terminal, oshxona displeyi va menejer dashboard — hammasi bir Supabase backend'ida.",
        "Uzluksiz real-vaqt buyurtma oqimi: ofitsiant POS'da buyurtma oladi → oshxona KDS'da darhol ko'radi → menejer hamma narsani dashboard'da kuzatadi.",
        "Oflayn barqarorlik internet uzilishida ham nol ishlamay qolishni anglatadi — buyurtmalar mahalliy navbatga qo'yiladi va ulanish tiklanganda sinxronlanadi.",
      ],
    },
    images: [
      { src: "/images/projects/octopos_apps/dash_1.png", alt: "Octopos dashboard — real-vaqt savdo analitikasi", caption: "Kunlik daromad, faol buyurtmalar va asosiy ko'rsatkichlarni ko'rsatadigan menejer dashboard." },
      { src: "/images/projects/octopos_apps/dash_2.png", alt: "Octopos dashboard — buyurtma kuzatuvi", caption: "Barcha stollar bo'yicha real-vaqt holati yangilanishlari bilan buyurtma boshqaruvi." },
      { src: "/images/projects/octopos_apps/dash_3.png", alt: "Octopos dashboard — inventar va menyu boshqaruvi", caption: "Zaxira darajasi ogohlantirishlari bilan inventar kuzatuvi va menyu boshqaruvi." },
      { src: "/images/projects/octopos_apps/pos_1.png", alt: "Octopos POS — menyu va savat", caption: "Menyu kategoriyalari, mahsulot tanlash va faol savat bilan POS terminali." },
      { src: "/images/projects/octopos_apps/pos_2.png", alt: "Octopos POS — buyurtma o'zgartirish va to'lov", caption: "Qo'shimchalar, almashtirishlar va eslatmalar bilan buyurtma o'zgartirish ekrani." },
      { src: "/images/projects/octopos_apps/pos_3.png", alt: "Octopos POS — to'lov jarayoni", caption: "Karta, naqd va QR to'lov variantlari bilan avtomatik hisoblangan umumiy summa." },
      { src: "/images/projects/octopos_apps/kitchen_1.png", alt: "Octopos oshxona displeyi — real-vaqt buyurtmalar", caption: "Ustuvorlik ko'rsatkichlari bilan stansiyalar bo'yicha guruhlangan kiruvchi buyurtmalarni ko'rsatadigan oshxona displey tizimi." },
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
