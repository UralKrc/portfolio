"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { ServiceCard } from "./components/ServiceCard";
import { ServicesSectionProps } from "./types";
import { SERVICES } from "./utils/services";

export const Services: FC<ServicesSectionProps> = ({ className = "" }) => {
  return (
    <section id="services" className={`py-24 lg:py-32 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              <span className="font-mono text-purple-600 dark:text-purple-400 mr-4">
                04.
              </span>
              What I Do
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-purple-200 dark:from-purple-800 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
