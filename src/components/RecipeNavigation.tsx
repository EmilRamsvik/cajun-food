'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useCallback, useRef, ReactNode } from 'react';

interface RecipeNavigationProps {
  nextSlug?: string;
  previousSlug?: string;
  children: ReactNode;
}

export function RecipeNavigation({
  nextSlug,
  previousSlug,
  children,
}: RecipeNavigationProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const navigateNext = useCallback(() => {
    if (nextSlug) {
      router.push(`/${nextSlug}`);
    }
  }, [nextSlug, router]);

  const navigatePrevious = useCallback(() => {
    if (previousSlug) {
      router.push(`/${previousSlug}`);
    }
  }, [previousSlug, router]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        navigateNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        navigatePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateNext, navigatePrevious]);

  // Touch/swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    // Only trigger if horizontal swipe is dominant and significant
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        navigatePrevious();
      } else {
        navigateNext();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Click on edges navigation
  const handleClick = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    // Click on left 15% navigates back, right 15% navigates forward
    if (clickX < width * 0.15) {
      navigatePrevious();
    } else if (clickX > width * 0.85) {
      navigateNext();
    }
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      className="relative cursor-pointer"
    >
      {/* Navigation indicators */}
      {previousSlug && (
        <div className="pointer-events-none absolute left-2 top-1/2 z-20 -translate-y-1/2 opacity-30 transition-opacity hover:opacity-60 md:left-4">
          <svg
            width="24"
            height="48"
            viewBox="0 0 24 48"
            fill="none"
            className="text-warm-brown"
          >
            <path
              d="M20 4L4 24L20 44"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {nextSlug && (
        <div className="pointer-events-none absolute right-2 top-1/2 z-20 -translate-y-1/2 opacity-30 transition-opacity hover:opacity-60 md:right-4">
          <svg
            width="24"
            height="48"
            viewBox="0 0 24 48"
            fill="none"
            className="text-warm-brown"
          >
            <path
              d="M4 4L20 24L4 44"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {children}
    </div>
  );
}
