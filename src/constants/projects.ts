export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  stack: string[];
}

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Expatfile",
    description:
      "A tax filing platform for expats in the Netherlands, featuring a user-friendly interface and automated calculations.",
    link: "https://expatfile.tax",
    image: "/projects/expatfile.png",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Luggo",
    description:
      "A luggage tracking application with real-time updates and QR code integration.",
    link: "https://luggo.app",
    image: "/projects/luggo.png",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSocket"],
  },
  {
    title: "Socio Events",
    description:
      "A virtual events platform with interactive features and real-time engagement tracking.",
    link: "https://socio.events",
    image: "/projects/socio.png",
    stack: ["React", "Redux", "Node.js", "WebRTC", "Socket.io"],
  },
];
