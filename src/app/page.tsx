'use client';

import { useRouter } from 'next/navigation';
import { getShuffledOrder } from '@/hooks/useShuffledOrder';

export default function Home() {
  const router = useRouter();

  const handleGetRecipe = () => {
    const order = getShuffledOrder();
    const randomIndex = Math.floor(Math.random() * order.length);
    const randomRecipe = order[randomIndex];
    if (randomRecipe) {
      router.push(`/${randomRecipe}`);
    }
  };

  return (
    <main className="min-h-screen parchment-bg">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 md:py-16">
        {/* Header */}
        <header className="mb-8 text-center sm:mb-12">
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl md:text-6xl">
            Cajun Kjøkken
          </h1>
          <p className="mt-3 font-body text-lg text-warm-brown sm:text-xl">
            Smakene fra Louisiana
          </p>
        </header>

        {/* Spice Mix Card */}
        <section className="paper-edge mb-8 rounded-lg bg-parchment-dark/50 p-6 sm:mb-12 sm:p-8">
          <h2 className="font-display mb-4 text-2xl font-semibold text-ink sm:text-3xl">
            Cajunkrydder
          </h2>
          <p className="mb-6 text-gray-brown">
            Hjertet i cajunmaten er krydderblandingen. Lag din egen og ha alltid
            på lager - den holder seg i flere måneder i en lufttett boks.
          </p>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="font-display mb-3 text-lg font-medium text-ink">
              Ingredienser
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-brown sm:text-base">
              <li>2 ss paprika</li>
              <li>1 ss hvitløkspulver</li>
              <li>1 ss løkpulver</li>
              <li>1 ss oregano</li>
              <li>1 ss timian</li>
              <li>1 ts cayennepepper</li>
              <li>1 ts sort pepper</li>
              <li>1 ts salt</li>
            </ul>
          </div>

          {/* How to use */}
          <div>
            <h3 className="font-display mb-3 text-lg font-medium text-ink">
              Slik bruker du den
            </h3>
            <ul className="space-y-2 text-sm text-gray-brown sm:text-base">
              <li>
                <span className="font-medium text-sepia">Kjøtt og fisk:</span>{' '}
                Gni inn 1-2 ss før steking
              </li>
              <li>
                <span className="font-medium text-sepia">Sauser og gryteretter:</span>{' '}
                Tilsett 1-2 ss under koking
              </li>
              <li>
                <span className="font-medium text-sepia">Grønnsaker:</span>{' '}
                Dryss over før grilling eller steking
              </li>
            </ul>
          </div>
        </section>

        {/* Base recipes info */}
        <section className="mb-8 text-center sm:mb-12">
          <p className="mb-2 text-sm text-warm-brown sm:text-base">
            Oppskriftene inneholder også de klassiske basisene:
          </p>
          <p className="font-display text-lg text-ink sm:text-xl">
            <span className="text-sepia">Roux</span> &bull;{' '}
            <span className="text-sepia">Holy Trinity</span>
          </p>
        </section>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleGetRecipe}
            className="inline-block rounded-lg bg-swamp-green px-8 py-4 font-display text-xl font-semibold text-parchment shadow-lg transition-all duration-200 hover:scale-105 hover:bg-moss-green hover:shadow-xl active:scale-95 sm:px-12 sm:py-5 sm:text-2xl"
          >
            Gi meg en oppskrift!
          </button>
          <p className="mt-4 text-sm text-warm-brown">
            Utforsk 9 autentiske cajunoppskrifter
          </p>
        </div>
      </div>
    </main>
  );
}
