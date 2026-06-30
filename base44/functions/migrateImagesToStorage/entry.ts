import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const { images } = body;

    if (!images || typeof images !== 'object') {
      return Response.json({ error: 'images object required' }, { status: 400 });
    }

    const results = {};

    for (const [key, url] of Object.entries(images)) {
      try {
        const imgRes = await fetch(url, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
        });

        if (!imgRes.ok) {
          results[key] = { error: `Download ${imgRes.status}`, original: url };
          continue;
        }

        const blob = await imgRes.blob();
        const contentType = imgRes.headers.get('content-type') || 'image/jpeg';
        const ext = contentType.includes('png') ? 'png' : 'jpg';
        const file = new File([blob], `${key}.${ext}`, { type: contentType });

        const uploadResult = await base44.asServiceRole.integrations.Core.UploadFile({ file });
        results[key] = { file_url: uploadResult.file_url, original: url };
      } catch (err) {
        results[key] = { error: err.message, original: url };
      }
    }

    return Response.json({ success: true, results });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});