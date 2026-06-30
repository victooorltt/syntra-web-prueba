import React from "react";

export default function InmobiliariaMockup({ p, fs }) {
  const { accent, bg, heroImg, brand } = p;
  const txt = "#F5F5F5";
  const sub = "#7A7A7A";
  const bd = "rgba(255,255,255,0.06)";

  const properties = [
    { name: "Villa Mediterránea", loc: "Marbella · 5 hab", price: "€4.2M", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=85" },
    { name: "Penthouse Costa", loc: "Barcelona · 3 hab", price: "€2.8M", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=85" },
    { name: "Finca Sotogrande", loc: "Cádiz · 7 hab", price: "€6.5M", img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=85" },
  ];

  const services = [
    { name: "Villas", img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=300&q=85" },
    { name: "Yates", img: "https://images.unsplash.com/photo-1564999377935-4e3a2d3d8f55?w=300&q=85" },
    { name: "Jets", img: "https://images.unsplash.com/photo-1540962351504-03099e0a7545?w=300&q=85" },
  ];

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: bg }}>
      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${9 * fs}px ${16 * fs}px`, borderBottom: `1px solid ${bd}`, flexShrink: 0 }}>
        <span style={{ fontSize: 11 * fs, fontWeight: 800, letterSpacing: "0.2em", color: txt, fontFamily: "var(--font-display)" }}>{brand}</span>
        <div style={{ display: "flex", gap: 12 * fs }}>
          {["Propiedades", "Villas", "Yates", "Jets", "Concierge"].map((n, i) => (
            <span key={i} style={{ fontSize: 7 * fs, color: sub }}>{n}</span>
          ))}
        </div>
        <span style={{ fontSize: 7 * fs, padding: `${5 * fs}px ${11 * fs}px`, background: accent, color: bg, borderRadius: 3 * fs, fontWeight: 700 }}>Contactar</span>
      </div>

      {/* Hero */}
      <div style={{ position: "relative", height: 115 * fs, overflow: "hidden", flexShrink: 0 }}>
        <img src={heroImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${bg} 2%, ${bg}55 45%, ${bg}30 100%)` }} />
        <div style={{ position: "absolute", bottom: 10 * fs, left: 16 * fs, right: 16 * fs }}>
          <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 5 * fs, fontWeight: 600 }}>Villas exclusivas</p>
          <h1 style={{ fontSize: 18 * fs, fontWeight: 900, color: txt, lineHeight: 0.95, fontFamily: "var(--font-display)", marginBottom: 6 * fs }}>Propiedades<br />Excepcionales</h1>
          <span style={{ display: "inline-block", fontSize: 7 * fs, padding: `${5 * fs}px ${13 * fs}px`, background: accent, color: bg, borderRadius: 3 * fs, fontWeight: 700 }}>Descubrir →</span>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: `${7 * fs}px ${14 * fs}px`, borderTop: `1px solid ${bd}`, borderBottom: `1px solid ${bd}`, flexShrink: 0 }}>
        {[["€2.5B", "En ventas"], ["180", "Propiedades"], ["25", "Años"], ["12", "Países"]].map(([v, l], i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <p style={{ fontSize: 9 * fs, fontWeight: 900, color: accent, fontFamily: "var(--font-display)" }}>{v}</p>
            <p style={{ fontSize: 5 * fs, color: sub, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 1 * fs }}>{l}</p>
          </div>
        ))}
      </div>

      {/* Featured properties */}
      <div style={{ padding: `${8 * fs}px ${14 * fs}px`, flexShrink: 0 }}>
        <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 5 * fs, fontWeight: 600 }}>Propiedades destacadas</p>
        <div style={{ display: "flex", gap: 5 * fs }}>
          {properties.map((prop, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 4 * fs, overflow: "hidden", position: "relative", height: 44 * fs }}>
              <img src={prop.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${bg}F0 8%, transparent 55%)` }} />
              <div style={{ position: "absolute", bottom: 4 * fs, left: 5 * fs, right: 5 * fs }}>
                <p style={{ fontSize: 6.5 * fs, color: txt, fontWeight: 700, marginBottom: 1 * fs }}>{prop.name}</p>
                <p style={{ fontSize: 5 * fs, color: sub, marginBottom: 2 * fs }}>{prop.loc}</p>
                <p style={{ fontSize: 7 * fs, color: accent, fontWeight: 800, fontFamily: "var(--font-display)" }}>{prop.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services: Villas / Yates / Jets */}
      <div style={{ padding: `${0}px ${14 * fs}px ${8 * fs}px`, flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: 5.5 * fs, color: accent, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 5 * fs, fontWeight: 600 }}>Servicios exclusivos</p>
        <div style={{ display: "flex", gap: 5 * fs, flex: 1, minHeight: 0 }}>
          {services.map((s, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 4 * fs, overflow: "hidden", position: "relative" }}>
              <img src={s.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 5%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: 4 * fs, left: 5 * fs }}>
                <p style={{ fontSize: 7 * fs, color: "#FFF", fontWeight: 700 }}>{s.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA bar */}
      <div style={{ padding: `${7 * fs}px ${14 * fs}px`, display: "flex", alignItems: "center", justifyContent: "center", background: accent + "18", borderTop: `1px solid ${bd}`, flexShrink: 0 }}>
        <p style={{ fontSize: 7 * fs, color: accent, fontWeight: 700 }}>Concierge 24/7 · Contacto exclusivo →</p>
      </div>
    </div>
  );
}