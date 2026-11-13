import {
  Code2,
  Cpu,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Layout,
  Server,
  Boxes,
  Globe,
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Trophy,
  Users,
  FolderGit2,
  Sparkles,
  ArrowUpRight,
  Download,
  ExternalLink,
  Award,
  Wrench,
  Brain,
  Palette,
  Send,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

export type NavLink = { label: string; href: string };
export type SocialLink = { label: string; href: string; icon: LucideIcon };
export type SkillGroup = { label: string; icon: LucideIcon; items: string[] };
export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location: string;
  description: string;
  points: string[];
  stack: string[];
};
export type ProjectItem = {
  title: string;
  tagline: string;
  period: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};
export type AchievementDownload = {
  label: string;
  href: string;
  filename?: string;
};
export type AchievementItem = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  downloads?: AchievementDownload[];
  href?: string;
};

export const profile = {
  name: 'Gaurika Pareek',
  shortName: 'Gaurika',
  initials: 'GP',
  title: 'B.Tech Computer Science & Engineering',
  status: 'Open to full-time roles in India and remote',
  tagline: '',
  heroDescription: 'Building reliable backend systems, ETL pipelines, and applied machine learning models.',
  intro:
    "Hi, I'm Gaurika Pareek, a B.Tech CSE '27 student at Poornima Institute of Engineering and Technology (PIET), Jaipur. I'm passionate about C++, DSA, Java, Python, AI & Machine Learning and Data Engineering, and I love exploring web development and building real-world projects.",
  location: 'Jaipur, India',
  email: 'gaurikapareek12@gmail.com',
  github: 'https://github.com/GAURIKAPAREEK',
  linkedin: 'https://www.linkedin.com/in/gaurika-pareek/',
  leetcode: 'https://leetcode.com/u/gaurikaapareek_/',
  resumeUrl: '/resume/Gaurika_Pareek_Resume.pdf',
  photo: '/images/profile.webp',
  social: [
    { label: 'GitHub', href: 'https://github.com/GAURIKAPAREEK', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gaurika-pareek/', icon: Linkedin },
    { label: 'LeetCode', href: 'https://leetcode.com/u/gaurikaapareek_/', icon: Code2 },
    { label: 'Email', href: 'mailto:gaurikapareek12@gmail.com', icon: Mail },
  ] as SocialLink[],
};

export const nav: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats = [
  { value: '300+', label: 'Solved on LeetCode' },
  { value: '9.4', label: 'CGPA · B.Tech CSE' },
  { value: '15+', label: 'Certifications' },
];

export const aboutParagraphs: string[] = [
  "Hi, I'm Gaurika Pareek, a B.Tech CSE '27 student at Poornima Institute of Engineering and Technology (PIET), Jaipur. I'm passionate about C++, DSA, Java, Python, AI & Machine Learning and Data Engineering, and I love exploring web development and building real-world projects.",
  "As an active member of the Student Council and Captain of the AWS Cloud Club, I've built strong leadership, organizational and event-management skills, balancing technical depth with community building, student mentoring and collaborative problem-solving.",
  "I've contributed to production-grade applications, engineered scalable ETL pipelines, and taken part in hackathons and machine learning competitions, including a 4th-place finish in the InsightX Kaggle ML Competition. I'm eager to connect with industry professionals, learn from experienced engineers, and contribute to impactful software and data engineering products.",
];

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    icon: Code2,
    items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frontend',
    icon: Palette,
    items: [
      'HTML5',
      'CSS3',
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Bootstrap',
      'Material Design',
    ],
  },
  {
    label: 'Backend & Data',
    icon: Database,
    items: [
      'ETL Pipelines',
      'JSON Schemas',
      'SQL',
      'PostgreSQL',
      'MySQL',
      'Pandas',
      'Plotly',
      'Scikit-learn',
      'Streamlit',
      'Apache Spark (Basics)',
      'Databricks',
    ],
  },
  {
    label: 'Cloud & DevOps',
    icon: Cloud,
    items: [
      'AWS (EC2, RDS, S3)',
      'Microsoft Azure',
      'Git',
      'GitHub',
      'Vercel',
      'Netlify',
      'Google Cloud (Launchpad)',
    ],
  },
  {
    label: 'Core & Coursework',
    icon: Brain,
    items: [
      'Data Structures & Algorithms',
      "OOP (C++, Java, Python)",
      'AI / ML',
      'DBMS',
      'Operating Systems',
      'Time & Space Complexity',
    ],
  },
  {
    label: 'Tools & Soft Skills',
    icon: Wrench,
    items: [
      'VS Code',
      'Figma',
      'Canva',
      'AutoCAD',
      'Public Speaking',
      'Teamwork',
      'Leadership',
      'Event Management',
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Data Engineer Intern',
    org: 'Celebal Technologies',
    period: 'June 2026 — July 2026',
    location: 'Remote',
    description:
      'Working on Python, SQL, and enterprise data processing concepts, transformations, and analytical problem-solving.',
    points: [
      'Worked with Python and SQL for data processing, filtering, grouping, transformations, and analytical problem-solving.',
      'Applied SQL concepts including joins, aggregations, subqueries, CTEs, and window functions.',
      'Worked with data cleaning, validation, exploration, and Apache Spark / Databricks fundamentals.',
      'Collaborated with developers to design algorithms and system flowcharts for enterprise modules.',
    ],
    stack: ['Python', 'SQL', 'Pandas', 'Apache Spark', 'Databricks', 'ETL'],
  },
  {
    role: 'Software Developer Intern',
    org: 'Vaibhav Global Limited',
    period: 'June 2025 — July 2025',
    location: 'Jaipur, Rajasthan',
    description:
      'Designed and built inventory systems, RESTful APIs, and scalable ETL pipelines.',
    points: [
      'Designed and implemented RESTful APIs with JSON-based schemas and CRUD operations for inventory systems.',
      'Built an ETL pipeline processing 10k+ records, reducing billing errors by 95% and improving data accuracy.',
      'Engineered scalable data flow with real-time stock synchronization.',
      'Followed SDLC practices and participated in code reviews and debugging for backend modules.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'ETL', 'Tailwind CSS'],
  },
  {
    role: 'Frontend Developer Intern',
    org: 'QDOM Technologies',
    period: 'June 2024',
    location: 'Jaipur, Rajasthan',
    description:
      'Developed responsive user interfaces and optimized frontend performance.',
    points: [
      'Developed responsive websites using HTML, CSS, and JavaScript.',
      'Built reusable, responsive UI components with React, improving maintainability and cross-browser compatibility.',
      'Optimized UI layouts and styling, improving page performance by 25% and enhancing user experience.',
    ],
    stack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'DataSentinel — Data Analytics & Monitoring Dashboard',
    tagline: 'Full-Stack Analytics & Business Reporting',
    period: 'July 2026',
    description:
      'Developed a full-stack analytics platform with data ingestion and interactive visualizations for efficient business reporting. Implemented secure authentication, role-based access control, and exportable reports.',
    tags: ['Python', 'Streamlit', 'SQL', 'Pandas', 'Plotly', 'OpenPyXL'],
    href: 'https://datasentinel-dataanalysis.streamlit.app/',
    repo: 'https://github.com/GAURIKAPAREEK/DataSentinel',
  },
  {
    title: 'Inventory Billing System',
    tagline: 'Inventory Management & Real-Time Sync',
    period: 'June 2025',
    description:
      'Designed JSON schemas, CRUD operations, and an ETL pipeline for inventory transformation. Built a scalable React architecture with real-time stock synchronization and billing workflow.',
    tags: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'JSON', 'ETL'],
    href: 'https://vglbillingsystem.netlify.app/',
    repo: 'https://github.com/GAURIKAPAREEK/Billing-System',
  },
  {
    title: 'Faculty Leave Management System',
    tagline: 'Academic Administration Platform',
    period: 'September 2024',
    description:
      'Implemented client-side persistence and multi-entity rendering for faculty profiles, leave schedule allocation, and attendance records.',
    tags: ['HTML', 'CSS', 'JavaScript', 'DOM API'],
    href: 'https://eduflexsystem.netlify.app/',
    repo: 'https://github.com/GAURIKAPAREEK/Faculty-Leave-Management-System',
  },
  {
    title: 'Car Rental Management System',
    tagline: 'Vehicle Rental & Booking Platform',
    period: 'July 2024',
    description:
      'Responsive rental platform featuring an interactive booking flow, vehicle availability tracking, and a clean UI for car selection and reservation management.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    href: 'https://aurelia-car-rental.site.je/',
    repo: 'https://github.com/GAURIKAPAREEK/Car-Rental-Management-System',
  },
];

export const achievements: AchievementItem[] = [
  {
    title: 'Ranked 4th, InsightX Kaggle ML Inter-College Competition',
    issuer: 'ACM Student Chapter, LNMIIT / Kaggle',
    year: '2026',
    description:
      'Built an end-to-end regression model from data ingestion to evaluation, securing 4th place out of all competing collegiate teams.',
    downloads: [
      {
        label: 'Download Certificate',
        href: '/certificates/insightx-kaggle-ml.pdf',
        filename: 'insightx-kaggle-ml.pdf',
      },
    ],
  },
  {
    title: 'Completed Google Cloud Career Launchpad, Cloud Engineer Track',
    issuer: 'Google Cloud',
    year: '2026',
    description:
      'Successfully completed all courses and hands-on labs in the Google Cloud Career Launchpad Cloud Engineer track.',
    downloads: [
      {
        label: 'Download Certificate',
        href: '/certificates/google-cloud-career-launchpad.pdf',
        filename: 'google-cloud-career-launchpad.pdf',
      },
    ],
  },
  {
    title: 'NPTEL Certified: Soft Skills Development',
    issuer: 'NPTEL / IIT Kharagpur',
    year: '2026',
    description:
      'Certified Elite in Soft Skills Development covering interpersonal communication, team dynamics, workplace leadership, and presentation skills.',
    downloads: [
      {
        label: 'Download Certificate',
        href: '/certificates/nptel-soft-skills-development.pdf',
        filename: 'nptel-soft-skills-development.pdf',
      },
    ],
  },
  {
    title: 'NPTEL Silver Medallist: Fundamentals of OOP | The Joy of Computing Using Python',
    issuer: 'NPTEL / IIT Roorkee & IIT Madras',
    year: '2025 – 2026',
    description:
      'Awarded Elite Silver Medal in Fundamentals of Object-Oriented Programming (C++, Java, Python) and Elite Silver Medal in The Joy of Computing using Python.',
    downloads: [
      {
        label: 'OOP Certificate',
        href: '/certificates/nptel-fundamentals-of-oop.pdf',
        filename: 'nptel-fundamentals-of-oop.pdf',
      },
      {
        label: 'Python Certificate',
        href: '/certificates/nptel-joy-of-computing-python.pdf',
        filename: 'nptel-joy-of-computing-python.pdf',
      },
    ],
  },
  {
    title: 'NPTEL Certified: Data Structures and Algorithms using Java',
    issuer: 'NPTEL / IIT Kharagpur',
    year: '2025',
    description:
      'Successfully completed the rigorous 12-week NPTEL course covering data structures, algorithmic complexity, recursion, and graph algorithms in Java.',
    downloads: [
      {
        label: 'Download Certificate',
        href: '/certificates/nptel-dsa-java.pdf',
        filename: 'nptel-dsa-java.pdf',
      },
    ],
  },
  {
    title: 'NPTEL Certified: German - I',
    issuer: 'NPTEL / IIT Madras',
    year: 'Jan – Apr 2025',
    description:
      'Successfully completed the 12-week NPTEL course in German - I with credit recommendations and strong foundational language proficiency.',
    downloads: [
      {
        label: 'Download Certificate',
        href: '/certificates/german-language.pdf',
        filename: 'german-language.pdf',
      },
    ],
  },
  {
    title: 'Solved 300+ problems on LeetCode (Data Structures & Algorithms)',
    issuer: 'LeetCode',
    year: '2024 – Present',
    description:
      'Practiced 300+ algorithm and data structure problems covering dynamic programming, graphs, trees, two-pointer techniques, and greedy strategies.',
    href: 'https://leetcode.com/u/gaurikaapareek_/',
  },
];

export const sectionMeta = {
  about: { icon: GraduationCap, eyebrow: '', title: 'About Me' },
  skills: { icon: Terminal, eyebrow: '', title: 'Skills' },
  experience: { icon: Briefcase, eyebrow: '', title: 'Experience' },
  projects: { icon: FolderGit2, eyebrow: '', title: 'Projects' },
  achievements: { icon: Trophy, eyebrow: '', title: 'Achievements' },
  contact: { icon: Mail, eyebrow: '', title: 'Contact' },
};

export const miscIcons = {
  MapPin,
  ArrowUpRight,
  Boxes,
  Globe,
  GitBranch,
  Sparkles,
  Download,
  ExternalLink,
  Award,
  Send,
  CheckCircle2,
};
