import React from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, UserX, TrendingDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: Clock,
    question: "¿Tardas demasiado en responder a tus leads?",
    detail: "Cada minuto de retraso, el cliente se va a la competencia.",
  },
  {
    icon: AlertTriangle,
    question: "¿Tareas repetitivas te roban horas cada día?",
    detail: "Horas que deberías dedicar a crecer tu negocio.",
  },
  {
    icon: UserX,
    question: "¿Pierdes clientes por falta de seguimiento?",
    detail: "Sin automatización, el 70% de los leads se enfría sin convertir.",
  },
  {
    icon: TrendingDown,
    question: "¿Tus ingresos dependen 100% de tu presencia?",
    detail: "Tu negocio no debería parar cuando tú paras.",
  },
];

export default function Problems() {
  return (
    <section id="problemas" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-3xl blur-xl" />
            <img
              src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/ee0917c31_generated_image.png"
              alt="Business network"
              className="relative z-10 w-full rounded-3xl border border-border/40 shadow-2xl object-cover"
            />
          </motion.div>

          {/* Problems */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">El problema</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 tracking-tight">
                ¿Te suena familiar?
              </h2>
            </motion.div>

            <div className="space-y-3">
              {problems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4 items-center p-4 rounded-2xl bg-card/50 border border-border/50 hover:border-destructive/30 transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{item.question}</h3>
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
              <a href="#soluciones">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/20">
                  Ver cómo lo resolvemos
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