import { notFound } from 'next/navigation';
import { recipes, getRecipeBySlug } from '@/data/recipes';
import { RecipePageClient } from './RecipePageClient';

interface RecipePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export async function generateMetadata({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return { title: 'Oppskrift ikke funnet' };
  }

  return {
    title: `${recipe.title} - Cajun Oppskriftskort`,
    description: recipe.subtitle,
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return <RecipePageClient recipe={recipe} />;
}
