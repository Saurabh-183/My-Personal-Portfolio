"use client";

import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { motion } from "framer-motion";

const bubbleData = [
  { size: 40, left: 10, duration: 15, delay: 0 },
  { size: 80, left: 25, duration: 20, delay: 2 },
  { size: 30, left: 40, duration: 12, delay: 5 },
  { size: 60, left: 65, duration: 18, delay: 1 },
  { size: 50, left: 80, duration: 16, delay: 4 },
  { size: 90, left: 90, duration: 22, delay: 0 },
  { size: 45, left: 50, duration: 14, delay: 3 },
  { size: 25, left: 15, duration: 10, delay: 1 },
  { size: 70, left: 75, duration: 19, delay: 6 },
  { size: 35, left: 35, duration: 13, delay: 2 },
];

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen">
      
      {/* ----------------- UNIVERSAL BACKGROUND ANIMATIONS ----------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* 1. Floating Upward Bubbles */}
        {bubbleData.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-slate-300 dark:border-[#00f5d4]/20 bg-slate-200/50 dark:bg-[#00f5d4]/10 backdrop-blur-[2px]"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              bottom: -100,
            }}
            animate={{
              y: [0, -1200],
              x: [0, 30, -30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              ease: "linear",
              delay: b.delay,
            }}
          />
        ))}

        {/* 2. Floating Animated Small Particles */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-500 dark:bg-[#00f5d4] blur-sm"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }} 
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full bg-indigo-500 dark:bg-[#00f5d4] blur-md"
        />

        {/* 3. Floating 3D Ball Animations */}
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-32 h-32 rounded-full pointer-events-none shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4),inset_-10px_-10px_20px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_-10px_rgba(0,245,212,0.2),inset_-10px_-10px_20px_rgba(0,0,0,0.4)]"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to))",
          }}
        >
          {/* We use standard Tailwind from/via/to colors to feed the radial gradient above */}
          <div className="hidden dark:block from-[#e8f4f8] via-[#00f5d4] to-[#054f46]" />
          <div className="block dark:hidden from-[#60a5fa] via-[#3b82f6] to-[#1e3a8a]" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -15, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[25%] left-[5%] w-20 h-20 rounded-full pointer-events-none shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3),inset_-5px_-5px_10px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_20px_-5px_rgba(0,245,212,0.2),inset_-5px_-5px_10px_rgba(0,0,0,0.4)]"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to))",
          }}
        >
          <div className="hidden dark:block from-[#e8f4f8] via-[#00f5d4] to-[#054f46]" />
          <div className="block dark:hidden from-[#93c5fd] via-[#2563eb] to-[#1e3a8a]" />
        </motion.div>

      </div>

      {/* ----------------- DARK MODE UI ----------------- */}
      <div className="hidden dark:block min-h-screen px-8 md:px-16 relative overflow-hidden pointer-events-none">
        
        {/* Content */}
        <div className="relative z-10 max-w-2xl pt-32 h-full flex flex-col justify-center min-h-screen pointer-events-auto">
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span className="w-10 h-px bg-[#00f5d4]" />
            <span className="font-mono text-[#00f5d4] text-xs tracking-[0.2em] uppercase">
              {personal.role}
            </span>
          </div>

          <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-none mb-4 tracking-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Saurabh
            <span className="text-[#00f5d4] block">Agnihotri</span>
          </h1>

          <p className="font-mono text-[#7a99a8] text-sm md:text-base mb-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            React.js · Next.js · Node.js · Tailwind CSS · MySQL
          </p>

          <p className="text-[#7a99a8] text-base md:text-lg leading-relaxed max-w-lg mb-10 font-light animate-fade-up" style={{ animationDelay: "0.6s" }}>
            {personal.summary}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="#projects"
              className="clip-btn px-8 py-3 bg-[#00f5d4] text-[#050a0e] font-bold text-sm tracking-wide hover:bg-[#00e5c4] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,245,212,0.3)] transition-all"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1YMKwiotnxrlxTXsR287V4BJ5YaXGeyVK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[#00f5d4] text-[#00f5d4] font-semibold text-sm tracking-wide hover:bg-[rgba(0,245,212,0.08)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              View Resume
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-14 pt-8 border-t border-[rgba(0,245,212,0.1)] animate-fade-up" style={{ animationDelay: "1s" }}>
            <div>
              <div className="text-2xl font-bold text-[#00f5d4]">2+</div>
              <div className="text-xs text-[#7a99a8] font-mono tracking-wider uppercase mt-0.5">Years Exp.</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#00f5d4]">6+</div>
              <div className="text-xs text-[#7a99a8] font-mono tracking-wider uppercase mt-0.5">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#00f5d4]">8.1</div>
              <div className="text-xs text-[#7a99a8] font-mono tracking-wider uppercase mt-0.5">CGPA</div>
            </div>
          </div>
        </div>

        {/* Photo */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="hidden lg:block absolute right-[6%] top-[25%] -translate-y-1/2 z-10 animate-fade-up pointer-events-auto"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="relative w-[320px] xl:w-[380px]">
            <div className="absolute inset-0 rounded-2xl bg-[#00f5d4] opacity-10 blur-3xl scale-110" />
            <Image
              src={personal.avatarDark}
              alt="Saurabh Agnihotri"
              width={380}
              height={380}
              className="rounded-2xl border-2 border-[#00f5d4] relative z-10 saturate-110 object-cover"
              style={{ boxShadow: "0 0 60px rgba(0,245,212,0.2), 0 0 120px rgba(0,245,212,0.08)" }}
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* ----------------- LIGHT MODE UI ----------------- */}
      <div className="block dark:hidden min-h-screen px-8 md:px-16 relative border-b border-slate-200 overflow-hidden pointer-events-none">
        
        <div className="relative z-10 max-w-6xl mx-auto pt-32 h-full flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12 pointer-events-auto">
          
          {/* Text Content */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-white border border-slate-200 text-slate-700 font-mono text-xs font-semibold uppercase tracking-wider rounded-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              {personal.role}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 font-sans">
              Hi, I'm <br/><span className="text-blue-600">Saurabh.</span>
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed max-w-xl mb-8 font-medium">
              {personal.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {['React.js', 'Next.js', 'Node.js', 'Tailwind CSS', 'MySQL'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 font-mono text-xs font-semibold shadow-sm rounded-sm">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 bg-slate-900 text-white font-medium text-sm hover:bg-blue-600 transition-colors rounded-sm shadow-md"
              >
                Explore Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1iRQAR9Qza7rcpevBGVAUfJ4XZRnbqZob/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white text-slate-900 border border-slate-200 font-medium text-sm hover:bg-slate-50 transition-colors rounded-sm shadow-sm"
              >
                View Resume
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-8 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-slate-900">2+</div>
                <div className="text-xs text-slate-500 font-mono tracking-wider uppercase mt-1 font-semibold">Years Exp.</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">6+</div>
                <div className="text-xs text-slate-500 font-mono tracking-wider uppercase mt-1 font-semibold">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">8.1</div>
                <div className="text-xs text-slate-500 font-mono tracking-wider uppercase mt-1 font-semibold">CGPA</div>
              </div>
            </div>
          </div>

          {/* Profile Image (Sharp, structural layout) */}
          <div className="w-full lg:w-[400px] relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-slate-200 translate-x-4 translate-y-4 rounded-xl" />
            <div className="absolute inset-0 bg-blue-100 translate-x-2 translate-y-2 rounded-xl" />
            <div className="relative bg-white border border-slate-200 p-2 rounded-xl shadow-lg">
              <Image
                src={personal.avatarLight}
                alt="Saurabh Agnihotri"
                width={400}
                height={400}
                className="rounded-lg object-cover w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}