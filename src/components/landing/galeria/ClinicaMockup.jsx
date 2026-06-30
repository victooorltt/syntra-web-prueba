import React from "react";

export default function ClinicaMockup({ p, fs }) {
  const { accent, bg, heroImg, brand } = p;
  const txt = "#1A1A1A";
  const sub = "#6A6A6A";
  const bd = "rgba(0,0,0,0.07)";
  const cardBg = "#FFFFFF";

  const services = [
    { title: "Facial", desc: "Rejuvenecimiento", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=85" },
    { title: "Corporal", desc: "Escultura", img: "https://images.unsplash.com/photo-1616398589509-ed16d1b0a923?w=400&q=85" },
    { title: "Capilar", desc: "Injerto capilar", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=85" },
    { title: "Bienestar", desc: "IV Therapy", img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&q=85" },
  ];

  const team = [
    { name: "Dra. García", role: "Directora Médica", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=85" },
    { name: "Dr. Ruiz", role: "Cirugía Estética", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=85" },
    { name: "Dra. López", role: "Dermatología", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273a?w=300&q=85" },
  ];

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: bg }}>
      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${9 * fs}px ${16 * fs}px`, borderBottom: `1px solid ${bd}`, background: "#FFF", flexShrink: 0 }}>
        <span style={{ fontSize: 11 * fs, fontWeight: 800, letterSpacing: "0.2em", color: txt, fontFamily: "var(--font-display)" }}>{brand}</span>
        <div style={{ display: "flex", gap: 12 * fs }}>
          {["Tratamientos", "Equipo", "Resultados", "FAQ"].map((n, i) => (
            <span key={i} style={{ fontSize: 7 * fs, color: sub }}>{n}</span>
          ))}
        </div>
        <span style={{ fontSize: 7 * fs, padding: `${5 * fs}px ${11 * fs}px`, background: accent, color: "#FFF", borderRadius: 3 * fs, fontWeight: 700 }}>Pedir Cita</span>
      </div>

      {/* Hero */}
      <div style={{ position: "relative", height: 120 * fs, overflow: "hidden", flexShrink: 0 }}>
        <img src={heroImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${bg}F5 5%, ${bg}99 35%, ${bg}40 100%)` }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 16 * fs, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 6 * fs, fontWeight: 600 }}>Medicina estética premium</p>
          <h1 style={{ fontSize: 17 * fs, fontWeight: 900, color: txt, lineHeight: 0.95, fontFamily: "var(--font-display)", marginBottom: 7 * fs }}>Tu Belleza,<br />Nuestra Ciencia</h1>
          <div style={{ display: "flex", gap: 6 * fs }}>
            <span style={{ display: "inline-block", fontSize: 7 * fs, padding: `${5 * fs}px ${13 * fs}px`, background: accent, color: "#FFF", borderRadius: 3 * fs, fontWeight: 700 }}>Pedir Cita →</span>
            <span style={{ display: "inline-block", fontSize: 7 * fs, padding: `${5 * fs}px ${13 * fs}px`, border: `1px solid ${txt}30`, color: txt, borderRadius: 3 * fs, fontWeight: 600 }}>Ver Tratamientos</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: `${7 * fs}px ${14 * fs}px`, background: "#FFF", borderBottom: `1px solid ${bd}`, flexShrink: 0 }}>
        {[["+15", "Años"], ["+10K", "Pacientes"], ["98%", "Satisfacción"], ["20+", "Tratamientos"]].map(([v, l], i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <p style={{ fontSize: 9 * fs, fontWeight: 900, color: accent, fontFamily: "var(--font-display)" }}>{v}</p>
            <p style={{ fontSize: 5 * fs, color: sub, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 1 * fs }}>{l}</p>
          </div>
        ))}
      </div>

      {/* Services */}
      <div style={{ display: "flex", gap: 5 * fs, padding: `${8 * fs}px ${14 * fs}px`, flexShrink: 0 }}>
        {services.map((s, i) => (
          <div key={i} style={{ flex: 1, borderRadius: 4 * fs, overflow: "hidden", border: `1px solid ${bd}`, background: cardBg }}>
            <div style={{ height: 30 * fs, overflow: "hidden" }}>
              <img src={s.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: `${4 * fs}px ${5 * fs}px` }}>
              <p style={{ fontSize: 7 * fs, color: txt, fontWeight: 700, marginBottom: 1 * fs }}>{s.title}</p>
              <p style={{ fontSize: 5.5 * fs, color: sub }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Team */}
      <div style={{ padding: `${0}px ${14 * fs}px ${8 * fs}px`, flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 5 * fs, fontWeight: 600 }}>Equipo médico</p>
        <div style={{ display: "flex", gap: 5 * fs, flex: 1, minHeight: 0 }}>
          {team.map((t, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 4 * fs, overflow: "hidden", position: "relative" }}>
              <img src={t.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 5%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: 4 * fs, left: 5 * fs, right: 5 * fs }}>
                <p style={{ fontSize: 6.5 * fs, color: "#FFF", fontWeight: 700 }}>{t.name}</p>
                <p style={{ fontSize: 5 * fs, color: "rgba(255,255,255,0.75)" }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA bar */}
      <div style={{ padding: `${7 * fs}px ${14 * fs}px`, display: "flex", alignItems: "center", justifyContent: "space-between", background: accent, flexShrink: 0 }}>
        <p style={{ fontSize: 7.5 * fs, color: "#FFF", fontWeight: 700 }}>Reserva tu consulta gratuita</p>
        <span style={{ fontSize: 8 * fs, color: "#FFF", fontWeight: 700 }}>→</span>
      </div>
    </div>
  );
}