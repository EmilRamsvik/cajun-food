export interface ExternalLink {
  text: string;
  url: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  scene: string;
  portions?: string;
  ingredients: string[];
  instructions: string[];
  links: string[];
  externalLinks?: ExternalLink[];
  illustrationTheme: IllustrationTheme;
}

export type IllustrationTheme =
  | 'bayou'
  | 'steamboat'
  | 'church'
  | 'bourbon-street'
  | 'antebellum'
  | 'true-detective'
  | 'fisherman'
  | 'robicheaux'
  | 'bayou-fest';

export interface RecipeLink {
  text: string;
  targetSlug: string;
}
