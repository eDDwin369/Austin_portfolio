"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, ArrowRight } from "lucide-react";

export function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="process" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="04 / METHODOLOGY"
          title="ENGINEERING PROCESS"
          description="A disciplined 6-step software engineering framework turning wireframes and requirements into high-performance, dependable mobile applications."
        />

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {processSteps.map((step, index) => {
            const isSelected = activeStepIndex === index;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveStepIndex(index)}
                className={`p-8 rounded-3xl glass-card transition-all duration-300 relative flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "ring-2 ring-indigo-500/80 shadow-xl shadow-indigo-500/10"
                    : "opacity-85 hover:opacity-100"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-bold text-4xl sm:text-5xl text-indigo-600 dark:text-indigo-400">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                      Step {index + 1} of 6
                    </span>
                  </div>

                  <h3 className="font-display editorial-title text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                    {step.tagline}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
                  <span className="text-[11px] uppercase tracking-wider font-medium text-neutral-400 block mb-3">
                    Deliverables:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] bg-neutral-100 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-300"
                      >
                        <Check className="w-3 h-3 text-indigo-500" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
                    <span>Outcome:</span>
                    <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                      {step.metrics}
                    </span>
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
