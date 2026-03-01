import { portfolioData } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-8 md:px-16 bg-[#050a0e]">
      <SectionHeader num="04" title="Certifications" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {portfolioData.certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 70}>
            <div
              data-hover
              className="bg-[#0a1118] border border-[rgba(0,245,212,0.15)] p-6 flex flex-col gap-2 transition-all duration-300 hover:border-[rgba(0,245,212,0.35)] hover:bg-[#0f1922] hover:-translate-y-1"
            >
              <span className="text-2xl">{cert.icon}</span>
              <p className="font-semibold text-sm leading-tight text-[#e8f4f8]">{cert.name}</p>
              <p className="font-mono text-[#00f5d4] text-[0.65rem] tracking-wider uppercase">{cert.issuer}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Hobbies */}
      <Reveal className="mt-16">
        <div className="flex items-center gap-5 mb-6">
          <span className="font-mono text-[#00f5d4] text-xs opacity-50 tracking-widest">05</span>
          <h2 className="text-xl font-bold tracking-tight">Hobbies & Interests</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {portfolioData.hobbies.map((hobby) => (
            <span
              key={hobby}
              className="px-5 py-2 bg-[rgba(0,245,212,0.04)] border border-[rgba(0,245,212,0.12)] text-[#7a99a8] text-sm font-medium hover:text-[#00f5d4] hover:border-[rgba(0,245,212,0.3)] transition-all cursor-default"
            >
              {hobby}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
