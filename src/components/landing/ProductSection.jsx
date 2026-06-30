import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mic, MessageSquare, BarChart3, Phone, Calendar, Zap, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Mic, label: "Agente de Voz IA" },
  { icon: MessageSquare, label: "Agente Escrito IA" },
  { icon: BarChart3, label: "CRM Integrado" },
  { icon: Phone, label: "WhatsApp Business" },
  { icon: RefreshCw, label: "Seguimiento Automático" },
  { icon: Calendar, label: "Agenda de Visitas" },
  { icon: Zap, label: "Automatizaciones" },
];

const benefits = [
  "Más propietarios.",
  "Más visitas.",
  "Más oportunidades.",
  "Más ventas.",
  "Menos trabajo administrativo.",
  "Atención 24 horas al día.",
];

export default function ProductSection() {
  return (
    <section id="soluciones" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Producto estrella</span>
            <h2 className="text-3xl sm:text-5xl font-display font-black mt-4 mb-2 tracking-tight leading-tight">
              Syntra Real Estate
            </h2>
            <p className="text-xl font-display font-bold text-white/30 mb-6">System™</p>
            <p className="text-base text-white/50 mb-10 leading-relaxed">
              Sistema completo diseñado exclusivamente para inmobiliarias. No vendemos herramientas. Vendemos resultados.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-white/6 bg-white/[0.02] hover:border-primary/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-white/70">{f.label}</span>
                </motion.div>
              ))}
            </div>

            <a href="#contacto">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/20">
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          {/* Right — Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.09 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/6 bg-white/[0.015] hover:border-primary/20 transition-all group"
              >
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform" />
                <p className="text-lg sm:text-xl font-display font-bold text-white/70 group-hover:text-white transition-colors">{b}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}