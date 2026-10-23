import { getCollection } from 'astro:content';

// Link a RESI researcher's name to their entry on the People page, wherever
// it appears — including inside a paper's author line (Rachel, 2026-09-20).
//
// Author lines use initials ("S. Goldwasser", "A. Kalai"), so a surname alone
// is not enough to identify anyone: Adam Tauman Kalai and Yael Tauman Kalai
// share one. A name is matched on its first initial AND its surname, and only
// on an exact match of both, so a coauthor who is not at RESI is never linked
// by accident.

export type NamePart = string | { text: string; href: string };

const key = (initial: string, surname: string) =>
  `${initial.toUpperCase()}|${surname.toLowerCase()}`;

// The promise is cached, not the map: Astro renders pages concurrently, and
// caching a map that is filled after an await hands every concurrent caller
// an empty one. That bug shipped for about ten minutes on 2026-09-20 — the
// People page linked nothing while the Research page linked everything.
let indexPromise: Promise<Map<string, { id: string; name: string }>> | null = null;

function getIndex() {
  if (!indexPromise) {
    indexPromise = (async () => {
      const map = new Map<string, { id: string; name: string }>();
      for (const person of await getCollection('people')) {
        const words = person.data.name.split(/\s+/);
        map.set(key(words[0][0], words[words.length - 1]), {
          id: person.id,
          name: person.data.name,
        });
      }
      return map;
    })();
  }
  return indexPromise;
}

/**
 * Split an author line into plain strings and links, preserving the line's own
 * separators exactly ("A, B, and C", "N. Kolt et al"). `excludeId` leaves one
 * person unlinked — a name does not link to the entry it is already inside.
 */
export async function linkAuthors(authors: string, excludeId?: string): Promise<NamePart[]> {
  const people = await getIndex();
  const out: NamePart[] = [];
  // Keep each source's comma, “and”, or ampersand separators exactly.
  for (const chunk of authors.split(/(,\s*|\s+(?:and|&)\s+)/)) {
    if (!chunk || /^(,\s*|\s+(?:and|&)\s+)$/.test(chunk)) {
      out.push(chunk);
      continue;
    }
    // "N. Kolt et al" — match the name, keep the rest as text.
    const trailing = chunk.match(/\s+et\s+al\.?$/);
    const name = trailing ? chunk.slice(0, trailing.index) : chunk;
    const words = name.trim().split(/\s+/);
    const match =
      words.length >= 2 ? people.get(key(words[0][0], words[words.length - 1])) : undefined;
    if (match && match.id !== excludeId) {
      out.push({ text: name, href: `/people#${match.id}` });
      if (trailing) out.push(trailing[0]);
    } else {
      out.push(chunk);
    }
  }
  return out;
}
