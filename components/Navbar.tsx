"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-theme-bg/90 backdrop-blur-xl border-b border-theme-border"
          : "bg-transparent"
      }`}
    >
      <Link href="#hero" className="font-mono text-theme-accent text-lg tracking-widest hover:opacity-80 transition-opacity">
        SA_
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-theme-muted text-[0.8rem] tracking-[0.1em] uppercase font-medium hover:text-theme-accent transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
        {mounted && (
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-theme-muted hover:text-theme-accent transition-colors p-2"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        )}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-px bg-theme-accent transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-px bg-theme-accent transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-px bg-theme-accent transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-theme-bg flex flex-col items-center justify-center gap-8 z-40">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-theme-text text-2xl font-bold hover:text-theme-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
