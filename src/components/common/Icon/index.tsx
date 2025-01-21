"use client";

import { IconProps } from "@/types/common";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { FC } from "react";

const IconComponents = {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} as const;

export type IconName = keyof typeof IconComponents;

interface Props extends IconProps {
  name: IconName;
}

export const Icon: FC<Props> = ({ name, size = 24, className = "", color }) => {
  const IconComponent = IconComponents[name];

  return (
    <IconComponent style={{ fontSize: size, color }} className={className} />
  );
};
