"use client";

import { Icon } from "@/components/common/icon";
import { businessInfo } from "@/constants/business";
import { BaseProps } from "@/types/common";
import { motion } from "framer-motion";
import { FC } from "react";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: businessInfo.social.github,
    icon: "GithubOutlined",
  },
  {
    name: "LinkedIn",
    url: businessInfo.social.linkedin,
    icon: "LinkedinOutlined",
  },
  {
    name: "Instagram",
    url: businessInfo.social.instagram,
    icon: "InstagramOutlined",
  },
] as const;

export const SocialLinks: FC<BaseProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {SOCIAL_LINKS.map(({ name, url, icon }) => (
        <motion.a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-purple-400 transition-colors"
        >
          <span className="sr-only">{name}</span>
          <Icon name={icon} size={24} />
        </motion.a>
      ))}
    </div>
  );
};
