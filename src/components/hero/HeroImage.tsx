"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mousePosX = (e.clientX - rect.left) / rect.width - 0.5;
    const mousePosY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mousePosX);
    y.set(mousePosY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="relative flex items-center justify-center py-4 select-none"
    >
      {/* Central Portrait Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[min(280px,calc(100vw-3rem))] sm:w-[320px] md:w-[360px] lg:w-[350px] xl:w-[390px] 2xl:w-[420px] h-[min(390px,calc((100vw-3rem)*1.35))] sm:h-[440px] md:h-[490px] lg:h-[490px] xl:h-[540px] 2xl:h-[570px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/60 border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 group"
      >
        <Image
          src="/images/profile-portrait.png"
          alt="Austin Paul - Software Engineer"
          fill
          priority
          loading="eager"
          unoptimized={true}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Crisp contrast gradient at bottom only, keeping face razor sharp */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Floating Accent Dot (upper-left near collar, matches reference) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
        className="absolute top-[28%] left-[6%] sm:left-[12%] md:left-[14%] w-3.5 h-3.5 rounded-full bg-indigo-600 shadow-lg shadow-indigo-500/50 z-20 pointer-events-none"
      />

      {/* Floating Circular 'Hi' Interaction Badge (matches reference) */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -25 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.7, type: "spring", stiffness: 220 }}
        whileHover={{ scale: 1.12, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-4 sm:bottom-6 left-[8%] sm:left-[14%] md:left-[16%] z-20 cursor-pointer"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center shadow-xl shadow-indigo-600/40 border-2 border-white dark:border-neutral-900 transition-all duration-300">
          <motion.span
            animate={{
              rotate: [0, 14, -10, 14, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="text-2xl sm:text-3xl select-none"
            role="img"
            aria-label="Waving hand greeting"
          >
            👋
          </motion.span>
        </div>
      </motion.div>

      {/* Secondary Floating Experience Badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex absolute top-12 right-2 lg:-right-6 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-pill shadow-xl text-neutral-800 dark:text-neutral-200"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <div className="text-left">
          <p className="text-[11px] uppercase tracking-wider font-bold text-neutral-900 dark:text-white leading-none">
            Software Engineer
          </p>
          <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">
            Android • Kotlin • AWS
          </p>
        </div>
      </motion.div>
    </div>
  );
}
