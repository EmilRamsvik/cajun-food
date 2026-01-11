export function BayouScene() {
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
