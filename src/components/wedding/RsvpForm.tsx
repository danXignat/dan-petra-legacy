import { useState, type FormEvent } from "react";
import { weddingConfig } from "@/lib/wedding-config";

type Status = "idle" | "loading" | "success" | "error";

const inputCls =
  "w-full rounded-sm border border-[color:var(--color-gold)]/50 bg-[color:var(--color-ivory)]/70 px-4 py-3 text-sm text-[color:var(--color-charcoal)] placeholder:text-[color:var(--color-charcoal)]/50 focus:border-[color:var(--color-forest)] focus:outline-none focus:ring-1 focus:ring-[color:var(--color-forest)]/40 transition";

const labelCls =
  "block text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-forest)] mb-2";

export function RsvpForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      invitationToken: String(fd.get("invitationToken") ?? ""),
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      attending: fd.get("attending") === "yes",
      guestCount: Number(fd.get("guestCount") ?? 1),
      guestNames: String(fd.get("guestNames") ?? ""),
      meal: String(fd.get("meal") ?? ""),
      dietaryRequirements: String(fd.get("dietaryRequirements") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""), // honeypot
    };
    try {
      const res = await fetch(weddingConfig.rsvp.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-[color:var(--color-gold)]/50 bg-[color:var(--color-ivory)]/70 p-10 text-center">
        <p className="font-display text-2xl text-[color:var(--color-forest)]">Thank you</p>
        <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-charcoal)]/90">
          {weddingConfig.rsvp.success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2" noValidate>
      {/* honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="invitationToken" className={labelCls}>Invitation code</label>
        <input id="invitationToken" name="invitationToken" type="text" className={inputCls} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className={labelCls}>Full name</label>
        <input id="name" name="name" type="text" required className={inputCls} autoComplete="name" />
      </div>
      <div>
        <label htmlFor="email" className={labelCls}>Email address</label>
        <input id="email" name="email" type="email" required className={inputCls} autoComplete="email" />
      </div>

      <fieldset className="sm:col-span-2">
        <legend className={labelCls}>Will you attend?</legend>
        <div className="flex flex-wrap gap-3">
          {[
            { v: "yes", l: "Joyfully accepts" },
            { v: "no", l: "Regretfully declines" },
          ].map((opt) => (
            <label
              key={opt.v}
              className={`cursor-pointer rounded-sm border px-4 py-3 text-sm transition ${
                attending === (opt.v as "yes" | "no")
                  ? "border-[color:var(--color-forest)] bg-[color:var(--color-forest)] text-[color:var(--color-ivory)]"
                  : "border-[color:var(--color-gold)]/50 text-[color:var(--color-charcoal)] hover:border-[color:var(--color-forest)]"
              }`}
            >
              <input
                type="radio"
                name="attending"
                value={opt.v}
                className="sr-only"
                checked={attending === (opt.v as "yes" | "no")}
                onChange={() => setAttending(opt.v as "yes" | "no")}
              />
              {opt.l}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="guestCount" className={labelCls}>Number of guests</label>
        <input id="guestCount" name="guestCount" type="number" min={1} max={10} defaultValue={1} className={inputCls} />
      </div>
      <div>
        <label htmlFor="meal" className={labelCls}>Meal preference</label>
        <select id="meal" name="meal" className={inputCls} defaultValue="">
          <option value="" disabled>Please choose…</option>
          <option value="regular">Regular</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="guestNames" className={labelCls}>Guest names</label>
        <input id="guestNames" name="guestNames" type="text" className={inputCls} placeholder="Names of everyone in your party" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="dietaryRequirements" className={labelCls}>Dietary requirements or allergies</label>
        <input id="dietaryRequirements" name="dietaryRequirements" type="text" className={inputCls} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelCls}>A message for Dan and Petra</label>
        <textarea id="message" name="message" rows={4} className={inputCls} />
      </div>

      {status === "error" ? (
        <p className="sm:col-span-2 text-sm text-[color:var(--color-burgundy)]">
          {errorMsg ?? "Something went wrong. Please try again."}
        </p>
      ) : null}

      <div className="sm:col-span-2 flex justify-center pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-w-56 items-center justify-center rounded-sm border border-[color:var(--color-forest)] bg-[color:var(--color-forest)] px-8 py-3 text-[11px] uppercase tracking-[0.36em] text-[color:var(--color-ivory)] transition hover:bg-[color:var(--color-burgundy)] hover:border-[color:var(--color-burgundy)] disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send reply"}
        </button>
      </div>
    </form>
  );
}
