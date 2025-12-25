import { Recipe } from '@/types/recipe';

export const cajunpasta: Recipe = {
  id: '4',
  slug: 'cajunpasta',
  title: 'Cajunpasta',
  subtitle: '4 porsjoner',
  scene: 'New Orleans Bourbon Street',
  portions: '4 porsjoner',
  ingredients: [
    '500 g pasta',
    'Kylling eller scampi',
    '1 ss cajunkrydder',
    '1 løk',
    '1 paprika',
    '2 fedd hvitløk',
    '3 dl fløte',
    'Salt',
    'Frisk persille',
  ],
  instructions: [
    'Kok pasta og spar litt av kokevannet',
    'Krydre kylling eller scampi med 1 ss cajunkrydder og stek gyllen. Legg til side',
    'Fres løk, paprika og hvitløk i samme panne',
    'Tilsett fløte, 1 ss cajunkrydder og litt pastavann. La småkoke til sausen tykner',
    'Bland inn pasta og kylling. Smak til med salt',
    'Topp med frisk persille om ønskelig',
  ],
  links: [],
  illustrationTheme: 'bourbon-street',
};
