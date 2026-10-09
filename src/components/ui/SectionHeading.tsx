"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  badge?: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  badge,
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "center"
      ? "text-center items-center mx-auto"
      : align === "right"
      ? "text-right items-end ml-auto"
      : "text-left items-start";

  return (
    <div className={`flex flex-col mb-12 md:mb-20 max-w-4xl ${alignClass} ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {eyebrow && (
          <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400">
            {eyebrow}
          </span>
        )}
        {badge}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-display editorial-title text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 md:mt-6 text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
