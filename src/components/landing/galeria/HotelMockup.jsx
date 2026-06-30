import React from "react";

export default function HotelMockup({ p, fs }) {
  const { accent, bg, heroImg, brand } = p;
  const txt = "#F5F5F5";
  const sub = "#8A8A8A";
  const bd = "rgba(255,255,255,0.06)";

  const rooms = [
    { name: "Suite Deluxe", price: "€290", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=300&q=85" },
    { name: "Premium", price: "€180", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&q=85" },
    { name: "Presidencial", price: "€450", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=300&q=85" },
  ];

  const amenities = [
    { name: "Spa", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200&q=85" },
    { name: "Piscina", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=200&q=85" },
    { name: "Gastronomía", img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=200&q=85" },
  ];

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: bg }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${9 * fs}px ${16 * fs}px`, borderBottom: `1px solid ${bd}`, flexShrink: 0 }}>
        <span style={{ fontSize: 11 * fs, fontWeight: 800, letterSpacing: "0.25em", color: txt, fontFamily: "var(--font-display)" }}>{brand}</span>
        <div style={{ display: "flex", gap: 12 * fs }}>
          {["Habitaciones", "Experiencias", "Galería", "Reservar"].map((n, i) => (
            <span key={i} style={{ fontSize: 7 * fs, color: sub }}>{n}</span>
          ))}
        </div>
        <span style={{ fontSize: 7 * fs, padding: `${5 * fs}px ${11 * fs}px`, background: accent, color: bg, borderRadius: 3 * fs, fontWeight: 700 }}>Reservar</span>
      </div>

      <div style={{ position: "relative", height: 105 * fs, overflow: "hidden", flexShrink: 0 }}>
        <img src={heroImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${bg} 5%, ${bg}50 50%, transparent)` }} />
        <div style={{ position: "absolute", bottom: 10 * fs, left: 16 * fs, right: 16 * fs }}>
          <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 5 * fs, fontWeight: 600 }}>Boutique Hotel · Mediterráneo</p>
          <h1 style={{ fontSize: 16 * fs, fontWeight: 900, color: txt, lineHeight: 0.95, fontFamily: "var(--font-display)" }}>Lujo en<br />Cada Detalle</h1>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", padding: `${6 * fs}px ${14 * fs}px`, borderTop: `1px solid ${bd}`, borderBottom: `1px solid ${bd}`, flexShrink: 0 }}>
        {[["5★", "Categoría"], ["24", "Suites"], ["100%", "Ocupación"]].map(([v, l], i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <p style={{ fontSize: 8 * fs, fontWeight: 900, color: accent, fontFamily: "var(--font-display)" }}>{v}</p>
            <p style={{ fontSize: 5 * fs, color: sub, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 1 * fs }}>{l}</p>
          </div>
        ))}
      </div>

      <div style={{ padding: `${7 * fs}px ${14 * fs}px`, flexShrink: 0 }}>
        <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 * fs, fontWeight: 600 }}>Habitaciones</p>
        <div style={{ display: "flex", gap: 5 * fs }}>
          {rooms.map((r, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 4 * fs, overflow: "hidden", position: "relative", height: 30 * fs }}>
              <img src={r.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${bg}F0 8%, transparent 55%)` }} />
              <div style={{ position: "absolute", bottom: 4 * fs, left: 5 * fs, right: 5 * fs }}>
                <p style={{ fontSize: 6.5 * fs, color: txt, fontWeight: 700, marginBottom: 1 * fs }}>{r.name}</p>
                <p style={{ fontSize: 7 * fs, color: accent, fontWeight: 800, fontFamily: "var(--font-display)" }}>{r.price}<span style={{ fontSize: 5 * fs, color: sub }}> /noche</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: `0 ${14 * fs}px ${7 * fs}px`, flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 * fs, fontWeight: 600 }}>Experiencias</p>
        <div style={{ display: "flex", gap: 4 * fs, flex: 1, minHeight: 0 }}>
          {amenities.map((a, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 3 * fs, overflow: "hidden", position: "relative" }}>
              <img src={a.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 5%, transparent 50%)" }} />
              <p style={{ position: "absolute", bottom: 3 * fs, left: 5 * fs, fontSize: 6 * fs, color: "#FFF", fontWeight: 700 }}>{a.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: `${7 * fs}px ${14 * fs}px`, display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${bd}`, flexShrink: 0 }}>
        <div>
          <p style={{ fontSize: 7 * fs, color: txt, fontWeight: 700 }}>Reserva tu estancia</p>
          <p style={{ fontSize: 5.5 * fs, color: sub }}>Cancelación gratuita</p>
        </div>
        <span style={{ fontSize: 7 * fs, padding: `${5 * fs}px ${12 * fs}px`, background: accent, color: bg, borderRadius: 3 * fs, fontWeight: 700 }}>Reservar →</span>
      </div>
    </div>
  );
}