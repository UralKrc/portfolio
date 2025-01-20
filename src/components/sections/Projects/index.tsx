"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { FEATURED_PROJECTS } from "./constants/projects";
import { ProjectsSectionProps } from "./types";

export const Projects: FC<ProjectsSectionProps> = ({ className = "" }) => {
  return (
    <section id="projects" className={`py-24 lg:py-32 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
            <span className="font-mono text-purple-600 dark:text-purple-400 mr-4">
              03.
            </span>
            Some Things I&apos;ve Built
          </h2>
          <div className="flex-grow h-px bg-gradient-to-r from-purple-200 dark:from-purple-800 to-transparent" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-32">
            {FEATURED_PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
