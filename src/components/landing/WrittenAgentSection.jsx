import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Globe, Instagram, Facebook, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const channels = [
  { icon: Globe, label: "Web" },
  { icon: MessageSquare, label: "WhatsApp" },
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: MessageSquare, label: "Formularios" },
];

const benefits = [
  "Respuesta inmediata, sin esperas.",
  "Seguimiento automático de cada contacto.",
  "Mayor conversión de leads en visitas.",
  "Sin intervención humana en tareas repetitivas.",
];

export default function WrittenAgentSection() {
  return (
    <section id="agente-escrito" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Agente Escrito</span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-tight mb-4">
              Atención automática
              <br />
              <span className="text-primary">en todos tus canales.</span>
            </h2>
            <p className="text-base text-white/50 mb-8 leading-relaxed">
              Un solo agente que responde y convierte en todos tus canales de comunicación al mismo tiempo.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm text-white/65">{b}</p>
                </div>
              ))}
            </div>

            <a href="#contacto">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/20">
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          {/* Channels grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {channels.map((ch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5 transition-all aspect-square"
              >
                <ch.icon className="w-7 h-7 text-primary" />
                <span className="text-xs font-semibold text-white/50">{ch.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}