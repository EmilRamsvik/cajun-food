import { Recipe } from '@/types/recipe';

export const roux: Recipe = {
  id: '2',
  slug: 'roux',
  title: 'Roux',
  subtitle: 'Basen i all cajunmat',
  scene: 'Mississippi dampbåt',
  ingredients: ['1 dl olje', '1 dl hvetemel'],
  instructions: [
    'Visp inn hvetemel i olje gradvis til klumpfri',
    'Rør konstant til fargen er mørk som sjokolade',
    'Lukten skal være nøtteaktig, ikke brent',
    'Ferdig når fargen er dyp kastanjebrun',
    'Oppbevares i kjøleskap i opptil 2 uker',
  ],
  links: [],
  externalLinks: [{ text: 'Video', url: 'https://youtu.be/nORg_aXMsmA?t=186' }],
  illustrationTheme: 'steamboat',
};
