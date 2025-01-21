"use client";

import { LoadingScreen } from "@/components/loading-screen";
import { About } from "@/components/sections/about";
import { BusinessDetails } from "@/components/sections/business-details";
import { ContactDetails } from "@/components/sections/contact-details";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { OpenSource } from "@/components/sections/open-source";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
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
            <BusinessDetails />
            <ContactDetails />
          </main>
        )}
      </AnimatePresence>
    </>
  );
}
