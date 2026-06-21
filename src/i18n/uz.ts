import type {I18n} from "./types";

const uz: I18n = {
  nav: {
    links: {
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      caseStudy: "Keys",
      work: "Loyihalar",
      contact: "Aloqa",
      resume: "Rezyume",
    },
  },
  hero: {
    name: "Bekzod Turgunov",
    headlineLine1: "Men mahsulotlar yarataman",
    headlineLine2: "odamlar haqiqatda ishlatadigan.",
    subtextLine1: "Frontend \u00B7 Full-stack \u00B7 AI \u00B7 Cloud",
    subtextLine2: "Toshkent \u2192 Seul. 2021 dan buyon ishlab kelaman.",
    availability: "Ishga tayyor",
  },
  origin: {
    grewUp: "Vatanim",
    country: "O'zbekiston.",
    studied: "Seulda o'qidim.",
    building: "Hali qurishda davom.",
    timeline: [
      {year: "2021", description: "O'zbekistonda birinchi kod qatorini yozdim. O'z-o'zimdan o'rgandim, sekin internet, qaysar."},
      {year: "2023", description: "Seulga ko'chdim. Sejong Universitetida xavfsizlikni o'qidim."},
      {year: "Hozir", description: "Toshkentga qaytib, hech kim qaramayotgan bozorlar uchun mahsulotlar yaratmoqdaman."},
    ],
    body: "2021 yilda kod yozishni boshladim. O'shanda O'zbekistonda «kod o'rganish» harakati degan narsa yo'q edi — faqat men, beqaror internet va hal qilmoqchi bo'lgan muammolarim bor edi. Bir narsa qurardim, sindirardim, tuzatardim — va xatolardan hech qanday darslik o'rgata olmaydigan darajada ko'p o'rgandim.\n\n2023 yilga kelib, bilmagan narsalarimni biladigan darajada ko'p loyiha ishlab chiqargan edim. Tizimlarni chuqurroq tushunish uchun Seulga — Sejong Universitetiga xavfsizlikni o'rganishga ketdim. Endi Toshkentga qaytib, ko'pchilik dasturchilar hali payqamagan bozorlar uchun odamlar haqiqatda ishlatadigan mahsulotlar yaratmoqdaman.",
    info: "O'zbekistonda yashayman \u00B7 EN \u00B7 RU \u00B7 KO \u00B7 UZ \u00B7 UTC+5",
  },
  about: {
    title: "Kod ortidagi hikoya",
    body: "Men mahsulot quruvchi kabi fikrlaydigan dasturiy ta'minot muhandisiman. Yaxshi darslik topish o'rgatgan xatolarni tuzatishdan qiyinroq bo'lgan paytda O'zbekistonda kod yozishni boshladim. 2023 yilda Seulga ko'chib, Sejong Universitetida xavfsizlikni o'qidim. Hozir ko'pchilik hali qaramagan bozorlar uchun quraman.\n\nTo'rt tilda gaplashaman, to'liq texnologik stack bo'ylab ishlayman va eng yaxshi kod — bu yetkazib berilgan kod, deb ishonaman.",
    philosophy: [
      "Mukammallikdan ko'ra ishlab chiqarish. Ishlaydigan kod go'zal, ammo bekor turgan koddan qimmatlidir.",
      "Xavfsizlik oxirida qo'shiladigan qatlam emas. U birinchi kundan boshlab arxitekturada bo'lishi kerak.",
      "Tez degani mo'rt degani emas. Yaxshi tizimlar tez va bardoshli.",
      "Eng yaxshi mahsulotlar haqiqiy muammolarni hal qiladi. Qolgan hamma narsa — shunchaki funksiyalar.",
    ],
  },
  ending: {
    headlineLine1: "Xonadagi eng yaxshi",
    headlineLine2: "dasturchi emas.",
    headlineLine3: "Xonani yaxshiroq qiladigan inson.",
    body: "Taqsimlangan tizimlar, xavfsizlik birinchi o'rinda turadigan arxitektura va ko'pchilik hali qaramagan bozorlarda muhim mahsulotlar yaratmoqdaman. Agar bu sizning keyingi loyihangizga o'xshasa — gaplashaylik.",
    cta: "Mazmunli narsani birga quraylik.",
  },
  contact: {
    heading: "Gaplashamiz.",
    intro: "Loyiha yoki savolingiz bormi?",
    availability: "Odatda bir necha soat ichida javob beraman.",
    ctas: {
      email: "Email",
      telegram: "Telegram",
      phone: "Telefon",
    },
    form: {
      name: "Ismingiz",
      namePlaceholder: "Sizni nima deb chaqiray?",
      email: "Emailingiz",
      emailPlaceholder: "you@example.com",
      message: "Xabaringiz",
      messagePlaceholder: "Nima quryapmiz?",
      submit: "Xabar yuborish",
    },
  },
  projects: {
    selectedWork: "Tanlangan loyihalar",
  },
  bronUzCaseStudy: {
    badge: "Keys",
    title: "BronUz — Joy band qilish platformasi",
    subtitle: "O'zbekistonda joy topib band qiladigan sayt yo'q edi. Men qurdim. 3 kunda.",
    meta: [
      {label: "Mijoz", value: "Shaxsiy loyiha"},
      {label: "Rol", value: "Full-Stack muhandisi · Mahsulot dizayneri"},
      {label: "Muddat", value: "2026"},
      {label: "Texnologiyalar", value: "React, Vite, TypeScript, Tailwind CSS, Supabase, PostgreSQL, React Query, Zustand, Leaflet, Recharts, i18next, Vercel"},
    ],
    problem: {
      title: "Muammo",
      body: "O'zbekistonda sayt ochib, yaqin atrofdagi kafe yoki futbol maydonini topib band qiladigan joy yo'q. Hammasi WhatsApp va telefon orqali — mijozlar ham, bizneslar ham qiynaladi. Men buni o'zgartirmoqchi edim. Full-stack ilova, biznes vositalari, admin panel — bitta Supabase backendida, 3 kunda.",
    },
    research: {
      title: "Men qurgan narsa",
      bullets: [
        "Noldan full-stack: React + Vite frontend, Supabase backend (13 jadval, RLS, Edge Functions)",
        "15+ sahifa — Leaflet xarita qidiruvi, real vaqtda band qilish, 25+ toifadagi URL-filtrlar",
        "Biznes paneli: daromad grafiklari, band qilish taqvimi, slot boshqaruvi, xodimlar, promo-kodlar",
        "Admin panel: joylarni tasdiqlash, foydalanuvchi rollari, platforma tahlili, SECURITY DEFINER RPC",
        "Telegram bot: webhook tasdiqlash, 24 soatlik eslatmalar, AI yordamchi",
        "Ballar, kutish ro'yxati, guruhli buyurtmalar, joy uchun bekor qilish siyosatlari",
        "PWA: Workbox oflayn keshlash, iOS o'rnatish, cron eslatmalar",
      ],
    },
    design: {
      title: "Natijalar",
      bullets: [
        "bronuz.vercel.app da ishlaydi — autentifikatsiya, real joylar, band qilish jarayoni",
        "Uch rol: mijoz, biznes egasi, admin — har biri o'z panelida",
        "Bo'sh papkadan joylashtirilgan mahsulotgacha 3 kun",
      ],
    },
    images: [
      {src: "/images/projects/bronuz/bronuz_homepage_2.webp", alt: "BronUz bosh sahifasi — xarita va joy kartochkalari bilan qidiruv natijalari", caption: "BronUz bosh sahifasi — xarita va joy kartochkalari bilan qidiruv natijalari"},
      {src: "/images/projects/bronuz/bronuz_venue.webp", alt: "BronUz joy tafsiloti — foto galereya, slot tanlash va band qilish paneli", caption: "BronUz joy tafsiloti — foto galereya, slot tanlash va band qilish paneli"},
      {src: "/images/projects/bronuz/bronuz_business.webp", alt: "BronUz biznes paneli — daromad tahlili va bugungi buyurtmalar", caption: "BronUz biznes paneli — daromad tahlili va bugungi buyurtmalar"},
      {src: "/images/projects/bronuz/bronuz_admin.webp", alt: "BronUz admin paneli — joylarni tasdiqlash va platforma tahlili", caption: "BronUz admin paneli — joylarni tasdiqlash va platforma tahlili"},
    ],
    cta: {label: "Saytga o'tish", href: "https://bronuz.vercel.app"},
  },
  telegramBotCaseStudy: {
    badge: "Keys",
    title: "Shaxsiy yordamchi bot",
    subtitle: "Menga o'xshab javob beradigan, seni eslab qoladigan va nolga tushadigan Telegram bot.",
    meta: [
      {label: "Mijoz", value: "Shaxsiy loyiha"},
      {label: "Rol", value: "Dasturiy ta'minot muhandisi"},
      {label: "Muddat", value: "2026"},
      {label: "Texnologiyalar", value: "TypeScript, Cloudflare Workers, KV, Gemini, Groq, grammY, Serper"},
    ],
    problem: {
      title: "Muammo",
      body: "Biznes yuritish kuniga o'nlab Telegram xabarlarini anglatadi. Mijozlar narxlarni so'raydi, hamkorlar kelishadi, esda qolishi kerak bo'lgan topshiriqlar. Har biriga kerakli vaqtda to'g'ri tilda (o'zbek, rus, ingliz) javob berish va hamma narsani kuzatib borish juda qiyin edi.",
    },
    research: {
      title: "Men nima qildim",
      bullets: [
        "Cloudflare KV da uch darajali xotira: suhbat tarixi, shaxs profillari, uzoq muddatli faktlar. Ma'lumotlar bazasi xarajatisiz doimiy kontekst.",
        "5 ta Gemini modeli o'rtasida AI pasayish zanjiri (avtomatik sovutish), Groq fon tahlili uchun.",
        "Avtomatik til aniqlash: regex asosida, tashqi NLP kerak emas. Jo'natuvchi tilida javob.",
        "Niyat klassifikatori: AI chaqiruvidan oldin shoshilinchlik, salom, narx, shikoyatni aniqlaydi. Ishonchsiz bo'lsa, insoniy aniqlovchilardan foydalanadi.",
        "Tabiiy til vaqtini tahlil qilish (\"ertaga soat 3 da eslat\"), kundalik brifinglar, cron eslatmalar.",
        "Serper.dev orqali jonli qidiruv: ob-havo, yangiliklar, real vaqt ma'lumotlari.",
        "Har 4-xabardan keyin Groq tahlili: xulosa, yangi faktlar, niyat o'zgarishlari, hissiyotlar → javoblarga qo'shiladi.",
        "HTTP Basic Auth bilan veb-panel: qayta joylashtirmasdan suhbatlarni kuzatish, AI modellarini sozlash, statistika.",
        "Insoniy javob vaqti: yangi kontaktlar kechikish bilan, sekinlar mos tezlikda, shoshilinchlar navbatdan tashqari.",
        "Cloudflare Workers + Express lokal fallback.",
      ],
    },
    design: {
      title: "Natijalar",
      bullets: [
        "Kunlik o'nlab suhbatlarni avtonom boshqaradi — uch tilda to'g'ri ohang va vaqt bilan.",
        "\"Ertaga soat 3 da eslat\" ishlaydi. Ertalabki brifinglar bilan hech narsa unutilmaydi.",
        "Nol xarajat: Cloudflare Workers + Gemini + KV bepul darajalari. Oyiga $0.",
        "~6,900 qator TypeScript, 4 ta bog'liqlik, butunlay edge da.",
      ],
    },
    images: [
      {src: "/images/projects/3d-device-with-ai-assistant.webm", alt: "Telegram Business API integratsiyasi — bot kiruvchi biznes xabarlarini ushlab, AI yaratilgan javoblar bilan egasi sifatida javob beradi.", caption: "Telegram Business API integratsiyasi — bot kiruvchi biznes xabarlarini ushlab, jo'natuvchining tili va ohangiga mos AI yaratilgan javoblar bilan egasi sifatida javob beradi."},
      {src: "/images/projects/ai-assistant-on-digital-screen-smart-device.webm", alt: "Uch darajali xotira tizimi — bot Cloudflare KV yordamida har bir kontakt uchun suhbat tarixi, shaxs profillari va uzoq muddatli faktlarni saqlaydi.", caption: "Uch darajali xotira tizimi — bot Cloudflare KV yordamida har bir kontakt uchun suhbat tarixi, shaxs profillari va uzoq muddatli faktlarni saqlaydi."},
    ],
    cta: {label: "Manba kodini ko'rish", href: "https://github.com/bekzodturgunoff/personal-assistant"},
  },
  octoposAppsCaseStudy: {
    badge: "Keys",
    title: "Octopos ilovalari",
    subtitle: "Uchta ishlab chiqarish PWA — POS terminali, oshxona displeyi, menejer paneli — bitta backendda.",
    meta: [
      {label: "Mijoz", value: "Octopos"},
      {label: "Rol", value: "Mahsulot dizayneri · Dasturiy ta'minot muhandisi"},
      {label: "Muddat", value: "2026"},
      {label: "Texnologiyalar", value: "TypeScript, React 18/19, Vite, TanStack Router, TanStack Query, TanStack React DB, Zustand, Tailwind CSS v4, Go, SQLite, NATS"},
    ],
    problem: {
      title: "Mening rolim",
      body: "POS, oshxona displeyi va Dashboard ilovalari ustida ishladim — Go API integratsiyasi, yangi funksiyalar, UI izchilligi, backend dasturchilari bilan hamkorlik.",
    },
    research: {
      title: "Men qurgan narsa",
      bullets: [
        "Swagger/OpenAPI orqali Go REST API bilan frontend ulanishi.",
        "POS: buyurtma jarayonlari, mijoz qidirish, ko'p turdagi xizmat (joyida/olib ketish/yetkazib berish), UI yaxshilanishlar.",
        "Oshxona displeyi: jonli buyurtma boshqaruvi, chipta hayot aylanishi, filtrlash, status ko'rsatkichlari.",
        "Dashboard: buyurtma yaratish, mijoz boshqaruvi, biznes funksiyalari.",
        "Barcha funksiyalarda izchil dizayn.",
        "Backend va frontend jamoalari bilan hamkorlik: ishlab chiqish, test, joylashtirish.",
        "Production xatolarni tuzatish, barqarorlik va UX ni yaxshilash.",
        "Oflayn-avval POS: TanStack React DB + WASQLite — lokal navbat, avtomatik ziddiyat hal qilish bilan sinxronizatsiya.",
      ],
    },
    design: {
      title: "Natijalar",
      bullets: [
        "Uchta PWA: POS, Oshxona Displeyi, Menejer Paneli — bir xil Go/SQLite/NATS backendida.",
        "Buyurtma oqimi: POS da buyurtma olinadi → KDS da soniyalar ichida ko'rinadi (3 sekund polling) → menejer panelda kuzatadi.",
        "Oflayn chidamlilik: internet uzilganda ham ishlaydi. Buyurtmalar WASQLite da navbatga qo'yiladi, qayta ulanganda avtomatik sinxronlanadi.",
      ],
    },
    images: [
      {src: "/images/projects/octopos_apps/dash_1.webp", alt: "Octopos menejer paneli — daromad diagrammalari va KPI umumiy ko'rinishi", caption: "Kunlik daromad, faol buyurtmalar va asosiy ko'rsatkichlarni ko'rsatuvchi menejer paneli."},
      {src: "/images/projects/octopos_apps/dash_2.webp", alt: "Octopos paneli — buyurtmalar ro'yxati va tafsilot ko'rinishlari", caption: "Barcha stollar bo'ylab real vaqtda holat yangilanishi bilan buyurtma boshqaruvi."},
      {src: "/images/projects/octopos_apps/dash_3.webp", alt: "Octopos paneli — inventar kuzatuvi va xarid buyurtmalari", caption: "Zaxira ogohlantirishlari, xarid buyurtmalari va menyu boshqaruvi bilan inventar kuzatuvi."},
      {src: "/images/projects/octopos_apps/pos_1.webp", alt: "Octopos POS — katalog ko'rish va savat", caption: "Menyu toifalari, mahsulot tanlash va faol savat bilan POS terminali."},
      {src: "/images/projects/octopos_apps/pos_2.webp", alt: "Octopos POS — to'lovni amalga oshirish", caption: "Naqd, karta va bo'lib to'lash imkoniyatlari bilan to'lov ekrani."},
      {src: "/images/projects/octopos_apps/pos_3.webp", alt: "Octopos POS — stol boshqaruvi bilan pol rejasi", caption: "Stol boshqaruvi va mijozlarni qidirish bilan vizual pol rejasi."},
      {src: "/images/projects/octopos_apps/kitchen_1.webp", alt: "Octopos Oshxona Displeyi — jonli buyurtma chiplari", caption: "Stansiyalar bo'yicha guruhlangan jonli buyurtma chiplarini ko'rsatuvchi Oshxona Displeyi."},
    ],
    cta: {label: "Octopos ga o'tish", href: "https://octopos.uz"},
  },
  octoposLandingCaseStudy: {
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
        src: "/images/projects/octopos/octopos_before.webp",
        alt: "Octopos landing page'ning qayta dizayndan oldingi ko'rinishi",
        caption: "Qayta dizayndan oldingi MVP ekrani — zich matn, past kontrast va aniq harakatga chaqiruvsiz.",
      },
      {
        src: "/images/projects/octopos/octopos.webp",
        alt: "Octopos landing page'ning skrinshoti",
        caption: "Qayta ishlangan hero, foydalanish holatlari va ijtimoiy isbot bilan yuqori aniqlikdagi desktop ekran.",
      },
    ],
    cta: {label: "Saytga o'tish", href: "https://octopos.uz"},
  },
  skills: {
    title: "Men ishlatadigan texnologiyalar",
    groups: [
      {title: "Frontend", items: ["React", "Astro", "TypeScript", "JavaScript", "Tailwind", "Sass", "HTML/CSS"]},
      {title: "Backend", items: ["Node.js", "Supabase", "PostgreSQL", "Python", "Go"]},
      {title: "Boshqa", items: ["Git", "CI/CD", "Testlash", "C / Assembly", "Prompt muhandisligi", "Vercel"]},
    ],
  },
  footer: {
    email: "Email",
    github: "GitHub",
    telegram: "Telegram",
    resume: "Rezyume",
    builtWith: "Next.js, Framer Motion, GSAP, Lenis \u2014 shablon yo'q, boilerplate yo'q.",
  },
};

export default uz;
