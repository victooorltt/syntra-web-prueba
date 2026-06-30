import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUpLarge } from "@/lib/animations";

const WA_URL = "https://wa.me/34668515994?text=Hola%2C%20quiero%20solicitar%20una%20propuesta%20para%20mi%20negocio.";

export default function FinalCTASection() {
  return (
    <section className="relative py-14 sm:py-20 overflow-hidden" style={{ background: "#0A0A0A" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #1C1C1C 30%, #1C1C1C 70%, transparent)" }} />

      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(245,245,245,0.025) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 py-12 sm:py-16 text-center">
        <motion.div {...fadeUpLarge}>
          <img
            src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/5c704cbc2_423A3B0A-6F13-442D-8EC4-138FD084C212.png"
            alt="Syntra Labs"
            className="h-14 w-auto object-contain mx-auto mb-8"
            style={{ opacity: 0.7 }}
          />

          <h2
            className="font-display font-black tracking-tight leading-[0.9] mb-10"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#F5F5F5" }}
          >
            CONSTRUYAMOS ALGO
            <br />
            QUE GENERE <span style={{ color: "#4A4A4A" }}>RESULTADOS.</span>
          </h2>

          <p className="text-base font-light leading-relaxed mb-14 max-w-lg mx-auto" style={{ color: "#8A8A8A" }}>
            Diseño web premium, automatización e inteligencia artificial para empresas que quieren crecer de verdad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contacto">
              <button
                className="flex items-center gap-3 px-9 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:gap-4"
                style={{
                  background: "#F5F5F5",
                  color: "#0A0A0A",
                  borderRadius: "4px",
                  letterSpacing: "0.12em",
                }}
              >
                Solicitar Propuesta
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
            <a href="#portfolio">
              <button
                className="flex items-center gap-3 px-9 py-4 font-medium text-sm tracking-widest uppercase transition-all duration-300"
                style={{
                  background: "transparent",
                  color: "#4A4A4A",
                  border: "1px solid #1C1C1C",
                  borderRadius: "4px",
                  letterSpacing: "0.12em",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#4A4A4A"; e.currentTarget.style.color = "#BDBDBD"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1C1C1C"; e.currentTarget.style.color = "#4A4A4A"; }}
              >
                Ver Proyectos
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}