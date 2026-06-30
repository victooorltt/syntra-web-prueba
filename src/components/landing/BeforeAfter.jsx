import React from "react";
import { motion } from "framer-motion";
import { X, Check, ArrowRight, Clock, AlertCircle, Zap, Bot, TrendingUp } from "lucide-react";

const before = [
  { icon: Clock, text: "Respondes mensajes a mano, uno a uno" },
  { icon: AlertCircle, text: "Leads sin respuesta fuera de horario" },
  { icon: X, text: "Citas olvidadas y no-shows frecuentes" },
  { icon: AlertCircle, text: "Horas al día gestionando WhatsApp" },
  { icon: X, text: "Clientes se van a la competencia que responde antes" },
  { icon: Clock, text: "Sin datos de cuántos leads pierdes ni por qué" },
];

const after = [
  { icon: Zap, text: "La IA responde en menos de 1 segundo, siempre" },
  { icon: Bot, text: "Atención 24/7, ningún lead sin respuesta" },
  { icon: Check, text: "Recordatorios automáticos, cero no-shows" },
  { icon: Zap, text: "Tu equipo se centra en cerrar ventas, no en chatear" },
  { icon: TrendingUp, text: "Más velocidad = más conversiones que la competencia" },
  { icon: Check, text: "Dashboard con métricas en tiempo real" },
];

export default function BeforeAfter() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(207_100%_55%_/_0.05)_0%,_transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">La diferencia</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 tracking-tight">
            Antes vs.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Después de Syntra
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            Dos realidades. La misma empresa. La diferencia es la IA.
          </p>
        </motion.div>

        {/* Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 items-stretch">

          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-red-500/20 bg-red-500/5 overflow-hidden"
          >
            <div className="flex items-center gap-3 px-6 py-5 border-b border-red-500/15 bg-red-500/8">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <div>
                <p className="text-base font-display font-bold text-red-400">Sin IA</p>
                <p className="text-xs text-red-400/60">Gestión manual</p>
              </div>
            </div>

            {/* Mock inbox chaos */}
            <div className="px-6 pt-5 pb-3 space-y-2 border-b border-red-500/10">
              {["Laura M.: «Buenas, ¿tienen hora?»", "Carlos R.: «Hola, sigo esperando respuesta...»", "Ana G.: «¿Hay alguien?»", "+12 mensajes sin leer"].map((msg, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/15">
                  <div className="w-2 h-2 rounded-full bg-red-400 shrink-0 animate-pulse" />
                  <span className="text-xs text-red-300/80 truncate">{msg}</span>
                </div>
              ))}
            </div>

            <div className="px-6 py-5 space-y-3">
              {before.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center shrink-0">
                    <item.icon className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="flex lg:flex-col items-center justify-center gap-3 py-2 lg:py-4">
            <div className="hidden lg:block w-px flex-1 bg-gradient-to-b from-transparent via-border to-transparent" />
            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/40 bg-primary/10 shadow-lg shadow-primary/20 shrink-0 rotate-90 lg:rotate-0">
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>
            <div className="hidden lg:block w-px flex-1 bg-gradient-to-b from-transparent via-border to-transparent" />
          </div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-primary/25 bg-primary/[0.04] overflow-hidden"
          >
            <div className="flex items-center gap-3 px-6 py-5 border-b border-primary/15 bg-primary/8">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-base font-display font-bold text-primary">Con Syntra IA</p>
                <p className="text-xs text-primary/60">Gestión automática</p>
              </div>
            </div>

            {/* Mock AI responses */}
            <div className="px-6 pt-5 pb-3 space-y-2 border-b border-primary/10">
              {[
                "✅ Laura M. — Cita confirmada a las 11h",
                "✅ Carlos R. — Propuesta enviada automáticamente",
                "✅ Ana G. — FAQ respondida en 0.4s",
                "📊 Hoy: 8 leads calificados · 0 sin respuesta",
              ].map((msg, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 border border-primary/15">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-xs text-primary/80 truncate">{msg}</span>
                </div>
              ))}
            </div>

            <div className="px-6 py-5 space-y-3">
              {after.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <item.icon className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/90">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-full shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all text-sm"
          >
            Quiero pasar al "Después"
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}