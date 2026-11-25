import { workshopPortraits, type WorkshopPhoto } from './workshop-portraits';
import nicola from '../assets/workshop-speakers/nicola-greco.jpg';
import yuval from '../assets/workshop-speakers/yuval-ishai.jpg';
import tal from '../assets/workshop-speakers/tal-rabin-iu.jpg';
import martha from '../assets/workshop-speakers/martha-minow.jpg';
import madry from '../assets/workshop-speakers/aleksander-madry.png';

// Preview selections for confirmed panelists only. Names/affiliations/roles
// continue to come from the canonical event record.
export const workshopParticipantPortraits: Record<string, WorkshopPhoto> = {
  'Nicola Greco': { src: nicola, label: 'Personal-site portrait', style: '--portrait-position: 50% 0%;', credit: { id: 'nicola-greco', text: 'Virginia Alonso', href: 'https://nicola.io/about/' } },
  'Yuval Ishai': { src: yuval, label: 'Simons Institute profile portrait' },
  'Tal Rabin': { src: tal, label: 'Indiana University Women & Technology portrait', style: '--portrait-scale: 1.5; --portrait-origin: 50% 0%; --portrait-shift-y: 6%; background-color: #fff;' },
  'Martha Minow': { src: martha, label: 'Harvard Law faculty portrait', style: '--portrait-position: 50% 0%;' },
  'Aleksander Mądry': { src: madry, label: 'Personal-site portrait', style: '--portrait-position: 50% 30%;' },
  // Keep Yael’s close square crop independent of her larger talk portrait, with headroom.
  'Yael Tauman Kalai': { ...workshopPortraits['Yael Tauman Kalai'], style: '--portrait-scale: 1.35; --portrait-origin: 50% 25%; --portrait-position: 50% 20%;' },
  'Jacob Tsimerman': workshopPortraits['Jacob Tsimerman'],
};
