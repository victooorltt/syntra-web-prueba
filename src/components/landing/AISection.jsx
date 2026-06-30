import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mic, MessageSquare, Phone, Clock, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  { icon: Clock, label: "Responde en < 1 segundo", desc: "Sin esperas, sin fricción" },
  { icon: MessageSquare, label: "Web, WhatsApp, Instagram", desc: "Todos los canales cubiertos" },
  { icon: Mic, label: "Agentes de Voz", desc: "Llamadas gestionadas con IA" },
  { icon: Users, label: "Cualifica leads automáticamente", desc: "Solo llegan los interesados" },
  { icon: TrendingUp, label: "Seguimiento automático", desc: "Ningún lead se pierde" },
  { icon: Phone, label: "Agenda reuniones solo", desc: "CRM actualizado en tiempo real" },
];

export default function AISection() {
  return (
    <section id="ia" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">Inteligencia Artificial</span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-tight mb-5">
              Tu empresa trabajando
              <br />
              <span className="text-primary">24 horas al día.</span>
            </h2>
            <p className="text-base text-white/40 leading-relaxed mb-8">
              Nuestros agentes IA pueden responder consultas, captar oportunidades, agendar reuniones y realizar seguimientos automáticamente — sin intervención humana.
            </p>
            <a href="#contacto">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/25 hover:shadow-primary/45 hover:scale-[1.02] transition-all duration-200">
                Solicitar Demo IA
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          {/* Right — visual interface */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Futuristic card */}
            <div className="relative p-7 rounded-3xl border border-primary/15 bg-black/40 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              {/* Status bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Sistema activo</span>
                </div>
                <span className="text-xs text-primary font-bold">24/7</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                    className="flex items-start gap-3 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-primary/20 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <cap.icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/70 leading-tight">{cap.label}</p>
                      <p className="text-xs text-white/25 mt-0.5">{cap.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Simulated chat */}
              <div className="mt-5 pt-5 border-t border-white/5 space-y-2.5">
                <div className="flex justify-start">
                  <div className="bg-white/[0.04] border border-white/6 rounded-xl rounded-tl-sm px-3.5 py-2 max-w-[75%]">
                    <p className="text-xs text-white/55">Hola, me interesa un presupuesto</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary/15 border border-primary/20 rounded-xl rounded-tr-sm px-3.5 py-2 max-w-[80%]">
                    <p className="text-xs text-white/70">¡Perfecto! ¿Para qué tipo de proyecto necesitas el presupuesto?</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 pl-1">
                  <div className="w-1 h-1 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-1 h-1 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-1 h-1 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}