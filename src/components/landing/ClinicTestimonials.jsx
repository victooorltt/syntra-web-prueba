import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, FileText } from "lucide-react";

const cases = [
  {
    sector: "Clínica Estética",
    emoji: "✨",
    situation: "Más de 60 consultas mensuales sin responder fuera del horario de atención.",
    solution: "Agente IA conectado a WhatsApp, web y formularios.",
    result: "Hasta un 40% más de citas gestionadas y reducción significativa de cancelaciones.",
    metric: "+40% citas",
    icon: TrendingUp,
    accentColor: "border-rose-500/25",
    accentBg: "from-rose-500/10 to-transparent",
    metricColor: "text-rose-400",
    metricBg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    sector: "Inmobiliaria",
    emoji: "🏠",
    situation: "Leads perdidos por falta de seguimiento.",
    solution: "Automatización de captación, seguimiento y cualificación.",
    result: "Incremento de visitas concertadas y mejora de la conversión comercial.",
    metric: "+Conversión",
    icon: ArrowRight,
    accentColor: "border-amber-500/25",
    accentBg: "from-amber-500/10 to-transparent",
    metricColor: "text-amber-400",
    metricBg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    sector: "Despacho Profesional",
    emoji: "⚖️",
    situation: "Exceso de tiempo dedicado a tareas administrativas.",
    solution: "Automatización documental y atención inicial mediante IA.",
    result: "Recuperación de varias horas semanales para tareas de alto valor.",
    metric: "+Horas libres",
    icon: Clock,
    accentColor: "border-violet-500/25",
    accentBg: "from-violet-500/10 to-transparent",
    metricColor: "text-violet-400",
    metricBg: "bg-violet-500/10 border-violet-500/20",
  },
];

export default function ClinicTestimonials() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(207_100%_55%_/_0.05)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Resultados reales</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mt-3 tracking-tight">
            Casos de uso reales y{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              resultados habituales.
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Cada empresa es diferente, pero estos son algunos de los resultados que suelen conseguir nuestros clientes al automatizar la captación, atención y seguimiento comercial.
          </p>
        </motion.div>

        {/* Case cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative flex flex-col rounded-3xl bg-card/70 border ${c.accentColor} overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300`}
            >
              {/* Top accent */}
              <div className={`h-1 w-full bg-gradient-to-r from-primary to-accent`} />
              <div className={`absolute top-1 left-0 right-0 h-24 bg-gradient-to-b ${c.accentBg} opacity-60`} />

              <div className="relative p-6 sm:p-7 flex flex-col flex-1">
                {/* Sector badge */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-2xl">{c.emoji}</span>
                  <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">{c.sector}</span>
                </div>

                {/* P → S → R */}
                <div className="space-y-4 flex-1">
                  <div>
                    <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">Situación inicial</p>
                    <p className="text-sm text-muted-foreground leading-snug">{c.situation}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Solución aplicada</p>
                    <p className="text-sm text-muted-foreground leading-snug">{c.solution}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Resultado habitual</p>
                    <p className="text-sm text-foreground font-semibold leading-snug">{c.result}</p>
                  </div>
                </div>

                {/* Metric badge */}
                <div className={`mt-5 px-4 py-2.5 rounded-2xl border ${c.metricBg} flex items-center justify-between`}>
                  <span className="text-xs text-muted-foreground">Impacto típico</span>
                  <span className={`text-sm font-display font-black ${c.metricColor}`}>{c.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs text-muted-foreground/60 max-w-2xl mx-auto"
        >
          * Los resultados dependen de múltiples factores y pueden variar según el sector, volumen de oportunidades y situación inicial de cada empresa.
        </motion.p>
      </div>
    </section>
  );
}