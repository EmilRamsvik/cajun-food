'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getShuffledOrder } from '@/hooks/useShuffledOrder';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const order = getShuffledOrder();
    const firstRecipe = order[0];
    if (firstRecipe) {
      router.replace(`/${firstRecipe}`);
    }
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-parchment-dark">
      <div className="text-warm-brown">Laster oppskrifter...</div>
    </div>
  );
}
