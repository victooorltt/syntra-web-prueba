import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { fadeUp, fadeUpItem, fade } from "@/lib/animations";

const planes = [
  {
    nombre: "START",
    precio: "495€",
    descripcion: "Ideal para empresas que necesitan una web profesional y rápida.",
    features: [
      "Diseño web premium",
      "Hasta 5 páginas",
      "Responsive",
      "SEO básico",
      "Formulario de contacto",
      "Entrega rápida",
    ],
    popular: false,
    cta: "Solicitar Propuesta",
  },
  {
    nombre: "BUSINESS",
    precio: "995€",
    descripcion: "La opción más contratada. Más páginas, SEO y automatizaciones.",
    features: [
      "Hasta 10 páginas",
      "Diseño premium avanzado",
      "SEO optimizado",
      "Integración WhatsApp",
      "Automatizaciones básicas",
      "Formularios avanzados",
      "Mayor personalización",
    ],
    popular: true,
    cta: "Solicitar Propuesta",
  },
  {
    nombre: "GROWTH",
    precio: "1.995€",
    descripcion: "Sistema completo con IA, automatización y captación de leads.",
    features: [
      "Web premium",
      "Automatización avanzada",
      "CRM",
      "IA integrada",
      "Captación automática",
      "Seguimiento de leads",
      "Escalabilidad empresarial",
      "Consultoría estratégica",
    ],
    popular: false,
    cta: "Solicitar Propuesta",
  },
];

export default function PricingSection() {
  return (
    <section id="precios" className="relative py-14 sm:py-20 overflow-hidden" style={{ background: "#0A0A0A" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #1C1C1C 30%, #1C1C1C 70%, transparent)" }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div {...fadeUp} className="!mb-14 text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-6" style={{ color: "#5A5A5A" }}>
            Planes
          </p>
          <h2
            className="font-display font-black tracking-tight leading-[0.92] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F5F5F5" }}
          >
            PLANES DISEÑADOS
            <br />
            <span style={{ color: "#3A3A3A" }}>PARA CRECER.</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-md mx-auto" style={{ color: "#7A7A7A" }}>
            Empieza con una web profesional o crea un sistema completo para tu empresa.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {planes.map((plan, i) => (
            <motion.div
              key={i}
              {...fadeUpItem(i, 0.14)}
              className="relative p-10 flex flex-col transition-all duration-500"
              style={{
                background: plan.popular ? "#0E0E0E" : "#0C0C0C",
                border: plan.popular ? "1px solid #2A2A2A" : "1px solid #141414",
                borderRadius: "8px",
                boxShadow: plan.popular ? "0 20px 60px rgba(0,0,0,0.4)" : "none",
              }}
              onMouseEnter={e => { if (!plan.popular) { e.currentTarget.style.borderColor = "#222"; e.currentTarget.style.background = "#0E0E0E"; } }}
              onMouseLeave={e => { if (!plan.popular) { e.currentTarget.style.borderColor = "#141414"; e.currentTarget.style.background = "#0C0C0C"; } }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5" style={{ background: "#F5F5F5", borderRadius: "3px" }}>
                    <Star className="w-3 h-3 fill-current" style={{ color: "#0A0A0A" }} />
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#0A0A0A" }}>Más Popular</span>
                  </div>
                </div>
              )}

              {/* Plan name */}
              <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: "#5A5A5A" }}>{plan.nombre}</p>
              <p className="text-sm mb-6" style={{ color: "#6A6A6A" }}>{plan.descripcion}</p>

              {/* Price */}
              <div className="mb-8 pb-8" style={{ borderBottom: "1px solid #1A1A1A" }}>
                <p className="font-display font-black" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "#F5F5F5", lineHeight: 1 }}>{plan.precio}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(245,245,245,0.06)", borderRadius: "4px" }}>
                      <Check className="w-3 h-3" style={{ color: "#BDBDBD" }} />
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: "#9A9A9A" }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#contacto" className="block">
                <button
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-3"
                  style={{
                    background: plan.popular ? "#F5F5F5" : "transparent",
                    color: plan.popular ? "#0A0A0A" : "#BDBDBD",
                    border: plan.popular ? "none" : "1px solid #2A2A2A",
                    borderRadius: "4px",
                  }}
                  onMouseEnter={e => { if (!plan.popular) { e.currentTarget.style.borderColor = "#F5F5F5"; e.currentTarget.style.color = "#F5F5F5"; } }}
                  onMouseLeave={e => { if (!plan.popular) { e.currentTarget.style.borderColor = "#2A2A2A"; e.currentTarget.style.color = "#BDBDBD"; } }}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom note */}
        <motion.div
          {...fade}
          transition={{ duration: 1.0, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm" style={{ color: "#6A6A6A" }}>
            ¿Necesitas algo más avanzado?{" "}
            <a href="#contacto" className="font-medium transition-colors duration-300" style={{ color: "#BDBDBD" }}
              onMouseEnter={e => e.currentTarget.style.color = "#F5F5F5"}
              onMouseLeave={e => e.currentTarget.style.color = "#BDBDBD"}>
              Diseñamos soluciones personalizadas para empresas con necesidades específicas.
            </a>
          </p>
        </motion.div>

        {/* Discrete CTA */}
        <motion.div
          {...fade}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderTop: "1px solid #141414", paddingTop: "1.5rem" }}
        >
          <p className="text-sm" style={{ color: "#6A6A6A" }}>¿Quieres algo similar para tu empresa?</p>
          <a href="#contacto">
            <button className="flex items-center gap-3 px-7 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:gap-4 shrink-0"
              style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>
              Solicitar Propuesta <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}