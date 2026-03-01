import { portfolioData } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-8 md:px-16 bg-[#050a0e]">
      <SectionHeader num="02" title="Experience" />

      <div className="max-w-4xl">
        {portfolioData.experience.map((exp, i) => (
          <Reveal key={i}>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-16 py-12 border-b border-[rgba(0,245,212,0.1)] last:border-0">
              <div>
                <p className="font-mono text-[#00f5d4] text-sm leading-relaxed">{exp.period}</p>
                <p className="text-[#7a99a8] text-xs font-mono mt-1">{exp.location}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                <p className="font-mono text-[#7a99a8] text-sm mb-6">{exp.role}</p>
                <ul className="space-y-3">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-[#7a99a8] text-[0.95rem] leading-relaxed font-light pl-5 relative">
                      <span className="absolute left-0 text-[#00f5d4]">›</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}

        {/* Education here too */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-16 py-12">
            <div>
              <p className="font-mono text-[#00f5d4] text-sm leading-relaxed">{portfolioData.education.period}</p>
              <p className="text-[#7a99a8] text-xs font-mono mt-1">{portfolioData.education.location}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">{portfolioData.education.degree}</h3>
              <p className="font-mono text-[#7a99a8] text-sm mb-4">{portfolioData.education.university}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(0,245,212,0.05)] border border-[rgba(0,245,212,0.15)]">
                <span className="text-[#00f5d4] font-mono text-sm">CGPA</span>
                <span className="text-white font-bold">{portfolioData.education.cgpa}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
