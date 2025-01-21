"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { ExperienceTabProps } from "../../types";

export const ExperienceTab: FC<ExperienceTabProps> = ({
  experience,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-4 text-left min-w-[200px] transition-all duration-300 ${
        isActive
          ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20"
          : "text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10"
      }`}
    >
      <div className="relative z-10">
        <p className="font-mono text-sm mb-1">{experience.company}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {experience.period}
        </p>
      </div>
      {isActive && (
        <motion.div
          layoutId="active-tab"
          className="absolute inset-0 border-l-2 lg:border-l-4 border-purple-600 dark:border-purple-400"
        />
      )}
    </button>
  );
};
