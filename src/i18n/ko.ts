import type {I18n} from "./types";

const ko: I18n = {
  nav: {
    links: {
      about: "소개",
      skills: "기술",
      caseStudy: "사례 연구",
      work: "작업",
      contact: "연락처",
      resume: "이력서",
    },
  },
  hero: {
    name: "Bekzod Turgunov",
    headlineLine1: "나는 만든다",
    headlineLine2: "인터페이스를.",
    subtextLine1: "우즈베키스탄에서 서울까지 \u2014",
    subtextLine2: "실제로 사용되는 제품을 만듭니다.",
    availability: "연락 가능",
  },
  origin: {
    grewUp: "우즈베키스탄에서",
    country: "자랐습니다.",
    studied: "서울에서 공부했습니다.",
    building: "계속 만들고 있습니다.",
    timeline: [
      {year: "2016", description: "Wrote first line of code in Uzbekistan. Self-taught, slow internet, stubborn."},
      {year: "2023", description: "Moved to Seoul. Studied security at Sejong University."},
      {year: "Now", description: "Back in Tashkent, shipping products for markets nobody else is looking at."},
    ],
    body: "우즈베키스탄에서 태어나 좋은 인터넷을 찾는 것이 버그를 찾는 것보다 어렵던 시절에 스스로 코딩을 배웠습니다. 부트캠프도, 지름길도 없었습니다 \u2014 그저 어려운 문제들과 포기하지 않는 고집뿐이었습니다.\n\n2023년 서울로 이주하여 세종대학교에서 보안을 공부했습니다. 지금은 돌아와서, 대부분이 아직 살펴보지 않은 시장을 위해 만들고 있습니다.",
    info: "Based in Uzbekistan \u00B7 EN \u00B7 RU \u00B7 KO \u00B7 UZ \u00B7 UTC+5",
  },
  about: {
    title: "Behind the code",
    body: "I\u2019m a software engineer who thinks like a product builder. I started coding in Uzbekistan when finding a good tutorial was harder than fixing the bugs it taught you. I moved to Seoul in 2023 to study security at Sejong University. Now I build for markets most people haven\u2019t looked at yet.\n\nI speak four languages, work across the full stack, and believe the best code is the code that ships.",
    philosophy: [
      "Production beats perfection. Code that runs is worth more than code that\u2019s elegant but idle.",
      "Security isn\u2019t a layer you add at the end. It\u2019s in the architecture from day one.",
      "Fast doesn\u2019t mean fragile. Good systems are quick and resilient.",
      "The best products solve real problems. Everything else is just features.",
    ],
  },
  proof: {
    metrics: [
      {value: "4+", label: "Years shipping\nproduction systems"},
      {value: "10+", label: "Products live\nand in use"},
      {value: "3 days", label: "Blank folder\nto deployed"},
      {value: "4", label: "Languages\nEN \u00B7 RU \u00B7 KO \u00B7 UZ"},
      {value: "15+", label: "Technologies\nacross the stack"},
    ],
  },
  ending: {
    headlineLine1: "Not the best developer",
    headlineLine2: "in the room.",
    headlineLine3: "The one who makes the room better.",
    body: "Building toward distributed systems, security-first architecture, and products that matter in markets most people haven\u2019t looked at yet. If that sounds like your next project \u2014 let\u2019s talk.",
    cta: "Let\u2019s build something that matters.",
  },
  contact: {
    heading: "이야기해요.",
    intro: "프로젝트나 질문이 있으신가요?",
    availability: "24시간 이내에 답변드립니다.",
    ctas: {
      email: "이메일",
      telegram: "텔레그램",
      phone: "전화",
    },
    form: {
      name: "이름",
      namePlaceholder: "이름을 입력하세요",
      email: "이메일",
      emailPlaceholder: "your@email.com",
      message: "메시지",
      messagePlaceholder: "무엇을 생각하고 계신가요?",
      submit: "메시지 보내기",
    },
  },
  projects: {
    selectedWork: "선별된 작업",
  },
  bronUzCaseStudy: {
    badge: "사례 연구",
    title: "BronUz — 장소 예약 플랫폼",
    subtitle: "우즈베키스탄에는 장소를 찾고 예약할 수 있는 사이트가 없었습니다. 그래서 만들었습니다. 3일 만에.",
    meta: [
      {label: "클라이언트", value: "개인 프로젝트"},
      {label: "역할", value: "풀스택 엔지니어 · 제품 디자이너"},
      {label: "기간", value: "2026"},
      {label: "스택", value: "React, Vite, TypeScript, Tailwind CSS, Supabase, PostgreSQL, React Query, Zustand, Leaflet, Recharts, i18next, Vercel"},
    ],
    problem: {
      title: "도전 과제",
      body: "우즈베키스탄에는 사이트 하나 열어서 근처 카페나 축구장을 찾아 예약할 수 있는 곳이 없습니다. 모든 게 WhatsApp과 전화로 이루어집니다 — 고객과 업소 모두에게 불편합니다. 이것을 바꾸고 싶었습니다. 풀스택 앱, 업주 도구, 관리자 패널 — 하나의 Supabase 백엔드에, 3일 만에.",
    },
    research: {
      title: "구축한 내용",
      bullets: [
        "처음부터 풀스택 구축: React + Vite 프론트엔드, Supabase 백엔드 (13개 테이블, RLS, Edge Functions)",
        "15개 이상 페이지 — Leaflet 지도 검색, 실시간 슬롯 예약, 25개 이상 카테고리 URL 동기화 필터",
        "업주 대시보드: 수익 차트, 예약 캘린더, 슬롯 관리, 직원 관리, 프로모션 코드",
        "관리자 패널: 장소 승인, 사용자 역할, 플랫폼 분석, SECURITY DEFINER RPC",
        "텔레그램 봇: 웹훅 확인, 24시간 알림, AI 고객 지원",
        "포인트, 대기자 명단, 그룹 예약, 장소별 취소 정책",
        "PWA: Workbox 오프라인 캐싱, iOS 설치, cron 알림",
      ],
    },
    design: {
      title: "결과",
      bullets: [
        "bronuz.vercel.app에서 운영 중 — 인증, 실제 장소 데이터, 예약 플로우",
        "세 가지 역할: 고객, 업주, 관리자 — 각각 자신의 대시보드",
        "빈 폴더에서 배포된 제품까지 3일",
      ],
    },
    images: [
      {src: "/images/projects/bronuz/bronuz_homepage_2.webp", alt: "BronUz 홈페이지 — 지도와 장소 카드가 있는 검색 결과", caption: "BronUz 홈페이지 — 지도와 장소 카드가 있는 검색 결과"},
      {src: "/images/projects/bronuz/bronuz_venue.webp", alt: "BronUz 장소 상세 — 사진 갤러리, 슬롯 선택기 및 예약 사이드바", caption: "BronUz 장소 상세 — 사진 갤러리, 슬롯 선택기 및 예약 사이드바"},
      {src: "/images/projects/bronuz/bronuz_business.webp", alt: "BronUz 비즈니스 대시보드 — 수익 분석 및 오늘의 예약", caption: "BronUz 비즈니스 대시보드 — 수익 분석 및 오늘의 예약"},
      {src: "/images/projects/bronuz/bronuz_admin.webp", alt: "BronUz 관리자 패널 — 장소 승인 및 플랫폼 분석", caption: "BronUz 관리자 패널 — 장소 승인 및 플랫폼 분석"},
    ],
    cta: {label: "라이브 사이트 방문", href: "https://bronuz.vercel.app"},
  },
  telegramBotCaseStudy: {
    badge: "사례 연구",
    title: "개인 비서 봇",
    subtitle: "나처럼 대답하고, 너를 기억하고, 운영 비용이 0원인 텔레그램 봇.",
    meta: [
      {label: "클라이언트", value: "개인 프로젝트"},
      {label: "역할", value: "소프트웨어 엔지니어"},
      {label: "기간", value: "2026"},
      {label: "스택", value: "TypeScript, Cloudflare Workers, KV, Gemini, Groq, grammY, Serper"},
    ],
    problem: {
      title: "도전 과제",
      body: "비즈니스를 운영하면 하루에 수십 개의 텔레그램 메시지가 옵니다. 가격 묻는 고객, 협업하는 파트너, 기억해야 할 심부름. 적절한 시간에 올바른 언어(우즈베크어, 러시아어, 영어)로 답장하면서 모든 것을 추적하는 것은 감당하기 어려웠습니다.",
    },
    research: {
      title: "수행한 작업",
      bullets: [
        "Cloudflare KV 기반 3단계 메모리 시스템: 대화 기록, 페르소나 프로필, 장기 사실. 데이터베이스 비용 없이 모든 연락처의 맥락 유지.",
        "5개 Gemini 모델 간 AI 폴백 체인 (자동 쿨다운), Groq 폴백으로 백그라운드 분석.",
        "자동 언어 감지: regex 기반, 외부 NLP 불필요. 보낸 사람 언어로 답장.",
        "의도 분류기: AI 호출 전에 긴급성, 인사, 가격 문의, 불만 감지. 신뢰도 낮으면 사람 같은 확인 문구로 폴백.",
        "자연어 시간 파싱 (\"내일 3시에 알려줘\") 작업 엔진, 아침 브리핑, cron 알림.",
        "Serper.dev 실시간 웹 검색: 날씨, 뉴스, 실시간 정보.",
        "4번째 메시지마다 Groq 분석: 요약, 새 사실, 의도 변화, 감정 변화 추출 → 답변에 반영.",
        "HTTP Basic Auth 웹 대시보드: 재배포 없이 대화 모니터링, AI 모델 설정, 통계 확인.",
        "인간적인 응답 타이밍: 새 연락처는 지연 응답, 느린 상대는 맞춤 속도, 긴급 메시지는 즉시.",
        "Cloudflare Workers 배포 + Express 로컬 개발 폴백.",
      ],
    },
    design: {
      title: "결과",
      bullets: [
        "매일 수십 개 대화 자동 처리 — 세 언어로 적절한 톤과 타이밍.",
        "\"내일 3시에 알려줘\"가 작동합니다. 아침 브리핑으로 놓치는 일 없음.",
        "인프라 비용 0원: Cloudflare Workers + Gemini + KV 무료 티어. 월 $0.",
        "~6,900줄 TypeScript, 4개 의존성, 전적으로 엣지에서 실행.",
      ],
    },
    images: [
      {src: "/images/projects/3d-device-with-ai-assistant.webm", alt: "Telegram Business API 통합 — 봇이 수신 비즈니스 메시지를 가로채 AI 생성 응답으로 소유자처럼 응답합니다.", caption: "Telegram Business API 통합 — 봇이 수신 비즈니스 메시지를 가로채 발신자의 언어와 톤에 맞는 AI 생성 응답으로 소유자처럼 응답합니다."},
      {src: "/images/projects/ai-assistant-on-digital-screen-smart-device.webm", alt: "3계층 메모리 시스템 — 봇이 Cloudflare KV를 사용하여 연락처별로 대화 기록, 페르소나 프로필, 장기 사실을 유지합니다.", caption: "3계층 메모리 시스템 — 봇이 Cloudflare KV를 사용하여 연락처별로 대화 기록, 페르소나 프로필, 장기 사실을 유지합니다."},
    ],
    cta: {label: "소스 코드 보기", href: "https://github.com/bekzodturgunoff/personal-assistant"},
  },
  octoposAppsCaseStudy: {
    badge: "사례 연구",
    title: "Octopos 앱",
    subtitle: "세 개의 프로덕션 PWA — POS 터미널, 주방 디스플레이, 관리자 대시보드 — 하나의 백엔드 공유.",
    meta: [
      {label: "클라이언트", value: "Octopos"},
      {label: "역할", value: "제품 디자이너 · 소프트웨어 엔지니어"},
      {label: "기간", value: "2026"},
      {label: "스택", value: "TypeScript, React 18/19, Vite, TanStack Router, TanStack Query, TanStack React DB, Zustand, Tailwind CSS v4, Go, SQLite, NATS"},
    ],
    problem: {
      title: "내 역할",
      body: "POS, 주방 디스플레이, 대시보드 앱 개발 — Go API 통합, 새 기능 출시, UI 일관성 유지, 백엔드 개발자와 협업하여 비즈니스 요구 충족.",
    },
    research: {
      title: "구축한 내용",
      bullets: [
        "Swagger/OpenAPI로 Go REST API와 프론트엔드 연결.",
        "POS: 주문 워크플로우, 고객 검색, 다중 처리 (매장/테이크아웃/배달), UI 개선.",
        "주방 디스플레이: 실시간 주문 관리, 티켓 생애주기, 필터링, 상태 표시.",
        "대시보드: 주문 생성, 고객 관리, 비즈니스 기능.",
        "모든 기능에서 일관된 디자인 유지.",
        "백엔드/프론트엔드 팀과 협업: 개발, 테스트, 배포.",
        "프로덕션 버그 수정, 안정성 및 UX 개선.",
        "오프라인 우선 POS: TanStack React DB + WASQLite — 로컬 대기열, 자동 충돌 해결 동기화.",
      ],
    },
    design: {
      title: "결과",
      bullets: [
        "세 개의 PWA: POS, 주방 디스플레이, 관리자 대시보드 — 동일한 Go/SQLite/NATS 백엔드.",
        "주문 흐름: POS에서 주문 접수 → KDS에서 몇 초 내 확인 (3초 폴링) → 대시보드에서 관리자 추적.",
        "오프라인 복원력: 인터넷 중단에도 가동 중단 없음. WASQLite 로컬 대기열, 온라인 복구 시 자동 동기화.",
      ],
    },
    images: [
      {src: "/images/projects/octopos_apps/dash_1.webp", alt: "Octopos 관리자 대시보드 — 수익 차트 및 KPI 개요", caption: "일일 수익, 활성 주문 및 주요 지표를 보여주는 관리자 대시보드."},
      {src: "/images/projects/octopos_apps/dash_2.webp", alt: "Octopos 대시보드 — 주문 목록 및 상세 보기", caption: "모든 테이블에서 실시간 상태 업데이트를 통한 주문 관리."},
      {src: "/images/projects/octopos_apps/dash_3.webp", alt: "Octopos 대시보드 — 재고 추적 및 구매 주문", caption: "재고 알림, 구매 주문 및 메뉴 관리를 포함한 재고 추적."},
      {src: "/images/projects/octopos_apps/pos_1.webp", alt: "Octopos POS — 카탈로그 탐색 및 장바구니", caption: "메뉴 카테고리, 상품 선택 및 활성 장바구니가 있는 POS 터미널."},
      {src: "/images/projects/octopos_apps/pos_2.webp", alt: "Octopos POS — 결제 처리", caption: "현금, 카드 및 분할 결제 옵션이 있는 결제 화면."},
      {src: "/images/projects/octopos_apps/pos_3.webp", alt: "Octopos POS — 테이블 관리가 포함된 평면도", caption: "테이블 관리 및 고객 조회 기능이 있는 시각적 평면도."},
      {src: "/images/projects/octopos_apps/kitchen_1.webp", alt: "Octopos 주방 디스플레이 — 실시간 주문 티켓", caption: "스테이션별로 그룹화된 실시간 주문 티켓을 보여주는 주방 디스플레이."},
    ],
    cta: {label: "Octopos 방문", href: "https://octopos.uz"},
  },
  octoposLandingCaseStudy: {
    badge: "사례 연구",
    title: "Octopos 랜딩 페이지",
    subtitle: "복잡한 레스토랑 관리 플랫폼을 명확하고 전환 중심의 제품 경험으로 전환.",
    meta: [
      {label: "클라이언트", value: "Octopos"},
      {label: "역할", value: "프론트엔드 엔지니어 · 제품 구현"},
      {label: "기간", value: "4주 · 2026"},
      {label: "기술 스택", value: "Astro, Tailwind CSS, Resend"},
    ],
    problem: {
      title: "도전 과제",
      body: "Octopos는 Dash, POS, Kitchen으로 구성된 강력한 멀티앱 생태계를 보유하고 있었지만, 기존 랜딩 페이지를 통해 제품 가치가 명확히 전달되지 않았습니다. 사이트는 구조, 현대적인 UX 흐름, 신규 사용자를 위한 강력한 온보딩 경로가 부족했습니다.",
    },
    research: {
      title: "수행 역할",
      bullets: [
        "시니어 개발자/디자이너가 제공한 디자인을 기반으로 전체 랜딩 페이지를 구현하여 반응형 프로덕션 준비 웹사이트로 전환했습니다.",
        "Astro와 Tailwind를 사용하여 프론트엔드 전체를 구축했으며, 모바일과 데스크톱에서 픽셀 단위의 정확한 구현을 보장했습니다.",
        "Dash, POS, Kitchen이 통합 시스템으로 어떻게 함께 작동하는지 명확히 설명하는 제품 목업과 비주얼 섹션을 개발했습니다.",
        "리드를 확보하고 플랫폼 액세스를 제공하기 위한 온보딩 및 체험판 가입 흐름을 구현했습니다.",
        "Resend를 통한 사용자 온보딩 및 자동 이메일 처리를 위해 백엔드 서비스를 연결했습니다.",
        "성능 최적화, 모바일 반응성 및 SEO 구조를 보장했습니다.",
      ],
    },
    design: {
      title: "결과",
      bullets: [
        "제품 생태계의 명확성을 개선하고 Octopos에 대한 사용자 이해를 강화하는 빠르고 현대적인 SaaS 랜딩 페이지를 구축했습니다.",
        "새로운 사용자가 플랫폼을 시도할 때 마찰을 줄이는 원활한 체험판 온보딩 흐름을 만들었습니다.",
        "제품 및 엔지니어링 팀과 협력하여 4주 이내에 완전한 제품을 출시했습니다.",
      ],
    },
    images: [
      {
        src: "/images/projects/octopos/octopos_before.webp",
        alt: "재디자인 전 Octopos 랜딩 페이지 원본",
        caption: "재디자인 전 원본 MVP 화면 — 빽빽한 문구, 낮은 대비, 명확한 행동 유도 버튼 부재.",
      },
      {
        src: "/images/projects/octopos/octopos.webp",
        alt: "Octopos 랜딩 페이지 스크린샷",
        caption: "재작업된 히어로 섹션, 사용 사례, 소셜 프루프를 강조하는 고해상도 데스크톱 화면.",
      },
    ],
    cta: {label: "라이브 사이트 방문", href: "https://octopos.uz"},
  },
  skills: {
    title: "사용하는 기술",
    groups: [
      {title: "프론트엔드", items: ["React", "Astro", "TypeScript", "JavaScript", "Tailwind", "Sass", "HTML/CSS"]},
      {title: "백엔드", items: ["Node.js", "Supabase", "PostgreSQL", "Python", "Go"]},
      {title: "기타", items: ["Git", "CI/CD", "테스팅", "C / Assembly", "프롬프트 엔지니어링", "Vercel"]},
    ],
  },
  footer: {
    email: "이메일",
    github: "GitHub",
    telegram: "텔레그램",
    resume: "이력서",
    builtWith: "Built with Next.js, Framer Motion, GSAP, Lenis \u2014 no template, no boilerplate.",
  },
};

export default ko;
