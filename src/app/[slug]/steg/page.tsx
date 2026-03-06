import { notFound } from 'next/navigation';
import { recipes, getRecipeBySlug } from '@/data/recipes';
import { StepNavigationClient } from './StepNavigationClient';

interface StegPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export async function generateMetadata({ params }: StegPageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return { title: 'Oppskrift ikke funnet' };
  }

  return {
    title: `Steg-for-steg: ${recipe.title} - Cajun Oppskriftskort`,
    description: `Gå gjennom ${recipe.title} steg for steg.`,
  };
}

export default async function StegPage({ params }: StegPageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return <StepNavigationClient recipe={recipe} />;
}
