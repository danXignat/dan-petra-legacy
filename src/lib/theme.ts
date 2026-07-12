// Bridges the human-editable palette in `wedding-config.ts` to the stylesheet.
// `buildThemeCss()` is rendered once inside <head> (see src/routes/__root.tsx),
// so the site's colours & fonts have a single source of truth: the config file.

import { weddingConfig } from "./wedding-config";

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "").trim();
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgba(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Returns a `:root { … }` CSS string that defines every colour and font
 * variable the stylesheet consumes, derived from `weddingConfig.theme`.
 * shadcn/ui semantic tokens are mapped from the same palette so the whole
 * UI follows along when the palette changes.
 */
export function buildThemeCss(): string {
  const { colors, fonts } = weddingConfig.theme;

  const declarations: Record<string, string> = {
    // Wedding palette
    "--ivory": colors.ivory,
    "--parchment": colors.parchment,
    "--olive": colors.olive,
    "--burgundy": colors.burgundy,
    "--gold": colors.gold,
    "--charcoal": colors.charcoal,

    // Fonts
    "--wc-font-display": fonts.display,
    "--wc-font-decorative": fonts.decorative,
    "--wc-font-serif": fonts.serif,

    // shadcn/ui semantic tokens, derived from the palette
    "--background": colors.ivory,
    "--foreground": colors.charcoal,
    "--card": colors.ivory,
    "--card-foreground": colors.charcoal,
    "--popover": colors.ivory,
    "--popover-foreground": colors.charcoal,
    "--primary": colors.olive,
    "--primary-foreground": colors.ivory,
    "--secondary": colors.parchment,
    "--secondary-foreground": colors.charcoal,
    "--muted": colors.parchment,
    "--muted-foreground": colors.burgundy,
    "--accent": colors.burgundy,
    "--accent-foreground": colors.ivory,
    "--destructive": colors.burgundy,
    "--destructive-foreground": colors.ivory,
    "--border": rgba(colors.gold, 0.35),
    "--input": rgba(colors.gold, 0.4),
    "--ring": colors.olive,
  };

  const body = Object.entries(declarations)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");

  return `:root {\n${body}\n}`;
}
