export function RobicheauxScene() {
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
