import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Star, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  { name: "Derecho Mercantil", desc: "Constitución de sociedades, M&A, due diligence. Asesoría integral para su empresa.", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/7f666d02c_abogados_area1.jpg" },
  { name: "Derecho Penal", desc: "Defensa penal de alto nivel. Experiencia en casos complejos y de alta visibilidad.", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/8b27be574_abogados_hero.jpg" },
  { name: "Derecho Civil", desc: "Contratos, herencias, divorcios. Protegemos sus intereses en todo procedimiento civil.", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/279024b3a_abogados_area3.jpg" },
  { name: "Derecho Laboral", desc: "Despidos, expedientes, negociación colectiva. Defensa sólida ante cualquier conflicto.", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/f6e3c4a39_abogados_area4.jpg" },
];

const stats = [
  { value: "+1.200", label: "Casos resueltos" },
  { value: "98%", label: "Tasa de éxito" },
  { value: "28", label: "Años de experiencia" },
  { value: "4", label: "Socios especialistas" },
];

const team = [
  { name: "D. Rafael Montoya", role: "Socio Fundador · Mercantil", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/e8c4bf95e_review_male2.jpg" },
  { name: "Dña. Carmen Vidal", role: "Socia · Civil y Familia", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/0972742f5_review_female4.jpg" },
  { name: "D. Alejandro Ruiz", role: "Socio · Laboral", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/a23988f30_review_male3.jpg" },
  { name: "Dña. Patricia Lomas", role: "Socia · Penal", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/a1f16f146_abogados_team4.jpg" },
];

const gallery = [
  "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/8b27be574_abogados_hero.jpg",
  "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/7f666d02c_abogados_area1.jpg",
  "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/279024b3a_abogados_area3.jpg",
  "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/f6e3c4a39_abogados_area4.jpg",
  "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/28d5b7dec_abogados_gallery5.jpg",
  "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/7fb64084a_abogados_gallery6.jpg",
];

const reviews = [
  { text: "Profesionales excepcionales. Nos llevaron un caso mercantil complejo con total éxito.", name: "Grupo Industrial M.A.", stars: 5, img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/e8c4bf95e_review_male2.jpg" },
  { text: "Trato cercano y resultados impecables. Los recomiendo sin duda.", name: "Ana Belén R.", stars: 5, img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/579b5e83a_review_female1.jpg" },
  { text: "Defendieron mis intereses con rigor y dedicación. Excelente equipo.", name: "Carlos M.", stars: 5, img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/ab82e6925_review_male1.jpg" },
];

const faqs = [
  { q: "¿La primera consulta es gratuita?", a: "Sí, la primera consulta es totalmente gratuita y sin compromiso. Evaluaremos su caso de forma confidencial." },
  { q: "¿Cómo se determinan los honorarios?", a: "Trabajamos con honorarios transparentes y cerrados. Le enviaremos un presupuesto detallado antes de iniciar cualquier gestión." },
  { q: "¿Atienden a empresas y particulares?", a: "Sí, asesoramos tanto a empresas como a particulares en todas las áreas de práctica del despacho." },
  { q: "¿Tienen presencia en otras ciudades?", a: "Nuestra sede principal está en Madrid, pero asumimos casos en toda España con la misma dedicación." },
];

export default function IADespachosAbogados() {
  const [consultaOpen, setConsultaOpen] = useState(false);
  const [form, setForm] = useState({ nombre: "", empresa: "", telefono: "", asunto: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div style={{ background: "#09090C", color: "#F5F5F5", minHeight: "100vh", fontFamily: "var(--font-body)" }}>
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(9,9,12,0.93)", backdropFilter: "blur(24px)", borderBottom: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" style={{ color: "#4A4A4A" }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>Syntra Labs</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["Áreas", "Equipo", "Casos", "FAQ", "Contacto"].map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-xs tracking-widest uppercase transition-colors duration-300"
                style={{ color: "#4A4A4A" }} onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"} onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>{n}</a>
            ))}
          </div>
          <button onClick={() => setConsultaOpen(true)} className="text-xs tracking-widest uppercase px-5 py-2" style={{ border: "1px solid #BDBDBD", color: "#BDBDBD", borderRadius: "3px" }}>Consulta Gratuita</button>
        </div>
      </nav>

      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "100px", position: "relative" }}>
        <img src="https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/8b27be574_abogados_hero.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(9,9,12,0.95) 0%, rgba(9,9,12,0.7) 50%, rgba(9,9,12,0.4) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "#BDBDBD" }}>Montoya Vidal & Asociados · Madrid</p>
            <h1 className="font-display font-black leading-[0.9] tracking-tight mb-6" style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", color: "#F5F5F5" }}>AUTORIDAD.<br />CONFIANZA.<br /><span style={{ color: "#4A4A4A" }}>RESULTADOS.</span></h1>
            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: "#BDBDBD" }}>Despacho de abogados con 28 años de trayectoria. Asesoría jurídica especializada para personas y empresas.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setConsultaOpen(true)} className="flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase" style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>Primera Consulta Gratuita <ArrowRight className="w-4 h-4" /></button>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid #1C1C1C", borderBottom: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="py-8 px-6" style={{ borderRight: i < 3 ? "1px solid #1C1C1C" : "none" }}>
              <p className="font-display font-black text-3xl sm:text-4xl mb-1" style={{ color: "#F5F5F5" }}>{s.value}</p>
              <p className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="áreas" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#4A4A4A" }}>Áreas de Práctica</p>
          <h2 className="font-display font-black leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>Experiencia especializada.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {areas.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group rounded-lg overflow-hidden cursor-pointer" style={{ background: "#0D0D10", border: "1px solid #1C1C1C" }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img src={a.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s" }} className="group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#F5F5F5" }}>{a.name}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#5A5A5A" }}>{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipo" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#4A4A4A" }}>Los Socios</p>
          <h2 className="font-display font-black leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>Dedicación total a su caso.</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {team.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="rounded-lg overflow-hidden" style={{ border: "1px solid #1C1C1C" }}>
                <div style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                  <img src={m.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="p-4">
                  <p className="font-display font-bold text-sm mb-1" style={{ color: "#F5F5F5" }}>{m.name}</p>
                  <p className="text-xs" style={{ color: "#BDBDBD" }}>{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="casos" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#4A4A4A" }}>Galería</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {gallery.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}
                className="rounded-lg overflow-hidden" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#4A4A4A" }}>Opiniones</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="p-6 rounded-lg" style={{ border: "1px solid #1C1C1C", background: "#0D0D10" }}>
                <div className="flex gap-1 mb-4">{Array.from({ length: r.stars }).map((_, j) => <Star key={j} className="w-3 h-3 fill-current" style={{ color: "#BDBDBD" }} />)}</div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#BDBDBD" }}>"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={r.img} alt="" className="w-10 h-10 rounded-full object-cover" />
                  <p className="text-xs tracking-widest uppercase" style={{ color: "#BDBDBD" }}>{r.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#4A4A4A" }}>Preguntas Frecuentes</p>
          <h2 className="font-display font-black leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>Resolvemos sus dudas.</h2>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid #1C1C1C" }}>
              <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left">
                <span className="font-display font-bold text-base" style={{ color: "#F5F5F5" }}>{f.q}</span>
                <ChevronDown className="w-4 h-4 shrink-0 ml-4 transition-transform duration-300" style={{ color: "#BDBDBD", transform: faqOpen === i ? "rotate(180deg)" : "none" }} />
              </button>
              {faqOpen === i && <p className="text-sm leading-relaxed pb-5" style={{ color: "#5A5A5A" }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
          <h2 className="font-display font-black leading-[0.9] tracking-tight mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#F5F5F5" }}>¿Quieres una web<br /><span style={{ color: "#4A4A4A" }}>como esta?</span></h2>
          <Link to="/#contacto">
            <button className="flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase mx-auto" style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>Hablar con Syntra Labs <ArrowRight className="w-4 h-4" /></button>
          </Link>
          <p className="mt-6 text-xs tracking-widest uppercase" style={{ color: "#2A2A2A" }}>DEMO CREADA POR SYNTRA LABS</p>
        </div>
      </section>

      {consultaOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(24px)" }} onClick={() => setConsultaOpen(false)}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} onClick={e => e.stopPropagation()}
            className="w-full max-w-md p-10" style={{ background: "#0D0D0D", border: "1px solid #1C1C1C", borderRadius: "4px" }}>
            {sent ? (
              <div className="text-center py-8">
                <p className="font-display font-black text-2xl mb-3" style={{ color: "#F5F5F5" }}>Consulta recibida.</p>
                <p className="text-sm" style={{ color: "#4A4A4A" }}>Un abogado se pondrá en contacto en menos de 24h.</p>
                <button onClick={() => { setConsultaOpen(false); setSent(false); }} className="mt-8 text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>Cerrar</button>
              </div>
            ) : (
              <>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#BDBDBD" }}>Primera Consulta Gratuita</p>
                <h3 className="font-display font-black text-2xl mb-8" style={{ color: "#F5F5F5" }}>Cuéntenos su caso.</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[{ k: "nombre", l: "Nombre *", p: "Su nombre completo" }, { k: "empresa", l: "Empresa", p: "Si aplica" }, { k: "telefono", l: "Teléfono *", p: "+34 600 000 000" }, { k: "asunto", l: "Área de derecho", p: "Civil, Mercantil, Laboral..." }].map(({ k, l, p }) => (
                    <div key={k}>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#4A4A4A" }}>{l}</label>
                      <input value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })} placeholder={p} required={k === "nombre" || k === "telefono"}
                        style={{ background: "transparent", border: "none", borderBottom: "1px solid #1C1C1C", width: "100%", color: "#F5F5F5", fontSize: "14px", padding: "10px 0", outline: "none", fontFamily: "inherit" }} />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#4A4A4A" }}>Breve descripción</label>
                    <textarea rows={3} value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} placeholder="Describa brevemente su situación"
                      style={{ background: "transparent", border: "none", borderBottom: "1px solid #1C1C1C", width: "100%", color: "#F5F5F5", fontSize: "14px", padding: "10px 0", outline: "none", fontFamily: "inherit", resize: "none" }} />
                  </div>
                  <button type="submit" className="w-full py-4 text-sm font-semibold tracking-widest uppercase" style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>Solicitar Consulta Gratuita</button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}