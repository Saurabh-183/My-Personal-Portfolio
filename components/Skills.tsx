import { portfolioData } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { 
  Code2, 
  MonitorSmartphone, 
  Database, 
  Cloud, 
  BrainCircuit, 
  Atom, 
  Wrench 
} from "lucide-react";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Languages": return <Code2 size={20} />;
    case "Frontend": return <MonitorSmartphone size={20} />;
    case "Backend & Database": return <Database size={20} />;
    case "Cloud & DevOps": return <Cloud size={20} />;
    case "Software Engineering": return <BrainCircuit size={20} />;
    case "Advanced React": return <Atom size={20} />;
    case "Tools": return <Wrench size={20} />;
    default: return <Code2 size={20} />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-8 md:px-16 relative bg-transparent">
      <SectionHeader num="01" title="Technical Skills" />

      {/* ----------------- DARK MODE UI ----------------- */}
      <div className="hidden dark:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {portfolioData.skills.map((skill, i) => (
          <Reveal key={skill.category} delay={i * 80}>
            <div
              data-hover
              className="group bg-[#0f1922] border border-[rgba(0,245,212,0.15)] p-8 relative overflow-hidden transition-all duration-500 hover:border-[rgba(0,245,212,0.4)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4),0_0_50px_rgba(0,245,212,0.1)] h-full flex flex-col rounded-sm"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00f5d4] to-[rgba(0,245,212,0.2)] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00f5d4] opacity-0 blur-[60px] group-hover:opacity-20 transition-opacity duration-500 rounded-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 bg-[rgba(0,245,212,0.05)] border border-[rgba(0,245,212,0.2)] rounded-md group-hover:scale-110 group-hover:bg-[rgba(0,245,212,0.1)] transition-all duration-300 text-[#00f5d4]">
                  {getCategoryIcon(skill.category)}
                </div>
                <p className="font-mono text-[#e8f4f8] text-[0.85rem] tracking-[0.1em] uppercase font-semibold">
                  {skill.category}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-[0.8rem] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] text-[#7a99a8] font-mono hover:bg-[rgba(0,245,212,0.1)] hover:text-[#00f5d4] hover:border-[rgba(0,245,212,0.4)] transition-colors duration-300 cursor-default rounded-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ----------------- LIGHT MODE UI ----------------- */}
      <div className="block dark:hidden max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((skill, i) => (
            <Reveal key={skill.category} delay={i * 80}>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{skill.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </section>
  );
}
