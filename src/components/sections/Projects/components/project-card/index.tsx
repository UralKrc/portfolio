"use client";

import { LinkOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import { ProjectCardProps } from "../../types";

export const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8`}
    >
      <div className="relative lg:w-7/12 group">
        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="lg:w-5/12 space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-mono rounded-full
                bg-gradient-to-r from-purple-100/80 to-pink-100/80 
                dark:from-purple-900/20 dark:to-pink-900/20 
                text-purple-700 dark:text-purple-300
                border border-purple-200/50 dark:border-purple-700/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
        >
          <LinkOutlined /> View Project
        </a>
      </div>
    </motion.div>
  );
};
