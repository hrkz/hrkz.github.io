import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortByDate } from '../scripts/utils';

export async function GET(context) {
  const notes = sortByDate(await getCollection('notes'));
  return rss({
    title: 'Hugo Frezat: maths and physics on computers',
    description: 'Random notes at random times',
    site: context.site,
    items: notes.map((note) => ({
      title: note.data.title,
      pubDate: note.data.pubDate,
      description: note.data.description,
      link: `/notes/${note.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
