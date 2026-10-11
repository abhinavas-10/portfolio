# Editorial developer portfolio

## What I’ll build
- A single-page, mobile-first portfolio with a full-bleed video opening, oversized kinetic name and role typography, and an understated scroll cue.
- Asymmetric editorial sections for About, an inline skills flow, three substantial project case studies, Training, Education, and a minimal contact close.
- Restrained near-black and warm-white styling with one acid-green accent, subtle grain, a custom blend-mode cursor, magnetic links, and carefully paced interactions.

## Content and placeholders
- Use all supplied education, training, skills, and project copy.
- Clearly label the developer name, email, social URLs, resume file, video source, and project links as placeholders where details were not supplied.
- Give each project a distinct visual preview built for the page rather than generic icon cards.

## Motion and accessibility
- Add line-mask entrance animation for opening typography and staggered scroll-linked reveals for subsequent sections.
- Add marquee movement, project image reveal/treatment, underline drawing, and magnetic pointer behavior with reduced-motion fallbacks.
- Ensure keyboard focus visibility, semantic landmarks, sufficient contrast, and graceful typography/media scaling on small screens.

## Technical details
- Use React functional components, Tailwind CSS v4 tokens, and Motion for React (the current Framer Motion package).
- Keep the video lazy in practice by assigning its source after mount, with a visual fallback when no real clip is provided.
- Add route-specific title, description, Open Graph metadata, and responsive verification.
