/**
 * Portfolio Data Configuration for Merazul Hai Khan
 * Sourced directly from Official Resume & GitHub Repositories
 */

const portfolioData = {
  profile: {
    name: "Merazul Hai Khan",
    headline: "Senior Full Stack Software Engineer | Node.js, React & .NET Specialist",
    statusBadge: "Available for Senior & Lead Opportunities",
    roles: [
      "Senior Full Stack Developer",
      "Node.js & React Specialist",
      ".NET MVC & C# Engineer",
      "TypeScript & Cloud Architect",
      "High-Performance Systems Builder"
    ],
    bio: "Results-driven Full Stack Developer with 5+ years of experience in designing, developing, and maintaining scalable web applications. Proficient in Node.js, React, TypeScript, and .NET MVC, with end-to-end expertise across the complete software development lifecycle.",
    detailedAbout: `Hello! I'm Merazul Hai Khan, a Senior Full Stack Software Engineer with over 5+ years of hands-on experience designing, developing, and maintaining high-performance web applications and enterprise platforms.

Throughout my career at Skylark Infotech and Code Diffusion Technologies, I have architected and deployed production web applications utilizing Node.js, .NET MVC, React.js, and TypeScript. I have deep domain expertise across the entire stack—from developing responsive, accessible frontends and engineering secure RESTful APIs to optimizing SQL Server, PostgreSQL, and MySQL databases for high throughput.

Whether developing multi-tenant SaaS platforms like CuraPulse and AI Business Automation, or building high-speed programmatic tools like SmartCalcLab and CurrenFlow, I take great pride in clean code, robust architecture, and high software quality.`,
    email: "merajulhaikhan@gmail.com",
    phone: "+91-8604409004",
    location: "Delhi, India / Remote Worldwide",
    portfolioUrl: "https://merazul-khan-portfolio.vercel.app/",
    resumeUrl: "#contact",
    avatar: "assets/images/avatar.svg",
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
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Projects Completed", value: 25, suffix: "+" },
    { label: "Code Commits", value: 1500, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" }
  ],

  skills: {
    categories: [
      {
        id: "frontend",
        title: "Frontend Engineering",
        icon: "code",
        items: [
          { name: "React.js / Next.js", level: 95 },
          { name: "TypeScript / JavaScript (ES6+)", level: 94 },
          { name: "Tailwind CSS & CSS3 / HTML5", level: 96 },
          { name: "Vite & Modern Web Tooling", level: 92 },
          { name: "Responsive Design & Web Accessibility", level: 95 },
          { name: "State Management & AJAX", level: 90 }
        ]
      },
      {
        id: "backend",
        title: "Backend & Systems",
        icon: "server",
        items: [
          { name: "Node.js & Express.js", level: 95 },
          { name: ".NET MVC & C#", level: 90 },
          { name: "RESTful APIs & Microservices", level: 94 },
          { name: "Entity Framework & Prisma ORM", level: 90 },
          { name: "Authentication (JWT & Security)", level: 92 },
          { name: "OpenAI API & AI Automation", level: 86 }
        ]
      },
      {
        id: "database",
        title: "Databases & Cloud",
        icon: "database",
        items: [
          { name: "Microsoft SQL Server (MSSQL)", level: 94 },
          { name: "MySQL & PostgreSQL", level: 90 },
          { name: "Redis Caching", level: 84 },
          { name: "SQLite & Local Persistence", level: 92 },
          { name: "Git, GitHub Actions & Version Control", level: 95 },
          { name: "Docker & Cloud Deployments (Vercel)", level: 85 }
        ]
      },
      {
        id: "tools",
        title: "Tools & Methodologies",
        icon: "tool",
        items: [
          { name: "Visual Studio & VS Code", level: 96 },
          { name: "Postman & REST API Testing", level: 94 },
          { name: "Agile & Scrum Methodologies", level: 92 },
          { name: "Performance Optimization & Bottlenecks", level: 94 },
          { name: "Problem Solving & Systematic Debugging", level: 95 },
          { name: "SEO & Core Web Vitals", level: 90 }
        ]
      }
    ]
  },

  services: [
    {
      title: "Full Stack Web Development",
      description: "End-to-end development of modern, high-concurrency web platforms using Node.js, React, TypeScript, and .NET MVC with clean architectures.",
      icon: "layers"
    },
    {
      title: "RESTful API & Microservices",
      description: "Robust, documented, and secure API gateways with JWT authentication, high-throughput caching, and seamless frontend-to-backend communication.",
      icon: "cpu"
    },
    {
      title: "Database Architecture & Optimization",
      description: "Expert relational database design, efficient SQL queries, indexing, and ORM integration using SQL Server, PostgreSQL, MySQL, and Prisma.",
      icon: "database"
    },
    {
      title: "Multi-Tenant SaaS & Programmatic Tools",
      description: "Scalable SaaS platforms, SEO-optimized programmatic web tools, and AI-powered workflow automation with sub-second performance.",
      icon: "cloud"
    }
  ],

  projects: [
    {
      id: "smartcalclab",
      title: "SmartCalcLab - High-Performance Financial & Health Suite",
      category: "frontend",
      tagline: "Multilingual financial and health calculator suite in 7 global languages with sub-200ms TTFB and 100/100 Ahrefs score.",
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
      title: "CuraPulse - Smart Clinic Multi-Tenant SaaS",
      category: "fullstack",
      tagline: "Production-grade healthcare platform featuring OPD live token queue, Electronic Health Records (EHR), and e-prescription letterhead.",
      image: "assets/images/project-curapulse.svg",
      gradient: "from-emerald-600 to-teal-800",
      featured: true,
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
      id: "ai-business-saas",
      title: "AI Business Automation & Client CRM SaaS",
      category: "fullstack",
      tagline: "Multi-tenant platform with embeddable AI visitor chat, automatic lead scoring (0-100), and PDFKit invoice generation.",
      image: "assets/images/project-aibusiness.svg",
      gradient: "from-purple-600 to-pink-800",
      featured: true,
      tags: ["React 18", "Node.js", "OpenAI GPT-4", "TypeScript", "SQL Server", "Redis"],
      liveUrl: "https://github.com/Merazul1/ai-business-saas",
      githubUrl: "https://github.com/Merazul1/ai-business-saas",
      details: {
        overview: "A full-stack multi-tenant platform designed to automate small business visitor support, lead capture, email triage, and client billing.",
        features: [
          "Zero-dependency embeddable AI chatbot widget (<script src='.../widget.js'>) with knowledge injection",
          "Automated lead scoring (0-100) and CRM pipeline management (New, Contacted, Qualified, Closed)",
          "Inbound email AI classification and smart response drafting",
          "Server-side 1-click dynamic PDF invoice generation built with PDFKit"
        ],
        results: "Decreased client initial response time to under 10 seconds and automated repetitive customer support inquiries."
      }
    },
    {
      id: "currenflow",
      title: "CurrenFlow - Live Currency Converter & Exchange Tool",
      category: "frontend",
      tagline: "High-speed foreign exchange converter tracking 160+ world currencies with offline caching and embed widgets.",
      image: "assets/images/project-currenflow.svg",
      gradient: "from-cyan-600 to-blue-800",
      featured: true,
      tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "REST API", "LocalStorage"],
      liveUrl: "https://currenflow.com",
      githubUrl: "https://github.com/Merazul1/converter-app",
      details: {
        overview: "Programmatic financial tool designed for real-time exchange calculation, viral link generation, and high Google organic ranking.",
        features: [
          "Real-time mid-market exchange rate calculator covering 160+ world currencies & major cryptos",
          "Instant swap button, quick amount presets ($10, $50, $100, $500, $1,000, $5,000), and 1-click copy",
          "Embeddable iframe tool generator allowing finance blogs to embed the converter for backlinks",
          "Offline resilience with localStorage fallback ensuring the application never breaks"
        ],
        results: "Live at currenflow.com with optimized Core Web Vitals and Schema.org rich search snippets."
      }
    },
    {
      id: "mlm-software",
      title: "MLM Enterprise Software & Genealogy Visualizer",
      category: "fullstack",
      tagline: "Enterprise commission calculation engine, e-wallet integration, and interactive binary tree visualization.",
      image: "assets/images/project-mlm.svg",
      gradient: "from-indigo-600 to-blue-800",
      featured: false,
      tags: ["React.js", "Node.js", "SQL Server", "JWT", "REST APIs"],
      liveUrl: "https://github.com/Merazul1",
      githubUrl: "https://github.com/Merazul1",
      details: {
        overview: "High-scale Multi-Level Marketing platform engineered with a React.js frontend, Node.js backend services, and Microsoft SQL Server database.",
        features: [
          "Secure user authentication and role-based permissions with JWT",
          "Automated multi-tier commission calculations and transaction logs",
          "Digital e-wallet integration for member balances and payout requests",
          "Interactive genealogy tree visualization rendering complex member downlines"
        ],
        results: "Successfully powered active network marketing operations with reliable financial reconciliation."
      }
    },
    {
      id: "sociolife-ecommerce",
      title: "Sociolife Online & Multi-Vendor E-Commerce",
      category: "backend",
      tagline: "Robust .NET MVC platform handling mobile recharge, vendor catalogs, inventory control, and referral commission bonuses.",
      image: "assets/images/project-ecommerce.svg",
      gradient: "from-pink-600 to-rose-800",
      featured: false,
      tags: [".NET MVC", "C#", "Entity Framework", "SQL Server", "AJAX"],
      liveUrl: "https://github.com/Merazul1",
      githubUrl: "https://github.com/Merazul1",
      details: {
        overview: "Enterprise e-commerce and digital service distribution platform built on Microsoft .NET MVC with Entity Framework and SQL Server.",
        features: [
          "Integrated mobile recharge portal with instant third-party API integration",
          "Multi-vendor catalog management and inventory stock control",
          "Referral reward calculation and withdrawal management",
          "Comprehensive administrative back-office and analytical reporting"
        ],
        results: "Handled multi-tier daily transactions with high data integrity and low latency."
      }
    }
  ],

  experience: [
    {
      period: "Feb 2020 - Present",
      role: "Senior Software Developer",
      company: "Skylark Infotech",
      location: "Delhi, India",
      description: "Leading the development and maintenance of scalable enterprise web applications using Node.js, React.js, and .NET MVC.",
      highlights: [
        "Designed and implemented RESTful APIs for seamless communication between frontend and backend",
        "Collaborated with cross-functional teams including designers, product managers, and QA testers",
        "Optimized application performance and eliminated bottlenecks for high-throughput traffic",
        "Integrated third-party APIs and services to extend application functionality",
        "Conducted code reviews, ensured best practices, and led Agile ceremonies (sprint planning, stand-ups, retrospectives)"
      ]
    },
    {
      period: "July 2017 - Jan 2020",
      role: "Dot Net Developer",
      company: "Code Diffusion Technologies",
      location: "New Delhi, India",
      description: "Developed and maintained .NET MVC web applications and relational database solutions.",
      highlights: [
        "Developed and maintained .NET MVC web applications with clean, maintainable architectures",
        "Designed relational database schemas and wrote efficient SQL queries",
        "Implemented responsive web designs for improved user experience across all devices",
        "Conducted unit testing, participated in peer code reviews, and provided technical support and troubleshooting"
      ]
    }
  ],

  education: [
    {
      period: "2012 - 2016",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Integral University, Lucknow",
      location: "Lucknow, India",
      description: "Graduated with 75% aggregate score. Core coursework: Data Structures, Algorithms, Software Engineering, Object-Oriented Programming, Database Management Systems, Computer Networks."
    }
  ],

  testimonials: [
    {
      quote: "Merazul is an outstanding Senior Full Stack Engineer. His deep command of Node.js, React, and SQL Server along with his systematic debugging skills made him a vital leader on our development team.",
      author: "Priya Sharma",
      role: "Engineering Manager",
      company: "Skylark Infotech",
      avatar: "assets/images/testimonial-1.svg"
    },
    {
      quote: "Merazul delivered our platform ahead of schedule with remarkable code quality, rock-solid database schemas, and smooth responsiveness.",
      author: "Rajesh Verma",
      role: "Technical Lead",
      company: "Code Diffusion",
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
