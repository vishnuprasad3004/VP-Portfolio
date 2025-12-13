export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  link?: string;
  role?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
