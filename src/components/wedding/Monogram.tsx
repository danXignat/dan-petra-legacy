import { weddingConfig } from "@/lib/wedding-config";

interface MonogramProps {
  size?: number;
  className?: string;
  title?: string;
}

export function Monogram({ size = 96, className, title = "D and P monogram" }: MonogramProps) {
  const { left, right } = weddingConfig.couple.monogram;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Outer thin ring */}
      <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="0.4" />
      {/* Small ornaments at cardinal points */}
      <g fill="currentColor">
        <circle cx="60" cy="4" r="1.2" />
        <circle cx="60" cy="116" r="1.2" />
        <circle cx="4" cy="60" r="1.2" />
        <circle cx="116" cy="60" r="1.2" />
      </g>
      {/* Gothic arch behind letters */}
      <path
        d="M30 82 L30 58 Q60 28 90 58 L90 82"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.6"
      />
      {/* Letters */}
      <text
        x="42"
        y="76"
        textAnchor="middle"
        fontFamily="'Cinzel', 'Cormorant Garamond', serif"
        fontSize="42"
        fontWeight="500"
        fill="currentColor"
      >
        {left}
      </text>
      <text
        x="78"
        y="76"
        textAnchor="middle"
        fontFamily="'Cinzel', 'Cormorant Garamond', serif"
        fontSize="42"
        fontWeight="500"
        fill="currentColor"
      >
        {right}
      </text>
      {/* Ampersand-like divider */}
      <line x1="60" y1="44" x2="60" y2="84" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
    </svg>
  );
}
