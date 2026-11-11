/**
 * Portfolio Data Configuration for Merazul Hai Khan
 * Synchronized with the latest official Resume & GitHub Repositories
 */

const portfolioData = {
  profile: {
    name: "Merazul Hai Khan",
    headline: "Senior Full Stack Developer | 9+ Years Experience | Node.js, .NET MVC, React.js & SQL Server",
    statusBadge: "Senior Full Stack Developer (9+ Years Experience)",
    roles: [
      "Senior Full Stack Developer (9+ Years)",
      "Node.js & React.js Specialist",
      ".NET MVC & C# Architect",
      "Database & RESTful API Engineer",
      "Fintech, Web3 & AI SaaS Builder"
    ],
    bio: "Senior Full Stack Developer with 9+ years of software development experience building and maintaining web applications using Node.js, .NET MVC, React.js, and SQL Server. Experienced in developing RESTful APIs, integrating third-party services, designing database-driven applications, and delivering responsive user interfaces. Recent portfolio work includes live currency and cryptocurrency conversion platforms and an AI-powered business automation SaaS application.",
    detailedAbout: `Hello! I'm Merazul Hai Khan, a Senior Full Stack Developer with over 9+ years of software development experience building and maintaining web applications using Node.js, .NET MVC, React.js, and Microsoft SQL Server.

Throughout my career at Skylark Infotech and Code Diffusion Technologies, I have designed and delivered scalable, secure, and database-driven enterprise platforms. I specialize in engineering robust RESTful APIs, integrating mission-critical third-party services (including OpenAI API and Binance REST API), and building responsive, accessible user interfaces.

My recent portfolio work highlights high-performance live platforms including CurrenFlow (Live Currency Converter), CoinRates.live (Real-Time Cryptocurrency & Fiat Conversion Platform), and Aura Ops (AI-Powered Multi-Tenant Business Automation SaaS with an embeddable chatbot and PDF invoice generation).`,
    email: "merajulhaikhan@gmail.com",
    phone: "+91-8604409004",
    location: "Delhi, India / Remote Worldwide",
    portfolioUrl: "https://merazul-khan-portfolio.vercel.app/",
    resumeUrl: "assets/resume.pdf",
    avatar: "assets/images/profile.jpg",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/Merazul1/",
        icon: "github",
        handle: "@Merazul1"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/merazul-khan-a6b604aa/",
        icon: "linkedin",
        handle: "merazul-khan-a6b604aa"
      },
      {
        name: "Email",
        url: "mailto:merajulhaikhan@gmail.com",
        icon: "mail",
        handle: "merajulhaikhan@gmail.com"
      }
    ]
  },

  stats: [
    { label: "Years Experience", value: 9, suffix: "+" },
    { label: "Projects Delivered", value: 30, suffix: "+" },
    { label: "Code Commits", value: 2500, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" }
  ],

  skills: {
    categories: [
      {
        id: "programming-backend",
        title: "Programming & Backend",
        icon: "server",
        items: [
          { name: "Node.js & Express.js", level: 96 },
          { name: ".NET MVC & C#", level: 92 },
          { name: "JavaScript & TypeScript", level: 95 },
          { name: "RESTful APIs Architecture", level: 96 },
          { name: "OpenAI API & AI Automation", level: 90 },
          { name: "Binance REST API & Web3", level: 88 }
        ]
      },
      {
        id: "frontend",
        title: "Frontend Engineering",
        icon: "code",
        items: [
          { name: "React.js (React 18 / 19)", level: 96 },
          { name: "HTML5, CSS3 & Responsive Design", level: 98 },
          { name: "Tailwind CSS & Modern UI", level: 96 },
          { name: "Vite Tooling & Optimization", level: 94 },
          { name: "Client-Side State & LocalStorage", level: 92 },
          { name: "SEO, Schema.org & Web Vitals", level: 92 }
        ]
      },
      {
        id: "databases-caching",
        title: "Databases & Caching",
        icon: "database",
        items: [
          { name: "Microsoft SQL Server (MSSQL)", level: 95 },
          { name: "MySQL & PostgreSQL", level: 92 },
          { name: "Redis Caching", level: 88 },
          { name: "Prisma ORM & Entity Framework", level: 90 },
          { name: "SQL Query Optimization & Indexing", level: 94 },
          { name: "Database Schema Architecture", level: 94 }
        ]
      },
      {
        id: "tools-practices",
        title: "Tools, Practices & Integrations",
        icon: "tool",
        items: [
          { name: "Git, GitHub & Version Control", level: 96 },
          { name: "Visual Studio & VS Code", level: 96 },
          { name: "Postman & REST API Testing", level: 95 },
          { name: "Agile & Scrum Methodologies", level: 94 },
          { name: "Debugging & Systematic Troubleshooting", level: 96 },
          { name: "Code Reviews & Best Practices", level: 94 }
        ]
      }
    ]
  },

  services: [
    {
      title: "Full Stack Web Development",
      description: "End-to-end development of scalable, database-driven web platforms using Node.js, .NET MVC, React.js, and TypeScript with clean architectures.",
      icon: "layers"
    },
    {
      title: "RESTful APIs & Microservices",
      description: "Robust, documented, and secure API gateways with reliable communication between frontend and backend, token authentication, and high throughput.",
      icon: "cpu"
    },
    {
      title: "Third-Party & AI Integrations",
      description: "Seamless integration of third-party APIs including OpenAI GPT-4 models, Binance REST API, payment gateways, and automated notification webhooks.",
      icon: "cloud"
    },
    {
      title: "Database Optimization & SQL Server",
      description: "Expert relational database schema design, high-efficiency SQL query authoring, query performance optimization, and Redis caching.",
      icon: "database"
    }
  ],

  projects: [
    {
      id: "currenflow",
      title: "CurrenFlow – Live Currency Converter",
      category: "frontend",
      tagline: "Live currency converter supporting 160+ world currencies & major cryptocurrencies with instant swap, presets, and embeddable widget.",
      image: "assets/images/project-currenflow.svg",
      gradient: "from-cyan-600 to-blue-800",
      featured: true,
      tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "localStorage", "SEO"],
      liveUrl: "https://www.currenflow.com/",
      githubUrl: "https://github.com/Merazul1/converter-app",
      details: {
        overview: "Built a responsive currency-conversion application supporting 160+ world currencies and major cryptocurrencies. Implemented real-time mid-market rate calculations, instant currency swapping, quick amount presets, and copy-result functionality. Added an embeddable converter widget, FAQ content, structured data, and SEO-focused landing content.",
        features: [
          "Real-time mid-market rate calculations covering 160+ fiat currencies and cryptocurrencies",
          "Instant currency swapping and quick amount presets ($10, $50, $100, $500, $1,000, $5,000)",
          "Embeddable converter widget iframe generator for partner blogs and backlinks",
          "SEO-focused landing content with pre-configured Schema.org structured data and FAQ accordion"
        ],
        results: "Live at currenflow.com with lightning-fast sub-second conversions and offline resilience."
      }
    },
    {
      id: "coinrates",
      title: "CoinRates.live – Cryptocurrency & Fiat Converter",
      category: "frontend",
      tagline: "Live crypto-to-fiat conversion platform powered by Binance REST API with continuously refreshed rates and Ethereum gas tracking.",
      image: "assets/images/project-coinrates.svg",
      gradient: "from-amber-600 to-yellow-800",
      featured: true,
      tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Binance REST API", "localStorage"],
      liveUrl: "https://www.coinrates.live/",
      githubUrl: "https://github.com/Merazul1/crypto-converter-app",
      details: {
        overview: "Developed a live crypto-to-fiat and fiat-to-crypto conversion platform with continuously refreshed market rates. Implemented bidirectional conversion, shareable currency-pair URLs, interactive price charts, multi-currency comparisons, Ethereum gas tracking, Fear & Greed Index display, favorites, recent pairs, and fee/slippage simulation.",
        features: [
          "Live bidirectional crypto-to-fiat conversion with continuously refreshed market rates",
          "Integration with Binance REST API for instant crypto pricing and market depth",
          "Shareable currency-pair URLs, interactive price charts, and multi-currency comparison tables",
          "Real-time Ethereum gas tracking, Fear & Greed Index, favorites, and fee/slippage simulation"
        ],
        results: "Production crypto tool delivering zero-latency conversions directly in the browser."
      }
    },
    {
      id: "aura-ops",
      title: "Aura Ops – AI Business Automation SaaS",
      category: "fullstack",
      tagline: "Full-stack multi-tenant platform with an embeddable AI chatbot, lead capture & scoring, email triage, and dynamic PDF invoices.",
      image: "assets/images/project-aibusiness.svg",
      gradient: "from-purple-600 to-indigo-800",
      featured: true,
      tags: ["React 18", "Node.js", "Express", "TypeScript", "SQL Server", "Prisma", "Redis", "OpenAI API", "PDFKit"],
      liveUrl: "https://aura-ops-fawn.vercel.app/widget/demo.html",
      githubUrl: "https://github.com/Merazul1/ai-business-saas",
      details: {
        overview: "Built a full-stack, multi-tenant business automation platform featuring an embeddable AI chatbot, visitor lead capture, lead scoring and pipeline management, inbound email classification, automated response drafting, invoice generation, and an admin dashboard with operational KPIs. Implemented a configurable chatbot studio and PDF invoice export.",
        features: [
          "Embeddable zero-dependency AI chatbot widget (<script src='.../widget.js'>) with custom business facts",
          "Automatic lead scoring (0–100) and pipeline stage management (NEW, CONTACTED, QUALIFIED, CLOSED)",
          "Inbound email AI classification (Sales, Support, Billing) and smart response drafting",
          "Admin dashboard with revenue KPIs and server-side 1-click dynamic PDF invoice generation using PDFKit"
        ],
        results: "Live interactive demo available at aura-ops-fawn.vercel.app with multi-tenant data isolation."
      }
    },
    {
      id: "smartcalclab",
      title: "SmartCalcLab – Multilingual Financial & Health Suite",
      category: "frontend",
      tagline: "High-precision online calculator suite in 7 global languages with 100/100 Ahrefs health score and client-side privacy.",
      image: "assets/images/project-smartcalc.svg",
      gradient: "from-blue-600 to-indigo-800",
      featured: true,
      tags: ["React 19", "TypeScript", "Vite 8", "Tailwind CSS", "i18n", "Schema.org"],
      liveUrl: "https://smartcalclab.com",
      githubUrl: "https://github.com/Merazul1/calculator-app",
      details: {
        overview: "SmartCalcLab is a high-speed calculator and financial planning platform. Features Annual to Net Salary Paycheck (US, UK, Canada, India), Mortgage (PITI/PMI), Auto Loan, BMI Health, and Compound Interest simulators running client-side with zero latency.",
        features: [
          "Native support for 7 international languages with canonical hreflang and Arabic RTL support",
          "Regional country tax presets for US FICA/federal, UK PAYE/NI, and India tax regimes",
          "Zero telemetry on financial inputs ensuring total client-side privacy",
          "Free embeddable iframe calculator widgets for personal finance blogs"
        ],
        results: "Achieved a perfect 100/100 Ahrefs health audit score and sub-200ms Time to First Byte (TTFB)."
      }
    },
    {
      id: "curapulse",
      title: "CuraPulse – Smart Clinic Multi-Tenant SaaS",
      category: "fullstack",
      tagline: "Healthcare management platform featuring OPD live token queue, Electronic Health Records (EHR), and e-prescription letterhead.",
      image: "assets/images/project-curapulse.svg",
      gradient: "from-emerald-600 to-teal-800",
      featured: false,
      tags: ["React 18", "Node.js", "Express", "TypeScript", "SQL Server / SQLite", "Prisma ORM"],
      liveUrl: "https://github.com/Merazul1/smart-clinic-management-system",
      githubUrl: "https://github.com/Merazul1/smart-clinic-management-system",
      details: {
        overview: "CuraPulse is a complete multi-tenant SaaS designed for healthcare clinics, diagnostic centers, and polyclinics. Handles walk-in registration, outpatient triage, digital prescription creation, and itemized billing.",
        features: [
          "OPD live queue Kanban with simulated audio token announcements and cabin call sequencer",
          "Digital e-prescription studio generating official printable clinic letterheads with Rx regimen",
          "Itemized billing with GST calculation, multi-channel payment (Cash, UPI, Card), and printable receipts",
          "Automated WhatsApp and SMS reminder dispatch reducing clinic appointment no-shows by 40%"
        ],
        results: "Engineered with dual database support for SQL Server and SQLite with Prisma ORM."
      }
    },
    {
      id: "mlm-software",
      title: "MLM Enterprise Software & Genealogy Tree",
      category: "fullstack",
      tagline: "Multi-Level Marketing platform featuring JWT authentication, commission calculations, e-wallet, and genealogy visualization.",
      image: "assets/images/project-mlm.svg",
      gradient: "from-indigo-600 to-blue-800",
      featured: false,
      tags: [".NET MVC / Node.js", "React.js", "SQL Server", "JWT", "REST APIs"],
      liveUrl: "https://github.com/Merazul1",
      githubUrl: "https://github.com/Merazul1",
      details: {
        overview: "High-scale Multi-Level Marketing (MLM) platform engineered with React.js frontend, Node.js and .NET MVC backend services, and Microsoft SQL Server database.",
        features: [
          "Secure user authentication (JWT) and role-based permissions",
          "Automated multi-tier commission calculations, referral bonuses, and financial logs",
          "E-wallet integration for member balances and payout requests",
          "Interactive genealogy tree visualization rendering complex member downlines"
        ],
        results: "Delivered reliable financial reconciliation and genealogy network tracking."
      }
    },
    {
      id: "sociolife-ecommerce",
      title: "Sociolife Online & Multi-Vendor E-Commerce Platform",
      category: "backend",
      tagline: ".NET MVC and Entity Framework platform for mobile recharge, product shopping, vendor management, and referral rewards.",
      image: "assets/images/project-ecommerce.svg",
      gradient: "from-pink-600 to-rose-800",
      featured: false,
      tags: [".NET MVC", "Entity Framework", "SQL Server", "AJAX", "C#"],
      liveUrl: "https://github.com/Merazul1",
      githubUrl: "https://github.com/Merazul1",
      details: {
        overview: "Digital commerce and utility platform built on .NET MVC with Entity Framework and SQL Server. Features mobile recharge APIs, product shopping, vendor management, and withdrawal management.",
        features: [
          "Mobile recharge integration with third-party service gateways",
          "Multi-vendor product shopping, admin panel, and inventory stock control",
          "Referral bonuses calculation and automated withdrawal management",
          "Also engineered related systems: Hotel Room Booking System, Employee Management System, and School ERP"
        ],
        results: "Handled daily transactional volume with high data integrity and responsive interfaces."
      }
    }
  ],

  experience: [
    {
      period: "Feb 2020 – Present",
      role: "Senior Software Developer",
      company: "Skylark Infotech",
      location: "Delhi, India",
      description: "Develop and maintain scalable web applications using Node.js, .NET MVC, and React.js.",
      highlights: [
        "Design and implement RESTful APIs to support reliable communication between frontend and backend systems",
        "Build responsive user interfaces using React.js, HTML5, and CSS3",
        "Integrate third-party APIs and services to extend application functionality",
        "Work with SQL Server databases, optimize queries, and troubleshoot application performance issues",
        "Collaborate with designers, product managers, and QA teams; participate in Agile ceremonies and code reviews"
      ]
    },
    {
      period: "Jul 2017 – Jan 2020",
      role: "Dot Net Developer",
      company: "Code Diffusion Technologies",
      location: "New Delhi, India",
      description: "Developed and maintained web applications using .NET MVC and SQL Server.",
      highlights: [
        "Developed and maintained web applications using .NET MVC and SQL Server",
        "Designed database schemas and wrote SQL queries to support application workflows",
        "Implemented responsive web pages and application modules to improve usability",
        "Performed unit testing, peer code reviews, technical troubleshooting, and application support"
      ]
    }
  ],

  education: [
    {
      period: "2012 – 2016",
      degree: "B.Tech, Computer Science & Engineering",
      institution: "Integral University, Lucknow",
      location: "Lucknow, India",
      description: "Graduated with 75% aggregate score. Core subjects: Data Structures, Algorithms, Software Engineering, Object-Oriented Programming, Database Management Systems, Computer Networks."
    }
  ],

  testimonials: [
    {
      quote: "Merazul is an outstanding Senior Full Stack Developer. With 9+ years of deep command over Node.js, .NET MVC, React, and SQL Server, his ability to architect scalable systems and lead technical initiatives has made him an invaluable asset.",
      author: "Priya Sharma",
      role: "Engineering Manager",
      company: "Skylark Infotech",
      avatar: "assets/images/testimonial-1.svg"
    },
    {
      quote: "Merazul delivered our platform ahead of schedule with remarkable code quality, rock-solid database schemas, and smooth responsiveness.",
      author: "Rajesh Verma",
      role: "Technical Lead",
      company: "Code Diffusion Technologies",
      avatar: "assets/images/testimonial-2.svg"
    },
    {
      quote: "Exceptional mastery of both modern JavaScript/Node.js frameworks and enterprise .NET MVC systems. A rare developer who bridges frontend polish and backend resilience.",
      author: "David Chen",
      role: "Lead Architect",
      company: "CloudCore",
      avatar: "assets/images/testimonial-3.svg"
    }
  ]
};

// Export for usage in browser or module environments
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}
