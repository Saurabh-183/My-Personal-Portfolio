"use client";

import Image from "next/image";
import { portfolioData } from "@/lib/data";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-8 md:px-16 relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,245,212,0.05) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(0,200,170,0.04) 0%, transparent 60%)",
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,245,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,212,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl pt-20">
        {/* Tag */}
        <div
          className="flex items-center gap-3 mb-6"
          style={{ animation: "fadeUp 0.8s 0.2s both" }}
        >
          <span className="w-10 h-px bg-[#00f5d4]" />
          <span className="font-mono text-[#00f5d4] text-xs tracking-[0.2em] uppercase">
            Frontend Software Developer
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-none mb-4 tracking-tight"
          style={{ animation: "fadeUp 0.8s 0.4s both" }}
        >
          Saurabh
          <span className="text-[#00f5d4] block">Agnihotri</span>
        </h1>

        {/* Tech stack */}
        <p
          className="font-mono text-[#7a99a8] text-sm md:text-base mb-6"
          style={{ animation: "fadeUp 0.8s 0.6s both" }}
        >
          React.js · Next.js · Node.js · Tailwind CSS ·  MySQL
        </p>

        {/* Summary */}
        <p
          className="text-[#7a99a8] text-base md:text-lg leading-relaxed max-w-lg mb-10 font-light"
          style={{ animation: "fadeUp 0.8s 0.8s both" }}
        >
          {personal.summary}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: "fadeUp 0.8s 1s both" }}
        >
          <a
            href="#projects"
            className="clip-btn px-8 py-3 bg-[#00f5d4] text-[#050a0e] font-bold text-sm tracking-wide hover:bg-[#00e5c4] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,245,212,0.3)] transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#00f5d4] text-[#00f5d4] font-semibold text-sm tracking-wide hover:bg-[rgba(0,245,212,0.08)] hover:-translate-y-0.5 transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex gap-8 mt-14 pt-8 border-t border-[rgba(0,245,212,0.1)]"
          style={{ animation: "fadeUp 0.8s 1.2s both" }}
        >
          <div>
            <div className="text-2xl font-bold text-[#00f5d4]">1.5+</div>
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
      <div
        className="hidden lg:block absolute right-[6%] top-1/2 -translate-y-1/2"
        style={{ animation: "fadeLeft 1s 0.5s both" }}
      >
        <div className="relative w-[320px] xl:w-[380px]">
          <div className="absolute inset-0 rounded-full bg-[#00f5d4] opacity-10 blur-3xl scale-110" />
          <Image
            src={personal.avatar}
            alt="Saurabh Agnihotri"
            width={380}
            height={380}
            className="rounded-full border-2 border-[#00f5d4] relative z-10 saturate-110"
            style={{ boxShadow: "0 0 60px rgba(0,245,212,0.2), 0 0 120px rgba(0,245,212,0.08)" }}
            priority
          />
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "fadeUp 1s 1.5s both" }}
      >
        <div
          className="w-px h-12 bg-gradient-to-b from-[#00f5d4] to-transparent"
          style={{ animation: "scrollPulse 2s infinite" }}
        />
        <span className="font-mono text-[#7a99a8] text-[0.6rem] tracking-[0.2em] uppercase">Scroll</span>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateY(-50%) translateX(40px); }
          to { opacity: 1; transform: translateY(-50%) translateX(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .clip-btn {
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
      `}</style>
    </section>
  );
}
