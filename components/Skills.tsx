import { portfolioData } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-8 md:px-16 bg-[#0a1118]">
      <SectionHeader num="01" title="Technical Skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {portfolioData.skills.map((skill, i) => (
          <Reveal key={skill.category} delay={i * 80}>
            <div
              data-hover
              className="group bg-[#0f1922] border border-[rgba(0,245,212,0.15)] p-7 relative overflow-hidden transition-all duration-300 hover:border-[rgba(0,245,212,0.35)] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,245,212,0.15)]"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-0.5 h-full bg-[#00f5d4] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

              <p className="font-mono text-[#00f5d4] text-[0.68rem] tracking-[0.15em] uppercase mb-4">
                {skill.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm bg-[rgba(0,245,212,0.05)] border border-[rgba(0,245,212,0.12)] text-[#e8f4f8] font-medium hover:bg-[rgba(0,245,212,0.1)] hover:text-[#00f5d4] hover:border-[rgba(0,245,212,0.3)] transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
