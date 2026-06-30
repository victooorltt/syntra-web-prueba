import React from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeUpItem } from "@/lib/animations";

const metrics = [
  { value: "72h", label: "Primera propuesta" },
  { value: "100%", label: "Diseño personalizado" },
  { value: "24/7", label: "Automatización activa" },
  { value: "3", label: "Servicios integrados" },
];

export default function MetricsSection() {
  return (
    <section id="resultados" className="relative py-12 sm:py-16" style={{ background: "#0A0A0A", borderTop: "1px solid #141414" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #1C1C1C 30%, #1C1C1C 70%, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div {...fadeUp}>
          <h2 className="font-display font-black tracking-tight leading-[0.95] mb-10" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#F5F5F5" }}>
            RESULTADOS QUE GENERAN <span style={{ color: "#3A3A3A" }}>CONFIANZA.</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "#141414", borderRadius: "6px", overflow: "hidden", border: "1px solid #141414" }}>
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                {...fadeUpItem(i, 0.12)}
                className="group p-8 sm:p-12 text-center transition-colors duration-500"
                style={{ background: "#0A0A0A" }}
                onMouseEnter={e => e.currentTarget.style.background = "#0E0E0E"}
                onMouseLeave={e => e.currentTarget.style.background = "#0A0A0A"}
              >
                <p
                  className="font-display font-black tracking-tight mb-3 transition-transform duration-500 group-hover:scale-105"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F5F5", lineHeight: 1 }}
                >
                  {m.value}
                </p>
                <p className="text-xs sm:text-sm tracking-widest uppercase" style={{ color: "#6A6A6A" }}>
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}