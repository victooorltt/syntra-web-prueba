import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SiteMockup from "./galeria/SiteMockup";
import { fadeUp, fadeUpItem, fade } from "@/lib/animations";

const miniProyectos = [
  {
    id: "fisioterapia",
    sector: "Fisioterapia",
    nombre: "Fisioterapia Premium",
    accent: "#4A9DA8",
    bg: "#FAFAF8",
    light: true,
    brand: "VITALIS",
    heroImg: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85",
    year: "2025",
  },
  {
    id: "arquitectura",
    sector: "Arquitectura",
    nombre: "Arquitectura Contemporánea",
    accent: "#B0B0B0",
    bg: "#0A0A0A",
    light: false,
    brand: "ARCO",
    heroImg: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=85",
    year: "2025",
  },
  {
    id: "hotel",
    sector: "Hotel",
    nombre: "Hotel Boutique",
    accent: "#C5A059",
    bg: "#0B0D10",
    light: false,
    brand: "MERIDIAN",
    heroImg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=85",
    year: "2025",
  },
  {
    id: "interiorismo",
    sector: "Interiorismo",
    nombre: "Interiorismo de Lujo",
    accent: "#9A8B78",
    bg: "#FAFAF8",
    light: true,
    brand: "ATELIER",
    heroImg: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=85",
    year: "2025",
  },
  {
    id: "restaurante",
    sector: "Restaurante",
    nombre: "Restaurante Premium",
    accent: "#C9A059",
    bg: "#08070A",
    light: false,
    brand: "ALMA",
    heroImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=85",
    year: "2025",
  },
  {
    id: "constructora",
    sector: "Constructora",
    nombre: "Constructora Residencial",
    accent: "#A89B8C",
    bg: "#0A0A0A",
    light: false,
    brand: "HOGAR",
    heroImg: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=85",
    year: "2025",
  },
];

function MiniCard({ p, index }) {
  return (
    <motion.div
      {...fadeUpItem(index, 0.1)}
      className="group"
    >
      <div
        style={{
          borderRadius: "6px",
          overflow: "hidden",
          border: "1px solid #111111",
          aspectRatio: "4/3",
          position: "relative",
          transition: "border-color 0.5s ease, box-shadow 0.5s ease",
          boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#222"; e.currentTarget.style.boxShadow = `0 16px 50px rgba(0,0,0,0.4), 0 0 0 1px ${p.accent}10, 0 0 60px -20px ${p.accent}20`; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#111111"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)"; }}
      >
        <SiteMockup p={p} mini />
      </div>
      <div className="mt-5 px-0.5">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: p.accent + "99" }}>{p.sector}</span>
          <span className="text-[10px]" style={{ color: "#3A3A3A" }}>·</span>
          <span className="text-[10px] tracking-widest uppercase" style={{ color: "#4A4A4A" }}>{p.year}</span>
        </div>
        <h3 className="font-display font-bold text-sm leading-tight" style={{ color: "#D0D0D0" }}>{p.nombre}</h3>
      </div>
    </motion.div>
  );
}

export default function MoreProjectsSection() {
  return (
    <section className="relative py-12 sm:py-16" style={{ background: "#0A0A0A", borderTop: "1px solid #141414" }}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div {...fadeUp} className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-5" style={{ color: "#5A5A5A" }}>Más Proyectos</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-display font-black tracking-tight leading-[0.95]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "#F5F5F5" }}>
              SECTORES QUE <span style={{ color: "#3A3A3A" }}>DOMINAMOS.</span>
            </h2>
            <p className="text-sm max-w-xs" style={{ color: "#6A6A6A" }}>
              Cada demo es una web real terminada. No maquetas. No placeholders.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {miniProyectos.map((p, i) => (
            <MiniCard key={p.id} p={p} index={i} />
          ))}
        </div>

        <motion.div
          {...fade}
          transition={{ duration: 1.0, delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{ borderTop: "1px solid #141414", paddingTop: "2rem" }}
        >
          <p className="text-sm" style={{ color: "#6A6A6A" }}>¿Quieres algo similar para tu empresa?</p>
          <a href="#contacto">
            <button className="flex items-center gap-3 px-7 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:gap-4 shrink-0"
              style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>
              Solicitar Propuesta <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}