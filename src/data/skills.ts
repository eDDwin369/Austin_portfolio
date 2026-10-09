export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ToolItem {
  name: string;
  category: string;
  proficiency: number;
  highlight?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Platforms",
    description: "Architecting native and cross-platform mobile systems with adaptive interfaces and robust lifecycle management.",
    skills: [
      "Android Development",
      "Kotlin",
      "Flutter",
      "Java",
      "Activities & Fragments",
      "UI & Layouting",
      "Adaptive Layouts",
      "Map/Location Integration"
    ]
  },
  {
    title: "Cloud & Engineering Skills",
    description: "Investigating backend logs, profiling application layers, and ensuring smooth cloud-connected mobile operations.",
    skills: [
      "AWS (CloudWatch, S3)",
      "Front-End Development",
      "Bug Fixing & Troubleshooting",
      "Deep Debugging",
      "Application Profiling",
      "Wireframe Translation"
    ]
  },
  {
    title: "Core Strengths",
    description: "Professional practices and interpersonal qualities driving high-quality engineering team outcomes.",
    skills: [
      "Teamwork",
      "Leadership",
      "Effective Communication",
      "Creativity & Innovation",
      "Cross-functional Collaboration",
      "Quality-focused Operations"
    ]
  }
];

export const toolsList: ToolItem[] = [
  { name: "Android Development", category: "Mobile Platforms", proficiency: 96, highlight: "Native Android SDK, Architecture & App Lifecycle" },
  { name: "Kotlin", category: "Core Language", proficiency: 94, highlight: "Modern Android Architecture, Coroutines & Clean Code" },
  { name: "Java", category: "Core Language", proficiency: 92, highlight: "Native Android App Development & Object-Oriented Design" },
  { name: "Flutter", category: "Cross-Platform", proficiency: 88, highlight: "Cross-Platform UI & Widget Component Architecture" },
  { name: "AWS CloudWatch & S3", category: "Cloud Services", proficiency: 90, highlight: "Cloud Log Investigations & Storage Management" },
  { name: "UI & Adaptive Layouting", category: "Front-End", proficiency: 95, highlight: "Activities, Fragments & Responsive Mobile Screens" },
  { name: "Map / Location Integration", category: "Mobile Services", proficiency: 90, highlight: "Real-time Location Tracking & Geolocation APIs" },
  { name: "Profiling & Debugging", category: "Engineering", proficiency: 94, highlight: "Performance Profiling, Ticket Resolution & Bug Fixing" }
];

export const statsList = [
  { value: "8+", label: "Years Experience", description: "Demonstrated career track record across engineering and operations" },
  { value: "5", label: "Companies", description: "Reply, Triaxia Infotech, Descpro Technologies, Turbosoft & Future Group" },
  { value: "3", label: "Languages", description: "Multilingual communication in English, Malayalam, and Tamil" },
  { value: "B.E.", label: "Engineering Degree", description: "Computer Science & Engineering graduate (Hindustan Institute of Technology)" }
];
