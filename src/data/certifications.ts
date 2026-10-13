export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: string;
  skills?: string[];
  description?: string;
}

export const certificationsList: CertificationItem[] = [
  {
    id: "cert-hacking-ai",
    title: "Hacking AI Application",
    issuer: "Offenso Hackers Academy",
    issueDate: "Issued Jul 2026",
    category: "AI & Cybersecurity",
    skills: ["AI Security", "App Vulnerability Assessment", "Ethical Hacking"],
    description: "Advanced assessment and offensive security auditing for artificial intelligence and machine learning applications."
  },
  {
    id: "cert-aws-cloud",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "Issued Sep 2022",
    category: "Cloud Architecture",
    skills: ["AWS Cloud", "AWS CloudWatch", "AWS S3", "Cloud Security"],
    description: "Validation of overall AWS cloud platform fluency, core architecture, cloud security, and cloud logging services."
  },
  {
    id: "cert-safe-practitioner",
    title: "Certified SAFe® 5 Practitioner",
    issuer: "SAFe by Scaled Agile, Inc.",
    issueDate: "Issued May 2022",
    category: "Agile & Enterprise Practices",
    skills: ["SAFe Framework", "Scaled Agile", "Iterative Delivery", "Continuous Delivery"],
    description: "Professional certification for high-performing Agile teams executing iterations and program increment releases."
  },
  {
    id: "cert-java-me",
    title: "Java (ME) Mobile Edition 1 Mobile Application Developer Certified",
    issuer: "TecMax Group",
    issueDate: "Issued Aug 2018",
    category: "Mobile Application Development",
    skills: ["Java ME", "Mobile Application Architecture", "Embedded Mobile Systems"],
    description: "Certified competency in lightweight mobile application engineering and native mobile architecture."
  },
  {
    id: "cert-java-se8",
    title: "Java SE 8 Programmer",
    issuer: "STED Council",
    issueDate: "Issued Aug 2016",
    category: "Core Software Engineering",
    skills: ["Java SE 8", "OOP Design", "JVM Runtime", "Application Logic"],
    description: "Standardized programming certification validating core Java language constructs, object-oriented design, and multithreading."
  },
  {
    id: "cert-nit-web-design",
    title: "Web Design Specialist Certification",
    issuer: "National Institute of Technology Tiruchirappalli (NIT Trichy)",
    issueDate: "Issued Mar 2015",
    category: "Web & UI Systems",
    skills: ["Web Design", "UI Layouts", "Front-End Systems", "Wireframe Implementation"],
    description: "Specialist certification focusing on modern responsive layout architectures, UI styling, and design implementation."
  },
  {
    id: "cert-nit-bulls-bears",
    title: "Bulls and Bears",
    issuer: "National Institute of Technology, Tiruchirappalli (NIT Trichy)",
    issueDate: "Issued Mar 2015",
    category: "Financial Markets & Analytics",
    skills: ["Financial Analysis", "Quantitative Evaluation", "Market Dynamics"],
    description: "Academic certification from NIT Trichy evaluating stock trends, financial market analytics, and strategic decision making."
  },
  {
    id: "cert-ncc-cadet",
    title: "NCC cadet",
    issuer: "NATIONAL CADET CORPS - India",
    issueDate: "Issued Apr 2008",
    category: "Leadership & Tactical Discipline",
    skills: ["Military Training", "Self Defense Instruction"],
    description: "National Cadet Corps discipline, tactical field operations, military drill instruction, leadership, and self-defense training."
  }
];
