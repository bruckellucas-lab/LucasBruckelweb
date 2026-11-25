// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { site } from './src/config/site.ts';

export default defineConfig({
  // Cambiar por el dominio propio cuando esté conectado (ver docs/LANZAMIENTO.md).
  site: site.url,
  // Todo el sitio se genera como HTML estático. Solo /api/contact corre en el servidor.
  adapter: vercel(),
  // Astro 7 compacta el HTML estilo JSX por defecto y puede borrar espacios entre
  // elementos en línea; con `true` se mantiene el comportamiento clásico.
  compressHTML: true,
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-AR', en: 'en' } },
      filter: (page) => !page.includes('/api/'),
    }),
  ],
  image: {
    // Fotos y capturas se optimizan en el build (WebP/AVIF, tamaños responsive).
    responsiveStyles: true,
  },
});
