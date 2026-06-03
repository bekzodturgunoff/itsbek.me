import type { I18n } from './types';

const ko: I18n = {
  nav: {
    links: { about: '소개', skills: '기술', caseStudy: '사례 연구', work: '포트폴리오', contact: '연락처', resume: '이력서' },
  },
  hero: {
  name: 'itsbek.me',
    titleTop: '소프트웨어 엔지니어',
    titleBottom: '사용자 경험과 신뢰성에 집중',
    description: `3년+ 경험의 소프트웨어 엔지니어로, React와 Astro로 빠르고 접근성 높은 제품을 만듭니다. 디자인·백엔드와 긴밀히 협업하며 JavaScript/TypeScript, Python, C 레벨 문제 해결에 익숙합니다.`,
    location: '우즈베키스탄',
    availability: '새로운 프로젝트 문의 가능',
    timezoneLabel: 'KST (GMT +9)',
    buttons: {
      contact: '연락하기',
      viewWork: '작업 보기',
      viewCaseStudy: '케이스 스터디 보기'
    }
  },
  about: {
    intro: `제품 사고와 프론트엔드 역량을 함께 갖춘 소프트웨어 엔지니어입니다. 성능, 접근성, 보안을 중시하며 매 릴리스가 매끄럽고 검증 가능하도록 만듭니다. 세종대학교 컴퓨터정보보안 전공 중이며, 보안 관점도 함께 고려합니다.`,
    basedIn: '우즈베키스탄 거주',
    languagesLine: '사용 언어: 영어 (주), 러시아어, 한국어'
  },
  contact: {
    heading: `함께 일해요`,
    intro: `새로운 프로젝트, 까다로운 버그 수정, 또는 아이디어에 대해 이야기하고 싶으신가요? 언제든지 편하게 연락주세요.`,
    availability: '24시간 이내 회신.',
    ctas: { call: '전화하기', email: '이메일 보내기', telegram: '텔레그램 메시지' },
    form: {
      name: '이름',
      namePlaceholder: '성함',
      email: '이메일',
      emailPlaceholder: 'your@email.com',
      message: '메시지',
      messagePlaceholder: "어떤 내용이든 편하게 남겨주세요.",
      submit: '메시지 보내기'
    }
  },
  projects: {
    selectedWork: '주요 프로젝트'
  },
  bronUzCaseStudy: {
    badge: '사례 연구',
    title: 'BronUz — Venue Reservation Platform',
    subtitle: "Designing and shipping Uzbekistan's first full-stack reservation platform in 3 days.",
    meta: [
      { label: '고객', value: '개인 프로젝트' },
      { label: '역할', value: 'Full-Stack Engineer · Product Designer' },
      { label: '기간', value: '2026년' },
      { label: '기술 스택', value: 'React, Vite, TypeScript, Tailwind CSS, Supabase, PostgreSQL, React Query, Zustand, Leaflet, Recharts, i18next, Vercel' }
    ],
    problem: {
      title: '도전 과제',
      body: "우즈베키스탄에는 카페, 레스토랑, 축구장, 게임 클럽, 이발소, 헬스장, 코워킹 스페이스 등 로컬 장소를 발견하고 예약할 수 있는 통합 플랫폼이 없습니다. 업소들은 전화와 WhatsApp으로 예약을 수동으로 관리하고 있습니다. 사용자들은 실시간 가용성을 확인하거나, 검증된 리뷰를 읽거나, 전화 없이 예약을 확정할 방법이 없습니다. 목표는 이 모든 문제를 해결하는 플랫폼 — 풀스택 웹 앱, 업주 도구, 완전한 관리자 패널 — 을 단일 Supabase 백엔드로 3일 만에 구축하는 것이었습니다."
    },
    research: {
      title: '수행 역할',
      bullets: [
        "React + Vite 프론트엔드, 13개 데이터베이스 테이블, Row-Level Security 정책, Edge Functions을 갖춘 Supabase 백엔드로 전체 풀스택 아키텍처를 처음부터 설계하고 구축했습니다.",
        "Leaflet 지도 검색, 실시간 슬롯 예약, 25개 이상의 장소 카테고리에 걸친 URL 동기화 공유 검색 필터 등 15개 이상의 페이지를 구축했습니다.",
        "수익 분석, 예약 캘린더, 슬롯 가용성 관리, 직원 관리, 프로모션 코드 생성, Recharts 차트를 갖춘 업주 대시보드를 구축했습니다.",
        "장소 승인 워크플로우(승인/거절), 사용자 관리(역할 할당), 플랫폼 전체 분석, 관리자가 업주 데이터를 직접 수정할 수 없도록 SECURITY DEFINER RPC 함수를 갖춘 완전한 관리자 패널을 구축했습니다.",
        "웹훅 기반 예약 확인, 24시간 자동 알림, Supabase Edge Functions를 통한 딥 링크 사용자 인증 및 AI 채팅 고객 지원을 갖춘 Telegram 봇을 통합했습니다.",
        "예약당 적립·할인 사용 가능한 로열티 포인트 시스템, 만석 시 대기자 명단, 프로모션 코드, 그룹 예약, 직원 선택, 장소별 취소 정책을 구현했습니다.",
        "Workbox 오프라인 캐싱, iOS 감지 설치 프롬프트, Supabase Edge Functions 자동 예약 알림 Cron 작업을 갖춘 PWA로 배포했습니다.",
      ]
    },
    design: {
      title: '결과',
      bullets: [
        "전체 인증, 실제 장소 데이터, 엔드투엔드 예약 흐름을 갖춘 프로덕션 환경에서 bronuz.vercel.app 라이브 운영 중입니다.",
        "고객, 업주, 관리자의 세 가지 완전히 분리된 사용자 역할 — 각각 자체 보호 대시보드와 기능을 보유합니다.",
        "빈 폴더에서 배포된 풀스택 제품까지 전체 플랫폼을 3일 만에 출시했습니다."
      ]
    },
    images: [
      { src: '/images/projects/bronuz/bronuz_homepage_2.png', alt: 'BronUz homepage — search results with map and venue cards', caption: 'BronUz homepage — search results with map and venue cards' },
      { src: '/images/projects/bronuz/bronuz_venue.png', alt: 'BronUz venue detail — photo gallery, slot picker, and booking sidebar', caption: 'BronUz venue detail — photo gallery, slot picker, and booking sidebar' },
      { src: '/images/projects/bronuz/bronuz_business.png', alt: 'BronUz business dashboard — revenue analytics and today\'s bookings', caption: "BronUz business dashboard — revenue analytics and today's bookings" },
      { src: '/images/projects/bronuz/bronuz_admin.png', alt: 'BronUz admin panel — venue approvals and platform analytics', caption: 'BronUz admin panel — venue approvals and platform analytics' }
    ],
    cta: { label: '라이브 사이트 방문', href: 'https://bronuz.vercel.app' }
  },
  telegramBotCaseStudy: {
    badge: '사례 연구',
    title: 'Personal Assistant Bot',
    subtitle: '비즈니스 메시지를 처리하고, 작업을 관리하며, 각 연락처에 대해 학습하는 AI 기반 Telegram 비서 — 모두 에지에서 실행됩니다.',
    meta: [
      { label: '클라이언트', value: '개인 프로젝트' },
      { label: '역할', value: '소프트웨어 엔지니어' },
      { label: '기간', value: '2026' },
      { label: '기술 스택', value: 'TypeScript, Cloudflare Workers, KV, Gemini, Groq, grammY, Serper' }
    ],
    problem: {
      title: '도전 과제',
      body: '비즈니스를 운영하다 보면 하루에도 수십 통의 Telegram 메시지가 옵니다 — 서비스 문의, 파트너 협의, 할 일 확인. 각 메시지에 적절한 언어(우즈벡어, 러시아어, 영어)로 개인 응답하고 할 일을 추적하는 것은 감당하기 어려워졌습니다.'
    },
    research: {
      title: '수행 역할',
      bullets: [
        'Telegram Business API를 사용하여 수신 고객 메시지를 가로채고 비즈니스 소유자로서 AI가 응답하는 Telegram 봇을 구축했습니다 — AI임을 드러내지 않습니다.',
        'Cloudflare KV를 기반으로 한 3계층 메모리 시스템(대화 기록, 페르소나 프로필, 장기 사실)을 설계하여 데이터베이스 비용 없이 각 연락처에 지속적인 컨텍스트를 제공합니다.',
        '5개의 Gemini 모델에 걸친 AI 모델 폴백 체인을 자동 24시간 쿨다운 추적과 함께 구현하여 무료 티어 할당 한도를 우아하게 처리하고, 백그라운드 분석 작업을 위한 보조 Groq 폴백을 추가했습니다.',
        '외부 NLP 의존성 없이 정규식 휴리스틱을 사용하여 발신자 언어와 일치하는 우즈벡어, 러시아어 또는 영어로 응답하는 자동 언어 감지 기능을 추가했습니다.',
        '의도 분류기와 신뢰도 점수 시스템을 구축했습니다 — AI 호출 전에 분류기가 긴급성, 인사, 가격 문의, 불만을 감지하고, 점수 시스템이 각 AI 응답을 평가하여 신뢰도가 낮을 때 인간다운 설명으로 대체합니다.',
        'AI 기반 자연어 시간 파싱("내일 3시에 알려줘"), 일일 아침 브리핑 및 크론 트리거를 통한 기한 초과 알림이 있는 경량 작업 엔진을 통합했습니다 — 모두 Gemini가 구조화된 작업 객체로 파싱합니다.',
        'Serper.dev 라이브 웹 검색을 연결하여 봇이 날씨, 뉴스 및 실시간 정보에 대한 질문에 답변할 수 있도록 했습니다.',
        '매 4번째 메시지 후 백그라운드에서 실행되는 Groq 기반 브레인 분석 시스템을 추가하여 대화 요약, 새로운 사실, 의도 변화, 감정 변화를 추출하고 — 이후 응답에 인사이트를 공급하여 연속성을 유지합니다.',
        'HTTP Basic Auth가 있는 전체 웹 대시보드를 구축하여 재배포 없이 대화 모니터링, AI 모델 구성, 사용량 통계 확인, 런타임 설정 조정이 가능합니다.',
        '인간다운 응답 타이밍 시스템을 설계했습니다 — 새로운 연락처는 지연된 첫 응답을 받고, 느린 응답자는 속도가 맞춰지며, 긴급 메시지는 대기열을 완전히 우회합니다.',
        '저지연을 위해 Cloudflare Workers에 배포하고 Express 기반 로컬 개발 폴백을 추가했습니다.',
      ]
    },
    design: {
      title: '결과',
      bullets: [
        '봇은 매일 수십 건의 대화를 자율적으로 처리하며 세 가지 언어로 적절한 어조, 컨텍스트, 타이밍으로 자연스럽게 응답합니다.',
        'AI 기반 시간 파싱을 통한 작업 관리는 "내일 3시에 알려줘"가 자동으로 작동하며, 자동 아침 브리핑으로 아무것도 놓치지 않습니다.',
        '제로 인프라 비용 — Cloudflare Workers 무료 티어 + Gemini 무료 티어 + KV 무료 티어로 전체 시스템을 월 $0에 운영합니다.',
        '약 6,900줄의 TypeScript, 4개의 런타임 의존성(grammY, Gemini SDK, Express, dotenv), 서버 관리 없이 에지에서 완전히 실행됩니다.'
      ]
    },
    images: [
      { src: '/images/projects/3d-device-with-ai-assistant.webm', alt: 'Telegram Business API 통합 — 봇이 비즈니스 메시지를 가로채 소유자로서 AI 생성 응답으로 답변합니다.', caption: 'Telegram Business API 통합 — 봇이 비즈니스 메시지를 가로채 소유자로서 AI 생성 응답으로 답변합니다.' },
      { src: '/images/projects/ai-assistant-on-digital-screen-smart-device.webm', alt: '3계층 메모리 시스템 — 봇이 Cloudflare KV를 사용하여 연락처별 대화 기록, 페르소나 프로필 및 장기 사실을 유지합니다.', caption: '3계층 메모리 시스템 — 봇이 Cloudflare KV를 사용하여 연락처별 대화 기록, 페르소나 프로필 및 장기 사실을 유지합니다.' }
    ],
    cta: { label: '소스 보기', href: 'https://github.com/bekzodturgunoff/personal-assistant' }
  },
  caseStudy: {
    badge: '사례 연구',
    title: 'Octopos 랜딩 페이지',
    subtitle: '복잡한 레스토랑 관리 플랫폼을 명확하고 전환 중심의 제품 경험으로 전환.',
    meta: [
      { label: '클라이언트', value: 'Octopos' },
      { label: '역할', value: '프론트엔드 엔지니어 · 제품 구현' },
      { label: '기간', value: '4주 · 2026' },
      { label: '기술 스택', value: 'Astro, Tailwind CSS, Resend' }
    ],
    problem: {
      title: '도전 과제',
      body: 'Octopos는 Dash, POS, Kitchen으로 구성된 강력한 멀티앱 생태계를 보유하고 있었지만, 기존 랜딩 페이지를 통해 제품 가치가 명확히 전달되지 않았습니다. 사이트는 구조, 현대적인 UX 흐름, 신규 사용자를 위한 강력한 온보딩 경로가 부족했습니다.'
    },
    research: {
      title: '수행 역할',
      bullets: [
        '시니어 개발자/디자이너가 제공한 디자인을 기반으로 전체 랜딩 페이지를 구현하여 반응형 프로덕션 준비 웹사이트로 전환했습니다.',
        'Astro와 Tailwind를 사용하여 프론트엔드 전체를 구축했으며, 모바일과 데스크톱에서 픽셀 단위의 정확한 구현을 보장했습니다.',
        'Dash, POS, Kitchen이 통합 시스템으로 어떻게 함께 작동하는지 명확히 설명하는 제품 목업과 비주얼 섹션을 개발했습니다.',
        '리드를 확보하고 플랫폼 액세스를 제공하기 위한 온보딩 및 체험판 가입 흐름을 구현했습니다.',
        'Resend를 통한 사용자 온보딩 및 자동 이메일 처리를 위해 백엔드 서비스를 연결했습니다.',
        '성능 최적화, 모바일 반응성 및 SEO 구조를 보장했습니다.',
      ]
    },
    design: {
      title: '결과',
      bullets: [
        '제품 생태계의 명확성을 개선하고 Octopos에 대한 사용자 이해를 강화하는 빠르고 현대적인 SaaS 랜딩 페이지를 구축했습니다.',
        '새로운 사용자가 플랫폼을 시도할 때 마찰을 줄이는 원활한 체험판 온보딩 흐름을 만들었습니다.',
        '제품 및 엔지니어링 팀과 협력하여 4주 이내에 완전한 제품을 출시했습니다.',
      ]
    },
    images: [
      { src: '/images/projects/octopos/octopos_before.png', alt: '재디자인 전 Octopos 랜딩 페이지 원본', caption: '재디자인 전 원본 MVP 화면 — 빽빽한 문구, 낮은 대비, 명확한 행동 유도 버튼 부재.' },
      { src: '/images/projects/octopos/octopos.png', alt: 'Octopos 랜딩 페이지 스크린샷', caption: '재작업된 히어로 섹션, 사용 사례, 소셜 프루프를 강조하는 고해상도 데스크톱 화면.' }
    ],
    cta: { label: '라이브 사이트 방문', href: 'https://octopos.uz' }
  },
  octoposAppsCaseStudy: {
    badge: '사례 연구',
    title: 'Octopos apps',
    subtitle: '레스토랑 및 소매업을 위한 PWA 기반 POS, 주방 디스플레이, 관리 대시보드 애플리케이션 제품군입니다.',
    meta: [
      { label: '클라이언트', value: 'Octopos' },
      { label: '역할', value: '제품 디자이너 · 소프트웨어 엔지니어' },
      { label: '기간', value: '2026' },
      { label: '기술 스택', value: 'TypeScript, React 18/19, Vite, TanStack Router, TanStack Query, TanStack React DB, Zustand, Tailwind CSS v4, Go, SQLite, NATS' }
    ],
    problem: {
      title: '나의 역할',
      body: '프론트엔드 개발자로서 POS, KDS, 대시보드 애플리케이션에서 작업했습니다. 주요 업무는 Go 기반 API 통합, 새로운 기능 구현, 기존 디자인 시스템에 맞는 사용자 인터페이스 개발, 백엔드 개발자와 협업하여 비즈니스 요구사항을 전달하는 것이었습니다. 레스토랑 직원과 관리자가 사용하는 주문 관리 워크플로우, 고객 관리 기능, 운영 도구 개선에 기여했습니다.',
    },
    research: {
      title: '수행 역할',
      bullets: [
        'Swagger/OpenAPI 문서를 활용하여 Go 기반 REST API와 프론트엔드 애플리케이션을 통합했습니다.',
        '협업 팀 환경에서 POS(Point-of-Sale), KDS(Kitchen Display System), 대시보드 모듈 전반의 기능을 개발하고 유지보수했습니다.',
        'POS: 주문 워크플로우, 고객 조회 및 생성, 다중 주문 유형 지원(매장, 테이크아웃, 배달), 다양한 UI/비즈니스 로직 개선을 구현했습니다.',
        'KDS: 티켓 생애주기 워크플로우, 주문 유형 표시기, 필터링, 실시간 운영 인터페이스를 포함한 라이브 주문 관리 기능을 개발하고 개선했습니다.',
        '대시보드: 대시보드에서 직접 주문 생성 및 고객 관리 기능을 포함한 새로운 비즈니스 관리 기능을 구현했습니다.',
        '백엔드 요구사항을 기반으로 프론트엔드 기능을 구축하고, 새 API 엔드포인트를 연결하며, 데이터 동기화를 처리하고 통합 문제를 해결했습니다.',
        '새로운 기능이 기존 제품의 UI/UX 표준에 부합하고 애플리케이션에 원활히 통합되도록 디자인 일관성을 유지했습니다.',
        '기능 개발, 테스트, 배포 과정에서 백엔드 및 프론트엔드 개발자와 긴밀히 협업했습니다.',
        '프로덕션 이슈를 디버깅하고, 애플리케이션 안정성을 개선하며, 여러 모듈에서 사용자 경험을 향상시켰습니다.',
        'TanStack React DB와 WASQLite를 활용한 오프라인 우선 POS 아키텍처에서 프론트엔드 기능을 오프라인 트랜잭션 워크플로우 및 동기화 메커니즘과 통합했습니다.',
      ]
    },
    design: {
      title: '결과',
      bullets: [
        'POS 터미널, 주방 디스플레이, 관리자 대시보드 등 세 개의 프로덕션 PWA가 모두 동일한 Go/SQLite/NATS 백엔드를 공유하며 동시에 출시되었습니다.',
        '원활한 주문 흐름: 서버가 POS에서 주문 → 주방이 KDS에서 수초 내 확인(3초 폴링) → 관리자가 대시보드에서 모든 것을 추적.',
        '오프라인 복원력으로 인터넷 중단 중에도 다운타임 제로 — 주문이 WASQLite에 로컬 대기 후 자동 충돌 해결과 함께 동기화됩니다.'
      ]
    },
    images: [
      { src: '/images/projects/octopos_apps/dash_1.png', alt: 'Octopos 대시보드 — 수익 차트 및 KPI 개요', caption: '일일 매출, 활성 주문, 주요 지표를 한눈에 보여주는 관리자 대시보드.' },
      { src: '/images/projects/octopos_apps/dash_2.png', alt: 'Octopos 대시보드 — 주문 목록 및 상세', caption: '모든 테이블의 실시간 상태 업데이트가 포함된 주문 관리 화면.' },
      { src: '/images/projects/octopos_apps/dash_3.png', alt: 'Octopos 대시보드 — 재고 추적 및 발주', caption: '재고 알림, 발주, 메뉴 관리가 포함된 재고 추적.' },
      { src: '/images/projects/octopos_apps/pos_1.png', alt: 'Octopos POS — 계층형 카탈로그 및 장바구니', caption: '메뉴 카테고리, 항목 선택, 활성 장바구니가 있는 POS 터미널.' },
      { src: '/images/projects/octopos_apps/pos_2.png', alt: 'Octopos POS — 분할 결제 처리', caption: '현금, 카드, 분할 결제 옵션과 자동 계산된 총액이 있는 결제 화면.' },
      { src: '/images/projects/octopos_apps/pos_3.png', alt: 'Octopos POS — 테이블 관리 평면도', caption: '테이블 관리, 고객 조회, 주문 할당이 포함된 시각적 평면도.' },
      { src: '/images/projects/octopos_apps/kitchen_1.png', alt: 'Octopos 주방 디스플레이 — 라이브 주문 메이슨리 그리드', caption: '신규 주문 흔들림 애니메이션과 주문 유형 배지가 있는 스테이션별 라이브 주문 티켓.' }
    ],
    cta: { label: 'Octopos 방문', href: 'https://octopos.uz' }
  },
  skills: {
    title: '사용 기술',
    groups: [
      { title: '핵심', items: ['React','Astro','TypeScript','JavaScript','Node.js','Tailwind','Sass','HTML/CSS','Supabase','PostgreSQL'] },
      { title: '시스템', items: ['C','Assembly','Python'] },
      { title: '도구', items: ['Git','GitHub Actions','테스팅 (Jest/Vitest)','CI/CD','접근성·성능 점검','Prompt Engineering','Vercel'] },
    ]
  },
  footer: {
    reserved: '모든 권리 보유.',
    email: '이메일',
    github: 'GitHub',
    telegram: '텔레그램',
    resume: '이력서',
  bandName: 'itsbek.me',
    maintenance: '사랑과 카페인, 그리고 약간의 미스터리한 오류로 만들어졌습니다. 뭔가 고장 났다면, 제가 또 하나 배운 거예요. (곧 수정할게요… 아마도요.)',
  }
};

export default ko;
