import React from "react";
import { Button } from "@/components/ui/button";
import { Bot, CalendarCheck, FileText, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: Zap,
    title: "Captación de Leads Automática",
    description: "Responde al instante, califica y nutre cada lead sin levantar un dedo.",
    color: "primary",
  },
  {
    icon: Bot,
    title: "Agente IA 24/7",
    description: "Tu asistente virtual que atiende, responde y convierte clientes mientras duermes.",
    color: "accent",
  },
  {
    icon: CalendarCheck,
    title: "Agendamiento Inteligente",
    description: "Citas automáticas, recordatorios y cero no-shows. Agenda siempre llena.",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Propuestas y Seguimiento",
    description: "Genera cotizaciones personalizadas y haz seguimiento automático hasta cerrar la venta.",
    color: "accent",
  },
];

export default function Solutions() {
  return (
    <section id="soluciones" className="relative py-24 sm:py-32">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Soluciones</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 tracking-tight">
                IA que{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  trabaja por ti
                </span>
              </h2>
              <p className="text-muted-foreground mt-3 text-sm">
                Inmobiliarias, clínicas, estética, dental, restaurantes, retail — cualquier negocio.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solutions.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group p-5 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/40 transition-all duration-400 hover:bg-primary/[0.03]"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <a href="#contacto">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/20">
                  Quiero estas soluciones
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-xl" />
            <img
              src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/6ace10b9c_generated_image.png"
              alt="AI futuristic solutions"
              className="relative z-10 w-full rounded-3xl border border-primary/20 shadow-2xl shadow-primary/20 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}