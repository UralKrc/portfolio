"use client";

import { businessInfo } from "@/constants/business";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { FC } from "react";
import { SocialLinkProps } from "../types";

const SocialLink: FC<SocialLinkProps> = ({ href, icon, external = true }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
  >
    {icon}
  </a>
);

export const SocialLinks: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex gap-6"
    >
      <SocialLink
        href={businessInfo.social.github}
        icon={<GithubOutlined className="text-xl" />}
      />
      <SocialLink
        href={businessInfo.social.linkedin}
        icon={<LinkedinOutlined className="text-xl" />}
      />
      <SocialLink
        href="#contact"
        icon={<MailOutlined className="text-xl" />}
        external={false}
      />
    </motion.div>
  );
};
