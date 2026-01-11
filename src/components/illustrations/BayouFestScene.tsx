export function BayouFestScene() {
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
