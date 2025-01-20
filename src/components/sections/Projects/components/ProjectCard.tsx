"use client";

import { LinkOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { FC } from "react";
import { ProjectCardProps } from "../types";

export const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`relative grid grid-cols-12 items-center gap-4 ${
      index % 2 === 0 ? "" : "text-right"
    }`}
  >
    {/* Project Image */}
    <div
      className={`relative col-span-12 lg:col-span-7 ${
        index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-6"
      }`}
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-purple-100 dark:bg-purple-900/20 group">
        {project.image && (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="object-cover object-top w-full h-full mix-blend-multiply dark:mix-blend-normal opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-purple-950/10 dark:bg-purple-950/30 group-hover:bg-purple-950/0 transition-all duration-300" />
            <div className="absolute top-4 right-4 flex gap-3">
              {project.external && (
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-purple-600/80 hover:bg-purple-600 text-white rounded-full opacity-0 group-hover:opacity-100 transform scale-75 flex items-center justify-center group-hover:scale-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  aria-label={`Visit ${project.title} website`}
                >
                  <LinkOutlined className="text-lg" />
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </div>

    {/* Project Content */}
    <div
      className={`relative col-span-12 lg:col-span-6 ${
        index % 2 === 0
          ? "lg:col-start-7 lg:text-right"
          : "lg:col-start-1 lg:text-left"
      }`}
    >
      <div className="relative lg:absolute lg:w-full lg:h-full lg:flex lg:flex-col lg:justify-center">
        <p className="font-mono text-sm text-purple-600 dark:text-purple-400 mb-2">
          Featured Project
        </p>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
          {project.title}
        </h3>
        <div className="relative p-6 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <p className="text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
          <div
            className={`flex flex-wrap gap-2 mt-4 ${
              index % 2 === 0 ? "justify-end" : "justify-start"
            }`}
          >
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-sm font-mono text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);
