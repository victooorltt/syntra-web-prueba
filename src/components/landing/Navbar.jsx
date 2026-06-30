import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#portfolio", label: "Trabajos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#precios", label: "Precios" },
  { href: "#por-que", label: "Sobre Syntra" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid #1C1C1C" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 sm:h-20">

        {/* Logo */}
        <a href="#hero">
          <img
            src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/5c704cbc2_423A3B0A-6F13-442D-8EC4-138FD084C212.png"
            alt="Syntra Labs"
            className="h-10 sm:h-11 w-auto object-contain"
            style={{ opacity: 0.85 }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-widest uppercase transition-colors duration-300"
              style={{ color: "#4A4A4A", letterSpacing: "0.15em" }}
              onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"}
              onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}
            >
              {link.label}
            </a>
          ))}
          <a href="#contacto">
            <button
              className="text-xs font-medium tracking-widest uppercase px-6 py-2.5 transition-all duration-300"
              style={{
                borderRadius: "3px",
                border: "1px solid #1C1C1C",
                color: "#BDBDBD",
                background: "transparent",
                letterSpacing: "0.15em",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#F5F5F5"; e.currentTarget.style.color = "#0A0A0A"; e.currentTarget.style.borderColor = "#F5F5F5"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#BDBDBD"; e.currentTarget.style.borderColor = "#1C1C1C"; }}
            >
              Propuesta
            </button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: "#4A4A4A" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden py-8 px-6"
          style={{ background: "#0A0A0A", borderTop: "1px solid #1C1C1C" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-4 text-sm tracking-widest uppercase"
              style={{ color: "#4A4A4A", borderBottom: "1px solid #1C1C1C", letterSpacing: "0.15em" }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setMobileOpen(false)} className="block mt-6">
            <button
              className="w-full py-3.5 text-sm font-medium tracking-widest uppercase"
              style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px", letterSpacing: "0.12em" }}
            >
              Solicitar Propuesta
            </button>
          </a>
        </div>
      )}
    </header>
  );
}