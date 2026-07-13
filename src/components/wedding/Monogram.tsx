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
      {/* Heraldic shield frame around the sword and initials */}
      <svg
        x="4"
        y="2"
        width="112"
        height="112"
        viewBox="0 0 1400 1400"
        preserveAspectRatio="xMidYMid meet"
        overflow="visible"
      >
        <path
          transform="translate(700,33)"
          fill="none"
          stroke="var(--color-olive)"
          strokeWidth="14"
          d="m0 0 5 1 24 16 12 9 18 13 18 12 13 10 11 8 15 10 11 8 41 27 20 12 17 10 38 18 19 10 37 15 36 12 13 5 39 9 36 8 37 5 22 2 34 2 33 3 6 2 2 35 2 44 1 61v34l-1 49-4 61-5 43-5 38-7 42-9 44-15 60-11 36-15 42-10 26-18 40-9 19-10 19-17 32-8 14-12 19-11 17-24 34-12 16-10 13-11 13-9 11-11 12-7 8-7 7-7 8-43 43-8 7-14 13-8 7-10 9-14 11-12 10-36 27-14 10-23 15-19 12-27 16-27 15-23 12-3 2-5-1-32-15-18-8-28-16-17-11-16-10-20-13-19-13-16-11-19-14-18-14-12-9-13-10-14-13-8-7-13-12-8-7-24-24-8-7-14-15-9-10-9-11-10-11-7-8-10-12-13-18-15-20-16-23-12-18-13-21-8-13-15-25-8-16-14-30-14-31-12-30-8-23-12-36-10-35-11-41-9-48-10-64-4-46-3-51-2-47v-67l3-69 2-52 2-3h23l47-3 29-2 31-4 45-9 28-7 26-8 39-14 29-13 18-8 16-8 20-11 23-13 21-13 22-13 33-22 18-13 16-11 13-10 28-20 15-11 11-8z"
        />
      </svg>
      {/* Inner (double) shield line */}
      <svg
        x="13"
        y="11"
        width="94"
        height="94"
        viewBox="0 0 1400 1400"
        preserveAspectRatio="xMidYMid meet"
        overflow="visible"
      >
        <path
          transform="translate(700,33)"
          fill="none"
          stroke="var(--color-olive)"
          strokeWidth="7"
          d="m0 0 5 1 24 16 12 9 18 13 18 12 13 10 11 8 15 10 11 8 41 27 20 12 17 10 38 18 19 10 37 15 36 12 13 5 39 9 36 8 37 5 22 2 34 2 33 3 6 2 2 35 2 44 1 61v34l-1 49-4 61-5 43-5 38-7 42-9 44-15 60-11 36-15 42-10 26-18 40-9 19-10 19-17 32-8 14-12 19-11 17-24 34-12 16-10 13-11 13-9 11-11 12-7 8-7 7-7 8-43 43-8 7-14 13-8 7-10 9-14 11-12 10-36 27-14 10-23 15-19 12-27 16-27 15-23 12-3 2-5-1-32-15-18-8-28-16-17-11-16-10-20-13-19-13-16-11-19-14-18-14-12-9-13-10-14-13-8-7-13-12-8-7-24-24-8-7-14-15-9-10-9-11-10-11-7-8-10-12-13-18-15-20-16-23-12-18-13-21-8-13-15-25-8-16-14-30-14-31-12-30-8-23-12-36-10-35-11-41-9-48-10-64-4-46-3-51-2-47v-67l3-69 2-52 2-3h23l47-3 29-2 31-4 45-9 28-7 26-8 39-14 29-13 18-8 16-8 20-11 23-13 21-13 22-13 33-22 18-13 16-11 13-10 28-20 15-11 11-8z"
        />
      </svg>
      {/* Gothic arch behind letters */}
      <path
        d="M24 50 Q60 18 96 50"
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
        transform="translate(42 0) scale(0.88 1) translate(-42 0)"
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
