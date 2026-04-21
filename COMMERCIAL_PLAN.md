# Commercial Template Readiness Plan (Gumroad)

To sell this as a high-end template, we need to transition from a "hardcoded project" to an "configurable architectural framework." This adds immense value by reducing the time-to-launch for your buyers.

## Phase 1: Centralization & Configuration
*   **Target**: Create a single source of truth for all branding and content.
*   **Action**: Create `src/config/site.ts`. Move all text, image URLs, navigation links, and social metadata here.
*   **Benefit**: Buyers can change the entire site identity in 2 minutes by editing one file.

## Phase 2: Design System Hardening
*   **Target**: Ensure styling is consistent and easily themeable.
*   **Action**: Move core colors (Secondary, Accent, Primary) into `globals.css` as CSS variables.
*   **Action**: Standardize spacing and animation durations using a shared object or Tailwind base config.

## Phase 3: Developer Experience (DX)
*   **Target**: Make the codebase "dummy-proof" for buyers.
*   **Action**: Write a professional `README.md` with:
    *   One-click deployment instructions.
    *   Folder structure breakdown.
    *   Configuration guide.
*   **Action**: Add an `.env.example` for future integrations (Analytics, Forms).

## Phase 4: SEO & Marketing Optimization
*   **Target**: High "out-of-the-box" Lighthouse scores.
*   **Action**: Implement a `Meta` component in `App.tsx` that uses the site config for OpenGraph, Twitter cards, and Meta descriptions.
*   **Action**: Ensure all images have dynamic `alt` tags driven by the config.

## Phase 5: Interaction Polish
*   **Target**: "Wow" factor within 3 seconds of landing.
*   **Action**: Add smooth page transitions or a refined loading state (splash screen).
*   **Action**: Implement a "Cursor" follow effect or subtle noise texture overlay for that premium "Awwwards" feel.

---

### Immediate Next Steps:
1. Create the `site.ts` configuration file.
2. Refactor the `Hero` and `Navbar` to use this config.
3. Add a professional `README.md`.
