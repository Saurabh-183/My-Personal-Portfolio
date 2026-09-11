import { portfolioData } from "@/lib/data";

export default function Footer() {
  const { personal } = portfolioData;
  return (
    <footer className="py-6 px-8 md:px-16 border-t border-[rgba(var(--accent-rgb),0.1)] flex flex-col sm:flex-row justify-between items-center gap-2 bg-theme-bg">
      <span className="font-mono text-theme-muted text-xs">© 2026 Saurabh Agnihotri</span>
      <span className="font-mono text-theme-muted text-xs">
        Software Development Engineer · {personal.location}
      </span>
    </footer>
  );
}
