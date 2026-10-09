export interface ProjectSection {
  title: string;
  subtitle?: string;
  content: string;
  points?: string[];
  image?: string;
  callout?: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  role: string;
  timeline: string;
  platforms: string[];
  description: string;
  tools: string[];
  thumbnail: string;
  heroImage: string;
  accentColor: string;
  layoutType: "left" | "right" | "full";
  overview: string;
  problem: string;
  goals: string[];
  solution: string;
  research: {
    methodology: string;
    keyFindings: string[];
    userQuote: {
      text: string;
      author: string;
      role: string;
    };
  };
  userFlowSummary: string;
  designDecisions: string[];
  results: {
    stat: string;
    label: string;
  }[];
  impact: string;
  sections?: ProjectSection[];
  liveUrl?: string;
  figmaUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "iwallet",
    title: "iwallet",
    client: "Descpro Technologies",
    category: "Financial Utility Mobile Application",
    year: "2020",
    role: "Software Programmer",
    timeline: "Feb 2020 — Dec 2020",
    platforms: ["Android", "Mobile"],
    description:
      "Engineered and deployed structural feature upgrades for financial utility application iwallet, translating wireframes and UX mockups into dependable codebase configurations.",
    tools: ["Android", "Kotlin", "Java", "Activities & Fragments", "UI & Layouting"],
    thumbnail: "/images/project-expense.jpg",
    heroImage: "/images/project-expense.jpg",
    accentColor: "#6366f1",
    layoutType: "left",
    overview:
      "As a Software Programmer at Descpro Technologies, engineered structural feature upgrades for the iwallet mobile application, translating UI mockups into clean, reliable, and high-performance code.",
    problem:
      "Financial utilities require dependable state management, clean wireframe translation, and responsive layout handling to prevent user friction during transactional workflows.",
    goals: [
      "Translate UX wireframes into dependable Android components",
      "Upgrade application feature structures with clean, reusable code",
      "Ensure stability across varied screen resolutions and adaptive layouts"
    ],
    solution:
      "Developed modular codebase configurations using Activities and Fragments with robust layouting and reliable front-end mobile architectures.",
    research: {
      methodology: "Wireframe Analysis & Code Modularization",
      keyFindings: [
        "Component reusability accelerates future feature updates",
        "Adaptive layouts ensure consistency across varied Android display densities",
        "Clear separation of concerns enhances application maintainability"
      ],
      userQuote: {
        text: "Translating wireframes into high-performance, reusable, and dependable codebase configurations.",
        author: "Engineering Focus",
        role: "Software Programmer"
      }
    },
    userFlowSummary:
      "Clean navigation flows mapped from wireframes directly to modular Android activities and fragment transitions.",
    designDecisions: [
      "Modular Activity and Fragment architecture",
      "Adaptive layouts catering to multiple device orientations",
      "Clean separation of UI presentation and business logic"
    ],
    results: [
      { stat: "100%", label: "Wireframe Translation Fidelity" },
      { stat: "Modular", label: "Reusable Codebase Architecture" }
    ],
    impact:
      "Successfully delivered dependable structural feature upgrades that supported smooth user interactions and high codebase maintainability."
  },
  {
    slug: "ezyloan",
    title: "Ezyloan",
    client: "Descpro Technologies",
    category: "Financial Lending Mobile Application",
    year: "2020",
    role: "Software Programmer",
    timeline: "Feb 2020 — Dec 2020",
    platforms: ["Android", "Mobile"],
    description:
      "Engineered core feature enhancements for Ezyloan financial lending app, translating multi-step loan workflows into responsive, clean code.",
    tools: ["Android", "Java", "Kotlin", "UI Layouting", "Wireframe Translation"],
    thumbnail: "/images/project-palm.jpg",
    heroImage: "/images/project-palm.jpg",
    accentColor: "#4f46e5",
    layoutType: "right",
    overview:
      "Engineered structural upgrades for the Ezyloan mobile lending platform, translating multi-step loan forms and verification screens into dependable Android interfaces.",
    problem:
      "Lending workflows require high reliability, precise layouting, and dependable validation to ensure error-free applicant submissions.",
    goals: [
      "Implement multi-step financial form layouts cleanly",
      "Translate complex wireframes into high-performance code",
      "Ensure stability across all Android device form factors"
    ],
    solution:
      "Implemented modular fragment flows and robust UI bindings, ensuring fast screen rendering and dependable code architecture.",
    research: {
      methodology: "Form Workflow Optimization & Layout Profiling",
      keyFindings: [
        "Structured fragment transitions prevent unnecessary activity recreation",
        "Clear validation logic improves user task completion velocity",
        "Consistent layouting patterns improve visual hierarchy"
      ],
      userQuote: {
        text: "Engineered and deployed structural feature upgrades for consumer financial utilities.",
        author: "Engineering Focus",
        role: "Software Programmer"
      }
    },
    userFlowSummary:
      "Seamless multi-screen loan application workflow utilizing adaptive layouts and dependable state transitions.",
    designDecisions: [
      "Fragment-based multi-step form architecture",
      "Consistent responsive layout guidelines across screens",
      "Strict debugging and component modularization"
    ],
    results: [
      { stat: "Reliable", label: "Multi-Step Loan Flow Architecture" },
      { stat: "Clean", label: "Maintainable Codebase" }
    ],
    impact:
      "Delivered reliable front-end workflows for Ezyloan applicants, enabling seamless multi-step loan processing."
  },
  {
    slug: "queme",
    title: "Queme",
    client: "Descpro Technologies",
    category: "Consumer Utility Application",
    year: "2020",
    role: "Software Programmer",
    timeline: "Feb 2020 — Dec 2020",
    platforms: ["Android", "Mobile"],
    description:
      "Developed feature enhancements and structural codebase upgrades for Queme consumer utility app with clean UI and high-performance layouts.",
    tools: ["Android", "Java", "Adaptive Layouts", "Bug Fixing", "Wireframe Translation"],
    thumbnail: "/images/project-opareta.jpg",
    heroImage: "/images/project-opareta.jpg",
    accentColor: "#059669",
    layoutType: "left",
    overview:
      "Built feature enhancements and structural updates for Queme, translating consumer product wireframes into intuitive and responsive mobile interfaces.",
    problem:
      "Consumer utility apps require fluid responsiveness and low latency across varying screen sizes and device capabilities.",
    goals: [
      "Translate UX mockups into dependable Android views",
      "Resolve edge-case UI rendering bugs across form factors",
      "Maintain clean, reusable codebase conventions"
    ],
    solution:
      "Structured adaptive layouts and modular components that rendered smoothly and handled screen transitions effortlessly.",
    research: {
      methodology: "Interface Benchmarking & Layout Refactoring",
      keyFindings: [
        "Lightweight view hierarchies reduce memory consumption",
        "Modular layouts simplify ongoing feature additions",
        "Clean wireframe fidelity fosters intuitive consumer interaction"
      ],
      userQuote: {
        text: "Translating wireframes and UX mockups into dependable codebase configurations.",
        author: "Engineering Focus",
        role: "Software Programmer"
      }
    },
    userFlowSummary:
      "Intuitive utility task flows supported by clean navigation and quick responsive feedback.",
    designDecisions: [
      "Lightweight layout containers for fast rendering",
      "Strict adherence to Android UI and layouting guidelines",
      "Bug fixing across edge case screen ratios"
    ],
    results: [
      { stat: "Fluid", label: "Responsive Layout Performance" },
      { stat: "Robust", label: "Component Reusability" }
    ],
    impact:
      "Delivered high-performance front-end features for consumer utility tasks, ensuring a reliable user experience."
  },
  {
    slug: "digital-marketing-app",
    title: "Digital Marketing Application",
    client: "Triaxia Infotech Pvt Ltd",
    category: "Flagship Digital Marketing Platform",
    year: "2021",
    role: "Software Engineer",
    timeline: "Dec 2020 — Jan 2022",
    platforms: ["Mobile", "Front-End"],
    description:
      "Contributed substantially to architectural design, enhancement, and front-end optimization of flagship Digital Marketing Application with responsive layouts.",
    tools: ["Front-End Development", "Architecture", "Responsive Layouts", "API Integration", "Debugging"],
    thumbnail: "/images/project-fauj.jpg",
    heroImage: "/images/project-fauj.jpg",
    accentColor: "#6366f1",
    layoutType: "right",
    overview:
      "Contributed substantially to the architectural design, enhancement, and front-end optimization of Triaxia Infotech's flagship Digital Marketing Application.",
    problem:
      "Marketing campaign dashboards require real-time data synchronization between frontend systems and remote servers without UI stutter.",
    goals: [
      "Design and enhance front-end application architecture",
      "Implement responsive layouts and clean workflows",
      "Ensure seamless integration between frontend systems and remote servers"
    ],
    solution:
      "Engineered responsive layouts and optimized front-end workflows, establishing smooth data integration with backend servers.",
    research: {
      methodology: "System Architecture & Layout Optimization",
      keyFindings: [
        "Optimized network communication prevents frontend blocking",
        "Responsive layouting adapts smoothly across varied resolutions",
        "Clean architecture reduces development cycle time"
      ],
      userQuote: {
        text: "Implemented responsive layouts and clean workflows ensuring seamless integration between frontend systems and remote servers.",
        author: "Engineering Focus",
        role: "Software Engineer"
      }
    },
    userFlowSummary:
      "Streamlined marketing campaign analytics and dashboard navigation with responsive layouts.",
    designDecisions: [
      "Decoupled frontend layout architecture from server integration",
      "Strict data synchronization and error handling",
      "Performance optimization for fast campaign data views"
    ],
    results: [
      { stat: "Seamless", label: "Remote Server Integration" },
      { stat: "Optimized", label: "Front-End Responsive Layouts" }
    ],
    impact:
      "Elevated the flagship product's architecture and stability, ensuring smooth integration between client devices and remote cloud servers."
  },
  {
    slug: "retail-transit-app",
    title: "Retail & Transit Mobile Platform",
    client: "Turbosoft Technology LLC",
    category: "Real-Time Retail & Location Tracking",
    year: "2019",
    role: "Android Developer",
    timeline: "May 2018 — Nov 2019",
    platforms: ["Android", "Native Java"],
    description:
      "Designed and executed core modular features for real-time retail mobile Android applications natively in Java with Map and Location integration.",
    tools: ["Android Development", "Java", "Map/Location Integration", "Adaptive Layouts", "Activities & Fragments"],
    thumbnail: "/images/project-hospital.jpg",
    heroImage: "/images/project-hospital.jpg",
    accentColor: "#2563eb",
    layoutType: "left",
    overview:
      "Designed and executed core modular features for real-time retail mobile Android applications written natively in Java at Turbosoft Technology LLC.",
    problem:
      "Retail transit tracking requires accurate real-time location mapping, adaptive user interfaces, and minimal battery consumption.",
    goals: [
      "Build adaptive user interfaces for varied retail devices",
      "Integrate complex Map and Location services for transit tracking",
      "Design modular features written natively in Java"
    ],
    solution:
      "Developed modular native Java components, built adaptive layouts, and integrated Map/Location services for seamless transit tracking.",
    research: {
      methodology: "Location Service Benchmarking & UI Layouting",
      keyFindings: [
        "Efficient geolocation handling prevents battery drain",
        "Adaptive UI maintains readability on varied handheld devices",
        "Modular Java components simplify real-time feature extensions"
      ],
      userQuote: {
        text: "Successfully built adaptive user interfaces and integrated complex Map/Location services to enhance consumer engagement and transit tracking.",
        author: "Engineering Focus",
        role: "Android Developer"
      }
    },
    userFlowSummary:
      "Real-time location viewing, retail catalog browsing, and live transit tracking on native Android devices.",
    designDecisions: [
      "Native Java implementation for optimal device performance",
      "Map and Location API integration with lifecycle-aware services",
      "Adaptive UI components engineered for varying retail device sizes"
    ],
    results: [
      { stat: "Real-Time", label: "Map & Location Tracking" },
      { stat: "Adaptive", label: "Native Android Interfaces" }
    ],
    impact:
      "Significantly enhanced consumer engagement and operational transit visibility through robust native Android engineering."
  },
  {
    slug: "core-mobile-cloud-reply",
    title: "Core Mobile & Cloud Service Systems",
    client: "Reply",
    category: "Mobile Platforms & AWS Cloud Integration",
    year: "2026",
    role: "Software Engineer",
    timeline: "Mar 2022 — Jul 2026",
    platforms: ["Android", "AWS Cloud"],
    description:
      "Analyzed and resolved customer-reported technical issues within core mobile applications using ticket tools, AWS CloudWatch, and S3 backend log investigations.",
    tools: ["AWS CloudWatch", "AWS S3", "Mobile Platforms", "Application Profiling", "Debugging", "Bug Fixing"],
    thumbnail: "/images/project-fmft.jpg",
    heroImage: "/images/project-fmft.jpg",
    accentColor: "#7c3aed",
    layoutType: "right",
    overview:
      "Engineered system stability solutions for core mobile platform applications at Reply, conducting deep investigations into backend logs via AWS CloudWatch and S3.",
    problem:
      "Production mobile applications at scale encounter complex edge-case technical issues that require deep-dive log investigations and rigorous profiling.",
    goals: [
      "Analyze and resolve customer-reported technical issues via specialized tools",
      "Conduct in-depth investigations into backend logs using AWS CloudWatch and S3",
      "Profile application layers and collaborate cross-functionally on bug fixes"
    ],
    solution:
      "Led end-to-end cloud and mobile log investigations, profiled application layers for performance bottlenecks, and executed targeted bug fixes.",
    research: {
      methodology: "Cloud Log Telemetry & Application Profiling",
      keyFindings: [
        "Correlating mobile client traces with AWS CloudWatch logs accelerates root-cause identification",
        "Profiling application memory and CPU layers prevents runtime degradation",
        "Cross-functional bug triage delivers long-term system stability"
      ],
      userQuote: {
        text: "Collaborated with cross-functional teams to bug-fix, debug, and profile application layers to ensure stability and smooth system operations.",
        author: "Engineering Focus",
        role: "Software Engineer"
      }
    },
    userFlowSummary:
      "Ticket reception -> CloudWatch & S3 log investigation -> Application profiling -> Code-level bug fixing -> Cross-functional verification.",
    designDecisions: [
      "Systematic log telemetry using AWS CloudWatch and S3",
      "Multi-layer mobile profiling targeting UI and background threads",
      "Collaborative triage workflows with cross-functional engineering teams"
    ],
    results: [
      { stat: "End-to-End", label: "AWS Cloud Log Investigations" },
      { stat: "High Stability", label: "Application Layer Profiling" }
    ],
    impact:
      "Delivered robust mobile platform stability and resolved mission-critical customer-reported technical issues across core mobile applications."
  }
];
