import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

const SLOT_DURATION_MINUTES = 45;
const WORK_START_HOUR = 9;
const WORK_END_HOUR = 18;

function generateSlots(date) {
  const slots = [];
  let totalMinutes = WORK_START_HOUR * 60;
  const endMinutes = WORK_END_HOUR * 60;
  while (totalMinutes + SLOT_DURATION_MINUTES <= endMinutes) {
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    const start = new Date(date);
    start.setUTCHours(h, m, 0, 0);
    const end = new Date(start);
    end.setUTCMinutes(end.getUTCMinutes() + SLOT_DURATION_MINUTES);
    slots.push({ start: start.toISOString(), end: end.toISOString() });
    totalMinutes += SLOT_DURATION_MINUTES;
  }
  return slots;
}

function isWeekend(date) {
  const d = new Date(date);
  return d.getUTCDay() === 0 || d.getUTCDay() === 6;
}

function overlaps(slotStart, slotEnd, busyStart, busyEnd) {
  return new Date(slotStart) < new Date(busyEnd) && new Date(slotEnd) > new Date(busyStart);
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection('googlecalendar');

    // Get busy events for next 14 days (split into two 7-day windows)
    const now = new Date();
    const timeMin = now.toISOString();
    const timeMax = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000).toISOString();

    const fbRes = await fetch(
      `https://www.googleapis.com/calendar/v3/freeBusy`,
      {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ timeMin, timeMax, items: [{ id: 'primary' }] }),
      }
    );
    const fbData = await fbRes.json();
    const busyTimes = fbData.calendars?.primary?.busy || [];

    // Generate available days (next 14 days, skip weekends, min 24h ahead)
    const minBookingTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const availableDays = [];
    for (let i = 1; i <= 14; i++) {
      const day = new Date(now);
      day.setUTCDate(day.getUTCDate() + i);
      day.setUTCHours(0, 0, 0, 0);
      if (isWeekend(day)) continue;

      const slots = generateSlots(day).filter(slot => {
        if (new Date(slot.start) <= minBookingTime) return false;
        return !busyTimes.some(b => overlaps(slot.start, slot.end, b.start, b.end));
      });

      if (slots.length > 0) {
        availableDays.push({ date: day.toISOString().split('T')[0], slots });
      }
    }

    return Response.json({ availableDays });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});