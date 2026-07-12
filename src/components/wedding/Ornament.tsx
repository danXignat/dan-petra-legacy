interface OrnamentProps {
  className?: string;
  width?: number;
}

export function Ornament({ className, width = 240 }: OrnamentProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 24"
      width={width}
      height={24}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* gilt rules */}
      <line x1="0" y1="12" x2="92" y2="12" stroke="currentColor" strokeWidth="0.6" />
      <line x1="148" y1="12" x2="240" y2="12" stroke="currentColor" strokeWidth="0.6" />
      <g fill="currentColor">
        <circle cx="92" cy="12" r="1.3" />
        <circle cx="148" cy="12" r="1.3" />
      </g>
      {/* central vine — a symmetric leafed flourish */}
      <g stroke="currentColor" fill="none" strokeWidth="0.7">
        <path d="M96 12 Q108 4 120 12 Q132 20 144 12" />
        <path d="M96 12 Q108 20 120 12 Q132 4 144 12" />
      </g>
      {/* burgundy heart of the flourish (accent) */}
      <path d="M120 5 L125 12 L120 19 L115 12 Z" fill="var(--color-burgundy)" />
    </svg>
  );
}

export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center py-8 text-[color:var(--color-gold)] ${className ?? ""}`}
    >
      <Ornament />
    </div>
  );
}
