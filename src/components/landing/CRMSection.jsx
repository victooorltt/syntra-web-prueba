import React from "react";
import { motion } from "framer-motion";
import { Database, Users, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Database,
    title: "Toda la información organizada.",
    desc: "Cada propiedad, cada contacto, cada conversación en un solo lugar.",
  },
  {
    icon: Users,
    title: "Todos los contactos registrados.",
    desc: "Ningún lead se pierde. El sistema captura y clasifica automáticamente.",
  },
  {
    icon: RefreshCw,
    title: "Todos los seguimientos automatizados.",
    desc: "El sistema hace el seguimiento por ti, en el momento exacto.",
  },
];

export default function CRMSection() {
  return (
    <section id="crm" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest">CRM & Automatizaciones</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black mt-4 mb-4 tracking-tight">
            Control total.
            <br />
            <span className="text-white/30">Sin esfuerzo.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-8 rounded-3xl border border-white/6 bg-white/[0.02] hover:border-primary/25 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2 text-white">{p.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contacto">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/20">
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}