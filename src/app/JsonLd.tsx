"use client";

export function JsonLd() {
  return (
    <script type="application/ld+json" suppressHydrationWarning>
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ural Karaca",
        jobTitle: "Senior Frontend Developer",
        url: "https://uralkaraca.com",
        description:
          "Senior Frontend Developer specializing in React, Next.js, and TypeScript. Building scalable and performant web applications with modern technologies.",
        image: "/og-image.png",
        sameAs: [
          "https://github.com/uralkaraca",
          "https://linkedin.com/in/ural-karaca",
        ],
      })}
    </script>
  );
}
