"use client";

import { Button } from "antd";
import { FC } from "react";
import { ContactButtonProps } from "../types";

export const ContactButton: FC<ContactButtonProps> = ({
  icon,
  href,
  children,
  external = true,
}) => (
  <Button
    size="large"
    icon={icon}
    href={href}
    target={external ? "_blank" : undefined}
    type={external ? "default" : "primary"}
  >
    {children}
  </Button>
);
