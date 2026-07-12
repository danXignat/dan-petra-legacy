export function buildIcs(opts: {
  uid: string;
  title: string;
  description: string;
  location: string;
  startUtc: string; // format YYYYMMDDTHHMMSSZ
  endUtc: string;
}): string {
  const esc = (s: string) =>
    s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
  const now = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Dan and Petra//Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${opts.uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${opts.startUtc}`,
    `DTEND:${opts.endUtc}`,
    `SUMMARY:${esc(opts.title)}`,
    `DESCRIPTION:${esc(opts.description)}`,
    `LOCATION:${esc(opts.location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function downloadIcs(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
