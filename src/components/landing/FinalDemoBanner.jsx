import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Clock, Zap } from "lucide-react";

export default function FinalDemoBanner() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary to-accent opacity-10 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-primary/30 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm p-6 sm:p-10 lg:p-14 text-center shadow-2xl shadow-primary/20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 mb-4 sm:mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">DEMOSTRACIÓN GRATUITA</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-display font-black leading-tight mb-3 sm:mb-4"
          >
            ¿Quieres ver cómo tu IA{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              atiende pacientes mientras duermes?
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-1 sm:px-0"
          >
            En una demostración de 15 minutos sin compromiso, te mostraremos cómo Syntra IA puede triplicar tus citas, reducir no-shows y liberar horas de tu equipo todos los días.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-start sm:items-center mb-7 sm:mb-10"
          >
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>Solo 15 minutos</span>
            </div>
            <div className="hidden sm:block w-px bg-border/30" />
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Zap className="w-4 h-4 text-primary shrink-0" />
              <span>Sin instalación previa</span>
            </div>
            <div className="hidden sm:block w-px bg-border/30" />
            <div className="flex items-center gap-2 text-sm text-foreground">
              <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              <span>Con especialista personalizado</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#contacto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 font-bold rounded-full px-6 sm:px-10 h-11 sm:h-14 text-sm sm:text-lg shadow-lg shadow-primary/40 inline-flex items-center gap-2 transition-all hover:scale-105"
              >
                Agendar demo gratis
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs text-muted-foreground mt-6"
          >
            ✓ Sin tarjeta de crédito · Sin compromiso · Respuesta en menos de 2 horas
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}