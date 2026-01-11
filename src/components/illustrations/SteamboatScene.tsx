export function SteamboatScene() {
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
