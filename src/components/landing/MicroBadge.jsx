import React from "react";
import { motion } from "framer-motion";

const badges = [
  { emoji: "⚡", text: "Respuesta en menos de 1 segundo" },
  { emoji: "📅", text: "Agenda visitas automáticamente" },
  { emoji: "📞", text: "Atiende llamadas 24/7" },
  { emoji: "🧠", text: "Clasifica leads automáticamente" },
  { emoji: "📊", text: "Registra toda la actividad en CRM" },
];

export default function MicroBadge({ index = 0 }) {
  const badge = badges[index % badges.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex justify-center py-6"
    >
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.07] bg-white/[0.025] text-white/35">
        <span className="text-base">{badge.emoji}</span>
        <span className="text-xs font-medium tracking-wide">{badge.text}</span>
      </div>
    </motion.div>
  );
}