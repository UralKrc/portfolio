"use client";

import { LoadingScreen } from "@/components/LoadingScreen";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { OpenSource } from "@/components/sections/OpenSource";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <main className="px-6 lg:px-24 mx-auto max-w-screen-xl">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <OpenSource />
            <Services />
            <Contact />
          </main>
        )}
      </AnimatePresence>
    </>
  );
}
