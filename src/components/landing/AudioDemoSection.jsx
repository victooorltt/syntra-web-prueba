import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AudioDemoSection() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const pct = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(isNaN(pct) ? 0 : pct);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const handleEnded = () => setPlaying(false);

  const handleSeek = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = x / rect.width;
    audioRef.current.currentTime = ratio * duration;
  };

  const formatTime = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const currentTime = audioRef.current ? audioRef.current.currentTime : 0;

  return (
    <section id="demo" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8 mb-6">
            <Volume2 className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Escucha a Syntra en acción</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-tight mb-4">
            Así responde nuestro
            <br />
            <span className="text-primary">agente de voz.</span>
          </h2>
          <p className="text-base text-white/45 max-w-xl mx-auto leading-relaxed">
            Escucha cómo Syntra atiende llamadas, responde preguntas, cualifica clientes y agenda visitas de forma completamente automática.
          </p>
        </motion.div>

        {/* Audio Player */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative p-6 sm:p-10 rounded-3xl border border-white/8 bg-white/[0.02] mb-8"
        >
          {/* Waveform decoration */}
          <div className="flex items-center justify-center gap-[3px] mb-8 opacity-40">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-150 ${
                  progress > (i / 40) * 100 ? "bg-primary" : "bg-white/20"
                }`}
                style={{
                  width: "3px",
                  height: `${8 + Math.sin(i * 0.6) * 10 + Math.sin(i * 1.2) * 6}px`,
                }}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div
            className="w-full h-1.5 bg-white/10 rounded-full mb-4 cursor-pointer group"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-primary rounded-full relative transition-all"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-white/30 mb-6">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 transition-all hover:scale-105"
            >
              {playing
                ? <Pause className="w-6 h-6 text-white fill-current" />
                : <Play className="w-6 h-6 text-white fill-current ml-1" />
              }
            </button>
          </div>

          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleEnded}
            // Placeholder — replace src with real audio file when available
            src=""
          />

          {/* No audio fallback */}
          <p className="text-xs text-white/20 mt-6">Llamada real con agente de voz Syntra · Duración: aprox. 2 min</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="#contacto">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/20">
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}