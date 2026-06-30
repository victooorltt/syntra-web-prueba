import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, Lightbulb, TrendingUp, ChevronDown } from "lucide-react";

const useCases = [
  {
    sector: "Clínica Estética",
    emoji: "✨",
    tag: "Estética & Belleza",
    tagColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    problem: "Recepción saturada de llamadas y mensajes. Citas perdidas fuera de horario. Personal desbordado con tareas administrativas que no generan valor.",
    solution: "Agente IA en WhatsApp + web. Responde al instante 24/7, gestiona la agenda, envía confirmaciones, recordatorios y recupera cancelaciones de forma automática.",
    result: "+40% citas mensuales. –70% en no-shows. La recepcionista recupera 3 horas diarias para tareas de mayor valor.",
    metrics: [
      { label: "Más citas", value: "+40%" },
      { label: "Menos no-shows", value: "–70%" },
      { label: "Horas recuperadas/día", value: "3h" },
    ],
    accentFrom: "from-rose-500/15",
  },
  {
    sector: "Inmobiliaria",
    emoji: "🏠",
    tag: "Sector Inmobiliario",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    problem: "Leads que entran y se enfrían. Agentes sin tiempo para hacer seguimiento. Oportunidades que se pierden por respuesta lenta o nula.",
    solution: "Sistema de cualificación y nurturing automático. El lead entra, se clasifica, recibe información personalizada y se agenda visita — todo sin intervención humana hasta el momento clave.",
    result: "6 operaciones cerradas en 30 días sin llamadas en frío. Tiempo de respuesta al lead: menos de 60 segundos.",
    metrics: [
      { label: "Tiempo de respuesta", value: "<60s" },
      { label: "Conversión leads", value: "+55%" },
      { label: "Operaciones mes", value: "+6" },
    ],
    accentFrom: "from-amber-500/15",
  },
  {
    sector: "Despacho de Abogados",
    emoji: "⚖️",
    tag: "Legal & Consultoría",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    problem: "Consultas iniciales que colapsan la agenda. Tiempo valioso del abogado dedicado a filtrar casos sin viabilidad. Potenciales clientes que no reciben respuesta rápida.",
    solution: "Agente IA de primera atención que recoge la situación del cliente, evalúa el tipo de caso, informa sobre servicios y agenda reunión solo con prospectos cualificados.",
    result: "El equipo legal atiende solo casos preseleccionados. Tasa de conversión consulta-cliente: x3.",
    metrics: [
      { label: "Conversión consultas", value: "×3" },
      { label: "Tiempo filtrado", value: "–80%" },
      { label: "Disponibilidad", value: "24/7" },
    ],
    accentFrom: "from-violet-500/15",
  },
  {
    sector: "Fisioterapia",
    emoji: "🦴",
    tag: "Clínicas & Salud",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    problem: "Alta tasa de cancelaciones y no-shows que deja huecos en la agenda. Llamadas para recordar citas que consumen tiempo del personal clínico.",
    solution: "Sistema automático de recordatorios por WhatsApp con confirmación y opción de reagendar. Integrado con el software de gestión de la clínica.",
    result: "–65% en cancelaciones sin previo aviso. +90% de ocupación media. Ningún paciente olvidado.",
    metrics: [
      { label: "Ocupación agenda", value: "+90%" },
      { label: "Cancelaciones", value: "–65%" },
      { label: "Satisfacción paciente", value: "↑" },
    ],
    accentFrom: "from-cyan-500/15",
  },
  {
    sector: "Centro de Belleza",
    emoji: "💅",
    tag: "Belleza & Bienestar",
    tagColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    problem: "Pérdida de clientes por no poder atender mensajes durante servicios. Dificultad para gestionar reservas de múltiples servicios y profesionales.",
    solution: "Asistente IA multicanal (Instagram, WhatsApp, web) que atiende consultas, gestiona reservas con profesional específico y envía recordatorios personalizados.",
    result: "+50% en reservas por canales digitales. 0 llamadas perdidas. Equipo enfocado 100% en el servicio.",
    metrics: [
      { label: "Reservas digitales", value: "+50%" },
      { label: "Llamadas perdidas", value: "0" },
      { label: "Retención clientes", value: "+35%" },
    ],
    accentFrom: "from-pink-500/15",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);

  return (
    <section id="casos-uso" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Casos de uso reales</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mt-3 tracking-tight">
            Problema → Solución →{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Resultado
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Así es exactamente cómo transformamos negocios como el tuyo. Sin humo, sin promesas vacías.
          </p>
        </motion.div>

        {/* Sector tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {useCases.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border transition-all duration-200 ${
                active === i
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                  : "bg-card/60 border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              <span>{item.emoji}</span>
              <span className="hidden sm:inline">{item.sector}</span>
            </button>
          ))}
        </div>

        {/* Active case */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* Problema */}
            <div className="rounded-3xl border border-rose-500/25 bg-card/60 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/15 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-rose-400 uppercase tracking-widest">Problema</p>
                  <p className="text-sm font-bold text-foreground">{useCases[active].sector}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {useCases[active].problem}
              </p>
            </div>

            {/* Solución */}
            <div className="rounded-3xl border border-primary/25 bg-card/60 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/15 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">Solución Syntra</p>
                  <p className="text-sm font-bold text-foreground">Sistema IA a medida</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {useCases[active].solution}
              </p>
            </div>

            {/* Resultado */}
            <div className="rounded-3xl border border-emerald-500/25 bg-card/60 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Resultado real</p>
                  <p className="text-sm font-bold text-foreground">Impacto medible</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                {useCases[active].result}
              </p>
              <div className="grid grid-cols-3 gap-2">
                {useCases[active].metrics.map((m, i) => (
                  <div key={i} className="text-center p-2 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
                    <p className="text-sm font-black text-emerald-400">{m.value}</p>
                    <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground text-sm mb-4">¿Tu sector no aparece? Trabajamos con cualquier tipo de empresa.</p>
          <a href="#contacto">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/25 uppercase tracking-wide text-sm"
            >
              Ver cómo aplica a mi negocio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}