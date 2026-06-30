import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Las reservas online aumentaron un 60% en tres meses. El sistema responde a cada paciente en segundos, incluso fuera de horario. Nuestro equipo ahora solo se ocupa de lo que importa: tratar.",
    name: "Dra. Elena Marín",
    role: "Directora Médica · Clínica Estética Premium",
    sector: "Clínica Estética",
  },
  {
    quote: "Antes perdíamos consultas por no responder a tiempo. Ahora cada mensaje recibe respuesta inmediata y el agente de IA agenda la primera visita automáticamente. Hemos duplicado las consultas iniciales.",
    name: "Javier Montoya",
    role: "Socio Fundador · Montoya Vidal & Asociados",
    sector: "Despacho de Abogados",
  },
  {
    quote: "El nuevo sistema de captación nos trae leads cualificados cada día. La web transmite exactamente el nivel de profesionalidad que queríamos. Por primera vez, nuestra imagen online está a la altura de nuestro servicio.",
    name: "Dra. Patricia Ruiz",
    role: "Fisioterapeuta · Fisio+ Centro",
    sector: "Fisioterapia",
  },
  {
    quote: "El CRM automatizado recuperó oportunidades que teníamos olvidadas. Los seguimientos se hacen solos. El ROI fue inmediato: en el primer mes ya habíamos recuperado la inversión.",
    name: "Ricardo Vidal",
    role: "Socio · Lexium Abogados",
    sector: "Despacho de Abogados",
  },
  {
    quote: "Nuestra clínica necesitaba imagen premium y captación automática. Syntra entregó ambos en tiempo récord. Los pacientes comentan lo fácil que es reservar. Eso se nota en la facturación.",
    name: "Dr. Marcos Herrera",
    role: "Director · Clínica Belleza & Medicina",
    sector: "Clínica Estética",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [index]);

  const t = testimonials[index];

  return (
    <section className="relative py-32 sm:py-48 overflow-hidden" style={{ background: "#0A0A0A" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #1C1C1C 30%, #1C1C1C 70%, transparent)" }} />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase mb-6" style={{ color: "#6A6A6A" }}>Clientes</p>
            <h2 className="font-display font-black tracking-tight leading-[0.92]" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F5F5F5" }}>
              RESULTADOS QUE
              <br /><span style={{ color: "#3A3A3A" }}>HABLAN SOLOS.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => paginate(-1)}
              className="w-11 h-11 flex items-center justify-center transition-all duration-300"
              style={{ border: "1px solid #1C1C1C", borderRadius: "3px", color: "#7A7A7A" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#3A3A3A"; e.currentTarget.style.color = "#F5F5F5"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1C1C1C"; e.currentTarget.style.color = "#7A7A7A"; }}
              aria-label="Anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-11 h-11 flex items-center justify-center transition-all duration-300"
              style={{ border: "1px solid #1C1C1C", borderRadius: "3px", color: "#7A7A7A" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#3A3A3A"; e.currentTarget.style.color = "#F5F5F5"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1C1C1C"; e.currentTarget.style.color = "#7A7A7A"; }}
              aria-label="Siguiente"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative" style={{ minHeight: "300px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Sector tag */}
              <p className="text-xs tracking-[0.25em] uppercase mb-8" style={{ color: "#5A5A5A" }}>{t.sector}</p>

              {/* Quote */}
              <blockquote className="font-display font-medium leading-[1.3] tracking-tight mb-10" style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)", color: "#E0E0E0" }}>
                <span style={{ color: "#2A2A2A" }}>"</span>
                {t.quote}
                <span style={{ color: "#2A2A2A" }}>"</span>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4" style={{ borderTop: "1px solid #1A1A1A", paddingTop: "1.5rem" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "#141414", border: "1px solid #1C1C1C" }}>
                  <span className="font-display font-bold text-sm" style={{ color: "#8A8A8A" }}>{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#D0D0D0" }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#6A6A6A" }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex items-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className="transition-all duration-400"
              style={{
                height: "2px",
                width: i === index ? "32px" : "12px",
                background: i === index ? "#F5F5F5" : "#2A2A2A",
                borderRadius: "1px",
              }}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}