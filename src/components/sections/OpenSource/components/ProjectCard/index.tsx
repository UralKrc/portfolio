"use client";

import { FC } from "react";
import { ProjectIcon } from "../../components/ProjectIcon";
import { ProjectCardProps } from "../../types";

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { title, description, repoName, icon, tech } = project;
  const repoUrl = `https://github.com/UralKrc/${repoName}`;

  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-gray-900/50 backdrop-blur-sm rounded-3xl transition-all duration-300 hover:bg-gray-900/70 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 group relative"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-900/50 rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-800/50">
            <ProjectIcon
              name={icon}
              className="w-6 h-6 text-purple-400 transition-colors group-hover:text-purple-300"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 min-h-20">{description}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 group-hover:bg-gray-700 transition-colors" />

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 text-sm font-medium bg-gray-800 text-gray-300 rounded-lg transition-colors group-hover:bg-gray-700 group-hover:text-gray-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle arrow indicator */}
      <div className="absolute top-6 right-6 opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        <svg
          className="w-5 h-5 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </a>
  );
};
