export const portfolioContent = {
  en: {
    title: 'Portfolio',
    intro: 'I am a software engineer specializing in backend systems and search infrastructure, with 7+ years of experience building scalable APIs and distributed systems.',
    skillsTitle: 'Skills & Tech Stack',
    skills: [
      { label: 'Languages', value: 'Python, Rust, Go, React, Vue' },
      { label: 'Frameworks', value: 'FastApi, Serde, Tokio' },
      { label: 'Databases', value: 'ElasticSearch, Redis, PostgreSQL, MongoDB, AlloyDB' },
      { label: 'Infrastructure', value: 'GCP, AWS, CloudRun, Terraform' },
    ],
    projectsTitle: 'Projects',
    projects: [
      {
        name: 'E-Commerce Search Engine',
        years: '2020-2023',
        stack: 'Python, ElasticSearch, Redis, REST',
        bullets: [
          'In-house search engine for performing millions of searches a day on a 16 million SKU product assortment.',
          'Developed, Designed, and Implemented index infrastructure and template mapping',
          'Implemented Search Microservice to interact and communicate with Search index',
          'Designed Cache policy, ML Models, and data trimming to provide highest relevance for the lowest latency',
        ]
      },
      {
        name: 'Product Saturation Database',
        years: '2025',
        stack: 'Python, AlloyDB, Redis, Pub/sub, gRPC',
        bullets: [
          'AlloyDB Database for low-latency data saturation. This enables our Search index to only return the productID and do data saturation with this database.',
          'Designed Database schema and config for a diverse product assortment',
          'Enabled saturation microservice that can provide 5ms response times to our related microservices',
          'Implemented cache policy for high impact products.'
        ]
      }
    ],
    workTitle: 'Work Experience',
    work: [
      {
        role: 'Senior Software Engineer – Zoro',
        years: '2018–Present',
        bullets: [
          'Built scalable APIs and optimized backend systems handling millions of requests per day.',
          'Introduced search infrastructure improvements with Elasticsearch.',
          'Collaborated with cross-functional teams to deliver features in agile cycles.',
          'Turned archaic monolith into high performance, serverless, ephemeral microservices'
        ]
      }
    ],
    educationTitle: 'Education & Certifications',
    education: [
      'B.S. in Computer Science – Loyola University of Chicago',
      'B.A. in Philosophy – Loyola University of Chicago',
      'TOPIK Level 4 (Korean Language Proficiency)',
      'AWS Certified Solutions Architect – Associate',
      'GCP Cloud Engineer - Associate'
    ]
  },
  ko: {
    title: '포트폴리오',
    intro: '저는 백엔드 시스템과 검색 인프라를 전문으로 하는 소프트웨어 엔지니어로, 7년 이상의 경험을 바탕으로 확장 가능한 API와 분산 시스템을 구축해왔습니다.',
    skillsTitle: '기술 스택',
    skills: [
      { label: '언어', value: 'Python, Rust, Go, React, Vue' },
      { label: '프레임워크', value: 'FastApi, Serde, Tokio' },
      { label: '데이터베이스', value: 'ElasticSearch, Redis, PostgreSQL, MongoDB, AlloyDB' },
      { label: '인프라', value: 'GCP, AWS, CloudRun, Terraform' },
    ],
    projectsTitle: '프로젝트',
    projects: [
      {
        name: '이커머스 검색 엔진',
        years: '2020-2023',
        stack: 'Python, ElasticSearch, Redis, REST',
        bullets: [
          '1,600만 개의 SKU 상품을 대상으로 하루 수백만 건의 검색을 처리하는 사내 검색 엔진.',
          '색인 인프라 및 템플릿 매핑 개발, 설계, 구현',
          '검색 인덱스와 상호작용하는 검색 마이크로서비스 구현',
          '최고의 관련성과 최저의 지연 시간을 제공하기 위한 캐시 정책, ML 모델, 데이터 트리밍 설계'
        ]
      },
      {
        name: '상품 포화 데이터베이스',
        years: '2025',
        stack: 'Python, AlloyDB, Redis, Pub/sub, gRPC',
        bullets: [
          '저지연 데이터 포화를 위한 AlloyDB 데이터베이스. 검색 인덱스가 productID만 반환하고 이 데이터베이스로 포화를 수행할 수 있도록 함.',
          '다양한 상품 구성을 위한 데이터베이스 스키마 및 설정 설계',
          '5ms 응답 시간을 제공하는 포화 마이크로서비스 구현',
          '핵심 상품에 대한 캐시 정책 구현'
        ]
      }
    ],
    workTitle: '경력',
    work: [
      {
        role: '시니어 소프트웨어 엔지니어 – Zoro',
        years: '2018–현재',
        bullets: [
          '수백만 건의 요청을 처리하는 확장 가능한 API 및 백엔드 시스템 구축',
          'Elasticsearch 기반 검색 인프라 개선',
          '애자일 사이클로 다양한 팀과 협업하여 기능 제공',
          '레거시 모놀리스를 고성능, 서버리스, 에페메랄 마이크로서비스로 전환'
        ]
      }
    ],
    educationTitle: '학력 및 자격증',
    education: [
      '컴퓨터공학 학사 – Loyola University of Chicago',
      '철학 학사 – Loyola University of Chicago',
      'TOPIK 4급 (한국어 능력시험)',
      'AWS 공인 솔루션스 아키텍트 – 어소시에이트',
      'GCP 클라우드 엔지니어 – 어소시에이트'
    ]
  }
}
