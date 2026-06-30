import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Settings, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Consultoría Gratuita",
    description: "Analizamos tu negocio y diseñamos el sistema ideal.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Implementamos en días",
    description: "Configuramos y activamos todo sin interrumpir tu operación.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Resultados en semanas",
    description: "Más ventas, menos trabajo manual desde el primer mes.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Proceso</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 tracking-tight">
            Así de fácil es comenzar
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 aspect-[4/3]">
              <img
                src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/1730c6106_generated_image.png"
                alt="Consultoría estratégica"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                <span className="text-xs font-semibold text-primary">Paso 1 · Consultoría</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-xl aspect-square">
                <img
                  src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/67cb4c5dd_generated_image.png"
                  alt="Implementación técnica"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                  <span className="text-[10px] font-semibold text-primary">Paso 2 · Activación</span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-xl aspect-square">
                <img
                  src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/6f7d011aa_generated_image.png"
                  alt="Resultados y crecimiento"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                  <span className="text-[10px] font-semibold text-primary">Paso 3 · Resultados</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-5 items-start"
              >
                <div className="shrink-0 relative">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border/80 flex items-center justify-center shadow-lg">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <a href="#contacto">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 h-13 shadow-lg shadow-primary/20"
            >
              Agendar consultoría
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}