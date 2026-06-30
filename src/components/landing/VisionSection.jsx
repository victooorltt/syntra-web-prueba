import React from "react";
import { motion } from "framer-motion";
import { fadeUpLarge } from "@/lib/animations";

export default function VisionSection() {
  return (
    <section
      className="relative py-14 sm:py-20 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #1C1C1C, transparent)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div {...fadeUpLarge}>
          <p
            className="text-xs font-medium tracking-[0.3em] uppercase mb-12"
            style={{ color: "#4A4A4A" }}
          >
            Nuestra Visión
          </p>

          <p
            className="font-display font-black leading-[1.05] tracking-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "#F5F5F5",
            }}
          >
            No construimos páginas web.
          </p>
          <p
            className="font-display font-black leading-[1.05] tracking-tight mt-2"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "#7A7A7A",
            }}
          >
            Construimos sistemas digitales.
          </p>
          <p className="text-sm leading-relaxed mt-10 max-w-xl" style={{ color: "#6A6A6A" }}>
            Diseñamos experiencias digitales que generan confianza, captan oportunidades y ayudan a las empresas a crecer.
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-6">
            {["Web", "Automatización", "Inteligencia Artificial"].map((t, i) => (
              <span key={i} className="text-xs tracking-widest uppercase" style={{ color: i === 1 ? "#3A3A3A" : "#4A4A4A" }}>
                {t}{i < 2 && <span className="ml-3">·</span>}
              </span>
            ))}
          </div>
          <p className="text-xs tracking-widest uppercase mt-4" style={{ color: "#3A3A3A" }}>Todo conectado.</p>
        </motion.div>
      </div>
    </section>
  );
}