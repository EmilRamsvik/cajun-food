export function BourbonStreetScene() {
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
