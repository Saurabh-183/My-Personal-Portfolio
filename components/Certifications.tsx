import { portfolioData } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-8 md:px-16 bg-theme-bg">
      <SectionHeader num="04" title="Certifications" />

      <div className="grid max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {portfolioData.certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 70}>
            <div
              data-hover
              className="bg-theme-card border border-[rgba(var(--accent-rgb),0.15)] p-6 flex flex-col gap-2 transition-all duration-300 hover:border-[rgba(var(--accent-rgb),0.35)] hover:bg-theme-hover hover:-translate-y-1"
            >
              {/* <span className="text-2xl">{cert.icon}</span> */}
              <p className="font-semibold text-sm leading-tight text-theme-text">{cert.name}</p>
              <p className="font-mono text-theme-accent text-[0.65rem] tracking-wider uppercase">{cert.issuer}</p>
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-theme-accent hover:underline" >View </a>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Hobbies */}
      <Reveal className="mt-16 max-w-6xl mx-auto">
        <div className="flex items-center gap-5 mb-6">
          <span className="font-mono text-theme-accent text-xs opacity-50 tracking-widest">05</span>
          <h2 className="text-xl font-bold tracking-tight">Hobbies & Interests</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {portfolioData.hobbies.map((hobby) => (
            <span
              key={hobby}
              className="px-5 py-2 bg-[rgba(var(--accent-rgb),0.04)] border border-[rgba(var(--accent-rgb),0.12)] text-theme-muted text-sm font-medium hover:text-theme-accent hover:border-[rgba(var(--accent-rgb),0.3)] transition-all cursor-default"
            >
              {hobby}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
