import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "inmobiliaria",
    category: "Inmobiliaria Premium",
    subtitle: "Propiedades de lujo · Solicitud de visita · Captación de propietarios",
    bg: "#0d0f14",
    accent: "#C9B99A",
    tag: "DISEÑO EDITORIAL",
    demoUrl: "/ia-inmobiliarias",
    lines: ["Propiedades Destacadas", "Solicitar Visita", "Precio · Ubicación · Metros"],
  },
  {
    id: "clinica",
    category: "Clínica Estética",
    subtitle: "Tratamientos · Reserva de cita · Antes y después",
    bg: "#0f0d0d",
    accent: "#C4A882",
    tag: "CONVERSIÓN OPTIMIZADA",
    demoUrl: "/ia-clinicas-esteticas",
    lines: ["Medicina Estética Facial", "Reservar Cita →", "Opiniones · Equipo · Resultados"],
  },
  {
    id: "abogados",
    category: "Despacho de Abogados",
    subtitle: "Autoridad corporativa · Consulta gratuita · Captación de leads",
    bg: "#09090c",
    accent: "#BDBDBD",
    tag: "DISEÑO CORPORATIVO",
    demoUrl: "/ia-despachos-abogados",
    lines: ["Áreas de Práctica", "Primera Consulta Gratuita", "28 años · 1.200 casos · 98% éxito"],
  },
  {
    id: "fisio",
    category: "Centro de Fisioterapia",
    subtitle: "Reserva online · Casos de éxito · Captación de pacientes",
    bg: "#090c0a",
    accent: "#8AB08A",
    tag: "CAPTACIÓN DE PACIENTES",
    demoUrl: "/ia-fisioterapia",
    lines: ["Fisioterapia Deportiva", "Primera Visita Gratuita", "Antes / Después · Equipo"],
  },
  {
    id: "restaurante",
    category: "Restaurante Premium",
    subtitle: "Carta · Reservas online · Eventos privados",
    bg: "#080806",
    accent: "#D4A843",
    tag: "EXPERIENCIA VISUAL",
    demoUrl: "/restaurante-premium",
    lines: ["Tartar de atún rojo · 24€", "Reservar Mesa →", "Carta · Eventos · Historia"],
  },
  {
    id: "corporativa",
    category: "Empresa Corporativa",
    subtitle: "Imagen premium · Casos de éxito · Captación de leads B2B",
    bg: "#08080a",
    accent: "#FFFFFF",
    tag: "B2B PREMIUM",
    demoUrl: "/empresa-corporativa",
    lines: ["Consultoría Estratégica", "Solicitar Reunión →", "+52% ingresos · 3 sectores"],
  },
];

function DemoMockup({ project }) {
  return (
    <div style={{ background: project.bg, height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Nav skeleton */}
      <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="h-2 w-20 rounded-sm" style={{ background: "rgba(255,255,255,0.15)" }} />
        <div className="flex gap-3">
          {[1, 2, 3].map(j => <div key={j} className="h-1.5 w-7 rounded-sm" style={{ background: "rgba(255,255,255,0.05)" }} />)}
        </div>
        <div className="h-5 w-16 rounded-sm" style={{ background: project.accent + "25" }} />
      </div>
      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        {/* Headline block */}
        <div>
          <div className="h-1.5 w-16 rounded-sm mb-3" style={{ background: project.accent + "50" }} />
          <div className="h-4 w-4/5 rounded-sm mb-2" style={{ background: "rgba(255,255,255,0.14)" }} />
          <div className="h-3 w-3/5 rounded-sm mb-1" style={{ background: "rgba(255,255,255,0.07)" }} />
          <div className="h-3 w-2/5 rounded-sm mb-5" style={{ background: "rgba(255,255,255,0.04)" }} />
          <div className="h-7 w-28 rounded-sm" style={{ background: project.accent + "20", border: `1px solid ${project.accent}30` }} />
        </div>
        {/* Content lines */}
        <div className="space-y-2">
          {project.lines.map((line, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full shrink-0" style={{ background: project.accent + "60" }} />
              <div className="h-2 rounded-sm" style={{ background: "rgba(255,255,255,0.06)", width: `${50 + i * 15}%` }} />
            </div>
          ))}
        </div>
        {/* Bottom grid */}
        <div className="grid grid-cols-3 gap-1.5">
          {[1, 2, 3].map(j => (
            <div key={j} className="h-8 rounded-sm" style={{ background: `rgba(255,255,255,0.0${j + 1})`, border: "1px solid rgba(255,255,255,0.03)" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative py-32 sm:py-48 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #1C1C1C, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-6" style={{ color: "#4A4A4A" }}>
            Algunos de nuestros diseños
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2
              className="font-display font-black tracking-tight leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F5F5F5" }}
            >
              DISEÑOS QUE
              <br />
              <span style={{ color: "#4A4A4A" }}>GENERAN CLIENTES.</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-xs sm:text-right" style={{ color: "#4A4A4A" }}>
              Cada negocio es diferente.<br />Por eso diseñamos experiencias digitales adaptadas a cada sector.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#1C1C1C", borderRadius: "4px", overflow: "hidden" }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group"
              style={{ background: "#0A0A0A" }}
            >
              {/* Mockup screen */}
              <div style={{ aspectRatio: "4/3", position: "relative", overflow: "hidden" }}>
                <DemoMockup project={p} />

                {/* Tag */}
                <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(10,10,10,0.85)", backdropFilter: "blur(8px)", padding: "3px 8px", borderRadius: "2px", border: "1px solid #1C1C1C" }}>
                  <span style={{ fontSize: "9px", letterSpacing: "0.18em", color: p.accent + "CC" }}>{p.tag}</span>
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(0,0,0,0.7)" }}
                >
                  <Link to={p.demoUrl}>
                    <div
                      className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:gap-3"
                      style={{
                        borderRadius: "3px",
                        background: "#F5F5F5",
                        color: "#0A0A0A",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Ver Demo <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Label */}
              <div className="flex items-center justify-between px-5 py-4" style={{ borderTop: "1px solid #1C1C1C" }}>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#BDBDBD" }}>{p.category}</p>
                  <p className="text-xs mt-0.5 leading-snug" style={{ color: "#4A4A4A" }}>{p.subtitle}</p>
                </div>
                <Link to={p.demoUrl}>
                  <div className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 opacity-40 group-hover:opacity-100"
                    style={{ border: "1px solid #4A4A4A" }}>
                    <ArrowRight className="w-3.5 h-3.5" style={{ color: "#BDBDBD" }} />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-sm" style={{ color: "#4A4A4A" }}>
            ¿Tu sector no aparece aquí? Diseñamos para cualquier tipo de negocio.
          </p>
          <a href="#contacto">
            <button
              className="flex items-center gap-3 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:gap-4"
              style={{
                background: "#F5F5F5",
                color: "#0A0A0A",
                borderRadius: "4px",
                letterSpacing: "0.12em",
              }}
            >
              Quiero una web así
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}