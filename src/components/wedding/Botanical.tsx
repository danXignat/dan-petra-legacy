interface BotanicalProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  flip?: boolean;
}

/**
 * Vintage engraved-style botanical: trailing vine with leaves,
 * grape cluster and a pomegranate. Uses currentColor so it can
 * be tinted (e.g. text-[color:var(--color-gold)]).
 */
export function VineBotanical({ className, width = 220, height = 320, flip }: BotanicalProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 320"
      width={width}
      height={height}
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round">
        {/* main trailing vine */}
        <path d="M20 10 C 60 60, 40 110, 90 140 S 160 210, 120 300" />
        {/* secondary tendrils */}
        <path d="M55 55 C 70 60, 78 72, 72 88" />
        <path d="M72 88 c -6 4 -10 2 -12 -3" />
        <path d="M95 140 C 120 132, 140 140, 150 160" />
        <path d="M150 160 c 6 4 4 10 -2 12" />
        <path d="M118 240 C 90 250, 78 268, 92 290" />

        {/* leaves — engraved veining */}
        <g>
          {/* leaf 1 */}
          <path d="M40 40 q -18 -4 -22 -22 q 18 -4 30 10 q 4 12 -8 12 z" />
          <path d="M22 24 q 8 6 16 12" />
          {/* leaf 2 */}
          <path d="M78 100 q -20 6 -28 -8 q 12 -14 30 -8 q 8 6 -2 16 z" />
          <path d="M56 96 q 10 2 20 6" />
          {/* leaf 3 */}
          <path d="M148 178 q 20 -2 26 12 q -14 12 -30 6 q -8 -6 4 -18 z" />
          <path d="M170 186 q -10 0 -20 -2" />
          {/* leaf 4 */}
          <path d="M108 268 q -22 -2 -26 -18 q 18 -8 32 4 q 8 8 -6 14 z" />
          <path d="M86 254 q 10 4 20 8" />
        </g>

        {/* grape cluster */}
        <g transform="translate(112 148)">
          <path d="M0 -6 q -8 -2 -10 6" />
          <path d="M2 -6 q 8 -2 10 6" />
          {/* stem */}
          <path d="M1 -10 v -8 q 6 -6 14 -6" />
          {/* berries */}
          {[
            [-14, 4], [0, 4], [14, 4],
            [-8, 16], [8, 16],
            [-16, 28], [0, 28], [16, 28],
            [-8, 40], [8, 40],
            [0, 52],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="6" fill="currentColor" fillOpacity="0.14" />
              <circle cx={cx} cy={cy} r="6" />
              <path d={`M${cx - 2} ${cy - 2} a 1.5 1.5 0 0 1 3 0`} strokeWidth="0.5" />
            </g>
          ))}
        </g>

        {/* pomegranate */}
        <g transform="translate(70 232)">
          {/* fruit body */}
          <path d="M0 0 c -22 4 -30 26 -20 46 c 8 16 32 18 42 4 c 12 -16 6 -42 -14 -50 z" fill="currentColor" fillOpacity="0.10" />
          <path d="M0 0 c -22 4 -30 26 -20 46 c 8 16 32 18 42 4 c 12 -16 6 -42 -14 -50 z" />
          {/* crown / calyx */}
          <path d="M4 -2 l -4 -10 l -4 8 l -4 -6 l -2 8" />
          <path d="M4 -2 l 4 -10 l 4 8 l 4 -6 l 2 8" />
          {/* interior seeds hint */}
          <path d="M-8 22 q 6 -4 12 0 q 6 4 12 0" strokeWidth="0.5" />
          <path d="M-6 32 q 6 -4 12 0 q 6 4 10 0" strokeWidth="0.5" />
          <circle cx="-4" cy="26" r="1.2" fill="currentColor" />
          <circle cx="6" cy="28" r="1.2" fill="currentColor" />
          <circle cx="16" cy="26" r="1.2" fill="currentColor" />
          <circle cx="-2" cy="36" r="1.2" fill="currentColor" />
          <circle cx="10" cy="36" r="1.2" fill="currentColor" />
          {/* highlight line */}
          <path d="M-14 14 q 4 -8 14 -10" strokeWidth="0.4" />
        </g>

        {/* little curled tendrils */}
        <path d="M130 90 q 8 -4 6 -12 q -6 -2 -8 4" strokeWidth="0.5" />
        <path d="M60 200 q -8 -4 -6 -12 q 6 -2 8 4" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

/** Horizontal garland: vines with a central grape + pomegranate motif. */
export function BotanicalGarland({ className, width = 640 }: { className?: string; width?: number | string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 90"
      width={width}
      height={90}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round">
        {/* left vine */}
        <path d="M10 46 C 80 20, 140 70, 220 46" />
        <path d="M40 40 q -10 -2 -14 -12 q 12 -4 20 6 q 4 8 -6 6 z" />
        <path d="M110 34 q 12 -6 22 4 q -6 12 -20 8 q -8 -4 -2 -12 z" />
        <path d="M180 52 q -12 6 -22 -4 q 6 -12 20 -8 q 8 4 2 12 z" />
        <path d="M70 30 q 6 -6 4 -14" strokeWidth="0.5" />
        <path d="M150 58 q -6 6 -4 14" strokeWidth="0.5" />

        {/* right vine (mirrored) */}
        <path d="M630 46 C 560 20, 500 70, 420 46" />
        <path d="M600 40 q 10 -2 14 -12 q -12 -4 -20 6 q -4 8 6 6 z" />
        <path d="M530 34 q -12 -6 -22 4 q 6 12 20 8 q 8 -4 2 -12 z" />
        <path d="M460 52 q 12 6 22 -4 q -6 -12 -20 -8 q -8 4 -2 12 z" />
        <path d="M570 30 q -6 -6 -4 -14" strokeWidth="0.5" />
        <path d="M490 58 q 6 6 4 14" strokeWidth="0.5" />

        {/* central motif: pomegranate flanked by grape clusters */}
        <g transform="translate(320 46)">
          {/* left grape cluster */}
          <g transform="translate(-58 0)">
            <path d="M0 -14 q -6 -2 -10 4" />
            {[[-8, -6], [0, -6], [8, -6], [-4, 2], [4, 2], [0, 10]].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="4" fill="currentColor" fillOpacity="0.14" />
                <circle cx={cx} cy={cy} r="4" />
              </g>
            ))}
          </g>

          {/* pomegranate center */}
          <g>
            <path d="M0 -14 c -16 2 -22 20 -14 34 c 6 12 22 12 28 0 c 8 -12 4 -30 -8 -34 z" fill="currentColor" fillOpacity="0.10" />
            <path d="M0 -14 c -16 2 -22 20 -14 34 c 6 12 22 12 28 0 c 8 -12 4 -30 -8 -34 z" />
            <path d="M2 -16 l -3 -8 l -3 6 l -3 -4" />
            <path d="M2 -16 l 3 -8 l 3 6 l 3 -4" />
            <circle cx="-4" cy="10" r="1" fill="currentColor" />
            <circle cx="4" cy="10" r="1" fill="currentColor" />
            <circle cx="0" cy="16" r="1" fill="currentColor" />
          </g>

          {/* right grape cluster (mirrored) */}
          <g transform="translate(58 0)">
            <path d="M0 -14 q 6 -2 10 4" />
            {[[-8, -6], [0, -6], [8, -6], [-4, 2], [4, 2], [0, 10]].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="4" fill="currentColor" fillOpacity="0.14" />
                <circle cx={cx} cy={cy} r="4" />
              </g>
            ))}
          </g>
        </g>
      </g>
    </svg>
  );
}
