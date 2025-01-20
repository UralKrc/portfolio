"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { useSkillRotation } from "../hooks/useSkillRotation";
import { SkillDisplayProps } from "../types";

export const SkillDisplay: FC<SkillDisplayProps> = ({ skills }) => {
  const { currentSkill, currentSkillIndex } = useSkillRotation(skills);

  return (
    <div className="w-full h-24 relative overflow-hidden border-t-2 border-b-2 border-purple-500/30">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          key={currentSkillIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-mono text-purple-400"
        >
          {currentSkill}
        </motion.div>
      </div>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
          backgroundSize: "4px 4px",
        }}
      />
    </div>
  );
};
