import Reveal from "./Reveal";

interface SectionHeaderProps {
  num: string;
  title: string;
}

export default function SectionHeader({ num, title }: SectionHeaderProps) {
  return (
    <Reveal className="flex items-center gap-5 mb-16">
      <span className="font-mono text-[#00f5d4] text-xs opacity-50 tracking-widest">{num}</span>
      <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-[rgba(0,245,212,0.15)] max-w-xs" />
    </Reveal>
  );
}
