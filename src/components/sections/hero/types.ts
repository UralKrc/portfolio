export interface HeroSectionProps {
  className?: string;
}

export interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}

export interface SkillDisplayProps {
  skills: readonly string[];
}
