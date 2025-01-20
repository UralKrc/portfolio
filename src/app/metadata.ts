import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Ural Karaca | Senior Frontend Developer",
  description:
    "Senior Frontend Developer specializing in React, Next.js, and TypeScript. Building scalable and performant web applications with modern technologies.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "JavaScript Developer",
    "Amsterdam",
    "Netherlands",
    "Remote Developer",
    "Ural Karaca",
  ],
  authors: [{ name: "Ural Karaca" }],
  creator: "Ural Karaca",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uralkaraca.com",
    title: "Ural Karaca | Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in React, Next.js, and TypeScript. Building scalable and performant web applications with modern technologies.",
    siteName: "Ural Karaca Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ural Karaca - Senior Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ural Karaca | Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in React, Next.js, and TypeScript",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
