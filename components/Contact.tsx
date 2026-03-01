import { portfolioData } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-28 px-8 md:px-16 bg-[#0a1118]">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <p className="font-mono text-[#00f5d4] text-xs tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[#00f5d4]" />
            06
            <span className="w-8 h-px bg-[#00f5d4]" />
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight mb-4">
            {"Let's build something"}{" "}
            <span className="text-[#00f5d4]">great</span>
          </h2>
          <p className="text-[#7a99a8] text-lg font-light mb-10">
            Open to new opportunities, collaborations, and interesting projects.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex justify-center gap-4 flex-wrap mb-10">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-6 py-3 border border-[rgba(0,245,212,0.2)] text-[#7a99a8] text-sm hover:border-[#00f5d4] hover:text-[#00f5d4] hover:bg-[rgba(0,245,212,0.05)] transition-all"
            >
              <span>✉</span> Email
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[rgba(0,245,212,0.2)] text-[#7a99a8] text-sm hover:border-[#00f5d4] hover:text-[#00f5d4] hover:bg-[rgba(0,245,212,0.05)] transition-all"
            >
              <span>⬡</span> LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[rgba(0,245,212,0.2)] text-[#7a99a8] text-sm hover:border-[#00f5d4] hover:text-[#00f5d4] hover:bg-[rgba(0,245,212,0.05)] transition-all"
            >
              <span>◈</span> GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <a
            href={`mailto:${personal.email}`}
            className="font-mono text-[#00f5d4] text-base border-b border-[rgba(0,245,212,0.3)] pb-0.5 hover:border-[#00f5d4] transition-colors"
          >
            {personal.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
