import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import VisionSection from "@/components/landing/VisionSection";
import MetricsSection from "@/components/landing/MetricsSection";
import GaleriaPortfolio from "@/components/landing/GaleriaPortfolio";
import MoreProjectsSection from "@/components/landing/MoreProjectsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import WhySyntraSection from "@/components/landing/WhySyntraSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import PricingSection from "@/components/landing/PricingSection";
import EscaleraDigital from "@/components/landing/EscaleraDigital";
import ContactForm from "@/components/landing/ContactForm";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div style={{ background: "#0A0A0A", color: "#F5F5F5", minHeight: "100vh" }}>
      <Navbar />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Visión */}
      <VisionSection />

      {/* 3. Métricas de confianza */}
      <MetricsSection />

      {/* 4. Portfolio — 4 proyectos premium */}
      <GaleriaPortfolio />

      {/* 5. Más Proyectos — 6 mini demos */}
      <MoreProjectsSection />

      {/* 6. Escalera Digital */}
      <EscaleraDigital />

      {/* 7. Servicios */}
      <ServicesSection />

      {/* 8. Por qué Syntra */}
      <WhySyntraSection />

      {/* 9. Casos de uso */}
      <UseCasesSection />

      {/* 10. Planes */}
      <PricingSection />

      {/* 11. CTA Final */}
      <FinalCTASection />

      {/* 12. Formulario */}
      <ContactForm />

      <Footer />
    </div>
  );
}