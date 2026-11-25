# Sistema de diseño

Dirección: editorial, monocromática, tipografía monumental y fotografía en blanco y negro. Inspirado en el lenguaje de afiches editoriales (texto e imagen superpuestos, grillas asimétricas, contraste fuerte), sin copiar ninguna referencia.

## Color

Solo blanco y negro puros. Los grises existen para jerarquía, no como color.

| Token | Valor | Uso |
|---|---|---|
| `--black` | `#000000` | Texto, bandas negras |
| `--white` | `#ffffff` | Fondo |
| `--paper-2` | `#f2f2f2` | Banda clara alternativa |
| `--line` / `--line-dark` | `#d6d6d6` / `#2b2b2b` | Filetes |
| `--muted` / `--muted-dark` | `#5e5e5e` / `#a3a3a3` | Texto secundario (AA en ambos fondos) |

El estado de cada proyecto se indica con forma, no con color: círculo lleno (beta), medio lleno (demo), vacío (prototipo).

## Tipografía

Una sola familia, **Archivo** (variable, licencia OFL), usando su eje de ancho como herramienta expresiva:

| Estilo | Ancho | Peso | Uso |
|---|---|---|---|
| Monumental | 62 % | 900 | Nombre, títulos de casos, "Escribime" |
| Display | 66 % | 860 | Títulos de sección |
| H2 / H3 | 70–86 % | 700–820 | Subtítulos |
| Lead / cuerpo | 100 % | 400–520 | Texto |
| Caption | 118 % | 500 | Metadatos y epígrafes (expandida, en minúscula) |

Escala fluida con `clamp()` en `tokens.css`. Líneas de texto de 38 caracteres de ancho máximo en bloques largos (`--measure`).

## Grilla y espacio

12 columnas, márgenes de 16 a 56 px y separaciones de 16 a 24 px. Espaciado en escala de 8 (4 a 144 px) y secciones de 96 a 200 px de alto. Composiciones asimétricas: el nombre en dos filas alineadas a lados opuestos, textos en columnas desplazadas.

## Componentes

- **Botones:** rectangulares, borde de 2 px; al pasar el mouse se rellenan de abajo hacia arriba.
- **Links:** subrayado de 1 px que engrosa a 3 px.
- **Proyectos en la home:** tres presentaciones distintas, elegidas en el YAML de cada proyecto (`cinema`, `split`, `frame`).
- **Capacidades:** filas que se invierten a negro al pasar el mouse.

## Fotografía

- Retratos: blanco y negro con un poco más de contraste (`.photo-bw`). Solo recorte y encuadre; nunca se modifican rasgos.
- Capturas de productos: en gris y recuperan el color al pasar el mouse o al enfocarlas.
- Fotos pendientes: rayado diagonal con la etiqueta "Foto pendiente", imposible de confundir con contenido final.

## Movimiento

- Entrada de la home: las dos filas del nombre suben y el retrato se revela de abajo hacia arriba.
- Al hacer scroll: textos que aparecen y una cortina del color del fondo que revela las imágenes.
- Entre páginas: View Transitions nativas del navegador (sin JavaScript); el título del proyecto se transforma de la home al caso.
- Todo se desactiva con "reducir movimiento" del sistema operativo.

## Responsive

Probado en 1440 px y 390 px. En celular, el retrato pasa debajo del nombre y las grillas se apilan en una columna.
