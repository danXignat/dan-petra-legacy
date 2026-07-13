import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { weddingConfig } from "../lib/wedding-config";
import { buildThemeCss } from "../lib/theme";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--color-ivory)] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-[color:var(--color-olive)]">404</h1>
        <h2 className="mt-4 font-display text-xl text-[color:var(--color-burgundy)]">
          Pagină negăsită
        </h2>
        <p className="mt-2 text-sm text-[color:var(--color-charcoal)]/80">
          Pagina pe care o căutați nu există.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm border border-[color:var(--color-olive)] bg-[color:var(--color-olive)] px-5 py-2 text-xs uppercase tracking-[0.32em] text-[color:var(--color-ivory)] hover:bg-[color:var(--color-burgundy)] hover:border-[color:var(--color-burgundy)]"
          >
            Înapoi acasă
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--color-ivory)] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl text-[color:var(--color-olive)]">
          Pagina nu s-a încărcat
        </h1>
        <p className="mt-2 text-sm text-[color:var(--color-charcoal)]/80">
          A apărut o eroare. Puteți încerca din nou sau reveni acasă.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-sm border border-[color:var(--color-olive)] bg-[color:var(--color-olive)] px-5 py-2 text-xs uppercase tracking-[0.32em] text-[color:var(--color-ivory)] hover:bg-[color:var(--color-burgundy)] hover:border-[color:var(--color-burgundy)]"
          >
            Încearcă din nou
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-sm border border-[color:var(--color-gold)] px-5 py-2 text-xs uppercase tracking-[0.32em] text-[color:var(--color-olive)] hover:bg-[color:var(--color-gold)]/10"
          >
            Înapoi acasă
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: weddingConfig.seo.title },
      { name: "description", content: weddingConfig.seo.description },
      { name: "author", content: "Dan & Petra" },
      ...(weddingConfig.seo.noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
      { property: "og:title", content: weddingConfig.seo.title },
      { property: "og:description", content: weddingConfig.seo.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nunta Dan & Petra" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: weddingConfig.seo.title },
      { name: "twitter:description", content: weddingConfig.seo.description },
      { name: "theme-color", content: weddingConfig.theme.colors.ivory },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <HeadContent />
        {/* Palette & fonts — injected from the single source of truth:
            weddingConfig.theme (src/lib/wedding-config.ts). */}
        <style id="wc-theme" dangerouslySetInnerHTML={{ __html: buildThemeCss() }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative">
        {/* Bottom-left corner vine decoration */}
        <img
          src="/bottom-left-corner-vines.svg"
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[0.4rem] left-[0.4rem] z-20 w-[min(58vw,360px)] select-none opacity-90 [filter:saturate(6)_hue-rotate(-10deg)_brightness(0.45)_contrast(1.3)] sm:bottom-[0.7rem] sm:left-[0.7rem] sm:w-[min(52vw,560px)]"
          alt=""
        />
        {/* Top-right corner vine decoration */}
        <img
          src="/top-right-corner-vines.svg"
          aria-hidden="true"
          className="pointer-events-none absolute right-[0.4rem] top-[2.5rem] z-20 w-[min(58vw,360px)] select-none opacity-90 [filter:saturate(6)_hue-rotate(-10deg)_brightness(0.45)_contrast(1.3)] sm:right-[0.7rem] sm:top-[1.4rem] sm:w-[min(52vw,560px)]"
          alt=""
        />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
