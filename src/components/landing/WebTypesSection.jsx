import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const types = [
  {
    tag: "Presencia Digital",
    title: "Web Corporativa",
    price: "Desde 495€",
    desc: "Imagen profesional que genera confianza y posiciona tu empresa online.",
    features: ["Varias páginas", "Imagen profesional", "SEO básico incluido", "Presencia online sólida", "Blog integrado", "Formulario de contacto"],
    featured: false,
  },
  {
    tag: "Máxima Conversión",
    title: "Landing Page",
    price: "Desde 395€",
    desc: "Una sola página diseñada con un único objetivo: convertir visitantes en clientes.",
    features: ["Una sola página", "Captación de leads", "CTA optimizados", "Integración WhatsApp", "Alta velocidad", "Entrega en 72h"],
    featured: true,
  },
  {
    tag: "Sistema Completo",
    title: "Funnel de Ventas",
    price: "Desde 795€",
    desc: "Un sistema automatizado que capta, cualifica y convierte leads en clientes de forma continua.",
    features: ["Landing + Formularios", "WhatsApp automatizado", "Seguimiento de leads", "CRM integrado", "Automatizaciones", "Panel de resultados"],
    featured: false,
  },
];

export default function WebTypesSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section id="tipos-web" className="relative py-28 sm:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-xs font-medium text-white/25 tracking-[0.2em] uppercase mb-5">Elige tu formato</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tight leading-[1.0] max-w-md">
              Webs, Landings
              <br />
              <span className="text-primary">y Funnels.</span>
            </h2>
            <p className="text-sm text-white/30 max-w-xs leading-relaxed sm:text-right">
              Cada negocio es diferente. Elige el formato que mejor se adapta a tus objetivos.
            </p>
          </div>
        </motion.div>

        {/* Video showcase */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="absolute left-1/2 -translate-x-1/2 w-2/3 h-20 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center gap-2 px-5 py-3.5 bg-white/[0.03] border-b border-white/[0.05]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
              </div>
              <div className="flex-1 mx-4 bg-white/[0.04] rounded-md px-3 py-1 text-center">
                <span className="text-[11px] text-white/20 font-mono tracking-wide">syntralabs.es — Diseño Web Premium</span>
              </div>
            </div>
            <div className="relative aspect-video bg-black">
              <video
                ref={videoRef}
                src="https://media.base44.com/videos/public/6a22ad22627c0746f590d658/e4388d89a_VIDEOJORGE2.mp4"
                playsInline
                controls={playing}
                className="w-full h-full object-cover"
              />
              {!playing && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center group"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.05) 100%)" }}
                >
                  <div className="absolute bottom-7 left-7 right-7 text-left">
                    <p className="text-white font-display font-bold text-base sm:text-lg leading-tight mb-1.5">
                      Así creamos páginas web que generan clientes
                    </p>
                    <p className="text-white/40 text-xs tracking-wide">Creación de Páginas Web · Syntra Labs</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    <Play className="w-6 h-6 text-white ml-0.5 fill-current" />
                  </motion.div>
                </button>
              )}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] rounded-3xl overflow-hidden">
          {types.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-9 flex flex-col ${t.featured ? "bg-white/[0.04]" : "bg-background"}`}
            >
              {t.featured && (
                <div className="absolute top-6 right-6 text-[10px] font-bold text-primary bg-primary/10 border border-primary/15 rounded-full px-2.5 py-1 tracking-wide uppercase">
                  Popular
                </div>
              )}

              <div className="mb-8 flex-1">
                <p className="text-[10px] font-medium text-white/25 tracking-[0.2em] uppercase mb-4">{t.tag}</p>
                <h3 className="text-2xl font-display font-black text-white mb-2">{t.title}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{t.price}</p>
                <p className="text-sm text-white/35 leading-relaxed mb-8">{t.desc}</p>

                <div className="space-y-3">
                  {t.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-px h-3 bg-primary/30 shrink-0" />
                      <span className="text-xs text-white/40">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#contacto">
                <Button
                  size="sm"
                  className={`w-full font-medium rounded-xl h-11 text-sm transition-all duration-300 ${
                    t.featured
                      ? "bg-primary text-white hover:bg-primary/85 shadow-md shadow-primary/20"
                      : "bg-transparent border border-white/10 text-white/60 hover:border-primary/30 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}