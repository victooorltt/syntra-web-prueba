import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Diagnóstico gratuito",
  "Sin compromiso",
  "Sin permanencias",
  "Sin letra pequeña",
  "Respuesta en menos de 24 horas",
];

export default function TrustBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
    >
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-white/50">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}