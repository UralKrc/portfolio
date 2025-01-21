import { Metadata, Viewport } from "next";

export const siteConfig = {
  name: "Ural Karaca",
  title: "Ural Karaca | Senior Frontend Developer",
  description:
    "Senior Frontend Developer specializing in React, Next.js, and TypeScript. Building exceptional digital experiences.",
  url: "https://uralkaraca.dev",
  ogImage: "https://uralkaraca.dev/og.png",
  links: {
    github: "https://github.com/UralKrc",
    linkedin: "https://linkedin.com/in/uralkaraca",
  },
} as const;

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@uralkaraca",
  },
  icons: {
    icon: [
      { url: "/icons/u-icon.svg" },
      { url: "/icon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/icons/u-icon.svg"],
    apple: [{ url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff" },
    { media: "(prefers-color-scheme: dark)", color: "#000" },
  ],
};
