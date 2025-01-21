import { businessInfo } from "@/constants/business";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Ural Karaca
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Senior Frontend Developer
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <Space size="middle" className="mb-4">
              <Button
                type="text"
                icon={<GithubOutlined />}
                href={businessInfo.social.github}
                target="_blank"
              />
              <Button
                type="text"
                icon={<LinkedinOutlined />}
                href={businessInfo.social.linkedin}
                target="_blank"
              />
              <Button
                type="text"
                icon={<InstagramOutlined />}
                href={businessInfo.social.instagram}
                target="_blank"
              />
              <Button
                type="text"
                icon={<MailOutlined />}
                href={businessInfo.social.email}
              />
            </Space>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Ural Karaca. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
