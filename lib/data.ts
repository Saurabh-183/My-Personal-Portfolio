export const portfolioData = {
  personal: {
    name: "Saurabh Agnihotri",
    role: "Software Development Engineer (SDE-I)",
    experience: "2+ Years Experience",
    location: "Gurugram, Haryana, India",
    phone: "+91 8737050286",
    email: "agnihotrisaurabh303@gmail.com",
    github: "https://github.com/Saurabh-183",
    linkedin: "https://www.linkedin.com/in/saurabh181/",
    avatarDark: "https://avatars.githubusercontent.com/u/178274919?v=4",
    avatarLight: "https://avatars.githubusercontent.com/u/178274919?v=4", // You can change this to a different image URL for light mode
    summary:
      "Software Development Engineer (SDE-I) with 2+ years of experience in designing, developing, and maintaining scalable web applications using React, Next.js, TypeScript, JavaScript, Node.js, Tailwind CSS. Skilled in building responsive user interfaces, integrating RESTful APIs, optimizing application performance, and implementing clean, maintainable code. Experienced in frontend architecture, database integration, debugging, and CI/CD pipelines/workflows. Strong collaborator with Agile teams, focused on delivering high-quality, user-centric solutions that drive business value and enhance user experience.",
  },

  skills: [
    {
      category: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "React 19", "Next.js 16", "TypeScript", "Tailwind CSS", "Material UI"],
    },
    {
      category: "Backend & Database",
      items: ["Node.js", "MongoDB", "Mongoose", "MySQL", "RESTful APIs", "Firebase"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "CI/CD Pipelines", "Google Drive API", "Vercel"],
    },
    {
      category: "Software Engineering",
      items: ["Data Structures & Algorithms", "OOPs", "System Design Fundamentals", "API Design"],
    },
    {
      category: "Advanced React",
      items: ["Hooks", "REST API", "Context API", "Redux", "Reducers", "SSR", "SSG", "Recharts"],
    },
    {
      category: "Tools",
      items: [
        "Git/GitHub",
        "VS Code",
        "Postman",
        "Antigravity",
        "ChatGPT",
        "Claude AI",
        "Gemini",
        "Codex",
        "IntelliJ IDEA",
      ],
    },
  ],

  experience: [
    {
      company: "Carbon Crunch",
      role: "Software Developer Engineer - I",
      period: "May 2026 — Present",
      location: "Noida, Uttar Pradesh",
      points: [
        "Engineered an enterprise multi-tenant compliance SaaS platform managing statutory carbon and energy filings (BEE PAT, MoEFCC CCTS, RCO, CEA) for 109+ industrial operating units across conglomerates (Trident, Kajaria, Chiripal, UltraTech).",
        "Architected 38 RESTful API route handlers (53 HTTP endpoints) in Next.js 16 with MongoDB/Mongoose, powering multi-year compliance matrices, statutory registers, and 4-tier RBAC.",
        "Built automated reconciliation engine that ingests monthly industrial energy utility workbooks, cross-validates declared consumption against supporting evidence with configurable tolerance thresholds, and auto-detects discrepancies.",
        "Implemented two-tier verification & audit lock workflow transitioning data to reviewer sign-off with cryptographic hash versioning for tamper-proof regulatory dossier submissions.",
        "Integrated Google Drive Evidence Vault to dynamically link, categorize, and stream real-time compliance documents and third-party utility invoices across financial cycles (FY22–FY27).",
        "Designed dual-sided responsive interface with Next.js App Router, React 19, and Tailwind CSS, featuring consultant workspace, statutory calendar, interactive discrepancy resolution threads, and Client Portal.",
        "Developed interactive dashboards, compliance matrices, and data visualizations using Recharts and Material-UI.",
        "Maintained 100% strict TypeScript typing and optimized static pre-rendering in Next.js 16, ensuring zero compiler warnings and high production reliability."
      ],
    },
    {
      company: "Harij Softech Private Limited",
      role: "Frontend Software Developer",
      period: "Nov 2024 — Apr 2026",
      location: "Gurugram, Haryana",
      points: [
        "Developed and maintained highly responsive web applications using Next.js, TypeScript and Tailwind CSS, ensuring cross-device compatibility for desktop, tablet, and mobile.",
        "Collaborated with cross-functional teams to implement UI/UX design best practices, problem-solving, recharts, enhancing user engagement and interface fluidity.",
        "Improved frontend performance through efficient Server-Side Rendering (SSR) and Static Site Generation (SSG) techniques.",
        "Integrated secure REST APIs for dynamic data fetching, reducing manual data handling and improving application performance.",
      ],
    },
  ],

  projects: [
    {
      num: "001",
      title: "Industrial GHG & Energy Compliance Platform",
      role: "Full-Stack Developer / Software Engineer",
      description:
        "Engineered an enterprise multi-tenant compliance SaaS platform managing statutory carbon and energy filings (BEE PAT, MoEFCC CCTS, RCO/RPO, CEA) for 109+ industrial operating units across conglomerates (Trident, Kajaria, UltraTech). Architected Next.js 16 RESTful API route handlers, automated energy reconciliation engines with tolerance thresholds, two-tier cryptographic audit locking, and Google Drive Cloud Evidence Vault.",
      stack: ["Next.js 16", "React 19", "TypeScript", "MongoDB", "Mongoose", "Tailwind CSS", "Recharts"],
      github: "https://ghg-compliance-cms.vercel.app",
      live: "https://ghg-compliance-cms.vercel.app",
      featured: true,
    },
    {
      num: "002",
      title: "Greenhouse Gas & ESG (Compliance Platform)",
      description:
        "Engineered an Enterprise ESG and Greenhouse Gas (GHG) reporting platform with a scalable microservices ecosystem (Node.js & FastAPI) to automate data collection and generate regulatory compliance reports (BRSR, CBAM, RCO). Designed dynamic calculation engines applying correct emission factors and deployed on AWS ECS with optimized CI/CD pipelines.",
      stack: ["React", "Node.js", "Python (FastAPI)", "MongoDB/SQL", "AWS ECS", "Docker", "CI/CD"],
      github: "",
      featured: true,
    },
    {
      num: "003",
      title: "Ctrl+F Quotation (AI-Powered Quotation Search Tool)",
      description:
        "Planned a web-based search tool to efficiently retrieve data using keyword-based filtering. Built backend APIs with Node.js and Express.js for fast data processing. Integrated MySQL for efficient data storage, indexing, and querying, improving search performance and response time.",
      stack: ["React.js", "Next.js", "Node.js", "MySQL", "CSS"],
      github: "https://github.com/Saurabh-183/Ctrl-f",
      featured: true,
    },
    {
      num: "004",
      title: "Face Recognition Visitor Management System (VMS)",
      description:
        "Engineered an AI-powered visitor system featuring real-time face registration and contactless identification. Automated entry workflows with QR-based validation and email triggers, reducing check-in time and improving organizational security. Optimized overall performance through server-side rendering, secure data encryption, and role-based access control (RBAC) to safeguard sensitive identity and meeting data.",
      stack: ["Next.js", "Typescript", "Tailwind CSS", "HTML", "CSS", "MySQL"],
      github: "https://signpass-vms.vercel.app/",
      featured: true,
    },
    {
      num: "005",
      title: "In-Flight Ordering System (Air India Express)",
      description:
        "Designed a web-based management platform featuring an interactive Admin Dashboard for real-time inventory tracking and passenger order management. Built a centralized MySQL database to manage flight details, product catalogue (meals, snacks, and canteen items), stock availability, and passenger orders — ensuring high data integrity and fast data retrieval.",
      stack: ["Next.js", "Typescript", "Tailwind CSS", "HTML", "CSS", "MySQL"],
      github: "https://github.com/Saurabh-183",
      featured: true,
    },
    {
      num: "006",
      title: "Employee Leave Management System",
      description:
        "Planned and worked on web-based Employee Leave Management System (ELMS) using PHP and MySQL, automating the workflow for leave applications and approvals. Implemented a centralized database architecture to store employee leave data, ensuring efficient data retrieval and management across the organization.",
      stack: ["Java", "PHP", "HTML", "CSS", "MySQL"],
      github: "",
      featured: false,
    },
    {
      num: "007",
      title: "Groupware Meeting",
      description:
        "Initiated a collaborative Groupware application using React for dynamic, reusable Components and efficient state management. Utilized Context API and Reducers to manage complex global states, ensuring code maintainability.",
      stack: ["HTML", "CSS", "React", "PHP", "MongoDB"],
      github: "",
      featured: false,
    },
  ],

  certifications: [
    { name: "Google Data Analytics", issuer: "MSME", icon: "📊", url: "https://drive.google.com/file/d/1ybOSSnPKZS62c83VqCYSSsbQWLkd7I8W/view?pli=1"},
    { name: "Machine Learning in Python", issuer: "machinelearning.org.in", icon: "🤖", url: "https://drive.google.com/file/d/1yaMHPg-bLG6Dhi4rzMzwttBmuCkgx9nF/view" },
    { name: "Data Visualization", issuer: "TATA Group · Forage", icon: "📈", url: "https://drive.google.com/file/d/1yg8YfOXkcW8Zq7ifRGM4EGOnxGpxaseG/view" },
    { name: "Microsoft Excel", issuer: "MSME", icon: "📋", url: "https://drive.google.com/file/d/1ycp_Ycfae8fRnVNqm00dq2qXiW5dkkS7/view" },
    { name: "Project Management Virtual Experience", issuer: "TATA Group · Forage", icon: "🗂️", url: "https://drive.google.com/file/d/1yg9d7VYiIzQGXB3-fwuZSSmZRXSEA_Ng/view" },
  ],

  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    university: "CSJM University, Kanpur, Uttar Pradesh",
    location: "Kanpur, Uttar Pradesh",
    period: "Jul 2021 — Jun 2024",
    cgpa: "8.1 / 10",
  },

  intermediate: {
    degree: "Intermediate (12th Grade)",
    school: "SVM Inter College (Maths Stream)",
    location: "Unnao, Uttar Pradesh",
    period: "Jul 2020 — Jun 2021",
    cgpa: "85.40 %",
  },

  highschool: {
    degree: "High School (10th Grade)",
    school: "SVM Inter College (Science Stream)",
    location: "Unnao, Uttar Pradesh",
    period: "Jul 2019 — Jun 2020",
    cgpa: "85.00 %",
  },
 
  hobbies: ["Story Writing", "Cricket", "Music", "Photography", "Traveling", "Cooking", "Gaming", "Fitness", "Book Reading"],
}