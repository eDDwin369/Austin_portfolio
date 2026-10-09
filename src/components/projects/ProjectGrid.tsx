"use client";

import React, { useState } from "react";
import { Project, projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ProjectGridProps {
  limit?: number;
  showFilters?: boolean;
}

export function ProjectGrid({ limit, showFilters = true }: ProjectGridProps) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = ["All", "Fintech & Mobile Banking", "AI Defense & Command Ops", "Algorithmic Trading & Analytics", "Clinical Intelligence & Hospital Ops"];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "All") return true;
    return project.category.toLowerCase().includes(selectedFilter.toLowerCase()) ||
           selectedFilter.toLowerCase().includes(project.category.toLowerCase());
  });

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="01 / PORTFOLIO"
          title="SELECTED PROJECTS"
          description="High-performance applications, consumer utilities, and mobile platforms engineered from wireframes into dependable code."
          badge={
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              6 Mobile & Cloud Projects
            </div>
          }
        />

        {/* Filter Pills */}
        {showFilters && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {["All", "Mobile", "Financial", "Retail", "Cloud"].map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-tight whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-sm"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        )}

        {/* Project List */}
        <div className="flex flex-col">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
