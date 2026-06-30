import React from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GuaranteeSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight mb-4">
            Sin riesgos. Sin permanencias.
            <br />
            <span className="text-white/35">Sin letra pequeña.</span>
          </h2>
          <p className="text-base text-white/45 leading-relaxed max-w-2xl mx-auto mb-4">
            Si durante el diagnóstico detectamos que Syntra no puede ayudarte a mejorar tus procesos, te lo diremos directamente.
          </p>
          <p className="text-lg font-semibold text-white/70 mb-8">
            Nuestro objetivo no es venderte software.
            <br />
            Nuestro objetivo es{" "}
            <span className="text-white">ayudarte a vender más.</span>
          </p>
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