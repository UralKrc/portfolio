"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { CORE_SKILLS } from "../../constants/skills";
import { useSkillAnimation } from "../../hooks/useSkillAnimation";

export const SkillsList: FC = () => {
  const { skillVariants } = useSkillAnimation();

  return (
    <ul className="grid grid-cols-3 gap-2 mt-6">
      {CORE_SKILLS.map((skill, index) => (
        <motion.li
          key={skill.name}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={skillVariants}
          className="flex items-center gap-2"
        >
          <span className="text-purple-600 dark:text-purple-400">▹</span>
          <span className="font-mono text-sm">{skill.name}</span>
        </motion.li>
      ))}
    </ul>
  );
};
