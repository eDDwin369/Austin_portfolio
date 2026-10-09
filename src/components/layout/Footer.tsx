"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Copy, Check, Mail, Phone, ExternalLink } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const email = "austinpaul1893@gmail.com";
  const phone = "+91 9400486997";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden border-t border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/60">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main CTA Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 pb-20 border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-4 inline-block">
              Open for Software Engineering Roles
            </span>
            <h2 className="font-display editorial-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              BUILDING SCALABLE <br />
              <span className="text-indigo-600 dark:text-indigo-400">MOBILE SYSTEMS</span>
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-light max-w-xl">
              Passionate and results-driven Software Engineer with extensive experience in mobile platform development and cloud service integration. Seeking to add immediate value to high-quality engineering operations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-sm font-semibold tracking-tight shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-indigo-400 dark:text-indigo-600" />
                <span>Write an Email</span>
              </a>

              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-neutral-400" />
                <span>{phone}</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Socials & Location */}
          <div className="flex flex-col gap-6 lg:text-right">
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-400 block mb-2 font-medium">
                Focus & Availability
              </span>
              <p className="text-base font-medium text-neutral-800 dark:text-neutral-200">
                Mobile Platforms & Cloud Integration
              </p>
              <p className="text-sm text-neutral-500 font-mono mt-0.5">
                {currentTime ? `${currentTime} • Open to Remote & On-Site` : "Available Now"}
              </p>
            </div>

            <div className="flex items-center lg:justify-end gap-3 pt-2">
              <a
                href="https://linkedin.com/in/austinpaul1893"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                </svg>
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Large Decorative Watermark Typography */}
        <div className="py-12 select-none overflow-hidden">
          <p className="font-display editorial-title text-[13vw] font-black tracking-tighter text-neutral-950/[0.04] dark:text-white/[0.04] leading-none whitespace-nowrap text-center">
            AUSTIN PAUL
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-neutral-500 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} Austin Paul. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Available for Software Engineering Roles
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
