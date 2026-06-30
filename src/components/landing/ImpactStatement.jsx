import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ImpactStatement() {
  return (
    <section className="relative py-28 sm:py-40 overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.04] to-background pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      {/* Glow center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Pre-label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/8 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">La realidad del mercado</span>
          </div>

          {/* Main statement */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.0] mb-6">
            No gana quien genera
            <br />
            <span className="text-white/25">más contactos.</span>
          </h2>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.0] mb-12">
            Gana quien
            <br />
            <span className="text-primary">responde primero.</span>
          </h2>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-primary/30 mx-auto mb-10" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Cada minuto que pasa sin responder una llamada, un WhatsApp o un formulario, es una oportunidad que puede terminar en manos de tu competencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a href="#contacto">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 font-black rounded-full px-10 h-14 text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] transition-all duration-200"
              >
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}