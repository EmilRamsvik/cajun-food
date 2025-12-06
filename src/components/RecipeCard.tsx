'use client';

import { Recipe } from '@/types/recipe';
import Link from 'next/link';
import { IllustrationPlaceholder } from './IllustrationPlaceholder';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="parchment-bg paper-edge animate-slide-in relative mx-auto flex min-h-[80vh] max-w-3xl flex-col overflow-hidden rounded-lg p-6 md:p-10">
      {/* Recipe content - top left */}
      <div className="relative z-10 flex-1">
        {/* Title */}
        <header className="mb-6">
          <h1
            className="mb-2 text-4xl font-bold md:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {recipe.title}
          </h1>
          <p className="text-lg text-warm-brown">{recipe.subtitle}</p>
        </header>

        {/* Ingredients */}
        <section className="mb-6">
          <ul className="space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-warm-brown">•</span>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Instructions */}
        <section className="max-w-md">
          {recipe.instructions.map((instruction, index) => (
            <p key={index} className="mb-2 text-gray-brown">
              {renderInstructionWithLinks(instruction, recipe.links)}
            </p>
          ))}
        </section>
      </div>

      {/* Illustration - bottom right, fading into parchment */}
      <div className="illustration-fade pointer-events-none absolute bottom-0 right-0 h-2/3 w-2/3 md:h-3/4 md:w-1/2">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, var(--parchment) 0%, transparent 40%)',
          }}
        />
        <IllustrationPlaceholder theme={recipe.illustrationTheme} />
      </div>
    </article>
  );
}

function renderInstructionWithLinks(
  instruction: string,
  links: string[]
): React.ReactNode {
  if (links.length === 0) {
    return instruction;
  }

  const linkPatterns: { [key: string]: string } = {
    cajunkrydder: 'cajunkrydder',
    'holy trinity': 'holy-trinity',
    roux: 'roux',
  };

  let result: React.ReactNode[] = [instruction];

  Object.entries(linkPatterns).forEach(([pattern, slug]) => {
    if (links.includes(slug) || links.includes(pattern)) {
      result = result.flatMap((part) => {
        if (typeof part !== 'string') return [part];

        const regex = new RegExp(`(${pattern})`, 'gi');
        const parts = part.split(regex);

        return parts.map((p, i) => {
          if (p.toLowerCase() === pattern.toLowerCase()) {
            return (
              <Link key={`${slug}-${i}`} href={`/${slug}`} className="recipe-link">
                {p}
              </Link>
            );
          }
          return p;
        });
      });
    }
  });

  return result;
}
