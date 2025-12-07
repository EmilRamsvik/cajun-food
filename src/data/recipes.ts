import { Recipe } from '@/types/recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    slug: 'cajunkrydder',
    title: 'Cajunkrydder',
    subtitle: 'Hjemmelaget kryddermiks',
    scene: 'Louisiana bayou',
    ingredients: [
      '2 ss paprika',
      '1 ss hvitløkspulver',
      '1 ss løkpulver',
      '1 ss oregano',
      '1 ss timian',
      '1 ts cayennepepper',
      '1 ts sort pepper',
      '1 ts salt',
    ],
    instructions: ['Bland alt sammen og oppbevar i lufttett boks.'],
    links: [],
    illustrationTheme: 'bayou',
    image: '/images/bayou-noir-style.jpeg',
  },
  {
    id: '2',
    slug: 'roux',
    title: 'Roux',
    subtitle: 'Basen i all cajunmat',
    scene: 'Mississippi dampbåt',
    ingredients: ['1 dl smør eller olje', '1 dl hvetemel'],
    instructions: [
      'Smelt smør eller olje i en tykk panne på middels varme',
      'Visp inn hvetemel gradvis til klumpfri',
      'Rør konstant i 20–45 minutter til fargen er mørk som sjokolade',
      'Lukten skal være nøtteaktig, ikke brent',
      'Ferdig når fargen er dyp kastanjebrun',
      'Oppbevares i kjøleskap i opptil 2 uker',
    ],
    links: [],
    illustrationTheme: 'steamboat',
    image: '/images/SCR-20251207-imnn.jpeg',
  },
  {
    id: '3',
    slug: 'holy-trinity',
    title: 'Holy Trinity',
    subtitle: 'Cajunmatens smaksbase',
    scene: 'Kirke i sumpen (True Detective-stil)',
    ingredients: [
      '2 deler løk, finhakket',
      '1 del stangselleri, finhakket',
      '1 del grønn paprika, finhakket',
      '«The Pope»: hvitløk etter smak',
    ],
    instructions: [
      'Fres i smør eller olje til mykt og duftende',
      'Hvitløk tilsettes alltid til slutt',
      'Brukes som base i gumbo, jambalaya og de fleste cajunretter',
    ],
    links: [],
    illustrationTheme: 'church',
    image: '/images/church-noir-style.jpeg.jpeg',
  },
  {
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
    links: ['cajunkrydder'],
    illustrationTheme: 'bourbon-street',
    image: '/images/bourbon-street-parchement.jpeg',
  },
  {
    id: '5',
    slug: 'jambalaya',
    title: 'Jambalaya',
    subtitle: '4–6 porsjoner',
    scene: 'Antebellum-hus',
    portions: '4–6 porsjoner',
    ingredients: [
      '500 g kylling eller reker',
      '1 ss cajunkrydder',
      '300 g pølse (chorizo eller røkt)',
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
    links: ['cajunkrydder', 'holy-trinity'],
    illustrationTheme: 'antebellum',
    image: '/images/antebellum-house-parchement.jpeg',
  },
  {
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
    links: ['roux', 'holy-trinity', 'cajunkrydder'],
    illustrationTheme: 'true-detective',
  },
  {
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
    links: ['holy-trinity', 'cajunkrydder'],
    illustrationTheme: 'fisherman',
    image: '/images/SCR-20251207-iphe.jpeg',
  },
  {
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
  },
  {
    id: '9',
    slug: 'skalldyrfest',
    title: 'Skalldyrfest',
    subtitle: '4–6 porsjoner',
    scene: 'Louisiana bayou (variant)',
    portions: '4–6 porsjoner',
    ingredients: [
      '3 ss cajunkrydder',
      'Salt',
      'Sitron',
      '1 kg smørpotet',
      '4 maiskolber',
      '2 kg reker, kreps eller krabbe',
      'Smeltet smør',
    ],
    instructions: [
      'Kok opp stor gryte med vann, cajunkrydder, salt og sitron',
      'Ha i smørpotet og maiskolber, kok i 10 minutter',
      'Tilsett reker, kreps eller krabbe',
      'Kok i 3–5 minutter til skalldyrene er gjennomkokt',
      'Hell av vannet og server rett på bord dekket med avispapir',
      'Spises med fingrene, smeltet smør og fersk sitron',
    ],
    links: ['cajunkrydder'],
    illustrationTheme: 'bayou-fest',
  },
];

export const recipeOrder = recipes.map((r) => r.slug);

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export function getNextRecipe(currentSlug: string): Recipe | undefined {
  const currentIndex = recipeOrder.indexOf(currentSlug);
  if (currentIndex === -1 || currentIndex === recipeOrder.length - 1) {
    return undefined;
  }
  return getRecipeBySlug(recipeOrder[currentIndex + 1]);
}

export function getPreviousRecipe(currentSlug: string): Recipe | undefined {
  const currentIndex = recipeOrder.indexOf(currentSlug);
  if (currentIndex <= 0) {
    return undefined;
  }
  return getRecipeBySlug(recipeOrder[currentIndex - 1]);
}

export function getRecipeIndex(slug: string): number {
  return recipeOrder.indexOf(slug);
}
