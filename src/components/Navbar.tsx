"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <a
          href="#home"
          className="font-heading text-2xl font-bold tracking-tight"
          style={{ color: scrolled ? "var(--color-primary)" : "#fff" }}
        >
          Hello Nails<span className="text-accent"> 128</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-[0.8rem] uppercase tracking-[0.15em] font-medium transition-colors duration-300"
              style={{ color: scrolled ? "var(--color-text)" : "#fff" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 bg-accent text-white text-[0.8rem] uppercase tracking-[0.15em] font-medium px-7 py-2.5 rounded-full hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] transition-all duration-300 ${
              menuOpen
                ? "rotate-45 translate-y-[0px] bg-white"
                : scrolled
                ? "bg-primary -translate-y-1.5"
                : "bg-white -translate-y-1.5"
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] transition-all duration-300 ${
              menuOpen
                ? "opacity-0"
                : scrolled
                ? "bg-primary"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] transition-all duration-300 ${
              menuOpen
                ? "-rotate-45 translate-y-[0px] bg-white"
                : scrolled
                ? "bg-primary translate-y-1.5"
                : "bg-white translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-primary/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {menuOpen &&
          navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="menu-item-stagger text-white text-2xl font-heading font-semibold tracking-wide my-4 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        {menuOpen && (
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="menu-item-stagger mt-8 bg-accent text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:scale-[1.03] transition-all"
          >
            Contact
          </a>
        )}
      </div>
    </header>
  );
}
