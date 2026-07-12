import { useEffect, useState } from "react";
import { Monogram } from "./Monogram";

const links = [
  { href: "#home", label: "Home" },
  { href: "#our-wedding", label: "Our Wedding" },
  { href: "#schedule", label: "Schedule" },
  { href: "#locations", label: "Locations" },
  { href: "#rsvp", label: "RSVP" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-[color:var(--color-ivory)]/85 border-b border-[color:var(--color-gold)]/30" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-2 text-[color:var(--color-forest)]" aria-label="Home">
          <Monogram size={36} />
          <span className="hidden sm:inline font-display text-sm tracking-[0.3em] uppercase">Dan &amp; Petra</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.28em] text-[color:var(--color-forest)]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[color:var(--color-gold)] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center text-[color:var(--color-forest)]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
            {open ? (
              <g stroke="currentColor" strokeWidth="1.2">
                <line x1="2" y1="2" x2="18" y2="12" />
                <line x1="18" y1="2" x2="2" y2="12" />
              </g>
            ) : (
              <g stroke="currentColor" strokeWidth="1.2">
                <line x1="0" y1="2" x2="20" y2="2" />
                <line x1="0" y1="7" x2="20" y2="7" />
                <line x1="0" y1="12" x2="20" y2="12" />
              </g>
            )}
          </svg>
        </button>
      </nav>
      {open ? (
        <div className="md:hidden border-t border-[color:var(--color-gold)]/30 bg-[color:var(--color-ivory)]/95 backdrop-blur">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-sm uppercase tracking-[0.28em] text-[color:var(--color-forest)]">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-[color:var(--color-gold)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
