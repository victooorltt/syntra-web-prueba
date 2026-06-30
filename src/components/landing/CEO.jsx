import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Zap, Bot, Code2, HeadphonesIcon, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const teamCards = [
  {
    icon: Zap,
    title: "Equipo de Automatización",
    subtitle: "Diseño e implementación de flujos inteligentes.",
    desc: "Creamos automatizaciones que conectan CRM, WhatsApp, formularios, agendas, herramientas de marketing y sistemas internos para eliminar tareas repetitivas.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: Bot,
    title: "Especialistas en IA Conversacional",
    subtitle: "Agentes inteligentes entrenados para tu negocio.",
    desc: "Diseñamos asistentes virtuales capaces de responder consultas, cualificar oportunidades, gestionar citas y realizar seguimiento automático.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Code2,
    title: "Desarrollo e Integraciones",
    subtitle: "Conectamos toda tu empresa.",
    desc: "Integramos las herramientas que ya utilizas para que trabajen juntas de forma automática y sin fricciones.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: BarChart3,
    title: "Soporte y Optimización Continua",
    subtitle: "Mejora constante basada en datos.",
    desc: "Monitorizamos el rendimiento de cada sistema para identificar nuevas oportunidades de mejora y crecimiento.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

export default function CEO() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">El equipo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mt-3 tracking-tight leading-tight max-w-3xl mx-auto">
            Un equipo especializado en crecimiento,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              automatización e inteligencia artificial.
            </span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed">
            En Syntra Labs combinamos estrategia de negocio, automatización avanzada e inteligencia artificial para ayudar a empresas a captar más clientes, optimizar procesos y aumentar su rentabilidad.
          </p>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            No creemos en implantar tecnología por implantar. <strong className="text-foreground">Diseñamos sistemas que generan resultados reales.</strong>
          </p>
        </motion.div>

        {/* Jorge Blanco — founder feature */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-14"
        >
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 aspect-[4/3]">
              <img
                src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/53d20c775_9AB0C981-6D28-4DEB-8B1B-42E6000ABA58.png"
                alt="Jorge Blanco — Syntra Labs"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-xl aspect-square">
              <img
                src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/5ff0c1ffe_B9182D64-C596-43B0-9A39-714963DAFAAD.png"
                alt="Jorge Blanco"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-xl aspect-square">
              <img
                src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/084718164_3D1987DC-9561-4257-83E3-1C71D04E9386.png"
                alt="Jorge Blanco"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <Quote className="w-10 h-10 text-primary/25 mb-5" />
            <blockquote className="text-xl sm:text-2xl font-display font-black leading-snug mb-5 text-foreground">
              "He visto negocios perder miles de euros al mes simplemente por no responder a tiempo. Eso ya no tiene excusa."
            </blockquote>
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card/60 border border-border/50 mb-7">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-primary/20 shrink-0">
                <img
                  src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/5ff0c1ffe_B9182D64-C596-43B0-9A39-714963DAFAAD.png"
                  alt="Jorge Blanco"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <p className="font-display font-black text-lg">Jorge Blanco</p>
                <p className="text-sm text-primary font-bold">Fundador y Director Estratégico — SYNTRA LABS</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Especialista en experiencia de cliente, optimización de procesos y crecimiento empresarial. Lidera cada proyecto definiendo la estrategia y asegurando que cada implantación tenga un impacto real en la facturación y eficiencia del negocio.
                </p>
              </div>
            </div>
            <a href="#contacto">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/25 uppercase tracking-wide text-sm">
                Hablar con el equipo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Team capability cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {teamCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl border ${card.border} bg-card/60 p-6 hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-11 h-11 rounded-2xl ${card.bg} flex items-center justify-center mb-4`}>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </div>
              <h3 className="font-display font-black text-base mb-1 text-foreground">{card.title}</h3>
              <p className={`text-xs font-bold ${card.color} mb-3`}>{card.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-8 rounded-3xl bg-card/40 border border-border/40"
        >
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada proyecto cuenta con especialistas en estrategia, automatización, IA e integración tecnológica.{" "}
            <strong className="text-foreground">Nuestro objetivo no es vender software. Nuestro objetivo es ayudarte a crecer.</strong>
          </p>
        </motion.div>

      </div>
    </section>
  );
}