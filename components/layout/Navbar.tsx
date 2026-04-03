"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#services", label: "서비스" },
  { href: "#about", label: "소개" },
  { href: "#content", label: "콘텐츠" },
  { href: "#contact", label: "문의" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <span
              className="font-display text-xl font-bold tracking-wide"
              style={{ color: "var(--brand-forest)" }}
            >
              Fredlab
            </span>
            <span
              className="text-xs px-1.5 py-0.5 rounded font-semibold"
              style={{
                background: "var(--brand-lime)",
                color: "var(--brand-forest)",
              }}
            >
              창업교육
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-forest"
                style={{ color: "var(--muted)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
              style={{
                background: "var(--brand-forest)",
                color: "white",
              }}
            >
              코칭 신청
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <div className="w-5 h-0.5 bg-current mb-1.5 transition-all" />
            <div className="w-5 h-0.5 bg-current mb-1.5 transition-all" />
            <div className="w-5 h-0.5 bg-current transition-all" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass rounded-xl mb-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-sm font-medium border-b last:border-0"
                style={{ borderColor: "var(--border)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-3 px-4 py-2 rounded-lg text-sm font-semibold text-center"
              style={{
                background: "var(--brand-forest)",
                color: "white",
              }}
              onClick={() => setMenuOpen(false)}
            >
              코칭 신청
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
