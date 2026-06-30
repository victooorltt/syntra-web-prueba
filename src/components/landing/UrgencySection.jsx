import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const losses = [
  { emoji: "📞", text: "Llamadas sin responder" },
  { emoji: "📲", text: "WhatsApps olvidados" },
  { emoji: "📩", text: "Formularios sin seguimiento" },
  { emoji: "🏡", text: "Propietarios que terminan con la competencia" },
];

export default function UrgencySection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Ahora mismo</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black mt-4 mb-4 tracking-tight leading-tight">
            Cada día que retrasas esta decisión,
            <br />
            <span className="text-primary">otra inmobiliaria responde antes que tú.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {losses.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-white/12 transition-colors text-left"
            >
              <span className="text-2xl">{item.emoji}</span>
              <p className="text-base font-semibold text-white/65">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 max-w-2xl mx-auto text-left">
            {[
              "✔ Más propietarios.",
              "✔ Más visitas.",
              "✔ Más oportunidades.",
              "✔ Más ventas.",
              "✔ Menos trabajo administrativo.",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.4 + i * 0.07 }}
                className="flex items-center gap-2"
              >
                <span className="text-sm font-semibold text-white/60">{item}</span>
              </motion.div>
            ))}
          </div>
          <a href="#contacto">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-10 h-14 text-base shadow-xl shadow-primary/25 hover:shadow-primary/45 hover:scale-[1.02] transition-all duration-200">
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}