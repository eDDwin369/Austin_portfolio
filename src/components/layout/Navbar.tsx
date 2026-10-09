"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  isAnchor?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section on home page
      if (pathname === "/") {
        const sections = ["experience", "projects", "about"];
        let current = "Home";
        for (const sec of sections) {
          const el = document.getElementById(sec);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 150) {
              current = sec.charAt(0).toUpperCase() + sec.slice(1);
              break;
            }
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-5 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-7 px-3.5 py-2 md:py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/85 dark:bg-neutral-900/85 backdrop-blur-xl shadow-lg shadow-black/[0.04] dark:shadow-black/40 border border-neutral-200/80 dark:border-neutral-800"
              : "bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/60"
          }`}
        >
          {/* Avatar / Brand pill */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group pr-1"
            aria-label="Home - Austin Paul"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-neutral-200 dark:ring-neutral-700 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/profile-portrait.png"
                alt="Austin Paul"
                fill
                unoptimized={true}
                className="object-cover object-top"
                priority
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white dark:ring-neutral-900 animate-pulse" />
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="text-xs font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Austin Paul
              </span>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-normal">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection.toLowerCase() === link.name.toLowerCase();
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-[13px] font-medium tracking-tight rounded-full transition-colors ${
                    isActive
                      ? "text-neutral-950 dark:text-white font-semibold"
                      : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800/80 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right actions: Theme Toggle + Contact Button */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle variant="minimal" />

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-4 py-1.5 md:py-2 text-xs md:text-[13px] font-medium tracking-tight text-white bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 rounded-full shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact
            </Link>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 md:hidden rounded-full text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
                Navigation
              </span>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display editorial-title text-3xl font-bold text-neutral-900 dark:text-neutral-100 hover:text-indigo-600 transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-6 h-6 text-neutral-400" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-500">Theme</span>
                <ThemeToggle showLabels />
              </div>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center text-sm font-semibold rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-md"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
