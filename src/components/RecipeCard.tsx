'use client';

import { Recipe } from '@/types/recipe';
import Link from 'next/link';
import Image from 'next/image';
import { IllustrationPlaceholder } from './IllustrationPlaceholder';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="parchment-bg paper-edge animate-slide-in relative mx-auto flex min-h-[85vh] max-w-3xl flex-col overflow-hidden rounded-lg p-5 sm:min-h-[80vh] sm:p-6 md:p-10 lg:min-h-[75vh]">
      {/* Background image (if available) */}
      {recipe.image && (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={recipe.image}
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          {/* Gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                135deg,
                var(--parchment) 0%,
                rgba(245, 230, 200, 0.95) 25%,
                rgba(245, 230, 200, 0.7) 50%,
                rgba(245, 230, 200, 0.3) 75%,
                transparent 100%
              )`,
            }}
          />
        </div>
      )}

      {/* Recipe content - top left */}
      <div className="relative z-10 flex-1 pr-4 sm:pr-8 md:pr-16">
        {/* Title */}
        <header className="mb-4 sm:mb-6">
          <h1
            className="mb-1 text-3xl font-bold sm:mb-2 sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {recipe.title}
          </h1>
          <p className="text-base text-warm-brown sm:text-lg">{recipe.subtitle}</p>
        </header>

        {/* Ingredients */}
        <section className="mb-4 sm:mb-6">
          <ul className="space-y-0.5 text-sm sm:space-y-1 sm:text-base">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-warm-brown">•</span>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Instructions */}
        <section className="max-w-sm text-sm sm:max-w-md sm:text-base">
          {recipe.instructions.map((instruction, index) => (
            <p key={index} className="mb-1.5 text-gray-brown sm:mb-2">
              {renderInstructionWithLinks(instruction, recipe.links)}
            </p>
          ))}
        </section>
      </div>

      {/* SVG Illustration fallback - only shown when no image */}
      {!recipe.image && (
        <div className="illustration-fade pointer-events-none absolute bottom-0 right-0 h-1/2 w-1/2 sm:h-2/3 sm:w-2/3 md:h-3/4 md:w-1/2">
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, var(--parchment) 0%, transparent 40%)',
            }}
          />
          <IllustrationPlaceholder theme={recipe.illustrationTheme} />
        </div>
      )}
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
