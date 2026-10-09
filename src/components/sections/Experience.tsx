"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

export function Experience() {
  const [activeExpId, setActiveExpId] = useState(experiences[0].id);

  return (
    <section id="experience" className="py-24 md:py-36 relative bg-neutral-100/30 dark:bg-neutral-900/20 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="04 / TRACK RECORD"
          title="CAREER & EXPERIENCE"
          description="Professional engineering track record across mobile platform development, cloud log investigation, and application architecture."
        />

        {/* Timeline Rows */}
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isSelected = activeExpId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveExpId(exp.id)}
                className={`p-6 sm:p-8 md:p-10 rounded-3xl glass-card transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-indigo-500/70 shadow-xl shadow-indigo-500/5 bg-white dark:bg-neutral-900"
                    : "hover:border-neutral-300 dark:hover:border-neutral-700"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-200/80 dark:border-neutral-800/80">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-display editorial-title text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
                        {exp.company}
                      </h3>
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40">
                        {exp.role}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-1">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        {exp.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description & Responsibilities */}
                <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <p className="lg:col-span-5 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="lg:col-span-7">
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-light"
                        >
                          <ChevronRight className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
