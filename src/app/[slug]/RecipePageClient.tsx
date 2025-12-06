'use client';

import { Recipe } from '@/types/recipe';
import { RecipeCard } from '@/components/RecipeCard';
import { RecipeNavigation } from '@/components/RecipeNavigation';
import { NextUpPanel } from '@/components/NextUpPanel';
import { getNextRecipe, getPreviousRecipe, getRecipeIndex, recipes } from '@/data/recipes';

interface RecipePageClientProps {
  recipe: Recipe;
}

export function RecipePageClient({ recipe }: RecipePageClientProps) {
  const nextRecipe = getNextRecipe(recipe.slug);
  const previousRecipe = getPreviousRecipe(recipe.slug);
  const currentIndex = getRecipeIndex(recipe.slug);

  return (
    <main className="min-h-screen bg-parchment-dark p-4 md:p-8">
      <RecipeNavigation
        nextSlug={nextRecipe?.slug}
        previousSlug={previousRecipe?.slug}
      >
        <div className="mb-4">
          <RecipeCard recipe={recipe} />
        </div>

        {nextRecipe && <NextUpPanel nextRecipe={nextRecipe} />}

        {/* Recipe counter */}
        <div className="mt-4 text-center text-sm text-warm-brown">
          {currentIndex + 1} av {recipes.length}
        </div>
      </RecipeNavigation>
    </main>
  );
}
