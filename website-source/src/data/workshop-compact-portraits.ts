import nickolai from '../assets/workshop-speakers/nickolai-zeldovich-supplied-nov27.jpg';
import { workshopPortraits, type WorkshopPhoto } from './workshop-portraits';
import { workshopParticipantPortraits } from './workshop-participant-portraits';
import { portraitFor } from '../lib/portraits';

// Square-only framing for the unlisted compact alternative. Keep the taller
// published portraits and shared People/Home framing independent.
const anat = portraitFor('anat-perry', '/people/anat-perry.jpg');
export const workshopCompactPortraits: Record<string, WorkshopPhoto> = {
  'Boaz Barak': { ...workshopPortraits['Boaz Barak'], style: '--portrait-position: 50% 38%; --portrait-scale: 1.42; --portrait-origin: 50% 30%;' },
  'Roy Rinberg': { ...workshopPortraits['Roy Rinberg'], style: '--portrait-scale: 1.12; --portrait-origin: 50% 25%; --portrait-shift-y: 3%;' },
  'Zico Kolter': { ...workshopPortraits['Zico Kolter'], style: '--portrait-scale: 1.04; --portrait-origin: 50% 0%;' },
  'Elad Hazan': { ...workshopPortraits['Elad Hazan'], style: '--portrait-scale: 1.18; --portrait-origin: 50% 0%;' },
  'Orr Paradise': { ...workshopPortraits['Orr Paradise'], style: '--portrait-scale: 1.12; --portrait-origin: 50% 0%; --portrait-shift-y: 6%; background-color: #fff;' },
  'Martha Minow': { ...workshopParticipantPortraits['Martha Minow'], style: '--portrait-position: 50% 0%; --portrait-scale: 1.15; --portrait-origin: 50% 15%; --portrait-shift-y: 8%; background: linear-gradient(90deg, #c3c4cb, #cbcdd1 25%, #d1ccd5 50%, #cdccd1 75%, #c1c2c9);' },
  'Dylan Hadfield-Menell': { ...workshopPortraits['Dylan Hadfield-Menell'], style: '--portrait-position: 50% 0%; --portrait-scale: 1.08; --portrait-origin: 20% 0%;' },
  'Nickolai Zeldovich': { ...workshopPortraits['Nickolai Zeldovich'], src: nickolai, label: 'Supplied wider Amazon Science portrait', style: '--portrait-position: 57% 0%;' },
  // The narrow original needs a small neutral side fill to show more of the
  // original frame. Its face pixels remain untouched.
  'Vincent Conitzer': { ...workshopPortraits['Vincent Conitzer'], style: '--portrait-fit: contain; --portrait-position: 50% 0%; --portrait-scale: 1.30; --portrait-origin: 50% 0%; background: linear-gradient(#504f51, #8e8d92 60%, #b6b3b9);' },
  'Anat Perry': { src: anat.src!, style: anat.style, label: 'Exact approved RESI People portrait and framing' },
};
