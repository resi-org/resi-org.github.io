import { getCollection } from 'astro:content';
import { linkAuthors } from './researchers';

type Citation = { title: string; authors: string; venue: string; url?: string };

// Shared research entries take precedence over duplicate biography citations.
// Historical publications outside the research collection keep their own metadata.
export async function publicationsFor(citations: Citation[], personId: string) {
  const papers = new Map(
    (await getCollection('selectedResearch')).map((p) => [p.data.url, p.data]),
  );
  return Promise.all(
    citations.map(async (citation) => {
      const canonical = citation.url ? papers.get(citation.url) : undefined;
      const paper = canonical
        ? {
            ...citation,
            title: canonical.title,
            authors: canonical.authors,
            venue: canonical.venue,
          }
        : citation;
      return { ...paper, authorParts: await linkAuthors(paper.authors, personId) };
    }),
  );
}
