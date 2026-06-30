import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, TrendingDown } from "lucide-react";

const cases = [
  {
    sector: "Clínica Estética",
    emoji: "✨",
    problem: "20 consultas sin responder al mes",
    ticket: "500 € de ticket medio",
    loss: "10.000 €",
    lossLabel: "potenciales perdidos",
    color: "from-rose-500/20 to-rose-500/5",
    borderColor: "border-rose-500/30",
    badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  },
  {
    sector: "Inmobiliaria",
    emoji: "🏠",
    problem: "5 leads cualificados sin seguimiento",
    ticket: "Comisión media 6.000 €/operación",
    loss: "30.000 €",
    lossLabel: "potenciales perdidos",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/30",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    sector: "Despacho Legal",
    emoji: "⚖️",
    problem: "10 consultas no convertidas al mes",
    ticket: "Honorarios medios 1.500 €/caso",
    loss: "15.000 €",
    lossLabel: "potenciales perdidos",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/30",
    badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    sector: "Fisioterapia",
    emoji: "🦴",
    problem: "30% de no-shows sin recuperar",
    ticket: "40 € por sesión, 200 sesiones/mes",
    loss: "2.400 €",
    lossLabel: "en no-shows mensuales",
    color: "from-cyan-500/20 to-cyan-500/5",
    borderColor: "border-cyan-500/30",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
];

export default function MoneyLoss() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-rose-950/5 to-background pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-rose-500/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/25 mb-6">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span className="text-sm font-bold text-rose-400 uppercase tracking-widest">Diagnóstico de pérdidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-tight">
            ¿Cuánto dinero está{" "}
            <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent">
              perdiendo tu empresa
            </span>
            ?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Cada día sin automatización es dinero que sale de tu negocio sin que lo veas. Estos son ejemplos reales del sector.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl border ${item.borderColor} bg-card/60 overflow-hidden hover:shadow-xl transition-all duration-300 group`}
            >
              <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${item.color} opacity-60`} />

              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.sector}
                  </span>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-2">
                    <TrendingDown className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 mt-0.5 shrink-0 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground">{item.ticket}</p>
                  </div>
                </div>

                <div className="border-t border-border/40 pt-4">
                  <p className="text-3xl font-display font-black text-foreground leading-none">{item.loss}</p>
                  <p className="text-xs text-rose-400 font-semibold mt-1">{item.lossLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/25 shadow-xl shadow-primary/5 max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl font-display font-black text-foreground mb-2">
              Syntra identifica y elimina estas pérdidas.
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              En una auditoría estratégica gratuita detectamos exactamente qué procesos están costándote dinero — y cómo automatizarlos.
            </p>
            <a href="#contacto">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-black rounded-full px-8 h-13 shadow-xl shadow-primary/30 uppercase tracking-wide text-sm">
                Descubrir mi potencial de crecimiento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}