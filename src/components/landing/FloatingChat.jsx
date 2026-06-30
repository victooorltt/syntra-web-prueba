import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, User, ArrowRight } from "lucide-react";

const STEPS = [
  {
    id: "sector",
    question: "¿En qué sector opera tu empresa?",
    options: ["Clínica / Salud", "Inmobiliaria", "Despacho Legal", "Centro de Belleza", "Restauración", "Retail / Comercio", "Otro"],
  },
  {
    id: "employees",
    question: "¿Cuántas personas tiene tu equipo?",
    options: ["Solo yo", "2–5 personas", "6–15 personas", "16–50 personas", "+50 personas"],
  },
  {
    id: "leads",
    question: "¿Cuántos leads o consultas recibes al mes aproximadamente?",
    options: ["Menos de 20", "20–50", "50–150", "+150", "No lo sé"],
  },
  {
    id: "problem",
    question: "¿Cuál es tu mayor problema ahora mismo?",
    options: [
      "Respondo tarde y pierdo clientes",
      "Demasiadas tareas administrativas",
      "Necesito más leads cualificados",
      "Tengo muchos no-shows / cancelaciones",
      "Quiero escalar sin contratar más",
    ],
  },
];

const diagnoses = {
  "Respondo tarde y pierdo clientes": {
    title: "Diagnóstico: Pérdida de oportunidades por tiempo de respuesta",
    insight: "El 78% de los clientes elige al primero que responde. Si tardas más de 5 minutos, pierdes el 80% de las oportunidades. Con un Agente IA de Syntra, tu empresa responde en segundos — 24/7, sin intervención humana.",
    cta: "Cada día sin IA es dinero que se va a tu competencia.",
  },
  "Demasiadas tareas administrativas": {
    title: "Diagnóstico: Tu equipo está enterrado en burocracia",
    insight: "En empresas de tu tamaño, el equipo dedica entre 3 y 5 horas diarias a tareas repetitivas: citas, recordatorios, respuestas, seguimientos. La IA de Syntra automatiza el 80% en menos de 7 días.",
    cta: "Recupera semanas de trabajo al mes — sin contratar nadie.",
  },
  "Necesito más leads cualificados": {
    title: "Diagnóstico: Proceso de captación sin optimizar",
    insight: "Muchas empresas gastan en publicidad pero no tienen un sistema que convierta el tráfico. Un agente IA que cualifica, responde y agenda en automático puede multiplicar tu tasa de conversión ×3 en 30 días.",
    cta: "Te mostramos exactamente cómo en tu auditoría gratuita.",
  },
  "Tengo muchos no-shows / cancelaciones": {
    title: "Diagnóstico: Pérdidas directas por falta de seguimiento",
    insight: "Un 20–30% de no-shows representa miles de euros mensuales. La automatización de recordatorios y confirmaciones por WhatsApp reduce las cancelaciones un 65% de media en los primeros 30 días.",
    cta: "Calcula cuánto dinero puedes recuperar en tu auditoría.",
  },
  "Quiero escalar sin contratar más": {
    title: "Diagnóstico: Listo para escalar con automatización",
    insight: "Es el escenario ideal para la IA. Construimos sistemas que manejan 10× el volumen actual sin coste adicional de personal. Tu equipo se enfoca en cerrar, mientras la IA gestiona todo lo demás.",
    cta: "En la auditoría, diseñamos juntos el sistema exacto para ti.",
  },
};

const INITIAL_MESSAGE = {
  role: "bot",
  text: "Hola 👋\n\nSoy **Syntra AI**.\n\nEn menos de 2 minutos puedo detectar dónde tu empresa está perdiendo tiempo, dinero o clientes.\n\n¿Empezamos?",
};

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [phase, setPhase] = useState("intro"); // intro | questionnaire | diagnosis | free
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const addBotMessage = (text, delay = 1200) => {
    setIsTyping(true);
    return new Promise(resolve => setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text }]);
      setIsTyping(false);
      resolve();
    }, delay));
  };

  const handleStart = async () => {
    setPhase("questionnaire");
    await addBotMessage(STEPS[0].question, 600);
  };

  const handleOption = async (option) => {
    const step = STEPS[stepIndex];
    const newAnswers = { ...answers, [step.id]: option };
    setAnswers(newAnswers);
    setMessages(prev => [...prev, { role: "user", text: option }]);

    if (stepIndex < STEPS.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages(prev => [...prev, { role: "bot", text: STEPS[stepIndex + 1].question }]);
        setIsTyping(false);
        setStepIndex(stepIndex + 1);
      }, 900);
    } else {
      // Generate diagnosis
      setIsTyping(true);
      setTimeout(() => {
        const diag = diagnoses[option] || diagnoses["Respondo tarde y pierdo clientes"];
        setMessages(prev => [...prev, {
          role: "bot",
          text: `**${diag.title}**\n\n${diag.insight}`,
          isDiagnosis: true,
        }, {
          role: "bot",
          text: `💡 ${diag.cta}\n\n¿Quieres ver exactamente cómo Syntra puede transformar tu empresa en una **auditoría estratégica gratuita**?`,
          isCTA: true,
        }]);
        setIsTyping(false);
        setPhase("diagnosis");
      }, 1500);
    }
  };

  const sendFreeMessage = (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setMessages(prev => [...prev, { role: "user", text: msg }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: "bot",
        text: "Gracias por tu mensaje. Un consultor de Syntra Labs te responderá en menos de 2 horas. También puedes escribirnos directamente por WhatsApp para una respuesta inmediata. 🚀",
      }]);
      setIsTyping(false);
    }, 1100);
  };

  const currentOptions = phase === "questionnaire" && STEPS[stepIndex] ? STEPS[stepIndex].options : null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {/* Notification bubble */}
      <AnimatePresence>
        {showBubble && !open && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            className="relative bg-card border border-primary/40 rounded-2xl rounded-bl-sm px-4 py-3 shadow-2xl max-w-[240px] cursor-pointer"
            onClick={() => { setOpen(true); setShowBubble(false); }}
          >
            <button
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground"
              onClick={(e) => { e.stopPropagation(); setShowBubble(false); }}
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-xs text-foreground font-semibold leading-snug">
              🤖 Detecta en 2 min qué está frenando tu crecimiento
            </p>
            <div className="absolute -bottom-2 left-4 w-3 h-3 bg-card border-b border-l border-primary/30 rotate-[-45deg]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="w-[340px] sm:w-[390px] bg-card border border-border/60 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
            style={{ maxHeight: "560px" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-primary/20 to-accent/10 border-b border-border/40">
              <div className="w-10 h-10 rounded-full bg-primary/25 border-2 border-primary/40 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-black text-foreground leading-tight">Syntra AI — Consultor</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Activo · diagnóstico gratuito</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ maxHeight: "310px" }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : msg.isDiagnosis
                        ? "bg-primary/10 border border-primary/25 text-foreground rounded-tl-sm"
                        : "bg-secondary text-foreground rounded-tl-sm"
                  }`}>
                    {msg.text.split("\n").map((line, j) => (
                      <span key={j}>
                        {line.split("**").map((part, k) =>
                          k % 2 === 1 ? <strong key={k}>{part}</strong> : part
                        )}
                        {j < msg.text.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="w-7 h-7 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Options / CTA / Input */}
            <div className="px-4 pb-4 pt-1 space-y-2">
              {phase === "intro" && (
                <button
                  onClick={handleStart}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold rounded-xl px-4 py-2.5 text-sm hover:bg-primary/90 transition-colors"
                >
                  Hacer diagnóstico gratuito <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {phase === "questionnaire" && currentOptions && !isTyping && (
                <div className="flex flex-wrap gap-1.5">
                  {currentOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleOption(opt)}
                      className="text-[11px] px-2.5 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-semibold"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {phase === "diagnosis" && !isTyping && (
                <a href="#contacto" onClick={() => setOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black rounded-xl px-4 py-3 text-sm hover:bg-primary/90 transition-colors uppercase tracking-wide">
                    Reservar Auditoría Gratuita <ArrowRight className="w-4 h-4" />
                  </button>
                </a>
              )}

              {(phase === "free" || phase === "diagnosis") && (
                <div className="flex items-center gap-2 bg-secondary rounded-xl px-3 py-2 border border-border/40">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendFreeMessage(); } }}
                    placeholder="¿Alguna otra pregunta?"
                    className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  />
                  <button
                    onClick={() => sendFreeMessage()}
                    disabled={!input.trim()}
                    className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-colors shrink-0"
                  >
                    <Send className="w-3.5 h-3.5 text-primary-foreground" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      {!open && (
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setOpen(true); setShowBubble(false); }}
          className="w-14 h-14 rounded-full bg-primary shadow-xl shadow-primary/40 flex items-center justify-center relative"
        >
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-background animate-pulse" />
        </motion.button>
      )}
    </div>
  );
}