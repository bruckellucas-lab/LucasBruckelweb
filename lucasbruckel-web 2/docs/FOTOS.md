# Fotos

## Google Fotos: qué se puede y qué no

Desde el 31 de marzo de 2025, Google limitó su API: una app externa ya no puede leer toda tu biblioteca, solo las fotos que vos elegís con el selector oficial (Picker API) o las que esa misma app subió. En esta sesión no hay un conector de Google Fotos disponible, así que no hay acceso a tu biblioteca, y no hace falta.

## El sistema propuesto (sin contraseñas)

1. En Google Fotos elegí entre 8 y 15 fotos candidatas.
2. Descargalas y subilas a una carpeta de Google Drive llamada **Portfolio fotos** (Drive ya está conectado), o adjuntalas directo en el chat.
3. Elijo las mejores para cada espacio y te las muestro antes de usarlas.
4. Solo con tu aprobación las guardo en `src/assets/photos/` y pongo el nombre del archivo en `src/config/site.ts` (`photos.hero` y `photos.about`).

## Qué buscar

| Espacio | Formato | Qué funciona mejor |
|---|---|---|
| Home (retrato principal) | Vertical 4:5 | Retrato de frente o tres cuartos, fondo liso, buena luz. Ideal: fondo blanco, para recortarlo delante de tu nombre. |
| Sobre mí | Vertical 3:4 | Una foto más espontánea: trabajando, presentando o en una visita. |
| Casos de estudio (opcional) | Horizontal | Vos trabajando en un proyecto. |

## Reglas

- No se publican fotos de otras personas sin su permiso, ni fotos privadas.
- Tratamiento permitido: blanco y negro, contraste, recorte y encuadre. Nunca se modifican rasgos ni se generan retratos.
- Astro optimiza cada foto en el build (WebP, varios tamaños). Subí el original de mejor calidad.
