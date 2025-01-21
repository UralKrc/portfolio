import { CORE_SKILLS } from "@/components/sections/about/constants/skills";
import { FEATURED_PROJECTS } from "@/components/sections/projects/constants/projects";
import { Project } from "@/components/sections/projects/types";
import { businessInfo } from "@/constants/business";
import type { Experience } from "@/constants/experience";
import { EXPERIENCE } from "@/constants/experience";

export const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: businessInfo.personal.name,
  jobTitle: businessInfo.personal.role,
  url: "https://uralkaraca.com",
  sameAs: [businessInfo.social.github, businessInfo.social.linkedin],
  nationality: businessInfo.personal.nationality,
  knowsLanguages: businessInfo.personal.languages,
  address: {
    "@type": "PostalAddress",
    addressLocality: businessInfo.address.city,
    addressCountry: businessInfo.address.country,
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
    description: "Independent Frontend Developer",
  },
  description:
    "Senior Frontend Developer specializing in React, Next.js, and TypeScript. Building scalable and performant web applications with modern technologies.",
  skills: CORE_SKILLS.map((skill) => ({
    "@type": "DefinedTerm",
    name: skill.name,
    termCode: skill.category,
  })),
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: businessInfo.personal.education,
    },
  ],
  workExperience: EXPERIENCE.map((job: Experience) => ({
    "@type": "WorkPosition",
    name: job.role,
    worksFor: {
      "@type": "Organization",
      name: job.company,
    },
    startDate: job.period.split(" - ")[0],
    endDate: job.period.split(" - ")[1] || "Present",
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
      },
    },
    description: job.description,
    skills: job.stack,
  })),
  mainEntityOfPage: {
    "@type": "ProfilePage",
    "@id": "https://uralkaraca.com",
    hasPart: FEATURED_PROJECTS.map((project: Project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: project.link,
      image: project.image,
      keywords: project.stack.join(", "),
      creator: {
        "@type": "Person",
        name: businessInfo.personal.name,
      },
    })),
  },
};
