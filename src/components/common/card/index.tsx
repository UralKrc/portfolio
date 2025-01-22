"use client";

import { BaseProps } from "@/types/common";
import { motion } from "framer-motion";
import { FC } from "react";

interface CardProps extends BaseProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  animate?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  variant?: "default" | "dark" | "transparent";
}

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const variants = {
  default: "bg-white dark:bg-gray-800",
  dark: "bg-gray-900/50",
  transparent: "bg-transparent",
};

export const Card: FC<CardProps> = ({
  children,
  className = "",
  href,
  onClick,
  animate = false,
  padding = "md",
  variant = "default",
}) => {
  const isClickable = href || onClick;

  const content = (
    <motion.div
      whileHover={animate ? { scale: 1.02 } : undefined}
      whileTap={animate ? { scale: 0.98 } : undefined}
      className={`
        ${paddings[padding]}
        ${variants[variant]}
        rounded-2xl
        backdrop-blur-sm
        transition-all
        duration-200
        ${isClickable ? "hover:shadow-lg cursor-pointer" : ""}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};
