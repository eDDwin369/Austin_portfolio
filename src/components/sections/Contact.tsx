"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Send, CheckCircle, Sparkles } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Product Design",
    budget: "$10k - $25k",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="06 / CONTACT"
          title="GET IN TOUCH"
          description="Open to software engineering roles, mobile platform development, and cloud service integration projects."
          align="center"
        />

        <div className="p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] glass-card border border-neutral-200/80 dark:border-neutral-800 shadow-2xl relative overflow-hidden">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-display editorial-title text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
                MESSAGE RECEIVED
              </h3>
              <p className="text-base text-neutral-600 dark:text-neutral-400 font-light max-w-md">
                Thank you, {formState.name || "friend"}. I will review your message and respond promptly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-neutral-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-neutral-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                    Engineering Focus
                  </label>
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-neutral-900 dark:text-white"
                  >
                    <option value="Mobile Development">Mobile Platform Development (Android / Kotlin)</option>
                    <option value="Cloud Integration">Cloud Service Integration & AWS</option>
                    <option value="Front-End Systems">Front-End Development & Layouts</option>
                    <option value="Profiling & Debugging">Application Profiling & Bug Fixing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                    Opportunity Type
                  </label>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-neutral-900 dark:text-white"
                  >
                    <option value="Full-Time">Full-Time Software Engineering</option>
                    <option value="Contract">Contract / Project Consulting</option>
                    <option value="Advisory">Technical Advisory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                  Tell me about the product
                </label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="What are the goals, timeline, and current state of the platform?"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-neutral-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-sm font-semibold tracking-tight shadow-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending Brief...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-indigo-400 dark:text-indigo-600" />
                    <span>Send Project Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
