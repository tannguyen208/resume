# Product

## Register

brand

## Users

Hiring managers, engineering leads, and technical recruiters at product companies,
evaluating Nguyen Anh Tan for a full-time senior/staff frontend role. They arrive
skeptical and time-poor — often skimming for 20–30 seconds between a stack of other
candidates, frequently on mobile, sometimes from a LinkedIn or GitHub link. The job
they're trying to get done: decide, fast, whether this person is worth a conversation.

## Product Purpose

A personal portfolio landing page that gets Tan shortlisted and contacted for senior
frontend roles. It exists to make one argument — *elite frontend craft* — and to make
it by embodiment rather than assertion: the page is itself a work sample. Around ~8
years of experience (React, Vue, Next.js, plus Node/NestJS backend and AI integration)
is the substance; the design is the proof. Success = a hiring manager finishes the
scroll convinced this person builds unforgettable, precise, fast web experiences, and
hits the "Let's talk" contact.

## Brand Personality

Bold, precise, and human — delivered at a modern, fast tempo. Confident enough to fill
the screen with display type and commit to a dark, high-contrast stage; precise enough
that every edge, transition, and alignment holds up to inspection; human enough (the
magnetic portrait, a wink of wit, first-person voice) that it reads as a person and not
a template. The tone is a senior engineer who is quietly certain of their craft — never
shouting, never stiff. Voice: first-person, plain-spoken, warm, low on buzzwords.

## Anti-references

- **Generic AI/SaaS template** — gradient hero + feature-card grid + tiny tracked
  uppercase eyebrows above every section. The "AI made that" look. Distinctiveness is
  the whole point; if it could be any dev's site, it has failed.
- **Corporate LinkedIn résumé** — stiff, buttoned-up, blue-and-gray, a formal
  timeline-of-jobs. This is a brand surface, not an ATS document.
- **Cluttered / overloaded** — walls of text, stacked effects, everything competing.
  Boldness comes from one dominant idea per fold, not from more.
- **Trendy but soulless** — chasing glassmorphism / drenched neon / whatever's current
  with no point of view. Every choice should trace to "does this prove the craft?"

## Design Principles

1. **The site is the proof.** Show, don't tell. Every interaction, transition, and
   pixel is a work sample; the page must *demonstrate* elite frontend craft, not claim
   it. If a section doesn't withstand a senior engineer's inspection, it undercuts the
   entire pitch.
2. **Bold, but never sloppy.** Go big and confident — but precision is what converts
   boldness into trust. Big type earns its size only when the kerning, rhythm, and
   motion are flawless.
3. **A human behind the craft.** Warmth and personality keep it from reading as a
   template. First-person voice, the magnetic portrait, small deliberate delights — a
   person you'd want on the team, not a spec sheet.
4. **Fast is a feature.** Performance and responsiveness are part of the argument; a
   senior frontend engineer's own site must feel instant on every device.
5. **Legible under the art.** A recruiter skimming for 20 seconds must still extract
   who, what, and proof. Expression never buries the facts — the craft frames the
   information, it doesn't hide it.

## Accessibility & Inclusion

Target **WCAG 2.1 AA**.

- **Contrast:** body text ≥4.5:1, large text ≥3:1. Audit the muted light-on-dark tones
  (the `#D7E2EA` opacity ramps on `#0C0C0C`) — low-opacity metadata is the likely
  failure point.
- **Reduced motion:** the heavy entrance choreography, scroll reveals, marquee, and
  magnetic portrait need a calm `prefers-reduced-motion` fallback (crossfade or instant),
  never a blank or broken section.
- **Keyboard & screen reader:** full keyboard navigation with visible focus states,
  semantic landmarks, and meaningful alt text (decorative corner objects stay `alt=""`;
  project imagery gets descriptive alt in the brand's voice).
