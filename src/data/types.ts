export interface ProjectMetric {
  label: string;
  type: 'positive' | 'neutral' | 'negative';
}

export interface Project {
  id: string;
  year?: string;
  type?: string;
  role?: string;
  title: string;
  client?: string;
  clientLogo?: string;
  description: string;
  longDescription: string;
  challenge?: string;
  solution?: string;
  technologies: string[];
  metrics?: ProjectMetric[];
  imageUrl?: string;
  imageUrls?: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'fullstack' | 'backend' | 'frontend' | 'data-engineering';
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
  proficiency: 'expert' | 'advanced' | 'intermediate';
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  location?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  socialLinks: SocialLink[];
}

