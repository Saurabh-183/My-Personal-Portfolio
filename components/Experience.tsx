import { portfolioData } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Experience() {
  const experiences = portfolioData.experience;
  
  const educationItems = [
    {
      type: "Education",
      degree: portfolioData.education.degree,
      institution: portfolioData.education.university,
      location: portfolioData.education.location,
      period: portfolioData.education.period,
      highlightLabel: "CGPA",
      highlightValue: portfolioData.education.cgpa,
    },
    {
      type: "Intermediate",
      degree: portfolioData.intermediate.degree,
      institution: portfolioData.intermediate.school,
      location: portfolioData.intermediate.location,
      period: portfolioData.intermediate.period,
      highlightLabel: "Percentage",
      highlightValue: portfolioData.intermediate.cgpa,
    },
    {
      type: "High School",
      degree: portfolioData.highschool.degree,
      institution: portfolioData.highschool.school,
      location: portfolioData.highschool.location,
      period: portfolioData.highschool.period,
      highlightLabel: "Percentage",
      highlightValue: portfolioData.highschool.cgpa,
    }
  ];

  return (
    <section id="experience" className="py-28 px-8 md:px-16 relative bg-transparent">
      <SectionHeader num="02" title="Experience & Education" />

      {/* ----------------- DARK MODE UI ----------------- */}
      <div className="hidden dark:block max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute left-[220px] top-4 bottom-0 w-px bg-gradient-to-b from-[#00f5d4] via-[rgba(0,245,212,0.2)] to-transparent" />
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <Reveal key={i}>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-20 relative group">
                  <div className="hidden md:block absolute left-[220px] top-2 w-3 h-3 bg-[#050a0e] border-2 border-[#00f5d4] rounded-full transform -translate-x-[6px] group-hover:bg-[#00f5d4] group-hover:shadow-[0_0_15px_rgba(0,245,212,0.8)] transition-all duration-300 z-10" />
                  <div className="pt-1">
                    <p className="font-mono text-[#00f5d4] text-sm leading-relaxed">{exp.period}</p>
                    <p className="text-[#7a99a8] text-xs font-mono mt-2 opacity-70">{exp.location}</p>
                  </div>
                  <div className="bg-[#0a1118] border border-[rgba(0,245,212,0.1)] p-8 rounded-sm hover:border-[rgba(0,245,212,0.3)] transition-colors relative">
                    <div className="hidden md:block absolute top-3 -left-[9px] w-4 h-4 bg-[#0a1118] border-l border-b border-[rgba(0,245,212,0.1)] transform rotate-45 group-hover:border-[rgba(0,245,212,0.3)] transition-colors" />
                    <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                    <p className="font-mono text-[#00f5d4] text-sm mb-6">{exp.role}</p>
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
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(0,245,212,0.1)] to-transparent my-4" />

          <div className="flex flex-col gap-12">
            {educationItems.map((item, i) => (
              <Reveal key={i}>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-20 relative group">
                  <div className="hidden md:block absolute left-[220px] top-2 w-3 h-3 bg-[#050a0e] border-2 border-[#7a99a8] rounded-full transform -translate-x-[6px] group-hover:bg-[#00f5d4] group-hover:border-[#00f5d4] group-hover:shadow-[0_0_15px_rgba(0,245,212,0.8)] transition-all duration-300 z-10" />
                  <div className="pt-1">
                    <p className="font-mono text-[#7a99a8] group-hover:text-[#00f5d4] transition-colors text-sm leading-relaxed">{item.period}</p>
                    <p className="text-[#7a99a8] text-xs font-mono mt-2 opacity-70">{item.location}</p>
                  </div>
                  <div className="bg-[#0a1118] border border-[rgba(0,245,212,0.05)] p-8 rounded-sm hover:border-[rgba(0,245,212,0.2)] transition-colors relative">
                     <div className="hidden md:block absolute top-3 -left-[9px] w-4 h-4 bg-[#0a1118] border-l border-b border-[rgba(0,245,212,0.05)] transform rotate-45 group-hover:border-[rgba(0,245,212,0.2)] transition-colors" />
                    <span className="text-xs font-mono text-[#00f5d4] mb-2 block tracking-widest uppercase opacity-60">{item.type}</span>
                    <h3 className="text-xl font-bold mb-1 text-[#e8f4f8]">{item.degree}</h3>
                    <p className="font-mono text-[#7a99a8] text-sm mb-6">{item.institution}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(0,245,212,0.05)] border border-[rgba(0,245,212,0.15)]">
                      <span className="text-[#00f5d4] font-mono text-sm">{item.highlightLabel}</span>
                      <span className="text-white font-bold">{item.highlightValue}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ----------------- LIGHT MODE UI ----------------- */}
      <div className="block dark:hidden max-w-6xl mx-auto">
        <div className="space-y-16">
          
          {/* Work Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 border-b border-slate-200 pb-2 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <Reveal key={i}>
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-left md:text-right">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-1">
                          {exp.period}
                        </span>
                        <p className="text-slate-500 text-sm">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-6">
                      {exp.points.map((point, j) => (
                        <li key={j} className="text-slate-600 text-[0.95rem] leading-relaxed flex items-start gap-3">
                          <span className="text-blue-500 font-bold mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8 pt-8">
            <h3 className="text-2xl font-bold text-slate-800 border-b border-slate-200 pb-2 flex items-center gap-2">
              <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
              Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationItems.map((item, i) => (
                <Reveal key={i}>
                  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <span className="text-xs font-bold text-indigo-500 mb-2 uppercase tracking-wider">{item.type}</span>
                    <h4 className="text-lg font-bold text-slate-900 leading-snug mb-1">{item.degree}</h4>
                    <p className="text-slate-600 font-medium text-sm mb-4">{item.institution}</p>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-sm text-slate-500">{item.period}</div>
                      <div className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-bold">
                        {item.highlightLabel}: {item.highlightValue}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
