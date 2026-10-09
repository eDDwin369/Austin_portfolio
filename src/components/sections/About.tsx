"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { statsList, skillCategories, toolsList } from "@/data/skills";
import { ArrowUpRight, Phone, Mail, Award, CheckCircle2, Sparkles, BookOpen } from "lucide-react";

export function About() {
  const [activeTab, setActiveTab] = useState<"skills" | "tools">("skills");
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden bg-neutral-100/40 dark:bg-neutral-900/30 border-y border-neutral-200/80 dark:border-neutral-800/80">
      {/* Decorative accent dot (matches reference image 2 left edge) */}
      <div className="absolute top-1/4 -left-3 w-6 h-6 rounded-full bg-indigo-600 blur-[2px] opacity-70" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Split Block: Matches Reference Image 2 Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content Side */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              02 / BIOGRAPHY
            </span>
            <h2 className="font-display editorial-title text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-none">
              ABOUT ME
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-light leading-relaxed max-w-xl">
              Passionate and results-driven Software Engineer with extensive experience in mobile platform development and cloud service integration. Proven track record of developing high-performance applications, analyzing complex system issues, and translating wireframes into clean, reliable code. Seeking to leverage technical expertise in Android, Kotlin, and AWS to add immediate value to high-quality engineering operations.
            </p>

            {/* Key Stats Counter Grid */}
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-8 w-full max-w-lg">
              {statsList.slice(0, 3).map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-indigo-600 dark:text-indigo-400 leading-none tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-[11px] sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Contact Details */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-800 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Call / Phone:
                </span>
                <a
                  href="tel:+919400486997"
                  className="mt-1 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  +91 9400486997
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Email:
                </span>
                <a
                  href="mailto:austinpaul1893@gmail.com"
                  className="mt-1 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate"
                >
                  austinpaul1893@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons & Story Action */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button
                onClick={() => setStoryOpen(!storyOpen)}
                className="px-8 py-3 rounded-full border border-indigo-500/70 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-neutral-950 font-display uppercase tracking-wider text-xs font-bold transition-all duration-300 shadow-sm cursor-pointer"
              >
                {storyOpen ? "Hide Story" : "Professional Summary"}
              </button>

              <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-300">
                <a
                  href="https://linkedin.com/in/austinpaul1893"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                  </svg>
                </a>
                <a
                  href="mailto:austinpaul1893@gmail.com"
                  className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="tel:+919400486997"
                  className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Portrait Side */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[min(300px,calc(100vw-3.5rem))] sm:w-[360px] md:w-[400px] h-[min(420px,calc((100vw-3.5rem)*1.4))] sm:h-[500px] md:h-[540px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-200/80 dark:border-neutral-800 transform rotate-0 sm:rotate-2 transition-transform duration-500 bg-neutral-200 dark:bg-neutral-800"
            >
              <Image
                src="/images/profile-portrait.png"
                alt="Austin Paul Portrait"
                fill
                priority
                unoptimized={true}
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              {/* Verified badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-white/20 dark:border-neutral-800 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                    Software Engineer
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Mobile Platform Development & AWS Cloud Integration
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Expandable Story Detail */}
        {storyOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 p-8 md:p-12 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-4 text-indigo-600 dark:text-indigo-400">
              <BookOpen className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase tracking-widest">Engineering Background</span>
            </div>
            <h3 className="font-display editorial-title text-3xl font-bold mb-4">
              Building dependable mobile applications & cloud integrations.
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed font-light text-base mb-4">
              Passionate and results-driven Software Engineer with extensive experience in mobile platform development and cloud service integration. Proven track record of developing high-performance applications, analyzing complex system issues, and translating wireframes into clean, reliable code.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed font-light text-base">
              Seeking to leverage technical expertise in Android, Kotlin, and AWS to add immediate value to high-quality engineering operations. Experienced across deep cloud log investigations using AWS CloudWatch and S3, native Java/Kotlin Android development, and cross-functional bug fixing and profiling.
            </p>
          </motion.div>
        )}

        {/* Detailed Skills & Tools Interactive Tabs */}
        <div className="mt-24 pt-16 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400">
                03 / CAPABILITIES
              </span>
              <h3 className="font-display editorial-title text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mt-1">
                SKILLS & TOOLCHAIN
              </h3>
            </div>

            <div className="inline-flex p-1 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80">
              <button
                onClick={() => setActiveTab("skills")}
                className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                  activeTab === "skills"
                    ? "bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400"
                }`}
              >
                Core Skills
              </button>
              <button
                onClick={() => setActiveTab("tools")}
                className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                  activeTab === "tools"
                    ? "bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400"
                }`}
              >
                Tools & Software
              </button>
            </div>
          </div>

          {activeTab === "skills" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillCategories.map((cat, idx) => (
                <div
                  key={cat.title}
                  className="p-8 rounded-3xl glass-card relative overflow-hidden"
                >
                  <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 mb-3 block">
                    0{idx + 1} /
                  </span>
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 font-light leading-relaxed">
                    {cat.description}
                  </p>
                  <ul className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {toolsList.map((tool) => (
                <div
                  key={tool.name}
                  className="p-6 rounded-2xl glass-card flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                        {tool.name}
                      </h4>
                      <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                        {tool.proficiency}%
                      </span>
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 block mb-3">
                      {tool.category}
                    </span>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                      {tool.highlight}
                    </p>
                  </div>

                  <div className="mt-5 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-1 overflow-hidden">
                    <div
                      className="bg-indigo-600 dark:bg-indigo-500 h-1 rounded-full transition-all duration-1000"
                      style={{ width: `${tool.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
