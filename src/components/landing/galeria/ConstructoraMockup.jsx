import React from "react";

export default function ConstructoraMockup({ p, fs }) {
  const { accent, bg, heroImg, brand } = p;
  const txt = "#F5F5F5";
  const sub = "#8A8A8A";
  const bd = "rgba(255,255,255,0.06)";

  const developments = [
    { name: "Las Lomas", status: "En venta", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&q=85" },
    { name: "El Olivar", status: "Próximamente", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=300&q=85" },
    { name: "La Finca", status: "En venta", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&q=85" },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=85",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200&q=85",
    "https://images.unsplash.com/photo-1503387766700-7b223e03306f?w=200&q=85",
  ];

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: bg }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${9 * fs}px ${16 * fs}px`, borderBottom: `1px solid ${bd}`, flexShrink: 0 }}>
        <span style={{ fontSize: 11 * fs, fontWeight: 800, letterSpacing: "0.25em", color: txt, fontFamily: "var(--font-display)" }}>{brand}</span>
        <div style={{ display: "flex", gap: 12 * fs }}>
          {["Promociones", "Empresa", "Galería", "Contacto"].map((n, i) => (
            <span key={i} style={{ fontSize: 7 * fs, color: sub }}>{n}</span>
          ))}
        </div>
        <span style={{ fontSize: 7 * fs, padding: `${5 * fs}px ${11 * fs}px`, background: accent, color: bg, borderRadius: 3 * fs, fontWeight: 700 }}>Contactar</span>
      </div>

      <div style={{ position: "relative", height: 100 * fs, overflow: "hidden", flexShrink: 0 }}>
        <img src={heroImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${bg} 5%, ${bg}40 60%, transparent)` }} />
        <div style={{ position: "absolute", bottom: 10 * fs, left: 16 * fs }}>
          <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 4 * fs, fontWeight: 600 }}>Construcción y Promoción</p>
          <h1 style={{ fontSize: 16 * fs, fontWeight: 900, color: txt, lineHeight: 0.95, fontFamily: "var(--font-display)" }}>Tu Hogar<br />Perfecto</h1>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", padding: `${6 * fs}px ${14 * fs}px`, borderTop: `1px solid ${bd}`, borderBottom: `1px solid ${bd}`, flexShrink: 0 }}>
        {[["+30", "Promociones"], ["25", "Años"], ["500+", "Viviendas"]].map(([v, l], i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <p style={{ fontSize: 8 * fs, fontWeight: 900, color: accent, fontFamily: "var(--font-display)" }}>{v}</p>
            <p style={{ fontSize: 5 * fs, color: sub, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 1 * fs }}>{l}</p>
          </div>
        ))}
      </div>

      <div style={{ padding: `${7 * fs}px ${14 * fs}px`, flexShrink: 0 }}>
        <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 * fs, fontWeight: 600 }}>Promociones</p>
        <div style={{ display: "flex", gap: 5 * fs }}>
          {developments.map((d, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 4 * fs, overflow: "hidden", position: "relative", height: 28 * fs }}>
              <img src={d.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${bg}F0 8%, transparent 55%)` }} />
              <div style={{ position: "absolute", top: 4 * fs, right: 4 * fs }}>
                <span style={{ fontSize: 5 * fs, padding: `${2 * fs}px ${5 * fs}px`, background: accent + "30", color: accent, borderRadius: 2 * fs, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>{d.status}</span>
              </div>
              <div style={{ position: "absolute", bottom: 4 * fs, left: 5 * fs, right: 5 * fs }}>
                <p style={{ fontSize: 6.5 * fs, color: txt, fontWeight: 700 }}>{d.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: `0 ${14 * fs}px ${7 * fs}px`, flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 * fs, fontWeight: 600 }}>Obras</p>
        <div style={{ display: "flex", gap: 4 * fs, flex: 1, minHeight: 0 }}>
          {gallery.map((img, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 3 * fs, overflow: "hidden" }}>
              <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: `${7 * fs}px ${14 * fs}px`, display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${bd}`, flexShrink: 0 }}>
        <div>
          <p style={{ fontSize: 7 * fs, color: txt, fontWeight: 700 }}>Solicita información</p>
          <p style={{ fontSize: 5.5 * fs, color: sub }}>Visitas guiadas</p>
        </div>
        <span style={{ fontSize: 7 * fs, padding: `${5 * fs}px ${12 * fs}px`, background: accent, color: bg, borderRadius: 3 * fs, fontWeight: 700 }}>Contactar →</span>
      </div>
    </div>
  );
}