import React from "react";

export default function AbogadosMockup({ p, fs }) {
  const { accent, bg, heroImg, brand } = p;
  const txt = "#F5F5F5";
  const sub = "#7A7A7A";
  const bd = "rgba(255,255,255,0.06)";

  const areas = [
    { name: "Mercantil", desc: "Asesoría corporativa", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=85" },
    { name: "Penal", desc: "Defensa penal", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&q=85" },
    { name: "Fiscal", desc: "Planificación tributaria", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=85" },
  ];

  const team = [
    { name: "D. Herrera", role: "Socio Fundador", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=85" },
    { name: "Dña. Vidal", role: "Socia Directora", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=85" },
    { name: "D. Castro", role: "Abogado Senior", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=85" },
  ];

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: bg }}>
      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${9 * fs}px ${16 * fs}px`, borderBottom: `1px solid ${bd}`, flexShrink: 0 }}>
        <span style={{ fontSize: 11 * fs, fontWeight: 800, letterSpacing: "0.22em", color: txt, fontFamily: "var(--font-display)" }}>{brand}</span>
        <div style={{ display: "flex", gap: 12 * fs }}>
          {["Áreas", "Equipo", "Casos", "Contacto"].map((n, i) => (
            <span key={i} style={{ fontSize: 7 * fs, color: sub }}>{n}</span>
          ))}
        </div>
        <span style={{ fontSize: 7 * fs, padding: `${5 * fs}px ${11 * fs}px`, border: `1px solid ${accent}50`, color: accent, borderRadius: 3 * fs, fontWeight: 600 }}>Consultar</span>
      </div>

      {/* Hero */}
      <div style={{ position: "relative", height: 120 * fs, overflow: "hidden", flexShrink: 0 }}>
        <img src={heroImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${bg}F8 8%, ${bg}99 38%, ${bg}40 100%)` }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 16 * fs, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 6 * fs, fontWeight: 600 }}>Bufete de élite · Madrid</p>
          <h1 style={{ fontSize: 19 * fs, fontWeight: 900, color: txt, lineHeight: 0.92, fontFamily: "var(--font-display)", marginBottom: 6 * fs }}>Autoridad.<br />Resultados.</h1>
          <p style={{ fontSize: 6.5 * fs, color: sub, maxWidth: 160 * fs, lineHeight: 1.5, marginBottom: 8 * fs }}>Más de 15 años defendiendo los intereses de nuestros clientes.</p>
          <span style={{ display: "inline-block", fontSize: 7 * fs, padding: `${5 * fs}px ${13 * fs}px`, background: accent, color: bg, borderRadius: 3 * fs, fontWeight: 700 }}>Hablar con un abogado</span>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: `${7 * fs}px ${14 * fs}px`, borderTop: `1px solid ${bd}`, borderBottom: `1px solid ${bd}`, flexShrink: 0 }}>
        {[["+500", "Casos ganados"], ["98%", "Éxito"], ["15", "Años"], ["€200M", "Recuperado"]].map(([v, l], i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <p style={{ fontSize: 9 * fs, fontWeight: 900, color: accent, fontFamily: "var(--font-display)" }}>{v}</p>
            <p style={{ fontSize: 5 * fs, color: sub, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 1 * fs }}>{l}</p>
          </div>
        ))}
      </div>

      {/* Practice areas */}
      <div style={{ padding: `${8 * fs}px ${14 * fs}px`, flexShrink: 0 }}>
        <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 5 * fs, fontWeight: 600 }}>Áreas de práctica</p>
        <div style={{ display: "flex", gap: 5 * fs }}>
          {areas.map((a, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 4 * fs, overflow: "hidden", position: "relative", height: 34 * fs }}>
              <img src={a.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 5%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: 4 * fs, left: 5 * fs, right: 5 * fs }}>
                <p style={{ fontSize: 6.5 * fs, color: "#FFF", fontWeight: 700, marginBottom: 1 * fs }}>{a.name}</p>
                <p style={{ fontSize: 5 * fs, color: "rgba(255,255,255,0.65)" }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div style={{ padding: `0 ${14 * fs}px ${8 * fs}px`, flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 5 * fs, fontWeight: 600 }}>Nuestro equipo</p>
        <div style={{ display: "flex", gap: 5 * fs, flex: 1, minHeight: 0 }}>
          {team.map((t, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 4 * fs, overflow: "hidden", position: "relative" }}>
              <img src={t.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 5%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: 4 * fs, left: 5 * fs, right: 5 * fs }}>
                <p style={{ fontSize: 6.5 * fs, color: "#FFF", fontWeight: 700 }}>{t.name}</p>
                <p style={{ fontSize: 5 * fs, color: "rgba(255,255,255,0.65)" }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA bar */}
      <div style={{ padding: `${7 * fs}px ${14 * fs}px`, display: "flex", alignItems: "center", justifyContent: "space-between", background: accent + "12", borderTop: `1px solid ${bd}`, flexShrink: 0 }}>
        <p style={{ fontSize: 7 * fs, color: accent, fontWeight: 700 }}>Primera consulta gratuita</p>
        <span style={{ fontSize: 8 * fs, color: accent, fontWeight: 700 }}>→</span>
      </div>
    </div>
  );
}