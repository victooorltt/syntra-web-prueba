import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Globe, Phone, Zap } from "lucide-react";

const channels = [
  { icon: MessageCircle, label: "WhatsApp", color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
  { icon: Mail, label: "Email", color: "text-primary", bg: "bg-primary/10 border-primary/20" },
  { icon: Globe, label: "Web Chat", color: "text-accent", bg: "bg-accent/10 border-accent/20" },
  { icon: Phone, label: "Llamadas", color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/20" },
];

const messages = [
  { from: "Cliente", text: "Hola, ¿tienen disponibilidad mañana?", time: "09:01" },
  { from: "IA", text: "¡Hola! Claro, tenemos horarios a las 10:00 y 16:30. ¿Cuál prefieres?", time: "09:01" },
  { from: "Cliente", text: "A las 10, perfecto", time: "09:02" },
  { from: "IA", text: "✅ Cita confirmada para mañana a las 10:00. Te enviaré un recordatorio. ¡Hasta entonces!", time: "09:02" },
];

export default function AIAgentShowcase() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/15">
              <img
                src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/d1d53a656_generated_image.png"
                alt="AI agent responding to messages"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Second image below */}
            <div className="mt-4 relative rounded-2xl overflow-hidden border border-primary/20 shadow-xl">
              <img
                src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/477807b6a_generated_image.png"
                alt="WhatsApp e Instagram responses"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>

            {/* Channel badges */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {channels.map((ch, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${ch.bg} backdrop-blur-sm shadow-lg`}
                >
                  <ch.icon className={`w-4 h-4 ${ch.color}`} />
                  <span className="text-xs font-semibold">{ch.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text + fake chat */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 lg:mt-0"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Tu agente IA</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-4 tracking-tight">
              Responde <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">en segundos</span> por todos los canales
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              WhatsApp, email, web, llamadas. Tu IA atiende, califica y cierra citas automáticamente — sin que tú hagas nada.
            </p>

            {/* Fake chat UI */}
            <div className="rounded-2xl bg-card border border-border/60 overflow-hidden shadow-xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/40">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-foreground">Agente IA — WhatsApp</span>
                <Zap className="w-3 h-3 text-primary ml-auto" />
              </div>
              <div className="p-4 space-y-3">
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.15 }}
                    className={`flex ${m.from === "IA" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                      m.from === "IA"
                        ? "bg-primary text-primary-foreground rounded-tr-sm"
                        : "bg-secondary text-foreground rounded-tl-sm"
                    }`}>
                      <p>{m.text}</p>
                      <p className={`text-[10px] mt-1 ${m.from === "IA" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{m.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}