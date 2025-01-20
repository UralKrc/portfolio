"use client";

import {
  AppstoreOutlined,
  BankOutlined,
  CodeOutlined,
  LayoutOutlined,
  ProjectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FC } from "react";

interface ProjectIconProps {
  name: string;
  className?: string;
}

export const ProjectIcon: FC<ProjectIconProps> = ({ name, className }) => {
  switch (name) {
    case "game":
      return <AppstoreOutlined className={className} />;
    case "landing":
      return <LayoutOutlined className={className} />;
    case "trello":
      return <ProjectOutlined className={className} />;
    case "task":
      return <ProjectOutlined className={className} />;
    case "hotel":
      return <BankOutlined className={className} />;
    case "portfolio":
      return <UserOutlined className={className} />;
    default:
      return <CodeOutlined className={className} />;
  }
};
