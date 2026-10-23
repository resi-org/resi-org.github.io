import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob, file } from 'astro/loaders';

// People, visitors and affiliated groups are editable without touching markup.
// Each person is one markdown file in content/people/: frontmatter holds the
// facts (name, group, order, photo, link, publications); the body is the bio.
// `summary` is the one-line credential used where a person is named outside
// the People page (the founders on the homepage).
const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/people' }),
  schema: z.object({
    name: z.string(),
    group: z.enum(['founders', 'research', 'operations']),
    order: z.number(),
    summary: z.string().optional(),
    photo: z.string().optional(),
    url: z.url().optional(),
    wikipedia: z.url().optional(),
    role: z.string().optional(),
    publications: z
      .array(
        z.object({
          title: z.string(),
          authors: z.string().optional().default(''),
          venue: z.string().optional().default(''),
          url: z.string().optional(),
        }),
      )
      .optional()
      .default([]),
  }),
});

// Visitors are listed alphabetically by last name; `order` preserves the
// file's order because the store itself sorts entries by id. `url` is the
// visitor's own site where they have one, otherwise their institutional
// page; the name links to it.
const visitors = defineCollection({
  loader: file('./content/visitors.json', {
    parser: (text) => JSON.parse(text).map((v: any, i: number) => ({ id: v.name, order: i, ...v })),
  }),
  schema: z.object({
    name: z.string(),
    affiliation: z.string(),
    status: z.enum(['past', 'planned']).default('planned'),
    url: z.url().optional(),
    order: z.number(),
  }),
});

// Affiliated research communities, in the order RESI lists them.
const affiliated = defineCollection({
  loader: file('./content/affiliated.json', {
    parser: (text) => JSON.parse(text).map((v: any, i: number) => ({ id: v.name, order: i, ...v })),
  }),
  schema: z.object({ name: z.string(), url: z.string().optional(), order: z.number() }),
});

// Legacy partner collection retained for compatibility. Draft C grant
// acknowledgments are centralized in src/data/institute.ts.
const partners = defineCollection({
  loader: file('./content/partners.json', {
    parser: (text) => JSON.parse(text).map((v: any, i: number) => ({ id: v.name, order: i, ...v })),
  }),
  schema: z.object({ name: z.string(), url: z.string().optional(), order: z.number() }),
});

// The papers shown on the Research page, with a description of what each
// does. `placement` retains the collection tags and assigns working-group
// papers to their existing groups. Citation style is settled
// in content/_SELECTED-RESEARCH-README.md.
const selectedResearch = defineCollection({
  loader: file('./content/selected-research.json', {
    parser: (text) =>
      JSON.parse(text).map((v: any, i: number) => ({ id: v.title, order: i, ...v })),
  }),
  schema: z.object({
    title: z.string(),
    authors: z.string().optional().default(''),
    venue: z.string().optional().default(''),
    url: z.string().optional(),
    note: z.string(),
    relationship: z.string().default('Prior work by researchers now associated with RESI'),
    featured: z.number().optional(),
    // Short headings and explanatory copy from Shafi's six research examples.
    // Full, verified citations remain in the canonical fields above.
    highlight: z
      .object({
        id: z.string(),
        title: z.string(),
        tag: z.string(),
        summary: z.string(),
        byline: z.string().optional(),
        caveat: z.string().optional(),
      })
      .optional(),
    topic: z.string().optional(),
    problem: z.string().optional(),
    limitation: z.string().optional(),
    conferenceNote: z.string().optional(),
    // An optional stable anchor, so prose elsewhere on the page can link to
    // this exact entry rather than to the section.
    anchor: z.string().optional(),
    placement: z.enum([
      'selected',
      'verification',
      'control',
      'limits',
      'cryptography',
      'ai-assisted',
      // One placement per working group, not one shared bucket: two groups
      // sharing "working-groups" would each have shown the other's papers.
      'wg-game-theoretic-foundations',
      'wg-legal-alignment',
      'wg-data-attribution',
    ]),
    order: z.number(),
  }),
});

// Updates and events are sourced entries. See the README in each folder
// before adding a new announcement or convening.
const updates = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './content/updates' }),
  schema: z.object({
    title: z.string(),
    homepageTitle: z.string().optional(),
    homepageSummary: z.string().optional(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    category: z.enum(['From the institute', 'Press']).optional(),
    url: z.string().optional(),
    // Press coverage: the publication that ran it, and the reporter. When
    // `outlet` is set the title is somebody else's headline, and the page
    // presents it as a quotation rather than as RESI's own words.
    outlet: z.string().optional(),
    byline: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './content/events' }),
  schema: z.object({
    title: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    location: z.string(),
    with: z.array(z.string()).optional().default([]),
    url: z.string().optional(),
  }),
});

export const collections = {
  people,
  visitors,
  affiliated,
  partners,
  selectedResearch,
  updates,
  events,
};
