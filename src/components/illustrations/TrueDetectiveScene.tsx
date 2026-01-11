export function TrueDetectiveScene() {
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
