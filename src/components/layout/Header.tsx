import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button, Space } from "antd";
import Link from "next/link";
import { FC } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-purple-600 dark:text-purple-400"
          >
            UK
          </Link>

          <Space size="middle">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button type="primary" href="#contact">
              Get in Touch
            </Button>
            <ThemeToggle />
          </Space>
        </div>
      </nav>
    </header>
  );
};
