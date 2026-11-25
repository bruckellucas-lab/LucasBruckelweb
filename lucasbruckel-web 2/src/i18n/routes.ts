import type { Lang } from '../config/site';

/** Rutas localizadas. Cambiar un slug acá lo cambia en todo el sitio. */
const routes = {
  es: { home: '/', work: '/proyectos/', about: '/sobre-mi/', writing: '/escritos/' },
  en: { home: '/en/', work: '/en/projects/', about: '/en/about/', writing: '/en/writing/' },
} as const;

export type RouteKey = keyof (typeof routes)['es'];

export function path(lang: Lang, key: RouteKey, slug?: string): string {
  const base = routes[lang][key];
  return slug ? `${base}${slug}/` : base;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

export const htmlLang: Record<Lang, string> = { es: 'es-AR', en: 'en' };
