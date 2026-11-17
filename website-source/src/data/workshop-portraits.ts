import type { ImageMetadata } from 'astro';
import boaz from '../assets/workshop-speakers/boaz-portrait.jpg';
import vincent from '../assets/workshop-speakers/vincent-conitzer.jpg';
import adam from '../assets/workshop-speakers/adam-gleave-headroom.png';
import mitchell from '../assets/workshop-speakers/mitchell-gordon.png';
import elad from '../assets/workshop-speakers/elad-hazan.png';
import zico from '../assets/workshop-speakers/zico-kolter.png';
import orr from '../assets/workshop-speakers/orr-paradise.jpg';
import royFar from '../assets/workshop-speakers/roy-rinberg-far-ai.webp';
import nickolai from '../assets/workshop-speakers/nickolai-zeldovich.jpg';
import { portraitFor } from '../lib/portraits';

export interface WorkshopPhoto {
  src: ImageMetadata | string;
  label: string;
  style?: string;
  // Keep any attribution attached to its selected photo.
  credit?: { id: string; text: string; href?: string };
}
// Final workshop selections. Keep the approved People/Home framing unchanged.
// Source/credit provenance is recorded alongside the research shortlist.
const approvedAnat = portraitFor('anat-perry', '/people/anat-perry.jpg');
export const workshopPortraits: Record<string, WorkshopPhoto> = {
  'Boaz Barak': { src: boaz, label: 'White polo portrait', style: '--portrait-position: 50% 38%; --portrait-scale: 1.25; --portrait-origin: 50% 30%;' },
  'Vincent Conitzer': { src: vincent, label: 'CoRe Safe AI at CMU portrait', style: '--portrait-position: 50% 0%;' },
  // Serve the lossless asset directly: its entire original photo region is
  // pixel-identical; only 80px of matching background was added above it.
  // Bottom-anchored 29/27 scale splits the original square and extended framing.
  'Adam Gleave': { src: adam.src, label: 'Personal-site portrait with extended background', style: '--portrait-scale: 1.074074; --portrait-origin: 50% 100%;' },
  'Mitchell Gordon': { src: mitchell, label: 'Personal-site portrait', style: '--portrait-scale: 1.24; --portrait-origin: 50% 35%; --portrait-shift-y: -7%;' },
  'Elad Hazan': { src: elad, label: 'Personal-site portrait', style: '--portrait-scale: 1.15; --portrait-origin: 50% 10%;' },
  'Zico Kolter': { src: zico, label: 'Supplied workshop portrait' },
  'Orr Paradise': { src: orr, label: 'Personal-site portrait' },
  'Anat Perry': { src: approvedAnat.src!, label: 'Existing RESI portrait', style: `${approvedAnat.style} --portrait-position: 40% 0%;` },
  'Roy Rinberg': { src: royFar, label: 'FAR.AI portrait', style: '--portrait-position: 40% 50%;' },
  'Nickolai Zeldovich': { src: nickolai, label: 'Amazon Science portrait', style: '--portrait-position: 50% 0%;' },
};
