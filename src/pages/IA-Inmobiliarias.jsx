import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, MapPin, Bed, Bath, Square, ChevronDown, Star } from "lucide-react";
import { Link } from "react-router-dom";

const properties = [
  { name: "Ático Salamanca", loc: "Madrid", price: "2.400.000€", beds: 4, baths: 3, sqm: 280, tag: "Exclusiva", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/7e18abd7b_inmo_hero.jpg" },
  { name: "Villa La Moraleja", loc: "Madrid", price: "4.900.000€", beds: 6, baths: 5, sqm: 620, tag: "Oportunidad", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/9bfc66e70_inmo_prop2.jpg" },
  { name: "Penthouse Vista Mar", loc: "Barcelona", price: "3.200.000€", beds: 3, baths: 3, sqm: 320, tag: "Nuevo", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/94cd45035_inmo_prop3.jpg" },
  { name: "Finca Sotogrande", loc: "Cádiz", price: "6.500.000€", beds: 7, baths: 6, sqm: 850, tag: "Única", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/1ef70de86_inmo_prop4.jpg" },
  { name: "Casa Ibiza", loc: "Ibiza", price: "5.800.000€", beds: 5, baths: 4, sqm: 450, tag: "Playa", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/921dc9f42_inmo_prop5.jpg" },
  { name: "Loft El Born", loc: "Barcelona", price: "1.200.000€", beds: 2, baths: 2, sqm: 150, tag: "Diseño", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/d4131f9ae_inmo_prop6.jpg" },
];

const services = [
  { label: "Compra", desc: "Acceso a propiedades exclusivas antes de su publicación en portales.", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/acc310339_inmo_service1.jpg" },
  { label: "Venta", desc: "Estrategia de marketing premium para maximizar el valor de tu propiedad.", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/3e8831e91_inmo_service2.jpg" },
  { label: "Inversión", desc: "Análisis de rentabilidad y gestión integral de activos inmobiliarios.", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/5176872ee_inmo_service3.jpg" },
  { label: "Alquiler", desc: "Gestión completa del arrendamiento con inquilinos cualificados.", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/7d4c23dbd_inmo_service4.jpg" },
];

const concierge = [
  { name: "Yates", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/e9f8022f5_inmo_yates.jpg" },
  { name: "Jets Privados", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/afd11b693_inmo_jets.jpg" },
  { name: "Lifestyle", img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/6fe1a69eb_inmo_lifestyle.jpg" },
];

const reviews = [
  { text: "Encontramos la casa de nuestros sueños en 2 semanas. Servicio impecable.", name: "Familia Ruiz", stars: 5, img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/579b5e83a_review_female1.jpg" },
  { text: "Vendieron nuestra propiedad un 15% por encima del precio de salida.", name: "Carlos M.", stars: 5, img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/ab82e6925_review_male1.jpg" },
  { text: "El servicio de concierge es de otro nivel. Nos organizaron todo el viaje.", name: "Laura P.", stars: 5, img: "https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/19f93d00f_review_female2.jpg" },
];

const faqs = [
  { q: "¿Trabajáis con propiedades exclusivas?", a: "Sí, tenemos acceso a propiedades off-market que no se publican en portales tradicionales." },
  { q: "¿Qué comisiones cobráis?", a: "Nuestras comisiones son transparentes y competitivas. Se detallan en el contrato de exclusiva." },
  { q: "¿Ofrecéis servicio de concierge?", a: "Sí, disponemos de un servicio integral de concierge: yates, jets privados, restaurantes y eventos." },
  { q: "¿Gestión de alquileres?", a: "Gestionamos alquileres de larga y corta estancia, incluyendo property management completo." },
];

export default function IAInmobiliarias() {
  const [visitaOpen, setVisitaOpen] = useState(false);
  const [form, setForm] = useState({ nombre: "", telefono: "", propiedad: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div style={{ background: "#0A0A0A", color: "#F5F5F5", minHeight: "100vh", fontFamily: "var(--font-body)" }}>
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(10,10,10,0.9)", backdropFilter: "blur(24px)", borderBottom: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" style={{ color: "#4A4A4A" }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>Syntra Labs</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["Propiedades", "Servicios", "Concierge", "FAQ", "Contacto"].map(n => (
              <a key={n} href={"#" + n.toLowerCase()} className="text-xs tracking-widest uppercase transition-colors duration-300" style={{ color: "#4A4A4A" }} onMouseEnter={e => e.currentTarget.style.color = "#C9B99A"} onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>{n}</a>
            ))}
          </div>
          <button onClick={() => setVisitaOpen(true)} className="text-xs tracking-widest uppercase px-5 py-2" style={{ border: "1px solid #C9B99A", color: "#C9B99A", borderRadius: "3px" }}>Solicitar Visita</button>
        </div>
      </nav>

      <section style={{ minHeight: "100vh", display: "flex", alignItems: "flex-end", paddingBottom: "60px", paddingTop: "100px", position: "relative", overflow: "hidden" }}>
        <img src="https://base44.app/api/apps/6a22ad22627c0746f590d658/files/mp/public/6a22ad22627c0746f590d658/7e18abd7b_inmo_hero.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 60%, rgba(10,10,10,0.2) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "#C9B99A" }}>Inmobiliaria de Lujo · Madrid & Barcelona</p>
            <h1 className="font-display font-black leading-[0.9] tracking-tight mb-8" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", color: "#F5F5F5" }}>PROPIEDADES<br /><span style={{ color: "#C9B99A" }}>EXCEPCIONALES.</span></h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => document.getElementById("propiedades").scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase" style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>Ver Propiedades <ArrowRight className="w-4 h-4" /></button>
              <button onClick={() => setVisitaOpen(true)} className="flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest uppercase" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#C9B99A", borderRadius: "3px", backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.03)" }}>Captación de Propietarios</button>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid #1C1C1C", borderBottom: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 sm:grid-cols-4">
          {[["+450", "Propiedades vendidas"], ["€1.2B", "Valor gestionado"], ["97%", "Clientes satisfechos"], ["48h", "Respuesta media"]].map(([v, l], i) => (
            <div key={i} className="py-8 px-6" style={{ borderRight: i < 3 ? "1px solid #1C1C1C" : "none" }}>
              <p className="font-display font-black text-3xl sm:text-4xl mb-1" style={{ color: "#C9B99A" }}>{v}</p>
              <p className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="propiedades" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C9B99A" }}>Propiedades Destacadas</p>
          <h2 className="font-display font-black leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>Selección exclusiva.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group rounded-lg overflow-hidden cursor-pointer" style={{ background: "#0D0D0D", border: "1px solid #1C1C1C" }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
                  <img src={p.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s" }} className="group-hover:scale-105" />
                  <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase px-2 py-1" style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(10px)", color: "#C9B99A", borderRadius: "2px", border: "1px solid rgba(201,185,154,0.2)" }}>{p.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-base mb-1" style={{ color: "#F5F5F5" }}>{p.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <MapPin className="w-3 h-3" style={{ color: "#4A4A4A" }} />
                    <span className="text-xs" style={{ color: "#4A4A4A" }}>{p.loc}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs flex items-center gap-1" style={{ color: "#BDBDBD" }}><Bed className="w-3 h-3" />{p.beds}</span>
                    <span className="text-xs flex items-center gap-1" style={{ color: "#BDBDBD" }}><Bath className="w-3 h-3" />{p.baths}</span>
                    <span className="text-xs flex items-center gap-1" style={{ color: "#BDBDBD" }}><Square className="w-3 h-3" />{p.sqm}m²</span>
                  </div>
                  <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid #1C1C1C" }}>
                    <span className="font-display font-black text-lg" style={{ color: "#C9B99A" }}>{p.price}</span>
                    <button onClick={() => setVisitaOpen(true)} className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>Visitar →</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C9B99A" }}>Servicios</p>
          <h2 className="font-display font-black leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>Todo lo que necesitas.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-lg overflow-hidden" style={{ border: "1px solid #1C1C1C" }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img src={s.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="p-5">
                  <p className="font-display font-bold text-lg mb-2" style={{ color: "#F5F5F5" }}>{s.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#5A5A5A" }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="concierge" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C9B99A" }}>Concierge</p>
          <h2 className="font-display font-black leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>Servicios exclusivos.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {concierge.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-lg overflow-hidden relative" style={{ aspectRatio: "16/10", border: "1px solid #1C1C1C" }}>
                <img src={c.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 5%, transparent 50%)" }} />
                <p className="absolute bottom-4 left-5 font-display font-bold text-lg" style={{ color: "#F5F5F5" }}>{c.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C9B99A" }}>Opiniones</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="p-6 rounded-lg" style={{ border: "1px solid #1C1C1C", background: "#0D0D0D" }}>
                <div className="flex gap-1 mb-4">{Array.from({ length: r.stars }).map((_, j) => <Star key={j} className="w-3 h-3 fill-current" style={{ color: "#C9B99A" }} />)}</div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#BDBDBD" }}>"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={r.img} alt="" className="w-10 h-10 rounded-full object-cover" />
                  <p className="text-xs tracking-widest uppercase" style={{ color: "#C9B99A" }}>{r.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C9B99A" }}>Preguntas Frecuentes</p>
          <h2 className="font-display font-black leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>Resolvemos tus dudas.</h2>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid #1C1C1C" }}>
              <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left">
                <span className="font-display font-bold text-base" style={{ color: "#F5F5F5" }}>{f.q}</span>
                <ChevronDown className="w-4 h-4 shrink-0 ml-4 transition-transform duration-300" style={{ color: "#C9B99A", transform: faqOpen === i ? "rotate(180deg)" : "none" }} />
              </button>
              {faqOpen === i && <p className="text-sm leading-relaxed pb-5" style={{ color: "#5A5A5A" }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
          <h2 className="font-display font-black leading-[0.9] tracking-tight mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#F5F5F5" }}>¿Quieres una web<br /><span style={{ color: "#C9B99A" }}>como esta?</span></h2>
          <Link to="/#contacto">
            <button className="flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase mx-auto" style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>Hablar con Syntra Labs <ArrowRight className="w-4 h-4" /></button>
          </Link>
          <p className="mt-6 text-xs tracking-widest uppercase" style={{ color: "#2A2A2A" }}>DEMO CREADA POR SYNTRA LABS</p>
        </div>
      </section>

      {visitaOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(24px)" }} onClick={() => setVisitaOpen(false)}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} onClick={e => e.stopPropagation()}
            className="w-full max-w-md p-10" style={{ background: "#0D0D0D", border: "1px solid #1C1C1C", borderRadius: "4px" }}>
            {sent ? (
              <div className="text-center py-8">
                <p className="font-display font-black text-2xl mb-3" style={{ color: "#F5F5F5" }}>Solicitud recibida.</p>
                <p className="text-sm" style={{ color: "#4A4A4A" }}>Nuestro equipo se pondrá en contacto en menos de 24h.</p>
                <button onClick={() => { setVisitaOpen(false); setSent(false); }} className="mt-8 text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>Cerrar</button>
              </div>
            ) : (
              <>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#C9B99A" }}>Solicitar Visita</p>
                <h3 className="font-display font-black text-2xl mb-8" style={{ color: "#F5F5F5" }}>Contacta con nosotros.</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[{ k: "nombre", l: "Nombre *", p: "Tu nombre" }, { k: "telefono", l: "Teléfono *", p: "+34 600 000 000" }, { k: "propiedad", l: "Propiedad", p: "¿Cuál te interesa?" }].map(({ k, l, p }) => (
                    <div key={k}>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#4A4A4A" }}>{l}</label>
                      <input value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })} placeholder={p} required={k === "nombre" || k === "telefono"}
                        style={{ background: "transparent", border: "none", borderBottom: "1px solid #1C1C1C", width: "100%", color: "#F5F5F5", fontSize: "14px", padding: "10px 0", outline: "none", fontFamily: "inherit" }} />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#4A4A4A" }}>Mensaje</label>
                    <textarea rows={3} value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} placeholder="¿En qué podemos ayudarte?"
                      style={{ background: "transparent", border: "none", borderBottom: "1px solid #1C1C1C", width: "100%", color: "#F5F5F5", fontSize: "14px", padding: "10px 0", resize: "none", outline: "none", fontFamily: "inherit" }} />
                  </div>
                  <button type="submit" className="w-full py-4 text-sm font-semibold tracking-widest uppercase" style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>Enviar Solicitud</button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}