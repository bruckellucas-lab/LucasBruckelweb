/**
 * Configuración general del sitio. Lo que cambia seguido (proyectos, "Ahora",
 * escritos) vive en src/content/. Esto cambia muy poco.
 */
export const site = {
  name: 'Lucas Bruckel',
  // Dominio provisorio. Al conectar el dominio propio, cambiarlo acá (y nada más).
  url: 'https://lucasbruckel.vercel.app',
  email: 'bruckellucas@gmail.com',
  location: { es: 'Buenos Aires, Argentina', en: 'Buenos Aires, Argentina' },
  links: {
    linkedin: 'https://www.linkedin.com/in/lucasbruckel',
    github: 'https://github.com/bruckellucas-lab',
  },
  /**
   * false = el sitio le pide a Google que no lo indexe (meta robots + robots.txt).
   * Pasarlo a true recién cuando apruebes el lanzamiento.
   */
  indexable: false,
  /**
   * Vercel Web Analytics: sin cookies ni datos personales. Activarlo primero en
   * Vercel → Analytics y después poner true.
   */
  analytics: false,
  /** CV descargable: poner la ruta (ej. '/cv-lucas-bruckel.pdf') cuando haya una versión aprobada. */
  cv: null as string | null,
  /**
   * Fotos personales. null = se muestra un espacio identificado como pendiente.
   * Cuando apruebes una foto: guardarla en src/assets/photos/ y poner el nombre del archivo.
   */
  photos: {
    hero: null as string | null,
    about: null as string | null,
  },
} as const;

export type Lang = 'es' | 'en';
