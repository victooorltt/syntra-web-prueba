import React from "react";
import { motion } from "framer-motion";

const results = [
  { emoji: "⚡", title: "Respuesta en menos de 1 segundo", desc: "Ningún lead espera. El sistema actúa en tiempo real." },
  { emoji: "🕐", title: "Atención 24/7", desc: "Mañanas, noches, festivos. Sin excepciones." },
  { emoji: "📉", title: "Hasta un 80% menos de tareas repetitivas", desc: "Tu equipo se centra en cerrar, no en gestionar." },
  { emoji: "📅", title: "Más visitas agendadas", desc: "El sistema agenda automáticamente sin intervención humana." },
  { emoji: "🏠", title: "Más propietarios captados", desc: "Cada contacto recibe atención inmediata y personalizada." },
  { emoji: "📈", title: "Más operaciones cerradas", desc: "Seguimiento constante hasta convertir cada oportunidad." },
];

export default function ResultsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Impacto real</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black mt-4 tracking-tight">
            Resultados que buscamos.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group p-6 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="text-3xl mb-4">{r.emoji}</div>
              <h3 className="text-sm font-display font-bold text-white mb-2 leading-snug">{r.title}</h3>
              <p className="text-xs text-white/35 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}