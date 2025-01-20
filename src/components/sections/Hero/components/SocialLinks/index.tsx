"use client";

import { businessInfo } from "@/constants/business";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { FC } from "react";
import { SocialLink } from "./SocialLink";

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
        href={businessInfo.social.instagram}
        icon={<InstagramOutlined className="text-xl" />}
      />
      <SocialLink
        href="#contact"
        icon={<MailOutlined className="text-xl" />}
        external={false}
      />
    </motion.div>
  );
};
