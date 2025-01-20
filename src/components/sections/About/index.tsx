"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { SkillsList } from "./components/SkillsList";
import { AboutSectionProps } from "./types";

export const About: FC<AboutSectionProps> = ({ className }) => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-16 max-w-3xl"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
            <span className="font-mono text-purple-600 dark:text-purple-400 mr-4">
              01.
            </span>
            About Me
          </h2>
          <div className="flex-grow h-px bg-gradient-to-r from-purple-200 dark:from-purple-800 to-transparent" />
        </div>

        <div className="space-y-4 text-gray-600 dark:text-gray-400">
          <p>
            Hello! I'm Ural, a passionate frontend developer with a keen eye for
            creating engaging digital experiences. My journey in web development
            began in 2018, and since then, I've had the privilege of working
            with diverse teams and technologies.
          </p>

          <p>
            My main focus these days is building accessible, inclusive products
            and digital experiences at various companies for a variety of
            clients. I primarily work with React and Next.js, always striving to
            create performant and scalable solutions.
          </p>

          <p>Here are a few technologies I've been working with recently:</p>

          <SkillsList />
        </div>
      </motion.div>
    </section>
  );
};
