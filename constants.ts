import { Project, SkillCategory, Education, Certification } from './types';
import { 
  BarChart3, 
  Database, 
  Code2, 
  BrainCircuit, 
  LayoutDashboard,
  GitBranch
} from 'lucide-react';

export const RESUME_CONTEXT = `
Name: Vishnu Prasad J
Title: Data Analyst | Power BI & SQL Specialist | ML Engineer
Contact: +917010259813, njvishnun@gmail.com
Location: 3, First Street, Nehru Nagar, Coimbatore
GitHub: https://github.com/vishnuprasad3004

Summary: Qualified and professional Data Analyst and ML Engineer with experience in building AI-powered applications, data visualization, and full-stack development.

Skills:
- AI/ML: Google Genkit, Gemini Models, TensorFlow, Scikit-learn
- Data Visualization: Power BI, Tableau, Recharts
- Web/Mobile: Next.js, React.js, Flutter, TypeScript, Tailwind CSS
- Backend: Node.js, Firebase, MongoDB, PostgreSQL
- Tools: Git, Google Maps API, Stripe

Education:
- Bachelor of Technology (2023-2027), Sri Shakthi Institute of Engineering and Technology.
- Secondary School (2020-2022), G Ramaswamy Naidu Matriculation Higher Secondary School.

Projects:
1. Marine Species Tracker (AI & Conservation):
   - Tech: Next.js 15, TypeScript, MongoDB, Mapbox, Google Genkit AI.
   - Role: Full Stack Developer.
   - Description: A biodiversity tracking platform with AI voice assistant for species identification and interactive real-time mapping.

2. FuelFlex Transport Platform (Logistics & AI):
   - Tech: Flutter (Mobile), Next.js (Backend), Genkit (AI Pricing), Firebase.
   - Role: Lead Developer.
   - Description: Smart goods transport marketplace. Features AI-powered price estimation using Gemini models, vehicle fleet management, and real-time tracking.

3. Gym Management System (Web & Analytics):
   - Tech: HTML/CSS/JS, Power BI.
   - Role: Frontend Developer & Data Analyst.
   - Description: Gym management UI integrated with Power BI dashboards for tracking member growth, revenue, and trainer performance.

4. ILF (Indian Legal Fertility) Platform (Consultancy Project):
   - Tech: React.js, Firebase, AI Chatbot, Stripe.
   - Role: Full Stack Developer.
   - Description: Consultancy project. A multi-role web platform for fertility clinics with appointment scheduling and voice services.

5. Retail Revenue Visualization:
   - Tech: Power BI, DAX, Excel.
   - Role: Data Analyst.
   - Description: Interactive dashboards for revenue trends and customer performance.
`;

export const PROJECTS: Project[] = [
  {
    title: "Marine Species Tracker",
    category: "AI & Conservation Tech",
    role: "Full Stack Developer",
    description: "A comprehensive biodiversity platform featuring AI-powered voice assistance for species identification, real-time interactive mapping via Mapbox, and population trend analytics.",
    technologies: ["Next.js 15", "Google Genkit AI", "MongoDB", "Mapbox", "TypeScript"],
    link: "https://ocean-wise.vercel.app"
  },
  {
    title: "FuelFlex Transport Platform",
    category: "Mobile & AI Backend",
    role: "Lead Developer",
    description: "A smart logistics marketplace connecting transporters and goods owners. Features AI-driven price estimation (Genkit), real-time fleet tracking, and a cross-platform Flutter app.",
    technologies: ["Flutter", "Next.js", "Genkit AI", "Firebase", "Google Maps API"],
    link: "https://github.com/vishnuprasad3004"
  },
  {
    title: "Gym Management System",
    category: "Web & Business Intelligence",
    role: "Frontend & Analyst",
    description: "A modern gym management interface integrated with Power BI dashboards to track membership growth, revenue trends, and trainer performance metrics.",
    technologies: ["Power BI", "JavaScript", "HTML/CSS", "Data Analytics"],
    link: "https://github.com/vishnuprasad3004/Gym-Management"
  },
  {
    title: "ILF (Indian Legal Fertility)",
    category: "Consultancy Project",
    role: "Full Stack Developer",
    description: "A production-grade consultancy platform for fertility clinics featuring appointment scheduling, secure payments (Stripe/UPI), and AI support chatbots.",
    technologies: ["React.js", "Firebase", "Node.js", "Stripe", "AI Chatbot"],
    link: "#"
  },
  {
    title: "Retail Revenue Analytics",
    category: "Data Analytics",
    role: "Data Analyst",
    description: "Designed an interactive dashboard in Power BI to analyze revenue trends across different geographies. Utilized Power Query and DAX for complex data transformation.",
    technologies: ["Power BI", "DAX", "Power Query", "Excel", "Data Cleaning"],
    link: "#"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    icon: "BrainCircuit",
    skills: ["Google Genkit", "Gemini API", "Scikit-learn", "Python", "TensorFlow", "Predictive Analytics"]
  },
  {
    name: "Data Analysis & BI",
    icon: "BarChart3",
    skills: ["Power BI", "Tableau", "SAP Analytics Cloud", "Excel", "DAX", "Power Query"]
  },
  {
    name: "Full Stack Development",
    icon: "Code2",
    skills: ["Next.js", "React.js", "Flutter", "Node.js", "TypeScript", "Tailwind CSS"]
  },
  {
    name: "Database & Cloud",
    icon: "Database",
    skills: ["Firebase", "MongoDB", "SQL (MySQL/PostgreSQL)", "SAP HANA", "Google Maps API"]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Sri Shakthi Institute of Engineering and Technology",
    degree: "Bachelor of Technology",
    year: "2023 - 2027",
    description: "Focusing on Data Science, Machine Learning, and Software Engineering principles."
  },
  {
    institution: "G Ramaswamy Naidu Matriculation Hr. Sec. School",
    degree: "Secondary School",
    year: "2020 - 2022",
    description: "Foundation in Mathematics and Computer Science."
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Power BI Essentials", issuer: "Simplilearn" },
  { name: "Exploring Data", issuer: "IBM" },
  { name: "Data Analysis Using ChatGPT", issuer: "Udemy" },
  { name: "Scikit-learn & Tableau", issuer: "Udemy" },
  { name: "Product Management & Innovation", issuer: "Udemy" }
];