import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/wedding/Nav";
import { Monogram } from "@/components/wedding/Monogram";
import { Ornament, Divider } from "@/components/wedding/Ornament";
import { EventCard } from "@/components/wedding/EventCard";
import { RsvpForm } from "@/components/wedding/RsvpForm";
import { Countdown } from "@/components/wedding/Countdown";
import { weddingConfig } from "@/lib/wedding-config";

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
    <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-olive)]">
      {children}
    </h2>
  );
}

function Invitation() {
  const c = weddingConfig;

  return (
    <div className="min-h-screen">
      <Nav />
      <main id="home">
        {/* ============ HERO ============ */}
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-28 pb-16">
          <div className="relative z-10 mx-auto max-w-3xl text-center reveal">
            <div className="flex justify-center text-[color:var(--color-gold)]">
              <Monogram size={110} />
            </div>

            <SectionLabel>{c.hero.kicker}</SectionLabel>

            <h1 className="mt-6 font-decorative text-5xl leading-[1.05] sm:text-6xl md:text-7xl text-[color:var(--color-olive)]">
              <span className="text-[color:var(--color-burgundy)]">{c.couple.firstName}</span>
              <span className="mx-3 text-[color:var(--color-gold)]">&amp;</span>
              <span className="text-[color:var(--color-burgundy)]">
                {c.couple.partnerFirstName}
              </span>
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
                className="inline-flex min-w-52 items-center justify-center rounded-sm border border-[color:var(--color-olive)] bg-[color:var(--color-olive)] px-8 py-3 text-[11px] uppercase tracking-[0.4em] text-[color:var(--color-ivory)] transition hover:bg-[color:var(--color-burgundy)] hover:border-[color:var(--color-burgundy)]"
              >
                Confirmă prezența
              </a>
              <a
                href="#schedule"
                className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--color-olive)] underline decoration-[color:var(--color-gold)] decoration-1 underline-offset-8 hover:text-[color:var(--color-burgundy)]"
              >
                Vezi programul nunții
              </a>
            </div>

            <div className="mt-16">
              <Countdown targetIso={c.date.iso} />
            </div>

            <div className="mt-14 mx-auto max-w-xl">
              <p className="italic text-base sm:text-lg leading-[1.85] text-[color:var(--color-charcoal)]/85">
                „Mai bine doi decât unul, căci au o răsplată bună pentru osteneala
                lor... Și funia împletită în trei nu se rupe ușor."
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.38em] text-[color:var(--color-gold)]">
                Eclesiastul 4:9–12
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ============ WELCOME / OUR WEDDING ============ */}
        <section id="our-wedding" className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Nunta noastră</SectionLabel>
            <SectionHeading>{c.welcome.heading}</SectionHeading>
            <div className="mt-8 flex justify-center text-[color:var(--color-gold)]">
              <Ornament width={180} />
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
              <SectionLabel>Programul</SectionLabel>
              <SectionHeading>O zi de neuitat</SectionHeading>
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

        {/* ============ RSVP ============ */}
        <section id="rsvp" className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <SectionLabel>Vă rugăm să răspundeți</SectionLabel>
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
              <SectionLabel>Bine de știut</SectionLabel>
              <SectionHeading>Informații practice</SectionHeading>
              <p className="mx-auto mt-4 max-w-xl text-sm italic text-[color:var(--color-charcoal)]/70">
                {/* editable placeholder note */}
                Detaliile de mai jos sunt provizorii și vor fi completate în curând.
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
              <Ornament width={220} />
            </div>
            <p className="mt-10 font-display text-2xl sm:text-3xl text-[color:var(--color-olive)] leading-relaxed">
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
              <Ornament width={220} />
            </div>
          </div>
        </section>

        <footer className="border-t border-[color:var(--color-gold)]/30 px-6 py-8 text-center text-[11px] uppercase tracking-[0.32em] text-[color:var(--color-charcoal)]/60">
          {c.couple.firstName} &amp; {c.couple.partnerFirstName} · Cristian &amp; Brașov ·{" "}
          {c.date.short}
        </footer>
      </main>
    </div>
  );
}
