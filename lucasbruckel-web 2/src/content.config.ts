import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

/** Texto en los dos idiomas. */
const l10n = z.object({ es: z.string(), en: z.string() });
const titled = z.object({ title: z.string(), body: z.string() });

const caseStudy = z.object({
  title: z.string(),
  kicker: z.string(),
  summary: z.string(),
  /** null = todavía no confirmado; se muestra marcado como pendiente. */
  role: z.string().nullable(),
  problem: z.string(),
  solution: z.string(),
  context: z.string(),
  goals: z.array(z.string()).default([]),
  process: z.array(z.string()).default([]),
  decisions: z.array(titled).default([]),
  challenges: z.array(titled).default([]),
  results: z.array(z.string()).default([]),
  learnings: z.array(z.string()).default([]),
  next: z.array(z.string()).default([]),
});

/**
 * Un archivo YAML por proyecto en src/content/projects/.
 * Para sumar un proyecto: copiar un YAML, completarlo y poner sus imágenes en
 * src/assets/projects/<slug>/. No hace falta tocar componentes.
 */
const projects = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
  schema: z.object({
    slug: z.string(),
    order: z.number(),
    featured: z.boolean().default(true),
    /** Presentación en la home: cinema (banda negra), split (dos capturas), frame (captura enmarcada). */
    layout: z.enum(['cinema', 'split', 'frame']).default('frame'),
    status: z.enum(['beta', 'demo', 'prototype']),
    year: z.number(),
    /** Nombre de archivo dentro de src/assets/projects/<slug>/ */
    cover: z.string(),
    coverAlt: l10n,
    /** Segunda imagen para la presentación "split". */
    secondary: z.string().optional(),
    secondaryAlt: l10n.optional(),
    gallery: z
      .array(z.object({ src: z.string(), alt: l10n, caption: l10n.optional(), after: z.string().optional() }))
      .default([]),
    links: z.array(z.object({ kind: z.enum(['live', 'demo', 'code']), url: z.string().url() })).default([]),
    stack: z.array(z.string()).default([]),
    facts: z.array(z.object({ value: l10n, label: l10n })).default([]),
    factsNote: l10n.optional(),
    es: caseStudy,
    en: caseStudy,
  }),
});

/** "Ahora": una lista corta que se edita en src/content/now.yaml. */
const now = defineCollection({
  loader: file('src/content/now.yaml'),
  schema: z.object({
    updated: z.coerce.date(),
    order: z.number(),
    text: l10n,
    /** slug de un proyecto para enlazarlo (opcional). */
    project: z.string().optional(),
  }),
});

/** Escritos: un .md por texto en src/content/writing/es/ o /en/. */
const writing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

/** Capacidades con su evidencia (src/content/expertise.yaml). */
const expertise = defineCollection({
  loader: file('src/content/expertise.yaml'),
  schema: z.object({
    order: z.number(),
    name: l10n,
    evidence: l10n,
    tools: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, now, writing, expertise };
