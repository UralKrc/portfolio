export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
  industry: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  metrics: string;
  url?: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  offerings: string[];
}
