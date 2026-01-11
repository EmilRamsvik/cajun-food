export function ChurchScene() {
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
