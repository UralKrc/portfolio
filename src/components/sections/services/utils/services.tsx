"use client";

import React from "react";
import {
  ConsultationIcon,
  FrontendIcon,
  LeadershipIcon,
  TestingIcon,
} from "../components/service-icons/service-icons";
import { Service } from "../types";

export const SERVICES: Service[] = [
  {
    icon: <FrontendIcon />,
    title: "Frontend Development",
    subtitle: "Modern web applications",
    description:
      "Building scalable and performant web applications with React ecosystem",
    offerings: [
      "Next.js Applications",
      "React Component Libraries",
      "Performance Optimization",
      "SEO-driven Development",
    ],
  },
  {
    icon: <LeadershipIcon />,
    title: "Technical Leadership",
    subtitle: "Team & project scaling",
    description:
      "Leading teams and architecting scalable solutions for complex projects",
    offerings: [
      "Architecture Design",
      "Team Mentoring",
      "Code Reviews",
      "Best Practices Implementation",
    ],
  },
  {
    icon: <TestingIcon />,
    title: "Testing & Quality",
    subtitle: "Comprehensive testing",
    description:
      "Implementing robust testing strategies for reliable applications",
    offerings: [
      "E2E Testing (Playwright)",
      "Unit Testing (Jest)",
      "Integration Testing",
      "Performance Testing",
    ],
  },
  {
    icon: <ConsultationIcon />,
    title: "Technical Consultation",
    subtitle: "Expert guidance",
    description: "Providing strategic technical guidance for project success",
    offerings: [
      "Architecture Review",
      "Performance Audits",
      "Technical Strategy",
      "Migration Planning",
    ],
  },
];
