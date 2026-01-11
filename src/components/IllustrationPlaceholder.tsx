import { IllustrationTheme } from '@/types/recipe';
import {
  BayouScene,
  SteamboatScene,
  ChurchScene,
  BourbonStreetScene,
  AntebellumScene,
  TrueDetectiveScene,
  FishermanScene,
  RobicheauxScene,
  BayouFestScene,
} from './illustrations';

interface IllustrationPlaceholderProps {
  theme: IllustrationTheme;
}

export function IllustrationPlaceholder({
  theme,
}: IllustrationPlaceholderProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {getIllustration(theme)}
    </div>
  );
}

function getIllustration(theme: IllustrationTheme) {
  switch (theme) {
    case 'bayou':
      return <BayouScene />;
    case 'steamboat':
      return <SteamboatScene />;
    case 'church':
      return <ChurchScene />;
    case 'bourbon-street':
      return <BourbonStreetScene />;
    case 'antebellum':
      return <AntebellumScene />;
    case 'true-detective':
      return <TrueDetectiveScene />;
    case 'fisherman':
      return <FishermanScene />;
    case 'robicheaux':
      return <RobicheauxScene />;
    case 'bayou-fest':
      return <BayouFestScene />;
    default:
      return <BayouScene />;
  }
}
