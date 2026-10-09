"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax movement for the image
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const isFullWidth = project.layoutType === "full";
  const isImageRight = project.layoutType === "right" || index % 2 === 1;

  if (isFullWidth) {
    return (
      <div ref={containerRef} className="py-12 md:py-20">
        <Link
          href={`/projects/${project.slug}`}
          className="group block relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-neutral-200/80 dark:border-neutral-800 bg-neutral-900 text-white shadow-2xl transition-all duration-500"
          data-cursor="view"
          data-cursor-text="Case Study"
        >
          {/* Main Full-width Image with Parallax */}
          <div className="relative h-[420px] sm:h-[520px] md:h-[640px] w-full overflow-hidden">
            <motion.div style={{ y: imageY }} className="absolute inset-0 scale-105">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </motion.div>

            {/* Dark vignette overlay for editorial contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />

            {/* Floating category badge on top-left */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-md text-white border border-white/20">
                {project.category}
              </span>
            </div>

            {/* Top right year */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8 z-10">
              <span className="text-xs font-mono tracking-widest text-neutral-300">
                {project.year}
              </span>
            </div>

            {/* Content overlay at bottom */}
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 md:p-14 z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-widest font-mono text-indigo-400 mb-2">
                  Client: {project.client}
                </p>
                <h3 className="font-display editorial-title text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light line-clamp-2 max-w-xl">
                  {project.description}
                </p>

                {/* Tool Pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/10 backdrop-blur-sm text-neutral-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Button */}
              <div className="flex items-center gap-2 self-start md:self-end">
                <span className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-neutral-950 text-xs sm:text-sm font-semibold tracking-tight shadow-xl group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  // Split Alternating Layout
  return (
    <div
      ref={containerRef}
      className="py-12 md:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80 last:border-none"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
          isImageRight ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Project Visual Container */}
        <div
          className={`lg:col-span-7 ${
            isImageRight ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="group block relative rounded-[2rem] overflow-hidden border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl"
            data-cursor="view"
            data-cursor-text="Explore"
          >
            <div className="relative h-[340px] sm:h-[440px] md:h-[500px] w-full overflow-hidden">
              <motion.div style={{ y: imageY }} className="absolute inset-0 scale-105">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </motion.div>

              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />

              {/* Floating Pill on image */}
              <div className="absolute top-5 left-5 z-10">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md text-neutral-900 dark:text-neutral-100 border border-neutral-200/60 dark:border-neutral-700/60 shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Content Side */}
        <div
          className={`lg:col-span-5 flex flex-col items-start ${
            isImageRight ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 mb-3">
            <span>{project.year}</span>
            <span>/</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
              {project.role}
            </span>
          </div>

          <h3 className="font-display editorial-title text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-none">
            {project.title}
          </h3>

          <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            {project.description}
          </p>

          {/* Tools & Key Stats */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-full text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Impact pill */}
          {project.results?.[0] && (
            <div className="mt-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
              <span className="font-display font-bold text-lg text-indigo-600 dark:text-indigo-400">
                {project.results[0].stat}
              </span>
              <span className="text-xs text-neutral-600 dark:text-neutral-400">
                {project.results[0].label}
              </span>
            </div>
          )}

          {/* CTA Link */}
          <div className="mt-8">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-tight text-neutral-950 dark:text-neutral-100 group hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <span>View Case Study</span>
              <span className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center group-hover:border-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
