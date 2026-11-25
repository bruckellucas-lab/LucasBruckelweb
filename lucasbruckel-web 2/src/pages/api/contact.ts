import type { APIRoute } from 'astro';
import { createHmac, randomBytes } from 'node:crypto';

/**
 * Formulario de contacto. Es la única parte del sitio que corre en el servidor.
 * Valida, frena bots (trampa + Cloudflare Turnstile + límite por visitante)
 * y manda el mensaje por email con Resend. Las claves viven solo en Vercel.
 */
export const prerender = false;

const MAX_BODY = 8_000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
// Límite en memoria por instancia, con huella HMAC en vez de guardar la IP.
const salt = randomBytes(32);
const hits = new Map<string, number[]>();

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

function fingerprint(ip: string): string {
  return createHmac('sha256', salt).update(ip).digest('hex').slice(0, 32);
}

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5_000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const TOPICS: Record<string, string> = {
  business: 'Comercio',
  company: 'Empresa',
  listo: 'LISTO',
  other: 'Otro',
};

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (!(request.headers.get('content-type') ?? '').includes('application/json')) {
    return json(415, { error: 'generic' });
  }
  const raw = await request.text();
  if (raw.length > MAX_BODY) return json(413, { error: 'generic' });

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(raw);
  } catch {
    return json(400, { error: 'generic' });
  }
  if (typeof data !== 'object' || data === null || Array.isArray(data)) return json(400, { error: 'generic' });

  const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
  const name = str(data.name, 120);
  const email = str(data.email, 200);
  const message = str(data.message, 4000);
  const topic = TOPICS[str(data.topic, 20)] ?? 'Otro';
  const token = str(data.token, 2048);

  // Trampa: si un bot completó el campo oculto, respondemos OK sin mandar nada.
  if (str(data.website, 200)) return json(200, { ok: true });

  if (!name || !email || !message) return json(400, { error: 'required' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return json(400, { error: 'email' });
  if (message.length < 10) return json(400, { error: 'short' });

  let ip = 'unknown';
  try { ip = clientAddress; } catch { /* sin IP disponible */ }
  if (rateLimited(fingerprint(ip))) return json(429, { error: 'rate' });

  const env = import.meta.env;
  const secret = env.TURNSTILE_SECRET_KEY;
  const resendKey = env.RESEND_API_KEY;
  const to = env.CONTACT_TO;
  const from = env.CONTACT_FROM;
  if (!secret || !resendKey || !to || !from) return json(503, { error: 'unavailable' });

  // Verificación anti-bots en el servidor.
  const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  }).then((r) => r.json() as Promise<{ success: boolean; action?: string }>).catch(() => ({ success: false }));
  if (!verify.success || (verify.action && verify.action !== 'contact')) return json(403, { error: 'captcha' });

  const sent = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio: mensaje de ${name} (${topic})`,
      text: `Nombre: ${name}\nEmail: ${email}\nMotivo: ${topic}\n\n${message}`,
    }),
  }).catch(() => null);

  if (!sent || !sent.ok) return json(502, { error: 'generic' });
  return json(200, { ok: true });
};

export const ALL: APIRoute = () => json(405, { error: 'generic' });
