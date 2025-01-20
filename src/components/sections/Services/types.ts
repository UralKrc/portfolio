export interface ServicesSectionProps {
  className?: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  offerings: string[];
}

export interface ServiceCardProps {
  service: Service;
  index: number;
}
