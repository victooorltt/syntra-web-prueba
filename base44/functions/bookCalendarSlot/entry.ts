import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection('googlecalendar');

    const { nombre, email, telefono, nombre_negocio, startTime, endTime } = await req.json();

    if (!nombre || !email || !startTime || !endTime) {
      return Response.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const event = {
      summary: `Demo Syntra Labs — ${nombre_negocio || nombre}`,
      description: `Consultoría gratuita con Syntra Labs\n\nContacto: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono || 'No indicado'}\nEmpresa: ${nombre_negocio || 'No indicada'}`,
      start: { dateTime: startTime, timeZone: 'Europe/Madrid' },
      end: { dateTime: endTime, timeZone: 'Europe/Madrid' },
      attendees: [{ email }],
      conferenceData: {
        createRequest: {
          requestId: `syntra-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 60 },
          { method: 'popup', minutes: 15 },
        ],
      },
    };

    const res = await fetch(
      'https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1&sendUpdates=all',
      {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      }
    );

    const data = await res.json();
    if (!res.ok) return Response.json({ error: data.error?.message || 'Error al crear evento' }, { status: 500 });

    // Save lead
    await base44.asServiceRole.entities.ContactLead.create({
      nombre,
      email,
      telefono: telefono || '',
      nombre_negocio: nombre_negocio || '',
      mensaje: `Demo agendada: ${new Date(startTime).toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}`,
      status: 'nuevo',
    });

    return Response.json({
      success: true,
      eventId: data.id,
      meetLink: data.hangoutLink || data.conferenceData?.entryPoints?.[0]?.uri || null,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});