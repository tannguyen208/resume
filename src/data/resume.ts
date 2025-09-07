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
    name: "Nguyễn Văn A",
    title: "Full Stack Developer",
    email: "nguyenvana@email.com",
    phone: "+84 123 456 789",
    location: "Hồ Chí Minh, Việt Nam",
    avatar: "/src/assets/avatar.png",
    summary: "Full Stack Developer với 3+ năm kinh nghiệm phát triển web applications. Chuyên về React, Node.js và cloud technologies. Đam mê tạo ra những sản phẩm chất lượng cao và user-friendly."
  },
  experience: [
    {
      company: "Tech Company ABC",
      position: "Senior Frontend Developer",
      duration: "2022 - Hiện tại",
      description: [
        "Phát triển và maintain React applications cho 50,000+ users",
        "Tối ưu hóa performance, giảm loading time 40%",
        "Mentor junior developers và review code",
        "Implement CI/CD pipeline và automated testing"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Jest", "Docker"]
    },
    {
      company: "Startup XYZ",
      position: "Full Stack Developer",
      duration: "2021 - 2022",
      description: [
        "Xây dựng MVP từ đầu với React và Node.js",
        "Thiết kế và implement RESTful APIs",
        "Setup database và deploy lên AWS",
        "Làm việc với team 5 người trong môi trường Agile"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS", "Git"]
    },
    {
      company: "Digital Agency",
      position: "Frontend Developer",
      duration: "2020 - 2021",
      description: [
        "Phát triển responsive websites cho clients",
        "Convert PSD designs thành HTML/CSS/JS",
        "Tối ưu SEO và performance",
        "Support và maintain existing projects"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "WordPress"]
    }
  ],
  education: [
    {
      school: "Đại học Bách Khoa TP.HCM",
      degree: "Cử nhân Công nghệ Thông tin",
      year: "2016 - 2020",
      gpa: "3.5/4.0"
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Sass"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "Vercel", "Jest", "Cypress", "Figma"]
    }
  ],
  projects: [
    {
      name: "E-commerce Platform",
      description: "Full-stack e-commerce platform với React, Node.js và MongoDB. Hỗ trợ payment gateway, inventory management và admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      link: "https://ecommerce-demo.com",
      github: "https://github.com/username/ecommerce"
    },
    {
      name: "Task Management App",
      description: "Real-time task management application với drag & drop, team collaboration và notifications.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "https://github.com/username/taskmanager"
    },
    {
      name: "Weather Dashboard",
      description: "Responsive weather dashboard với location-based forecasts và interactive charts.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
      link: "https://weather-dashboard.netlify.app"
    }
  ],
  languages: [
    { language: "Tiếng Việt", level: "Bản ngữ" },
    { language: "English", level: "Trung cấp" },
    { language: "日本語", level: "Sơ cấp" }
  ]
};
