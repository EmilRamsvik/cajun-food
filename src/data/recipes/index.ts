import { Recipe } from '@/types/recipe';

import { roux } from './roux';
import { holyTrinity } from './holy-trinity';
import { cajunpasta } from './cajunpasta';
import { jambalaya } from './jambalaya';
import { gumbo } from './gumbo';
import { dirtyRice } from './dirty-rice';
import { redBeansAndRice } from './red-beans-and-rice';
import { skalldyrfest } from './skalldyrfest';

export const recipes: Recipe[] = [
  roux,
  holyTrinity,
  cajunpasta,
  jambalaya,
  gumbo,
  dirtyRice,
  redBeansAndRice,
  skalldyrfest,
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

// Re-export individual recipes for direct imports
export {
  roux,
  holyTrinity,
  cajunpasta,
  jambalaya,
  gumbo,
  dirtyRice,
  redBeansAndRice,
  skalldyrfest,
};
