import React from "react";

export default function RestauranteMockup({ p, fs }) {
  const { accent, bg, heroImg, brand } = p;
  const txt = "#F5F5F5";
  const sub = "#7A7A7A";
  const bd = "rgba(255,255,255,0.06)";

  const dishes = [
    { name: "Tartar de Atún", price: "€28", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&q=85" },
    { name: "Risotto Trufa", price: "€24", img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&q=85" },
    { name: "Bacalao", price: "€32", img: "https://images.unsplash.com/photo-1600891964599-f61baedd1c4e?w=300&q=85" },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&q=85",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&q=85",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&q=85",
  ];

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: bg }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${9 * fs}px ${16 * fs}px`, borderBottom: `1px solid ${bd}`, flexShrink: 0 }}>
        <span style={{ fontSize: 11 * fs, fontWeight: 800, letterSpacing: "0.25em", color: txt, fontFamily: "var(--font-display)" }}>{brand}</span>
        <div style={{ display: "flex", gap: 12 * fs }}>
          {["Carta", "Eventos", "Galería", "Reservar"].map((n, i) => (
            <span key={i} style={{ fontSize: 7 * fs, color: sub }}>{n}</span>
          ))}
        </div>
        <span style={{ fontSize: 7 * fs, padding: `${5 * fs}px ${11 * fs}px`, background: accent, color: bg, borderRadius: 3 * fs, fontWeight: 700 }}>Reservar</span>
      </div>

      <div style={{ position: "relative", height: 100 * fs, overflow: "hidden", flexShrink: 0 }}>
        <img src={heroImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${bg} 2%, ${bg}55 45%, ${bg}30 100%)` }} />
        <div style={{ position: "absolute", bottom: 10 * fs, left: 16 * fs, right: 16 * fs }}>
          <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 4 * fs, fontWeight: 600 }}>Gastronomía de autor · Madrid</p>
          <h1 style={{ fontSize: 16 * fs, fontWeight: 900, color: txt, lineHeight: 0.95, fontFamily: "var(--font-display)", marginBottom: 5 * fs }}>Cocina<br />Con Alma</h1>
          <span style={{ display: "inline-block", fontSize: 7 * fs, padding: `${5 * fs}px ${13 * fs}px`, background: accent, color: bg, borderRadius: 3 * fs, fontWeight: 700 }}>Ver Carta →</span>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", padding: `${6 * fs}px ${14 * fs}px`, borderTop: `1px solid ${bd}`, borderBottom: `1px solid ${bd}`, flexShrink: 0 }}>
        {[["★", "Michelin"], ["+50K", "Comensales"], ["100%", "Productos locales"]].map(([v, l], i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <p style={{ fontSize: 8 * fs, fontWeight: 900, color: accent, fontFamily: "var(--font-display)" }}>{v}</p>
            <p style={{ fontSize: 5 * fs, color: sub, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 1 * fs }}>{l}</p>
          </div>
        ))}
      </div>

      <div style={{ padding: `${7 * fs}px ${14 * fs}px`, flexShrink: 0 }}>
        <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 * fs, fontWeight: 600 }}>Especialidades</p>
        <div style={{ display: "flex", gap: 5 * fs }}>
          {dishes.map((d, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 4 * fs, overflow: "hidden", position: "relative", height: 28 * fs }}>
              <img src={d.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${bg}F0 8%, transparent 55%)` }} />
              <div style={{ position: "absolute", bottom: 4 * fs, left: 5 * fs, right: 5 * fs }}>
                <p style={{ fontSize: 6.5 * fs, color: txt, fontWeight: 700, marginBottom: 1 * fs }}>{d.name}</p>
                <p style={{ fontSize: 7 * fs, color: accent, fontWeight: 800, fontFamily: "var(--font-display)" }}>{d.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: `0 ${14 * fs}px ${7 * fs}px`, flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 * fs, fontWeight: 600 }}>Ambiente</p>
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
          <p style={{ fontSize: 7 * fs, color: txt, fontWeight: 700 }}>Reserva tu mesa</p>
          <p style={{ fontSize: 5.5 * fs, color: sub }}>Martes a Domingo</p>
        </div>
        <span style={{ fontSize: 7 * fs, padding: `${5 * fs}px ${12 * fs}px`, background: accent, color: bg, borderRadius: 3 * fs, fontWeight: 700 }}>Reservar →</span>
      </div>
    </div>
  );
}