export interface BaseProps {
  className?: string;
}

export interface SectionProps extends BaseProps {
  id?: string;
}

export interface IconProps extends BaseProps {
  size?: number;
  color?: string;
}

export interface ButtonProps extends BaseProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}
