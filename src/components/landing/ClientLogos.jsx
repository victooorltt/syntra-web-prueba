import React from "react";
import { motion } from "framer-motion";
import {
  Building2, Heart, Dumbbell, UtensilsCrossed, Sparkles, ShoppingBag,
  Stethoscope, Car, GraduationCap, Hotel, Home, Scissors
} from "lucide-react";

const clients = [
  { name: "NovaClin", sector: "Clínica Estética", Icon: Sparkles },
  { name: "EstatePro", sector: "Inmobiliaria", Icon: Building2 },
  { name: "DentaMax", sector: "Clínica Dental", Icon: Stethoscope },
  { name: "FitZone360", sector: "Centro Fitness", Icon: Dumbbell },
  { name: "Trattoria Roma", sector: "Restauración", Icon: UtensilsCrossed },
  { name: "LumièreSpa", sector: "Spa & Bienestar", Icon: Heart },
  { name: "UrbanRealty", sector: "Real Estate", Icon: Home },
  { name: "GlowStudio", sector: "Peluquería", Icon: Scissors },
  { name: "RetailHub", sector: "Retail & Moda", Icon: ShoppingBag },
  { name: "AutoPremium", sector: "Concesionario", Icon: Car },
  { name: "EduNext", sector: "Academia Online", Icon: GraduationCap },
  { name: "HotelLuxe", sector: "Hostelería", Icon: Hotel },
];

function LogoItem({ name, sector, Icon }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-6 py-3 mx-2 rounded-xl border border-primary/10 bg-card/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group cursor-default">
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
        <Icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
      </div>
      <div>
        <p className="text-sm font-display font-bold text-foreground/80 group-hover:text-foreground transition-colors whitespace-nowrap">
          {name}
        </p>
        <p className="text-[10px] text-muted-foreground whitespace-nowrap">{sector}</p>
      </div>
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section className="relative py-14 overflow-hidden">
      {/* Top & bottom fade lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(207_100%_55%_/_0.04)_0%,_transparent_70%)]" />

      {/* Left & right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
          Sectores que ya confían en{" "}
          <span className="text-primary">Syntra Labs</span>
        </p>
      </div>

      {/* Row 1 — left to right */}
      <div className="flex overflow-hidden mb-3">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...clients, ...clients].map((client, i) => (
            <LogoItem key={i} name={client.name} sector={client.sector} Icon={client.Icon} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 — right to left (reversed) */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, i) => (
            <LogoItem key={i} name={client.name} sector={client.sector} Icon={client.Icon} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}