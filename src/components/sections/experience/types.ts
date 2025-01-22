export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
  industry: string;
}

export interface ExperienceSectionProps {
  className?: string;
}

export interface ExperienceTabProps {
  experience: Experience;
  isActive: boolean;
  onClick: () => void;
}
