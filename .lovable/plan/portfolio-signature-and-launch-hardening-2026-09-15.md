# Portfolio signature and launch hardening

## Experience changes
- Add one restrained first-visit preloader: a monogram draws itself with SVG strokes, then the portfolio reveals. Remember completion for the browser session so it does not replay on navigation.
- Add a keyboard-accessible manual light/dark toggle with a smooth palette cross-fade and saved preference.
- Keep sound out to preserve restraint and avoid unnecessary complexity.

## Case-study depth
- Expand PHISHIELD into an on-page editorial case study covering the problem, personal role and decisions, a specific frontend/API validation challenge, the solution, and outcome.
- Keep its existing visual language and avoid adding another animation motif.

## Analytics and launch readiness
- Add Vercel Analytics with no tracking token or environment variable required.
- Remove placeholder links that currently change the URL unexpectedly and make unavailable project links visibly non-navigating until real URLs are supplied.
- Verify desktop and mobile rendering, theme switching, one-time preloader behavior, browser logs, and production compilation.

## Delivery notes
- Provide exact Vercel and Netlify deployment steps, required environment variables, placeholder replacement checklist, and custom-domain recommendations.
