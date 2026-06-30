import React from "react";
import InmobiliariaMockup from "./InmobiliariaMockup";
import ClinicaMockup from "./ClinicaMockup";
import AbogadosMockup from "./AbogadosMockup";
import FisioMockup from "./FisioMockup";
import RestauranteMockup from "./RestauranteMockup";
import CorporativaMockup from "./CorporativaMockup";
import ArquitecturaMockup from "./ArquitecturaMockup";
import HotelMockup from "./HotelMockup";
import InteriorismoMockup from "./InteriorismoMockup";
import ConstructoraMockup from "./ConstructoraMockup";

export default function SiteMockup({ p, mini = false }) {
  const fs = mini ? 0.62 : 1;
  const light = p.light;
  const chromeBg = light ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.03)";
  const chromeBorder = light ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)";
  const urlBarBg = light ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.05)";
  const urlColor = light ? "#888" : "#666";

  const renderSite = () => {
    switch (p.id) {
      case "inmobiliaria": return <InmobiliariaMockup p={p} fs={fs} />;
      case "clinica": return <ClinicaMockup p={p} fs={fs} />;
      case "abogados": return <AbogadosMockup p={p} fs={fs} />;
      case "fisioterapia": return <FisioMockup p={p} fs={fs} />;
      case "restaurante": return <RestauranteMockup p={p} fs={fs} />;
      case "corporativa": return <CorporativaMockup p={p} fs={fs} />;
      case "arquitectura": return <ArquitecturaMockup p={p} fs={fs} />;
      case "hotel": return <HotelMockup p={p} fs={fs} />;
      case "interiorismo": return <InteriorismoMockup p={p} fs={fs} />;
      case "constructora": return <ConstructoraMockup p={p} fs={fs} />;
      default: return <InmobiliariaMockup p={p} fs={fs} />;
    }
  };

  const url = p.brand
    ? `www.${p.brand.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`
    : "www.example.com";

  return (
    <div style={{
      width: "100%", height: "100%",
      display: "flex", flexDirection: "column",
      background: p.bg, overflow: "hidden",
      fontFamily: "var(--font-body)",
    }}>
      {/* Browser chrome */}
      <div style={{
        background: chromeBg,
        padding: `${7 * fs}px ${12 * fs}px`,
        display: "flex", alignItems: "center", gap: 7 * fs,
        borderBottom: `1px solid ${chromeBorder}`,
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", gap: 5 * fs }}>
          {["#FF5F57", "#FFBD2E", "#28CA41"].map((c, i) => (
            <div key={i} style={{ width: 6 * fs, height: 6 * fs, borderRadius: "50%", background: c, opacity: 0.7 }} />
          ))}
        </div>
        <div style={{
          flex: 1, height: 18 * fs,
          background: urlBarBg, borderRadius: 4 * fs,
          marginLeft: 8 * fs,
          display: "flex", alignItems: "center", gap: 5 * fs,
          paddingLeft: 9 * fs,
        }}>
          <svg width={6 * fs} height={6 * fs} viewBox="0 0 24 24" fill="none" stroke={urlColor} strokeWidth="2.5" style={{ opacity: 0.5, flexShrink: 0 }}>
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          <span style={{ fontSize: 6 * fs, color: urlColor, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {url}
          </span>
        </div>
      </div>

      {renderSite()}
    </div>
  );
}