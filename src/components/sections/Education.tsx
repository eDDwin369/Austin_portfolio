"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { educationList, languagesList, activitiesList } from "@/data/experience";
import { certificationsList } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, Award, Languages, Trophy, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export function Education() {
  const [activeTab, setActiveTab] = useState<"education" | "certifications" | "languages" | "activities">("education");
  const [eduIndex, setEduIndex] = useState(0);

  const prev = () => {
    setEduIndex((prev) => (prev === 0 ? educationList.length - 1 : prev - 1));
  };

  const next = () => {
    setEduIndex((prev) => (prev === educationList.length - 1 ? 0 : prev + 1));
  };

  const currentEdu = educationList[eduIndex];

  return (
    <section id="education" className="py-24 md:py-36 relative overflow-hidden bg-neutral-100/20 dark:bg-neutral-900/10 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="06 / ACADEMICS & CREDENTIALS"
          title="EDUCATION & BACKGROUND"
          description="Formal academic degrees, verified industry certifications, multilingual proficiency, and personal pursuits."
        />

        {/* Tab switchers */}
        <div className="flex justify-center mb-10 px-2">
          <div className="inline-flex p-1 sm:p-1.5 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 max-w-full overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab("education")}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === "education"
                  ? "bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === "certifications"
                  ? "bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Certifications (8)</span>
            </button>
            <button
              onClick={() => setActiveTab("languages")}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === "languages"
                  ? "bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>Languages</span>
            </button>
            <button
              onClick={() => setActiveTab("activities")}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === "activities"
                  ? "bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Activities</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="relative max-w-4xl mx-auto">
          {activeTab === "education" && (
            <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] glass-card border border-neutral-200/80 dark:border-neutral-800 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentEdu.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold block mb-2">
                    Degree / Qualification • {eduIndex + 1} of {educationList.length}
                  </span>
                  <h3 className="font-display editorial-title text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-neutral-900 dark:text-neutral-50 tracking-tight">
                    {currentEdu.degree}
                  </h3>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-neutral-400" />
                      {currentEdu.institution}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-mono">
                      <Calendar className="w-4 h-4" />
                      {currentEdu.period}
                    </span>
                  </div>

                  {currentEdu.detail && (
                    <p className="mt-6 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                      {currentEdu.detail}
                    </p>
                  )}

                  <div className="mt-10 flex items-center justify-between pt-8 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-2">
                      {educationList.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setEduIndex(i)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            eduIndex === i ? "w-8 bg-indigo-600 dark:bg-indigo-400" : "w-2 bg-neutral-300 dark:bg-neutral-700"
                          }`}
                          aria-label={`Go to education slide ${i + 1}`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={prev}
                        className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
                        aria-label="Previous qualification"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={next}
                        className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
                        aria-label="Next qualification"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {activeTab === "certifications" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 sm:p-10 md:p-12 rounded-[2.5rem] glass-card border border-neutral-200/80 dark:border-neutral-800"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display editorial-title text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
                      Licenses & Certifications
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
                      8 Verified Credentials & Professional Accreditations
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {certificationsList.map((cert, idx) => (
                  <div
                    key={cert.id}
                    className="p-5 sm:p-6 rounded-2xl bg-neutral-100/80 dark:bg-neutral-800/60 border border-neutral-200/70 dark:border-neutral-700/60 flex flex-col justify-between hover:border-indigo-500/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                          #{idx + 1}
                        </span>
                        <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-indigo-500" />
                          {cert.issueDate}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 leading-snug">
                        {cert.title}
                      </h4>

                      <div className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mt-1 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{cert.issuer}</span>
                      </div>

                      {cert.description && (
                        <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                          {cert.description}
                        </p>
                      )}
                    </div>

                    {cert.skills && cert.skills.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-neutral-200/60 dark:border-neutral-700/50 flex flex-wrap gap-1.5 items-center">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                          Skills:
                        </span>
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "languages" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] glass-card border border-neutral-200/80 dark:border-neutral-800"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
                <Languages className="w-6 h-6" />
              </div>

              <h3 className="font-display editorial-title text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
                Language Proficiencies
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8 font-light">
                Multilingual communication capability supporting cross-functional teamwork and diverse stakeholder engagement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {languagesList.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-6 rounded-2xl bg-neutral-100/80 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60"
                  >
                    <span className="text-lg font-bold text-neutral-900 dark:text-neutral-100 block mb-1">
                      {lang.name}
                    </span>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "activities" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] glass-card border border-neutral-200/80 dark:border-neutral-800"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
                <Trophy className="w-6 h-6" />
              </div>

              <h3 className="font-display editorial-title text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
                Activities & Personal Pursuits
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8 font-light">
                Passions that reinforce teamwork, strategic tactical thinking, endurance, and agility.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {activitiesList.map((act) => (
                  <div
                    key={act.name}
                    className="p-5 rounded-2xl bg-neutral-100/80 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60 text-center"
                  >
                    <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                      {act.name}
                    </h4>
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      {act.category}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
