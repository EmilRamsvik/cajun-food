'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
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
  const router = useRouter();
  const { getNextSlug, getPreviousSlug, getIndex, isLoaded } = useShuffledOrder();

  const nextSlug = getNextSlug(recipe.slug);
  const previousSlug = getPreviousSlug(recipe.slug);
  const nextRecipe = nextSlug ? getRecipeBySlug(nextSlug) : undefined;
  const currentIndex = getIndex(recipe.slug);

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (nextSlug) {
      router.push(`/${nextSlug}`);
    }
  };

  return (
    <main className="min-h-screen bg-parchment-dark p-2 sm:p-4 md:p-8">
      <RecipeNavigation
        nextSlug={nextSlug}
        previousSlug={previousSlug}
      >
        <div className="mb-2 sm:mb-4">
          <RecipeCard recipe={recipe} />
        </div>

        {/* Start cooking mode button */}
        <div className="mt-4 flex justify-center px-4">
          <Link
            href={`/${recipe.slug}/steg`}
            onClick={(e) => e.stopPropagation()}
            className="group flex w-full max-w-md items-center justify-between rounded-lg border-2 border-ink/80 bg-ink px-4 py-3 text-parchment shadow-md transition-all hover:bg-ink/90 hover:shadow-lg active:scale-[0.98] sm:px-6 sm:py-4"
          >
            <div className="text-left">
              <div className="text-xs font-medium uppercase tracking-wide text-parchment/70 sm:text-sm">
                Kokkemodus
              </div>
              <div className="font-serif text-base sm:text-lg">Start matlaging</div>
            </div>
            <div className="ml-4 transition-transform group-hover:translate-x-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="sm:h-7 sm:w-7"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>

        {nextRecipe && <NextUpPanel nextRecipe={nextRecipe} />}

        {/* Next recipe button - prominent for mobile users */}
        {nextRecipe && (
          <div className="mt-4 flex justify-center px-4">
            <button
              onClick={handleNextClick}
              className="group flex w-full max-w-md items-center justify-between rounded-lg border-2 border-warm-brown/30 bg-parchment px-4 py-3 shadow-md transition-all hover:border-warm-brown/50 hover:shadow-lg active:scale-[0.98] sm:px-6 sm:py-4"
            >
              <div className="text-left">
                <div className="text-xs font-medium uppercase tracking-wide text-warm-brown/70 sm:text-sm">
                  Neste oppskrift
                </div>
                <div className="font-serif text-base text-gray-brown sm:text-lg">
                  {nextRecipe.title}
                </div>
              </div>
              <div className="ml-4 text-warm-brown transition-transform group-hover:translate-x-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="sm:h-7 sm:w-7"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        )}

        {/* Recipe counter */}
        <div className="mt-2 pb-4 text-center text-xs text-warm-brown sm:mt-4 sm:text-sm">
          {isLoaded ? `${currentIndex + 1} av ${recipes.length}` : `— av ${recipes.length}`}
        </div>
      </RecipeNavigation>
    </main>
  );
}
