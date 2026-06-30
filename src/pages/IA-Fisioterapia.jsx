import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { name: "Fisioterapia Deportiva", desc: "Recuperación de lesiones musculares y articulares. Protocolos personalizados para deportistas." },
  { name: "Fisioterapia Manual", desc: "Manipulaciones, movilizaciones y técnicas miofasciales. Resultados desde la primera sesión." },
  { name: "Pilates Terapéutico", desc: "Ejercicios de control motor y estabilización. Ideal para dolor lumbar y cervical crónico." },
  { name: "Neurorehabilitación", desc: "Tratamiento especializado post-ictus, esclerosis múltiple y patologías neurológicas." },
  { name: "Suelo Pélvico", desc: "Tratamiento de disfunciones del suelo pélvico en hombres y mujeres. Total privacidad." },
  { name: "Osteopatía", desc: "Tratamiento global del cuerpo. Corrección de disfunciones estructurales, viscerales y craneales." },
];

const team = [
  { name: "Álvaro Sanz", role: "Director · Fisioterapeuta Deportivo" },
  { name: "Lucía Hernández", role: "Fisioterapeuta · Suelo Pélvico" },
  { name: "Pablo Moreno", role: "Osteópata · Neurorehabilitación" },
];

const cases = [
  { before: "Dolor lumbar crónico", after: "Vida activa sin dolor", time: "8 sesiones" },
  { before: "Rotura ligamento cruzado", after: "Vuelta al deporte", time: "12 semanas" },
  { before: "Migraña tensional", after: "Reducción del 80%", time: "6 sesiones" },
];

export default function IAFisioterapia() {
  const [citaOpen, setCitaOpen] = useState(false);
  const [form, setForm] = useState({ nombre: "", telefono: "", servicio: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ background: "#090C0A", color: "#F5F5F5", minHeight: "100vh", fontFamily: "var(--font-body)" }}>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(9,12,10,0.93)", backdropFilter: "blur(24px)", borderBottom: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" style={{ color: "#4A4A4A" }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>Syntra Labs</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {["Servicios", "Equipo", "Casos", "Contacto"].map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-xs tracking-widest uppercase transition-colors duration-300"
                style={{ color: "#4A4A4A" }}
                onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"}
                onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>{n}</a>
            ))}
          </div>
          <button onClick={() => setCitaOpen(true)}
            className="text-xs tracking-widest uppercase px-5 py-2 transition-all duration-300"
            style={{ border: "1px solid #1C1C1C", borderRadius: "3px", color: "#BDBDBD" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#F5F5F5"; e.currentTarget.style.color = "#0A0A0A"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#BDBDBD"; }}>
            Reservar Cita
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "flex-end", paddingBottom: "80px", paddingTop: "100px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "#090C0A" }} />
        <div style={{ position: "absolute", top: "20%", right: "15%", width: "400px", height: "400px", background: "rgba(120,180,120,0.04)", borderRadius: "50%", filter: "blur(80px)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs tracking-[0.35em] uppercase mb-8" style={{ color: "#8AB08A" }}>Centro de Fisioterapia Avanzada</p>
            <h1 className="font-display font-black leading-[0.9] tracking-tight mb-8" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#F5F5F5" }}>
              MUÉVETE<br />SIN DOLOR.<br /><span style={{ color: "#4A4A4A" }}>DE NUEVO.</span>
            </h1>
            <p className="text-base leading-relaxed mb-10 max-w-md" style={{ color: "#4A4A4A" }}>
              Fisioterapia especializada con resultados medibles. Tratamos la causa, no el síntoma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setCitaOpen(true)}
                className="flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase"
                style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>
                Reservar Primera Visita <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-300"
                style={{ border: "1px solid #1C1C1C", color: "#4A4A4A", borderRadius: "3px" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#4A4A4A"; e.currentTarget.style.color = "#BDBDBD"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1C1C1C"; e.currentTarget.style.color = "#4A4A4A"; }}>
                Ver Tratamientos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ borderTop: "1px solid #1C1C1C", borderBottom: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-wrap gap-8">
          {["+2.000 pacientes tratados", "Primera visita gratuita", "Colegiados y especializados", "Reserva online en 60 segundos"].map((v, i) => (
            <div key={i} className="flex items-center gap-3">
              <Check className="w-4 h-4 shrink-0" style={{ color: "#8AB08A" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#4A4A4A" }}>Especialidades</p>
          <h2 className="font-display font-black leading-[0.95] mb-20" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>
            Tratamos lo que importa.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#1C1C1C", borderRadius: "4px", overflow: "hidden" }}>
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="p-8 group cursor-pointer" style={{ background: "#090C0A" }}
                onClick={() => setCitaOpen(true)}>
                <p className="font-display font-bold text-xl mb-3 transition-colors duration-300 group-hover:text-[#8AB08A]" style={{ color: "#F5F5F5" }}>{s.name}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="casos" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#4A4A4A" }}>Casos de Éxito</p>
          <h2 className="font-display font-black leading-[0.95] mb-20" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>
            Resultados reales.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background: "#1C1C1C" }}>
            {cases.map((c, i) => (
              <div key={i} className="p-10" style={{ background: "#090C0A" }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 p-4" style={{ border: "1px solid #1C1C1C", borderRadius: "3px" }}>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#4A4A4A" }}>Antes</p>
                    <p className="text-sm font-semibold" style={{ color: "#BDBDBD" }}>{c.before}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 shrink-0" style={{ color: "#4A4A4A" }} />
                  <div className="flex-1 p-4" style={{ border: "1px solid rgba(138,176,138,0.2)", borderRadius: "3px", background: "rgba(138,176,138,0.04)" }}>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#8AB08A" }}>Después</p>
                    <p className="text-sm font-semibold" style={{ color: "#F5F5F5" }}>{c.after}</p>
                  </div>
                </div>
                <p className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>{c.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipo" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#4A4A4A" }}>El Equipo</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background: "#1C1C1C" }}>
            {team.map((m, i) => (
              <div key={i} className="p-8 group" style={{ background: "#090C0A" }}>
                <div className="w-14 h-14 rounded-full mb-4" style={{ background: "rgba(138,176,138,0.08)", border: "1px solid rgba(138,176,138,0.15)" }} />
                <p className="font-display font-bold text-lg mb-1 transition-colors duration-300 group-hover:text-[#8AB08A]" style={{ color: "#F5F5F5" }}>{m.name}</p>
                <p className="text-xs" style={{ color: "#4A4A4A" }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <h2 className="font-display font-black leading-[0.9] tracking-tight mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#F5F5F5" }}>
            ¿Quieres una web<br /><span style={{ color: "#4A4A4A" }}>como esta?</span>
          </h2>
          <Link to="/#agendar">
            <button className="flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase"
              style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>
              Hablar con Syntra Labs <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <p className="mt-6 text-xs tracking-widest uppercase" style={{ color: "#2A2A2A" }}>DEMO CREADA POR SYNTRA LABS · ESTUDIO DIGITAL PREMIUM</p>
        </div>
      </section>

      {/* Modal */}
      {citaOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(24px)" }}
          onClick={() => setCitaOpen(false)}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            onClick={e => e.stopPropagation()}
            className="w-full max-w-md p-10"
            style={{ background: "#0D0D0D", border: "1px solid #1C1C1C", borderRadius: "4px" }}>
            {sent ? (
              <div className="text-center py-8">
                <p className="font-display font-black text-2xl mb-3" style={{ color: "#F5F5F5" }}>Cita solicitada.</p>
                <p className="text-sm" style={{ color: "#4A4A4A" }}>Te contactamos en menos de 2h para confirmar.</p>
                <button onClick={() => { setCitaOpen(false); setSent(false); }} className="mt-8 text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>Cerrar</button>
              </div>
            ) : (
              <>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#4A4A4A" }}>Primera Visita Gratuita</p>
                <h3 className="font-display font-black text-2xl mb-8" style={{ color: "#F5F5F5" }}>Reserva tu cita.</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[{ k: "nombre", l: "Nombre *", p: "Tu nombre" }, { k: "telefono", l: "Teléfono *", p: "+34 600 000 000" },
                    { k: "servicio", l: "Especialidad", p: "¿Qué te preocupa?" }, { k: "mensaje", l: "Descripción breve", p: "Cuéntanos tu lesión o dolor" }
                  ].map(({ k, l, p }) => (
                    <div key={k}>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#4A4A4A" }}>{l}</label>
                      <input value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })}
                        placeholder={p} required={k === "nombre" || k === "telefono"}
                        style={{ background: "transparent", border: "none", borderBottom: "1px solid #1C1C1C", width: "100%", color: "#F5F5F5", fontSize: "14px", padding: "10px 0", outline: "none", fontFamily: "inherit" }} />
                    </div>
                  ))}
                  <button type="submit" className="w-full py-4 text-sm font-semibold tracking-widest uppercase"
                    style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>
                    Solicitar Cita Gratuita
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}