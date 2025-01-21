import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#6B46C1",
};

export const siteConfig = {
  name: "Ural Karaca",
  title: "Ural Karaca | Senior Frontend Developer",
  description:
    "Senior Frontend Developer specializing in React, Next.js, and TypeScript. Building scalable and performant web applications with modern technologies.",
  url: "https://uralkaraca.com",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/UralKrc",
    linkedin: "https://linkedin.com/in/ural-karaca",
  },
};

export const siteMetadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
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
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
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
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Senior Frontend Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
