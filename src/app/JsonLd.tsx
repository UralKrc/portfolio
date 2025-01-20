"use client";

import { businessInfo } from "@/constants/business";

export function JsonLd() {
  return (
    <script type="application/ld+json" suppressHydrationWarning>
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: businessInfo.personal.name,
        jobTitle: businessInfo.personal.role,
        url: "https://uralkaraca.com",
        description:
          "Senior Frontend Developer specializing in React, Next.js, and TypeScript. Building scalable and performant web applications with modern technologies.",
        image: "/og-image.png",
        sameAs: [
          businessInfo.social.github,
          businessInfo.social.linkedin,
          businessInfo.social.instagram,
        ],
      })}
    </script>
  );
}
