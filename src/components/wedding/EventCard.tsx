import { buildIcs, downloadIcs } from "@/lib/ics";
import { mapsSearchUrl } from "@/lib/wedding-config";

export interface EventCardData {
  id: string;
  title: string;
  time: string;
  venue: string;
  addressLines: readonly string[] | string[];
  description: string;
  calendarStartUtc: string;
  calendarEndUtc: string;
}

export function EventCard({ event }: { event: EventCardData }) {
  const mapUrl = mapsSearchUrl(event.venue, [...event.addressLines]);

  const handleCalendar = () => {
    const ics = buildIcs({
      uid: `${event.id}-dan-petra-2026@wedding`,
      title: `Dan & Petra — ${event.title}`,
      description: event.description,
      location: `${event.venue}, ${event.addressLines.join(", ")}`,
      startUtc: event.calendarStartUtc,
      endUtc: event.calendarEndUtc,
    });
    downloadIcs(`dan-petra-${event.id}.ics`, ics);
  };

  return (
    <article className="group relative flex flex-col rounded-sm border border-[color:var(--color-gold)]/40 bg-[color:var(--color-ivory)]/60 p-8 shadow-[0_1px_0_0_rgba(165,138,85,0.15)] sm:p-10">
      {/* inner gilt frame */}
      <span
        className="pointer-events-none absolute inset-2 rounded-sm border border-[color:var(--color-gold)]/20"
        aria-hidden="true"
      />
      {/* corner ornaments */}
      <span
        className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-[color:var(--color-gold)]/70"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-[color:var(--color-gold)]/70"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute left-3 bottom-3 h-3 w-3 border-l border-b border-[color:var(--color-gold)]/70"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute right-3 bottom-3 h-3 w-3 border-r border-b border-[color:var(--color-gold)]/70"
        aria-hidden="true"
      />

      <p className="text-[11px] uppercase tracking-[0.4em] text-[color:var(--color-gold)]">
        {event.title}
      </p>
      <p className="mt-4 font-display text-5xl text-[color:var(--color-olive)] tabular-nums">
        {event.time}
      </p>

      <h3 className="mt-6 font-display text-xl text-[color:var(--color-burgundy)]">
        {event.venue}
      </h3>
      <address className="mt-2 not-italic text-sm leading-relaxed text-[color:var(--color-charcoal)]/85">
        {event.addressLines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </address>

      <p className="mt-6 text-sm leading-relaxed text-[color:var(--color-charcoal)]/90">
        {event.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={mapUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center rounded-sm border border-[color:var(--color-olive)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-olive)] transition-colors hover:bg-[color:var(--color-olive)] hover:text-[color:var(--color-ivory)]"
        >
          Deschide în Google Maps
        </a>
        <button
          type="button"
          onClick={handleCalendar}
          className="inline-flex items-center justify-center rounded-sm border border-[color:var(--color-gold)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gold)] transition-colors hover:bg-[color:var(--color-gold)] hover:text-[color:var(--color-ivory)]"
        >
          Adaugă în calendar
        </button>
      </div>
    </article>
  );
}
