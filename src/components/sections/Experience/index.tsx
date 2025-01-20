"use client";

import { motion } from "framer-motion";
import { FC, useState } from "react";
import { ExperienceTab } from "./components/ExperienceTab";
import { experiences } from "./constants/experiences";
import { useExperienceAnimation } from "./hooks/useExperienceAnimation";
import { ExperienceSectionProps } from "./types";

export const Experience: FC<ExperienceSectionProps> = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { contentVariants, listItemVariants } = useExperienceAnimation();

  return (
    <section id="experience" className={`py-24 lg:py-32 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              <span className="font-mono text-purple-600 dark:text-purple-400 mr-4">
                02.
              </span>
              Where I&apos;ve Worked
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-purple-200 dark:from-purple-800 to-transparent" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex sm:flex-col overflow-x-auto sm:overflow-x-visible scrollbar-none">
              <div className="flex sm:flex-col">
                {experiences.map((experience, index) => (
                  <ExperienceTab
                    key={experience.company}
                    experience={experience}
                    isActive={activeTab === index}
                    onClick={() => setActiveTab(index)}
                  />
                ))}
              </div>
            </div>

            <div className="py-2 sm:py-0 sm:pl-8 flex-1 min-h-[420px]">
              <motion.div
                key={activeTab}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
                className="space-y-4"
              >
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                  {experiences[activeTab].role}{" "}
                  <span className="text-purple-600 dark:text-purple-400">
                    @ {experiences[activeTab].company}
                  </span>
                </h3>

                <p className="font-mono text-sm text-gray-500 dark:text-gray-400">
                  {experiences[activeTab].period}
                </p>

                <p className="text-gray-600 dark:text-gray-400">
                  {experiences[activeTab].description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {experiences[activeTab].stack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={listItemVariants}
                      className="px-3 py-1.5 text-sm font-mono rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md
                        bg-gradient-to-r from-purple-100/80 to-pink-100/80 
                        dark:from-purple-900/20 dark:to-pink-900/20 
                        text-purple-700 dark:text-purple-300
                        border border-purple-200/50 dark:border-purple-700/30
                        hover:from-purple-200/80 hover:to-pink-200/80
                        dark:hover:from-purple-800/30 dark:hover:to-pink-800/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
