'use client';

import { useSyncExternalStore } from 'react';
import { recipes } from '@/data/recipes';

const STORAGE_KEY = 'cajun-recipe-order';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Cached server snapshot - must be stable reference
const serverSnapshot: string[] = recipes.map((r) => r.slug);

// Client-side cache
let clientSnapshot: string[] | null = null;

function getClientSnapshot(): string[] {
  if (clientSnapshot === null) {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        clientSnapshot = JSON.parse(stored);
        return clientSnapshot!;
      } catch {
        // If parsing fails, create new order
      }
    }

    const slugs = recipes.map((r) => r.slug);
    const shuffled = shuffleArray(slugs);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(shuffled));
    clientSnapshot = shuffled;
  }
  return clientSnapshot;
}

function getServerSnapshot(): string[] {
  return serverSnapshot;
}

function subscribe(): () => void {
  return () => {};
}

export function useShuffledOrder() {
  const order = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const isLoaded = typeof window !== 'undefined' && clientSnapshot !== null;

  const getNextSlug = (currentSlug: string): string | undefined => {
    const currentIndex = order.indexOf(currentSlug);
    if (currentIndex === -1 || currentIndex === order.length - 1) {
      return undefined;
    }
    return order[currentIndex + 1];
  };

  const getPreviousSlug = (currentSlug: string): string | undefined => {
    const currentIndex = order.indexOf(currentSlug);
    if (currentIndex <= 0) {
      return undefined;
    }
    return order[currentIndex - 1];
  };

  const getIndex = (slug: string): number => {
    return order.indexOf(slug);
  };

  const getFirstSlug = (): string | undefined => {
    return order[0];
  };

  return {
    order,
    isLoaded,
    getNextSlug,
    getPreviousSlug,
    getIndex,
    getFirstSlug,
  };
}
