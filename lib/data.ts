// Portfolio data - Easy to update in one place

export const personalInfo = {
  name: "Shashika Ekanayaka",
  title: "Full Stack Developer",
  subtitle: "Software Engineering Undergraduate | DevOps & Microservices Enthusiast",
  email: "ekanayakespm@gmail.com",
  phone: "+94 717395361",
  location: "Sri Lanka",
  bio: `I'm a Computer Science undergraduate at the University of Colombo School of Computing (UCSC), 
  passionate about building scalable, high-performance software systems. With hands-on experience in 
  full-stack development, microservices architecture, and DevOps practices, I strive to create 
  solutions that push the boundaries of what's possible. My journey spans from crafting elegant 
  frontend experiences to architecting robust backend systems and automating deployment pipelines.`,
  resumeUrl: "#",
  social: {
    github: "https://github.com/shashika",
    linkedin: "https://linkedin.com/in/shashika-ekanayaka",
    portfolio: "#",
  },
};

export const stats = [
  { label: "Years of Learning", value: "4+" },
  { label: "Projects Built", value: "10+" },
  { label: "Technologies Used", value: "25+" },
  { label: "Leadership Roles", value: "5+" },
];

export const experiences = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Aahaas Pvt Ltd",
    period: "2024 - Present",
    type: "Internship",
    description: `Developing comprehensive web and mobile solutions using modern technologies. 
    Building scalable backend services and implementing CI/CD pipelines for automated deployments.`,
    achievements: [
      "Built responsive web applications using React.js and mobile apps with React Native",
      "Developed backend services and APIs using PHP, Laravel, and n8n workflows",
      "Implemented Docker containerization for consistent development and production environments",
      "Configured Nginx reverse proxy for optimized request handling and load balancing",
      "Set up GitHub Actions CI/CD pipelines for automated testing and deployment",
      "Collaborated with cross-functional teams on database integrations and system architecture",
    ],
    technologies: ["React.js", "React Native", "PHP", "Laravel", "n8n", "Docker", "Nginx", "GitHub Actions"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Intendable",
    period: "2023 - 2024",
    type: "Volunteer Intern",
    description: `Contributed to the development of a restaurant rating application, 
    implementing full-stack features from authentication to analytics.`,
    achievements: [
      "Developed mobile application features using React Native",
      "Built robust backend APIs with Spring Boot for rating and analytics systems",
      "Implemented secure authentication and user management systems",
      "Designed and optimized PostgreSQL database schemas",
      "Collaborated using GitHub workflows and code review practices",
      "Wrote comprehensive unit, integration, and E2E tests for quality assurance",
    ],
    technologies: ["React Native", "Spring Boot", "PostgreSQL", "GitHub", "Testing"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Adhyana - Learning Management System",
    description: `A comprehensive ERP-style Learning Management System designed for educational institutions. 
    Features include course management, student tracking, and an advanced Exam Management Module.`,
    longDescription: `Built with a microservices architecture for scalability and maintainability. 
    The system handles thousands of concurrent users with optimized database queries and caching strategies.`,
    technologies: ["Java", "MySQL", "Microservices", "REST APIs", "Docker", "GitHub Actions"],
    category: "Enterprise",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Reid Connect - Event Management System",
    description: `A full-stack event management platform for university events. 
    Includes web dashboard and mobile app for seamless event coordination.`,
    longDescription: `Enables students and organizers to create, manage, and participate in university events. 
    Features real-time notifications, event analytics, and social integration.`,
    technologies: ["React", "React Native", "Spring Boot", "PostgreSQL", "Docker"],
    category: "Full Stack",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Job Listings Platform",
    description: `A modern job seeking and posting platform with real-time features. 
    Includes CV sharing, job matching, and instant messaging between recruiters and candidates.`,
    longDescription: `Built with the MERN stack and Firebase for real-time capabilities. 
    Redux manages complex application state for a smooth user experience.`,
    technologies: ["React", "Express", "MongoDB", "Redux", "Firebase"],
    category: "Web App",
    github: "#",
    live: "#",
    featured: true,
  },
];

export const skills = {
  languages: {
    title: "Languages",
    items: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "C++", level: 75 },
      { name: "C#", level: 70 },
      { name: "SQL", level: 85 },
      { name: "Scala", level: 65 },
      { name: "R", level: 60 },
      { name: "Bash", level: 75 },
      { name: "PowerShell", level: 70 },
    ],
  },
  frameworks: {
    title: "Frameworks & Libraries",
    items: [
      { name: "Spring Boot", level: 85 },
      { name: "React", level: 90 },
      { name: "React Native", level: 85 },
      { name: "Node.js/Express", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Flutter", level: 70 },
      { name: "Laravel", level: 75 },
    ],
  },
  devops: {
    title: "DevOps & Cloud",
    items: [
      { name: "Docker", level: 85 },
      { name: "Nginx", level: 80 },
      { name: "GitHub Actions", level: 85 },
      { name: "AWS", level: 75 },
      { name: "Azure", level: 70 },
      { name: "Linux", level: 80 },
    ],
  },
  tools: {
    title: "Tools & Platforms",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "GitLab", level: 80 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 90 },
    ],
  },
  networking: {
    title: "Networking",
    items: [
      { name: "TCP/IP", level: 80 },
      { name: "DNS", level: 75 },
      { name: "CCNA (ENSA)", level: 75 },
    ],
  },
};

export const leadership = [
  {
    id: 1,
    title: "President",
    organization: "Student Union, UCSC",
    period: "2023 - 2024",
    description: "Led the student union representing thousands of students, organizing major events and advocating for student welfare.",
    icon: "crown",
  },
  {
    id: 2,
    title: "Microsoft Learn Student Ambassador",
    organization: "Microsoft",
    period: "2023 - Present",
    description: "Promoting Microsoft technologies and fostering learning communities among students.",
    icon: "award",
  },
  {
    id: 3,
    title: "Workshop Conductor",
    organization: "UCSC",
    period: "2023 - Present",
    description: "Conducted workshops on GitHub, Git version control, and Project Management best practices.",
    icon: "presentation",
  },
];

export const certifications = [
  {
    id: 1,
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services",
    year: "2024",
    icon: "cloud",
  },
  {
    id: 2,
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2024",
    icon: "cloud",
  },
  {
    id: 3,
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    year: "2023",
    icon: "network",
  },
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];
