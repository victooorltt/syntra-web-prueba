import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Eye, Cpu, Workflow, TrendingUp } from "lucide-react";
import { fadeUp, fadeUpItem } from "@/lib/animations";

const pillars = [
  { icon: Sparkles, label: "Experiencia premium.", desc: "Cada detalle diseñado con propósito." },
  { icon: Eye, label: "Diseño que transmite confianza.", desc: "La primera impresión lo es todo." },
  { icon: Cpu, label: "Tecnología orientada a resultados.", desc: "No construimos por construir." },
  { icon: Workflow, label: "Automatización inteligente.", desc: "Tu empresa crece sin esfuerzo extra." },
  { icon: TrendingUp, label: "Soluciones escalables.", desc: "Crece sin límites técnicos." },
];

export default function WhySyntraSection() {
  return (
    <section
      id="por-que"
      className="relative py-14 sm:py-20 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #1C1C1C, transparent)" }} />

      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(245,245,245,0.015) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div {...fadeUp} className="mb-12">
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-6" style={{ color: "#4A4A4A" }}>
            Por Qué Syntra
          </p>
          <h2
            className="font-display font-black tracking-tight leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#F5F5F5" }}
          >
            No somos una agencia.
            <br />
            <span style={{ color: "#4A4A4A" }}>Somos tu ventaja competitiva.</span>
          </h2>
        </motion.div>

        {/* Pillars — premium glass cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                {...fadeUpItem(i, 0.1)}
                className="group relative p-8 lg:p-10 transition-all duration-500"
                style={{
                  background: "#0C0C0C",
                  border: "1px solid #141414",
                  borderRadius: "8px",
                  backdropFilter: "blur(20px)",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#222"; e.currentTarget.style.background = "#0E0E0E"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#141414"; e.currentTarget.style.background = "#0C0C0C"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background: "rgba(245,245,245,0.05)",
                    border: "1px solid rgba(245,245,245,0.08)",
                    borderRadius: "6px",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#BDBDBD" }} />
                </div>

                <p
                  className="font-display font-bold text-lg mb-3 leading-tight transition-colors duration-500"
                  style={{ color: "#E0E0E0" }}
                >
                  {p.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#5A5A5A" }}>
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}