# Lanzamiento

Nada de esto se hace sin tu aprobación.

## Antes de publicar

- [ ] Confirmar lo pendiente de `docs/CONTENIDO.md` (rol en UniRide, textos de "Ahora", principios).
- [ ] Aprobar y sumar las fotos (`docs/FOTOS.md`).
- [x] Links internos sin errores (`npm run check:links`). Los externos se verificaron a mano el 21/11/2026.
- [x] Responsive revisado en 1440 y 390 px.
- [x] Accesibilidad: axe-core sin problemas en 8 páginas; Lighthouse accesibilidad 100.
- [x] Rendimiento: Lighthouse 99.
- [x] Sin claves ni datos privados en el código.
- [x] Vista previa para LinkedIn y WhatsApp (imágenes en `public/og/`, en los dos idiomas).
- [ ] Formulario: crear las cuentas de Cloudflare Turnstile y Resend, cargar las variables en Vercel y mandar un mensaje de prueba.

## Publicar en Vercel

1. Crear un repositorio en GitHub (privado o público) y subir este proyecto.
2. En Vercel: **Add New → Project**, importar el repo. Vercel detecta Astro solo.
3. Cargar las variables de `.env.example` en **Settings → Environment Variables**.
4. Hacer deploy. Revisar la URL `*.vercel.app`.
5. Si querés estadísticas: activar **Analytics** en Vercel y poner `analytics: true` en `src/config/site.ts`.

## Conectar el dominio

1. Comprar el dominio (por ejemplo `lucasbruckel.com` o `.com.ar`).
2. Vercel → **Settings → Domains** → agregarlo y seguir las instrucciones de DNS.
3. Cambiar `url` en `src/config/site.ts` por el dominio nuevo.
4. Cuando esté todo aprobado: `indexable: true` en `src/config/site.ts`, para que Google lo indexe.
5. Opcional: verificar el dominio en Resend para mandar desde `hola@tudominio`.

## Después

- Sumar el link al Destacado de LinkedIn y a tu CV.
- Revisar la vista previa con el [Post Inspector de LinkedIn](https://www.linkedin.com/post-inspector/).
