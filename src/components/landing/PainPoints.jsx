import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const pains = [
  {
    headline: "¿PIERDES VENTAS POR NO ATENDER MAILS, WHATSAPP Y MENSAJES WEB?",
    sub: "Cada mensaje sin respuesta es un cliente que se va a la competencia. Ahora mismo.",
    cta: null,
  },
  {
    headline: "NO PIERDAS MÁS CLIENTES POR LLEGAR TARDE.",
    sub: "El primero en responder se lleva el cliente. Siempre. Tu IA responde en segundos, 24/7.",
    cta: null,
  },
  {
    headline: "¿QUIERES FACTURAR UN 50% MÁS?",
    sub: "Sin contratar más personal. Sin trabajar más horas. Solo automatizando lo que ya tienes.",
    cta: "Quiero facturar más",
  },
];

export default function PainPoints() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.04] to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-primary/8 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-3xl bg-card border border-primary/20 hover:border-primary/50 transition-all duration-400 flex flex-col gap-4 group overflow-hidden"
            >
              {/* Glow corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

              <h3 className="text-xl sm:text-2xl font-display font-black text-foreground leading-tight tracking-tight">
                {p.headline}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {p.sub}
              </p>
              {p.cta && (
                <a href="#contacto">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full h-12 shadow-lg shadow-primary/25 mt-2">
                    {p.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}