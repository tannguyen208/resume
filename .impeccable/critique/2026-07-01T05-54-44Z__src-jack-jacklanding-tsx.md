---
target: jack landing
total_score: 29
p0_count: 0
p1_count: 3
timestamp: 2026-07-01T05-54-44Z
slug: src-jack-jacklanding-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | No active-section nav state; nav scrolls away, no persistent wayfinding on a ~9,800px page |
| 2 | Match System / Real World | 3 | Language is natural & first-person, but the marquee of unrelated sites reads as "his work" when it isn't |
| 3 | User Control and Freedom | 3 | Anchor nav only exists at the very top; scroll-linked reveals tie readability to scroll position |
| 4 | Consistency and Standards | 3 | Project 01 uses an illustration vs. real screenshots elsewhere; unused "Live Project" button component |
| 5 | Error Prevention | 3 | Only conversion path is a raw `mailto:`; dead-ends on devices with no mail client |
| 6 | Recognition Rather Than Recall | 3 | Text nav labels (good), but no active state to show location |
| 7 | Flexibility and Efficiency | 3 | Fine for the single task; no keyboard focus affordance on the primary CTA |
| 8 | Aesthetic and Minimalist Design | 2 | Marquee (21 borrowed site previews) + random 3D decor are substantial decorative noise with no informational value |
| 9 | Error Recovery | 3 | Nothing broken, but no recovery for the mailto dead-end |
| 10 | Help and Documentation | 3 | Self-evident content; n/a for a portfolio |
| **Total** | | **29/40** | **Good — solid, bold foundation; specific craft & credibility issues hold it back from excellent** |

## Anti-Patterns Verdict

**Does this look AI-generated?** Partially — and the tells are *borrowed-template* tells, not *generic-SaaS* tells.

**LLM assessment:** The shell dodges the first-order AI reflex entirely — no cream bg, no feature-card grid, no eyebrow-on-every-section. It's dark, bold, and commits to big display type, which fits the brand register. But three things betray that it's an adapted template rather than personally crafted: (1) the **marquee of other companies' AI landing-page previews** (motionsites.ai stock — "Launch Your Coding Career," "AI Powers You Up"), (2) **arbitrary glossy 3D decor** (a moon, a Lego block, a blob) hotlinked from the source `figma.site`, and (3) **gradient text on every dark heading**. For a page whose thesis is "I have elite frontend craft," borrowed assets are the one thing that most undercuts the claim.

**Deterministic scan:**
- `gradient-text` — `src/main.css:24` (`.hero-heading`, imported by `main.tsx`). Applies to HI I'M TAN / ABOUT ME / PROJECTS / LET'S TALK. **Confirms the LLM catch.**
- `single-font` — `index.html:10` (Kanit only for the whole page). Defensible as a deliberate weight-contrast system, but no display/body distinction.
- `side-tab` (`border-l-4`) — `src/components/resume/Experience.tsx:17`. **False positive for this target:** it's in the unused legacy `Resume` tree, not the live landing. (Dead-code cleanup, not a landing fix.)

## Overall Impression

The bones are genuinely good: a confident dark stage, real interaction craft (magnetic portrait, sticky-scaling project cards), and a clean Hero → About → Expertise → Projects → Contact narrative. But the page keeps borrowing where it should be proving. The single biggest opportunity: **make every pixel yours.** Replace the borrowed marquee and decor, fix the portrait cutout, and the "elite craft" argument lands instead of leaking.

## What's Working

1. **Committed, confident scale.** Full-viewport-width display type on a true-black stage — no timidity. Correct register instinct for a portfolio brand.
2. **Real interaction craft.** The sticky-stacking, scale-on-scroll project cards and the cursor-magnetic portrait are exactly the kind of motion that *demonstrates* frontend skill rather than claiming it.
3. **Clean IA + high-contrast Expertise panel.** The black-on-white numbered Expertise list (01–05) is scannable, legitimately sequenced, and a strong rhythm break from the dark sections.

## Priority Issues

**[P1] Hero portrait is a rough background cutout.** The single most prominent human element is a small seated figure inside a messy lavender blob (a botched background removal) on a white card. On a page arguing "elite craft," this is the first thing a recruiter's eye lands on and it reads as unpolished.
- **Fix:** Re-cut the portrait cleanly (transparent PNG with a real edge), or shoot/crop a tighter portrait that fills the card. Consider dropping the white card for a duotone/treated image that belongs to the dark palette.
- **Suggested command:** `/impeccable polish`

**[P1] The marquee showcases other people's sites, not yours.** Two rows of borrowed motionsites.ai landing-page previews sit directly below the hero. A visitor reasonably reads them as Tan's work — they aren't (his projects are further down), they look like generic AI templates, and they're hotlinked (fragile). This is the biggest credibility leak.
- **Fix:** Replace with real artifacts — screenshots/clips of *your* projects, a logo wall of companies you've shipped for, or cut the section. If you keep a marquee, it must be your work.
- **Suggested command:** `/impeccable distill` (or `harden` if replacing with real assets)

**[P1] Core bio is gated behind a scroll animation with no reduced-motion fallback.** `AnimatedText` holds each character at 0.2 opacity (**1.63:1 contrast** — effectively invisible on black) until the paragraph scrolls fully through, and `prefers-reduced-motion` is not handled anywhere (FadeIn, marquee, magnet, and this per-char reveal all ignore it). The substance of the pitch is hard to read, and motion-sensitive users get the full effect.
- **Fix:** Default the paragraph to full opacity; make the reveal an enhancement. Add a `prefers-reduced-motion: reduce` branch across the motion components (crossfade or instant).
- **Suggested command:** `/impeccable animate` (reduced-motion pass) + `/impeccable audit`

**[P2] Gradient text on every dark heading.** `background-clip: text` over a gradient is an absolute anti-pattern — decorative, never meaningful, and a template tell. It's the identity right now, so treat as a deliberate departure: a single solid ink (`#D7E2EA` or near-white) at this scale is *more* confident, not less.
- **Fix:** Replace `.hero-heading` gradient with a solid fill; carry emphasis through weight/size (already huge).
- **Suggested command:** `/impeccable typeset`

**[P2] Muted metadata fails WCAG AA; first paint can ship blank.** Footer location (`/50` = **4.32:1**) and copyright (`/40` = **3.17:1**) fail 4.5:1. Separately, the hero H1 + portrait initialize at `opacity: 0` via `whileInView` — the first render is blank until JS/motion runs (confirmed on load), a risk for LCP, social preview crawlers, and slow devices.
- **Fix:** Bump muted tones to ≥`/65`; render the hero at full opacity by default and layer motion on top.
- **Suggested command:** `/impeccable audit`

## Persona Red Flags

**Jordan (First-Timer / recruiter skimming):** Hits the marquee right after the hero and can't tell if those polished sites are Tan's work — ambiguity at the exact moment trust is forming. No active nav state to anchor "where am I" on a very long page.

**Sam (Accessibility-Dependent):** About paragraph is 1.63:1 until scrolled; `prefers-reduced-motion` is ignored across all motion; the primary Contact CTA carries a permanent 2px white `outline` as *decoration*, so keyboard focus isn't distinguishable from rest state. Decorative corner objects correctly use `alt=""` (good), but project images use bare names as alt.

**Casey (Distracted Mobile):** Nav lives only in the hero and scrolls away — no persistent way to jump on a ~9,800px page. The only CTA is a raw `mailto:`; on a phone with no configured mail client it dead-ends with no copy-email fallback.

## Minor Observations

- Project 01 ("Colors") shows a generic orange SVG illustration while 02–06 use real screenshots — uneven proof quality; the illustration is the weakest card.
- The `LiveProjectButton` component exists but is never rendered — project cards have no link to a live demo or repo, so "see it" is impossible.
- Nav is `justify-between` with four items and no wrap/hamburger; verify it doesn't crowd at ~360px.
- Kanit-only is defensible, but a refined body face paired against Kanit's display weights would add the distinction the brief wants.
- Dead code: the legacy `Resume`/`resume.ts`/`theme/` tree is unused (and carries the `border-l-4` slop the detector flagged). Safe to remove separately.

## Questions to Consider

- If the marquee showed *your* six projects instead of borrowed templates, would you still need the separate Projects section — or could they merge into one stronger proof-of-work moment?
- The gradient headings and gradient button are the most "template" elements. What would a version look like that carried all its confidence through *type and scale alone*?
- The portrait is the human anchor of the whole pitch. What's the one photo that says "senior engineer you'd want on the team" — and does the current one clear that bar?
- Every borrowed asset (marquee, 3D decor, figma.site images) is a small "this isn't really mine." What's the cost of shipping the site with zero borrowed pixels?
