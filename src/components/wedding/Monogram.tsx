import { weddingConfig } from "@/lib/wedding-config";

interface MonogramProps {
  size?: number;
  className?: string;
  title?: string;
}

export function Monogram({ size = 96, className, title = "Monograma D și P" }: MonogramProps) {
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
      {/* Cross finial + ornaments at cardinal points */}
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <line x1="60" y1="1" x2="60" y2="11" />
        <line x1="55.5" y1="5" x2="64.5" y2="5" />
      </g>
      <g fill="currentColor">
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
        fontFamily="'Cinzel Decorative', 'Cinzel', serif"
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
        fontFamily="'Cinzel Decorative', 'Cinzel', serif"
        fontSize="42"
        fontWeight="500"
        fill="currentColor"
      >
        {right}
      </text>
      {/* Sword through the centre (blade points down between the letters) */}
      <svg
        x="51"
        y="19"
        width="18"
        height="78"
        viewBox="922 0 560 2400"
        preserveAspectRatio="xMidYMid meet"
        overflow="visible"
      >
        <path
          transform="translate(1181,0)"
          fill="currentColor"
          d="m0 0h44l2 2 12 5 16 9v4l-11 7-7 7-6 10-4 11-1 6v36l3 34 2 14v10l-5 6v8l6 2 4 18v6l-7 7-2 3 2 16 3 20 2 23 3 65 6 65v37l-1 12 6 1 42 1 52 3 39 4 38 6 32 7 29 8 2 1v2l-14 7-36 16-11 5-5-1-8-7-17-10-16-7-21-6-20-4-32-3-16-1-47-1-2 16 1 9 10 29 4 10v168l-2 284-5 738-2 289-1 166-1 62-1 23-4 34-6 29-8 27-8 23-8 21-3 8-3-1-3-9-11-30-9-27-6-24-5-30-3-32-1-27-1-107-2-327-2-234-1-211-2-269-1-97-1-223-1-140v-83l10-25 5-15v-13l-1-12-43 1-33 2-25 3-23 5-20 7-16 8-14 10-4 4-7-1-35-16-23-10v-3l23-7 24-6 27-5 27-4 37-4 29-2 22-1 51-1-1-7-1-18v-15l2-28 4-44 2-43 1-30 3-29 4-18v-8l-4-5-5-4 1-7 1-2 1-14 8-5-1-7-5-6 1-13 3-25 2-37v-11l-2-15-5-12-6-9-11-9-6-4 1-4 21-11 10-3z"
        />
      </svg>
    </svg>
  );
}
