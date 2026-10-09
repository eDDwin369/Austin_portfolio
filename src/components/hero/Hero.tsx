"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroImage } from "./HeroImage";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-32 md:pb-24 flex flex-col justify-between items-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/[0.06] dark:bg-indigo-500/[0.08] blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-7xl xl:max-w-[1360px] mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        {/* Desktop Split Editorial Hero Layout */}
        <div className="relative flex flex-col lg:grid lg:grid-cols-12 items-center gap-8 lg:gap-4 xl:gap-6">
          {/* Left Column: Eyebrow + First half of headline */}
          <div className="w-full lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span className="text-[11px] uppercase tracking-widest font-semibold text-neutral-600 dark:text-neutral-300">
                Austin Paul
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                Software Engineer
              </span>
              <h1 className="font-display editorial-title text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[5.25rem] font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[0.9] whitespace-nowrap">
                SOFTWARE
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light max-w-sm hidden lg:block leading-relaxed"
            >
              Passionate and results-driven Software Engineer with extensive experience in mobile platform development and cloud service integration. Developing high-performance applications and clean, reliable code.
            </motion.p>
          </div>

          {/* Center Column: Portrait with 3D tilt & floating 'Hi' element */}
          <div className="w-full lg:col-span-4 flex justify-center z-20 order-1 lg:order-2">
            <HeroImage />
          </div>

          {/* Right Column: Second half of headline + CTAs */}
          <div className="w-full lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-3 -mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display editorial-title text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[5.25rem] font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[0.9] whitespace-nowrap">
                ENGINEER
              </h1>
            </motion.div>

            {/* Mobile / Tablet Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light max-w-md lg:hidden leading-relaxed"
            >
              Passionate and results-driven Software Engineer with extensive experience in mobile platform development and cloud service integration. Developing high-performance applications and clean, reliable code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <MagneticButton>
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-xs sm:text-sm font-semibold tracking-tight shadow-lg shadow-black/10 hover:shadow-indigo-500/20 transition-all duration-300"
                >
                  <span>View Projects</span>
                  <ArrowDown className="w-4 h-4 text-indigo-400 dark:text-indigo-600" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Micro credentials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 flex items-center gap-4 text-[11px] text-neutral-400 dark:text-neutral-500 tracking-wider uppercase font-mono"
            >
              <span>Android & Kotlin</span>
              <span>•</span>
              <span>AWS Cloud</span>
              <span>•</span>
              <span>Available Now</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Theme Toggle Switch right below the hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-12 flex flex-col items-center gap-2"
      >
        <ThemeToggle />
        <span className="text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600 font-medium">
          Toggle Palette
        </span>
      </motion.div>
    </section>
  );
}
