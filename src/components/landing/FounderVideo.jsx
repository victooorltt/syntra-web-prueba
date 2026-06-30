import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

export default function FounderVideo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5 z-10 pointer-events-none" />
              <video
                ref={videoRef}
                src="https://media.base44.com/videos/public/6a22ad22627c0746f590d658/763cbf063_Video_SYNTRA_LABS_YO_2_.mp4"
                playsInline
                controls={playing}
                className="w-full block rounded-3xl"
              />
              {!playing && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl group z-20"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.25) 100%)" }}
                >
                  {/* Thumbnail overlay content */}
                  <div className="absolute top-4 left-4 opacity-60">
                    <img
                      src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/6b7f640a4_423A3B0A-6F13-442D-8EC4-138FD084C212.png"
                      alt="Syntra Labs"
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                  {/* Play button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/60 border-2 border-white/20 mb-6"
                  >
                    <Play className="w-8 h-8 text-white ml-1 fill-current" />
                  </motion.div>
                  {/* Thumbnail text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                    <p className="text-white font-display font-black text-base sm:text-lg leading-tight mb-1 drop-shadow-lg">
                      Cómo las inmobiliarias pierden propietarios cada día sin darse cuenta
                    </p>
                    <p className="text-white/55 text-xs font-medium">
                      ▶ Ver presentación · Descubre cómo evitarlo con IA y automatización
                    </p>
                  </div>
                </button>
              )}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">El fundador</span>
            <h2 className="text-3xl sm:text-5xl font-display font-black mt-2 mb-2 tracking-tight leading-tight">
              Conoce a
              <br />
              <span className="text-primary">Jorge Blanco.</span>
            </h2>
            <p className="text-sm text-white/30 mb-6">¿Por qué creamos Syntra?</p>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Escucha directamente a Jorge Blanco explicar cómo ayudamos a inmobiliarias a captar más propietarios, realizar más visitas y cerrar más operaciones mediante inteligencia artificial.
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-base text-white/50 leading-relaxed">
                Durante años he trabajado en sectores donde cada oportunidad cuenta.
              </p>
              <p className="text-base text-white/50 leading-relaxed">
                Aprendí algo muy sencillo:
              </p>
              <p className="text-lg font-display font-bold text-white/80">
                No gana quien genera más contactos.
                <br />
                <span className="text-primary">Gana quien responde primero.</span>
              </p>
              <p className="text-base text-white/45 leading-relaxed">
                Por eso creamos Syntra Labs. Un sistema diseñado para ayudar a inmobiliarias a captar más propietarios, generar más visitas y cerrar más operaciones mediante inteligencia artificial y automatización.
              </p>
            </div>

            <a href="#contacto">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/25 hover:shadow-primary/45 hover:scale-[1.02] transition-all duration-200"
              >
                Reservar una Consultoría Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}