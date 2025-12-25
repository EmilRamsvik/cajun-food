import { Recipe } from '@/types/recipe';

export const redBeansAndRice: Recipe = {
  id: '8',
  slug: 'red-beans-and-rice',
  title: 'Red Beans and Rice',
  subtitle: '6 porsjoner',
  scene: 'Dave Robicheaux krimscene',
  portions: '6 porsjoner',
  ingredients: [
    '500 g tørre kidneybønner',
    '300 g pølse',
    'Holy trinity',
    '1,5 l kraft',
    '2 laubærblad',
    'Kokt ris',
    'Tabasco',
    'Vårløk',
  ],
  instructions: [
    'Bløtlegg bønner over natten, hell av vannet',
    'Brun pølse i en stor gryte, legg til side',
    'Fres holy trinity i samme gryte til mykt',
    'Ha i bønner, pølse, kraft og laubærblad',
    'Småkok i 2–3 timer til bønnene er kremete, mos noen mot kanten',
    'Server over kokt ris med tabasco og vårløk',
  ],
  links: ['holy-trinity'],
  illustrationTheme: 'robicheaux',
};
