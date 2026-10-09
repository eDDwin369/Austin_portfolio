"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  variant?: "pill" | "icon" | "minimal";
  className?: string;
  showLabels?: boolean;
}

export function ThemeToggle({
  variant = "pill",
  className = "",
  showLabels = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  if (variant === "icon") {
    return (
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        className={`p-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-800 dark:text-neutral-200 ${className}`}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600" />
        )}
      </button>
    );
  }

  // Reference-style pill switch toggle
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {showLabels && (
        <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
          Light
        </span>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        onClick={toggleTheme}
        aria-label="Toggle dark/light theme"
        className="relative w-12 h-6.5 rounded-full p-0.5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer"
        style={{
          backgroundColor: isDark ? "#6366f1" : "#5e5ce6",
        }}
      >
        <motion.div
          className="w-5.5 h-5.5 rounded-full bg-white shadow-md flex items-center justify-center"
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 35,
          }}
          animate={{
            x: isDark ? 22 : 0,
          }}
        >
          {isDark ? (
            <Moon className="w-2.5 h-2.5 text-indigo-600" />
          ) : (
            <Sun className="w-2.5 h-2.5 text-indigo-500" />
          )}
        </motion.div>
      </button>
      {showLabels && (
        <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
          Dark
        </span>
      )}
    </div>
  );
}
