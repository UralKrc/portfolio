import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#6B46C1",
};

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
  icons: {
    icon: [
      { url: "/icons/u-icon.svg" },
      { url: "/icon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/icons/u-icon.svg"],
    apple: [{ url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }],
  },
  manifest: "/manifest.json",
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
