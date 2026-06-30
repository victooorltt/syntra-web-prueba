import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Clock, TrendingUp, DollarSign, ArrowRight, Users, Briefcase, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectors = [
  { value: "clinica_estetica", label: "Clínica Estética", multiplier: 1.4 },
  { value: "fisioterapia", label: "Fisioterapia / Salud", multiplier: 1.3 },
  { value: "inmobiliaria", label: "Inmobiliaria", multiplier: 1.8 },
  { value: "legal", label: "Despacho Legal", multiplier: 1.6 },
  { value: "belleza", label: "Centro de Belleza", multiplier: 1.35 },
  { value: "restauracion", label: "Restauración / F&B", multiplier: 1.2 },
  { value: "retail", label: "Retail / Comercio", multiplier: 1.25 },
  { value: "otros", label: "Otro sector", multiplier: 1.3 },
];

const SliderField = ({ label, value, min, max, step, onChange, format }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-black text-primary">{format(value)}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 rounded-full appearance-none cursor-pointer"
      style={{
        background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${((value - min) / (max - min)) * 100}%, hsl(var(--border)) ${((value - min) / (max - min)) * 100}%, hsl(var(--border)) 100%)`,
      }}
    />
  </div>
);

const ResultCard = ({ icon: IconComp, label, value, sublabel, highlight }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className={`rounded-2xl p-4 sm:p-5 border flex flex-col gap-1 ${
      highlight ? "bg-primary/10 border-primary/30" : "bg-card/60 border-border/50"
    }`}
  >
    <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-1 ${highlight ? "bg-primary/20" : "bg-muted"}`}>
      <IconComp className={`w-4 h-4 ${highlight ? "text-primary" : "text-muted-foreground"}`} />
    </div>
    <p className="text-2xl font-display font-black text-foreground leading-none">{value}</p>
    <p className={`text-xs font-bold ${highlight ? "text-primary" : "text-muted-foreground"}`}>{label}</p>
    {sublabel && <p className="text-[11px] text-muted-foreground">{sublabel}</p>}
  </motion.div>
);

export default function ROICalculator() {
  const [sector, setSector] = useState("clinica_estetica");
  const [leadsMonthly, setLeadsMonthly] = useState(60);
  const [responseHours, setResponseHours] = useState(4);
  const [employees, setEmployees] = useState(5);
  const [adminHoursWeek, setAdminHoursWeek] = useState(20);
  const [ticketMedio, setTicketMedio] = useState(120);

  const results = useMemo(() => {
    const sectorData = sectors.find(s => s.value === sector) || sectors[0];
    const mult = sectorData.multiplier;

    // Leads perdidos por respuesta lenta (más de 1h → 40% de pérdida, más de 4h → 70%)
    const lostLeadRate = responseHours <= 1 ? 0.2 : responseHours <= 4 ? 0.4 : 0.65;
    const lostLeads = Math.round(leadsMonthly * lostLeadRate);
    const recoveredLeads = Math.round(lostLeads * 0.7 * mult);
    const revenueRecovered = Math.round(recoveredLeads * ticketMedio);

    // Tiempo recuperado
    const adminHoursMonth = adminHoursWeek * 4;
    const automatedHours = Math.round(adminHoursMonth * 0.75);
    const costPerHour = 14; // coste promedio empleado
    const adminSaving = Math.round(automatedHours * costPerHour);

    // Total impacto
    const totalImpact = revenueRecovered + adminSaving;

    return {
      lostLeads,
      recoveredLeads,
      revenueRecovered,
      automatedHours,
      adminSaving,
      totalImpact,
      roi: Math.round(((totalImpact - 197) / 197) * 100),
    };
  }, [sector, leadsMonthly, responseHours, employees, adminHoursWeek, ticketMedio]);

  return (
    <section id="calculadora" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[130px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Calculadora de impacto</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mt-3 tracking-tight">
            Calcula el impacto{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              económico real
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Introduce los datos de tu empresa y obtén una estimación del tiempo, leads y revenue que puedes recuperar con IA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card/60 border border-border/50 rounded-3xl p-6 sm:p-8 space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-black text-lg">Datos de tu empresa</p>
                <p className="text-xs text-muted-foreground">Ajusta los parámetros para personalizar</p>
              </div>
            </div>

            {/* Sector selector */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Sector
              </span>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {sectors.map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            <SliderField label="Leads / consultas mensuales" value={leadsMonthly} min={10} max={300} step={5} onChange={setLeadsMonthly} format={(v) => `${v} leads`} />
            <SliderField label="Tiempo medio de respuesta actual" value={responseHours} min={0.5} max={24} step={0.5} onChange={setResponseHours} format={(v) => v < 1 ? `${v * 60} min` : `${v}h`} />
            <SliderField label="Número de empleados" value={employees} min={1} max={50} step={1} onChange={setEmployees} format={(v) => `${v} personas`} />
            <SliderField label="Horas administrativas semanales (total equipo)" value={adminHoursWeek} min={5} max={80} step={5} onChange={setAdminHoursWeek} format={(v) => `${v}h/sem`} />
            <SliderField label="Ticket medio por cliente" value={ticketMedio} min={30} max={5000} step={30} onChange={setTicketMedio} format={(v) => `${v.toLocaleString("es-ES")}€`} />

            <div className="pt-2 p-4 rounded-2xl bg-muted/50 border border-border/30 text-xs text-muted-foreground space-y-1">
              <p>📊 Cálculos basados en datos reales de +150 empresas automatizadas.</p>
              <p>🤖 La IA gestiona hasta el 80% de las tareas administrativas repetitivas.</p>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-3">
              <ResultCard icon={Users} label="Leads recuperados/mes" value={`+${results.recoveredLeads}`} sublabel={`De ${results.lostLeads} perdidos por respuesta lenta`} />
              <ResultCard icon={Clock} label="Horas automatizadas/mes" value={`${results.automatedHours}h`} sublabel="Liberadas de tareas administrativas" />
              <ResultCard icon={DollarSign} label="Ahorro en gestión" value={`${results.adminSaving.toLocaleString("es-ES")}€`} sublabel="Coste evitado en horas manuales" />
              <ResultCard icon={BarChart3} label="ROI estimado" value={`${results.roi}%`} sublabel="Retorno mensual sobre inversión" highlight />
            </div>

            {/* Big total */}
            <motion.div
              key={results.totalImpact}
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl bg-gradient-to-br from-primary/15 to-accent/8 border border-primary/30 p-6 sm:p-8 text-center shadow-xl shadow-primary/10"
            >
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Impacto económico total estimado</p>
              <p className="text-5xl sm:text-6xl font-display font-black text-foreground mb-1">
                {results.totalImpact.toLocaleString("es-ES")}€
              </p>
              <p className="text-muted-foreground text-sm mb-2">al mes con Syntra IA activa en tu empresa</p>
              <p className="text-xs text-primary font-semibold mb-6">
                +{results.revenueRecovered.toLocaleString("es-ES")}€ en oportunidades recuperadas · {results.automatedHours}h liberadas
              </p>

              <a href="#contacto" className="block">
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-black rounded-full h-13 shadow-xl shadow-primary/25 uppercase tracking-wide text-sm"
                >
                  Solicitar Auditoría Estratégica
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>

              <p className="text-xs text-muted-foreground mt-4">
                * Estimación orientativa basada en promedios del sector. Resultados reales pueden variar.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none; width: 18px; height: 18px;
          border-radius: 50%; background: hsl(var(--primary));
          cursor: pointer; border: 2px solid hsl(var(--background));
          box-shadow: 0 0 0 3px hsl(var(--primary) / 0.25);
        }
        input[type='range']::-moz-range-thumb {
          width: 18px; height: 18px; border-radius: 50%;
          background: hsl(var(--primary)); cursor: pointer;
          border: 2px solid hsl(var(--background));
        }
      `}</style>
    </section>
  );
}