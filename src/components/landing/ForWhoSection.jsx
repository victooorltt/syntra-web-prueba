import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const ideal = [
  "Inmobiliarias de captación",
  "Venta de vivienda nueva",
  "Alquiler residencial",
  "Gestión patrimonial",
  "Equipos comerciales inmobiliarios",
];

const notFor = [
  "Empresas que no reciben leads",
  "Negocios que no desean automatizar procesos",
  "Empresas que no buscan crecer",
];

export default function ForWhoSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Perfil ideal</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black mt-4 tracking-tight">
            ¿Para quién es Syntra?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ideal for */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-7 rounded-3xl border border-primary/15 bg-primary/[0.03] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-5">Ideal para</p>
            <div className="space-y-3">
              {ideal.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-white/70">{t}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Not for */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-7 rounded-3xl border border-white/6 bg-white/[0.02]"
          >
            <p className="text-xs font-bold text-white/25 uppercase tracking-widest mb-5">No es para</p>
            <div className="space-y-3">
              {notFor.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <XCircle className="w-4 h-4 text-white/20 shrink-0" />
                  <span className="text-sm text-white/30">{t}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}