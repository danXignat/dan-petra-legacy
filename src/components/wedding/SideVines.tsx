/**
 * Tall vertical vine borders inspired by illuminated manuscript margins.
 * Rendered as fixed-position ornaments framing the page on desktop.
 * Uses currentColor for tinting via Tailwind text-[color:...] utilities.
 */

interface SideVineProps {
  className?: string;
  flip?: boolean;
  /** Optional secondary accent color (e.g. burgundy) for small flowers */
  accentClassName?: string;
}

/** A single vertical vine, ~1600 units tall, meant to stretch full viewport. */
export function SideVine({ className, flip }: SideVineProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 1600"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* main serpentine stem, engraved-thin */}
        <path d="M30 0
                 C 70 80, 20 160, 50 240
                 S 90 400, 40 480
                 S 20 640, 60 720
                 S 90 880, 40 960
                 S 20 1120, 60 1200
                 S 90 1360, 40 1440
                 S 30 1560, 50 1600" />

        {/* fine parallel shadow-line for engraved feel */}
        <path
          d="M32 4
             C 72 84, 22 164, 52 244
             S 92 404, 42 484
             S 22 644, 62 724
             S 92 884, 42 964
             S 22 1124, 62 1204
             S 92 1364, 42 1444
             S 32 1564, 52 1600"
          strokeWidth="0.3"
          opacity="0.6"
        />

        {/* Repeating motifs along the stem */}
        {Array.from({ length: 10 }).map((_, i) => {
          const y = 60 + i * 155;
          const side = i % 2 === 0 ? 1 : -1;
          return (
            <g key={i} transform={`translate(${side > 0 ? 50 : 40} ${y})`}>
              {/* trefoil leaf */}
              <g transform={`scale(${side} 1)`}>
                <path d="M0 0 q 14 -6 24 4 q -6 14 -20 10 q -10 -4 -4 -14 z" />
                <path d="M4 -2 q 10 2 18 8" strokeWidth="0.4" opacity="0.7" />
                {/* small opposing leaf */}
                <path d="M-2 12 q -12 -2 -16 -12 q 12 -6 20 4 q 4 6 -4 8 z" strokeWidth="0.5" />
              </g>

              {/* small manuscript flower */}
              <g transform={`translate(${side * 26} 22)`}>
                <circle r="2.2" fill="currentColor" fillOpacity="0.35" />
                <circle r="2.2" />
                {[0, 60, 120, 180, 240, 300].map((a) => (
                  <path
                    key={a}
                    d={`M 0 0 l ${Math.cos((a * Math.PI) / 180) * 5} ${Math.sin((a * Math.PI) / 180) * 5}`}
                    strokeWidth="0.4"
                  />
                ))}
                <circle r="0.9" fill="currentColor" />
              </g>

              {/* curling tendril */}
              <path
                d={`M ${side * 8} 34 q ${side * 12} 6 ${side * 8} 18 q ${-side * 8} 4 ${-side * 4} -6`}
                strokeWidth="0.45"
                opacity="0.8"
              />
            </g>
          );
        })}

        {/* accents: tiny bud clusters at midpoints */}
        {Array.from({ length: 6 }).map((_, i) => {
          const y = 140 + i * 260;
          return (
            <g key={`bud-${i}`} transform={`translate(46 ${y})`}>
              <circle cx="0" cy="0" r="1.6" fill="currentColor" />
              <circle cx="6" cy="4" r="1.2" fill="currentColor" opacity="0.7" />
              <circle cx="-4" cy="6" r="1" fill="currentColor" opacity="0.5" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/**
 * Full page-side ornament: fixed to viewport edges on desktop, gently
 * revealed. Renders both left and right vines, plus small burgundy
 * flower accents overlaid.
 */
export function PageSideVines() {
  return (
    <>
      {/* Left vine — gold primary */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-0 left-0 z-0 hidden w-[92px] overflow-hidden lg:block xl:w-[110px]"
      >
        <div className="side-vine-fade side-vine-drift h-full w-full text-[color:var(--color-forest)]/55">
          <SideVine className="h-full w-full" />
        </div>
        {/* burgundy flower accents layered on top */}
        <div className="side-vine-fade side-vine-drift absolute inset-0 text-[color:var(--color-burgundy)]/45">
          <SideVineAccents />
        </div>
      </div>

      {/* Right vine — mirrored */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-0 right-0 z-0 hidden w-[92px] overflow-hidden lg:block xl:w-[110px]"
      >
        <div className="side-vine-fade side-vine-drift h-full w-full text-[color:var(--color-forest)]/55">
          <SideVine className="h-full w-full" flip />
        </div>
        <div className="side-vine-fade side-vine-drift absolute inset-0 text-[color:var(--color-burgundy)]/45">
          <SideVineAccents flip />
        </div>
      </div>

      {/* Thin antique-gold border rules along the outer edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-4 left-3 z-0 hidden w-px bg-[color:var(--color-gold)]/35 lg:block xl:left-4"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-4 right-3 z-0 hidden w-px bg-[color:var(--color-gold)]/35 lg:block xl:right-4"
      />
    </>
  );
}

/** Small burgundy flower + fruit accents scattered up the vine. */
function SideVineAccents({ flip }: { flip?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 1600"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        {[100, 380, 660, 940, 1220, 1500].map((y, i) => {
          const cx = i % 2 === 0 ? 58 : 34;
          return (
            <g key={y} transform={`translate(${cx} ${y})`}>
              {/* 5-petal flower */}
              {[0, 72, 144, 216, 288].map((a) => {
                const rad = (a * Math.PI) / 180;
                return (
                  <ellipse
                    key={a}
                    cx={Math.cos(rad) * 3.2}
                    cy={Math.sin(rad) * 3.2}
                    rx="2.6"
                    ry="1.6"
                    transform={`rotate(${a} ${Math.cos(rad) * 3.2} ${Math.sin(rad) * 3.2})`}
                    fillOpacity="0.7"
                  />
                );
              })}
              <circle r="1.4" fill="var(--color-gold)" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/** Corner flourish: ornate L-shaped botanical for page corners. */
export function CornerFlourish({
  className,
  size = 120,
  corner = "tl",
}: {
  className?: string;
  size?: number;
  corner?: "tl" | "tr" | "bl" | "br";
}) {
  const transform =
    corner === "tr"
      ? "scaleX(-1)"
      : corner === "bl"
        ? "scaleY(-1)"
        : corner === "br"
          ? "scale(-1,-1)"
          : undefined;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      style={transform ? { transform } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* corner rules */}
        <path d="M4 4 H 70" />
        <path d="M4 4 V 70" />
        <path d="M4 8 H 60" strokeWidth="0.35" opacity="0.7" />
        <path d="M8 4 V 60" strokeWidth="0.35" opacity="0.7" />
        {/* diagonal vine sprouting from corner */}
        <path d="M6 6 C 30 20, 40 40, 60 60" />
        {/* leaves */}
        <path d="M22 18 q -10 -2 -14 -10 q 10 -6 18 2 q 4 6 -4 8 z" />
        <path d="M38 30 q 10 -2 14 -12 q -12 -4 -20 6 q -4 8 6 6 z" />
        <path d="M54 50 q -12 -2 -16 -12 q 12 -6 22 4 q 6 8 -6 8 z" />
        {/* trefoil bud at tip */}
        <g transform="translate(64 64)">
          <circle r="2.2" fill="currentColor" fillOpacity="0.4" />
          <circle r="2.2" />
          <path d="M0 -6 q 3 -2 6 0 q -1 4 -3 4 z" fill="currentColor" fillOpacity="0.5" />
          <path d="M-6 0 q -2 3 0 6 q 4 -1 4 -3 z" fill="currentColor" fillOpacity="0.5" />
        </g>
        {/* tiny corner cross ornament */}
        <g transform="translate(8 8)" strokeWidth="0.4">
          <path d="M-2 0 h 4 M0 -2 v 4" />
          <circle r="0.8" fill="currentColor" />
        </g>
      </g>
    </svg>
  );
}

/** Gothic-arch section divider with engraved botanical inside. */
export function ArchDivider({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center py-10 text-[color:var(--color-gold)] ${className ?? ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 80"
        width="320"
        height="80"
        aria-hidden="true"
        focusable="false"
      >
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          {/* rule lines */}
          <line x1="0" y1="60" x2="120" y2="60" strokeWidth="0.5" />
          <line x1="200" y1="60" x2="320" y2="60" strokeWidth="0.5" />
          <line x1="10" y1="63" x2="115" y2="63" strokeWidth="0.25" opacity="0.6" />
          <line x1="205" y1="63" x2="310" y2="63" strokeWidth="0.25" opacity="0.6" />

          {/* end dots */}
          <circle cx="0" cy="60" r="1.4" fill="currentColor" />
          <circle cx="320" cy="60" r="1.4" fill="currentColor" />

          {/* gothic arch (pointed) */}
          <path
            d="M130 62 L130 42 Q160 8 190 42 L190 62"
            strokeWidth="0.7"
          />
          <path
            d="M134 62 L134 44 Q160 14 186 44 L186 62"
            strokeWidth="0.3"
            opacity="0.7"
          />
          {/* apex trefoil */}
          <g transform="translate(160 14)" strokeWidth="0.5">
            <circle cx="0" cy="0" r="2" fill="currentColor" />
            <circle cx="-4" cy="4" r="1.4" fill="currentColor" fillOpacity="0.7" />
            <circle cx="4" cy="4" r="1.4" fill="currentColor" fillOpacity="0.7" />
          </g>

          {/* botanical inside arch */}
          <g transform="translate(160 60)" strokeWidth="0.5">
            <path d="M0 0 V -18" />
            <path d="M0 -8 q -6 -2 -10 -8 q 6 -4 12 2" />
            <path d="M0 -12 q 6 -2 10 -8 q -6 -4 -12 2" />
            <circle cx="0" cy="-22" r="1.8" fill="currentColor" />
          </g>

          {/* side leaves flanking arch */}
          <path d="M120 60 q 4 -8 12 -8" strokeWidth="0.4" />
          <path d="M200 60 q -4 -8 -12 -8" strokeWidth="0.4" />
        </g>
      </svg>
    </div>
  );
}
