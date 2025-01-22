export interface ProjectsSectionProps {
  className?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
  link: string;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}
