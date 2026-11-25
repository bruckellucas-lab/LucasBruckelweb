# Contenido: cómo actualizarlo y qué está confirmado

## Regla

Nada inventado. Cada dato tiene una fuente (LinkedIn, repos, hoja de ruta de LISTO, pitch de UniRide, publicaciones o la suite de pruebas). Si algo no tiene fuente, no va.

## Sumar un proyecto

1. Copiá `src/content/projects/uniride.yaml` como `src/content/projects/<slug>.yaml`.
2. Completá los dos idiomas (`es:` y `en:`). Si un campo de lista queda vacío (`[]`), la sección no se muestra.
3. Guardá las imágenes en `src/assets/projects/<slug>/` y poné sus nombres en `cover`, `secondary` y `gallery`.
4. Elegí `layout`: `cinema`, `split` o `frame`.
5. Opcional: agregá el proyecto a `scripts/og.py` y corré `python3 scripts/og.py` para su imagen de vista previa.
6. `npm run build`. Si falta un dato obligatorio o una imagen, el build avisa cuál.

## Actualizar "Ahora"

Editá `src/content/now.yaml`: el texto en los dos idiomas y la fecha en `updated`. La fecha más reciente se muestra como "Actualizado el…".

## Publicar un escrito

Copiá `src/content/writing/es/plantilla.md`, cambiá título, descripción y fecha, escribí el texto y poné `draft: false`. La versión en inglés va en `writing/en/` con el mismo nombre. El menú "Escritos" aparece solo cuando hay al menos un texto publicado.

## Qué está confirmado

- **LISTO:** beta cerrada online, 350 pruebas (corridas el 21/11/2026), 12 funciones en Vercel, stack, decisiones y desafíos (README y docs del repo), próximos pasos (hoja de ruta del 14/10/2026) y métricas de matching (scripts reproducibles del repo).
- **Catálogos web:** demo online con marca ficticia, panel del comerciante, multi-comercio y pruebas (README y docs del repo). Sin comercios publicados.
- **UniRide:** problema, insight, producto, confianza y prototipo (pitch).
- **Recorrido:** visita a IOL organizada por Lucas (publicación de IOL), Vinculación con el Futuro, visitas a Cocos, Bull Market e IEB, Hacoaj, formación de madrijim y ORT (LinkedIn, publicaciones y CV).

## Qué falta confirmar

| Dato | Dónde se ve | Estado en el sitio |
|---|---|---|
| Rol en UniRide y equipo | Caso de UniRide | Marcado "A confirmar" |
| Link a la demo de UniRide | Caso de UniRide | Marcado "A confirmar" |
| Fotos personales | Home y Sobre mí | Espacios marcados "Foto pendiente" |
| Redacción del rol en LISTO | Caso de LISTO | Escrito a partir del repo y la hoja de ruta; revisar |
| Principios de "Cómo trabajo" | Sobre mí | Redactados a partir de decisiones reales documentadas; revisar el tono |
| Los ítems de "Ahora" | Home | Basados en la hoja de ruta de octubre; confirmar que sigan vigentes |
| Si mostrar el nombre "Solución Comercial" | Caso de catálogos | Hoy no se muestra (la URL de la demo sí lo contiene) |
| CV descargable | Contacto | Desactivado hasta tener una versión aprobada |
| Mail con dominio propio | Contacto | Hoy se usa el Gmail público de LinkedIn |
