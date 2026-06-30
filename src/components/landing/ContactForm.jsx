import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { fadeUp, slideLeft, slideRight } from "@/lib/animations";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", nombre_negocio: "", presupuesto: "", mensaje: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.ContactLead.create(form);
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #1C1C1C",
    borderRadius: "0",
    color: "#F5F5F5",
    fontSize: "15px",
    padding: "14px 0",
    width: "100%",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.3s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "10px",
    fontWeight: "500",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#4A4A4A",
    marginBottom: "4px",
  };

  return (
    <section
      id="contacto"
      className="relative py-14 sm:py-20 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #1C1C1C, transparent)" }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div {...fadeUp} className="mb-12">
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-6" style={{ color: "#4A4A4A" }}>
            Propuesta Gratuita
          </p>
          <h2
            className="font-display font-black tracking-tight leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#F5F5F5" }}
          >
            Hablemos de
            <br />
            <span style={{ color: "#4A4A4A" }}>tu proyecto.</span>
          </h2>
          <p className="text-sm mt-6 max-w-md" style={{ color: "#6A6A6A" }}>
            Cuéntanos qué necesitas y prepararemos una propuesta personalizada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Left — info */}
          <motion.div
            {...slideLeft}
            className="lg:col-span-2 space-y-10"
          >
            <img
              src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/5c704cbc2_423A3B0A-6F13-442D-8EC4-138FD084C212.png"
              alt="Syntra Labs"
              className="h-12 w-auto object-contain mb-2"
              style={{ opacity: 0.5 }}
            />
            <div>
              <p className="text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                Cuéntanos cómo funciona tu empresa. Diseñaremos una solución a medida para ayudarte a crecer.
              </p>
            </div>
            <div className="space-y-5">
              <a href="mailto:info@syntralabs.es" className="flex items-center gap-4 group transition-colors duration-300" style={{ color: "#4A4A4A" }}
                 onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"}
                 onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>
                <Mail className="w-4 h-4 shrink-0" />
                <span className="text-sm">info@syntralabs.es</span>
              </a>
              <a href="tel:+34668515994" className="flex items-center gap-4 group transition-colors duration-300" style={{ color: "#4A4A4A" }}
                 onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"}
                 onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>
                <Phone className="w-4 h-4 shrink-0" />
                <span className="text-sm">+34 668 51 59 94</span>
              </a>
              <div className="flex items-start gap-4" style={{ color: "#4A4A4A" }}>
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="text-sm">Calle Serrano 19 · 28001 Madrid</span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            {...slideRight}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="py-20 text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-6" style={{ color: "#BDBDBD" }} />
                <h3 className="text-2xl font-display font-bold mb-3" style={{ color: "#F5F5F5" }}>Solicitud recibida.</h3>
                <p className="text-sm" style={{ color: "#4A4A4A" }}>
                  Nos pondremos en contacto en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label style={labelStyle}>Nombre *</label>
                    <input name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Tu nombre"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = "#4A4A4A"}
                      onBlur={e => e.target.style.borderBottomColor = "#1C1C1C"}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Empresa *</label>
                    <input name="nombre_negocio" value={form.nombre_negocio} onChange={handleChange} required placeholder="Nombre de tu empresa"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = "#4A4A4A"}
                      onBlur={e => e.target.style.borderBottomColor = "#1C1C1C"}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="tu@empresa.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = "#4A4A4A"}
                      onBlur={e => e.target.style.borderBottomColor = "#1C1C1C"}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Teléfono *</label>
                    <input name="telefono" type="tel" value={form.telefono} onChange={handleChange} required placeholder="+34 600 000 000"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = "#4A4A4A"}
                      onBlur={e => e.target.style.borderBottomColor = "#1C1C1C"}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Presupuesto estimado</label>
                  <select name="presupuesto" value={form.presupuesto} onChange={handleChange}
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                    onFocus={e => e.target.style.borderBottomColor = "#4A4A4A"}
                    onBlur={e => e.target.style.borderBottomColor = "#1C1C1C"}
                  >
                    <option value="" style={{ background: "#0A0A0A", color: "#6A6A6A" }}>Selecciona un rango</option>
                    <option value="495-995" style={{ background: "#0A0A0A", color: "#F5F5F5" }}>495€ – 995€</option>
                    <option value="995-1995" style={{ background: "#0A0A0A", color: "#F5F5F5" }}>995€ – 1.995€</option>
                    <option value="2000-5000" style={{ background: "#0A0A0A", color: "#F5F5F5" }}>2.000€ – 5.000€</option>
                    <option value="5000+" style={{ background: "#0A0A0A", color: "#F5F5F5" }}>Más de 5.000€</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Qué necesitas</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange} rows={3} placeholder="Cuéntanos qué tipo de web, automatización o sistema necesitas..."
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => e.target.style.borderBottomColor = "#4A4A4A"}
                    onBlur={e => e.target.style.borderBottomColor = "#1C1C1C"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-3 px-9 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300"
                  style={{
                    background: "#F5F5F5",
                    color: "#0A0A0A",
                    borderRadius: "4px",
                    letterSpacing: "0.12em",
                    opacity: loading ? 0.6 : 1,
                  }}
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>Solicitar Propuesta <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>

                <p className="text-xs tracking-widest" style={{ color: "#2A2A2A" }}>
                  SIN COMPROMISO · RESPUESTA EN MENOS DE 24H
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}