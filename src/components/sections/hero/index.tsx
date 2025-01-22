"use client";

import { Button } from "@/components/common/button";
import { Card } from "@/components/common/card";
import { HERO_LINKS, HERO_SKILLS } from "@/constants/sections/hero";
import { SectionProps } from "@/types/common";
import { fadeInUp, scaleIn, staggerContainer } from "@/utils/animations";
import { motion } from "framer-motion";
import { FC } from "react";
import { SkillDisplay } from "./components/skill-display";
import { SocialLinks } from "./components/social-links";

export const Hero: FC<SectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 py-24 lg:py-32 overflow-hidden ${className}`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute h-[40rem] w-[40rem] -top-40 -left-40 bg-purple-900 rounded-full mix-blend-lighten blur-3xl animate-blob" />
          <div className="absolute h-[30rem] w-[30rem] top-40 right-0 bg-blue-900 rounded-full mix-blend-lighten blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute h-[35rem] w-[35rem] bottom-0 left-20 bg-pink-900 rounded-full mix-blend-lighten blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-mono bg-purple-900/30 text-purple-400 border border-purple-700/50">
              Available for work
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Ural Karaca
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300">
              Senior Frontend Developer
            </h2>
            <p className="text-lg text-gray-400 max-w-lg">
              Crafting exceptional digital experiences with modern web
              technologies. Specialized in React, Next.js, and creating scalable
              frontend solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href={HERO_LINKS.contact} size="lg">
                Get in touch
              </Button>
              <Button
                href={HERO_LINKS.resume}
                variant="outline"
                size="lg"
                external
              >
                Download Resume
              </Button>
            </div>

            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="initial"
          animate="animate"
          className="relative hidden lg:block"
        >
          <Card
            variant="dark"
            padding="none"
            className="relative w-full aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-3xl transform rotate-6" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-3xl transform -rotate-6" />
            <div className="absolute inset-0 bg-black/90 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <SkillDisplay skills={HERO_SKILLS} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-scan" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
