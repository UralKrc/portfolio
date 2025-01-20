import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="px-6 lg:px-24 mx-auto max-w-screen-xl">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}
