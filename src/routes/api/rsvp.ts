import { createFileRoute } from "@tanstack/react-router";

interface RsvpPayload {
  invitationToken?: string;
  name?: string;
  email?: string;
  attending?: boolean;
  guestCount?: number;
  guestNames?: string;
  meal?: string;
  dietaryRequirements?: string;
  message?: string;
  website?: string;
}

export const Route = createFileRoute("/api/rsvp")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: RsvpPayload;
        try {
          body = (await request.json()) as RsvpPayload;
        } catch {
          return new Response(JSON.stringify({ error: "JSON invalid" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        // Honeypot: silently accept
        if (body.website && body.website.trim() !== "") {
          return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        }

        if (!body.name || !body.email) {
          return new Response(
            JSON.stringify({ error: "Numele și adresa de email sunt obligatorii." }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        // Server-side log only. To wire up a Google Sheet or email service,
        // read a secret via process.env and forward the payload here.
        console.info("[rsvp] received", {
          name: body.name,
          email: body.email,
          attending: body.attending,
          guestCount: body.guestCount,
        });

        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
