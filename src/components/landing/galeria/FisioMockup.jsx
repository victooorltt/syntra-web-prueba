import React from "react";

export default function FisioMockup({ p, fs }) {
  const { accent, bg, heroImg, brand } = p;
  const txt = "#1A1A1A";
  const sub = "#6A6A6A";
  const bd = "rgba(0,0,0,0.07)";

  const services = [
    { title: "Fisioterapia", desc: "Rehabilitación", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&q=85" },
    { title: "Osteopatía", desc: "Terapia manual", img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=300&q=85" },
    { title: "Deporte", desc: "Rendimiento", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&q=85" },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&q=85",
    "https://images.unsplash.com/photo-1594824476967-48c8b964273a?w=200&q=85",
    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=200&q=85",
  ];

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: bg }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${9 * fs}px ${16 * fs}px`, borderBottom: `1px solid ${bd}`, background: "#FFF", flexShrink: 0 }}>
        <span style={{ fontSize: 11 * fs, fontWeight: 800, letterSpacing: "0.2em", color: txt, fontFamily: "var(--font-display)" }}>{brand}</span>
        <div style={{ display: "flex", gap: 12 * fs }}>
          {["Servicios", "Equipo", "Casos", "Reservar"].map((n, i) => (
            <span key={i} style={{ fontSize: 7 * fs, color: sub }}>{n}</span>
          ))}
        </div>
        <span style={{ fontSize: 7 * fs, padding: `${5 * fs}px ${11 * fs}px`, background: accent, color: "#FFF", borderRadius: 3 * fs, fontWeight: 700 }}>Reservar</span>
      </div>

      <div style={{ position: "relative", height: 100 * fs, overflow: "hidden", flexShrink: 0 }}>
        <img src={heroImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${bg}F5 5%, ${bg}99 35%, ${bg}40 100%)` }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 16 * fs, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 5 * fs, fontWeight: 600 }}>Centro de fisioterapia</p>
          <h1 style={{ fontSize: 16 * fs, fontWeight: 900, color: txt, lineHeight: 0.95, fontFamily: "var(--font-display)", marginBottom: 6 * fs }}>Muévete<br />Sin Dolor</h1>
          <span style={{ display: "inline-block", fontSize: 7 * fs, padding: `${5 * fs}px ${13 * fs}px`, background: accent, color: "#FFF", borderRadius: 3 * fs, fontWeight: 700 }}>Reservar Cita →</span>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", padding: `${6 * fs}px ${14 * fs}px`, background: "#FFF", borderBottom: `1px solid ${bd}`, flexShrink: 0 }}>
        {[["+10", "Años"], ["+5K", "Pacientes"], ["98%", "Recuperación"]].map(([v, l], i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <p style={{ fontSize: 8 * fs, fontWeight: 900, color: accent, fontFamily: "var(--font-display)" }}>{v}</p>
            <p style={{ fontSize: 5 * fs, color: sub, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 1 * fs }}>{l}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 5 * fs, padding: `${7 * fs}px ${14 * fs}px`, flexShrink: 0 }}>
        {services.map((s, i) => (
          <div key={i} style={{ flex: 1, borderRadius: 4 * fs, overflow: "hidden", border: `1px solid ${bd}`, background: "#FFF" }}>
            <div style={{ height: 26 * fs, overflow: "hidden" }}>
              <img src={s.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: `${3 * fs}px ${5 * fs}px` }}>
              <p style={{ fontSize: 7 * fs, color: txt, fontWeight: 700, marginBottom: 1 * fs }}>{s.title}</p>
              <p style={{ fontSize: 5.5 * fs, color: sub }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: `0 ${14 * fs}px ${7 * fs}px`, flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 * fs, fontWeight: 600 }}>Instalaciones</p>
        <div style={{ display: "flex", gap: 4 * fs, flex: 1, minHeight: 0 }}>
          {gallery.map((img, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 3 * fs, overflow: "hidden" }}>
              <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: `${7 * fs}px ${14 * fs}px`, display: "flex", alignItems: "center", justifyContent: "space-between", background: accent + "18", borderTop: `1px solid ${bd}`, flexShrink: 0 }}>
        <p style={{ fontSize: 7 * fs, color: accent, fontWeight: 700 }}>Primera consulta gratuita</p>
        <span style={{ fontSize: 8 * fs, color: accent, fontWeight: 700 }}>→</span>
      </div>
    </div>
  );
}