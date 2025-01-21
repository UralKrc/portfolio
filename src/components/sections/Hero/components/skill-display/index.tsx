import { BaseProps } from "@/types/common";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

export interface SkillDisplayProps extends BaseProps {
  skills: readonly string[];
}

export const SkillDisplay: FC<SkillDisplayProps> = ({
  skills,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
    }, 2000); // Change skill every 2 seconds

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[100px] ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-mono text-purple-400 text-center"
        >
          {skills[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
