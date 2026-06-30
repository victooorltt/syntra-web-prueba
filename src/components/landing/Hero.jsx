import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Check, Zap, MessageCircle } from "lucide-react";
import { ease } from "@/lib/animations";

export default function Hero() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left column — headline + CTAs + trust */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.6, ease }}
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-8" style={{ color: "#5A5A5A" }}>
              Syntra Labs · Diseño Web Premium & IA
            </p>

            <h1
              className="font-display font-black leading-[0.92] tracking-tight mb-8"
              style={{
                fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
                color: "#F5F5F5",
              }}
            >
              SISTEMAS DIGITALES
              <br />
              QUE HACEN CRECER
              <br />
              <span style={{ color: "#4A4A4A" }}>TU NEGOCIO.</span>
            </h1>

            <p
              className="text-base sm:text-lg font-light leading-relaxed max-w-md mb-10"
              style={{ color: "#8A8A8A" }}
            >
              Diseño web premium, automatización e inteligencia artificial para empresas que quieren más clientes, más tiempo y más ingresos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-12">
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
                  Solicitar Propuesta
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>
              <a href="#portfolio">
                <button
                  className="flex items-center gap-3 px-8 py-4 font-medium text-sm tracking-widest uppercase transition-all duration-300"
                  style={{
                    background: "transparent",
                    color: "#4A4A4A",
                    border: "1px solid #1C1C1C",
                    borderRadius: "4px",
                    letterSpacing: "0.12em",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#4A4A4A"; e.currentTarget.style.color = "#BDBDBD"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#1C1C1C"; e.currentTarget.style.color = "#4A4A4A"; }}
                >
                  Ver Trabajos
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5" style={{ color: "#4A4A4A" }} />
                <span className="text-xs tracking-widest uppercase" style={{ color: "#5A5A5A" }}>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" style={{ color: "#4A4A4A" }} />
                <span className="text-xs tracking-widest uppercase" style={{ color: "#5A5A5A" }}>Respuesta &lt; 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5" style={{ color: "#4A4A4A" }} />
                <span className="text-xs tracking-widest uppercase" style={{ color: "#5A5A5A" }}>Consulta gratuita</span>
              </div>
            </div>
          </motion.div>

          {/* Right column — video portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.4, ease }}
            className="relative w-full"
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                borderRadius: "8px",
                border: "1px solid #1C1C1C",
                aspectRatio: "4/5",
                background: "#0A0A0A",
              }}
            >
              <video
                ref={videoRef}
                src="https://media.base44.com/videos/public/6a22ad22627c0746f590d658/135cc00e7_Video_de_Avatar_IV_with_captions.mp4"
                playsInline
                controls={playing}
                className="w-full h-full object-cover"
              />
              {!playing && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center group"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)"
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center"
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      background: "rgba(245,245,245,0.08)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(245,245,245,0.15)",
                    }}
                  >
                    <Play className="w-6 h-6 ml-0.5 fill-current" style={{ color: "#F5F5F5" }} />
                  </motion.div>

                  {/* Caption */}
                  <div className="absolute bottom-6 left-6 right-6 text-left">
                    <p className="font-display font-bold text-base sm:text-lg leading-tight mb-1" style={{ color: "#F5F5F5" }}>
                      Conoce Syntra Labs
                    </p>
                    <p className="text-xs tracking-widest uppercase" style={{ color: "#6A6A6A" }}>
                      Ver video · 1:35
                    </p>
                  </div>
                </button>
              )}
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0A0A0A, transparent)" }}
      />
    </section>
  );
}