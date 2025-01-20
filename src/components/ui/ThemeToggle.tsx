"use client";

import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC, useState } from "react";

export const ThemeToggle: FC = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <Button
      type="text"
      icon={
        isDark ? <SunOutlined style={{ color: "#ffffff" }} /> : <MoonOutlined />
      }
      onClick={toggleTheme}
      className="ml-4"
    />
  );
};
