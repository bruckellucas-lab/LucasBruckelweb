import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../config/site';

export type Project = CollectionEntry<'projects'>;

export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects');
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getNow() {
  const items = (await getCollection('now')).sort((a, b) => a.data.order - b.data.order);
  const updated = items.reduce<Date | null>((max, i) => (!max || i.data.updated > max ? i.data.updated : max), null);
  return { items, updated };
}

export async function getExpertise() {
  return (await getCollection('expertise')).sort((a, b) => a.data.order - b.data.order);
}

/** Escritos publicados de un idioma, del más nuevo al más viejo. */
export async function getWriting(lang: Lang) {
  const posts = await getCollection('writing', (p) => p.id.startsWith(`${lang}/`) && !p.data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function postSlug(id: string): string {
  return id.split('/').slice(1).join('/').replace(/\.md$/, '');
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-AR' : 'en-US', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(date);
}
