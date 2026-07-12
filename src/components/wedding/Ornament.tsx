interface OrnamentProps {
  className?: string;
  width?: number;
}

export function Ornament({ className, width = 240 }: OrnamentProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 20"
      width={width}
      height={20}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <line x1="0" y1="10" x2="90" y2="10" stroke="currentColor" strokeWidth="0.5" />
      <line x1="150" y1="10" x2="240" y2="10" stroke="currentColor" strokeWidth="0.5" />
      {/* central botanical flourish */}
      <g stroke="currentColor" fill="none" strokeWidth="0.6">
        <path d="M100 10 Q108 2 120 10 Q132 18 140 10" />
        <circle cx="120" cy="10" r="2" fill="currentColor" />
        <path d="M112 10 Q116 6 120 10" />
        <path d="M128 10 Q124 14 120 10" />
      </g>
    </svg>
  );
}

export function Divider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-8 text-[color:var(--color-gold)] ${className ?? ""}`}>
      <Ornament />
    </div>
  );
}
