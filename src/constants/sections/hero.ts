export const HERO_SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "CSS-in-JS",
  "Redux",
  "Unit testing",
  "E2E testing",
  "UI/UX Design",
  "Performance Optimization",
] as const;

export const HERO_LINKS = {
  contact: "#contact",
  resume: "/assets/ural-karaca-resume.pdf",
} as const;

export const HERO_ANIMATIONS = {
  container: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
} as const;
