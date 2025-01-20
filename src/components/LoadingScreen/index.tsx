"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LoadingScreenProps } from "./types";
import { calculateHexagonPoints, createLineSegments } from "./utils";

const HEXAGON_SIZE = 80;

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [showButton, setShowButton] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
      setTimeout(() => setShowButton(true), 300);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const points = calculateHexagonPoints(HEXAGON_SIZE);
  const lines = createLineSegments(points);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="relative w-64 h-64">
          {/* Hexagon lines */}
          <svg
            viewBox="-100 -100 200 200"
            className="w-full h-full text-purple-600 dark:text-purple-400"
          >
            {lines.map((line, i) => (
              <motion.line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="currentColor"
                strokeWidth="4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>

          {/* Centered text */}
          <AnimatePresence mode="wait">
            {showText ? (
              <motion.div
                key="letter"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-purple-600 dark:text-purple-400"
              >
                U
              </motion.div>
            ) : showButton ? (
              <motion.button
                key="button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onComplete}
                className="cursor-pointer absolute inset-0 flex items-center justify-center text-2xl font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
              >
                START
              </motion.button>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Loading line animation */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-8 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400"
        />
      </div>
    </motion.div>
  );
};
