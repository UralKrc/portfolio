import { Project } from "../types";

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Olympique Marseille",
    description:
      "An award winning website for Olympique Marseille, featuring a modern design, a responsive layout, and a powerful content management system.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Drupal"],
    image: "/projects/om.png",
    link: "https://om.fr",
  },
  {
    title: "International Volleyball Federation Website(F.I.V.B)",
    description:
      "High-performance React application handling 2M+ concurrent users during World Cup. Features real-time match statistics, live scoring, and dynamic content management system.",
    stack: ["React", "TypeScript", "CSS-In-JS", "JavaScript"],
    image: "/projects/fivb.png",
    link: "https://fivb.com",
  },
  {
    title: "Blancpain",
    description:
      "Contributed to the redesign of Blancpain's luxury watch website, focusing on performance optimization and creating an immersive user experience.",
    link: "https://blancpain.com",
    image: "/projects/blancpain.png",
    stack: ["React", "Next.js", "TypeScript", "GSAP", "Framer Motion"],
  },
  {
    title: "Superpeer",
    description:
      "Video platform enabling creators to monetize through 1:1 calls and content. Built with real-time chat, secure payments, and video streaming for thousands of concurrent users.",
    stack: ["React", "Node.js", "Tailwind CSS", "Firebase"],
    image: "/projects/superpeer.png",
    link: "https://superpeer.com",
  },
  {
    title: "Floris Van Bommel",
    description:
      "E-commerce platform modernization integrating Vue.js with Salesforce Commerce Cloud. Implemented modular architecture improving site performance by 60%.",
    stack: [
      "Vue.js",
      "JavaScript",
      "Salesforce Commerce Cloud",
      "Jest",
      "Tailwind CSS",
    ],
    image: "/projects/floris.png",
    link: "https://florisvanbommel.nl",
  },
] as const;
