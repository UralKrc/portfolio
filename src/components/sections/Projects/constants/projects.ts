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
      "A modern website for the International Volleyball Federation, featuring a responsive layout, a powerful content management system, and a modern design.",
    stack: ["React", "TypeScript", "CSS-In-JS", "JavaScript"],
    image: "/projects/fivb.png",
    link: "https://fivb.com",
  },
  {
    title: "Superpeer",
    description:
      "A modern events platform that enables seamless virtual and hybrid event experiences. Contributed to core features including real-time attendee engagement, analytics dashboard, and integration with third-party services.",
    stack: ["Vue", "Node.js", "Tailwind CSS", "Firebase"],
    image: "/projects/superpeer.png",
    link: "https://superpeer.com",
  },
  {
    title: "Floris Van Bommel",
    description:
      "A modern events platform that enables seamless virtual and hybrid event experiences. Contributed to core features including real-time attendee engagement, analytics dashboard, and integration with third-party services.",
    stack: ["React", "Redux", "Tailwind CSS", "Jest"],
    image: "/projects/floris.png",
    link: "https://florisvanbommel.nl",
  },
] as const;
