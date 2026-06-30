import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Terminos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>

        <h1 className="text-3xl sm:text-4xl font-display font-bold mb-2">Términos de Servicio</h1>
        <p className="text-sm text-muted-foreground mb-10">Última actualización: junio de 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">1. Aceptación de los términos</h2>
            <p>Al acceder o utilizar los servicios de Syntra Labs S.L. ("Syntra Labs", "nosotros"), usted acepta quedar vinculado por estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">2. Descripción del servicio</h2>
            <p>Syntra Labs proporciona soluciones de automatización e inteligencia artificial para negocios, incluyendo agentes conversacionales, sistemas de gestión de leads, automatización de citas y seguimiento de clientes. Los servicios se prestan según lo acordado en cada propuesta comercial.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">3. Uso del servicio</h2>
            <p>El cliente se compromete a utilizar los servicios de Syntra Labs únicamente para fines legales y conforme a la normativa vigente. Queda prohibido el uso de los servicios para actividades fraudulentas, ilegales o que puedan dañar a terceros.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">4. Propiedad intelectual</h2>
            <p>Todo el software, algoritmos, metodologías y materiales desarrollados por Syntra Labs son propiedad exclusiva de Syntra Labs S.L. El cliente no adquiere ningún derecho de propiedad intelectual sobre dichos elementos salvo lo expresamente pactado por escrito.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">5. Confidencialidad</h2>
            <p>Ambas partes se comprometen a mantener la confidencialidad de la información privilegiada que intercambien durante la relación comercial y durante un período de dos (2) años tras su finalización.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">6. Limitación de responsabilidad</h2>
            <p>Syntra Labs no será responsable de daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del servicio. La responsabilidad total de Syntra Labs no excederá el importe pagado por el cliente en los tres (3) meses anteriores al evento que dio lugar a la reclamación.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">7. Modificaciones</h2>
            <p>Syntra Labs se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán comunicados con al menos 15 días de antelación. El uso continuado del servicio tras la notificación implica la aceptación de los nuevos términos.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">8. Ley aplicable</h2>
            <p>Estos términos se rigen por la legislación española. Cualquier disputa se someterá a los tribunales competentes de Madrid, España.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">9. Contacto</h2>
            <p>Para cualquier consulta sobre estos términos, puede contactarnos en <a href="mailto:legal@syntralabs.com" className="text-primary hover:underline">legal@syntralabs.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}