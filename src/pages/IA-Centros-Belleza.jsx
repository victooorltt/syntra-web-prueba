import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const problems = [
  "Mensajes de Instagram y WhatsApp sin responder mientras se atiende a clientes",
  "Reservas gestionadas manualmente generando errores y confusiones",
  "Clientes que no reciben recordatorios y olvidan su cita",
  "Sin fidelización automática entre visitas",
  "Pérdida de clientes por no poder atender en horario de cierre",
];
const solutions = [
  { title: "Respuesta automática multicanal", desc: "Atiende DMs de Instagram, mensajes de WhatsApp y formularios web al instante. 24 horas, 7 días a la semana." },
  { title: "Sistema de reservas IA", desc: "El cliente elige profesional, servicio y hora directamente por WhatsApp sin llamar. Sincronizado con tu agenda en tiempo real." },
  { title: "Recordatorios personalizados", desc: "Mensaje automático 24h antes con nombre del cliente, servicio y profesional asignado. Reducción garantizada de no-shows." },
  { title: "Reactivación y fidelización", desc: "Campaña automática a clientes que no han visitado en 30, 60 o 90 días con ofertas personalizadas según su historial." },
];
const results = [
  { value: "+50%", label: "Reservas digitales" },
  { value: "0", label: "Llamadas perdidas" },
  { value: "+35%", label: "Retención clientes" },
  { value: "24/7", label: "Disponibilidad" },
];

export default function IACentrosBelleza() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-32">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-sm font-bold text-primary uppercase tracking-widest">IA para centros de belleza</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black mt-4 mb-6 leading-tight tracking-tight">
                Inteligencia Artificial para{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Centros de Belleza</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Llena tu agenda sin interrupciones, automatiza las reservas y fideliza a tus clientes de forma inteligente.
              </p>
              <Link to="/#contacto">
                <Button size="lg" className="font-black rounded-full px-10 h-14 shadow-xl shadow-primary/30 uppercase tracking-wide text-sm bg-primary text-primary-foreground hover:bg-primary/90">
                  Reservar Auditoría Gratuita <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
        <section className="py-12 bg-card/30 border-y border-border/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {results.map((r, i) => (<div key={i}><p className="text-3xl sm:text-4xl font-display font-black text-primary">{r.value}</p><p className="text-sm text-muted-foreground mt-1">{r.label}</p></div>))}
          </div>
        </section>
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-display font-black">Problemas que <span className="text-rose-400">frenan tu negocio</span></h2></div>
          <div className="grid gap-4 max-w-2xl mx-auto">
            {problems.map((p, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-rose-500/5 border border-rose-500/15"><AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" /><p className="text-muted-foreground">{p}</p></div>))}
          </div>
        </section>
        <section className="py-20 bg-card/20 border-y border-border/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12"><h2 className="text-3xl font-display font-black">Lo que <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">automatizamos</span></h2></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solutions.map((s, i) => (<div key={i} className="p-6 rounded-3xl bg-card/60 border border-primary/20 hover:border-primary/40 transition-all"><CheckCircle className="w-6 h-6 text-primary mb-3" /><h3 className="font-display font-bold text-lg mb-2">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></div>))}
            </div>
          </div>
        </section>
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-display font-black mb-4">Más reservas. Menos interrupciones.</h2>
            <p className="text-muted-foreground mb-8">Auditoría estratégica gratuita. Sin compromiso. Respuesta en 24h.</p>
            <Link to="/#contacto"><Button size="lg" className="font-black rounded-full px-10 h-14 shadow-xl shadow-primary/30 uppercase tracking-wide bg-primary text-primary-foreground hover:bg-primary/90">Solicitar Auditoría Gratuita <ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}