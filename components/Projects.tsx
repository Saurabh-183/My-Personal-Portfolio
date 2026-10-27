"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Next.js", "React", "PHP"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.stack.some((tech) =>
      tech.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  return (
    <section id="projects" className="py-28 px-8 md:px-16 relative bg-transparent">
      <SectionHeader num="03" title="Key Projects" />

      {/* ----------------- DARK MODE UI ----------------- */}
      <div className="hidden dark:block">
        <Reveal>
          <div className="flex flex-wrap gap-4 mb-12 border-b border-[rgba(0,245,212,0.1)] pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-mono text-xs tracking-wider uppercase pb-2 relative transition-colors duration-300 ${
                  activeFilter === cat ? "text-[#00f5d4]" : "text-[#7a99a8] hover:text-white"
                }`}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeFilterDark"
                    className="absolute bottom-[-17px] left-0 right-0 h-0.5 bg-[#00f5d4]"
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.num}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div
                  data-hover
                  className="group bg-[#0f1922] border border-[rgba(0,245,212,0.15)] p-7 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 hover:border-[rgba(0,245,212,0.35)] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(0,245,212,0.1)] h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,245,212,0.02)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  {project.featured && (
                    <span className="absolute top-4 right-4 font-mono text-[0.6rem] text-[#00f5d4] border border-[rgba(0,245,212,0.3)] px-2 py-0.5 tracking-widest">
                      FEATURED
                    </span>
                  )}
                  <span className="font-mono text-[0.62rem] text-[#00f5d4] opacity-40 tracking-[0.25em]">
                    PROJECT / {project.num}
                  </span>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-[#00f5d4] transition-colors duration-200 text-white">
                    {project.title}
                  </h3>
                  <p className="text-[#7a99a8] text-sm leading-relaxed font-light flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[0.62rem] text-[#00f5d4] border border-[rgba(0,245,212,0.2)] px-2 py-0.5 tracking-wide"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {(project.live || project.github) && (
                    <a
                      href={project.live || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#00f5d4] flex items-center gap-2 group/link w-fit hover:gap-3 transition-all duration-200 mt-2"
                    >
                      {project.live || (project.github && project.github.includes("vercel.app")) ? "Live Demo" : "View Project"}
                      <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ----------------- LIGHT MODE UI ----------------- */}
      <div className="block dark:hidden max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm ${
                  activeFilter === cat 
                    ? "bg-slate-900 text-white shadow-slate-900/20" 
                    : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.num}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 h-full flex flex-col group relative overflow-hidden">
                  
                  {/* Decorative background circle */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                  {project.featured && (
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-100">
                        Featured
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors relative z-10">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed mb-8 flex-1 relative z-10">
                    {project.description}
                  </p>

                  <div className="mt-auto relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold rounded-md"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {(project.live || project.github) && (
                      <a
                        href={project.live || project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-md"
                      >
                        {project.live || (project.github && project.github.includes("vercel.app")) ? "Launch Live Demo" : "View Source Code"}
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

    </section>
  );
}
