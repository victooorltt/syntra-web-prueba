import OpenAI from 'openai';
import { Client as NotionClient } from '@notionhq/client';
import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const lead = req.body && req.body.data ? req.body.data : req.body;

    if (!lead || !lead.nombre) {
      return res.status(200).json({ ok: true, warning: 'No lead data provided or missing name' });
    }

    // Retrieve environment variables
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const notionApiKey = process.env.NOTION_API_KEY;
    const notionDbId = process.env.NOTION_DATABASE_ID;
    const resendApiKey = process.env.RESEND_API_KEY;

    // Resolve email configurations
    const emailFrom = process.env.EMAIL_FROM || process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const emailTo = process.env.EMAIL_TO || process.env.RESEND_TO_EMAIL || "info@syntralabs.es";

    // 1. OpenAI Lead Analysis and Field Classification (Resilient)
    let aiResult = {
      sector: "Otros",
      service: "Otro",
      goals: "No especificado",
      timeframe: "Próximos 3 meses",
      website: null
    };

    if (openaiApiKey && openaiApiKey !== 'placeholder_openai_key') {
      try {
        const openai = new OpenAI({ apiKey: openaiApiKey });
        const aiCompletion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `Eres un agente de IA experto en clasificación de leads comerciales para Syntra Labs.
Tu objetivo es analizar la información de un lead recibido desde el formulario de contacto web y estructurarla con precisión.

Debes extraer o determinar los siguientes campos a partir de los datos proporcionados (especialmente a partir del nombre del negocio y del mensaje):
1. 'sector': Sector o industria de la empresa (ej. 'Clínicas Estéticas', 'Despacho de Abogados', 'Inmobiliaria', 'Restaurantes', 'Tecnología', etc.). Sé conciso.
2. 'service': Servicio solicitado. Debe clasificarse estrictamente en uno de estos valores:
   - 'Automatización' (si busca automatizar procesos, workflows, whatsapp bots, etc.)
   - 'Diseño web' (si busca una página web, landing page, rediseño, etc.)
   - 'Agente IA' (si busca asistentes inteligentes, chat bots con IA, agentes setters/closers, etc.)
   - 'Otro' (si no encaja en las anteriores)
3. 'goals': Objetivos principales del proyecto resumidos en una sola línea.
4. 'timeframe': Plazo de inicio estimado. Debe clasificarse estrictamente en uno de estos valores:
   - 'Inmediatamente' (si el mensaje denota urgencia alta o lo pide ya)
   - 'Este mes' (si es prioritario pero no inmediato)
   - 'Próximos 3 meses' (si es a mediano plazo o informativo)
5. 'website': URL del sitio web actual del lead si es mencionado en el mensaje (si no, devuelve null).

Devuelve tu respuesta únicamente en formato JSON con la siguiente estructura:
{
  "sector": string,
  "service": "Automatización" | "Diseño web" | "Agente IA" | "Otro",
  "goals": string,
  "timeframe": "Inmediatamente" | "Este mes" | "Próximos 3 meses",
  "website": string | null
}`
            },
            {
              role: "user",
              content: `Lead a clasificar:
Empresa: ${lead.nombre_negocio || 'No indicada'}
Mensaje: ${lead.mensaje || 'Sin mensaje adicional'}
Presupuesto indicado: ${lead.presupuesto || 'No especificado'}`
            }
          ],
          response_format: { type: "json_object" }
        });

        const parsedResult = JSON.parse(aiCompletion.choices[0].message.content || '{}');
        aiResult = { ...aiResult, ...parsedResult };
      } catch (aiError) {
        console.warn("OpenAI classification failed, using fallbacks:", aiError);
      }
    } else {
      console.warn("OPENAI_API_KEY is not configured. Using fallback classification values.");
    }

    // 2. Notion CRM Database Entry creation (Resilient)
    if (notionApiKey && notionDbId && notionApiKey !== 'placeholder_notion_api_key' && notionDbId !== 'placeholder_notion_db_id') {
      try {
        const notion = new NotionClient({ auth: notionApiKey });
        await notion.pages.create({
          parent: { database_id: notionDbId },
          properties: {
            "Nombre": {
              title: [{ text: { content: lead.nombre || "Sin nombre" } }]
            },
            "Empresa": {
              rich_text: [{ text: { content: lead.nombre_negocio || "Sin empresa" } }]
            },
            "Teléfono": {
              phone_number: lead.telefono || null
            },
            "Email": {
              email: lead.email || null
            },
            "Página web actual": {
              url: aiResult.website || null
            },
            "Sector": {
              rich_text: [{ text: { content: aiResult.sector } }]
            },
            "Servicio solicitado": {
              select: { name: aiResult.service }
            },
            "Estado comercial": {
              status: { name: "NUEVO LEAD" }
            },
            "Origen del lead": {
              select: { name: "Web" }
            },
            "Observaciones": {
              rich_text: [{
                text: {
                  content: `Objetivos: ${aiResult.goals}\nPlazo: ${aiResult.timeframe}\nPresupuesto: ${lead.presupuesto || 'No especificado'}\nMensaje original: ${lead.mensaje || ''}`
                }
              }]
            }
          }
        });
        console.log("Notion lead entry successfully created.");
      } catch (notionError) {
        console.error("Failed to create Notion entry:", notionError);
      }
    } else {
      console.warn("Notion credentials (NOTION_API_KEY or NOTION_DATABASE_ID) are missing. Skipping Notion CRM insertion.");
    }

    // 3. Send Email Notification via Resend (Resilient)
    if (resendApiKey && resendApiKey !== 'placeholder_resend_key') {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: `Syntra Labs — Web <${emailFrom}>`,
          to: emailTo,
          subject: `🔔 Nuevo Lead Web: ${lead.nombre} (${lead.nombre_negocio})`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <title>Nuevo Lead Captado</title>
              <style>
                body { font-family: sans-serif; background-color: #f4f5f6; color: #333; margin: 0; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e1e4e6; overflow: hidden; }
                .header { background-color: #1a1f2c; padding: 20px; text-align: center; color: #ffffff; }
                .content { padding: 25px; }
                .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                .table td { padding: 10px; border-bottom: 1px solid #f0f2f5; }
                .table td.label { font-weight: bold; color: #667; width: 35%; }
                .footer { background-color: #f9fafb; padding: 12px; text-align: center; font-size: 11px; color: #888; border-top: 1px solid #e1e4e6; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2 style="margin:0;">Nuevo Lead Cualificado por IA</h2>
                  <p style="margin:5px 0 0 0; font-size:13px; opacity:0.8;">Formulario de Contacto Web</p>
                </div>
                <div class="content">
                  <table class="table">
                    <tr><td class="label">Nombre</td><td>${lead.nombre}</td></tr>
                    <tr><td class="label">Empresa</td><td>${lead.nombre_negocio}</td></tr>
                    <tr><td class="label">Email</td><td><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
                    <tr><td class="label">Teléfono</td><td><a href="tel:${lead.telefono}">${lead.telefono}</a></td></tr>
                    <tr><td class="label">Sector (IA)</td><td>${aiResult.sector}</td></tr>
                    <tr><td class="label">Servicio (IA)</td><td>${aiResult.service}</td></tr>
                    <tr><td class="label">Objetivos (IA)</td><td>${aiResult.goals}</td></tr>
                    <tr><td class="label">Plazo (IA)</td><td>${aiResult.timeframe}</td></tr>
                    <tr><td class="label">Presupuesto</td><td>${lead.presupuesto || 'No especificado'}</td></tr>
                    <tr><td class="label">Mensaje original</td><td>${lead.mensaje || ''}</td></tr>
                  </table>
                  <p style="font-size: 12px; color: #666;">Este lead ha sido guardado automáticamente en Notion con estado <strong>NUEVO LEAD</strong>.</p>
                </div>
                <div class="footer">
                  &copy; Syntra Labs. Todos los derechos reservados.
                </div>
              </div>
            </body>
            </html>
          `
        });
        console.log("Email notification successfully sent via Resend.");
      } catch (resendError) {
        console.error("Failed to send email via Resend:", resendError);
      }
    } else {
      console.warn("RESEND_API_KEY is missing. Skipping email notification.");
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Critical error in function notifyNewLead:", err);
    return res.status(200).json({ ok: true, error: err.message });
  }
}
