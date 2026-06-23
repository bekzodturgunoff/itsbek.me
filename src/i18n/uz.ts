import type {I18n} from "./types";

const uz: I18n = {
  nav: {
    links: {
      about: "Men haqimda",
      skills: "Texnologiyalar",
      caseStudy: "Keyslar",
      work: "Loyihalar",
      contact: "Aloqa",
      resume: "Rezyume",
    },
  },
  hero: {
    name: "Bekzod Turgunov",
    headlineLine1: "Men odamlar rostdan ham",
    headlineLine2: "ishlatadigan mahsulotlar yarataman.",
    subtextLine1: "Frontend \u00B7 Full-stack \u00B7 AI \u00B7 Cloud",
    subtextLine2: "Toshkent \u2192 Seul. 2021-yildan beri kod yozaman.",
    availability: "Qiziqarli loyihalar uchun ochiqman",
  },
  origin: {
    grewUp: "Tug'ilib o'sgan joyim:",
    country: "O'zbekiston.",
    studied: "Seulda chiniqqanman.",
    building: "Yana kod yozishda davom.",
    timeline: [
      {
        year: "2021",
        description:
          "O'zbekistonda birinchi marta kod yozganman. To'liq mustaqil o'rganganman, sekin internet va qaysarlik evaziga.",
      },
      {
        year: "2023",
        description:
          "Seulga ko'chib o'tdim. Sejong universitetida Kiberxavfsizlik yo'nalishida o'qidim (tizimlarni buzishni mukammal o'rgandim).",
      },
      {
        year: "Hozir",
        description:
          "Yana Toshkentdaman. Boshqa dasturchilar e'tibor bermayotgan bo'sh bozorlar uchun jiddiy mahsulotlar tayyorlayapman.",
      },
    ],
    body: "Men kodlashni 2021-yilda boshlaganman. U paytlarda O'zbekistonda «ikki haftada dasturchi bo'ling» degan shov-shuvlar yo'q edi — faqat men, beqaror Wi-Fi va nimanidir tayyorlashga bo'lgan kuchli xohish bor edi xolos. Yozardim, butkul buzardim, qayta tuzatardim va yana xatolardan xulosa chiqarardim. Shu tartibsiz muammolar ortidan har qanday tayyor darslikdan ko'ra ko'proq narsa o'rgandim.\n\n2023-yilga kelib, o'zim mustaqil qilgan loyihalarim ko'paydi va hali qanchalik ko'p narsani bilmasligimni tushunib yetdim. Shundan so'ng, shunchaki diplom uchun emas, balki murakkab tizimlar ichkaridan qanday ishlashini tushunish uchun Seulga, Sejong universitetiga Kiberxavfsizlikni o'rganishga ketdim. Hozir esa yana Toshkentdaman, asosiy e'tiborim dasturchilar e'tiboridan chetda qoldirgan bozorlar uchun mustahkam va tezkor xizmatlar qurishga qaratilgan.",
    info: "Manzil: O'zbekiston \u00B7 EN \u00B7 RU \u00B7 KO \u00B7 UZ \u00B7 UTC+5",
  },
  about: {
    title: "Kod ortidagi falsafa",
    body: "Men kodga shunchaki dasturchi emas, balki mahsulot yaratuvchisi ko'zi bilan qaraydigan muhandis man. O'zbekistonda kod yozishni boshlaganimda, tuzukroq darslik topish undagi xatoni to'g'rilashdan ko'ra qiyinroq edi. Keyin esa Seulda tizimlar xavfsizligi bo'yicha jiddiy tajriba orttirdim. \n\nIkki tilda erkin gaplasha olaman, full-stack vazifalarni muammosiz hal qilaman va eng zo'r kod — bu localhost'da turgan emas, balki production'da jonli ishlayotgan kod deb hisoblayman.",
    philosophy: [
      "Jonli mahsulot mukammallikdan ustun. Ishlab turgan kod, localhost'da chang bosib yotgan mukammal koddan cheksiz marta qadrliroqdir.",
      "Xavfsizlik loyiha yakunida qo'shiladigan funksiya emas. U eng birinchi qatordan boshlab arxitekturaga singdirilishi kerak.",
      "Tezkorlik — sifatsizlik degani emas. To'g'ri loyihalashtirilgan tizim tezlikni ham, barqarorlikni ham birdek ushlab tura oladi.",
      "Yaxshi mahsulot odamlarning real muammolarini hal qiladi. Qolgan hamma narsa shunchaki qimmatbaho vizual o'yinlar.",
    ],
  },
  ending: {
    headlineLine1: "Xonadagi eng aqlli",
    headlineLine2: "dasturchi bo'lishga intilmayman.",
    headlineLine3: "Men shu xonani ancha yaxshilaydigan odamman.",
    body: "Hozirgi vaqtda distributiv tizimlar, security-first arxitekturasi va chetda qolib ketgan bozorlar uchun platformalar qurish bilan bandman. Agar sizning keyingi loyihangizga ham xuddi shu kabi yondashuv kerak bo'lsa — keling, gaplashib olamiz.",
    cta: "Keling, arziydigan narsa yarataylik.",
  },
  contact: {
    heading: "Gaplashamizmi?",
    intro: "Qiziqarli g'oya, murakkab loyiha yoki shunchaki savolingiz bormi?",
    availability: "Odatda kofeingiz sovib ulgurmasidan javob qaytaraman.",
    ctas: {
      email: "Email",
      telegram: "Telegram",
      phone: "Telefon",
    },
    form: {
      name: "Ismingiz",
      namePlaceholder: "Sizga qanday murojaat qilay?",
      email: "Email manzilingiz",
      emailPlaceholder: "you@example.com",
      message: "Xabaringiz",
      messagePlaceholder: "Qanday daxshatli loyiha qurmoqchimiz?",
      submit: "Yuborish",
    },
  },
  projects: {
    selectedWork: "Saralangan loyihalar",
  },
  bronUzCaseStudy: {
    badge: "Keys",
    title: "BronUz \u2014 Joylarni oson bron qilish platformasi",
    subtitle:
      "Qanday qilib O'zbekiston bozori uchun to'liq ishlaydigan ko'p tarmoqli platformani bo'sh papkadan boshlab tayyorladim.",
    meta: [
      {label: "Mijoz", value: "Shaxsiy loyiha (Pet-project)"},
      {label: "Rol", value: "Solo Full-Stack Dev & Designer"},
      {label: "Muddat", value: "(2026)"},
      {
        label: "Texnologiyalar",
        value:
          "React, Vite, TypeScript, Tailwind CSS, Supabase, PostgreSQL, React Query, Zustand, Leaflet, Recharts, i18next, Vercel",
      },
    ],
    problem: {
      title: "Muammo",
      body: "O'zbekistonda futbol maydoni, kafedagi joy yoki tadbirlar uchun joy band qilish — haqiqiy boshog'riq. Odatda Instagram'dan raqamlarni qidirib topish kerak yoki Telegram'dan soatlab javob kutish lozim. Men buni birgina dam olish kunlarida juda tez ishlaydigan yagona platforma orqali hal qila olishimni sinab ko'rmoqchi bo'ldim. Loyihada mijozlar uchun qulay bron tizimi, biznes egalari uchun daromadlarni kuzatish paneli va umumiy nazorat paneli bo'lishi talab qilingandi.",
    },
    research: {
      title: "Qanday qilib qurdidm (va tirik qoldim)",
      bullets: [
        "Ma'lumotlar bazasi arxitekturasi: Supabase yordamida 13 ta relyatsion jadvallardan iborat backend qurdim, xavfsizlik uchun Row-Level Security (RLS) va foni amallar uchun kustom Edge funksiyalar uladim.",
        "Interaktiv xaritalar va filtrlash: 15 tadan ortiq sahifa yozdim. Leaflet xaritalarini URL holati bilan sinxron qildim, natijada foydalanuvchilar 25 tadan ortiq kategoriyalarni bir zumda filtrlashi va aniq havolani ulashishi mumkin.",
        "Tadbirkorlar paneli: Biznes egalari uchun jonli tahliliy grafiklar, interaktiv bron kalendarlari, vaqt slotlarini boshqarish hamda xodimlar huquqlarini cheklash tizimini yaratdim.",
        "Xavfsiz Admin paneli: Platformani boshqarish va arizalarni tasdiqlash uchun PostgreSQL SECURITY DEFINER funksiyalaridan foydalandim, bu ma'lumotlar bazasiga to'g'ridan-to'g'ri ulanishni xavfsiz saqlaydi.",
        "Telegram bot webhook integratsiyasi: Botni webhook orqali uladi. U yangi bronlar haqida joy egalarini darhol ogohlantiradi, 24 soat oldin cron-topshiriqlar orqali eslatmalar yuboradi va texnik yordam vazifasini bajaradi.",
        "Aniq biznes qoidalari: Sodiqlik ballari tizimi, navbat kutish ro'yxatlari va tadbirkorlar o'zlariga moslab o'zgartira oladigan moslashuvchan bekor qilish tizimini joriy qildim.",
        "PWA imkoniyatlari: Workbox orqali offline kesh tizimini joriy qildim, natijada ilovani iOS va Android qurilmalariga xuddi telefondagi dasturdek o'rnatib olish mumkin.",
      ],
    },
    design: {
      title: "Natija",
      bullets: [
        "Loyiha to'liq tayyor va bronuz.vercel.app manzilida ishlamoqda. Haqiqiy avtorizatsiya, bazadagi tranzaksiyalar va jonli statuslar ishchi holatda.",
        "Uchta mutlaqo boshqa foydalanuvchi interfeysini (Mijoz, Sotuvchi, Admin) kodni ortiqcha ko'paytirmasdan muvaffaqiyatli boshqara oldim.",
        "Boshlanishida to'g'ri arxitektura tanlash kodni xatolarsiz va kosmik tezlikda yozish imkonini berishini isbotladim.",
      ],
    },
    images: [
      {
        src: "/images/projects/bronuz/bronuz_homepage_2.webp",
        alt: "Xarita va qidiruv kartalari aks etgan BronUz asosiy sahifasi",
        caption:
          "Asosiy qidiruv ekrani. Xarita koordinatalari va qidiruv filtrlari URL manzili bilan mukammal sinxron ishlaydi.",
      },
      {
        src: "/images/projects/bronuz/bronuz_venue.webp",
        alt: "BronUz joy band qilish ekrani",
        caption:
          "Mijozlar kun va bo'sh vaqt slotlarini tanlaydigan joy sahifasi.",
      },
      {
        src: "/images/projects/bronuz/bronuz_business.webp",
        alt: "BronUz biznes boshqaruv paneli tahlillari",
        caption:
          "Joy egalari uchun kunlik tushumlar va kelgusi bronlarni kuzatib borish uchun yaratilgan dashboard.",
      },
      {
        src: "/images/projects/bronuz/bronuz_admin.webp",
        alt: "BronUz bosh admin boshqaruv paneli",
        caption:
          "Yangi arizalarni tasdiqlash va umumiy platforma statistikasini ko'rish uchun mo'ljallangan admin paneli.",
      },
    ],
    cta: {label: "Jonli demoni ko'rish", href: "https://bronuz.vercel.app"},
  },
  telegramBotCaseStudy: {
    badge: "Keys",
    title: "Mening AI Assistent Botim",
    subtitle:
      "Mening xarakterimni nusxalaydigan, o'tmishdagi suhbatlarni eslab qoladigan va xarajatlari rosa $0.00 bo'lgan tezkor Telegram bot.",
    meta: [
      {label: "Mijoz", value: "Shaxsiy loyiha"},
      {label: "Rol", value: "Backend / AI Engineer"},
      {label: "Muddat", value: "2026"},
      {
        label: "Texnologiyalar",
        value:
          "TypeScript, Cloudflare Workers, KV, Gemini, Groq, grammY, Serper",
      },
    ],
    problem: {
      title: "Muammo",
      body: "Bir nechta onlayn loyihalarni boshqarish tufayli Telegram'dagi xabarlar har xil vaqt zonalaridan tinimsiz kela boshladi. Bir xil narx savollariga javob berish, vazifalarni belgilash va o'zbek, rus hamda ingliz tillari orasida doimiy chalg'ish ko'p vaqtni yeb qo'ydi. Men o'zimning o'rnimga ishlaydigan aqlli robot qurdim — u oddiy shablonli bot emas, balki mening gapirish ohangimga moslashgan raqamli yordamchidir.",
    },
    research: {
      title: "Qanday qurdidm",
      bullets: [
        "Uch bosqichli xotira tizimi: Cloudflare KV yordamida suhbat holati, foydalanuvchi profili va uzoq muddatli ma'lumotlarni saqlaydi, shuning uchun eski foydalanuvchilarni hech qachon unutmaydi.",
        "Xatoliklarga chidamlilik: Limitlardan qochish uchun 5 ta Gemini modellaridan iborat zanjirli zaxira tizimi o'rnatildi, fon rejimida esa o'ta tezkor Groq modellari matnni tahlil qiladi.",
        "Tezkor til aniqlash: Og'ir NLP kutubxonalarini kutmasdan, regex orqali o'zbek, rus yoki ingliz tillariga o'tishni darhol aniqlaydigan engil tizim yozdim.",
        "Intentsiya tekshiruvi: Muhim va vahimali xabarlarni tahlil qiladigan dastlabki qatlam qurilgan. Agar AI adashishi mumkin bo'lgan holat bo'lsa, u noto'g'ri javob bergandan ko'ra aniqlashtiruvchi savol beradi.",
        "Tabiiy tildagi eslatmalar: Bot 'ertaga soat 15:00 da eslat' kabi oddiy gaplarni tushunib, avtomatik ravishda vazifalar jadvalini tuzadi va eslatmalar yuboradi.",
        "Jonli qidiruv tizimi: Serper.dev tizimi ulandi, bu orqali bot real vaqtdagi internet ma'lumotlarini ham qidirib topa oladi.",
        "Orqa fondagi chuqur tahlil: Har to'rtta xabardan keyin Groq foni ishga tushib, suhbatni qisqartiradi, foydalanuvchi xaritasini yangilaydi va uning kayfiyatini tahlil qiladi.",
        "Sodda Admin paneli: HTTP Basic Auth bilan himoyalangan veb-sahifa qurdim. Bu yerda suhbatlarni o'qish, sun'iy intellekt modellarini almashtirish va yuklamani ko'rish mumkin.",
        "Odam kabi yozish tezligi: Haqiqiy yozish tezligini simulyatsiya qiladigan moslashuvchan kechikishlar qo'shildi. Yangi odamlarga vaziyatga qarab moslashib javob qaytaradi.",
        "Lokal muhit: Worker'ni Cloudflare asboblari yordamida yozdim, lekin uni internetga yuklamasdan turib o'zimning kompyuterimda Express orqali osonlikcha test qila olaman.",
      ],
    },
    design: {
      title: "Natijalar",
      bullets: [
        "Men telefonimga tegmasam ham, bot har kuni o'nlab ko'p tilli mijozlar bilan muloqotni muammosiz hal qiladi.",
        "Avtomatlashtirilgan eslatma tizimi tufayli hech bir muhim uchrashuv yoki vazifalar esimdan chiqib ketmaydi.",
        "Serverless tekin limitlaridan to'g'ri foydalanilgani sababli hosting va API xarajatlari roppa-rosa $0.00 ni tashkil etadi.",
      ],
    },
    images: [
      {
        src: "/images/projects/tg-bot/3d-stickle-retro-tablet-with-pixel-ai-chatbot-1.png",
        alt: "Piksel AI chatbot interfeysiga ega retro planshet",
        caption:
          "Avtomatlashtirish metrikalari va suhbat holatlarini kuzatib boruvchi yordamchi boshqaruv paneli.",
      },
      {
        src: "/images/projects/tg-bot/3d-stickle-robot-assistant-device-with-smiling-pixel-face-and-control-knobs.png",
        alt: "Tabassum qilayotgan piksel yuzli va boshqaruv tugmalariga ega robot yordamchi qurilmasi",
        caption:
          "Botning konsept dizayni: retro qobiq ostida zamonaviy serverless AI kuchi yashiringan.",
      },
    ],
    cta: {label: "Botni sinab ko'rish", href: "https://t.me/itsbek_bot"},
  },
  octoposAppsCaseStudy: {
    badge: "Keys",
    title: "Octopos \u2014 Restoranlar uchun texnologiya",
    subtitle:
      "Katta restoran boshqaruv tizimi va real vaqtdagi POS terminallarining frontend arxitekturasini yuqori tezlik uchun qayta yozish.",
    meta: [
      {label: "Mijoz", value: "Octopos (Tijoriy mahsulot)"},
      {label: "Rol", value: "Lead Frontend Engineer"},
      {label: "Muddat", value: "2025 - 2026"},
      {
        label: "Texnologiyalar",
        value:
          "React, TypeScript, Tailwind CSS, TanStack Query, Zustand, Radix UI, Lucide React, i18next",
      },
    ],
    problem: {
      title: "Muammo",
      body: "Ushbu ko'p tarmoqli B2B platformaning eski kodi juda og'ir va qotib ishlaydigan bo'lib qolgandi. Ofitsiantlar qizg'in ish vaqtida interfeys sekinligidan qiynalishar, oshxonada esa ma'lumotlar sinxronizatsiyasi sababli buyurtmalar yo'qolib qolardi. Meni frontend arxitekturasini noldan yangilash va uni har qanday og'ir sharoitda ham tez ishlaydigan asbobga aylantirish uchun taklif qilishdi.",
    },
    research: {
      title: "Men nimalarni o'zgartirdim",
      bullets: [
        "Frontendni noldan qayta qurish: Eski kodni butunlay olib tashlab, o'ta yuqori rendering tezligiga ega bo'lgan zamonaviy React + TypeScript tizimini qurdim.",
        "Tezkor POS Terminali: Ofitsiantlar uchun qulay tugmalar va tezkor qidiruvga ega kassa interfeysini yozdim, savatchaning yangilanish tezligi millisekundlardan ham kamroqni tashkil etadi.",
        "Interaktiv zallar xaritasi: Joy bandligini real vaqtda boshqaradigan va stollar ko'rinishini dinamik o'zgartiradigan kustom drag-and-drop xaritasini yozdim.",
        "Oshxona monitor tizimi (KDS): Oshpazlar uchun maxsus ekran interfeysini ishlab chiqdim. Tizim buyurtmalarni tayyor bo'lish vaqtiga qarab tartiblaydi va birorta ham buyurtma e'tibordan chetda qolmaydi.",
        "Holatni optimallashtirish (State): Tartibsiz ma'lumot oqimlarini ixcham Zustand do'konlariga almashtirdim va TanStack Query kesh qoidalarini to'g'riladim, kassa va oshxona o'rtasidagi farq butkul yo'qoldi.",
        "Moslashuvchan intertsionalizatsiya: Til o'zgarganda matn uzunligi turlicha bo'lishiga qaramay, interfeys elementlari sinib ketmaydigan dinamik tarjima tizimini sozladim.",
      ],
    },
    design: {
      title: "Natijalar",
      bullets: [
        "Yangilangan dasturiy ta'minot hozirda octopos.uz platformasi orqali real restoran va qahvaxonalarda muvaffaqiyatli ishlamoqda.",
        "Kod hajmini sezilarli darajada kichraytirdim, natijada eng arzon Android planshetlarida ham tizim silliq (60 FPS) ishlaydi.",
        "Ofitsiantlar hisob-kitobni soniyalarda bajarishmoqda, oshxona esa buyurtmani kassa tugmasi bosilgan o'sha millisekundda ko'radi.",
      ],
    },
    images: [
      {
        src: "/images/projects/octopos_apps/dash_1.webp",
        alt: "Tahlillar aks etgan Octopos boshqaruv paneli",
        caption:
          "Restoratorning asosiy paneli, bu yerda rahbarlar daromadni tahlil qiladilar, menyuni tahrirlaydilar va omborni kuzatadirlar.",
      },
      {
        src: "/images/projects/octopos_apps/dash_2.webp",
        alt: "Octopos buyurtmalar ro'yxati ko'rinishi",
        caption:
          "Tranzaksiyalarni tezkor nazorat qilish uchun menejerlar ehtiyojlariga moslashtirilgan hisob-kitob monitoring ekrani.",
      },
      {
        src: "/images/projects/octopos_apps/dash_3.webp",
        alt: "Octopos xaridlar va ombor vositasi",
        caption:
          "Ombor logistikasi bo'limi: mahsulotlar kam qolganda avtomatik ogohlantirishlar va yuk xatlarini hisobga olish.",
      },
      {
        src: "/images/projects/octopos_apps/pos_1.webp",
        alt: "Octopos POS terminal katalog katakchasi",
        caption:
          "Eng qizg'in ish vaqtida xatolarsiz bosish uchun mo'ljallangan kassa terminalining qulay ergonomik ko'rinishi.",
      },
      {
        src: "/images/projects/octopos_apps/pos_2.webp",
        alt: "Octopos kassa to'lov ekrani",
        caption:
          "To'lovni yakunlash oynasi: qaytimni tez hisoblash, aralash to'lov turlari va chekni mehmonlar bo'yicha tezkor bo'lish.",
      },
      {
        src: "/images/projects/octopos_apps/pos_3.webp",
        alt: "Octopos interaktiv zallar xaritasi",
        caption:
          "Stollarning bandlik holati va biriktirilgan ofitsiantlarni ko'rsatadigan qulay joylashuv konstruktori.",
      },
      {
        src: "/images/projects/octopos_apps/kitchen_1.webp",
        alt: "Real vaqtdagi Octopos oshxona terminali",
        caption:
          "Oshpazlarga taomlarni tayyorlash vaqtini aniq nazorat qilishga yordam beradigan yuqori kontrastli oshxona ekrani (KDS).",
      },
    ],
    cta: {label: "Octopos biznes saytiga o'tish", href: "https://octopos.uz"},
  },
  octoposLandingCaseStudy: {
    badge: "Keys",
    title: "Octopos Landing sahifasi",
    subtitle:
      "Murakkab B2B restoran tizimini chiroyli va yuqori konversiyali SaaS landing sahifasiga aylantirish.",
    meta: [
      {label: "Mijoz", value: "Octopos"},
      {label: "Rol", value: "Frontend Engineer \u00B7 UX dasturlash"},
      {label: "Muddat", value: "4 hafta (2026)"},
      {label: "Texnologiyalar", value: "Astro, Tailwind CSS, Resend"},
    ],
    problem: {
      title: "Vazifa",
      body: "Octopos'da ajoyib ilovalar jamlanmasi bor edi (Dash, POS, Kitchen), lekin eski landing sahifasi mahsulotning haqiqiy qiymatini tushuntirib bera olmasdi. Sayt matnga juda to'la edi, aniq vizual tuzilishga ega emas edi va rahbarlarda demo-versiyani sinab ko'rishga qiziqish uyg'otmasdi.",
    },
    research: {
      title: "Men nimalar qildim",
      bullets: [
        "Yetakchi dizayner tomonidan tayyorlangan yuqori sifatli dizaynni mahsulot unumdorligiga zarar yetkazmagan holda mukammal kodga o'tkazdim.",
        "Loyihani Astro va Tailwind CSS yordamida yig'dim, bu mijoz tomonidagi JS hajmini kamaytirdi va telefonlarda darhol ochilishini ta'minladi.",
        "Kassa, backend va oshxona o'rtasidagi sinxronizatsiyani ko'rsatib beruvchi interaktiv namoyish bloklarini ishlab chiqdim.",
        "Potensial mijozlar orasida saytni tark etish foizini sezilarli darajada kamaytirgan qulay ro'yxatdan o'tish tizimini yozdim.",
        "Backend xizmatlarini uladim va Resend xizmati orqali avtomatlashtirilgan xatlar zanjirini moslashtirdim.",
        "Core Web Vitals ko'rsatkichlarini optimallashtirdim va qidiruv tizimlarida yaxshi chiqishi uchun SEO strukturasini to'g'riladim.",
      ],
    },
    design: {
      title: "Natija",
      bullets: [
        "Murakkab B2B mahsulotni oddiy tilda tushuntirib beradigan va mijozlar savollariga javob beradigan marketing xabini topshirdik.",
        "Demo-versiyaga yozilish jarayonini soddalashtirdik, shaklni to'ldirish oson va qulay ko'rinishga keldi.",
        "Butun marketing loyihasini belgilangan 4 haftalik muddat ichida muvaffaqiyatli yakunladik va jonli efirga uzatdik.",
      ],
    },
    images: [
      {
        src: "/images/projects/octopos/octopos_before.webp",
        alt: "Qayta dizayndan oldingi eski Octopos landing sahifasi",
        caption:
          "Dastlabki MVP ko'rinishi: qalin matn devorlari, past kontrast va aniq harakatga chaqiruvchi tugmalarning yo'qligi.",
      },
      {
        src: "/images/projects/octopos/octopos.webp",
        alt: "Yangi Octopos landing sahifasi skrinshoti",
        caption:
          "Yakuniy desktop interfeysi: urg'u berilgan birinchi ekran, aniq foydalanish ssenariylari va ishonch bloklari.",
      },
    ],
    cta: {label: "Saytni jonli ko'rish", href: "https://octopos.uz"},
  },
  skills: {
    title: "Doimiy ishlatadigan vositalarim",
    groups: [
      {
        title: "Frontend qurollarim",
        items: [
          "React",
          "Astro",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Sass",
          "HTML5 / CSS3",
        ],
      },
      {
        title: "Backend va Infratuzilma",
        items: ["Node.js", "Supabase", "PostgreSQL", "Python", "Go"],
      },
      {
        title: "Har xil",
        items: [
          "Git & GitHub",
          "CI/CD Pipelines",
          "Avtotestlar",
          "C / Assembly",
          "Prompt Engineering",
          "Vercel",
        ],
      },
    ],
  },
  footer: {
    email: "Email",
    github: "GitHub",
    telegram: "Telegram",
    resume: "Rezyume",
    builtWith:
      "Next.js, Framer Motion, GSAP va Lenis yordamida yig'ildi — hech qanday tayyor shablon yoki zerikarli tayyorlamalarsiz.",
  },
};

export default uz;
