"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(5,10,14,0.92)] backdrop-blur-xl border-b border-[rgba(0,245,212,0.12)]"
          : "bg-transparent"
      }`}
    >
      <Link href="#hero" className="font-mono text-[#00f5d4] text-lg tracking-widest hover:opacity-80 transition-opacity">
        SA_
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[#7a99a8] text-[0.8rem] tracking-[0.1em] uppercase font-medium hover:text-[#00f5d4] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-px bg-[#00f5d4] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-px bg-[#00f5d4] transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-px bg-[#00f5d4] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#050a0e] flex flex-col items-center justify-center gap-8 z-40">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#e8f4f8] text-2xl font-bold hover:text-[#00f5d4] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
