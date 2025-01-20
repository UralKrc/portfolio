"use client";

import { Card } from "antd";
import { FC } from "react";
import { BusinessCardProps } from "../types";

export const BusinessCard: FC<BusinessCardProps> = ({
  icon,
  title,
  details,
}) => {
  return (
    <Card className="dark:bg-gray-800" bordered={false}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xl text-purple-600">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="space-y-2 text-gray-600 dark:text-gray-300">
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </Card>
  );
};
