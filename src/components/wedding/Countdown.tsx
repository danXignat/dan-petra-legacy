import { useEffect, useState } from "react";

interface CountdownProps {
  targetIso: string; // YYYY-MM-DD
}

function diff(target: Date) {
  const now = new Date();
  const ms = target.getTime() - now.getTime();
  if (ms <= 0) return null;
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown({ targetIso }: CountdownProps) {
  const target = new Date(`${targetIso}T14:30:00+03:00`);
  const [state, setState] = useState<ReturnType<typeof diff>>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    setState(diff(target));
    const id = setInterval(() => setState(diff(target)), 1_000);
    return () => clearInterval(id);
  }, [targetIso]);

  if (!ready) return null;

  if (!state) {
    return (
      <p className="font-display text-lg tracking-[0.25em] uppercase text-[color:var(--color-olive)]">
        Astăzi sărbătorim
      </p>
    );
  }

  const items = [
    { v: state.days, l: "Zile" },
    { v: state.hours, l: "Ore" },
    { v: state.minutes, l: "Minute" },
    { v: state.seconds, l: "Secunde" },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-10">
      {items.map((it, i) => (
        <div key={it.l} className="flex items-center gap-3 sm:gap-10">
          <div className="text-center">
            <div className="font-display text-2xl sm:text-4xl text-[color:var(--color-olive)] tabular-nums">
              {String(it.v).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.32em] text-[color:var(--color-gold)]">
              {it.l}
            </div>
          </div>
          {i < items.length - 1 ? (
            <span className="text-xs text-[color:var(--color-burgundy)]" aria-hidden="true">
              ◆
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
