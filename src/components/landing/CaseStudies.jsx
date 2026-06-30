import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Users, CheckCircle } from "lucide-react";

const cases = [
  {
    sector: "Clínica Dental",
    emoji: "🦷",
    problem: "Recepción saturada. Llamadas perdidas fuera de horario. Pacientes que se iban a la competencia.",
    solution: "Agente IA en WhatsApp que agenda, confirma y recuerda citas automáticamente 24/7.",
    result: "De 3 a 27 citas semanales. 0 llamadas perdidas. Recepcionista liberada para atención presencial.",
    metrics: [
      { icon: TrendingUp, value: "+800%", label: "citas agendadas" },
      { icon: Clock, value: "24/7", label: "atención activa" },
    ],
    tag: "WhatsApp IA",
    tagColor: "text-[#25D366] bg-[#25D366]/10 border-[#25D366]/20",
    accentColor: "from-[#25D366]/15 to-transparent",
  },
  {
    sector: "Clínica Estética",
    emoji: "✨",
    problem: "Bajo porcentaje de conversión de seguidores en Instagram. Respuestas manuales lentas perdían interesados.",
    solution: "Automatización de DMs y comentarios. Cada consulta recibía respuesta + enlace de reserva en segundos.",
    result: "+40% de conversiones desde Instagram. Tiempo de respuesta: 0.4 segundos. Sin equipo de ventas adicional.",
    metrics: [
      { icon: Users, value: "+40%", label: "conversiones" },
      { icon: Clock, value: "0.4s", label: "respuesta media" },
    ],
    tag: "Instagram IA",
    tagColor: "text-[#E1306C] bg-[#E1306C]/10 border-[#E1306C]/20",
    accentColor: "from-[#E1306C]/15 to-transparent",
  },
  {
    sector: "Inmobiliaria",
    emoji: "🏠",
    problem: "Leads entrando por portales sin seguimiento. Agentes sin tiempo. Oportunidades enfriándose sin contacto.",
    solution: "Secuencia de nurturing por email + WhatsApp. Cada lead recibía contenido personalizado hasta estar listo para comprar.",
    result: "6 ventas cerradas en 30 días. 0 llamadas en frío necesarias. Sistema activo sin supervisión.",
    metrics: [
      { icon: TrendingUp, value: "6 ventas", label: "en 30 días" },
      { icon: Users, value: "0", label: "llamadas en frío" },
    ],
    tag: "Email + WhatsApp IA",
    tagColor: "text-[#1C9BF0] bg-[#1C9BF0]/10 border-[#1C9BF0]/20",
    accentColor: "from-[#1C9BF0]/15 to-transparent",
  },
  {
    sector: "Centro de Fitness",
    emoji: "💪",
    problem: "Alta tasa de no-shows que dejaba plazas vacías. Personal llamando manualmente para confirmar asistencia.",
    solution: "Recordatorios automáticos por WhatsApp antes de cada sesión con confirmación y opción de reagendar.",
    result: "–70% en no-shows. +100% de ocupación media. 3 horas diarias liberadas del personal de recepción.",
    metrics: [
      { icon: TrendingUp, value: "–70%", label: "no-shows" },
      { icon: Clock, value: "100%", label: "ocupación media" },
    ],
    tag: "Recordatorios IA",
    tagColor: "text-primary bg-primary/10 border-primary/20",
    accentColor: "from-primary/15 to-transparent",
  },
];

export default function CaseStudies() {
  return (
    <section id="casos" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Resultados probados</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mt-3 tracking-tight">
            Problema → Solución →{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Resultado real
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
            Así transformamos negocios reales. Sin promesas genéricas, sin humo. Solo impacto medible.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-border/50 bg-card/50 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/8"
            >
              <div className={`absolute top-0 left-0 right-0 h-28 bg-gradient-to-b ${item.accentColor} opacity-50`} />
              <div className="relative p-6 sm:p-7">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{item.sector}</span>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>

                {/* P→S→R */}
                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-2.5">
                    <span className="text-xs font-black text-rose-400 uppercase mt-0.5 w-16 shrink-0">Problema</span>
                    <p className="text-sm text-muted-foreground leading-snug">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-xs font-black text-primary uppercase mt-0.5 w-16 shrink-0">Solución</span>
                    <p className="text-sm text-muted-foreground leading-snug">{item.solution}</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-xs font-black text-emerald-400 uppercase mt-0.5 w-16 shrink-0">Resultado</span>
                    <p className="text-sm text-foreground font-semibold leading-snug">{item.result}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex items-center gap-3">
                  {item.metrics.map((m, j) => (
                    <div key={j} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-background/50 border border-border/40">
                      <m.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                      <div>
                        <p className="text-sm font-display font-black text-foreground">{m.value}</p>
                        <p className="text-[10px] text-muted-foreground">{m.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-4">¿Quieres un caso de uso específico para tu sector?</p>
          <a href="#contacto" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all text-sm">
            Cuéntanos tu negocio <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}