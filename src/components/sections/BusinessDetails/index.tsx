"use client";

import { businessInfo } from "@/constants/business";
import {
  GlobalOutlined,
  HomeOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { FC } from "react";
import { BusinessCard } from "./components/BusinessCard";
import { BusinessDetailsSectionProps } from "./types";

export const BusinessDetails: FC<BusinessDetailsSectionProps> = ({
  className = "",
}) => {
  const cards = [
    {
      icon: <IdcardOutlined />,
      title: "Personal",
      details: [
        businessInfo.personal.name,
        businessInfo.personal.role,
        businessInfo.personal.nationality,
        `Languages: ${businessInfo.personal.languages.join(", ")}`,
        businessInfo.personal.experience,
      ],
    },
    {
      icon: <HomeOutlined />,
      title: "Address",
      details: [
        businessInfo.address.street,
        businessInfo.address.postalCode,
        businessInfo.address.city,
        businessInfo.address.country,
      ],
    },
    {
      icon: <GlobalOutlined />,
      title: "Business",
      details: [
        `CoC: ${businessInfo.business.coc}`,
        `Tax: ${businessInfo.business.tax}`,
        `Type: ${businessInfo.business.type}`,
      ],
    },
  ];

  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Business Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <BusinessCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
