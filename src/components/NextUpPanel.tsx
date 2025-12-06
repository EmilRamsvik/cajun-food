'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';

interface NextUpPanelProps {
  nextRecipe: Recipe;
}

export function NextUpPanel({ nextRecipe }: NextUpPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mx-auto max-w-3xl">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        className="flex w-full items-center justify-between rounded-t-lg bg-parchment px-3 py-2 text-left transition-colors hover:bg-parchment-dark sm:px-4 sm:py-3"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <span className="text-xs text-gray-brown sm:text-sm">Neste oppskrift</span>
        <span className="flex items-center gap-1 text-warm-brown sm:gap-2">
          <span className="text-sm sm:text-base" style={{ fontFamily: 'var(--font-display)' }}>
            {nextRecipe.title}
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className={`transform transition-transform sm:h-4 sm:w-4 ${isExpanded ? 'rotate-180' : ''}`}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Expandable preview */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Link
          href={`/${nextRecipe.slug}`}
          onClick={(e) => e.stopPropagation()}
          className="block bg-parchment p-3 hover:bg-parchment-dark sm:p-4"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Mini illustration placeholder */}
            <div className="h-16 w-16 flex-shrink-0 rounded bg-moss-green/20 p-1.5 sm:h-20 sm:w-20 sm:p-2">
              <svg viewBox="0 0 100 100" className="h-full w-full opacity-50">
                <rect
                  x="10"
                  y="60"
                  width="80"
                  height="30"
                  fill="currentColor"
                  className="text-swamp-green"
                />
                <ellipse
                  cx="30"
                  cy="50"
                  rx="15"
                  ry="25"
                  fill="currentColor"
                  className="text-moss-green"
                />
                <ellipse
                  cx="70"
                  cy="45"
                  rx="20"
                  ry="30"
                  fill="currentColor"
                  className="text-moss-green"
                />
              </svg>
            </div>

            <div className="flex-1">
              <p className="mb-0.5 text-xs text-gray-brown sm:mb-1 sm:text-sm">
                {nextRecipe.subtitle}
              </p>
              <p className="text-[10px] text-warm-brown sm:text-xs">{nextRecipe.scene}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
