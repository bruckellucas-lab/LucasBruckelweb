import type { ImageMetadata } from 'astro';

const projectFiles = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/projects/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);
const photoFiles = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/photos/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

/** Imagen de un proyecto: src/assets/projects/<slug>/<archivo>. Falla el build si no existe. */
export function projectImage(slug: string, file: string): ImageMetadata {
  const key = `/src/assets/projects/${slug}/${file}`;
  const mod = projectFiles[key];
  if (!mod) throw new Error(`Falta la imagen ${key}. Revisá el YAML del proyecto "${slug}".`);
  return mod.default;
}

/** Foto personal aprobada (src/assets/photos/). null si todavía no hay. */
export function personalPhoto(file: string | null): ImageMetadata | null {
  if (!file) return null;
  const key = `/src/assets/photos/${file}`;
  const mod = photoFiles[key];
  if (!mod) throw new Error(`Falta la foto ${key}. Revisá src/config/site.ts.`);
  return mod.default;
}
