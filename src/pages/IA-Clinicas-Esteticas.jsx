import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Star, Check, Clock, Award, Heart, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const treatments = [
  { name: "Medicina Estética Facial", desc: "Botox, ácido hialurónico, bioestimulación. Resultados naturales y seguros.", price: "Desde 250€", tag: "Más solicitado", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/6971419fe_clinica_hero.jpg" },
  { name: "Láser y Depilación", desc: "Tecnología de última generación. Piel perfecta de forma permanente.", price: "Desde 80€", tag: "", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/affc3fed1_clinica_laser.jpg" },
  { name: "Tratamientos Corporales", desc: "Criolipólisis, radiofrecuencia, drenaje linfático. Tu cuerpo en forma.", price: "Desde 120€", tag: "", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/89cf3f0df_clinica_corporal.jpg" },
  { name: "Peeling y Rejuvenecimiento", desc: "Peeling químico, dermapen, exosomas. Renueva tu piel.", price: "Desde 150€", tag: "Nuevo", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/382d903ef_clinica_peeling.jpg" },
];

const team = [
  { name: "Dra. Isabel Martínez", role: "Directora Médica · 12 años", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/f3b12ffa7_clinica_team1.jpg" },
  { name: "Dra. Ana Gómez", role: "Especialista Facial", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/0007fdf71_clinica_team2.jpg" },
  { name: "Dr. Carlos Ruiz", role: "Cirugía Estética", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/0edc894a6_clinica_team3.jpg" },
];

const gallery = [
  "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/6971419fe_clinica_hero.jpg",
  "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/affc3fed1_clinica_laser.jpg",
  "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/382d903ef_clinica_peeling.jpg",
  "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/89cf3f0df_clinica_corporal.jpg",
  "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/bb47f0eac_clinica_gallery5.jpg",
  "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/50d500469_clinica_gallery6.jpg",
];

const reviews = [
  { text: "Resultado increíble. Totalmente natural y muy profesionales.", name: "María G.", stars: 5, img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/579b5e83a_review_female1.jpg" },
  { text: "Llevo 3 años viniendo y siempre salgo encantada. El mejor equipo.", name: "Laura P.", stars: 5, img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/19f93d00f_review_female2.jpg" },
  { text: "Profesionalidad y trato excelente. Lo recomiendo 100%.", name: "Carmen R.", stars: 5, img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/c9324a10b_review_female3.jpg" },
];

const faqs = [
  { q: "¿Los tratamientos son seguros?", a: "Todos nuestros tratamientos están respaldados por protocolos médicos certificados y realizados por especialistas con amplia experiencia." },
  { q: "¿Cuánto dura una sesión?", a: "Dependiendo del tratamiento, entre 30 minutos y 2 horas. Te informaremos detalladamente en tu primera consulta." },
  { q: "¿Necesito cita previa?", a: "Sí, trabajamos con cita previa para ofrecerte la máxima atención y personalización." },
  { q: "¿Financiación disponible?", a: "Ofrecemos planes de financiación flexibles hasta en 12 meses sin intereses." },
];

export default function IAClinicasEsteticas() {
  const [citaOpen, setCitaOpen] = useState(false);
  const [form, setForm] = useState({ nombre: "", telefono: "", tratamiento: "", fecha: "" });
  const [sent, setSent] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div style={{ background: "#0F0D0D", color: "#F5F5F5", minHeight: "100vh", fontFamily: "var(--font-body)" }}>
      {/* 1. Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(15,13,13,0.92)", backdropFilter: "blur(24px)", borderBottom: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" style={{ color: "#4A4A4A" }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>Syntra Labs</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["Tratamientos", "Equipo", "Galería", "FAQ", "Contacto"].map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-xs tracking-widest uppercase transition-colors duration-300"
                style={{ color: "#4A4A4A" }}
                onMouseEnter={e => e.currentTarget.style.color = "#C4A882"}
                onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>{n}</a>
            ))}
          </div>
          <button onClick={() => setCitaOpen(true)} className="text-xs tracking-widest uppercase px-5 py-2" style={{ background: "#C4A882", color: "#0A0A0A", borderRadius: "3px", fontWeight: 600 }}>Reservar Cita</button>
        </div>
      </nav>

      {/* 2. Hero with image */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "flex-end", paddingBottom: "60px", paddingTop: "100px", position: "relative" }}>
        <img src="https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/6971419fe_clinica_hero.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,13,13,0.92) 0%, rgba(15,13,13,0.6) 50%, rgba(15,13,13,0.3) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "#C4A882" }}>Clínica Estética Premium · Desde 2012</p>
            <h1 className="font-display font-black leading-[0.9] tracking-tight mb-6" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#F5F5F5" }}>TU BELLEZA,<br /><span style={{ color: "#C4A882" }}>NUESTRA ESPECIALIDAD.</span></h1>
            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: "#BDBDBD" }}>Medicina estética avanzada con tecnología de última generación y un equipo médico especializado.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setCitaOpen(true)} className="flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase" style={{ background: "#C4A882", color: "#0A0A0A", borderRadius: "3px" }}>Reservar Cita <ArrowRight className="w-4 h-4" /></button>
              <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-300" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#BDBDBD", borderRadius: "3px", backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.03)" }}>WhatsApp</button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Stats */}
      <section style={{ borderTop: "1px solid #1C1C1C", borderBottom: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 sm:grid-cols-4">
          {[["+12", "Años de experiencia"], ["+10K", "Pacientes"], ["98%", "Satisfacción"], ["20+", "Tratamientos"]].map(([v, l], i) => (
            <div key={i} className="py-8 px-6" style={{ borderRight: i < 3 ? "1px solid #1C1C1C" : "none" }}>
              <p className="font-display font-black text-3xl sm:text-4xl mb-1" style={{ color: "#C4A882" }}>{v}</p>
              <p className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Treatments with images */}
      <section id="tratamientos" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C4A882" }}>Nuestros Tratamientos</p>
          <h2 className="font-display font-black leading-[0.95] tracking-tight mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>Resultados que hablan.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {treatments.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group rounded-lg overflow-hidden cursor-pointer" style={{ background: "#131111", border: "1px solid #1C1C1C" }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
                  <img src={t.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s" }} className="group-hover:scale-105" />
                  {t.tag && <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase px-2 py-0.5" style={{ color: "#0A0A0A", background: "#C4A882", borderRadius: "2px", fontWeight: 600 }}>{t.tag}</span>}
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg mb-1" style={{ color: "#F5F5F5" }}>{t.name}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "#5A5A5A" }}>{t.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm" style={{ color: "#C4A882" }}>{t.price}</span>
                    <button onClick={() => setCitaOpen(true)} className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>Reservar →</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team with photos */}
      <section id="equipo" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C4A882" }}>El Equipo Médico</p>
          <h2 className="font-display font-black leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>Profesionales de confianza.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="rounded-lg overflow-hidden" style={{ border: "1px solid #1C1C1C" }}>
                <div style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                  <img src={m.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="p-5">
                  <p className="font-display font-bold text-lg mb-1" style={{ color: "#F5F5F5" }}>{m.name}</p>
                  <p className="text-xs" style={{ color: "#C4A882" }}>{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gallery */}
      <section id="galería" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C4A882" }}>Galería</p>
          <h2 className="font-display font-black leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>Nuestra clínica.</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {gallery.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}
                className="rounded-lg overflow-hidden" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s" }} className="hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Reviews */}
      <section id="opiniones" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C4A882" }}>Opiniones</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="p-6 rounded-lg" style={{ border: "1px solid #1C1C1C", background: "#131111" }}>
                <div className="flex gap-1 mb-4">{Array.from({ length: r.stars }).map((_, j) => <Star key={j} className="w-3 h-3 fill-current" style={{ color: "#C4A882" }} />)}</div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#BDBDBD" }}>"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={r.img} alt="" className="w-10 h-10 rounded-full object-cover" />
                  <p className="text-xs tracking-widest uppercase" style={{ color: "#C4A882" }}>{r.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C4A882" }}>Preguntas Frecuentes</p>
          <h2 className="font-display font-black leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>Resolvemos tus dudas.</h2>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid #1C1C1C" }}>
              <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left">
                <span className="font-display font-bold text-base" style={{ color: "#F5F5F5" }}>{f.q}</span>
                <ChevronDown className="w-4 h-4 shrink-0 ml-4 transition-transform duration-300" style={{ color: "#C4A882", transform: faqOpen === i ? "rotate(180deg)" : "none" }} />
              </button>
              {faqOpen === i && <p className="text-sm leading-relaxed pb-5" style={{ color: "#5A5A5A" }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA */}
      <section style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
          <h2 className="font-display font-black leading-[0.9] tracking-tight mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#F5F5F5" }}>¿Quieres una web<br /><span style={{ color: "#C4A882" }}>como esta?</span></h2>
          <Link to="/#contacto">
            <button className="flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase mx-auto" style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>Hablar con Syntra Labs <ArrowRight className="w-4 h-4" /></button>
          </Link>
          <p className="mt-6 text-xs tracking-widest uppercase" style={{ color: "#2A2A2A" }}>DEMO CREADA POR SYNTRA LABS</p>
        </div>
      </section>

      {/* 10. Contact Modal */}
      {citaOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(24px)" }} onClick={() => setCitaOpen(false)}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} onClick={e => e.stopPropagation()}
            className="w-full max-w-md p-10" style={{ background: "#0D0D0D", border: "1px solid #1C1C1C", borderRadius: "4px" }}>
            {sent ? (
              <div className="text-center py-8">
                <Check className="w-12 h-12 mx-auto mb-4" style={{ color: "#C4A882" }} />
                <p className="font-display font-black text-2xl mb-3" style={{ color: "#F5F5F5" }}>Cita solicitada.</p>
                <p className="text-sm" style={{ color: "#4A4A4A" }}>Te confirmamos en menos de 2h por WhatsApp.</p>
                <button onClick={() => { setCitaOpen(false); setSent(false); }} className="mt-8 text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>Cerrar</button>
              </div>
            ) : (
              <>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#C4A882" }}>Reservar Cita</p>
                <h3 className="font-display font-black text-2xl mb-8" style={{ color: "#F5F5F5" }}>Elige tu tratamiento.</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[{ k: "nombre", l: "Nombre *", p: "Tu nombre" }, { k: "telefono", l: "Teléfono *", p: "+34 600 000 000" }, { k: "tratamiento", l: "Tratamiento", p: "¿Qué te interesa?" }, { k: "fecha", l: "Fecha preferida", p: "Ej: lunes tarde" }].map(({ k, l, p }) => (
                    <div key={k}>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#4A4A4A" }}>{l}</label>
                      <input value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })} placeholder={p} required={k === "nombre" || k === "telefono"}
                        style={{ background: "transparent", border: "none", borderBottom: "1px solid #1C1C1C", width: "100%", color: "#F5F5F5", fontSize: "14px", padding: "10px 0", outline: "none", fontFamily: "inherit" }} />
                    </div>
                  ))}
                  <button type="submit" className="w-full py-4 text-sm font-semibold tracking-widest uppercase" style={{ background: "#C4A882", color: "#0A0A0A", borderRadius: "3px" }}>Solicitar Cita</button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}