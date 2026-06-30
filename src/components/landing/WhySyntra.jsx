import React from "react";
import { motion } from "framer-motion";

const benefits = [
  { icon: "👥", label: "Más clientes", desc: "Capta y convierte más oportunidades de negocio" },
  { icon: "⚡", label: "Más rapidez", desc: "Respuesta inmediata sin intervención manual" },
  { icon: "📈", label: "Más productividad", desc: "Tu equipo enfocado en lo que importa" },
  { icon: "🔄", label: "Menos tareas repetitivas", desc: "Automatización inteligente de procesos" },
  { icon: "💰", label: "Más ventas", desc: "Convierte más leads en clientes reales" },
  { icon: "⏱️", label: "Más tiempo", desc: "Recupera horas para crecer y escalar" },
];

export default function WhySyntra() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest">¿Por qué Syntra?</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black mt-4 tracking-tight">
            La tecnología debe
            <br />
            <span className="text-primary">generar resultados.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 p-6 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="text-2xl mt-0.5 shrink-0">{b.icon}</div>
              <div>
                <h3 className="text-sm font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">✓ {b.label}</h3>
                <p className="text-xs text-white/30 leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}