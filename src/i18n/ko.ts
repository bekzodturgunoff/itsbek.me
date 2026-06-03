import type { I18n } from './types';

const ko: I18n = {
  nav: {
    links: { about: '소개', skills: '기술', caseStudy: '사례 연구', work: '포트폴리오', contact: '연락처', resume: '이력서' },
  },
  hero: {
  name: 'itsbek.me',
    titleTop: '소프트웨어 엔지니어',
    titleBottom: '사용자 경험과 신뢰성에 집중',
    description: `2년+ 경험의 소프트웨어 엔지니어로, React와 Astro로 빠르고 접근성 높은 제품을 만듭니다. 디자인·백엔드와 긴밀히 협업하며 JavaScript/TypeScript, Python, C 레벨 문제 해결에 익숙합니다.`,
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
      { label: '기간', value: '2026년' },
      { label: '기술 스택', value: 'TypeScript, Cloudflare Workers, KV, Gemini, grammY, Serper' }
    ],
    problem: {
      title: '도전 과제',
      body: '비즈니스를 운영하다 보면 하루에도 수십 통의 Telegram 메시지가 옵니다 — 서비스 문의, 파트너 협의, 할 일 확인. 각 메시지에 적절한 언어(우즈벡어, 러시아어, 영어)로 개인 응답하고 할 일을 추적하는 것은 감당하기 어려워졌습니다.'
    },
    research: {
      title: '수행 역할',
      bullets: [
        'Telegram Business API를 사용하여 수신 고객 메시지를 가로채고 비즈니스 소유자로서 AI가 응답하는 Telegram 봇을 구축했습니다.',
        'Cloudflare KV를 기반으로 한 3계층 메모리 시스템(대화 기록, 페르소나 프로필, 장기 사실)을 설계하여 데이터베이스 없이 각 연락처에 지속적인 컨텍스트를 제공합니다.',
        '자동 24시간 쿨다운 추적 기능이 있는 AI 모델 폴백 체인을 구현하여 Gemini 무료 티어 할당 한도를 우아하게 처리합니다.',
        '보낸 사람의 언어와 일치하는 우즈벡어, 러시아어 또는 영어로 응답하는 자동 언어 감지 기능을 추가했습니다.',
        'AI 기반 자연어 시간 파싱, 일일 아침 브리핑 및 크론 트리거를 통한 기한 초과 알림 기능이 있는 경량 작업 엔진을 통합했습니다.',
        'AI가 날씨, 뉴스, 가격 및 실시간 정보에 대한 질문에 답변할 수 있도록 Serper.dev 실시간 웹 검색을 연결했습니다.',
        '저지연을 위해 Cloudflare Workers에 배포하고 Express 기반 로컬 개발 폴백을 추가했습니다.'
      ]
    },
    design: {
      title: '결과',
      bullets: [
        '봇은 매일 수십 건의 대화를 자율적으로 처리하며 세 가지 언어로 적절한 어조와 컨텍스트로 자연스럽게 응답합니다.',
        'AI 기반 시간 파싱을 통한 작업 관리는 "내일 3시에 알려줘"라고 말하면 자동으로 작동하며, 자동 아침 브리핑으로 아무것도 놓치지 않습니다.',
        '제로 인프라 비용 — Cloudflare Workers 무료 티어 + Gemini 무료 티어 + KV 무료 티어로 전체 시스템을 월 $0에 운영합니다.',
        '약 1,500줄의 TypeScript, 4개의 런타임 의존성(grammY, Gemini SDK, Express, dotenv), 서버 관리 없이 에지에서 완전히 실행됩니다.'
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
    subtitle: '4주 만에 복잡한 제품을 명확한 전환형 랜딩 페이지로 구현했습니다.',
    meta: [
      { label: '클라이언트', value: 'Octopos' },
      { label: '역할', value: '제품 디자이너 · 소프트웨어 엔지니어' },
      { label: '기간', value: '4주 · 2025년' },
      { label: '기술 스택', value: 'Astro, Tailwind, Vercel, Resend' }
    ],
    problem: {
      title: '도전 과제',
      body: 'Octopos는 제품 가치를 명확히 설명하고 사용해 보도록 유도하는 현대적인 랜딩 페이지가 필요했습니다. 이전 버전은 구식이었고 가치 전달이 약했으며 모바일 친화적이지 않았습니다.'
    },
    research: {
      title: '수행 역할',
      bullets: [
        '더 빠르고, 시각적이며, 이해하기 쉽도록 전체 웹사이트를 처음부터 다시 디자인하고 재구축했습니다.',
        '방문자가 도구가 실제로 어떻게 작동하는지 볼 수 있도록 iMac, iPad, iPhone 프레임 안에 Octopos 앱의 맞춤형 목업을 만들었습니다.',
        '사용자 정보를 수집하고 Octopos의 세 가지 주요 앱 무료 평가판에 즉시 액세스할 수 있는 간단한 마법사 양식을 구축했습니다.'
      ]
    },
    design: {
      title: '결과',
      bullets: [
        '새로운 사이트는 깔끔하고, 빠르며, 전문적인 느낌을 주어 사용자들이 Octopos를 몇 초 만에 파악하고 더 많은 방문자가 사용해 보도록 동기를 부여하는 데 도움이 되었습니다.'
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
    title: 'Octopos POS — 모바일 & 대시보드 앱',
    subtitle: '레스토랑 및 소매업을 위한 크로스 플랫폼 POS 및 대시보드 애플리케이션 제품군입니다.',
    meta: [
      { label: '클라이언트', value: 'Octopos' },
      { label: '역할', value: '제품 디자이너 · 소프트웨어 엔지니어' },
      { label: '기간', value: '2025' },
      { label: '기술 스택', value: 'React Native, Expo, TypeScript, Tailwind, Supabase, PostgreSQL' }
    ],
    problem: {
      title: '도전 과제',
      body: 'Octopos는 완벽한 POS 생태계가 필요했습니다: 직원용 POS 앱, 주방용 키친 디스플레이 시스템, 관리자용 대시보드. 각 앱은 오프라인에서도 안정적으로 작동하고 1초 이하의 지연으로 주문을 동기화해야 했습니다.'
    },
    research: {
      title: '수행 역할',
      bullets: [
        '메뉴 탐색, 장바구니 관리, 주문 수정(추가, 대체, 항목 메모), 여러 결제 방식(카드, 현금, QR), 자동 세금/할인 계산이 포함된 POS 앱.',
        '주방 디스플레이 시스템 — 실시간 주문을 스테이션별로 그룹화, 색상 코드 우선순위, 코스 타이밍(에피타이저 → 메인 → 디저트), 완료/수정 작업.',
        '실시간 매출 분석, 주문 상태 관리, 직원 관리, 재고 추적, 교대 보고서, 메뉴 관리가 포함된 대시보드.',
        'Supabase 실시간 동기화 — POS에서 주문이 접수되면 KDS와 대시보드에 즉시 반영, 1초 미만 지연.',
        '오프라인 우선 아키텍처 — 연결 복구 시 자동 동기화되는 주문 대기열로 레스토랑이 중단 없이 운영됩니다.'
      ]
    },
    design: {
      title: '결과',
      bullets: [
        'POS 터미널, 주방 디스플레이, 관리자 대시보드 등 세 개의 프로덕션 앱이 동시에 출시되었으며 모두 동일한 Supabase 백엔드를 공유합니다.',
        '원활한 실시간 주문 흐름: 서버가 POS에서 주문 → 주방이 KDS에서 즉시 확인 → 관리자가 대시보드에서 모든 것을 추적.',
        '오프라인 복원력으로 인터넷 중단 중에도 다운타임 제로 — 주문이 로컬에 대기하고 온라인 복구 시 자동 동기화됩니다.'
      ]
    },
    images: [
      { src: '/images/projects/octopos_apps/dash_1.png', alt: 'Octopos 대시보드 — 실시간 매출 분석 및 주문 개요', caption: '일일 매출, 활성 주문, 주요 지표를 한눈에 보여주는 관리자 대시보드.' },
      { src: '/images/projects/octopos_apps/dash_2.png', alt: 'Octopos 대시보드 — 주문 추적 및 상태 관리', caption: '모든 테이블의 실시간 상태 업데이트가 포함된 주문 관리 화면.' },
      { src: '/images/projects/octopos_apps/dash_3.png', alt: 'Octopos 대시보드 — 재고 및 메뉴 관리', caption: '재고 수준 알림이 포함된 재고 추적 및 메뉴 관리.' },
      { src: '/images/projects/octopos_apps/pos_1.png', alt: 'Octopos POS — 메뉴 탐색 및 장바구니 관리', caption: '메뉴 카테고리, 항목 선택, 활성 장바구니가 있는 POS 터미널.' },
      { src: '/images/projects/octopos_apps/pos_2.png', alt: 'Octopos POS — 주문 수정 및 결제', caption: '추가, 대체, 항목 메모가 있는 주문 수정 화면.' },
      { src: '/images/projects/octopos_apps/pos_3.png', alt: 'Octopos POS — 결제 처리', caption: '카드, 현금, QR 결제 옵션과 자동 계산된 총액이 있는 결제 화면.' },
      { src: '/images/projects/octopos_apps/kitchen_1.png', alt: 'Octopos 주방 디스플레이 — 실시간 주문', caption: '우선순위 표시기와 함께 스테이션별로 그룹화된 수신 주문을 보여주는 주방 디스플레이 시스템.' }
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
