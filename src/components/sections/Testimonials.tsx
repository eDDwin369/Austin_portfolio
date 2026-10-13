"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsList } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote, MessageSquare, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from "lucide-react";

export function Testimonials() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="testimonials" className="py-24 md:py-36 relative overflow-hidden bg-neutral-100/30 dark:bg-neutral-900/20 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="05 / ENDORSEMENTS"
          title="TESTIMONIALS"
          description="Recommendations and professional feedback from tech leads, teammates, and project managers."
        />

        {/* Short & Simple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsList.map((item, idx) => {
            const isExpanded = !!expandedIds[item.id];
            const initials = item.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-3xl glass-card flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 relative group"
              >
                <div>
                  {/* Card Header: Author info */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 text-white flex items-center justify-center font-display font-bold text-xs shadow-sm shrink-0">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate max-w-[200px]">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <Quote className="w-5 h-5 text-indigo-400/40 dark:text-indigo-400/30 shrink-0" />
                  </div>

                  {/* Relationship Tag */}
                  <div className="mb-3">
                    <span className="inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-700/60">
                      {item.relationship}
                    </span>
                  </div>

                  {/* 2 Lines + ..more Testimonial Content */}
                  <div className="mt-2">
                    <p
                      className={`text-xs sm:text-[13px] text-neutral-700 dark:text-neutral-300 font-light leading-relaxed transition-all duration-300 ${
                        !isExpanded ? "line-clamp-2" : ""
                      }`}
                    >
                      &ldquo;{item.fullText}&rdquo;
                    </p>

                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="mt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors inline-flex items-center gap-0.5 cursor-pointer"
                    >
                      <span>{isExpanded ? "..less" : "..more"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Footer info: Date */}
                <div className="mt-4 pt-3 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span>{item.date}</span>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-sans font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
