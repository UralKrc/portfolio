"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { FEATURED_PROJECTS } from "./constants/projects";
import { ProjectsSectionProps } from "./types";

export const Projects: FC<ProjectsSectionProps> = ({ className }) => {
  return (
    <section id="projects" className="py-32 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-12">
            <span className="font-mono text-purple-600 dark:text-purple-400">
              03.
            </span>
            Some Things I've Built
          </h2>

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
