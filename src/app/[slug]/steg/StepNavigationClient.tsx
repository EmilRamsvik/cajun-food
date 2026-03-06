'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Recipe } from '@/types/recipe';
import { useRandomImages } from '@/hooks/useRandomImages';

interface StepNavigationClientProps {
  recipe: Recipe;
}

export function StepNavigationClient({ recipe }: StepNavigationClientProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'forward' | 'back'>('forward');
  const [animating, setAnimating] = useState(false);
  const { getImageForRecipe } = useRandomImages();
  const randomImage = getImageForRecipe(recipe.slug);

  const totalSteps = recipe.instructions.length;
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const goNext = useCallback(() => {
    if (animating) return;
    setSlideDirection('forward');
    setAnimating(true);
    setTimeout(() => {
      if (currentStep < totalSteps - 1) {
        setCurrentStep((s) => s + 1);
      } else {
        setIsDone(true);
      }
      setAnimating(false);
    }, 150);
  }, [animating, currentStep, totalSteps]);

  const goPrevious = useCallback(() => {
    if (animating) return;
    if (isDone) {
      setSlideDirection('back');
      setAnimating(true);
      setTimeout(() => {
        setIsDone(false);
        setAnimating(false);
      }, 150);
      return;
    }
    if (currentStep > 0) {
      setSlideDirection('back');
      setAnimating(true);
      setTimeout(() => {
        setCurrentStep((s) => s - 1);
        setAnimating(false);
      }, 150);
    }
  }, [animating, currentStep, isDone]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrevious();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrevious]);

  // Touch/swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        goPrevious();
      } else {
        goNext();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Click to advance (anywhere on card, not on links)
  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.closest('a')) return;
    goNext();
  };

  const instruction = recipe.instructions[currentStep];
  const progressPercent = isDone ? 100 : ((currentStep + 1) / totalSteps) * 100;

  return (
    <main className="min-h-screen bg-parchment-dark p-2 sm:p-4 md:p-8">
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative mx-auto max-w-3xl"
      >
        <article
          onClick={handleCardClick}
          className="parchment-bg paper-edge relative flex min-h-[85vh] cursor-pointer flex-col overflow-hidden rounded-lg sm:min-h-[80vh] lg:min-h-[75vh]"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating
              ? `translateX(${slideDirection === 'forward' ? '-20px' : '20px'})`
              : 'translateX(0)',
            transition: 'opacity 0.15s ease, transform 0.15s ease',
          }}
        >
          {/* Background image */}
          {randomImage && (
            <div className="pointer-events-none absolute inset-0">
              <Image
                src={randomImage}
                alt=""
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(
                    135deg,
                    var(--parchment) 0%,
                    rgba(245, 230, 200, 0.97) 30%,
                    rgba(245, 230, 200, 0.8) 60%,
                    rgba(245, 230, 200, 0.4) 100%
                  )`,
                }}
              />
            </div>
          )}

          {/* Header: back link + recipe title */}
          <div className="relative z-10 flex items-center justify-between p-5 sm:p-6 md:p-10">
            <Link
              href={`/${recipe.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm text-warm-brown transition-opacity hover:opacity-70 sm:text-base"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Tilbake til oppskriften
            </Link>
            <span
              className="text-base font-semibold text-ink sm:text-lg"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {recipe.title}
            </span>
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-6 sm:px-10 md:px-16">
            {isDone ? (
              /* Completion screen */
              <div className="text-center">
                <div className="mb-4 text-5xl sm:text-6xl">🍽️</div>
                <h2
                  className="mb-3 text-3xl font-bold text-ink sm:text-4xl md:text-5xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Ferdig!
                </h2>
                <p className="mb-8 text-lg text-warm-brown sm:text-xl">God appetitt!</p>
                <Link
                  href={`/${recipe.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 text-parchment transition-opacity hover:opacity-80"
                >
                  Tilbake til oppskriften
                </Link>
              </div>
            ) : (
              /* Step card */
              <div className="w-full max-w-lg text-center">
                {/* Step counter */}
                <p className="mb-6 text-sm font-medium uppercase tracking-widest text-warm-brown sm:text-base">
                  Steg {currentStep + 1} av {totalSteps}
                </p>

                {/* Instruction text */}
                <p
                  className="mb-10 text-xl leading-relaxed text-ink sm:text-2xl md:text-3xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {renderInstructionWithLinks(instruction, recipe.links)}
                </p>

                {/* Tap hint */}
                <p className="text-sm text-warm-brown/60 sm:text-base">
                  {currentStep < totalSteps - 1
                    ? 'Trykk for å gå videre'
                    : 'Trykk for å fullføre'}
                </p>
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="relative z-10 px-5 pb-5 sm:px-6 sm:pb-6 md:px-10 md:pb-8">
            {/* Progress dots */}
            <div className="mb-3 flex justify-center gap-1.5">
              {recipe.instructions.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === currentStep && !isDone ? '20px' : '8px',
                    height: '8px',
                    backgroundColor:
                      i < currentStep || isDone
                        ? 'var(--warm-brown)'
                        : i === currentStep
                          ? 'var(--ink)'
                          : 'var(--warm-brown)',
                    opacity: i < currentStep || isDone ? 0.5 : i === currentStep ? 1 : 0.25,
                  }}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="h-1 w-full overflow-hidden rounded-full bg-warm-brown/20">
              <div
                className="h-full rounded-full bg-warm-brown transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </article>

        {/* Navigation arrows */}
        {(currentStep > 0 || isDone) && (
          <button
            onClick={goPrevious}
            aria-label="Forrige steg"
            className="nav-arrow absolute left-2 top-1/2 z-20 -translate-y-1/2 opacity-50 sm:left-3 sm:opacity-60 md:left-4"
          >
            <svg
              width="28"
              height="56"
              viewBox="0 0 24 48"
              fill="none"
              className="text-warm-brown drop-shadow-md sm:h-16 sm:w-8"
            >
              <path
                d="M20 4L4 24L20 44"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <button
          onClick={goNext}
          aria-label="Neste steg"
          className="nav-arrow absolute right-2 top-1/2 z-20 -translate-y-1/2 opacity-50 sm:right-3 sm:opacity-60 md:right-4"
        >
          <svg
            width="28"
            height="56"
            viewBox="0 0 24 48"
            fill="none"
            className="text-warm-brown drop-shadow-md sm:h-16 sm:w-8"
          >
            <path
              d="M4 4L20 24L4 44"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}

function renderInstructionWithLinks(
  instruction: string,
  links: string[]
): React.ReactNode {
  if (links.length === 0) return instruction;

  const linkPatterns: { [key: string]: string } = {
    cajunkrydder: 'cajunkrydder',
    'holy trinity': 'holy-trinity',
    roux: 'roux',
  };

  let result: React.ReactNode[] = [instruction];

  Object.entries(linkPatterns).forEach(([pattern, slug]) => {
    if (links.includes(slug) || links.includes(pattern)) {
      result = result.flatMap((part): React.ReactNode[] => {
        if (typeof part !== 'string') return [part];
        const regex = new RegExp(`(${pattern})`, 'gi');
        const parts = part.split(regex);
        return parts.map((p, i): React.ReactNode => {
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
