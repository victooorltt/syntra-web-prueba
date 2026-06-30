import React from "react";
import { Button } from "@/components/ui/button";
import { Target, ShieldCheck, Clock, BarChart3, Headphones, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Target,
    title: "Leads de alto valor",
    description: "Recibe y califica leads automáticamente, sin perder ninguna oportunidad.",
  },
  {
    icon: ShieldCheck,
    title: "Mayor retención",
    description: "Seguimiento continuo que mantiene a tus clientes comprometidos.",
  },
  {
    icon: Clock,
    title: "+15h semanales libres",
    description: "Libera tiempo para lo que realmente hace crecer tu negocio.",
  },
  {
    icon: BarChart3,
    title: "Métricas en tiempo real",
    description: "Dashboards claros con datos accionables de tu rendimiento.",
  },
  {
    icon: Globe,
    title: "Cualquier sector",
    description: "Inmobiliarias, clínicas, estética, dental, retail, servicios y más.",
  },
  {
    icon: Headphones,
    title: "Soporte dedicado",
    description: "Equipo experto a tu lado en cada paso de la implementación.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-xl" />
            <img
              src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/86f5bd837_generated_image.png"
              alt="AI agent 24/7"
              className="relative z-10 w-full rounded-3xl border border-accent/20 shadow-2xl object-cover"
            />
          </motion.div>

          {/* Benefits Grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Beneficios</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 tracking-tight">
                Todo lo que ganas
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex gap-3 items-center p-4 rounded-2xl bg-card/40 border border-border/40 hover:border-primary/30 hover:bg-primary/[0.03] transition-all duration-300"
                >
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <b.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-display font-bold">{b.title}</h3>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <a href="#contacto">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/20">
                  Comenzar ahora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}