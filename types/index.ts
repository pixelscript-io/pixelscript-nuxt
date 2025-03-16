export interface NavItem {
  label: string;
  route: string;
  hotkey: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Testimonial {
  author: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export type Position = 'top' | 'bottom'; 