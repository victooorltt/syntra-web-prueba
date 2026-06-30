import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, X, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import SiteMockup from "./galeria/SiteMockup";
import { fadeUp, fadeUpItem, fade } from "@/lib/animations";

// ─── 4 premium projects ────────────────────────────────────────────────────
const proyectos = [
  {
    id: "inmobiliaria",
    sector: "Inmobiliaria de Lujo",
    nombre: "Silence Private Living",
    tagline: "Villas exclusivas · Captación de propietarios · Experiencia premium",
    url: "/ia-inmobiliarias",
    accent: "#C9B99A",
    bg: "#0B0D10",
    light: false,
    brand: "SILENCE",
    heroImg: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85",
    tag: "DISEÑO EDITORIAL",
    year: "2025",
  },
  {
    id: "clinica",
    sector: "Clínica Estética",
    nombre: "Clínica Estética Premium",
    tagline: "Reservas online · WhatsApp integrado · Captación automática",
    url: "/ia-clinicas-esteticas",
    accent: "#C5A059",
    bg: "#FAFAF8",
    light: true,
    brand: "ESTÉTIQUE",
    heroImg: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=85",
    tag: "CONVERSIÓN",
    year: "2025",
  },
  {
    id: "abogados",
    sector: "Despacho de Abogados",
    nombre: "Lexium Abogados",
    tagline: "Autoridad jurídica · Consultas online · Diseño corporativo premium",
    url: "/ia-despachos-abogados",
    accent: "#B8A07C",
    bg: "#080A10",
    light: false,
    brand: "LEXIUM",
    heroImg: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=85",
    tag: "CORPORATIVO",
    year: "2025",
  },
  {
    id: "corporativa",
    sector: "Consultoría B2B",
    nombre: "Innovate Consulting",
    tagline: "Consultoría estratégica · Tecnología · Automatización empresarial",
    url: "/empresa-corporativa",
    accent: "#E0E0E0",
    bg: "#07070A",
    light: false,
    brand: "INNOVATE",
    heroImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85",
    tag: "B2B PREMIUM",
    year: "2025",
  },
];

// ─── Lightbox ───────────────────────────────────────────────────────────────
function Lightbox({ proyecto, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-6"
      style={{ background: "rgba(0,0,0,0.97)", backdropFilter: "blur(40px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()}
        className="w-full"
        style={{ maxWidth: "1100px" }}
      >
        <div className="flex items-end justify-between mb-5 gap-4">
          <div className="min-w-0">
            <span className="text-xs tracking-[0.3em] uppercase block mb-1" style={{ color: proyecto.accent + "AA" }}>{proyecto.sector} · {proyecto.year}</span>
            <h3 className="font-display font-black" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#F5F5F5", lineHeight: 1 }}>{proyecto.nombre}</h3>
            <p className="text-sm mt-1" style={{ color: "#7A7A7A" }}>{proyecto.tagline}</p>
          </div>
          <div className="flex items-center gap-3 mb-1 shrink-0">
            <Link to={proyecto.url} onClick={onClose}>
              <button className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:gap-3"
                style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>
                Ver Demo <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </Link>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center transition-colors duration-200"
              style={{ color: "#6A6A6A" }}
              onMouseEnter={e => e.currentTarget.style.color = "#F5F5F5"}
              onMouseLeave={e => e.currentTarget.style.color = "#6A6A6A"}>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #161616", height: "64vh", boxShadow: `0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.02), 0 0 100px -30px ${proyecto.accent}15` }}>
          <SiteMockup p={proyecto} />
        </div>

        <p className="text-xs mt-4 text-center tracking-widest uppercase" style={{ color: "#3A3A3A" }}>
          Click fuera para cerrar · Demo navegable disponible
        </p>
      </motion.div>
    </motion.div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function Card({ p, index, onClick }) {
  return (
    <motion.div
      {...fadeUpItem(index, 0.15)}
      className="group cursor-pointer"
      onClick={() => onClick(p)}
    >
      {/* Browser window — large screenshot */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.008 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #111111",
          aspectRatio: "16/10",
          position: "relative",
          transition: "border-color 0.5s ease, box-shadow 0.5s ease",
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#222222"; e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${p.accent}10, 0 0 80px -20px ${p.accent}20`; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#111111"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.15)"; }}
      >
        <SiteMockup p={p} />

        {/* Tag badge */}
        <div style={{ position: "absolute", top: 14, left: 14, background: "rgba(6,6,6,0.85)", backdropFilter: "blur(20px)", padding: "4px 12px", borderRadius: "3px", border: "1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ fontSize: "9px", letterSpacing: "0.22em", color: p.accent + "CC", fontFamily: "var(--font-body)", textTransform: "uppercase" }}>{p.tag}</span>
        </div>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(2px)" }}
        >
          <div className="flex items-center gap-2 px-7 py-3.5 text-xs font-bold tracking-[0.14em] uppercase transition-transform duration-500 group-hover:scale-105"
            style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>
            Ver Demo <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>
      </motion.div>

      {/* Info */}
      <div className="mt-7 px-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs tracking-[0.2em] uppercase" style={{ color: p.accent + "99" }}>{p.sector}</span>
          <span className="text-xs tracking-widest uppercase" style={{ color: "#3A3A3A" }}>·</span>
          <span className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>{p.year}</span>
        </div>
        <h3 className="font-display font-bold text-xl leading-tight mb-2" style={{ color: "#E0E0E0" }}>{p.nombre}</h3>
        <p className="text-sm leading-relaxed mb-5 max-w-md" style={{ color: "#6A6A6A" }}>{p.tagline}</p>
        <span className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase transition-all duration-300 group-hover:gap-3" style={{ color: "#BDBDBD" }}>
          Ver Demo <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function GaleriaPortfolio() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="portfolio" className="relative py-14 sm:py-20" style={{ background: "#0A0A0A" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #1C1C1C 30%, #1C1C1C 70%, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div {...fadeUp} className="mb-16">
          <p className="text-xs tracking-[0.35em] uppercase mb-8" style={{ color: "#5A5A5A" }}>Proyectos seleccionados</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <h2 className="font-display font-black tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", color: "#F5F5F5" }}>
              DISEÑOS QUE
              <br />
              <span style={{ color: "#3A3A3A" }}>GENERAN</span>
              <br />
              <span style={{ color: "#F5F5F5" }}>RESULTADOS.</span>
            </h2>
            <div className="lg:text-right">
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#7A7A7A", maxWidth: "380px", marginLeft: "auto" }}>
                Cada proyecto es una web premium terminada. No son maquetas. Son experiencias reales que generan clientes.
              </p>
              <div className="flex items-center gap-8 lg:justify-end">
                {[["04", "Proyectos activos"], ["100%", "Diseño a medida"], ["72h", "Primera entrega"]].map(([v, l], i) => (
                  <div key={i}>
                    <p className="font-display font-black text-xl" style={{ color: "#F5F5F5" }}>{v}</p>
                    <p className="text-xs tracking-widest uppercase mt-0.5" style={{ color: "#5A5A5A" }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid — 2 columns, large cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {proyectos.map((p, i) => (
            <Card key={p.id} p={p} index={i} onClick={setLightbox} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          {...fade}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="mt-14 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderTop: "1px solid #141414" }}
        >
          <div>
            <p className="text-sm font-medium mb-1" style={{ color: "#D0D0D0" }}>¿Quieres un diseño así para tu negocio?</p>
            <p className="text-xs" style={{ color: "#6A6A6A" }}>Diseñamos para clínicas, despachos, inmobiliarias y empresas.</p>
          </div>
          <a href="#contacto">
            <button
              className="flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-5 shrink-0"
              style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}
            >
              Solicitar Propuesta <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && <Lightbox proyecto={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </section>
  );
}