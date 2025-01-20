export interface OpenSourceSectionProps {
  className?: string;
}

export interface OpenSourceProject {
  title: string;
  description: string;
  repoName: string;
  icon: "game" | "landing" | "trello" | "task" | "hotel" | "portfolio";
  tech: string[];
}

export interface ProjectCardProps {
  project: OpenSourceProject;
}
