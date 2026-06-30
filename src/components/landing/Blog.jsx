import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    title: "Cómo reducir el ausentismo de pacientes en tu clínica dental",
    excerpt: "El 30% de los pacientes cancela citas sin avisar. Descubre cómo los recordatorios automáticos vía WhatsApp e SMS pueden reducir los no-shows hasta un 75%.",
    date: "5 Jun 2025",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
    slug: "reducir-ausentismo-clinica-dental"
  },
  {
    title: "Automatización en estética: Más citas, menos cancelaciones",
    excerpt: "Centros de estética pierden hasta 20.000€ mensualmente por cancelaciones de último momento. Conoce la estrategia que triplicó las citas confirmadas.",
    date: "2 Jun 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop",
    slug: "automatizacion-estetica-cancelaciones"
  },
  {
    title: "IA conversacional: El asistente que confirma citas 24/7",
    excerpt: "Un agente IA responde dudas de pacientes, confirma citas y genera recordatorios automáticos. Así es como un centro creció 45% sin contratar personal adicional.",
    date: "30 May 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    slug: "ia-conversacional-confirmacion-citas"
  }
];

export default function Blog() {
  return (
    <section className="relative py-14 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Blog</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold mt-2 sm:mt-3 tracking-tight">
            Artículos destacados sobre{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              automatización y clínicas
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl mx-auto px-2 sm:px-0">
            Descubre estrategias probadas para reducir cancelaciones, aumentar confirmaciones de citas y optimizar tus operaciones con IA.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl overflow-hidden bg-card/60 border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime} de lectura</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-foreground mb-2 sm:mb-3 line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {article.excerpt}
                </p>

                {/* CTA */}
                <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group">
                  Leer artículo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 sm:mt-14"
        >
          <p className="text-muted-foreground mb-5">¿Listo para transformar tu clínica?</p>
          <a href="#contacto">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-primary/20"
            >
              Solicita una demostración
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}