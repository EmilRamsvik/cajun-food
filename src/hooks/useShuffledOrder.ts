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

export function getShuffledOrder(): string[] {
  if (typeof window === 'undefined') {
    return recipes.map((r) => r.slug);
  }

  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // If parsing fails, create new order
    }
  }

  const slugs = recipes.map((r) => r.slug);
  const shuffled = shuffleArray(slugs);
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(shuffled));
  return shuffled;
}

// Cache the order to avoid recomputing on each render
let cachedOrder: string[] | null = null;

function getSnapshot(): string[] {
  if (cachedOrder === null) {
    cachedOrder = getShuffledOrder();
  }
  return cachedOrder;
}

function getServerSnapshot(): string[] {
  return recipes.map((r) => r.slug);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function subscribe(_callback: () => void): () => void {
  // No external updates to subscribe to
  return () => {};
}

export function useShuffledOrder() {
  const order = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isLoaded = typeof window !== 'undefined';

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
