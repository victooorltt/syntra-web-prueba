import React from "react";
import { motion } from "framer-motion";
import { Check, Stethoscope, Home, Scale, ArrowRight } from "lucide-react";
import { fadeUp, fadeUpItem, fade } from "@/lib/animations";

const useCases = [
  {
    icon: Stethoscope,
    sector: "Clínicas Estéticas",
    benefits: [
      "Más reservas online",
      "Menos llamadas perdidas",
      "Seguimiento automático",
      "Atención 24/7",
    ],
    accent: "#C5A059",
  },
  {
    icon: Home,
    sector: "Inmobiliarias",
    benefits: [
      "Más captaciones",
      "Más contactos cualificados",
      "Seguimiento comercial",
      "Respuesta inmediata",
    ],
    accent: "#C9B99A",
  },
  {
    icon: Scale,
    sector: "Despachos de Abogados",
    benefits: [
      "Más consultas",
      "Más confianza",
      "Imagen premium",
      "Automatización administrativa",
    ],
    accent: "#B8A07C",
  },
];

export default function UseCasesSection() {
  return (
    <section className="relative py-14 sm:py-20 overflow-hidden" style={{ background: "#0A0A0A" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #1C1C1C 30%, #1C1C1C 70%, transparent)" }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div {...fadeUp} className="mb-14">
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-6" style={{ color: "#5A5A5A" }}>
            Casos de Uso Reales
          </p>
          <h2
            className="font-display font-black tracking-tight leading-[0.92]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F5F5F5" }}
          >
            SOLUCIONES QUE
            <br />
            <span style={{ color: "#3A3A3A" }}>FUNCIONAN.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <motion.div
                key={i}
                {...fadeUpItem(i, 0.14)}
                className="group relative p-10 transition-all duration-500"
                style={{
                  background: "#0C0C0C",
                  border: "1px solid #141414",
                  borderRadius: "8px",
                  backdropFilter: "blur(20px)",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = uc.accent + "30"; e.currentTarget.style.background = "#0E0E0E"; e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${uc.accent}10`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#141414"; e.currentTarget.style.background = "#0C0C0C"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background: uc.accent + "12",
                    border: `1px solid ${uc.accent}25`,
                    borderRadius: "6px",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: uc.accent }} />
                </div>

                {/* Sector */}
                <h3 className="font-display font-bold text-lg mb-8" style={{ color: "#F5F5F5" }}>
                  {uc.sector}
                </h3>

                {/* Benefits */}
                <ul className="space-y-4">
                  {uc.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 flex items-center justify-center shrink-0"
                        style={{ background: uc.accent + "15", borderRadius: "4px" }}
                      >
                        <Check className="w-3 h-3" style={{ color: uc.accent }} />
                      </div>
                      <span className="text-sm" style={{ color: "#9A9A9A" }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Discrete CTA */}
        <motion.div
          {...fade}
          transition={{ duration: 1.0, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderTop: "1px solid #141414", paddingTop: "1.5rem" }}
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