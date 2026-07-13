import { useEffect, useState } from "react";
import { Monogram } from "./Monogram";
import { weddingConfig } from "@/lib/wedding-config";

const links = [
  { href: "#home", label: "Acasă" },
  { href: "#our-wedding", label: "Nunta noastră" },
  { href: "#schedule", label: "Program" },
  { href: "#locations", label: "Locații" },
  { href: "#rsvp", label: "Confirmare" },
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
        scrolled || open
          ? "backdrop-blur-md bg-[color:var(--color-ivory)]/85 border-b border-[color:var(--color-gold)]/30"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#home"
          className="flex items-center gap-2 text-[color:var(--color-olive)]"
          aria-label="Acasă"
        >
          <Monogram size={36} />
          <span className="hidden font-display text-sm font-semibold uppercase tracking-[0.3em] sm:inline">
            {weddingConfig.couple.firstName} &amp; {weddingConfig.couple.partnerFirstName}
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--color-olive)]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 rounded-sm transition-colors duration-300 hover:text-[color:var(--color-burgundy)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm text-[color:var(--color-olive)]"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <g stroke="currentColor" strokeWidth="1.2">
                <line x1="2" y1="2" x2="14" y2="14" />
                <line x1="14" y1="2" x2="2" y2="14" />
              </g>
            </svg>
          ) : (
            <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
              <g stroke="currentColor" strokeWidth="1.2">
                <line x1="0" y1="2" x2="20" y2="2" />
                <line x1="0" y1="7" x2="20" y2="7" />
                <line x1="0" y1="12" x2="20" y2="12" />
              </g>
            </svg>
          )}
        </button>
      </nav>
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 border-[color:var(--color-gold)]/30 bg-[color:var(--color-ivory)]/95 backdrop-blur ${
          open ? "max-h-96 opacity-100 border-t" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--color-olive)]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-[color:var(--color-burgundy)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
