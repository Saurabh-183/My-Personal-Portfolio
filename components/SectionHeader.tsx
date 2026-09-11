import Reveal from "./Reveal";

interface Props {
  title: string;
  num: string;
}

export default function SectionHeader({ title, num }: Props) {
  return (
    <Reveal>
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-xl md:text-2xl text-blue-600 dark:text-[#00f5d4] font-light">
          {num}.
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#e8f4f8]">
          {title}
        </h2>
        <div className="flex-1 h-px bg-slate-200 dark:bg-[rgba(0,245,212,0.15)] ml-4" />
      </div>
    </Reveal>
  );
}
