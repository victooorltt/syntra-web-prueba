import React from "react";
import { motion } from "framer-motion";
import { Mic, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  "Responde llamadas en menos de 1 segundo",
  "Cualifica al prospecto con preguntas inteligentes",
  "Agenda visitas directamente en tu calendario",
  "Registra toda la información automáticamente en el CRM",
  "Disponible 24 horas, 7 días a la semana",
];

export default function VoiceAgentSection() {
  return (
    <section id="agente-voz" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Icon side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mic className="w-14 h-14 text-primary" />
              </div>
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-30" />
              <div className="absolute -inset-4 rounded-full border border-primary/10 animate-ping opacity-20" style={{ animationDelay: "0.3s" }} />
            </div>

            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Agente de Voz</span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-tight mb-4 text-center lg:text-left">
              Tu inmobiliaria nunca vuelve a perder
              <span className="text-primary"> una llamada.</span>
            </h2>
            <p className="text-base text-white/50 leading-relaxed text-center lg:text-left">
              El agente responde, cualifica, agenda visitas y registra toda la información automáticamente.
            </p>
          </motion.div>

          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-3"
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-primary/25 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm sm:text-base text-white/70">{cap}</p>
              </motion.div>
            ))}

            <div className="pt-4">
              <a href="#contacto">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/20">
                  Ver el Agente de Voz en acción
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}