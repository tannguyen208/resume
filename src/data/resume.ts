export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    avatar?: string;
    summary: string;
  };
  experience: {
    company: string;
    position: string;
    duration: string;
    description: string[];
    technologies: string[];
  }[];
  education: {
    school: string;
    degree: string;
    year: string;
    gpa?: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
  }[];
  languages: {
    language: string;
    level: string;
  }[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Nguyen Anh Tan",
    title: "Senior Frontend Engineer",
    email: "tanna48pct@gmail.com",
    phone: "+84 357833112",
    location: "Ho Chi Minh City, Vietnam",
    avatar: "/src/assets/avatar.png",
    summary:
      "Senior Frontend Engineer (~8 yrs) specializing in React/TypeScript and scalable UI architecture, with backend experience across Node.js and REST APIs. Ships polished, accessible products and works effectively across the full stack."
  },
  experience: [
    {
      company: "Vitalify Asia",
      position: "Software Engineer",
      duration: "Oct 2022 – Present",
      description: [
        "Built and shipped 4 web applications using ReactJS, Vue.js, and Next.js within agile teams of 3–6 engineers, with 2 becoming the company's most successful client products.",
        "Integrated LLM-powered features, including conversational chatbots, into client products while owning the frontend architecture and reusable component libraries.",
        "Designed an internal AI agent and automation framework — reusable \"skills\" and workflows (plan, design system, code, review, deploy, ship) using Claude and Codex to accelerate delivery across projects.",
        "Designed and integrated REST APIs and backend services with Node.js / NestJS and PostgreSQL, delivering features end to end across the stack."
      ],
      technologies: ["ReactJS", "Vue.js", "Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL"]
    },
    {
      company: "FPT Software",
      position: "Software Engineer (Frontend Team Lead)",
      duration: "Aug 2021 – Jan 2022",
      description: [
        "Led a cross-functional team of 7 engineers building web applications for enterprise clients, with a React front end and a .NET backend.",
        "Drove front-end architecture, code reviews, and technical decisions, ensuring consistent quality and on-time delivery.",
        "Integrated React front ends with .NET REST APIs and mentored teammates on React best practices."
      ],
      technologies: ["React", "Redux", ".NET", "REST APIs"]
    },
    {
      company: "Sutrix Solutions",
      position: "Software Developer",
      duration: "Jan 2021 – Apr 2021",
      description: [
        "Developed web features with React and built a cross-platform mobile app with Flutter, delivering responsive UIs to client specifications."
      ],
      technologies: ["React", "Flutter"]
    },
    {
      company: "FPT Software",
      position: "Software Engineer",
      duration: "Sep 2019 – Oct 2020",
      description: [
        "Developed and maintained web application features for outsourced enterprise projects using Angular, contributing across the full development lifecycle.",
        "Built responsive UIs and integrated REST APIs, collaborating with QA to diagnose and resolve defects."
      ],
      technologies: ["Angular", "OpenLayers", "REST APIs"]
    },
    {
      company: "Softech",
      position: "Software Developer",
      duration: "Jul 2018 – Mar 2019",
      description: [
        "Built web and mobile features using React and React Native as part of the development team, gaining hands-on experience across the full development cycle.",
        "Implemented responsive interfaces and resolved bugs to improve application stability and usability."
      ],
      technologies: ["React", "React Native"]
    }
  ],
  education: [
    {
      school: "Aptech Computer Education (Softech Aptech)",
      degree: "Diploma in Software Engineering",
      year: "2016 – 2018"
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "PHP", "C#", "Dart", "HTML/CSS", "SQL"]
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Redux", "React Query", "Tailwind CSS", "styled-components", "OpenLayers", "Vue", "Angular"]
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter"]
    },
    {
      category: "Backend",
      items: ["Node.js", "NestJS", "Express", "REST APIs", "GraphQL", ".NET", "PHP / WordPress"]
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Firebase"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "CI/CD"]
    },
    {
      category: "Tools",
      items: ["Git", "Jest", "Vite / Webpack", "Figma"]
    }
  ],
  projects: [
    {
      name: "Colors",
      description:
        "Web app that generates family trees from PDF documents. As full-stack developer in a 5-person team, contributed to UI design and built core features with Vue and NestJS.",
      technologies: ["Vue", "NestJS", "AWS"]
    },
    {
      name: "OMRON Pressure",
      description:
        "Full-stack development of a blood pressure measurement app within a 4-person team, implementing core features end to end with ReactJS and PHP.",
      technologies: ["ReactJS", "PHP", "AWS"]
    },
    {
      name: "NTA UniNext",
      description:
        "Tour-management platform for a third-party travel client (32-person project). As Frontend Team Leader, led a 7-person frontend team, defined the front-end architecture, implemented core features, and owned code reviews — integrating Navitime mapping APIs and MapScript.",
      technologies: ["ReactJS", "Redux", "Navitime API", "MapScript"]
    },
    {
      name: "Gomo PH",
      description:
        "Cross-platform mobile app for purchasing 5G SIMs with international connectivity. Built the Flutter (Dart) client.",
      technologies: ["Flutter", "Dart"]
    },
    {
      name: "Dialog ORION",
      description:
        "Real-time web app for tracking workers' locations and pushing danger-alert notifications. Built the Angular + OpenLayers front end, rendering real-time location data streamed from ~3,000 beacons per second.",
      technologies: ["Angular", "OpenLayers", ".NET"]
    },
    {
      name: "Ames English",
      description:
        "Mobile app for an English-learning platform for students and teachers, with guided practice across all four skills — listening, speaking, reading, and writing. Developed the React Native client in a 4-person team.",
      technologies: ["React Native", ".NET"]
    }
  ],
  languages: [
    { language: "Vietnamese", level: "Native" },
    { language: "English", level: "Professional working" }
  ]
};
