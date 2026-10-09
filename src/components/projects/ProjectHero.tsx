"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ArrowLeft, ExternalLink, Calendar, User, Layout, Layers } from "lucide-react";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="pt-28 md:pt-36 pb-16">
      {/* Top back navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Selected Work</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title & Category Header */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {project.year}
            </span>
          </div>

          <h1 className="font-display editorial-title text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[0.9]">
            {project.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Project Metadata Grid */}
        <div className="mt-12 py-8 border-y border-neutral-200/80 dark:border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-mono text-neutral-400 block mb-1">
              Client
            </span>
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {project.client}
            </p>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider font-mono text-neutral-400 block mb-1">
              Role
            </span>
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {project.role}
            </p>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider font-mono text-neutral-400 block mb-1">
              Timeline
            </span>
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {project.timeline}
            </p>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider font-mono text-neutral-400 block mb-1">
              Platforms
            </span>
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {project.platforms.join(", ")}
            </p>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 relative w-full h-[360px] sm:h-[500px] md:h-[650px] rounded-[2.5rem] overflow-hidden border border-neutral-200/80 dark:border-neutral-800 bg-neutral-950 shadow-2xl"
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}
