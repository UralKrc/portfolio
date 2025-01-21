"use client";

import { FC } from "react";
import { SocialLinkProps } from "../../../types";

export const SocialLink: FC<SocialLinkProps> = ({
  href,
  icon,
  external = true,
}) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
  >
    {icon}
  </a>
);
