# Design QA

## Evidence

- Source of visual truth: `assets/design-reference.png` (1487 × 1058 px), the user-selected first concept after removing the OH monogram.
- Browser implementation: `http://localhost:4173/`, captured in the Codex in-app browser at a 1440 × 1024 CSS-pixel viewport.
- Side-by-side evidence: `assets/design-comparison-final.png` (source on the left, implementation on the right).
- Focused region evidence: the browser-rendered `#work` section was inspected at 1440 × 1024 and 390 × 844; all five `.project-cover img` elements measured exactly 1:1 after the fix.
- State compared: desktop first fold, navigation closed, experience rows collapsed.
- Responsive verification: 390 × 844 CSS pixels, navigation both closed and open.

## Iterations

1. P2 — The initial hero crop clipped the eclipse vertically and omitted the handwritten phrase. Fixed the image position and regenerated the hero artwork with “Ideas To Products And Beyond”.
2. P2 — The right-side metadata collided with the script and footer copy. Reduced it to the source-aligned location/date block and anchored it above the footer.
3. Post-fix pass — Rechecked the desktop first fold, the mobile hero, open mobile navigation, image loading, document width, and browser console.
4. P2 — Explicit `width` and `height` attributes were preserving a 1024 px rendered height after the card width became responsive, producing tall covers. Added `height: auto` with `aspect-ratio: 1 / 1`. Post-fix evidence measured every cover at 149.45 × 149.45 px on desktop and 158 × 158 px on mobile.

## Surface review

- Layout and spacing: source hierarchy and two-column first fold are preserved; header, hero, project catalogue, and impact panel align without overlap. Every representative-project cover now renders as an exact square.
- Typography: Inter and Noto Sans KR reproduce the compact editorial hierarchy and Korean display scale.
- Color and imagery: near-black/plum base, crimson highlight, eclipse hero, and square release-style project art match the selected direction. All artwork is stored as raster image assets rather than recreated with layout primitives.
- Content: portfolio copy, project links, impact figures, experience, contact routes, and structured metadata remain present.
- Responsiveness: no horizontal document overflow at 390 px; navigation expands and collapses correctly; project cards remain intentionally horizontally scrollable.
- Accessibility: semantic headings and landmarks, skip link, keyboard-focus states, descriptive image alt text, accessible menu and disclosure state, and reduced-motion handling are present.
- Runtime: every referenced image completed with a non-zero natural width; browser console reported no warnings or errors.
- Performance: the six visible artwork files use WebP; the total loaded artwork weight is under 0.5 MB.
- Branding check: the OH monogram was removed from the page and favicon. The full personal name remains only where semantically appropriate.

## Residual variance

- P3 — The implementation uses original generated hero and project artwork in the approved art direction rather than pixel-identical concept artwork. This is intentional and does not affect hierarchy or usability.

final result: passed
