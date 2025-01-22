"use client";

import { ButtonProps } from "@/types/common";
import { FC } from "react";

const variants = {
  primary:
    "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white",
  secondary:
    "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100",
  outline:
    "border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

export const Button: FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  onClick,
  href,
  external,
}) => {
  const baseClassName = `
    ${variants[variant]}
    ${sizes[size]}
    font-medium
    rounded-lg
    transition-all
    duration-200
    hover:shadow-lg
    hover:-translate-y-0.5
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:transform-none
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={baseClassName}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={baseClassName}
    >
      {children}
    </button>
  );
};
