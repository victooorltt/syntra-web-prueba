import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Smartphone, Search, Zap, Headphones, TrendingUp } from "lucide-react";

const reasons = [
  { icon: Sparkles, title: "Diseño premium", desc: "Cada web diseñada con criterio estético y atención al detalle." },
  { icon: Smartphone, title: "Optimización móvil", desc: "El 70% de tus clientes te visita desde el móvil." },
  { icon: Search, title: "SEO básico incluido", desc: "Tu web lista para aparecer en Google desde el primer día." },
  { icon: Zap, title: "Entrega en 72 horas", desc: "Publicada y funcionando en 72 horas desde la aprobación." },
  { icon: Headphones, title: "Soporte profesional", desc: "Disponibles para ayudarte, ajustar y mejorar." },
  { icon: TrendingUp, title: "Orientado a resultados", desc: "Cada decisión tiene un objetivo claro: hacer crecer tu negocio." },
];

export default function TrustSection() {
  return (
    <section className="relative py-28 sm:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header — editorial, left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-xs font-medium text-white/25 tracking-[0.2em] uppercase mb-5">Nuestra diferencia</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tight leading-[1.0] max-w-md">
              ¿Por qué elegir
              <br />
              <span className="text-primary">Syntra Labs?</span>
            </h2>
            <p className="text-sm text-white/30 max-w-xs leading-relaxed sm:text-right">
              No somos una agencia tradicional. Somos un estudio tecnológico que diseña con propósito.
            </p>
          </div>
        </motion.div>

        {/* Reasons — simple, typographic grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-3xl overflow-hidden">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 bg-background hover:bg-white/[0.015] transition-colors duration-500"
            >
              <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-500">
                <r.icon className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors duration-500" />
              </div>
              <h3 className="text-sm font-semibold text-white/70 mb-2 group-hover:text-white transition-colors duration-300">
                {r.title}
              </h3>
              <p className="text-xs text-white/25 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}