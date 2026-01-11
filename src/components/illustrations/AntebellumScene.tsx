export function AntebellumScene() {
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
