// Single editable configuration for the wedding invitation.
// Change any content here to update the whole site.

export const weddingConfig = {
  // ────────────────────────────────────────────────────────────────
  // LOOK & FEEL — edit these to restyle the whole site.
  // Medieval / illuminated-manuscript palette on warm parchment.
  //   • olive    = main colour (headings, buttons, structure)
  //   • burgundy = accent (names, ornaments, emphasis, hovers)
  //   • gold     = metallic gilt detail (fine rules, labels)
  // Colours are plain hex; they are injected as CSS variables (see
  // src/lib/theme.ts) so this file is the ONLY place to change them.
  // ────────────────────────────────────────────────────────────────
  theme: {
    colors: {
      ivory: "#F4EEDF", // page background (aged parchment)
      parchment: "#E4D7BB", // panels / section bands
      olive: "#4A5327", // MAIN — deep medieval olive green
      burgundy: "#6E2A2E", // ACCENT — deep wine red
      gold: "#9E7F45", // antique gilt
      charcoal: "#2E2823", // body text (dark sepia)
    },
    // Font families. If you change these, also update the Google Fonts
    // <link> in src/routes/__root.tsx so the fonts are loaded.
    fonts: {
      display: '"Cinzel", "Cormorant Garamond", "EB Garamond", serif',
      decorative: '"Cinzel Decorative", "Cinzel", serif',
      serif: '"Cormorant Garamond", "EB Garamond", Georgia, serif',
    },
  },
  couple: {
    firstName: "Dan",
    partnerFirstName: "Petra",
    monogram: { left: "D", right: "P" },
  },
  date: {
    iso: "2026-10-09",
    display: "Vineri, 9 octombrie 2026",
    short: "09 · 10 · 2026",
    // Ceremony start (local time in Romania, EEST → UTC+3 on 9 Oct 2026)
    startUtc: "20261009T113000Z", // 14:30 local
    endUtc: "20261009T133000Z", // 16:30 local
  },
  hero: {
    kicker: "Se căsătoresc",
    invitation:
      "Cu inimile pline de bucurie, vă invităm să sărbătoriți alături de noi ziua nunții noastre.",
  },
  welcome: {
    heading: "O sărbătoare a iubirii",
    body: "Împreună cu familiile noastre, vă invităm cu drag să ne fiți alături în momentul în care începem un nou capitol din viața noastră. Ar fi o onoare să sărbătorim această zi specială înconjurați de oamenii pe care îi iubim.",
  },
  ceremony: {
    id: "ceremony",
    title: "Ceremonia",
    time: "14:30",
    venue: "Biserica Fortificată Cristian",
    addressLines: ["Piața Libertății 10", "Cristian 507055, Județul Brașov", "România"],
    description:
      "Vă invităm să ne fiți alături la ceremonia noastră de nuntă, între zidurile istorice ale Bisericii Fortificate din Cristian.",
    // Calendar
    calendarStartUtc: "20261009T113000Z",
    calendarEndUtc: "20261009T133000Z",
  },
  celebration: {
    id: "celebration",
    title: "Petrecerea",
    time: "17:30",
    venue: "Centrul Creștin Brașov",
    addressLines: ["Strada Ioan V. Socec 1A", "Brașov, România"],
    description:
      "După ceremonie, vă invităm să ni vă alăturați la cină, muzică și o seară de sărbătoare.",
    calendarStartUtc: "20261009T143000Z", // 17:30 local
    calendarEndUtc: "20261009T210000Z", // 24:00 local
  },
  journey: {
    heading: "De la ceremonie la petrecere",
    body: "După ceremonie, invitații se vor îndrepta de la Cristian spre Brașov pentru petrecerea de seară.",
    // Placeholder — do not invent a duration
    estimatedDuration: "—",
  },
  rsvp: {
    heading: "Vă rugăm să confirmați",
    intro: "Vă rugăm să ne spuneți dacă veți putea sărbători alături de noi.",
    success:
      "Răspunsul dumneavoastră a fost primit. Vă mulțumim că faceți parte din ziua noastră specială.",
    endpoint: "/api/rsvp",
  },
  closing: {
    line: "Abia așteptăm să sărbătorim alături de voi.",
    signoff: "Cu drag,\nDan & Petra",
  },
  // Practical info — placeholders (editable)
  practical: [
    { title: "Ținuta", body: "Detalii vor urma." },
    { title: "Cazare", body: "Recomandări vor urma." },
    { title: "Parcare", body: "Detalii vor urma." },
    { title: "Transport", body: "Detalii vor urma." },
    { title: "Copii", body: "Detalii vor urma." },
    { title: "Cadouri", body: "Prezența voastră este cel mai frumos dar." },
    { title: "Contact", body: "Detalii vor urma." },
  ],
  seo: {
    title: "Dan & Petra | Invitație de nuntă",
    description:
      "Alăturați-vă lui Dan și Petra la petrecerea nunții lor, pe 9 octombrie 2026, în Cristian și Brașov, România.",
    noindex: false,
  },
} as const;

export function mapsSearchUrl(venue: string, address: string[]): string {
  const q = encodeURIComponent(`${venue}, ${address.join(", ")}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export function mapsDirectionsUrl(
  originVenue: string,
  originAddress: string[],
  destVenue: string,
  destAddress: string[],
): string {
  const origin = encodeURIComponent(`${originVenue}, ${originAddress.join(", ")}`);
  const destination = encodeURIComponent(`${destVenue}, ${destAddress.join(", ")}`);
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
}
