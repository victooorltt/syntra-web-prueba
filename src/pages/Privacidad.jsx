import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>

        <h1 className="text-3xl sm:text-4xl font-display font-bold mb-2">Política de Privacidad</h1>
        <p className="text-sm text-muted-foreground mb-10">Última actualización: junio de 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">1. Responsable del tratamiento</h2>
            <p>Syntra Labs S.L., con domicilio en Madrid, España, es el responsable del tratamiento de los datos personales recogidos a través de este sitio web y sus servicios, de conformidad con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos (LOPDGDD).</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">2. Datos que recopilamos</h2>
            <p>Recopilamos los siguientes datos personales:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Nombre del negocio o empresa</li>
              <li>Mensajes e información que usted nos proporcione voluntariamente</li>
              <li>Datos de navegación (cookies, dirección IP, páginas visitadas)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">3. Finalidad del tratamiento</h2>
            <p>Sus datos se utilizan para:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Gestionar las solicitudes de información y demos recibidas a través del formulario de contacto</li>
              <li>Prestar los servicios contratados</li>
              <li>Enviar comunicaciones comerciales sobre nuestros productos y servicios (con su consentimiento)</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">4. Base legal del tratamiento</h2>
            <p>El tratamiento de sus datos se basa en: (a) la ejecución de un contrato o gestión de solicitudes precontractuales; (b) el consentimiento explícito del usuario; y (c) el interés legítimo de Syntra Labs en la mejora de sus servicios.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">5. Conservación de los datos</h2>
            <p>Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y, en su caso, durante los plazos legalmente establecidos.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">6. Sus derechos</h2>
            <p>Usted tiene derecho a acceder, rectificar, suprimir, limitar el tratamiento, oponerse y a la portabilidad de sus datos personales. Para ejercer cualquiera de estos derechos, puede contactarnos en <a href="mailto:privacidad@syntralabs.com" className="text-primary hover:underline">privacidad@syntralabs.com</a>. También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">7. Cookies</h2>
            <p>Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación y analizar el uso del sitio. Puede configurar su navegador para rechazar las cookies, aunque esto podría afectar al funcionamiento de algunas funcionalidades.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">8. Transferencias internacionales</h2>
            <p>Sus datos podrán ser tratados por proveedores de servicios ubicados fuera del Espacio Económico Europeo únicamente cuando existan garantías adecuadas conforme al RGPD.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">9. Contacto</h2>
            <p>Para cualquier consulta sobre esta política, contacte con nuestro delegado de protección de datos en <a href="mailto:privacidad@syntralabs.com" className="text-primary hover:underline">privacidad@syntralabs.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}