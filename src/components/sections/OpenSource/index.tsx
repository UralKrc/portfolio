"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { OPEN_SOURCE_PROJECTS } from "./constants/projects";
import { OpenSourceSectionProps } from "./types";

export const OpenSource: FC<OpenSourceSectionProps> = ({ className = "" }) => {
  return (
    <section
      id="open-source"
      className={`py-24 lg:py-32 bg-gray-950 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Open Source Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Check out some of my open source projects on GitHub
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPEN_SOURCE_PROJECTS.map((project, index) => (
            <motion.div
              key={project.repoName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
