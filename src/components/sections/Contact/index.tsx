"use client";

import { LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { FC } from "react";
import { ContactButton } from "./components/ContactButton";
import { ContactSectionProps } from "./types";

export const Contact: FC<ContactSectionProps> = ({ className = "" }) => {
  return (
    <section id="contact" className={`py-24 lg:py-32 ${className}`}>
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Get in Touch
        </h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className="flex justify-center gap-4">
            <ContactButton
              icon={<MailOutlined />}
              href="mailto:ur.karaca@gmail.com"
              external={false}
            >
              Email Me
            </ContactButton>
            <ContactButton
              icon={<LinkedinOutlined />}
              href="https://linkedin.com/in/ural-karaca"
            >
              LinkedIn
            </ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
};
