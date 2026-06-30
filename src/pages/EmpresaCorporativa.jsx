import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Star, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { num: "01", name: "Consultoría Estratégica", desc: "Análisis, diagnóstico y hoja de ruta para la transformación digital de su negocio.", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/2f9f9ee22_corp_service1.jpg" },
  { num: "02", name: "Tecnología e Innovación", desc: "Implementación de soluciones tecnológicas adaptadas a cada empresa.", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/368b85a99_corp_service2.jpg" },
  { num: "03", name: "Gestión del Cambio", desc: "Acompañamiento en procesos de transformación organizacional y cultural.", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/539f41a4c_corp_service3.jpg" },
  { num: "04", name: "Internacionalización", desc: "Estrategia de expansión internacional con rigor y metodología.", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/549546be8_corp_hero.jpg" },
];

const cases = [
  { sector: "Sector Industrial", title: "Digitalización de procesos productivos", result: "+38% eficiencia operativa", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/af762a2f8_corp_case1.jpg" },
  { sector: "Sector Retail", title: "Transformación del modelo de ventas", result: "+52% ingresos digitales", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/170f1e3de_corp_case2.jpg" },
  { sector: "Sector Salud", title: "Implantación de sistemas de gestión", result: "–40% tiempo administrativo", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/c3426b417_corp_case3.jpg" },
];

const team = [
  { name: "Marcus Chen", role: "CEO", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/e8c4bf95e_review_male2.jpg" },
  { name: "Sofia Berg", role: "COO", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/0972742f5_review_female4.jpg" },
  { name: "James Park", role: "CTO", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/a23988f30_review_male3.jpg" },
];

const reviews = [
  { text: "Transformaron nuestra empresa. La estrategia digital duplicó nuestros ingresos en 18 meses.", name: "Grupo Industrial", stars: 5, img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/e8c4bf95e_review_male2.jpg" },
  { text: "Consultoría de primer nivel. Nos abrieron mercados internacionales con éxito total.", name: "TechCorp", stars: 5, img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/a23988f30_review_male3.jpg" },
  { text: "Profesionales extraordinarios. La gestión del cambio fue impecable.", name: "Health Systems", stars: 5, img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/19f93d00f_review_female2.jpg" },
];

const faqs = [
  { q: "¿Trabajáis con empresas internacionales?", a: "Sí, operamos en más de 10 países con oficinas en Madrid y Londres." },
  { q: "¿Cuál es el tamaño mínimo de proyecto?", a: "Trabajamos con empresas de todos los tamaños, desde startups hasta grandes corporaciones." },
  { q: "¿Ofrecéis medición de resultados?", a: "Todos nuestros proyectos incluyen KPIs medibles y reporting continuo de impacto." },
  { q: "¿Disponibilidad inmediata?", a: "Sí, contamos con equipos disponibles para comenzar proyectos en 2-4 semanas." },
];

export default function EmpresaCorporativa() {
  const [contactOpen, setContactOpen] = useState(false);
  const [form, setForm] = useState({ nombre: "", empresa: "", cargo: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div style={{ background: "#08080A", color: "#F5F5F5", minHeight: "100vh", fontFamily: "var(--font-body)" }}>
      {/* 1. Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(8,8,10,0.94)", backdropFilter: "blur(24px)", borderBottom: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" style={{ color: "#4A4A4A" }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>Syntra Labs</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["Servicios", "Casos", "Equipo", "FAQ", "Contacto"].map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-xs tracking-widest uppercase transition-colors duration-300" style={{ color: "#4A4A4A" }} onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"} onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>{n}</a>
            ))}
          </div>
          <button onClick={() => setContactOpen(true)} className="text-xs tracking-widest uppercase px-5 py-2" style={{ border: "1px solid #BDBDBD", color: "#BDBDBD", borderRadius: "3px" }}>Contactar</button>
        </div>
      </nav>

      {/* 2. Hero with image */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "100px", position: "relative" }}>
        <img src="https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/549546be8_corp_hero.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(8,8,10,0.92) 0%, rgba(8,8,10,0.6) 50%, rgba(8,8,10,0.3) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full py-24">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="max-w-4xl">
            <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "#BDBDBD" }}>Consultoría Estratégica · Madrid · Londres</p>
            <h1 className="font-display font-black leading-[0.9] tracking-tight mb-8" style={{ fontSize: "clamp(3rem, 9vw, 8.5rem)", color: "#F5F5F5" }}>ESTRATEGIA<br />QUE<br /><span style={{ color: "#4A4A4A" }}>TRANSFORMA.</span></h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setContactOpen(true)} className="flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase" style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>Solicitar Reunión <ArrowRight className="w-4 h-4" /></button>
              <button onClick={() => document.getElementById("casos")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest uppercase" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#BDBDBD", borderRadius: "3px", backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.03)" }}>Ver Casos de Éxito</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Stats */}
      <section style={{ borderTop: "1px solid #1C1C1C", borderBottom: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 sm:grid-cols-4">
          {[["+200", "Proyectos"], ["€50M", "Generados"], ["10", "Países"], ["98%", "Retención"]].map(([v, l], i) => (
            <div key={i} className="py-8 px-6" style={{ borderRight: i < 3 ? "1px solid #1C1C1C" : "none" }}>
              <p className="font-display font-black text-3xl sm:text-4xl mb-1" style={{ color: "#F5F5F5" }}>{v}</p>
              <p className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services with images */}
      <section id="servicios" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#4A4A4A" }}>Servicios</p>
          <h2 className="font-display font-black leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>Cuatro áreas de impacto.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-lg overflow-hidden" style={{ background: "#0D0D0F", border: "1px solid #1C1C1C" }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img src={s.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="p-5">
                  <span className="text-xs font-mono" style={{ color: "#2A2A2A" }}>{s.num}</span>
                  <h3 className="font-display font-bold text-base mb-2 mt-1" style={{ color: "#F5F5F5" }}>{s.name}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#5A5A5A" }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Cases with images */}
      <section id="casos" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#4A4A4A" }}>Casos de Éxito</p>
          <h2 className="font-display font-black leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>Resultados medibles.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="rounded-lg overflow-hidden" style={{ border: "1px solid #1C1C1C", background: "#0D0D0F" }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img src={c.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="p-5">
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#4A4A4A" }}>{c.sector}</p>
                  <p className="font-display font-bold text-sm mb-4" style={{ color: "#F5F5F5" }}>{c.title}</p>
                  <p className="font-display font-black text-lg" style={{ color: "#BDBDBD" }}>{c.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Team */}
      <section id="equipo" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#4A4A4A" }}>Equipo Directivo</p>
          <h2 className="font-display font-black leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>Liderazgo global.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {team.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="rounded-lg overflow-hidden" style={{ border: "1px solid #1C1C1C" }}>
                <div style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                  <img src={m.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="p-4">
                  <p className="font-display font-bold text-base mb-1" style={{ color: "#F5F5F5" }}>{m.name}</p>
                  <p className="text-xs" style={{ color: "#BDBDBD" }}>{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Reviews */}
      <section style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#4A4A4A" }}>Opiniones</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="p-6 rounded-lg" style={{ border: "1px solid #1C1C1C", background: "#0D0D0F" }}>
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

      {/* 8. FAQ */}
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

      {/* 9. CTA */}
      <section style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
          <h2 className="font-display font-black leading-[0.9] tracking-tight mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#F5F5F5" }}>¿Quieres una web<br /><span style={{ color: "#4A4A4A" }}>como esta?</span></h2>
          <Link to="/#contacto">
            <button className="flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase mx-auto" style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>Hablar con Syntra Labs <ArrowRight className="w-4 h-4" /></button>
          </Link>
          <p className="mt-6 text-xs tracking-widest uppercase" style={{ color: "#2A2A2A" }}>DEMO CREADA POR SYNTRA LABS</p>
        </div>
      </section>

      {/* 10. Contact Modal */}
      {contactOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(24px)" }} onClick={() => setContactOpen(false)}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} onClick={e => e.stopPropagation()}
            className="w-full max-w-md p-10" style={{ background: "#0D0D0D", border: "1px solid #1C1C1C", borderRadius: "4px" }}>
            {sent ? (
              <div className="text-center py-8">
                <p className="font-display font-black text-2xl mb-3" style={{ color: "#F5F5F5" }}>Solicitud recibida.</p>
                <p className="text-sm" style={{ color: "#4A4A4A" }}>Nuestro equipo le contactará en menos de 24h.</p>
                <button onClick={() => { setContactOpen(false); setSent(false); }} className="mt-8 text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>Cerrar</button>
              </div>
            ) : (
              <>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#BDBDBD" }}>Solicitar Reunión</p>
                <h3 className="font-display font-black text-2xl mb-8" style={{ color: "#F5F5F5" }}>Hablemos de su proyecto.</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[{ k: "nombre", l: "Nombre *", p: "Su nombre" }, { k: "empresa", l: "Empresa *", p: "Su empresa" }, { k: "cargo", l: "Cargo", p: "Su posición" }, { k: "telefono", l: "Teléfono *", p: "+34 600 000 000" }].map(({ k, l, p }) => (
                    <div key={k}>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#4A4A4A" }}>{l}</label>
                      <input value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })} placeholder={p} required={["nombre", "empresa", "telefono"].includes(k)}
                        style={{ background: "transparent", border: "none", borderBottom: "1px solid #1C1C1C", width: "100%", color: "#F5F5F5", fontSize: "14px", padding: "10px 0", outline: "none", fontFamily: "inherit" }} />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#4A4A4A" }}>¿En qué podemos ayudarle?</label>
                    <textarea rows={3} value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} placeholder="Cuéntenos su proyecto..."
                      style={{ background: "transparent", border: "none", borderBottom: "1px solid #1C1C1C", width: "100%", color: "#F5F5F5", fontSize: "14px", padding: "10px 0", outline: "none", fontFamily: "inherit", resize: "none" }} />
                  </div>
                  <button type="submit" className="w-full py-4 text-sm font-semibold tracking-widest uppercase" style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>Solicitar Reunión</button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}