import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Sin compromiso ni permanencia",
  "Diagnóstico en menos de 24 horas",
  "Sistemas operativos en 7 días",
  "ROI garantizado o te devolvemos el dinero",
];

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/12 to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/12 rounded-full blur-[130px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 flex justify-center">
            <img
              src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/806c7c800_423A3B0A-6F13-442D-8EC4-138FD084C212.png"
              alt="Syntra Labs"
              className="h-20 w-auto object-contain"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">Auditoría Estratégica Gratuita — Sin compromiso</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black tracking-tight leading-[1.05] mb-6 mx-auto max-w-4xl">
            Mientras lees esto, tu competencia{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ya está automatizando.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            Descubre en una <strong className="text-foreground">auditoría estratégica gratuita</strong> cómo automatizar las áreas con mayor impacto económico de tu empresa.
          </p>
          <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto">
            Identificamos exactamente dónde estás perdiendo clientes, tiempo y dinero — y te presentamos un plan de acción concreto en 24 horas.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-semibold text-muted-foreground">{f}</span>
              </div>
            ))}
          </div>

          <a href="#contacto">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-black text-base rounded-full px-10 sm:px-14 h-14 sm:h-16 shadow-2xl shadow-primary/40 hover:shadow-primary/50 transition-all uppercase tracking-wide"
            >
              Reservar Auditoría Gratuita
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </a>

          <p className="text-xs text-muted-foreground mt-5">
            Sin tarjeta de crédito · Respuesta en &lt;24h · 150+ empresas ya automatizadas
          </p>
        </motion.div>
      </div>
    </section>
  );
}