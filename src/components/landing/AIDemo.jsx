import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, CheckCircle2, Zap, Calendar, Bell, ArrowRight } from "lucide-react";

const flows = [
  {
    label: "Clínica dental",
    color: "from-blue-500 to-primary",
    steps: [
      { type: "user", text: "Hola, quiero pedir cita para una limpieza dental" },
      { type: "ai", text: "¡Hola! Con mucho gusto. ¿Tienes preferencia de día o franja horaria?" },
      { type: "user", text: "Mañana por la tarde si es posible" },
      { type: "ai", text: "Perfecto, tengo disponible mañana a las 17:00 y 18:30. ¿Cuál prefieres?" },
      { type: "user", text: "A las 17:00" },
      { type: "ai", text: "✅ ¡Listo! Cita confirmada para mañana a las 17:00. Te envío recordatorio 1h antes." },
      { type: "action", icon: Calendar, text: "Cita agendada automáticamente en el calendario", color: "text-primary" },
      { type: "action", icon: Bell, text: "Recordatorio programado para -1h antes", color: "text-violet-400" },
    ],
  },
  {
    label: "Inmobiliaria",
    color: "from-emerald-500 to-teal-400",
    steps: [
      { type: "user", text: "Busco piso de 2 habitaciones en Madrid, hasta 1.200€" },
      { type: "ai", text: "Entendido. Tengo 3 opciones que encajan perfectamente. ¿Quieres verlas?" },
      { type: "user", text: "Sí, mándame las opciones" },
      { type: "ai", text: "📍 Chamberí 1.150€ · 📍 Lavapiés 980€ · 📍 Malasaña 1.200€. ¿Alguna te interesa visitar?" },
      { type: "user", text: "La de Chamberí me interesa" },
      { type: "ai", text: "¡Genial! ¿Cuándo tienes disponibilidad para una visita? Te coordino con el agente." },
      { type: "action", icon: Zap, text: "Lead cualificado y asignado al agente en 0 seg", color: "text-emerald-400" },
      { type: "action", icon: Calendar, text: "Visita programada automáticamente", color: "text-primary" },
    ],
  },
  {
    label: "Centro de estética",
    color: "from-pink-500 to-rose-400",
    steps: [
      { type: "user", text: "¿Tenéis disponibilidad para depilación láser esta semana?" },
      { type: "ai", text: "¡Hola! Sí, tenemos huecos el miércoles y jueves. ¿Qué zona quieres tratar?" },
      { type: "user", text: "Piernas completas" },
      { type: "ai", text: "Perfecto. La sesión dura 45 min. ¿Te va bien el miércoles a las 11:00?" },
      { type: "user", text: "Sí, perfecto" },
      { type: "ai", text: "✅ Reserva confirmada para el miércoles a las 11:00. ¡Te esperamos!" },
      { type: "action", icon: Calendar, text: "Reserva sincronizada con el sistema de gestión", color: "text-pink-400" },
      { type: "action", icon: Bell, text: "Recordatorio automático enviado por WhatsApp", color: "text-primary" },
    ],
  },
];

function TypingDots() {
  return (
    <div className="flex gap-1 items-center h-4">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-primary/60"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

export default function AIDemo() {
  const [activeFlow, setActiveFlow] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const chatRef = useRef(null);

  const flow = flows[activeFlow];

  // Auto-scroll chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleSteps, isTyping]);

  // Step-by-step animation
  useEffect(() => {
    setVisibleSteps([]);
    setStepIndex(0);
    setIsTyping(false);
  }, [activeFlow]);

  useEffect(() => {
    if (stepIndex >= flow.steps.length) {
      // Auto-advance to next flow after pause
      const timer = setTimeout(() => {
        setActiveFlow((prev) => (prev + 1) % flows.length);
      }, 3000);
      return () => clearTimeout(timer);
    }

    const step = flow.steps[stepIndex];
    const delay = step.type === "user" ? 600 : step.type === "action" ? 400 : 800;

    // Show typing indicator for AI messages
    if (step.type === "ai") {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleSteps((prev) => [...prev, step]);
        setStepIndex((prev) => prev + 1);
      }, delay + 1000);
      return () => clearTimeout(typingTimer);
    }

    const timer = setTimeout(() => {
      setVisibleSteps((prev) => [...prev, step]);
      setStepIndex((prev) => prev + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [stepIndex, activeFlow]);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(207_100%_55%_/_0.06)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">En vivo</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 tracking-tight">
            Así trabaja la IA{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              por tu negocio
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            Conversaciones reales. Respuestas instantáneas. Acciones automáticas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left: selector + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-3">Elige un sector</p>
            {flows.map((f, i) => (
              <button
                key={i}
                onClick={() => setActiveFlow(i)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                  activeFlow === i
                    ? "border-primary/50 bg-primary/10 shadow-lg shadow-primary/10"
                    : "border-border/40 bg-card/40 hover:border-border/70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${f.color} ${activeFlow === i ? "animate-pulse" : "opacity-50"}`} />
                  <span className={`text-sm font-semibold ${activeFlow === i ? "text-foreground" : "text-muted-foreground"}`}>
                    {f.label}
                  </span>
                  {activeFlow === i && (
                    <span className="ml-auto text-xs text-primary font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                      En curso
                    </span>
                  )}
                </div>
              </button>
            ))}

            {/* KPIs */}
            <div className="mt-6 p-5 rounded-2xl bg-card/50 border border-border/40 space-y-4">
              {[
                { label: "Tiempo de respuesta", value: "< 1 seg", color: "text-primary" },
                { label: "Disponibilidad", value: "24 / 7 / 365", color: "text-emerald-400" },
                { label: "Tasa de resolución", value: "94%", color: "text-violet-400" },
              ].map((kpi, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{kpi.label}</span>
                  <span className={`text-sm font-bold ${kpi.color}`}>{kpi.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: phone mockup + chat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${flow.color} opacity-10 blur-3xl rounded-3xl`} />

              {/* Phone shell */}
              <div className="relative bg-[hsl(220_25%_7%)] border border-border/60 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/60">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 py-3 bg-[hsl(220_25%_5%)] border-b border-border/40">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">Syntra AI</p>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <p className="text-[10px] text-emerald-400 font-medium">En línea ahora</p>
                      </div>
                    </div>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeFlow}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${flow.color} text-white`}
                    >
                      {flow.label}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Chat window */}
                <div
                  ref={chatRef}
                  className="h-80 overflow-y-auto p-4 space-y-3 scroll-smooth"
                  style={{ scrollbarWidth: "none" }}
                >
                  <AnimatePresence>
                    {visibleSteps.map((step, i) => (
                      <motion.div
                        key={`${activeFlow}-${i}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        {step.type === "user" && (
                          <div className="flex justify-end gap-2">
                            <div className="max-w-[75%] bg-primary/20 border border-primary/20 rounded-2xl rounded-tr-sm px-3.5 py-2.5">
                              <p className="text-xs text-foreground">{step.text}</p>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-1">
                              <User className="w-3 h-3 text-muted-foreground" />
                            </div>
                          </div>
                        )}
                        {step.type === "ai" && (
                          <div className="flex gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                              <Bot className="w-3 h-3 text-primary" />
                            </div>
                            <div className="max-w-[75%] bg-card border border-border/50 rounded-2xl rounded-tl-sm px-3.5 py-2.5">
                              <p className="text-xs text-foreground">{step.text}</p>
                            </div>
                          </div>
                        )}
                        {step.type === "action" && (
                          <div className="flex items-center gap-2 px-2">
                            <div className="flex-1 h-px bg-border/40" />
                            <div className="flex items-center gap-1.5 bg-card/80 border border-border/50 rounded-full px-3 py-1.5">
                              <step.icon className={`w-3 h-3 ${step.color}`} />
                              <span className={`text-[10px] font-medium ${step.color}`}>{step.text}</span>
                            </div>
                            <div className="flex-1 h-px bg-border/40" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Bot className="w-3 h-3 text-primary" />
                      </div>
                      <div className="bg-card border border-border/50 rounded-2xl rounded-tl-sm px-4 py-3">
                        <TypingDots />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Input bar */}
                <div className="px-4 py-3 bg-[hsl(220_25%_5%)] border-t border-border/40 flex items-center gap-2">
                  <div className="flex-1 bg-secondary/50 rounded-full px-4 py-2">
                    <p className="text-xs text-muted-foreground/50">Mensaje...</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 flex items-center gap-2 bg-card border border-primary/40 rounded-2xl px-3.5 py-2.5 shadow-xl shadow-primary/10"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold">Automatizado al 100%</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}