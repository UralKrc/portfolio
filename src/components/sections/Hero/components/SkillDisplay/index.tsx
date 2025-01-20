"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { SkillDisplayProps } from "./types";

export const SkillDisplay: FC<SkillDisplayProps> = ({ skills }) => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <div className="relative h-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={skills[currentSkillIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-xl whitespace-nowrap font-mono text-purple-600 dark:text-purple-400">
              {skills[currentSkillIndex]}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
