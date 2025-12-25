import { Recipe } from '@/types/recipe';

export const jambalaya: Recipe = {
  id: '5',
  slug: 'jambalaya',
  title: 'Jambalaya',
  subtitle: '4–6 porsjoner',
  scene: 'Antebellum-hus',
  portions: '4–6 porsjoner',
  ingredients: [
    '500 g kylling eller reker',
    '1 ss cajunkrydder',
    '300 g pølse (chorizo eller røkt andepølse)',
    'Holy trinity',
    '4 dl langkornet ris',
    '8 dl kraft',
    '1 boks hermetiske tomater',
    'Tabasco',
  ],
  instructions: [
    'Brun kylling eller reker med 1 ss cajunkrydder. Legg til side',
    'Stek pølse i biter i samme panne',
    'Tilsett holy trinity og fres til mykt',
    'Ha i ris, kraft og hermetiske tomater',
    'Småkok med lokk i 20–25 min til risen er mør',
    'Bland inn kjøttet og smak til med cajunkrydder og tabasco',
  ],
  links: ['holy-trinity'],
  illustrationTheme: 'antebellum',
};
