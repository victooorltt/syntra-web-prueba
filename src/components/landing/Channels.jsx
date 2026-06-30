import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Instagram, Mail, Zap, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const channels = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    color: "#25D366",
    colorClass: "text-[#25D366]",
    borderClass: "border-[#25D366]/30",
    bgClass: "bg-[#25D366]/10",
    glowClass: "shadow-[0_0_40px_#25D36620]",
    tagline: "Responde al instante, vende mientras duermes",
    features: [
      { icon: Clock, text: "Respuestas automáticas 24/7" },
      { icon: Users, text: "Calificación de leads automática" },
      { icon: Zap, text: "Agenda citas sin intervención humana" },
    ],
    mockLines: [
      { from: "client", text: "Hola, ¿tienen disponibilidad mañana?" },
      { from: "ai", text: "¡Hola! Sí, tenemos huecos a las 10h, 12h y 17h. ¿Cuál te viene mejor?" },
      { from: "client", text: "A las 10h perfecto" },
      { from: "ai", text: "✅ Cita confirmada para mañana a las 10h. Te enviaré un recordatorio." },
    ],
  },
  {
    id: "instagram",
    icon: Instagram,
    label: "Instagram",
    color: "#E1306C",
    colorClass: "text-[#E1306C]",
    borderClass: "border-[#E1306C]/30",
    bgClass: "bg-[#E1306C]/10",
    glowClass: "shadow-[0_0_40px_#E1306C20]",
    tagline: "Convierte comentarios y DMs en clientes reales",
    features: [
      { icon: Zap, text: "Auto-respuesta en DMs y comentarios" },
      { icon: Users, text: "Capta leads desde tus publicaciones" },
      { icon: Clock, text: "Seguimiento sin esfuerzo manual" },
    ],
    mockLines: [
      { from: "client", text: "❤️ Comentó tu post: «¿Cuánto cuesta?»" },
      { from: "ai", text: "¡Hola! Te envío la info por DM ahora mismo 😊" },
      { from: "ai", text: "Aquí tienes nuestros planes. ¿Te hago una demo gratis?" },
      { from: "client", text: "Sí, quiero verla" },
    ],
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    color: "#1C9BF0",
    colorClass: "text-[#1C9BF0]",
    borderClass: "border-[#1C9BF0]/30",
    bgClass: "bg-[#1C9BF0]/10",
    glowClass: "shadow-[0_0_40px_#1C9BF020]",
    tagline: "Secuencias inteligentes que cierran ventas solas",
    features: [
      { icon: Zap, text: "Secuencias de nurturing automatizadas" },
      { icon: Clock, text: "Seguimiento post-reunión sin esfuerzo" },
      { icon: Users, text: "Emails personalizados con IA" },
    ],
    mockLines: [
      { from: "ai", text: "Asunto: ¿Pudiste revisar nuestra propuesta?" },
      { from: "ai", text: "Hola Marta, solo quería asegurarme de que recibiste todo. ¿Tienes alguna duda?" },
      { from: "client", text: "Sí, ¡me interesa! ¿Podemos hablar esta semana?" },
      { from: "ai", text: "¡Perfecto! Reserva aquí tu llamada: [Enlace directo] 🚀" },
    ],
  },
];

export default function Channels() {
  const [active, setActive] = useState("whatsapp");
  const current = channels.find((c) => c.id === active);

  return (
    <section id="canales" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Automatización multicanal</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 tracking-tight">
            Tu IA presente en{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              cada canal
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
            Responde, califica y cierra en WhatsApp, Instagram y Email — sin que muevas un dedo.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {channels.map((ch) => (
            <button
              key={ch.id}
              onClick={() => setActive(ch.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-300 ${
                active === ch.id
                  ? `${ch.bgClass} ${ch.borderClass} ${ch.colorClass} ${ch.glowClass}`
                  : "border-border/40 text-muted-foreground hover:border-border hover:text-foreground"
              }`}
            >
              <ch.icon className="w-4 h-4" />
              {ch.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            {/* Left: info */}
            <div>
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-2xl ${current.bgClass} ${current.borderClass} border mb-6`}>
                <current.icon className={`w-6 h-6 ${current.colorClass}`} />
                <span className={`font-display font-bold text-lg ${current.colorClass}`}>{current.label}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-6 leading-snug">
                {current.tagline}
              </h3>

              <div className="space-y-4 mb-8">
                {current.features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/40 hover:border-primary/20 transition-colors"
                  >
                    <div className={`w-9 h-9 rounded-lg ${current.bgClass} flex items-center justify-center shrink-0`}>
                      <f.icon className={`w-4 h-4 ${current.colorClass}`} />
                    </div>
                    <span className="text-sm font-medium text-foreground/90">{f.text}</span>
                  </motion.div>
                ))}
              </div>

              <a href="#contacto">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/20">
                  Activar este canal
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* Right: mock chat */}
            <div className={`rounded-3xl border ${current.borderClass} bg-card/40 p-6 backdrop-blur-sm ${current.glowClass}`}>
              {/* Chat header */}
              <div className={`flex items-center gap-3 pb-4 mb-4 border-b ${current.borderClass}`}>
                <div className={`w-9 h-9 rounded-full ${current.bgClass} flex items-center justify-center`}>
                  <current.icon className={`w-5 h-5 ${current.colorClass}`} />
                </div>
                <div>
                  <p className="text-sm font-bold">{current.label} · IA activa</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-muted-foreground">En línea ahora</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-3">
                {current.mockLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className={`flex ${line.from === "client" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        line.from === "client"
                          ? "bg-secondary text-foreground rounded-br-sm"
                          : `${current.bgClass} ${current.colorClass} font-medium rounded-bl-sm border ${current.borderClass}`
                      }`}
                    >
                      {line.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer badge */}
              <div className="mt-5 pt-4 border-t border-border/30 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] text-muted-foreground">Respondido por IA en <strong className="text-foreground">0.3 segundos</strong></span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}