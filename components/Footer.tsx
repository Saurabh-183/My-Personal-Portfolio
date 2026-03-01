import { portfolioData } from "@/lib/data";

export default function Footer() {
  const { personal } = portfolioData;
  return (
    <footer className="py-6 px-8 md:px-16 border-t border-[rgba(0,245,212,0.1)] flex flex-col sm:flex-row justify-between items-center gap-2 bg-[#050a0e]">
      <span className="font-mono text-[#7a99a8] text-xs">© 2026 Saurabh Agnihotri</span>
      <span className="font-mono text-[#7a99a8] text-xs">
        Frontend Developer · {personal.location}
      </span>
    </footer>
  );
}
