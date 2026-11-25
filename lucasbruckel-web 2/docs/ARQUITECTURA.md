# Arquitectura

## Por qué Astro (y no React + Vite ni Next.js)

Lo que el sitio necesita: páginas propias por caso de estudio con buen SEO, vista previa correcta al compartir en LinkedIn y WhatsApp, dos idiomas, imágenes optimizadas, un formulario con anti-spam y mantenimiento simple.

| | React + Vite (SPA) | Next.js | **Astro** |
|---|---|---|---|
| HTML listo para buscadores y vistas previas | No por defecto: el HTML llega vacío y las vistas previas de LinkedIn/WhatsApp no ven el contenido de cada página | Sí | Sí |
| JavaScript que descarga el visitante | Toda la app | El runtime de React en cada página | Casi nada: solo los scripts chicos que se usan |
| Contenido en archivos con validación | Hay que armarlo | Hay que armarlo | Incorporado (content collections con Zod) |
| Imágenes optimizadas | Hay que sumar herramientas | Sí | Sí, en el build |
| Formulario en el servidor | Hace falta otra pieza | Sí | Sí: un endpoint con `prerender = false` en Vercel |
| Dependencias | Bajas | Altas | **3 en total** (astro, @astrojs/vercel, @astrojs/sitemap) |

Para un sitio de contenido, Astro da el mejor rendimiento y SEO con menos piezas. Los componentes `.astro` son HTML con un poco de lógica, así que se editan fácil.

La documentación se verificó con Context7 (Astro v6). La versión instalada es Astro 7, cuya guía de migración se revisó: lo relevante es el compilador nuevo (más estricto con el HTML) y que `compressHTML` cambió de valor por defecto; en `astro.config.mjs` queda en `true`.

## Estructura

```
src/
  config/site.ts          ← configuración general (mail, links, fotos aprobadas, indexación)
  content.config.ts       ← esquemas de contenido (si falta un dato obligatorio, el build falla)
  content/
    projects/*.yaml       ← un archivo por proyecto, en los dos idiomas
    now.yaml              ← "Ahora"
    expertise.yaml        ← capacidades con evidencia
    about.ts              ← Sobre mí y recorrido
    writing/es|en/*.md    ← escritos
  assets/
    projects/<slug>/      ← capturas reales de cada proyecto
    photos/               ← fotos personales aprobadas
  i18n/ui.ts, routes.ts   ← textos de interfaz y rutas por idioma
  components/             ← piezas visuales (no hace falta tocarlas para sumar contenido)
  layouts/Base.astro      ← <head>, SEO, Open Graph, hreflang, header y footer
  pages/                  ← rutas: / y /en/, /proyectos/[slug] y /en/projects/[slug], etc.
  pages/api/contact.ts    ← formulario (único código que corre en el servidor)
  styles/tokens.css       ← sistema de diseño
public/                   ← tipografía, favicon, imágenes Open Graph
scripts/                  ← og.py (imágenes para compartir) y check-links.mjs
archive/v1/               ← versión anterior, intacta
```

Las rutas en español no llevan prefijo (`/proyectos/listo/`) y las en inglés van bajo `/en/` con slugs propios (`/en/projects/listo/`). Como los nombres de las carpetas cambian por idioma, las rutas se arman con `src/i18n/routes.ts` en lugar del enrutamiento i18n automático de Astro.

## Formulario de contacto

`POST /api/contact`, en una función de Vercel:

1. Solo acepta JSON de hasta 8 KB.
2. Valida nombre, email y mensaje (los mismos controles que en el navegador).
3. Campo trampa: si un bot lo completa, responde OK sin enviar nada.
4. Límite de 5 mensajes cada 10 minutos por visitante, con huella HMAC (no se guarda la IP).
5. Verifica Cloudflare Turnstile en el servidor.
6. Envía el mensaje con Resend, con `reply_to` al email del visitante.

Si faltan las claves, responde `503` y el formulario muestra el mail para escribir directo. Probado localmente: 405, 415, 400 (cada validación), trampa, 503 sin claves, 429 al sexto envío y 403 cuando Turnstile no puede verificar.

Variables (en Vercel, nunca en el repo): ver `.env.example`.

## Medido antes de entregar (21/11/2026)

- Lighthouse, home y caso de LISTO: rendimiento 99, accesibilidad 100, buenas prácticas 100. SEO marca solo "no indexable", que es intencional hasta el lanzamiento.
- axe-core (WCAG 2.1 AA y buenas prácticas) en 8 páginas: 0 problemas.
- Peso de la home: 249 KB en total.
- Links internos: 0 rotos (`npm run check:links`).
