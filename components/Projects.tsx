import { portfolioData } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-8 md:px-16 bg-[#0a1118]">
      <SectionHeader num="03" title="Key Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {portfolioData.projects.map((project, i) => (
          <Reveal key={project.num} delay={i * 60}>
            <div
              data-hover
              className="group bg-[#0f1922] border border-[rgba(0,245,212,0.15)] p-7 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 hover:border-[rgba(0,245,212,0.35)] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(0,245,212,0.1)] h-full"
            >
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,245,212,0.02)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {project.featured && (
                <span className="absolute top-4 right-4 font-mono text-[0.6rem] text-[#00f5d4] border border-[rgba(0,245,212,0.3)] px-2 py-0.5 tracking-widest">
                  FEATURED
                </span>
              )}

              <span className="font-mono text-[0.62rem] text-[#00f5d4] opacity-40 tracking-[0.25em]">
                PROJECT / {project.num}
              </span>

              <h3 className="text-lg font-bold leading-tight group-hover:text-[#00f5d4] transition-colors duration-200">
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

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#00f5d4] flex items-center gap-2 group/link w-fit hover:gap-3 transition-all duration-200"
              >
                View on GitHub
                <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
