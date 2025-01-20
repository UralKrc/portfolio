import { Project } from "../types";

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Olympique Marseille",
    description:
      "An award winning website for Olympique Marseille, featuring a modern design, a responsive layout, and a powerful content management system.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Drupal"],
    image: "/projects/om.png",
    external: "https://om.fr",
    github: null,
  },
  {
    title: "International Volleyball Federation Website(F.I.V.B)",
    description:
      "A modern website for the International Volleyball Federation, featuring a responsive layout, a powerful content management system, and a modern design.",
    tech: ["React", "TypeScript", "CSS-In-JS", "JavaScript"],
    image: "/projects/fivb.png",
    external: "https://fivb.com",
    github: null,
  },
  {
    title: "Superpeer",
    description:
      "A modern events platform that enables seamless virtual and hybrid event experiences. Contributed to core features including real-time attendee engagement, analytics dashboard, and integration with third-party services.",
    tech: ["Vue", "Node.js", "Tailwind CSS", "Firebase"],
    image: "/projects/superpeer.png",
    external: "https://superpeer.com",
    github: null,
  },
  {
    title: "Floris Van Bommel",
    description:
      "A modern events platform that enables seamless virtual and hybrid event experiences. Contributed to core features including real-time attendee engagement, analytics dashboard, and integration with third-party services.",
    tech: ["React", "Redux", "Tailwind CSS", "Jest"],
    image: "/projects/floris.png",
    external: "https://florisvanbommel.nl",
    github: null,
  },
] as const;
