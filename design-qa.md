# Design QA

## Evidence

- Source of visual truth: `assets/design-reference.png` (1487 × 1058 px), the user-selected first concept after removing the OH monogram.
- Browser implementation: `http://localhost:4173/`, captured in the Codex in-app browser at a 1440 × 1024 CSS-pixel viewport.
- Side-by-side evidence: `assets/design-comparison-final.png` (source on the left, implementation on the right).
- Focused region evidence: the browser-rendered `#work` section was inspected at 1440 × 1024 and 390 × 844; all nine `.project-cover img` elements measured exactly 1:1 after the fix.
- State compared: desktop first fold, navigation closed, experience rows collapsed.
- Responsive verification: 390 × 844 CSS pixels, navigation both closed and open, with the nine-card project shelf horizontally scrollable.

## Iterations

1. P2 — The initial hero crop clipped the eclipse vertically and omitted the handwritten phrase. Fixed the image position and regenerated the hero artwork with “Ideas To Products And Beyond”.
2. P2 — The right-side metadata collided with the script and footer copy. Reduced it to the source-aligned location/date block and anchored it above the footer.
3. Post-fix pass — Rechecked the desktop first fold, the mobile hero, open mobile navigation, image loading, document width, and browser console.
4. P2 — Explicit `width` and `height` attributes were preserving a 1024 px rendered height after the card width became responsive, producing tall covers. Added `height: auto` with `aspect-ratio: 1 / 1`. Post-fix evidence measured every cover at 149.45 × 149.45 px on desktop and 158 × 158 px on mobile.
5. User-directed content pass — Moved BM, 매일미사AI, 다꾸핏 가계부, and Beauty Makers into the representative-project grid, generated four matching square covers, and removed the separate “더 많은 제품” and “출시까지 책임질 사람이 필요한가요?” sections. Post-fix evidence found nine project cards, no `#archive` or `#contact` section, and no stale Contact navigation link.

## Surface review

- Layout and spacing: source hierarchy and two-column first fold are preserved; header, hero, project catalogue, and impact panel align without overlap. All nine representative-project covers render as exact squares in a balanced five-plus-four desktop grid.
- Typography: Inter and Noto Sans KR reproduce the compact editorial hierarchy and Korean display scale.
- Color and imagery: near-black/plum base, crimson highlight, eclipse hero, and square release-style project art match the selected direction. All artwork is stored as raster image assets rather than recreated with layout primitives.
- Content: all nine project links now appear in the representative-project catalogue; impact figures, experience, hero contact route, footer contact route, and structured metadata remain present.
- Responsiveness: no horizontal document overflow at 390 px; navigation expands and collapses correctly; project cards remain intentionally horizontally scrollable.
- Accessibility: semantic headings and landmarks, skip link, keyboard-focus states, descriptive image alt text, accessible menu and disclosure state, and reduced-motion handling are present.
- Runtime: every referenced image completed with a non-zero natural width; browser console reported no warnings or errors.
- Performance: all visible artwork files use WebP; the total loaded artwork weight remains under 1 MB.
- Branding check: the OH monogram was removed from the page and favicon. The full personal name remains only where semantically appropriate.

## Residual variance

- P3 — The implementation uses original generated hero and project artwork in the approved art direction rather than pixel-identical concept artwork. This is intentional and does not affect hierarchy or usability.
- P3 — The approved source mock showed five project covers in one row; the user-directed nine-project catalogue uses five covers on the first desktop row and four on the second. Mobile preserves the established horizontal shelf behavior.

final result: passed
