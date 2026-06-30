import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Clock, TrendingUp, MessageSquare } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Clientes automatizados",
    description: "Negocios que ya trabajan en piloto automático",
    decimals: 0,
    color: "from-blue-500 to-primary",
  },
  {
    icon: Clock,
    value: 12000,
    suffix: "+",
    label: "Horas ahorradas",
    description: "Horas que la IA trabaja en lugar de tu equipo",
    decimals: 0,
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: TrendingUp,
    value: 300,
    suffix: "%",
    label: "Aumento de ventas",
    description: "Incremento medio en conversión de leads",
    decimals: 0,
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: MessageSquare,
    value: 2.4,
    suffix: "M+",
    label: "Mensajes gestionados",
    description: "Conversaciones atendidas por nuestra IA",
    decimals: 1,
    color: "from-amber-500 to-orange-400",
  },
];

function CountUp({ target, suffix, decimals, active }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const steps = 80;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target * eased);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {decimals > 0 ? display.toFixed(decimals) : Math.floor(display)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(207_100%_55%_/_0.07)_0%,_transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Resultados reales</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 tracking-tight">
            Números que{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              hablan por sí solos
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative p-5 sm:p-7 rounded-2xl border border-border/40 bg-card/50 hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient glow */}
              <div className={`absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-5 shadow-lg`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>

              {/* Number */}
              <p className="text-4xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-1 tabular-nums leading-none">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  active={inView}
                />
              </p>

              {/* Label */}
              <p className="text-base font-semibold text-foreground/80 mt-2 mb-1">{stat.label}</p>

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-snug">{stat.description}</p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}