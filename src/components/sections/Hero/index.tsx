"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { SkillDisplay } from "./components/SkillDisplay";
import { SocialLinks } from "./components/SocialLinks";
import { HERO_SKILLS } from "./constants/skills";
import { HeroSectionProps } from "./types";

export const Hero: FC<HeroSectionProps> = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 py-24 lg:py-32 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800" />
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute h-[40rem] w-[40rem] -top-40 -left-40 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-blob" />
          <div className="absolute h-[30rem] w-[30rem] top-40 right-0 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute h-[35rem] w-[35rem] bottom-0 left-20 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full text-sm font-mono bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              Available for work
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Ural Karaca
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-300">
              Senior Frontend Developer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-lg"
          >
            Crafting exceptional digital experiences with modern web
            technologies. Specialized in React, Next.js, and creating scalable
            frontend solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            <a
              href="/assets/ural-karaca-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 group flex items-center gap-2"
            >
              View Resume
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
            </a>
          </motion.div>

          <SocialLinks />
        </div>

        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl transform rotate-6" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl transform -rotate-6" />
            <div className="absolute inset-0 bg-black/90 dark:bg-gray-950 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <SkillDisplay skills={HERO_SKILLS} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-scan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
