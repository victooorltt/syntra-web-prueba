import React from "react";
import { motion } from "framer-motion";
import { X, Check, Clock, Users, BarChart3, AlertCircle, Zap } from "lucide-react";

const comparisonData = [
  {
    aspect: "Respuesta a consultas",
    before: "Espera de horas o días",
    after: "Respuesta inmediata 24/7",
    icon: Clock,
  },
  {
    aspect: "Gestión de citas",
    before: "Manual por teléfono/SMS",
    after: "Automática por IA en WhatsApp",
    icon: Users,
  },
  {
    aspect: "Confirmación de citas",
    before: "Recordatorios manuales",
    after: "Automatizados 24h antes",
    icon: Check,
  },
  {
    aspect: "Cancelaciones sin avisar",
    before: "20-30% de no-shows",
    after: "Reducidas a 8-10%",
    icon: AlertCircle,
  },
  {
    aspect: "Horas admin/mes",
    before: "60-80 horas en gestión",
    after: "10-15 horas supervisión",
    icon: BarChart3,
  },
  {
    aspect: "Disponibilidad",
    before: "Horario de oficina",
    after: "Operativa 24 horas al día",
    icon: Zap,
  },
  {
    aspect: "Satisfacción del paciente",
    before: "Frustración por esperas",
    after: "Experiencia ágil y moderna",
    icon: Users,
  },
  {
    aspect: "Costo de personal",
    before: "1-2 recepcionistas",
    after: "Reducción del 70-80%",
    icon: BarChart3,
  },
];

export default function ComparisonTable() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
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
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Comparativa clara</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 tracking-tight">
            Antes vs. Después con{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Syntra Labs
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Descubre cómo cambia completamente la gestión de tu clínica cuando automátizas con IA.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border border-border/50 bg-card/60 backdrop-blur-sm shadow-2xl"
        >
          <div className="hidden lg:grid lg:grid-cols-3 gap-0">
            {/* Header row */}
            <div className="bg-secondary/50 border-b border-border/30 p-6 border-r border-border/30">
              <p className="font-display font-bold text-lg text-foreground">Aspecto de tu clínica</p>
            </div>
            <div className="bg-destructive/5 border-b border-border/30 p-6 border-r border-border/30">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <p className="font-display font-bold text-lg text-destructive">Gestión Manual</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Sin Syntra Labs</p>
            </div>
            <div className="bg-green-500/5 border-b border-border/30 p-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <p className="font-display font-bold text-lg text-green-500">Con Syntra IA</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Totalmente automatizado</p>
            </div>

            {/* Data rows */}
            {comparisonData.map((item, i) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={i}>
                  <div
                    className={`p-6 border-b border-border/30 border-r border-border/30 flex items-start gap-3 ${
                      i % 2 === 0 ? "bg-secondary/20" : ""
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="font-semibold text-foreground">{item.aspect}</p>
                  </div>

                  <div className={`p-6 border-b border-border/30 border-r border-border/30 ${i % 2 === 0 ? "bg-secondary/20" : ""}`}>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.before}</p>
                  </div>

                  <div className={`p-6 border-b border-border/30 ${i % 2 === 0 ? "bg-secondary/20" : ""}`}>
                    <p className="text-sm font-semibold text-green-500 leading-relaxed">{item.after}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          {/* Mobile version */}
          <div className="lg:hidden space-y-4 p-4 sm:p-6">
            {comparisonData.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-2xl bg-secondary/30 border border-border/40 p-4 space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                    <p className="font-semibold text-foreground">{item.aspect}</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{item.before}</p>
                    </div>
                    <div className="flex gap-2">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <p className="text-green-500 font-semibold">{item.after}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 p-5 rounded-2xl bg-primary/5 border border-primary/20 text-center"
        >
          <p className="text-sm text-foreground">
            <span className="font-bold">🎯 Resultado real:</span> Clínicas típicas aumentan un 35-65% sus ingresos en los primeros 3 meses al automatizar con Syntra IA.
          </p>
        </motion.div>
      </div>
    </section>
  );
}