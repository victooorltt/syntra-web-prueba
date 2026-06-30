import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const checks = [
  "Captación de propietarios",
  "Seguimiento automático",
  "Gestión de consultas",
  "Organización de leads",
  "Atención permanente 24/7",
];

export default function CaseStudySection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">Caso práctico real</span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-tight mb-6">
              Lo utilizamos cada día
              <br />
              <span className="text-white/30">en nuestro propio negocio.</span>
            </h2>
            <p className="text-base text-white/45 leading-relaxed mb-6">
              Antes de implantar Syntra, muchas oportunidades requerían seguimiento manual. Hoy nuestros sistemas responden automáticamente, realizan seguimiento, captan información y organizan cada lead sin intervención humana.
            </p>
            <a href="#contacto">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/20">
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          {/* Right — Case card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="p-8 sm:p-10 rounded-3xl border border-white/8 bg-white/[0.02] relative overflow-hidden">
              {/* Accent top */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

              <div className="mb-6">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Caso de uso</p>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white">SILENCE Private Living</h3>
                <p className="text-sm text-white/35 mt-1">Agencia inmobiliaria de lujo · Madrid</p>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-2xl border border-white/6 bg-white/[0.015]">
                  <p className="text-xs font-bold text-white/25 uppercase tracking-widest mb-3">Antes</p>
                  <div className="space-y-2">
                    {["Seguimiento manual", "Consultas dispersas", "Procesos lentos", "Información descentralizada"].map((t, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                        <span className="text-xs text-white/35">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-2xl border border-primary/15 bg-primary/[0.04]">
                  <p className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-3">Después</p>
                  <div className="space-y-2">
                    {["Respuesta inmediata", "Seguimiento automático", "Leads organizados", "Agenda automatizada", "Atención 24/7"].map((t, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                        <span className="text-xs text-white/55">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom quote */}
              <div className="mt-6 pt-5 border-t border-white/6">
                <p className="text-sm text-white/35 italic leading-relaxed">
                  "El sistema responde cada consulta en segundos, cualifica el perfil del propietario y agenda la visita directamente."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}