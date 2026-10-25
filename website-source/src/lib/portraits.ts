// Small, source-specific crops. Keep the original image pixels intact.
const portraitFraming: Record<string, { position?: string; scale?: number; origin?: string; src?: string; shiftY?: string }> = {
  'vinod-vaikuntanathan': {
    scale: 1.03,
    origin: '50% 0%',
  },
  'shafi-goldwasser': {
    shiftY: '1.82%',
    scale: 1.0609,
    origin: '50% 0%',
  },
  'chloe-bakalar': {
    position: '50% 0%',
    scale: 1.07,
    origin: '50% 0%',
  },
  'daniela-rus': {
    src: '/people/daniela-rus-headroom-v2.svg',
    position: '50% 0%',
    scale: 1.04,
    origin: '100% 0%',
  },
  'mirac-suzgun': {
    src: '/people/mirac-suzgun-extended.png',
  },
  'miranda-christ': {
    scale: 1.10,
    origin: '50% 35%',
  },
  'greg-gluch': {
    position: '50% 35%',
  },
  'dylan-hadfield-menell': {
    scale: 1.24,
    origin: '0% 0%',
  },
  'yael-tauman-kalai': {
    src: '/people/yael-tauman-kalai-extended.svg',
    position: '50% 0%',
    scale: 1.20,
    origin: '65% 0%',
  },
  'neekon-vafa': {
    scale: 1.10,
    origin: '50% 30%',
  },
  'noam-kolt': {
    scale: 1.22,
    origin: '50% 0%',
  },
  'anat-perry': {
    src: '/people/anat-perry-extended.svg',
    position: '50% 0%',
    scale: 1.27,
    origin: '50% 0%',
  },
  'jonathan-shafer': {
    scale: 1.25,
    origin: '35% 15%',
  },
  'yaron-singer': {
    scale: 1.30,
    origin: '78% 0%',
  },
  'emily-uyeda-kantrim': {
    position: '50% 0%',
    scale: 1.20,
    origin: '90% 10%',
  },
  'ran-canetti': {
    src: '/people/ran-canetti-extended.svg',
    position: '50% 0%',
  },
  'yannai-a-gonczarowski': {
    src: '/people/yannai-a-gonczarowski-extended.svg',
    position: '50% 0%',
    scale: 1.04,
    origin: '50% 0%',
  },
  'rebecca-wexler': {
    position: '50% 0%',
    scale: 1.10,
    origin: '50% 0%',
  },
  'or-zamir': {
    scale: 1.75,
    origin: '52% 12%',
  },
};

// One framing source for People and every homepage mosaic tile.
export function portraitFor(id: string, photo?: string) {
  const framing = portraitFraming[id] ?? {};
  return {
    src: framing.src ?? photo,
    style: `--portrait-position: ${framing.position ?? '50% 50%'}; --portrait-scale: ${framing.scale ?? 1}; --portrait-origin: ${framing.origin ?? '50% 50%'};${framing.shiftY ? ` --portrait-shift-y: ${framing.shiftY}; background-image: url('${framing.src ?? photo}'); background-size: cover; background-position: center top;` : ''}`,
  };
}
