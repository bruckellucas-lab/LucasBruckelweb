# lucasbruckel-web

Web personal de Lucas Bruckel: portfolio bilingüe (español e inglés) con casos de estudio, construido con Astro y pensado para publicarse en Vercel.

> **Estado:** versión 2, en revisión. No está publicada. El sitio le pide a Google que no lo indexe (`site.indexable = false`) hasta que se apruebe el lanzamiento.

## Probarlo en tu computadora

Necesitás Node.js 22.12 o más nuevo.

```bash
npm install
npm run dev        # http://localhost:4321
```

Antes de publicar:

```bash
npm run build
npm run check:links
```

## Dónde está cada cosa

| Qué querés cambiar | Dónde |
|---|---|
| Un proyecto (textos, capturas, links, estado) | `src/content/projects/<slug>.yaml` + imágenes en `src/assets/projects/<slug>/` |
| La sección "Ahora" | `src/content/now.yaml` |
| Capacidades | `src/content/expertise.yaml` |
| Sobre mí y recorrido | `src/content/about.ts` |
| Escritos | `src/content/writing/es/` y `src/content/writing/en/` (hay una plantilla) |
| Textos fijos de la interfaz (botones, menú) | `src/i18n/ui.ts` |
| Mail, links, fotos aprobadas, CV, analytics, indexación | `src/config/site.ts` |
| Colores, tipografía, espaciado | `src/styles/tokens.css` |
| Imágenes para compartir (Open Graph) | `scripts/og.py` → `public/og/` |

Sumar un proyecto nuevo no requiere tocar componentes: ver [docs/CONTENIDO.md](docs/CONTENIDO.md).

## Documentación

- [docs/ARQUITECTURA.md](docs/ARQUITECTURA.md): por qué Astro, estructura y formulario.
- [docs/DISENO.md](docs/DISENO.md): sistema de diseño.
- [docs/CONTENIDO.md](docs/CONTENIDO.md): cómo actualizar contenido, qué está confirmado y qué falta.
- [docs/FOTOS.md](docs/FOTOS.md): cómo elegir y sumar tus fotos.
- [docs/LANZAMIENTO.md](docs/LANZAMIENTO.md): checklist para publicar y conectar el dominio.

La versión 1 (un solo archivo HTML) está guardada en `archive/v1/`.
