import { Recipe } from '@/types/recipe';

export const dirtyRice: Recipe = {
  id: '7',
  slug: 'dirty-rice',
  title: 'Dirty Rice',
  subtitle: '4 porsjoner',
  scene: 'Rekefisker med krabbeteiner',
  portions: '4 porsjoner',
  ingredients: [
    '300 g kjøttdeig eller hakket kylling',
    'Holy trinity',
    '4 dl langkornet ris',
    '8 dl kraft',
    '1 ss cajunkrydder',
    '2 ss smør',
    'Vårløk',
    'Persille',
  ],
  instructions: [
    'Brun kjøttdeig eller hakket kylling til gjennomstekt',
    'Tilsett holy trinity og fres til grønnsakene er myke',
    'Ha i ris og kraft',
    'Krydre med cajunkrydder, småkok i 20 min med lokk',
    'Rør inn smør når risen er ferdig',
    'Topp med hakket vårløk og persille',
  ],
  links: ['holy-trinity'],
  illustrationTheme: 'fisherman',
};
