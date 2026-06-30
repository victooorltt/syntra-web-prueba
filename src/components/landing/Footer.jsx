import React from "react";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const linkStyle = {
  color: "#4A4A4A",
  transition: "color 0.3s",
};

export default function Footer() {
  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid #1C1C1C" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">

          {/* Brand */}
          <div>
            <img
              src="https://media.base44.com/images/public/6a22ad22627c0746f590d658/5c704cbc2_423A3B0A-6F13-442D-8EC4-138FD084C212.png"
              alt="Syntra Labs"
              className="h-10 w-auto object-contain mb-4"
              style={{ opacity: 0.6 }}
            />
            <div className="space-y-2 mb-5">
              {["Diseño Web Premium", "Automatización", "Inteligencia Artificial"].map((s, i) => (
                <p key={i} className="text-xs" style={{ color: "#3A3A3A" }}>{s}</p>
              ))}
            </div>
            <p className="text-xs leading-relaxed max-w-xs" style={{ color: "#3A3A3A" }}>
              Sistemas digitales premium para empresas que quieren crecer. Web, automatización e IA en un solo equipo.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase mb-4" style={{ color: "#2A2A2A" }}>Servicios</p>
            <div className="space-y-2.5">
              {["Diseño Web", "Automatización", "Agentes IA", "Integraciones"].map((s, i) => (
                <a key={i} href="#servicios" className="block text-xs" style={linkStyle}
                   onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"}
                   onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>{s}</a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase mb-4" style={{ color: "#2A2A2A" }}>Contacto</p>
            <div className="space-y-2.5">
              <a href="mailto:info@syntralabs.es" className="block text-xs" style={linkStyle}
                 onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"}
                 onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>info@syntralabs.es</a>
              <a href="tel:+34668515994" className="block text-xs" style={linkStyle}
                 onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"}
                 onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>+34 668 51 59 94</a>
              <p className="text-xs" style={{ color: "#4A4A4A" }}>Madrid</p>
            </div>
          </div>

          {/* Social + CTA */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase mb-4" style={{ color: "#2A2A2A" }}>Social</p>
            <div className="space-y-2.5 mb-6">
              <a href="https://www.linkedin.com/company/syntralabs" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-xs" style={linkStyle}
                 onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"}
                 onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>
                <LinkedInIcon /> LinkedIn
              </a>
              <a href="https://www.instagram.com/syntralabs" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-xs" style={linkStyle}
                 onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"}
                 onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>
                <InstagramIcon /> Instagram
                </a>
                <a href="https://wa.me/34668515994" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs" style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = "#BDBDBD"}
                onMouseLeave={e => e.currentTarget.style.color = "#4A4A4A"}>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
                </a>
                </div>
            <a href="#contacto">
              <button className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300"
                style={{ background: "#F5F5F5", color: "#0A0A0A", borderRadius: "3px" }}>
                Solicitar Propuesta
              </button>
            </a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1C1C1C", paddingTop: "1.25rem" }} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[11px]" style={{ color: "#2A2A2A" }}>
            © {new Date().getFullYear()} Syntra Labs. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="/terminos" className="text-[11px]" style={{ color: "#2A2A2A" }}
               onMouseEnter={e => e.currentTarget.style.color = "#4A4A4A"}
               onMouseLeave={e => e.currentTarget.style.color = "#2A2A2A"}>
              Términos de servicio
            </a>
            <a href="/privacidad" className="text-[11px]" style={{ color: "#2A2A2A" }}
               onMouseEnter={e => e.currentTarget.style.color = "#4A4A4A"}
               onMouseLeave={e => e.currentTarget.style.color = "#2A2A2A"}>
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}