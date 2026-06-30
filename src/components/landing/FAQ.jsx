import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Reemplaza a mi equipo comercial?",
    a: "No. Les libera de tareas repetitivas para que puedan centrarse en vender. Tu equipo hace lo que mejor sabe hacer: cerrar operaciones. El sistema hace el resto.",
  },
  {
    q: "¿Funciona fuera del horario laboral?",
    a: "Sí. Atiende consultas 24 horas al día, 7 días a la semana, incluidos festivos. Ningún lead queda sin respuesta por ser tarde o fin de semana.",
  },
  {
    q: "¿Puedo mantener mi CRM actual?",
    a: "Sí. Syntra puede integrarse con la mayoría de CRM del mercado. Nos adaptamos a tus herramientas, no al revés.",
  },
  {
    q: "¿Cuánto tarda la implantación?",
    a: "Entre 7 y 30 días según el proyecto. En la primera semana ya tienes los agentes activos respondiendo llamadas y mensajes.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "No. Nosotros nos encargamos de toda la configuración, integración y puesta en marcha. Tú solo gestionas los resultados.",
  },
  {
    q: "¿El Agente de Voz suena natural?",
    a: "Sí. Utilizamos voces avanzadas diseñadas para mantener conversaciones naturales y fluidas. La mayoría de propietarios no perciben diferencia con una llamada humana.",
  },
  {
    q: "¿Qué pasa con los leads que ya tengo?",
    a: "El sistema importa y activa el seguimiento automático de todos tus contactos existentes. Muchas inmobiliarias recuperan oportunidades dormidas desde meses atrás.",
  },
  {
    q: "¿Cuánto cuesta Syntra?",
    a: "Cada inmobiliaria es diferente. Realizamos un diagnóstico gratuito donde analizamos tu situación y diseñamos una solución adaptada. En muchos casos, una sola operación cerrada compensa la inversión.",
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      style={{ borderBottom: "1px solid #1C1C1C" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-6 group"
      >
        <span className="text-sm sm:text-base font-medium transition-colors duration-300" style={{ color: open ? "#F5F5F5" : "#BDBDBD" }}>{faq.q}</span>
        <div className="w-6 h-6 flex items-center justify-center shrink-0">
          {open ? <Minus className="w-4 h-4" style={{ color: "#BDBDBD" }} /> : <Plus className="w-4 h-4" style={{ color: "#4A4A4A" }} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-32 sm:py-48 overflow-hidden" style={{ background: "#0A0A0A" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #1C1C1C, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-6" style={{ color: "#4A4A4A" }}>
            Preguntas Frecuentes
          </p>
          <h2 className="font-display font-black tracking-tight leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#F5F5F5" }}>
            Todo lo que
            <br />
            <span style={{ color: "#4A4A4A" }}>necesitas saber.</span>
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
      </div>
    </section>
  );
}