import type { CollectionEntry } from "astro:content";

export function sortByDate(notes: CollectionEntry<"notes">[]) {
  return notes.sort(
    (lhs, rhs) => rhs.data.pubDate.getTime() - lhs.data.pubDate.getTime(),
  );
}
