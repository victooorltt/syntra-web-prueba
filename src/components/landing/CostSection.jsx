import React from "react";
import { motion } from "framer-motion";
import { PhoneMissed, MessageSquareOff, Clock } from "lucide-react";

const items = [
  { icon: PhoneMissed, text: "Cada llamada perdida." },
  { icon: MessageSquareOff, text: "Cada formulario sin responder." },
  { icon: Clock, text: "Cada WhatsApp olvidado." },
];

export default function CostSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-white/[0.02] to-background pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest">El coste oculto</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black mt-4 mb-6 tracking-tight leading-tight">
            ¿Cuánto te cuesta
            <br />
            <span className="text-white/30">responder tarde?</span>
          </h2>
        </motion.div>

        <div className="space-y-4 mt-12 mb-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-lg sm:text-xl font-semibold text-white/80 text-left">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl font-display font-bold text-white/60"
        >
          Puede terminar convirtiéndose en una venta{" "}
          <span className="text-white">para la competencia.</span>
        </motion.p>
      </div>
    </section>
  );
}