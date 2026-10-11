# Portfolio refinement plan

## Scope
- Preserve the existing editorial visual system and interactions.
- Replace all placeholders with Abhinav’s verified details and disable unavailable links.
- Refine the hero, project summaries, resume fallback, and video fallback.
- Add a dedicated recruiter-friendly PHISHIELD case study at `/work/phishield`.
- Verify themes, reduced motion, navigation, external links, and responsive layouts.

## Technical details
- Keep the one-time SVG DE preloader and persisted manual theme.
- Share navigation/theme styling where practical without changing the current identity.
- Keep Vercel Analytics and require no environment variables.
- Detect optional public media before rendering links or video.
