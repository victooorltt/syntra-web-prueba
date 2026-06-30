import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Users, Calendar, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const sectors = [
  {
    sector: "Clínica Estética",
    emoji: "✨",
    stats: [
      { icon: Calendar, label: "Citas gestionadas automáticamente", value: "+40%", color: "text-rose-400" },
      { icon: Clock, label: "Reducción de no-shows", value: "–30%", color: "text-rose-400" },
      { icon: Zap, label: "Tiempo de respuesta", value: "<60s", color: "text-primary" },
    ],
    bg: "border-rose-500/20 hover:border-rose-500/40",
    accent: "from-rose-500/10",
  },
  {
    sector: "Inmobiliaria",
    emoji: "🏠",
    stats: [
      { icon: Users, label: "Leads cualificados automáticamente", value: "×3", color: "text-amber-400" },
      { icon: Calendar, label: "Visitas concertadas sin intervención", value: "+55%", color: "text-amber-400" },
      { icon: Clock, label: "Horas de seguimiento ahorradas/mes", value: "40h+", color: "text-primary" },
    ],
    bg: "border-amber-500/20 hover:border-amber-500/40",
    accent: "from-amber-500/10",
  },
  {
    sector: "Centro de Belleza",
    emoji: "💅",
    stats: [
      { icon: Calendar, label: "Reservas gestionadas 24/7", value: "+50%", color: "text-pink-400" },
      { icon: Users, label: "Retención de clientes habituales", value: "+25%", color: "text-pink-400" },
      { icon: Zap, label: "Respuesta fuera de horario", value: "100%", color: "text-primary" },
    ],
    bg: "border-pink-500/20 hover:border-pink-500/40",
    accent: "from-pink-500/10",
  },
  {
    sector: "Despacho de Abogados",
    emoji: "⚖️",
    stats: [
      { icon: Clock, label: "Horas admin recuperadas por semana", value: "8–12h", color: "text-violet-400" },
      { icon: Users, label: "Consultas iniciales atendidas por IA", value: "80%", color: "text-violet-400" },
      { icon: TrendingUp, label: "Capacidad de captación ampliada", value: "+35%", color: "text-primary" },
    ],
    bg: "border-violet-500/20 hover:border-violet-500/40",
    accent: "from-violet-500/10",
  },
  {
    sector: "Fisioterapia y Salud",
    emoji: "🩺",
    stats: [
      { icon: Calendar, label: "Confirmaciones y recordatorios automáticos", value: "100%", color: "text-emerald-400" },
      { icon: Users, label: "Pacientes nuevos captados online", value: "+30%", color: "text-emerald-400" },
      { icon: Clock, label: "Reducción tiempo recepción", value: "–60%", color: "text-primary" },
    ],
    bg: "border-emerald-500/20 hover:border-emerald-500/40",
    accent: "from-emerald-500/10",
  },
  {
    sector: "Retail y Comercio",
    emoji: "🛍️",
    stats: [
      { icon: Zap, label: "Atención al cliente automatizada", value: "24/7", color: "text-cyan-400" },
      { icon: TrendingUp, label: "Conversión de consultas en ventas", value: "+28%", color: "text-cyan-400" },
      { icon: BarChart3, label: "Reducción de carga operativa", value: "–50%", color: "text-primary" },
    ],
    bg: "border-cyan-500/20 hover:border-cyan-500/40",
    accent: "from-cyan-500/10",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24 sm:py-32">
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Impacto por sector</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mt-3 tracking-tight">
            Negocios que{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              cambiaron para siempre
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Estos son los indicadores de mejora habituales que consiguen nuestros clientes según su sector.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {sectors.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-3xl bg-card/60 border ${s.bg} overflow-hidden transition-all duration-300 cursor-default group`}
            >
              {/* Accent top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary to-accent" />

              <div className="p-6">
                {/* Sector header */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${s.accent} to-transparent border border-border/40 mb-5`}>
                  <span className="text-lg">{s.emoji}</span>
                  <span className="text-xs font-black text-foreground uppercase tracking-widest">{s.sector}</span>
                </div>

                {/* Stats */}
                <div className="space-y-4">
                  {s.stats.map((stat, j) => (
                    <div key={j} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <stat.icon className="w-3.5 h-3.5 text-muted-foreground" />
                        </div>
                        <span className="text-xs text-muted-foreground leading-snug">{stat.label}</span>
                      </div>
                      <span className={`text-base font-display font-black shrink-0 ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground/50 mt-6 max-w-2xl mx-auto">
          * Los datos mostrados son rangos habituales basados en proyectos similares. Los resultados varían según el sector, volumen y punto de partida de cada empresa.
        </p>

        <div className="text-center mt-10">
          <a href="#contacto">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/20 uppercase tracking-wide text-sm">
              Quiero resultados así
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}