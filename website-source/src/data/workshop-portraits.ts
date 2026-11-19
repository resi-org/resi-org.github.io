import type { ImageMetadata } from 'astro';
import boaz from '../assets/workshop-speakers/boaz-portrait.jpg';
import vincent from '../assets/workshop-speakers/vincent-conitzer.jpg';
import adam from '../assets/workshop-speakers/adam-gleave-supplied-nov18.jpg';
import mitchell from '../assets/workshop-speakers/mitchell-gordon.png';
import elad from '../assets/workshop-speakers/elad-hazan.png';
import yael from '../assets/workshop-speakers/yael-tauman-kalai.jpg';
import zico from '../assets/workshop-speakers/zico-kolter.png';
import orr from '../assets/workshop-speakers/orr-paradise.jpg';
import royFar from '../assets/workshop-speakers/roy-rinberg-far-ai.webp';
import jacob from '../assets/workshop-speakers/jacob-tsimerman.jpg';
import nickolai from '../assets/workshop-speakers/nickolai-zeldovich.jpg';
import { portraitFor } from '../lib/portraits';

export interface WorkshopPhoto {
  src: ImageMetadata | string;
  label: string;
  style?: string;
  // Keep any attribution attached to its selected photo.
  credit?: { id: string; text: string; href?: string; licenseHref?: string; licenseLabel?: string; note?: string };
}
// Final workshop selections. Keep the approved People/Home framing unchanged.
// Source/credit provenance is recorded alongside the research shortlist.
const approvedAnat = portraitFor('anat-perry', '/people/anat-perry.jpg');
const approvedDylan = portraitFor('dylan-hadfield-menell', '/people/dylan-hadfield-menell.jpg');
export const workshopPortraits: Record<string, WorkshopPhoto> = {
  'Boaz Barak': { src: boaz, label: 'White polo portrait', style: '--portrait-position: 50% 38%; --portrait-scale: 1.25; --portrait-origin: 50% 30%;' },
  'Vincent Conitzer': { src: vincent, label: 'CoRe Safe AI at CMU portrait', style: '--portrait-position: 50% 0%;' },
  'Adam Gleave': { src: adam, label: 'Supplied workshop portrait' },
  'Mitchell Gordon': { src: mitchell, label: 'Personal-site portrait', style: '--portrait-scale: 1.24; --portrait-origin: 50% 35%; --portrait-shift-y: -7%;' },
  'Dylan Hadfield-Menell': { src: approvedDylan.src!, label: 'Existing RESI portrait', style: approvedDylan.style },
  'Elad Hazan': { src: elad, label: 'Personal-site portrait', style: '--portrait-scale: 1.15; --portrait-origin: 50% 10%;' },
  'Yael Tauman Kalai': { src: yael, label: 'Dana Quigley portrait via Wikimedia Commons', style: '--portrait-scale: 1.35; --portrait-origin: 50% 25%;', credit: { id: 'yael-tauman-kalai', text: 'Dana Quigley', href: 'https://commons.wikimedia.org/wiki/File:Yael_Tauman_Kalai_portrait-public.jpg', licenseHref: 'https://creativecommons.org/licenses/by-sa/4.0/', licenseLabel: 'CC BY-SA 4.0', note: 'cropped and resized' } },
  'Zico Kolter': { src: zico, label: 'Supplied workshop portrait' },
  'Orr Paradise': { src: orr, label: 'Personal-site portrait' },
  'Anat Perry': { src: approvedAnat.src!, label: 'Existing RESI portrait', style: `${approvedAnat.style} --portrait-position: 40% 0%;` },
  'Roy Rinberg': { src: royFar, label: 'FAR.AI portrait', style: '--portrait-position: 40% 50%;' },
  'Jacob Tsimerman': { src: jacob, label: 'Simons Foundation portrait via Wikimedia Commons', style: '--portrait-position: 50% 0%;', credit: { id: 'jacob-tsimerman', text: 'Simons Foundation', href: 'https://commons.wikimedia.org/wiki/File:Jacob_Tsimerman2_c.Simons_Foundation.jpg', licenseHref: 'https://creativecommons.org/licenses/by/4.0/', note: 'cropped' } },
  'Nickolai Zeldovich': { src: nickolai, label: 'Amazon Science portrait', style: '--portrait-position: 50% 0%;' },
};
