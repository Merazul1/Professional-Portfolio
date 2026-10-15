/**
 * Portfolio Data Configuration
 * Edit this file to easily update personal information, projects, skills, experience, and testimonials!
 */

const portfolioData = {
  profile: {
    name: "Merazul Khan",
    headline: "Full Stack Software Engineer & Solution Architect",
    statusBadge: "Available for New Opportunities",
    roles: [
      "Full Stack Developer",
      "Modern Web Architect",
      "React & Node.js Specialist",
      "UI/UX Craftsperson",
      "Open Source Enthusiast"
    ],
    bio: "Passionate software engineer focused on crafting high-performance, accessible, and elegant digital experiences. I specialize in scalable modern web applications, combining cutting-edge frontend design with robust backend engineering.",
    detailedAbout: `Hello! I'm Merazul Khan, a dedicated Software Engineer with a passion for building software that solves real-world challenges. Over the past 3+ years, I have worked across the entire development lifecycle—from conceptual UI design and system architecture to cloud deployment and performance optimization.

I thrive at the intersection of aesthetic frontend design and resilient backend systems. Whether developing lightning-fast single-page applications, architecting RESTful & GraphQL microservices, or tuning database query performance, I take pride in clean code, thoughtful UX, and reliable architectures.

When I'm not coding, you can find me exploring emerging tech stacks, contributing to developer communities, or sharing insights on tech blogs.`,
    email: "merajulhaikhan@gmail.com",
    location: "Kolkata, India / Remote Worldwide",
    resumeUrl: "#contact", // or path to assets/resume.pdf
    avatar: "assets/images/avatar.svg",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com",
        icon: "github",
        handle: "@merazul-khan"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: "linkedin",
        handle: "Merazul Khan"
      },
      {
        name: "Twitter / X",
        url: "https://twitter.com",
        icon: "twitter",
        handle: "@merazul_dev"
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
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Projects Completed", value: 24, suffix: "+" },
    { label: "Code Commits", value: 1200, suffix: "+" },
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
          { name: "TypeScript / JavaScript (ES6+)", level: 92 },
          { name: "Tailwind CSS & CSS3 / SASS", level: 96 },
          { name: "Redux Toolkit / Zustand", level: 88 },
          { name: "HTML5 & Web Accessibility (a11y)", level: 98 },
          { name: "Framer Motion & Animations", level: 85 }
        ]
      },
      {
        id: "backend",
        title: "Backend & Systems",
        icon: "server",
        items: [
          { name: "Node.js & Express.js", level: 90 },
          { name: "RESTful & GraphQL APIs", level: 92 },
          { name: "Python / FastAPI", level: 80 },
          { name: "Authentication (JWT, OAuth 2.0)", level: 88 },
          { name: "Microservices & WebSockets", level: 84 },
          { name: "Serverless Functions", level: 82 }
        ]
      },
      {
        id: "database",
        title: "Databases & Cloud",
        icon: "database",
        items: [
          { name: "PostgreSQL & Prisma ORM", level: 88 },
          { name: "MongoDB & Mongoose", level: 90 },
          { name: "Redis Caching", level: 82 },
          { name: "Docker & Containerization", level: 80 },
          { name: "AWS (S3, EC2, Lambda basics)", level: 78 },
          { name: "Git, GitHub Actions & CI/CD", level: 92 }
        ]
      },
      {
        id: "tools",
        title: "Tools & Methodologies",
        icon: "tool",
        items: [
          { name: "Visual Studio Code & Git CLI", level: 95 },
          { name: "Postman & API Testing", level: 90 },
          { name: "Figma to Responsive Code", level: 88 },
          { name: "Agile / Scrum Collaboration", level: 92 },
          { name: "SEO & Web Vitals Optimization", level: 89 },
          { name: "Jest / Vitest Unit Testing", level: 82 }
        ]
      }
    ]
  },

  services: [
    {
      title: "Full Stack Web Development",
      description: "End-to-end development of modern web platforms using React, Node.js, and TypeScript with robust architecture and clean code standards.",
      icon: "layers"
    },
    {
      title: "High-Performance Frontend",
      description: "Pixel-perfect, lightning-fast, and responsive user interfaces with smooth micro-interactions, dark/light themes, and top accessibility.",
      icon: "layout"
    },
    {
      title: "REST & GraphQL API Architecture",
      description: "Scalable backend services, secure authentication, database schemas, and microservice integration with comprehensive documentation.",
      icon: "cpu"
    },
    {
      title: "Cloud & DevOps Integration",
      description: "Automated CI/CD pipelines, containerized deployment using Docker, cloud asset storage, and edge caching for maximum speed.",
      icon: "cloud"
    }
  ],

  projects: [
    {
      id: "omniflow",
      title: "OmniFlow - AI Workspace & Collaboration Suite",
      category: "fullstack",
      tagline: "Intelligent collaborative platform featuring real-time document syncing, smart AI summaries, and team workflows.",
      image: "assets/images/project-omniflow.svg",
      gradient: "from-blue-600 to-indigo-800",
      featured: true,
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Prisma", "PostgreSQL"],
      liveUrl: "https://example.com/omniflow",
      githubUrl: "https://github.com/merazul-khan/omniflow",
      details: {
        overview: "OmniFlow combines real-time team collaboration with generative AI. Users can co-edit rich text, generate context-aware summaries, auto-translate documents, and coordinate tasks with zero latency.",
        features: [
          "Real-time synchronized editing powered by WebSockets",
          "Automated summarization and action-item extraction via OpenAI GPT-4",
          "Role-based access control (RBAC) with granular team permissions",
          "Responsive dark/light UI with instant search and keyboard shortcuts"
        ],
        results: "Achieved a 99 Lighthouse performance score and handled 5,000+ concurrent WebSocket events without dropped state."
      }
    },
    {
      id: "pulse-analytics",
      title: "PulseAnalytics - Real-Time Telemetry Dashboard",
      category: "fullstack",
      tagline: "High-throughput monitoring platform visualizing real-time system metrics, user traffic, and conversion funnels.",
      image: "assets/images/project-pulse.svg",
      gradient: "from-emerald-600 to-teal-800",
      featured: true,
      tags: ["React", "Node.js", "Socket.io", "Tailwind CSS", "PostgreSQL", "Recharts"],
      liveUrl: "https://example.com/pulse-analytics",
      githubUrl: "https://github.com/merazul-khan/pulse-analytics",
      details: {
        overview: "PulseAnalytics provides engineering and product teams with real-time operational visibility. Features streaming time-series graphs, custom alerting thresholds, and granular cohort segmentation.",
        features: [
          "Sub-100ms real-time metric updates via binary WebSocket channels",
          "Customizable drag-and-drop dashboard widgets",
          "Automated anomaly detection triggering Webhook & email alerts",
          "Exportable CSV and PDF performance reports"
        ],
        results: "Decreased mean-time-to-detection (MTTD) by 45% across pilot monitoring teams."
      }
    },
    {
      id: "devnexus",
      title: "DevNexus - Developer Knowledge & Q&A Hub",
      category: "fullstack",
      tagline: "Community portal for developers to share technical articles, code snippets, and peer problem-solving.",
      image: "assets/images/project-devnexus.svg",
      gradient: "from-purple-600 to-pink-800",
      featured: true,
      tags: ["React", "Express.js", "MongoDB", "Tailwind CSS", "Redis", "JWT"],
      liveUrl: "https://example.com/devnexus",
      githubUrl: "https://github.com/merazul-khan/devnexus",
      details: {
        overview: "A developer forum and blogging engine designed for technical accuracy and peer collaboration. Includes markdown authoring with live code execution previews and syntax highlighting.",
        features: [
          "Rich Markdown editor with instant live preview and syntax coloring",
          "Voting, bookmarking, and reputation-based badge rewards system",
          "Redis-backed caching for sub-20ms page load speeds",
          "Faceted full-text search across 10,000+ developer discussions"
        ],
        results: "Supports over 10k monthly active readers with 99.98% uptime."
      }
    },
    {
      id: "cloudvault",
      title: "CloudVault - Client-Side Encrypted File Depot",
      category: "backend",
      tagline: "Zero-knowledge encrypted cloud storage utilizing AES-GCM-256 for maximum file confidentiality.",
      image: "assets/images/project-cloudvault.svg",
      gradient: "from-cyan-600 to-blue-800",
      featured: false,
      tags: ["Next.js", "AWS S3", "Web Crypto API", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://example.com/cloudvault",
      githubUrl: "https://github.com/merazul-khan/cloudvault",
      details: {
        overview: "CloudVault guarantees total privacy by encrypting all files in the browser before they are uploaded to storage buckets. Even the server administrators cannot view encrypted file payloads.",
        features: [
          "AES-256-GCM encryption performed entirely client-side",
          "Chunked parallel uploads directly to presigned S3 URLs",
          "Time-limited self-destructing sharing links with password protection",
          "Drag-and-drop file vault interface with folder nesting"
        ],
        results: "Secured over 100GB of sensitive documents with zero breach vectors."
      }
    },
    {
      id: "shopsphere",
      title: "ShopSphere - Modern Headless E-Commerce",
      category: "frontend",
      tagline: "Ultra-fast headless storefront with instantaneous page transitions, dynamic cart, and secure checkout.",
      image: "assets/images/project-shopsphere.svg",
      gradient: "from-amber-600 to-orange-800",
      featured: false,
      tags: ["React", "Stripe API", "Tailwind CSS", "Zustand", "Framer Motion"],
      liveUrl: "https://example.com/shopsphere",
      githubUrl: "https://github.com/merazul-khan/shopsphere",
      details: {
        overview: "A next-generation e-commerce web storefront built for mobile-first shoppers. Boasts instant catalog filtering, optimistic cart updates, and seamless Stripe checkout integration.",
        features: [
          "Instantaneous client-side product filtering and sorting",
          "Optimistic cart state updates with persistent local storage",
          "Stripe Elements checkout with support for Apple Pay & Google Pay",
          "Fully accessible screen-reader optimized navigation"
        ],
        results: "Delivered 2.3x faster checkout completion rates than standard template storefronts."
      }
    },
    {
      id: "taskmaster",
      title: "TaskMaster Pro - Fluid Kanban & Agile Board",
      category: "frontend",
      tagline: "Interactive drag-and-drop workflow manager designed for fast agile sprint planning and task prioritization.",
      image: "assets/images/project-taskmaster.svg",
      gradient: "from-rose-600 to-red-800",
      featured: false,
      tags: ["TypeScript", "React", "Tailwind CSS", "dnd-kit", "LocalStorage"],
      liveUrl: "https://example.com/taskmaster",
      githubUrl: "https://github.com/merazul-khan/taskmaster",
      details: {
        overview: "A fluid, intuitive Kanban project organizer. Users can build sprint boards, attach checklists, assign priority tags, and filter items with fluid animations.",
        features: [
          "Smooth multi-column drag-and-drop reordering with dnd-kit",
          "Subtask progress tracking with dynamic completion progress bars",
          "Full keyboard accessibility with hotkeys for power users",
          "Instant offline sync with automatic background conflict resolution"
        ],
        results: "Adopted by 500+ developers for personal task and goal tracking."
      }
    }
  ],

  experience: [
    {
      period: "2024 - Present",
      role: "Senior Full Stack Engineer",
      company: "TechNova Solutions",
      location: "Remote / Hybrid",
      description: "Lead developer on high-impact client web applications. Architecting decoupled frontend and backend services, mentoring junior developers, and driving code quality standards.",
      highlights: [
        "Architected scalable microservices supporting 100k+ active users",
        "Pioneered migration from legacy codebase to modern Next.js and TypeScript",
        "Reduced bundle size by 38% and improved Core Web Vitals to 95+"
      ]
    },
    {
      period: "2022 - 2024",
      role: "Full Stack Software Developer",
      company: "Innovate Digital Labs",
      location: "Bengaluru, India",
      description: "Built responsive client portals, e-commerce systems, and internal analytics tools. Collaborated directly with UI/UX designers and product managers to deliver on tight sprint deadlines.",
      highlights: [
        "Engineered 12+ production client web applications from scratch",
        "Designed and implemented RESTful API endpoints with JWT authentication",
        "Automated deployment pipelines with GitHub Actions, cutting release time in half"
      ]
    },
    {
      period: "2021 - 2022",
      role: "Frontend Developer Intern",
      company: "Apex Interactive",
      location: "Kolkata, India",
      description: "Developed dynamic interactive landing pages, integrated third-party REST APIs, and authored modular CSS/Tailwind component systems.",
      highlights: [
        "Translated complex Figma designs into responsive, accessible HTML/CSS/React components",
        "Optimized asset delivery and image pipelines for faster mobile page loads",
        "Collaborated in daily agile standups and sprint planning sessions"
      ]
    }
  ],

  education: [
    {
      period: "2017 - 2021",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "State Technological University",
      location: "India",
      description: "Graduated with Honors. Core coursework: Data Structures, Algorithms, Database Management Systems, Computer Networks, and Object-Oriented Software Engineering."
    }
  ],

  testimonials: [
    {
      quote: "Merazul is one of the most reliable engineers I've worked with. His ability to translate complex technical problems into elegant, maintainable code is truly exceptional. Any team would be lucky to have him.",
      author: "Alex Morgan",
      role: "Engineering Director",
      company: "FinTech Scaleup",
      avatar: "assets/images/testimonial-1.svg"
    },
    {
      quote: "Working alongside Merazul was a breeze. He delivered our web application ahead of schedule with flawless responsiveness, smooth micro-interactions, and remarkable attention to UI detail.",
      author: "Priya Sharma",
      role: "Product Manager",
      company: "Innovate Labs",
      avatar: "assets/images/testimonial-2.svg"
    },
    {
      quote: "Exceptional mastery of modern frontend frameworks and backend API design. Merazul has a rare knack for both technical rigor and aesthetic polish.",
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
