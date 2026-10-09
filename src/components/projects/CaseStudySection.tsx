"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project, projects } from "@/data/projects";
import { ArrowRight, CheckCircle2, Quote, Sparkles, TrendingUp, Layers, Compass } from "lucide-react";

interface CaseStudySectionProps {
  project: Project;
}

export function CaseStudySection({ project }: CaseStudySectionProps) {
  // Find next project in the list for smooth cycling
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="py-12 md:py-20 space-y-24 md:space-y-36">
      {/* 01. Overview & Problem */}
      <section className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 font-mono">
              01 / OVERVIEW
            </span>
            <h2 className="font-display editorial-title text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mt-1">
              THE CONTEXT & FRICTION
            </h2>
          </div>

          <div className="md:col-span-8 space-y-6 text-neutral-700 dark:text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
            <p>{project.overview}</p>
            <div className="p-6 sm:p-8 rounded-2xl bg-amber-500/[0.06] border border-amber-500/20 text-neutral-900 dark:text-neutral-100">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-2">
                Core Problem Statement:
              </span>
              <p className="text-base font-normal leading-snug">
                {project.problem}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Goals & Strategic Objectives */}
      <section className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 font-mono">
              02 / OBJECTIVES
            </span>
            <h2 className="font-display editorial-title text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mt-1">
              GOALS & CRITICAL SUCCESS METRICS
            </h2>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.goals.map((goal, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl glass-card flex items-start gap-3.5"
                >
                  <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
                    0{i + 1}
                  </span>
                  <p className="text-sm text-neutral-800 dark:text-neutral-200 font-normal leading-relaxed">
                    {goal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03. Research & User Quotes */}
      <section className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40">
          <div className="flex items-center gap-2 mb-4 text-indigo-600 dark:text-indigo-400">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-widest">
              Field Discovery & Insights
            </span>
          </div>

          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-light leading-relaxed mb-8">
            {project.research.methodology}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {project.research.keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/80 dark:bg-neutral-900/80 border border-indigo-200/50 dark:border-indigo-800/40 text-xs text-neutral-700 dark:text-neutral-300 font-light leading-relaxed"
              >
                <span className="font-mono text-indigo-500 font-bold block mb-1">
                  Key Insight {idx + 1}
                </span>
                {finding}
              </div>
            ))}
          </div>

          {/* User Research Quote */}
          <div className="pt-6 border-t border-indigo-200/60 dark:border-indigo-900/40 flex items-start gap-4">
            <Quote className="w-8 h-8 text-indigo-500/40 shrink-0 mt-1" />
            <div>
              <p className="italic text-base sm:text-lg text-neutral-800 dark:text-neutral-200 font-serif">
                &ldquo;{project.research.userQuote.text}&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                {project.research.userQuote.author} •{" "}
                <span className="font-normal">{project.research.userQuote.role}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Solution & User Flow Architecture */}
      <section className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 font-mono">
              03 / ARCHITECTURE
            </span>
            <h2 className="font-display editorial-title text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mt-1">
              THE SOLUTION & USER FLOW
            </h2>
          </div>

          <div className="md:col-span-8 space-y-6">
            <p className="text-neutral-700 dark:text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
              {project.solution}
            </p>

            <div className="p-6 rounded-2xl glass-card">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-2">
                Unified Flow Pipeline:
              </span>
              <p className="text-sm font-mono text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {project.userFlowSummary}
              </p>
            </div>

            <div className="pt-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block mb-3">
                Key Design Decisions:
              </span>
              <ul className="space-y-3">
                {project.designDecisions.map((decision, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 font-light"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Deep-Dive Custom Sections if any */}
      {project.sections && project.sections.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 md:px-12 space-y-12">
          {project.sections.map((sec, idx) => (
            <div
              key={sec.title}
              className="p-8 sm:p-12 rounded-[2.5rem] glass-card"
            >
              <div className="max-w-2xl mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                  Feature Spotlight 0{idx + 1}
                </span>
                <h3 className="font-display editorial-title text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mt-1">
                  {sec.title}
                </h3>
                {sec.subtitle && (
                  <p className="text-xs uppercase tracking-wider font-medium text-neutral-500 mt-1">
                    {sec.subtitle}
                  </p>
                )}
              </div>

              <p className="text-base text-neutral-600 dark:text-neutral-300 font-light leading-relaxed mb-6">
                {sec.content}
              </p>

              {sec.points && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80">
                  {sec.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-xs text-neutral-800 dark:text-neutral-200"
                    >
                      {pt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* 06. Results & Quantifiable Impact */}
      <section className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="p-8 sm:p-14 rounded-[2.5rem] bg-neutral-900 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-widest font-mono text-indigo-400 mb-2 block">
              04 / QUANTITATIVE IMPACT
            </span>
            <h2 className="font-display editorial-title text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              MEASURABLE RESULTS
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mb-10">
              {project.impact}
            </p>

            {/* Stat Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-neutral-800">
              {project.results.map((res, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display font-bold text-5xl sm:text-6xl text-indigo-400 leading-none">
                    {res.stat}
                  </span>
                  <span className="mt-2 text-xs sm:text-sm text-neutral-300 font-medium">
                    {res.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07. Next Project Navigation Card */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pt-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 mb-4">
            Up Next
          </span>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group block relative w-full rounded-[2.5rem] overflow-hidden border border-neutral-200/80 dark:border-neutral-800 bg-neutral-950 p-8 sm:p-14 text-white hover:border-indigo-500/50 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  {nextProject.category}
                </span>
                <h3 className="font-display editorial-title text-4xl sm:text-6xl font-bold text-white mt-1 group-hover:text-indigo-300 transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-sm text-neutral-400 font-light mt-2 max-w-lg line-clamp-1">
                  {nextProject.description}
                </p>
              </div>

              <div className="w-16 h-16 rounded-full bg-white text-neutral-950 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
