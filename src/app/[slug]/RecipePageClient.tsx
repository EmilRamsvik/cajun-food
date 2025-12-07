'use client';

import { Recipe } from '@/types/recipe';
import { RecipeCard } from '@/components/RecipeCard';
import { RecipeNavigation } from '@/components/RecipeNavigation';
import { NextUpPanel } from '@/components/NextUpPanel';
import { getRecipeBySlug, recipes } from '@/data/recipes';
import { useShuffledOrder } from '@/hooks/useShuffledOrder';

interface RecipePageClientProps {
  recipe: Recipe;
}

export function RecipePageClient({ recipe }: RecipePageClientProps) {
  const { getNextSlug, getPreviousSlug, getIndex, isLoaded } = useShuffledOrder();

  const nextSlug = getNextSlug(recipe.slug);
  const previousSlug = getPreviousSlug(recipe.slug);
  const nextRecipe = nextSlug ? getRecipeBySlug(nextSlug) : undefined;
  const currentIndex = getIndex(recipe.slug);

  return (
    <main className="min-h-screen bg-parchment-dark p-2 sm:p-4 md:p-8">
      <RecipeNavigation
        nextSlug={nextSlug}
        previousSlug={previousSlug}
      >
        <div className="mb-2 sm:mb-4">
          <RecipeCard recipe={recipe} />
        </div>

        {nextRecipe && <NextUpPanel nextRecipe={nextRecipe} />}

        {/* Recipe counter */}
        <div className="mt-2 pb-4 text-center text-xs text-warm-brown sm:mt-4 sm:text-sm">
          {isLoaded ? `${currentIndex + 1} av ${recipes.length}` : `— av ${recipes.length}`}
        </div>
      </RecipeNavigation>
    </main>
  );
}
