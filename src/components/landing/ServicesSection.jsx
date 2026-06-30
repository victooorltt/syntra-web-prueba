import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, fadeUpItem } from "@/lib/animations";

const services = [
  {
    number: "01",
    title: "Páginas Web",
    desc: "Diseño premium orientado a conversión. Webs que generan confianza y captan clientes.",
  },
  {
    number: "02",
    title: "Automatización",
    desc: "Procesos que trabajan por ti. Tu empresa funcionando sin fricción, las 24 horas del día.",
  },
  {
    number: "03",
    title: "Inteligencia Artificial",
    desc: "Sistemas que responden, ayudan y generan oportunidades. Tecnología que potencia tu negocio.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative py-14 sm:py-20 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #1C1C1C, transparent)" }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div {...fadeUp} className="mb-12">
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-6" style={{ color: "#4A4A4A" }}>
            Lo Que Hacemos
          </p>
          <h2
            className="font-display font-black tracking-tight leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#F5F5F5" }}
          >
            Tres disciplinas.
            <br />
            <span style={{ color: "#4A4A4A" }}>Un resultado.</span>
          </h2>
        </motion.div>

        {/* Services — editorial list */}
        <div style={{ borderTop: "1px solid #1C1C1C" }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              {...fadeUpItem(i, 0.12)}
              className="group flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-16 py-8 sm:py-10 cursor-pointer transition-all duration-500"
              style={{ borderBottom: "1px solid #1C1C1C" }}
            >
              <span
                className="text-xs font-mono shrink-0 w-8 transition-colors duration-500"
                style={{ color: "#2A2A2A" }}
              >
                {s.number}
              </span>
              <h3
                className="font-display font-black tracking-tight flex-1 transition-colors duration-500 group-hover:opacity-100"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  color: "#F5F5F5",
                  lineHeight: 1.0,
                }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed max-w-xs transition-colors duration-500"
                style={{ color: "#4A4A4A" }}
              >
                {s.desc}
              </p>
              <a href="#contacto" className="shrink-0">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-400 opacity-0 group-hover:opacity-100"
                  style={{ border: "1px solid #4A4A4A" }}
                >
                  <ArrowRight className="w-4 h-4" style={{ color: "#BDBDBD" }} />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}