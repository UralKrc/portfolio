export interface ProjectsSectionProps {
  className?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  external: string | null;
  github: string | null;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}
