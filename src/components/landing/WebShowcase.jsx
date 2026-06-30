import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const examples = [
  {
    name: "Inmobiliaria",
    desc: "Captación de propietarios, visitas y leads",
    color: "from-blue-500/20 to-primary/10",
    border: "border-blue-500/20",
    icon: "🏠",
    path: "/ia-inmobiliarias",
  },
  {
    name: "Clínica Estética",
    desc: "Reservas automáticas y atención al paciente",
    color: "from-pink-500/15 to-purple-500/10",
    border: "border-pink-500/15",
    icon: "✨",
    path: "/ia-clinicas-esteticas",
  },
  {
    name: "Despacho de Abogados",
    desc: "Cualificación de clientes y consultas legales",
    color: "from-amber-500/15 to-orange-500/10",
    border: "border-amber-500/15",
    icon: "⚖️",
    path: "/ia-despachos-abogados",
  },
  {
    name: "Consultoría",
    desc: "Captación, reuniones y seguimiento automatizado",
    color: "from-emerald-500/15 to-teal-500/10",
    border: "border-emerald-500/15",
    icon: "📊",
    path: null,
  },
  {
    name: "Empresa de Servicios",
    desc: "Atención multicanal y gestión de leads",
    color: "from-white/[0.04] to-white/[0.01]",
    border: "border-white/8",
    icon: "🏢",
    path: null,
  },
];

export default function WebShowcase() {
  return (
    <section id="webs" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Diseño Web</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black mt-4 tracking-tight">
            Tu nueva web profesional
            <br />
            <span className="text-primary">lista en días.</span>
          </h2>
          <p className="text-base text-white/35 max-w-xl mx-auto mt-5">
            Creamos páginas web modernas, optimizadas y diseñadas para generar confianza y captar clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative p-7 rounded-3xl border ${ex.border} bg-gradient-to-br ${ex.color} overflow-hidden group hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
              onClick={() => ex.path && (window.location.href = ex.path)}
            >
              <div className="text-4xl mb-4">{ex.icon}</div>
              <h3 className="text-base font-display font-bold text-white mb-2">{ex.name}</h3>
              <p className="text-xs text-white/35 leading-relaxed mb-4">{ex.desc}</p>
              {ex.path && (
                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver ejemplo <ExternalLink className="w-3.5 h-3.5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a href="#contacto">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8 h-14 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-200">
              Quiero Mi Nueva Web
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}