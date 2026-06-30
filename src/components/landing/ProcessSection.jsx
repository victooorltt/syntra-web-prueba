import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Paintbrush2, Code2, CheckCircle, Rocket } from "lucide-react";

const steps = [
  { num: "01", icon: MessageSquare, title: "Reunión estratégica", desc: "Entendemos tu negocio, tus objetivos y tu cliente ideal. Sin formularios genéricos." },
  { num: "02", icon: Paintbrush2, title: "Diseño personalizado", desc: "Creamos un diseño único a medida de tu marca. Nada de plantillas." },
  { num: "03", icon: Code2, title: "Desarrollo", desc: "Desarrollamos tu web con tecnología moderna, rápida y optimizada." },
  { num: "04", icon: CheckCircle, title: "Revisión y ajustes", desc: "Revisamos juntos cada detalle. Aplicamos los cambios que necesites." },
  { num: "05", icon: Rocket, title: "Entrega en 72 horas", desc: "Tu web lista, publicada y funcionando.", badge: true },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="relative py-28 sm:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-xs font-medium text-white/25 tracking-[0.2em] uppercase mb-5">Cómo trabajamos</p>
          <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tight leading-[1.0]">
            Proceso simple.
            <br />
            <span className="text-primary">Resultado garantizado.</span>
          </h2>
        </motion.div>

        {/* Steps — clean list layout */}
        <div>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-8 py-8 border-b border-white/[0.04] group last:border-0"
            >
              {/* Step number — large, typographic */}
              <span className="text-3xl font-black text-white/[0.07] font-mono leading-none pt-1 w-12 shrink-0 group-hover:text-primary/20 transition-colors duration-500">
                {step.num}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0 mt-0.5 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-500">
                <step.icon className="w-4.5 h-4.5 text-white/25 group-hover:text-primary transition-colors duration-500" style={{ width: "18px", height: "18px" }} />
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-base font-semibold text-white/70 group-hover:text-white transition-colors duration-300">{step.title}</h3>
                  {step.badge && (
                    <span className="text-[10px] font-bold text-primary bg-primary/8 border border-primary/15 rounded-full px-2.5 py-0.5 tracking-wide">72h</span>
                  )}
                </div>
                <p className="text-sm text-white/25 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}