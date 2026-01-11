export function FishermanScene() {
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
