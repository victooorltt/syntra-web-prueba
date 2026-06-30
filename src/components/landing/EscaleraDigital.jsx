import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, MousePointerClick, Filter, Cpu, Brain, TrendingUp } from "lucide-react";
import { fadeUp, fadeUpItem, ease, viewport } from "@/lib/animations";

const steps = [
  { num: "01", label: "Web", icon: Globe, desc: "Presencia que impacta y transmite confianza desde el primer segundo." },
  { num: "02", label: "Landing", icon: MousePointerClick, desc: "Una página, un objetivo. Convierte visitas en leads con mínima fricción." },
  { num: "03", label: "Funnel", icon: Filter, desc: "El visitante se convierte en oportunidad y avanza hacia la compra." },
  { num: "04", label: "Automatización", icon: Cpu, desc: "WhatsApp, email, CRM. Cada lead recibe respuesta inmediata, 24/7." },
  { num: "05", label: "IA", icon: Brain, desc: "Agentes que cualifican, responden y agendan reuniones automáticamente." },
  { num: "06", label: "Escalable", icon: TrendingUp, desc: "Un sistema conectado. Tu negocio genera más con los mismos recursos." },
];

export default function EscaleraDigital() {
  return (
    <section id="escalera" className="relative py-14 sm:py-20 overflow-hidden" style={{ background: "#0A0A0A" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #1C1C1C 30%, #1C1C1C 70%, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div {...fadeUp} className="mb-10">
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-6" style={{ color: "#6A6A6A" }}>Nuestra Metodología</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display font-black tracking-tight leading-[0.92]" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F5F5F5" }}>
              DE UNA WEB A UN
              <br /><span style={{ color: "#3A3A3A" }}>NEGOCIO INTELIGENTE.</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-xs lg:text-right" style={{ color: "#7A7A7A" }}>
              Una web es solo el primer paso. Te acompañamos en cada etapa hasta convertir tu presencia online en un sistema que crece solo.
            </p>
          </div>
        </motion.div>

        {/* Horizontal flow — desktop */}
        <div className="hidden lg:block">
          <div className="flex items-stretch gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={i}>
                  <motion.div
                    {...fadeUpItem(i, 0.1)}
                    className="group flex-1 p-6 transition-colors duration-500"
                    style={{ background: "#0A0A0A", border: "1px solid #141414", borderRadius: "6px", minHeight: "200px" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#2A2A2A"; e.currentTarget.style.background = "#0E0E0E"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#141414"; e.currentTarget.style.background = "#0A0A0A"; }}
                  >
                    <span className="font-display font-black text-sm" style={{ color: "#2A2A2A" }}>{step.num}</span>
                    <div className="my-4">
                      <Icon className="w-7 h-7" style={{ color: "#6A6A6A" }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display font-bold text-base mb-2" style={{ color: "#F5F5F5" }}>{step.label}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#6A6A6A" }}>{step.desc}</p>
                  </motion.div>
                  {i < steps.length - 1 && (
                    <div className="flex items-center px-1">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={viewport}
                        transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease }}
                      >
                        <ArrowRight className="w-4 h-4" style={{ color: "#3A3A3A" }} />
                      </motion.div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Vertical flow — mobile */}
        <div className="lg:hidden space-y-0" style={{ borderTop: "1px solid #141414" }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                {...fadeUpItem(i, 0.08)}
                className="group flex items-center gap-4 py-6"
                style={{ borderBottom: "1px solid #141414" }}
              >
                <div className="flex items-center gap-3 shrink-0">
                  <Icon className="w-5 h-5" style={{ color: "#6A6A6A" }} strokeWidth={1.5} />
                  <span className="font-display font-black text-2xl" style={{ color: "#1A1A1A", minWidth: "32px" }}>{step.num}</span>
                </div>
                <div className="shrink-0 px-3 py-1" style={{ border: "1px solid #1A1A1A", borderRadius: "3px", minWidth: "100px" }}>
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#7A7A7A" }}>{step.label}</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs leading-relaxed" style={{ color: "#7A7A7A" }}>{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 1.0, delay: 0.4, ease }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <div>
            <p className="text-sm font-semibold mb-1" style={{ color: "#D0D0D0" }}>No vendemos páginas web.</p>
            <p className="text-sm" style={{ color: "#7A7A7A" }}>Creamos sistemas digitales que generan oportunidades y crecimiento.</p>
          </div>
          <a href="#contacto">
            <button
              className="flex items-center gap-3 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:gap-4 shrink-0"
              style={{ background: "transparent", color: "#D0D0D0", border: "1px solid #2A2A2A", borderRadius: "4px", letterSpacing: "0.12em" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#5A5A5A"; e.currentTarget.style.color = "#F5F5F5"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#2A2A2A"; e.currentTarget.style.color = "#D0D0D0"; }}
            >
              Empezar ahora <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}