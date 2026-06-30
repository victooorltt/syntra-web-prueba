import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const menu = [
  {
    section: "Entrantes",
    items: [
      { name: "Tartar de atún rojo", desc: "Con aguacate, sésamo tostado y leche de tigre.", price: "24 €" },
      { name: "Burrata de trufa negra", desc: "Crema de guisantes, pistachos y aceite de trufa.", price: "22 €" },
      { name: "Croquetas de cocido madrileño", desc: "Elaboración propia. Bechamel cremosa al vacío.", price: "16 €" },
    ],
  },
  {
    section: "Principales",
    items: [
      { name: "Lubina a la sal", desc: "Con emulsión de aceite arbequina y puré de hinojo.", price: "38 €" },
      { name: "Secreto ibérico de bellota", desc: "A la brasa, con romesco y patata confitada.", price: "34 €" },
      { name: "Risotto de boletus", desc: "Con parmesano 24 meses y tartufo de temporada.", price: "28 €" },
    ],
  },
];

const events = [
  { name: "Menú Degustación", desc: "8 pases · Maridaje incluido", price: "95 € / persona" },
  { name: "Celebraciones Privadas", desc: "Reserva exclusiva del restaurante completo.", price: "Consultar" },
  { name: "Cenas de Empresa", desc: "Menús corporativos desde 10 personas.", price: "Desde 65 € / pax" },
];

export default function RestaurantePremium() {
  const [reservaOpen, setReservaOpen] = useState(false);
  const [form, setForm] = useState({ nombre: "", telefono: "", fecha: "", personas: "", notas: "" });
  const [sent, setSent] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ background: "#080806", color: "#F5F5F5", minHeight: "100vh", fontFamily: "var(--font-body)" }}>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(8,8,6,0.94)", backdropFilter: "blur(24px)", borderBottom: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" style={{ color: "#4A4A4A" }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>Syntra Labs</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {["Carta", "Eventos", "Historia", "Reservar"].map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-xs tracking-widest uppercase transition-colors duration-300"
                style={{ color: "#4A4A4A" }}
                onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"}
                onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>{n}</a>
            ))}
          </div>
          <button onClick={() => setReservaOpen(true)}
            className="text-xs tracking-widest uppercase px-5 py-2 transition-all duration-300"
            style={{ border: "1px solid #D4A843", color: "#D4A843", borderRadius: "3px" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#D4A843"; e.currentTarget.style.color = "#080806"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#D4A843"; }}>
            Reservar Mesa
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "flex-end", paddingBottom: "80px", paddingTop: "100px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #080806, #100D08)" }} />
        <div style={{ position: "absolute", top: "30%", left: "50%", width: "600px", height: "600px", background: "rgba(212,168,67,0.04)", borderRadius: "50%", filter: "blur(100px)", transform: "translateX(-50%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs tracking-[0.35em] uppercase mb-8" style={{ color: "#D4A843" }}>Restaurante · Madrid · Desde 1998</p>
            <h1 className="font-display font-black leading-[0.9] tracking-tight mb-8" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#F5F5F5" }}>
              COCINA CON<br />ALMA.<br /><span style={{ color: "#4A4A4A" }}>PRODUCTO PURO.</span>
            </h1>
            <p className="text-base leading-relaxed mb-10 max-w-md" style={{ color: "#4A4A4A" }}>
              Gastronomía de mercado con técnica contemporánea. Una experiencia que va más allá de la mesa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setReservaOpen(true)}
                className="flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
                style={{ background: "#D4A843", color: "#080806", borderRadius: "3px" }}>
                Reservar Mesa <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => document.getElementById("carta")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-300"
                style={{ border: "1px solid #1C1C1C", color: "#4A4A4A", borderRadius: "3px" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#4A4A4A"; e.currentTarget.style.color = "#BDBDBD"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1C1C1C"; e.currentTarget.style.color = "#4A4A4A"; }}>
                Ver la Carta
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info bar */}
      <section style={{ borderTop: "1px solid #1C1C1C", borderBottom: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 sm:grid-cols-4">
          {[["Horario", "Mar–Dom · 13–16h / 20–23h"], ["Reservas", "+34 91 000 0000"], ["Ubicación", "C/ Serrano 45, Madrid"], ["Dress Code", "Smart Casual"]].map(([k, v], i) => (
            <div key={i} className="py-8 px-4" style={{ borderRight: i < 3 ? "1px solid #1C1C1C" : "none" }}>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#4A4A4A" }}>{k}</p>
              <p className="text-sm font-medium" style={{ color: "#BDBDBD" }}>{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="carta" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#4A4A4A" }}>La Carta</p>
          <h2 className="font-display font-black leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>
            Producto de temporada.
          </h2>
          <div className="flex gap-6 mb-12">
            {menu.map((m, i) => (
              <button key={i} onClick={() => setActiveMenu(i)}
                className="text-xs tracking-widest uppercase px-4 py-2 transition-all duration-300"
                style={{
                  border: "1px solid", borderColor: activeMenu === i ? "#D4A843" : "#1C1C1C",
                  color: activeMenu === i ? "#D4A843" : "#4A4A4A", borderRadius: "3px",
                }}>{m.section}</button>
            ))}
          </div>
          <div style={{ borderTop: "1px solid #1C1C1C" }}>
            {menu[activeMenu].items.map((item, i) => (
              <motion.div key={item.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start justify-between gap-8 py-8" style={{ borderBottom: "1px solid #1C1C1C" }}>
                <div>
                  <p className="font-display font-bold text-xl mb-1" style={{ color: "#F5F5F5" }}>{item.name}</p>
                  <p className="text-sm" style={{ color: "#4A4A4A" }}>{item.desc}</p>
                </div>
                <span className="font-semibold text-base shrink-0" style={{ color: "#D4A843" }}>{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="eventos" style={{ borderTop: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#4A4A4A" }}>Eventos</p>
          <h2 className="font-display font-black leading-[0.95] mb-20" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F5F5" }}>
            Momentos únicos.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background: "#1C1C1C" }}>
            {events.map((e, i) => (
              <div key={i} className="p-10 group cursor-pointer" style={{ background: "#080806" }} onClick={() => setReservaOpen(true)}>
                <p className="font-display font-bold text-2xl mb-3 transition-colors duration-300 group-hover:text-[#D4A843]" style={{ color: "#F5F5F5" }}>{e.name}</p>
                <p className="text-sm mb-6" style={{ color: "#4A4A4A" }}>{e.desc}</p>
                <p className="text-sm font-semibold" style={{ color: "#D4A843" }}>{e.price}</p>
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
      {reservaOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(24px)" }}
          onClick={() => setReservaOpen(false)}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            onClick={e => e.stopPropagation()}
            className="w-full max-w-md p-10"
            style={{ background: "#0D0D0D", border: "1px solid #1C1C1C", borderRadius: "4px" }}>
            {sent ? (
              <div className="text-center py-8">
                <p className="font-display font-black text-2xl mb-3" style={{ color: "#F5F5F5" }}>Mesa reservada.</p>
                <p className="text-sm" style={{ color: "#4A4A4A" }}>Confirmación enviada. Te esperamos.</p>
                <button onClick={() => { setReservaOpen(false); setSent(false); }} className="mt-8 text-xs tracking-widest uppercase" style={{ color: "#4A4A4A" }}>Cerrar</button>
              </div>
            ) : (
              <>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#4A4A4A" }}>Reservar Mesa</p>
                <h3 className="font-display font-black text-2xl mb-8" style={{ color: "#F5F5F5" }}>Completa tu reserva.</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[{ k: "nombre", l: "Nombre *", p: "Tu nombre" }, { k: "telefono", l: "Teléfono *", p: "+34 600 000 000" },
                    { k: "fecha", l: "Fecha y hora *", p: "Ej: sábado 28 junio, 21:00h" }, { k: "personas", l: "N.º de personas *", p: "Ej: 4" },
                    { k: "notas", l: "Notas o alergias", p: "Vegetariano, celíaco..." }
                  ].map(({ k, l, p }) => (
                    <div key={k}>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#4A4A4A" }}>{l}</label>
                      <input value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })}
                        placeholder={p} required={["nombre", "telefono", "fecha", "personas"].includes(k)}
                        style={{ background: "transparent", border: "none", borderBottom: "1px solid #1C1C1C", width: "100%", color: "#F5F5F5", fontSize: "14px", padding: "10px 0", outline: "none", fontFamily: "inherit" }} />
                    </div>
                  ))}
                  <button type="submit" className="w-full py-4 text-sm font-semibold tracking-widest uppercase"
                    style={{ background: "#D4A843", color: "#080806", borderRadius: "3px" }}>
                    Confirmar Reserva
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