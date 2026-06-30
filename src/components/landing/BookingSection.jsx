import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { ArrowRight, ArrowLeft, Loader2, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const DAYS_ES = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const MONTHS_ES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

function formatDate(isoDate) {
  const d = new Date(isoDate + "T12:00:00");
  return `${DAYS_ES[d.getDay()]} ${d.getDate()} ${MONTHS_ES[d.getMonth()]}`;
}

function formatTime(isoTime) {
  const d = new Date(isoTime);
  return d.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Madrid" });
}

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

export default function BookingSection() {
  const [step, setStep] = useState(1); // 1: date, 2: slot, 3: form, 4: done
  const [availableDays, setAvailableDays] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(true);
  const [slotsError, setSlotsError] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [dayOffset, setDayOffset] = useState(0);
  const DAYS_PER_PAGE = 5;

  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", nombre_negocio: "" });
  const [booking, setBooking] = useState(false);
  const [bookingError, setBookingError] = useState(null);

  useEffect(() => {
    base44.functions.invoke("getCalendarSlots", {})
      .then(res => {
        setAvailableDays(res.data.availableDays || []);
        setLoadingSlots(false);
      })
      .catch(() => {
        setSlotsError("No se pudo cargar la disponibilidad. Inténtalo más tarde.");
        setLoadingSlots(false);
      });
  }, []);

  const visibleDays = availableDays.slice(dayOffset, dayOffset + DAYS_PER_PAGE);

  const handleSelectDay = (day) => {
    setSelectedDay(day);
    setSelectedSlot(null);
    setStep(2);
  };

  const handleSelectSlot = (slot) => {
    setSelectedSlot(slot);
    setStep(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBooking(true);
    setBookingError(null);
    try {
      await base44.functions.invoke("bookCalendarSlot", {
        ...form,
        startTime: selectedSlot.start,
        endTime: selectedSlot.end,
      });
      setStep(4);
    } catch (err) {
      setBookingError("Hubo un problema al agendar. Por favor, inténtalo de nuevo.");
    } finally {
      setBooking(false);
    }
  };

  return (
    <section
      id="agendar"
      className="relative py-32 sm:py-48 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #1C1C1C, transparent)" }} />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-6" style={{ color: "#4A4A4A" }}>
            Reservar Demo
          </p>
          <h2
            className="font-display font-black tracking-tight leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#F5F5F5" }}
          >
            Elige tu
            <br />
            <span style={{ color: "#4A4A4A" }}>día y hora.</span>
          </h2>
          <p className="mt-5 text-sm" style={{ color: "#4A4A4A" }}>
            Consultoría gratuita de 45 min · Videollamada · Sin compromiso
          </p>
        </motion.div>

        <div
          className="relative"
          style={{ border: "1px solid #1C1C1C", borderRadius: "4px", background: "#0D0D0D", minHeight: "400px" }}
        >
          {/* Steps indicator */}
          <div className="flex items-center gap-0 px-8 pt-8 mb-10">
            {[1,2,3].map(s => (
              <React.Fragment key={s}>
                <div
                  className="flex items-center gap-2 text-xs tracking-widest uppercase"
                  style={{ color: step >= s ? "#BDBDBD" : "#2A2A2A" }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{
                      background: step >= s ? "#1C1C1C" : "transparent",
                      border: `1px solid ${step >= s ? "#4A4A4A" : "#1C1C1C"}`,
                      color: step >= s ? "#BDBDBD" : "#2A2A2A",
                    }}
                  >
                    {step > s ? "✓" : s}
                  </div>
                  <span className="hidden sm:block">{s === 1 ? "Fecha" : s === 2 ? "Hora" : "Datos"}</span>
                </div>
                {s < 3 && (
                  <div className="flex-1 h-px mx-4" style={{ background: step > s ? "#2A2A2A" : "#1C1C1C" }} />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="px-8 pb-10">

            {/* Step 1 — Select Day */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {loadingSlots ? (
                    <div className="flex items-center justify-center py-20">
                      <Loader2 className="w-6 h-6 animate-spin" style={{ color: "#4A4A4A" }} />
                    </div>
                  ) : slotsError ? (
                    <p className="text-sm py-10 text-center" style={{ color: "#4A4A4A" }}>{slotsError}</p>
                  ) : availableDays.length === 0 ? (
                    <p className="text-sm py-10 text-center" style={{ color: "#4A4A4A" }}>No hay disponibilidad en las próximas dos semanas. Contáctanos directamente.</p>
                  ) : (
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "#4A4A4A" }}>Selecciona un día</p>
                      <div className="flex items-center gap-3">
                        {dayOffset > 0 && (
                          <button onClick={() => setDayOffset(d => Math.max(0, d - DAYS_PER_PAGE))}
                            className="w-9 h-9 flex items-center justify-center transition-colors"
                            style={{ border: "1px solid #1C1C1C", borderRadius: "4px", color: "#4A4A4A" }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = "#4A4A4A"; e.currentTarget.style.color = "#BDBDBD"; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1C1C1C"; e.currentTarget.style.color = "#4A4A4A"; }}
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                        )}
                        <div className="flex flex-wrap gap-3 flex-1">
                          {visibleDays.map((day) => (
                            <button
                              key={day.date}
                              onClick={() => handleSelectDay(day)}
                              className="flex flex-col items-center px-5 py-4 transition-all duration-300"
                              style={{
                                border: "1px solid #1C1C1C",
                                borderRadius: "4px",
                                background: "transparent",
                                minWidth: "90px",
                              }}
                              onMouseEnter={e => { e.currentTarget.style.borderColor = "#4A4A4A"; e.currentTarget.style.background = "#0F0F0F"; }}
                              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1C1C1C"; e.currentTarget.style.background = "transparent"; }}
                            >
                              <span className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "#4A4A4A" }}>
                                {DAYS_ES[new Date(day.date + "T12:00:00").getDay()]}
                              </span>
                              <span className="text-2xl font-display font-black" style={{ color: "#F5F5F5" }}>
                                {new Date(day.date + "T12:00:00").getDate()}
                              </span>
                              <span className="text-[10px] mt-1" style={{ color: "#4A4A4A" }}>
                                {MONTHS_ES[new Date(day.date + "T12:00:00").getMonth()]}
                              </span>
                              <span className="text-[10px] mt-2 tracking-wider" style={{ color: "#2A2A2A" }}>
                                {day.slots.length} huecos
                              </span>
                            </button>
                          ))}
                        </div>
                        {dayOffset + DAYS_PER_PAGE < availableDays.length && (
                          <button onClick={() => setDayOffset(d => d + DAYS_PER_PAGE)}
                            className="w-9 h-9 flex items-center justify-center transition-colors"
                            style={{ border: "1px solid #1C1C1C", borderRadius: "4px", color: "#4A4A4A" }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = "#4A4A4A"; e.currentTarget.style.color = "#BDBDBD"; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1C1C1C"; e.currentTarget.style.color = "#4A4A4A"; }}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Step 2 — Select Slot */}
              {step === 2 && selectedDay && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <button onClick={() => setStep(1)} className="flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-300"
                      style={{ color: "#4A4A4A" }}
                      onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"}
                      onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>
                      <ArrowLeft className="w-3.5 h-3.5" /> Volver
                    </button>
                    <p className="text-sm font-semibold" style={{ color: "#BDBDBD" }}>{formatDate(selectedDay.date)}</p>
                  </div>
                  <p className="text-xs tracking-widest uppercase mb-5" style={{ color: "#4A4A4A" }}>Selecciona una hora (Europa/Madrid)</p>
                  <div className="flex flex-wrap gap-3">
                    {selectedDay.slots.map((slot, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelectSlot(slot)}
                        className="px-5 py-3 text-sm font-medium transition-all duration-300"
                        style={{ border: "1px solid #1C1C1C", borderRadius: "4px", color: "#BDBDBD", background: "transparent" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "#4A4A4A"; e.currentTarget.style.background = "#F5F5F5"; e.currentTarget.style.color = "#0A0A0A"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "#1C1C1C"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#BDBDBD"; }}
                      >
                        {formatTime(slot.start)}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3 — Contact Form */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <button onClick={() => setStep(2)} className="flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-300"
                      style={{ color: "#4A4A4A" }}
                      onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"}
                      onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>
                      <ArrowLeft className="w-3.5 h-3.5" /> Volver
                    </button>
                    <div className="text-right">
                      <p className="text-sm font-semibold" style={{ color: "#BDBDBD" }}>{formatDate(selectedDay.date)}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#4A4A4A" }}>{formatTime(selectedSlot.start)} · 45 min</p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label style={labelStyle}>Nombre *</label>
                        <input required value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})}
                          placeholder="Tu nombre" style={inputStyle}
                          onFocus={e => e.target.style.borderBottomColor = "#4A4A4A"}
                          onBlur={e => e.target.style.borderBottomColor = "#1C1C1C"}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Email *</label>
                        <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                          placeholder="tu@empresa.com" style={inputStyle}
                          onFocus={e => e.target.style.borderBottomColor = "#4A4A4A"}
                          onBlur={e => e.target.style.borderBottomColor = "#1C1C1C"}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label style={labelStyle}>Teléfono</label>
                        <input value={form.telefono} onChange={e => setForm({...form, telefono: e.target.value})}
                          placeholder="+34 600 000 000" style={inputStyle}
                          onFocus={e => e.target.style.borderBottomColor = "#4A4A4A"}
                          onBlur={e => e.target.style.borderBottomColor = "#1C1C1C"}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Empresa</label>
                        <input value={form.nombre_negocio} onChange={e => setForm({...form, nombre_negocio: e.target.value})}
                          placeholder="Nombre de tu empresa" style={inputStyle}
                          onFocus={e => e.target.style.borderBottomColor = "#4A4A4A"}
                          onBlur={e => e.target.style.borderBottomColor = "#1C1C1C"}
                        />
                      </div>
                    </div>
                    {bookingError && (
                      <p className="text-xs" style={{ color: "#ff6b6b" }}>{bookingError}</p>
                    )}
                    <button
                      type="submit"
                      disabled={booking}
                      className="flex items-center gap-3 px-9 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300"
                      style={{
                        background: "#F5F5F5",
                        color: "#0A0A0A",
                        borderRadius: "4px",
                        letterSpacing: "0.12em",
                        opacity: booking ? 0.6 : 1,
                      }}
                    >
                      {booking ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Confirmar Reserva <ArrowRight className="w-4 h-4" /></>}
                    </button>
                    <p className="text-xs tracking-widest" style={{ color: "#2A2A2A" }}>
                      RECIBIRÁS CONFIRMACIÓN POR EMAIL CON EL ENLACE DE VIDEOLLAMADA
                    </p>
                  </form>
                </motion.div>
              )}

              {/* Step 4 — Confirmed */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="py-16 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-6" style={{ color: "#BDBDBD" }} />
                  <h3 className="text-2xl font-display font-black mb-2" style={{ color: "#F5F5F5" }}>
                    Reserva confirmada.
                  </h3>
                  <p className="text-sm mb-1 mt-4" style={{ color: "#4A4A4A" }}>
                    {formatDate(selectedDay.date)} · {formatTime(selectedSlot.start)} (Europa/Madrid)
                  </p>
                  <p className="text-sm" style={{ color: "#4A4A4A" }}>
                    Te hemos enviado el enlace de videollamada a <span style={{ color: "#BDBDBD" }}>{form.email}</span>
                  </p>
                  <p className="text-xs mt-8 tracking-widest" style={{ color: "#2A2A2A" }}>
                    NOS VEMOS ENTONCES — SYNTRA LABS
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}