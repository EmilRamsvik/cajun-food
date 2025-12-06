import { IllustrationTheme } from '@/types/recipe';

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

function BayouScene() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full opacity-60">
      {/* Water */}
      <rect x="0" y="280" width="400" height="120" fill="#2d3a2d" opacity="0.3" />

      {/* Cypress trees with Spanish moss */}
      <g fill="#4a5240">
        {/* Left tree */}
        <path d="M60 280 L80 100 L100 280 Z" />
        <ellipse cx="80" cy="120" rx="40" ry="60" opacity="0.8" />
        {/* Spanish moss strands */}
        <path
          d="M50 130 Q40 160 45 190 M70 120 Q60 150 65 180 M90 125 Q100 155 95 185"
          stroke="#6b5b4f"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
      </g>

      {/* Right tree */}
      <g fill="#4a5240">
        <path d="M320 280 L340 80 L360 280 Z" />
        <ellipse cx="340" cy="100" rx="50" ry="70" opacity="0.8" />
        <path
          d="M310 110 Q300 140 305 170 M340 100 Q330 130 335 160 M360 115 Q370 145 365 175"
          stroke="#6b5b4f"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
      </g>

      {/* Middle cypress knees */}
      <g fill="#6b5b4f" opacity="0.6">
        <path d="M180 300 L185 260 L190 300 Z" />
        <path d="M210 300 L218 250 L226 300 Z" />
        <path d="M250 300 L255 270 L260 300 Z" />
      </g>

      {/* Fog/mist layers */}
      <ellipse cx="200" cy="250" rx="180" ry="30" fill="#f5e6c8" opacity="0.3" />
      <ellipse cx="150" cy="220" rx="100" ry="20" fill="#f5e6c8" opacity="0.2" />

      {/* Alligator silhouette */}
      <g fill="#2d3a2d" opacity="0.4">
        <ellipse cx="280" cy="310" rx="35" ry="8" />
        <ellipse cx="320" cy="308" rx="15" ry="6" />
        <circle cx="330" cy="305" r="2" />
      </g>
    </svg>
  );
}

function SteamboatScene() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full opacity-60">
      {/* Sky gradient effect */}
      <rect x="0" y="0" width="400" height="250" fill="#8b7355" opacity="0.1" />

      {/* Water */}
      <rect x="0" y="250" width="400" height="150" fill="#4a5240" opacity="0.3" />

      {/* Steamboat */}
      <g fill="#6b5b4f">
        {/* Hull */}
        <path d="M100 280 L120 320 L300 320 L320 280 Z" opacity="0.8" />
        {/* Main deck */}
        <rect x="110" y="240" width="200" height="40" opacity="0.7" />
        {/* Upper deck */}
        <rect x="130" y="200" width="160" height="40" opacity="0.6" />
        {/* Pilot house */}
        <rect x="180" y="160" width="60" height="40" opacity="0.5" />

        {/* Smokestacks */}
        <rect x="150" y="120" width="20" height="80" />
        <rect x="250" y="120" width="20" height="80" />

        {/* Smoke */}
        <ellipse cx="160" cy="100" rx="25" ry="20" opacity="0.3" />
        <ellipse cx="155" cy="70" rx="20" ry="15" opacity="0.2" />
        <ellipse cx="260" cy="90" rx="30" ry="25" opacity="0.3" />
        <ellipse cx="265" cy="55" rx="25" ry="18" opacity="0.2" />

        {/* Paddle wheel */}
        <circle cx="320" cy="290" r="30" fill="none" stroke="#6b5b4f" strokeWidth="3" />
        <line x1="320" y1="260" x2="320" y2="320" stroke="#6b5b4f" strokeWidth="2" />
        <line x1="290" y1="290" x2="350" y2="290" stroke="#6b5b4f" strokeWidth="2" />
      </g>

      {/* Riverbank trees */}
      <g fill="#4a5240" opacity="0.5">
        <ellipse cx="50" cy="260" rx="40" ry="50" />
        <ellipse cx="380" cy="270" rx="30" ry="40" />
      </g>

      {/* Water reflections */}
      <g fill="#f5e6c8" opacity="0.1">
        <rect x="150" y="330" width="120" height="10" />
        <rect x="160" y="350" width="100" height="8" />
      </g>
    </svg>
  );
}

function ChurchScene() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full opacity-60">
      {/* Murky water */}
      <rect x="0" y="300" width="400" height="100" fill="#2d3a2d" opacity="0.4" />

      {/* Dilapidated church */}
      <g fill="#6b5b4f">
        {/* Main structure */}
        <rect x="140" y="180" width="120" height="120" opacity="0.7" />
        {/* Steeple */}
        <polygon points="200,80 160,180 240,180" opacity="0.6" />
        {/* Cross */}
        <rect x="195" y="60" width="10" height="30" />
        <rect x="185" y="70" width="30" height="10" />
        {/* Windows (broken) */}
        <rect x="160" y="200" width="25" height="40" fill="#2d3a2d" opacity="0.5" />
        <rect x="215" y="200" width="25" height="40" fill="#2d3a2d" opacity="0.5" />
        {/* Door */}
        <path d="M185 260 L185 300 L215 300 L215 260 Q200 245 185 260" fill="#2d3a2d" opacity="0.6" />
      </g>

      {/* Spanish moss covering */}
      <g stroke="#4a5240" strokeWidth="2" fill="none" opacity="0.5">
        <path d="M160 180 Q150 200 155 230" />
        <path d="M170 175 Q160 195 165 225" />
        <path d="M230 175 Q240 195 235 225" />
        <path d="M240 180 Q250 200 245 230" />
        <path d="M195 90 Q185 110 190 130" />
        <path d="M205 90 Q215 110 210 130" />
      </g>

      {/* Dead trees */}
      <g fill="none" stroke="#4a5240" strokeWidth="3" opacity="0.6">
        <path d="M60 300 L70 180 M70 220 L50 190 M70 240 L90 200" />
        <path d="M340 300 L330 200 M330 240 L350 210 M330 260 L310 230" />
      </g>

      {/* Fog */}
      <ellipse cx="200" cy="280" rx="150" ry="30" fill="#f5e6c8" opacity="0.3" />
    </svg>
  );
}

function BourbonStreetScene() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full opacity-60">
      {/* Buildings with balconies */}
      <g fill="#6b5b4f">
        {/* Left building */}
        <rect x="40" y="120" width="100" height="280" opacity="0.7" />
        {/* Balcony railings */}
        <rect x="35" y="180" width="110" height="5" />
        <rect x="35" y="250" width="110" height="5" />
        {/* Ironwork pattern */}
        <g stroke="#4a5240" strokeWidth="1" fill="none">
          <path d="M45 185 Q55 195 65 185 Q75 195 85 185 Q95 195 105 185 Q115 195 125 185 Q135 195 145 185" />
          <path d="M45 255 Q55 265 65 255 Q75 265 85 255 Q95 265 105 255 Q115 265 125 255 Q135 265 145 255" />
        </g>

        {/* Right building */}
        <rect x="260" y="100" width="100" height="300" opacity="0.7" />
        <rect x="255" y="160" width="110" height="5" />
        <rect x="255" y="230" width="110" height="5" />
      </g>

      {/* Street lamp */}
      <g fill="#4a5240">
        <rect x="195" y="200" width="10" height="200" />
        <ellipse cx="200" cy="190" rx="20" ry="15" />
        {/* Lamp glow */}
        <circle cx="200" cy="185" r="8" fill="#f5e6c8" opacity="0.5" />
      </g>

      {/* Jazz musician silhouettes */}
      <g fill="#2d3a2d" opacity="0.5">
        {/* Trumpet player */}
        <ellipse cx="170" cy="350" rx="15" ry="20" />
        <rect x="165" y="370" width="10" height="30" />
        <path d="M175 360 L195 355 L195 360 L175 365 Z" />

        {/* Standing figure */}
        <ellipse cx="230" cy="345" rx="12" ry="18" />
        <rect x="225" y="363" width="10" height="37" />
      </g>

      {/* Neon sign glow (subtle) */}
      <ellipse cx="90" cy="150" rx="30" ry="10" fill="#704214" opacity="0.2" />
    </svg>
  );
}

function AntebellumScene() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full opacity-60">
      {/* Ground */}
      <rect x="0" y="320" width="400" height="80" fill="#4a5240" opacity="0.2" />

      {/* Antebellum mansion */}
      <g fill="#6b5b4f">
        {/* Main house */}
        <rect x="100" y="180" width="200" height="140" opacity="0.6" />
        {/* Roof/pediment */}
        <polygon points="200,120 80,180 320,180" opacity="0.5" />

        {/* Columns */}
        <rect x="110" y="180" width="15" height="140" opacity="0.8" />
        <rect x="160" y="180" width="15" height="140" opacity="0.8" />
        <rect x="225" y="180" width="15" height="140" opacity="0.8" />
        <rect x="275" y="180" width="15" height="140" opacity="0.8" />

        {/* Porch */}
        <rect x="90" y="175" width="220" height="8" />

        {/* Windows */}
        <rect x="130" y="200" width="20" height="30" fill="#2d3a2d" opacity="0.4" />
        <rect x="180" y="200" width="20" height="30" fill="#2d3a2d" opacity="0.4" />
        <rect x="250" y="200" width="20" height="30" fill="#2d3a2d" opacity="0.4" />

        {/* Door */}
        <rect x="190" y="260" width="25" height="60" fill="#2d3a2d" opacity="0.5" />
      </g>

      {/* Oak trees with moss */}
      <g fill="#4a5240">
        <ellipse cx="50" cy="220" rx="60" ry="80" opacity="0.6" />
        <rect x="45" y="280" width="15" height="40" opacity="0.7" />

        <ellipse cx="370" cy="200" rx="50" ry="70" opacity="0.6" />
        <rect x="365" y="260" width="12" height="60" opacity="0.7" />

        {/* Spanish moss */}
        <g stroke="#6b5b4f" strokeWidth="2" fill="none" opacity="0.4">
          <path d="M20 200 Q10 230 15 260" />
          <path d="M40 190 Q30 220 35 250" />
          <path d="M70 195 Q80 225 75 255" />
          <path d="M350 180 Q340 210 345 240" />
          <path d="M380 190 Q390 220 385 250" />
        </g>
      </g>

      {/* Driveway */}
      <path
        d="M200 400 Q200 350 200 320"
        stroke="#8b7355"
        strokeWidth="40"
        fill="none"
        opacity="0.2"
      />
    </svg>
  );
}

function TrueDetectiveScene() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full opacity-60">
      {/* Flat horizon */}
      <line x1="0" y1="300" x2="400" y2="300" stroke="#4a5240" strokeWidth="2" opacity="0.5" />

      {/* Overcast sky (implied by emptiness) */}

      {/* Lone dead tree */}
      <g fill="none" stroke="#4a5240" strokeWidth="4" opacity="0.7">
        <path d="M200 300 L200 150" />
        {/* Branches */}
        <path d="M200 180 L160 130" />
        <path d="M200 180 L240 120" />
        <path d="M200 200 L170 170" />
        <path d="M200 200 L235 165" />
        <path d="M200 220 L180 200" />
        <path d="M200 220 L225 195" />
        {/* Smaller branches */}
        <path d="M160 130 L140 110" strokeWidth="2" />
        <path d="M160 130 L150 100" strokeWidth="2" />
        <path d="M240 120 L260 100" strokeWidth="2" />
        <path d="M240 120 L250 90" strokeWidth="2" />
      </g>

      {/* Birds spiraling (crows) */}
      <g fill="#2d3a2d" opacity="0.6">
        <path d="M150 80 Q155 75 160 80 Q155 82 150 80" />
        <path d="M170 60 Q175 55 180 60 Q175 62 170 60" />
        <path d="M140 100 Q145 95 150 100 Q145 102 140 100" />
        <path d="M190 70 Q195 65 200 70 Q195 72 190 70" />
        <path d="M210 50 Q215 45 220 50 Q215 52 210 50" />
        <path d="M230 75 Q235 70 240 75 Q235 77 230 75" />
        <path d="M250 55 Q255 50 260 55 Q255 57 250 55" />
        <path d="M180 90 Q185 85 190 90 Q185 92 180 90" />
      </g>

      {/* Power lines disappearing to horizon */}
      <g stroke="#6b5b4f" strokeWidth="1" opacity="0.4">
        <line x1="0" y1="200" x2="400" y2="280" />
        <line x1="0" y1="210" x2="400" y2="285" />

        {/* Poles */}
        <line x1="50" y1="210" x2="50" y2="300" strokeWidth="2" />
        <line x1="350" y1="275" x2="350" y2="300" strokeWidth="2" />
      </g>

      {/* Marsh grass */}
      <g stroke="#4a5240" strokeWidth="1" opacity="0.3">
        <path d="M30 300 L35 280 M40 300 L42 285 M50 300 L48 288" />
        <path d="M100 300 L105 282 M110 300 L108 287 M120 300 L118 284" />
        <path d="M300 300 L298 285 M310 300 L312 282 M320 300 L318 287" />
        <path d="M360 300 L358 284 M370 300 L372 281 M380 300 L378 286" />
      </g>
    </svg>
  );
}

function FishermanScene() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full opacity-60">
      {/* Water */}
      <rect x="0" y="280" width="400" height="120" fill="#4a5240" opacity="0.3" />

      {/* Fishing boat */}
      <g fill="#6b5b4f">
        <path d="M120 300 Q110 320 130 330 L270 330 Q290 320 280 300 Z" opacity="0.7" />
        {/* Cabin */}
        <rect x="220" y="270" width="40" height="30" opacity="0.6" />
      </g>

      {/* Crab traps stacked */}
      <g stroke="#6b5b4f" strokeWidth="2" fill="none" opacity="0.6">
        {/* Stack 1 */}
        <rect x="140" y="260" width="30" height="25" />
        <rect x="145" y="240" width="25" height="20" />
        <line x1="140" y1="260" x2="170" y2="285" />
        <line x1="170" y1="260" x2="140" y2="285" />

        {/* Stack 2 */}
        <rect x="175" y="255" width="30" height="25" />
        <rect x="178" y="235" width="25" height="20" />
        <rect x="182" y="218" width="20" height="17" />
      </g>

      {/* Fisherman silhouette */}
      <g fill="#4a5240" opacity="0.7">
        <ellipse cx="160" cy="240" rx="12" ry="15" />
        <rect x="155" y="255" width="10" height="25" />
        {/* Hat */}
        <ellipse cx="160" cy="228" rx="15" ry="5" />
      </g>

      {/* Pelicans */}
      <g fill="#6b5b4f" opacity="0.5">
        <path d="M320 200 Q325 195 330 200 L340 210 L330 205 Z" />
        <path d="M350 180 Q355 175 360 180 L370 190 L360 185 Z" />
      </g>

      {/* Marsh in background */}
      <g fill="#4a5240" opacity="0.3">
        <path d="M0 280 Q50 260 100 280 Q150 260 200 280 Q250 260 300 280 Q350 260 400 280 L400 300 L0 300 Z" />
      </g>

      {/* Morning mist */}
      <ellipse cx="200" cy="260" rx="180" ry="20" fill="#f5e6c8" opacity="0.2" />
    </svg>
  );
}

function RobicheauxScene() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full opacity-60">
      {/* Dark water */}
      <rect x="0" y="300" width="400" height="100" fill="#2d3a2d" opacity="0.5" />

      {/* Weathered dock */}
      <g fill="#6b5b4f" opacity="0.7">
        <rect x="150" y="290" width="150" height="15" />
        {/* Pilings */}
        <rect x="160" y="290" width="8" height="50" />
        <rect x="200" y="290" width="8" height="45" />
        <rect x="240" y="290" width="8" height="55" />
        <rect x="280" y="290" width="8" height="48" />
      </g>

      {/* Bait shop silhouette */}
      <g fill="#4a5240" opacity="0.6">
        <rect x="50" y="200" width="80" height="100" />
        <polygon points="90,160 40,200 140,200" />
        {/* Window with dim light */}
        <rect x="70" y="220" width="25" height="25" fill="#f5e6c8" opacity="0.3" />
        {/* Sign */}
        <rect x="55" y="180" width="50" height="15" />
      </g>

      {/* Pirogue (small boat) */}
      <g fill="#6b5b4f" opacity="0.6">
        <path d="M280 320 Q270 330 290 335 L340 335 Q360 330 350 320 Z" />
      </g>

      {/* Cypress trees */}
      <g fill="#4a5240" opacity="0.5">
        <path d="M320 300 L330 180 L340 300 Z" />
        <ellipse cx="330" cy="180" rx="25" ry="40" />
        {/* Moss */}
        <path
          d="M315 175 Q305 200 310 230"
          stroke="#6b5b4f"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
      </g>

      {/* Spanish moss from trees on left */}
      <g stroke="#6b5b4f" strokeWidth="2" fill="none" opacity="0.3">
        <path d="M0 150 Q-10 180 -5 210" />
        <path d="M10 140 Q0 170 5 200" />
        <path d="M25 145 Q15 175 20 205" />
      </g>

      {/* Night atmosphere - distant lights */}
      <circle cx="90" cy="230" r="3" fill="#f5e6c8" opacity="0.4" />

      {/* Fog */}
      <ellipse cx="200" cy="290" rx="180" ry="25" fill="#f5e6c8" opacity="0.2" />
    </svg>
  );
}

function BayouFestScene() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full opacity-60">
      {/* Warm sunset sky */}
      <rect x="0" y="0" width="400" height="200" fill="#8b7355" opacity="0.15" />

      {/* Water */}
      <rect x="0" y="280" width="400" height="120" fill="#4a5240" opacity="0.25" />

      {/* Long table with people */}
      <g fill="#6b5b4f">
        {/* Table */}
        <rect x="50" y="260" width="300" height="10" opacity="0.7" />
        {/* Table legs */}
        <rect x="80" y="270" width="8" height="30" opacity="0.6" />
        <rect x="180" y="270" width="8" height="30" opacity="0.6" />
        <rect x="280" y="270" width="8" height="30" opacity="0.6" />
      </g>

      {/* People silhouettes around table */}
      <g fill="#4a5240" opacity="0.6">
        {/* Seated figures */}
        <ellipse cx="100" cy="240" rx="12" ry="15" />
        <rect x="95" y="255" width="10" height="15" />

        <ellipse cx="150" cy="235" rx="10" ry="13" />
        <rect x="145" y="248" width="10" height="18" />

        <ellipse cx="200" cy="238" rx="11" ry="14" />
        <rect x="195" y="252" width="10" height="16" />

        <ellipse cx="250" cy="235" rx="10" ry="13" />
        <rect x="245" y="248" width="10" height="18" />

        <ellipse cx="300" cy="240" rx="12" ry="15" />
        <rect x="295" y="255" width="10" height="15" />
      </g>

      {/* Seafood on table (abstract shapes) */}
      <g fill="#704214" opacity="0.4">
        <ellipse cx="130" cy="255" rx="15" ry="5" />
        <ellipse cx="180" cy="253" rx="12" ry="4" />
        <ellipse cx="230" cy="255" rx="18" ry="5" />
        <ellipse cx="280" cy="253" rx="14" ry="4" />
      </g>

      {/* Lanterns in trees */}
      <g>
        <circle cx="80" cy="150" r="8" fill="#f5e6c8" opacity="0.4" />
        <circle cx="160" cy="130" r="6" fill="#f5e6c8" opacity="0.3" />
        <circle cx="250" cy="140" r="7" fill="#f5e6c8" opacity="0.35" />
        <circle cx="330" cy="135" r="6" fill="#f5e6c8" opacity="0.3" />
      </g>

      {/* Trees framing scene */}
      <g fill="#4a5240" opacity="0.5">
        <ellipse cx="30" cy="180" rx="50" ry="70" />
        <ellipse cx="380" cy="170" rx="45" ry="65" />

        {/* Moss */}
        <g stroke="#6b5b4f" strokeWidth="2" fill="none" opacity="0.4">
          <path d="M10 160 Q0 190 5 220" />
          <path d="M50 150 Q40 180 45 210" />
          <path d="M360 145 Q350 175 355 205" />
          <path d="M390 155 Q400 185 395 215" />
        </g>
      </g>

      {/* Sunset glow on water */}
      <ellipse cx="200" cy="320" rx="150" ry="20" fill="#8b7355" opacity="0.15" />
    </svg>
  );
}
