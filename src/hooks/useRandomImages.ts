'use client';

import { useSyncExternalStore } from 'react';
import { recipes } from '@/data/recipes';

const STORAGE_KEY = 'cajun-random-images';

// All available images in public/images/
const AVAILABLE_IMAGES = [
  '/images/SCR-20251207-imnn.jpeg',
  '/images/church-noir-style.jpeg.jpeg',
  '/images/bayou-noir-style.jpeg',
  '/images/SCR-20251207-iphe.jpeg',
  '/images/bourbon-street-parchement.jpeg',
  '/images/antebellum-house-parchement.jpeg',
  '/images/SCR-20251220-jvyj.jpeg',
  '/images/SCR-20251220-jwan.jpeg',
  '/images/SCR-20251220-jwbz.jpeg',
  '/images/SCR-20251220-jwda.png',
  '/images/SCR-20251220-jxux.png',
  '/images/SCR-20251220-jxwg.jpeg',
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export type ImageMapping = Record<string, string>;

function createImageMapping(): ImageMapping {
  const slugs = recipes.map((r) => r.slug);
  const shuffledImages = shuffleArray(AVAILABLE_IMAGES);

  const mapping: ImageMapping = {};
  slugs.forEach((slug, index) => {
    // Cycle through images if there are more recipes than images
    mapping[slug] = shuffledImages[index % shuffledImages.length];
  });

  return mapping;
}

export function getImageMapping(): ImageMapping {
  if (typeof window === 'undefined') {
    // Server-side: return empty mapping (will be replaced client-side)
    return {};
  }

  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // If parsing fails, create new mapping
    }
  }

  const mapping = createImageMapping();
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(mapping));
  return mapping;
}

// Cache the mapping to avoid recomputing on each render
let cachedMapping: ImageMapping | null = null;

function getSnapshot(): ImageMapping {
  if (cachedMapping === null) {
    cachedMapping = getImageMapping();
  }
  return cachedMapping;
}

function getServerSnapshot(): ImageMapping {
  return {};
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function subscribe(_callback: () => void): () => void {
  // No external updates to subscribe to
  return () => {};
}

export function useRandomImages() {
  const mapping = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const getImageForRecipe = (slug: string): string | undefined => {
    return mapping[slug];
  };

  return {
    mapping,
    getImageForRecipe,
  };
}
