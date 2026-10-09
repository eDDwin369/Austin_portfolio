export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  detail?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-reply",
    company: "Reply",
    role: "Software Engineer",
    location: "Full-Time",
    period: "Mar 2022 — Jul 2026",
    description:
      "Specialized in core mobile application maintenance, in-depth cloud log investigations with AWS, and cross-functional bug fixing and profiling.",
    responsibilities: [
      "Analyzed and resolved customer-reported technical issues within core mobile applications using specialized ticket management and system analysis tools.",
      "Conducted in-depth, end-to-end investigations into backend and cloud logs using AWS services, including CloudWatch and S3.",
      "Collaborated with cross-functional teams to bug-fix, debug, and profile application layers to ensure stability and smooth system operations."
    ],
    tags: ["AWS CloudWatch", "AWS S3", "Mobile Platforms", "Debugging", "Application Profiling", "Issue Resolution"]
  },
  {
    id: "exp-triaxia",
    company: "Triaxia Infotech Pvt Ltd",
    role: "Software Engineer",
    location: "Full-Time",
    period: "Dec 2020 — Jan 2022",
    description:
      "Contributed substantially to the architectural design, enhancement, and front-end optimization of a flagship Digital Marketing Application.",
    responsibilities: [
      "Contributed substantially to the architectural design, enhancement, and front-end optimization of a flagship Digital Marketing Application.",
      "Implemented responsive layouts and clean workflows ensuring seamless integration between frontend systems and remote servers."
    ],
    tags: ["Front-End Development", "Architecture", "Responsive Layouts", "API Integration", "Mobile Workflows"]
  },
  {
    id: "exp-descpro",
    company: "Descpro Technologies",
    role: "Software Programmer",
    location: "Full-Time",
    period: "Feb 2020 — Dec 2020",
    description:
      "Engineered and deployed structural feature upgrades for financial and consumer utility applications including iwallet, Ezyloan, and Queme.",
    responsibilities: [
      "Engineered and deployed structural feature upgrades for financial and consumer utility applications including iwallet, Ezyloan, and Queme.",
      "Translated wireframes and UX mockups into high-performance, reusable, and dependable codebase configurations."
    ],
    tags: ["iwallet", "Ezyloan", "Queme", "Wireframe Translation", "Reusable Code", "Mobile Utilities"]
  },
  {
    id: "exp-turbosoft",
    company: "Turbosoft Technology LLC",
    role: "Android Developer",
    location: "Full-Time",
    period: "May 2018 — Nov 2019",
    description:
      "Designed and executed core modular features for real-time retail mobile Android applications written natively in Java.",
    responsibilities: [
      "Designed and executed core modular features for real-time retail mobile Android applications written natively in Java.",
      "Successfully built adaptive user interfaces and integrated complex Map/Location services to enhance consumer engagement and transit tracking."
    ],
    tags: ["Android Development", "Java", "Map/Location Integration", "Adaptive UI", "Retail Applications"]
  },
  {
    id: "exp-future",
    company: "Future Group",
    role: "Fashion Associate",
    location: "Full-Time",
    period: "Mar 2017 — Apr 2018",
    description:
      "Served as a Fashion Consultant for premium brands including John Miller and Indigo Nation, ensuring high-quality customer experience and sales goals.",
    responsibilities: [
      "Served as a Fashion Consultant for premium brands including John Miller and Indigo Nation.",
      "Provided exceptional customer support, ensuring a positive shopping experience.",
      "Explained product quality and features to customers, enhancing their understanding and satisfaction.",
      "Consistently achieved sales targets, contributing to the overall success of the team."
    ],
    tags: ["Customer Support", "Brand Consultation", "Teamwork", "Effective Communication", "Sales Targets"]
  }
];

export const educationList: EducationItem[] = [
  {
    id: "edu-be",
    degree: "B.E. in Computer Science & Engineering",
    institution: "Hindustan Institute of Technology, Coimbatore",
    period: "2012 — 2016",
    detail: "Graduated with comprehensive foundation in computer science, software engineering, algorithms, and system architecture."
  },
  {
    id: "edu-hsc",
    degree: "Senior Secondary (Computer Science)",
    institution: "MASM, Venmanad",
    period: "2009 — 2011",
    detail: "Specialized in Computer Science curriculum, programming fundamentals, and mathematics."
  },
  {
    id: "edu-sslc",
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "St. Joseph's HSS, Pavaratty",
    period: "Graduated 2009",
    detail: "Completed foundational secondary schooling."
  }
];

export const languagesList = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Malayalam", level: "Native / Full Working Proficiency" },
  { name: "Tamil", level: "Professional Working Proficiency" }
];

export const activitiesList = [
  { name: "Cricket", category: "Sports & Team Athletics" },
  { name: "Badminton", category: "Racquet Sports & Agility" },
  { name: "Chess", category: "Strategy & Tactical Analysis" },
  { name: "Football", category: "Team Coordination & Endurance" }
];

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metrics: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Analysis",
    tagline: "Requirement & Issue Deconstruction",
    description:
      "Analyzing user requirements, translating design wireframes into technical specifications, and dissecting customer-reported issue tickets.",
    deliverables: ["Wireframe Translation", "Issue Ticket Analysis", "System Requirements", "Scope Clarification"],
    metrics: "Crystal-clear technical specifications"
  },
  {
    step: "02",
    title: "Architecture",
    tagline: "Modular Mobile & Layout Design",
    description:
      "Structuring Activities, Fragments, and adaptive layouts ensuring modularity, lifecycle stability, and responsiveness across varied device screens.",
    deliverables: ["Activity & Fragment Layouts", "Adaptive Screen Hierarchy", "Reusable Component Structure", "Data Flow Blueprint"],
    metrics: "Clean, decoupled component hierarchy"
  },
  {
    step: "03",
    title: "Implementation",
    tagline: "Clean, High-Performance Code",
    description:
      "Developing native features in Kotlin and Java or cross-platform Flutter code, strictly upholding clean code and reliability standards.",
    deliverables: ["Kotlin / Java Codebases", "UI Layouting & Bindings", "Reusable Classes & Modules", "Feature Upgrade Commits"],
    metrics: "Dependable, production-ready code"
  },
  {
    step: "04",
    title: "Integration",
    tagline: "Cloud Backends & Mobile Services",
    description:
      "Integrating remote server APIs, cloud infrastructure, and device hardware services including real-time Map/Location tracking.",
    deliverables: ["Remote Server Integration", "Map/Location API Hookups", "AWS Cloud Service Connections", "Data Serialization"],
    metrics: "Seamless device-to-cloud workflows"
  },
  {
    step: "05",
    title: "Debugging",
    tagline: "Deep Log Investigation & Triage",
    description:
      "Conducting in-depth, end-to-end investigations into backend and cloud logs using AWS CloudWatch and S3 to resolve complex edge cases.",
    deliverables: ["AWS CloudWatch Log Traces", "S3 Storage Log Audits", "Root-Cause Analysis", "Fix Validation"],
    metrics: "Rapid defect resolution & stability"
  },
  {
    step: "06",
    title: "Profiling",
    tagline: "Application Profiling & Optimization",
    description:
      "Profiling application layers to identify bottlenecks, optimize memory and UI responsiveness, and ensure smooth continuous operation.",
    deliverables: ["Application Profiling Reports", "Performance Optimization", "Memory & Thread Checks", "Cross-Functional Review"],
    metrics: "High stability & smooth runtime"
  }
];
