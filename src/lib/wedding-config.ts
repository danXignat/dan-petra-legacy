// Single editable configuration for the wedding invitation.
// Change any content here to update the whole site.

export const weddingConfig = {
  couple: {
    firstName: "Dan",
    partnerFirstName: "Petra",
    monogram: { left: "D", right: "P" },
  },
  date: {
    iso: "2026-10-09",
    display: "Friday, 9 October 2026",
    short: "09 · 10 · 2026",
    // Ceremony start (local time in Romania, EEST → UTC+3 on 9 Oct 2026)
    startUtc: "20261009T113000Z", // 14:30 local
    endUtc: "20261009T133000Z",   // 16:30 local
  },
  hero: {
    kicker: "Are getting married",
    invitation:
      "With joyful hearts, we invite you to celebrate our wedding day with us.",
  },
  welcome: {
    heading: "A Celebration of Love",
    body: "Together with our families, we warmly invite you to join us as we begin a new chapter of our lives. We would be honoured to celebrate this special day surrounded by the people we love.",
  },
  ceremony: {
    id: "ceremony",
    title: "The Ceremony",
    time: "14:30",
    venue: "Biserica Fortificată Cristian",
    addressLines: [
      "Piața Libertății 10",
      "Cristian 507055, Județul Brașov",
      "Romania",
    ],
    description:
      "Please join us for our wedding ceremony within the historic walls of the Fortified Church of Cristian.",
    // Calendar
    calendarStartUtc: "20261009T113000Z",
    calendarEndUtc: "20261009T133000Z",
  },
  celebration: {
    id: "celebration",
    title: "The Celebration",
    time: "17:30",
    venue: "Centrul Creștin Brașov",
    addressLines: ["Strada Ioan V. Socec 1A", "Brașov, Romania"],
    description:
      "Following the ceremony, we invite you to join us for dinner, music and an evening of celebration.",
    calendarStartUtc: "20261009T143000Z", // 17:30 local
    calendarEndUtc: "20261009T210000Z",   // 24:00 local
  },
  journey: {
    heading: "From Ceremony to Celebration",
    body: "After the ceremony, guests will make their way from Cristian to Brașov for the evening celebration.",
    // Placeholder — do not invent a duration
    estimatedDuration: "—",
  },
  rsvp: {
    heading: "Kindly Reply",
    intro:
      "Please let us know whether you will be able to celebrate with us.",
    success:
      "Your reply has been received. Thank you for being part of our special day.",
    endpoint: "/api/rsvp",
  },
  closing: {
    line: "We cannot wait to celebrate with you.",
    signoff: "With love,\nDan & Petra",
  },
  // Practical info — placeholders (editable)
  practical: [
    { title: "Dress Code", body: "Details to follow." },
    { title: "Accommodation", body: "Recommendations to follow." },
    { title: "Parking", body: "Details to follow." },
    { title: "Transportation", body: "Details to follow." },
    { title: "Children", body: "Details to follow." },
    { title: "Gifts", body: "Your presence is the greatest gift." },
    { title: "Contact", body: "Details to follow." },
  ],
  seo: {
    title: "Dan & Petra | Wedding Invitation",
    description:
      "Join Dan and Petra for their wedding celebration on 9 October 2026 in Cristian and Brașov, Romania.",
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
  const origin = encodeURIComponent(
    `${originVenue}, ${originAddress.join(", ")}`,
  );
  const destination = encodeURIComponent(
    `${destVenue}, ${destAddress.join(", ")}`,
  );
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
}
