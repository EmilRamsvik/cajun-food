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

// Cached server snapshot - must be stable reference (empty on server)
const serverSnapshot: ImageMapping = {};

// Client-side cache
let clientSnapshot: ImageMapping | null = null;

function getClientSnapshot(): ImageMapping {
  if (clientSnapshot === null) {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        clientSnapshot = JSON.parse(stored);
        return clientSnapshot!;
      } catch {
        // If parsing fails, create new mapping
      }
    }

    const mapping = createImageMapping();
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(mapping));
    clientSnapshot = mapping;
  }
  return clientSnapshot;
}

function getServerSnapshot(): ImageMapping {
  return serverSnapshot;
}

function subscribe(): () => void {
  return () => {};
}

export function useRandomImages() {
  const mapping = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  const getImageForRecipe = (slug: string): string | undefined => {
    return mapping[slug];
  };

  return {
    mapping,
    getImageForRecipe,
  };
}
