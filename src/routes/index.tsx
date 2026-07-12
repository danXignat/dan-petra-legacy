import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";
import { Nav } from "@/components/wedding/Nav";
import { Monogram } from "@/components/wedding/Monogram";
import { Ornament, Divider } from "@/components/wedding/Ornament";
import { VineBotanical, BotanicalGarland } from "@/components/wedding/Botanical";
import {
  PageSideVines,
  CornerFlourish,
  ArchDivider,
} from "@/components/wedding/SideVines";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { EventCard } from "@/components/wedding/EventCard";
import { RsvpForm } from "@/components/wedding/RsvpForm";
import { Countdown } from "@/components/wedding/Countdown";
import {
  weddingConfig,
  mapsDirectionsUrl,
} from "@/lib/wedding-config";

export const Route = createFileRoute("/")({
  component: Invitation,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.42em] text-[color:var(--color-gold)]">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-forest)]">
      {children}
    </h2>
  );
}

function Invitation() {
  const c = weddingConfig;
  useRevealOnScroll();

  return (
    <div className="min-h-screen">
      <PageSideVines />
      <Nav />
      <main id="home" className="relative z-10">
        {/* ============ HERO ============ */}
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-28 pb-16">
          {/* Corner flourishes — manuscript-style */}
          <CornerFlourish
            corner="tl"
            size={110}
            className="pointer-events-none absolute left-4 top-24 text-[color:var(--color-gold)]/70 sm:left-6"
          />
          <CornerFlourish
            corner="tr"
            size={110}
            className="pointer-events-none absolute right-4 top-24 text-[color:var(--color-gold)]/70 sm:right-6"
          />
          <CornerFlourish
            corner="bl"
            size={110}
            className="pointer-events-none absolute bottom-6 left-4 text-[color:var(--color-gold)]/60 sm:left-6"
          />
          <CornerFlourish
            corner="br"
            size={110}
            className="pointer-events-none absolute bottom-6 right-4 text-[color:var(--color-gold)]/60 sm:right-6"
          />

          {/* Corner botanicals: whimsical vines with grapes & pomegranates */}
          <VineBotanical
            className="pointer-events-none absolute -left-6 top-40 text-[color:var(--color-gold)]/45 hidden sm:block"
            width={170}
            height={260}
          />
          <VineBotanical
            className="pointer-events-none absolute -right-6 top-40 text-[color:var(--color-gold)]/45 hidden sm:block"
            width={170}
            height={260}
            flip
          />
          <VineBotanical
            className="pointer-events-none absolute -left-8 bottom-16 text-[color:var(--color-burgundy)]/30 hidden md:block"
            width={150}
            height={220}
          />
          <VineBotanical
            className="pointer-events-none absolute -right-8 bottom-16 text-[color:var(--color-burgundy)]/30 hidden md:block"
            width={150}
            height={220}
            flip
          />

          {/* Arched frame with hero image */}
          <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto hidden md:block">
            <div className="relative mx-auto h-[520px] w-[380px] opacity-25">
              <div
                className="absolute inset-0 rounded-t-[190px] bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
              />
              <div className="absolute inset-0 rounded-t-[190px] border border-[color:var(--color-gold)]/60" />
              <div className="absolute inset-1 rounded-t-[186px] border border-[color:var(--color-gold)]/30" />
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center reveal">
            <div className="flex justify-center text-[color:var(--color-gold)]">
              <Monogram size={110} />
            </div>

            <SectionLabel>{c.hero.kicker}</SectionLabel>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-[color:var(--color-forest)]">
              <span className="italic font-serif text-[color:var(--color-burgundy)]">Dan</span>
              <span className="mx-3 text-[color:var(--color-gold)]">&amp;</span>
              <span className="italic font-serif text-[color:var(--color-burgundy)]">Petra</span>
            </h1>

            <div className="mt-8 flex items-center justify-center gap-4 text-[color:var(--color-gold)]">
              <span className="h-px w-16 bg-current" />
              <span className="font-display text-sm sm:text-base uppercase tracking-[0.42em]">
                {c.date.display}
              </span>
              <span className="h-px w-16 bg-current" />
            </div>

            <p className="mx-auto mt-8 max-w-xl text-base sm:text-lg italic text-[color:var(--color-charcoal)]/85">
              {c.hero.invitation}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#rsvp"
                className="inline-flex min-w-52 items-center justify-center rounded-sm border border-[color:var(--color-forest)] bg-[color:var(--color-forest)] px-8 py-3 text-[11px] uppercase tracking-[0.4em] text-[color:var(--color-ivory)] transition hover:bg-[color:var(--color-burgundy)] hover:border-[color:var(--color-burgundy)]"
              >
                RSVP
              </a>
              <a
                href="#schedule"
                className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--color-forest)] underline decoration-[color:var(--color-gold)] decoration-1 underline-offset-8 hover:text-[color:var(--color-burgundy)]"
              >
                View the Wedding Schedule
              </a>
            </div>

            <div className="mt-16">
              <Countdown targetIso={c.date.iso} />
            </div>
          </div>
        </section>

        <Divider />

        {/* ============ WELCOME / OUR WEDDING ============ */}
        <section id="our-wedding" className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Our Wedding</SectionLabel>
            <SectionHeading>{c.welcome.heading}</SectionHeading>
            <div className="mt-8 flex justify-center text-[color:var(--color-gold)]">
              <BotanicalGarland className="text-[color:var(--color-gold)]" width={420} />
            </div>
            <p className="drop-cap mx-auto mt-10 max-w-2xl text-left text-lg leading-[1.9] text-[color:var(--color-charcoal)]/90">
              {c.welcome.body}
            </p>
          </div>
        </section>

        {/* ============ SCHEDULE ============ */}
        <section id="schedule" className="px-6 py-20 sm:py-28 bg-[color:var(--color-parchment)]/25">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <SectionLabel>The Schedule</SectionLabel>
              <SectionHeading>A Day to Remember</SectionHeading>
              <div className="mt-6 flex justify-center text-[color:var(--color-gold)]">
                <Ornament width={160} />
              </div>
            </div>

            <div id="locations" className="mt-14 grid gap-8 md:grid-cols-2">
              <EventCard event={c.ceremony} />
              <EventCard event={c.celebration} />
            </div>
          </div>
        </section>

        {/* ============ JOURNEY ============ */}
        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel>The Route</SectionLabel>
            <SectionHeading>{c.journey.heading}</SectionHeading>

            <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-4">
              <div className="text-center">
                <div className="font-display text-lg text-[color:var(--color-burgundy)]">Cristian</div>
                <div className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-gold)] mt-1">
                  Ceremony
                </div>
              </div>

              <svg
                viewBox="0 0 240 40"
                className="h-10 w-56 text-[color:var(--color-gold)]"
                aria-hidden="true"
              >
                <path
                  d="M4 20 Q60 4 120 20 T236 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  strokeDasharray="2 4"
                />
                <circle cx="4" cy="20" r="3" fill="currentColor" />
                <circle cx="236" cy="20" r="3" fill="currentColor" />
                <g transform="translate(120 12)" fill="currentColor">
                  <path d="M0 0 l4 4 -4 4 -4 -4 z" />
                </g>
              </svg>

              <div className="text-center">
                <div className="font-display text-lg text-[color:var(--color-burgundy)]">Brașov</div>
                <div className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-gold)] mt-1">
                  Celebration
                </div>
              </div>
            </div>

            <p className="mx-auto mt-10 max-w-xl text-base italic text-[color:var(--color-charcoal)]/85">
              {c.journey.body}
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.32em] text-[color:var(--color-gold)]">
              Estimated driving time · {c.journey.estimatedDuration}
            </p>

            <div className="mt-8">
              <a
                href={mapsDirectionsUrl(
                  c.ceremony.venue,
                  [...c.ceremony.addressLines],
                  c.celebration.venue,
                  [...c.celebration.addressLines],
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-sm border border-[color:var(--color-forest)] px-6 py-3 text-[11px] uppercase tracking-[0.32em] text-[color:var(--color-forest)] transition hover:bg-[color:var(--color-forest)] hover:text-[color:var(--color-ivory)]"
              >
                Open Directions in Google Maps
              </a>
            </div>
          </div>
        </section>

        <Divider />

        {/* ============ RSVP ============ */}
        <section id="rsvp" className="relative overflow-hidden px-6 py-20 sm:py-28">
          <VineBotanical
            className="pointer-events-none absolute -left-6 top-10 text-[color:var(--color-burgundy)]/25 hidden md:block"
            width={150}
            height={240}
          />
          <VineBotanical
            className="pointer-events-none absolute -right-6 top-10 text-[color:var(--color-burgundy)]/25 hidden md:block"
            width={150}
            height={240}
            flip
          />
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <SectionLabel>Répondez s'il vous plaît</SectionLabel>
              <SectionHeading>{c.rsvp.heading}</SectionHeading>
              <p className="mx-auto mt-6 max-w-lg text-base italic text-[color:var(--color-charcoal)]/85">
                {c.rsvp.intro}
              </p>
              <div className="mt-6 flex justify-center text-[color:var(--color-gold)]">
                <Ornament width={160} />
              </div>
            </div>

            <div className="mt-12">
              <RsvpForm />
            </div>
          </div>
        </section>

        {/* ============ PRACTICAL INFO ============ */}
        <section className="px-6 py-20 sm:py-24 bg-[color:var(--color-parchment)]/25">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <SectionLabel>Good to Know</SectionLabel>
              <SectionHeading>Practical Information</SectionHeading>
              <p className="mx-auto mt-4 max-w-xl text-sm italic text-[color:var(--color-charcoal)]/70">
                {/* editable placeholder note */}
                The details below are editable placeholders and will be filled in soon.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {c.practical.map((item) => (
                /* EDITABLE PLACEHOLDER — update in src/lib/wedding-config.ts */
                <div
                  key={item.title}
                  className="rounded-sm border border-[color:var(--color-gold)]/40 bg-[color:var(--color-ivory)]/60 p-6"
                >
                  <h3 className="font-display text-lg text-[color:var(--color-burgundy)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-charcoal)]/85">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CLOSING ============ */}
        <section className="px-6 py-24 sm:py-32 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="flex justify-center text-[color:var(--color-gold)]">
              <BotanicalGarland className="text-[color:var(--color-gold)]" width={520} />
            </div>
            <p className="mt-10 font-display text-2xl sm:text-3xl text-[color:var(--color-forest)] leading-relaxed">
              {c.closing.line}
            </p>
            <p className="mt-8 whitespace-pre-line italic text-[color:var(--color-burgundy)] text-lg">
              {c.closing.signoff}
            </p>

            <div className="mt-12 flex justify-center text-[color:var(--color-gold)]">
              <Monogram size={80} />
            </div>

            <p className="mt-6 font-display tracking-[0.4em] text-[color:var(--color-gold)] text-sm">
              {c.date.short}
            </p>

            <div className="mt-10 flex justify-center text-[color:var(--color-gold)]">
              <BotanicalGarland className="text-[color:var(--color-gold)]" width={520} />
            </div>
          </div>
        </section>

        <footer className="border-t border-[color:var(--color-gold)]/30 px-6 py-8 text-center text-[11px] uppercase tracking-[0.32em] text-[color:var(--color-charcoal)]/60">
          Dan &amp; Petra · Cristian &amp; Brașov · {c.date.short}
        </footer>
      </main>
    </div>
  );
}
