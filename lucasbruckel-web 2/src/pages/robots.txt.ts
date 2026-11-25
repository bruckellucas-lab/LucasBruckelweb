import type { APIRoute } from 'astro';
import { site } from '../config/site';

/** Mientras site.indexable sea false, se pide a los buscadores que no indexen el sitio. */
export const GET: APIRoute = ({ site: base }) => {
  const sitemap = new URL('sitemap-index.xml', base).href;
  const body = site.indexable
    ? `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${sitemap}\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
