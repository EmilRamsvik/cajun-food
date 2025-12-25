import { Recipe } from '@/types/recipe';

export const gumbo: Recipe = {
  id: '6',
  slug: 'gumbo',
  title: 'Gumbo',
  subtitle: '6 porsjoner',
  scene: 'True Detective sesong 1 ikonisk scene',
  portions: '6 porsjoner',
  ingredients: [
    'Mørk roux',
    'Holy trinity',
    '1,5 liter kraft',
    '500 g kylling i biter',
    '300 g skivet pølse',
    'Cajunkrydder',
    'Kokt ris',
    'Vårløk',
    'Filépulver',
  ],
  instructions: [
    'Lag en mørk roux i en stor gryte (se egen oppskrift)',
    'Tilsett holy trinity og fres i 5 minutter',
    'Rør inn kraft til jevn konsistens',
    'Legg i kylling og pølse',
    'Småkok i 45–60 minutter. Smak til med cajunkrydder',
    'Server over kokt ris med vårløk og filépulver',
  ],
  links: ['roux', 'holy-trinity'],
  illustrationTheme: 'true-detective',
};
