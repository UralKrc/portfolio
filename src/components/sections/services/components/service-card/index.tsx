"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { ServiceCardProps } from "../../types";

export const ServiceCard: FC<ServiceCardProps> = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
  >
    <div className="space-y-6">
      <div className="text-purple-600 dark:text-purple-400">{service.icon}</div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {service.title}
        </h3>
        <p className="text-sm font-mono text-purple-600 dark:text-purple-400">
          {service.subtitle}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          {service.description}
        </p>
      </div>

      <ul className="space-y-3">
        {service.offerings.map((offering, i) => (
          <motion.li
            key={offering}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
          >
            <span className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1">
              ▹
            </span>
            <span>{offering}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);
