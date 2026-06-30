import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function calcLoss(leads, responseHours) {
  // Industry data: response time >5min = 80% less likely to qualify
  // response >1h = losing ~40-60% of leads
  // response >4h = losing ~60-75%
  let lossRate;
  if (responseHours <= 0.08) lossRate = 0.05; // <5min
  else if (responseHours <= 1) lossRate = 0.35;
  else if (responseHours <= 4) lossRate = 0.55;
  else if (responseHours <= 24) lossRate = 0.68;
  else lossRate = 0.80;

  const min = Math.floor(leads * lossRate * 0.7);
  const max = Math.floor(leads * lossRate);
  return { min, max };
}

const responseOptions = [
  { label: "Menos de 5 minutos", value: 0.07 },
  { label: "Entre 5 y 30 minutos", value: 0.3 },
  { label: "Entre 30 min y 1 hora", value: 0.75 },
  { label: "Entre 1 y 4 horas", value: 2.5 },
  { label: "Entre 4 y 24 horas", value: 12 },
  { label: "Más de 24 horas", value: 30 },
];

export default function LeadsCalculator() {
  const [leads, setLeads] = useState(50);
  const [responseHours, setResponseHours] = useState(2.5);

  const { min, max } = calcLoss(leads, responseHours);
  const hasLoss = max > 0;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[300px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Calculadora</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black mt-4 tracking-tight">
            ¿Cuántas oportunidades estás
            <span className="text-primary"> perdiendo cada mes?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-7 sm:p-10 rounded-3xl border border-white/8 bg-white/[0.02] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40" />

          <div className="space-y-8">
            {/* Leads slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-white/60">Leads mensuales</label>
                <span className="text-lg font-display font-black text-primary">{leads}</span>
              </div>
              <input
                type="range"
                min={5}
                max={500}
                step={5}
                value={leads}
                onChange={e => setLeads(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, hsl(213 94% 55%) 0%, hsl(213 94% 55%) ${(leads - 5) / 4.95}%, rgba(255,255,255,0.08) ${(leads - 5) / 4.95}%, rgba(255,255,255,0.08) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-white/20 mt-1.5">
                <span>5</span><span>500</span>
              </div>
            </div>

            {/* Response time select */}
            <div>
              <label className="text-sm font-semibold text-white/60 block mb-3">Tiempo medio de respuesta</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {responseOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setResponseHours(opt.value)}
                    className={`px-3 py-2.5 rounded-xl border text-xs font-medium transition-all duration-200 ${
                      responseHours === opt.value
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-white/8 bg-white/[0.02] text-white/35 hover:border-white/15 hover:text-white/55"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Result */}
            <motion.div
              key={`${leads}-${responseHours}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl border border-primary/15 bg-primary/[0.04] text-center"
            >
              {hasLoss && max > 1 ? (
                <>
                  <p className="text-xs text-white/35 mb-2 uppercase tracking-widest">Estimación mensual</p>
                  <p className="text-2xl sm:text-3xl font-display font-black text-white mb-1">
                    Podrías estar perdiendo entre{" "}
                    <span className="text-primary">{min} y {max}</span>{" "}
                    oportunidades al mes.
                  </p>
                  <p className="text-xs text-white/30 mt-2">Basado en tasas de conversión del sector inmobiliario</p>
                </>
              ) : (
                <>
                  <p className="text-sm text-white/50 mb-1">Tu tiempo de respuesta es excelente.</p>
                  <p className="text-xs text-white/25">Aun así, podemos ayudarte a escalar sin esfuerzo adicional.</p>
                </>
              )}
            </motion.div>

            {/* CTA */}
            <div className="text-center">
              <a href="#contacto">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8 h-13 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                >
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}