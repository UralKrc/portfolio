export interface ContactSectionProps {
  className?: string;
}

export interface ContactButtonProps {
  icon: React.ReactNode;
  href: string;
  children: React.ReactNode;
  external?: boolean;
}
