import type { CSSProperties } from 'react'
import { PROJECTS } from '../data'
import type { Project } from '../data'

const ROW1 = PROJECTS.slice(0, 3)
const ROW2 = PROJECTS.slice(3)

// One seamless copy wide enough to span any viewport; the track renders it twice
// and animates -50%, so the loop is gapless on every screen size.
const COPY1 = [...ROW1, ...ROW1, ...ROW1]
const COPY2 = [...ROW2, ...ROW2, ...ROW2]

const Tile = ({ project }: { project: Project }) => (
  <figure
    className="relative mx-1.5 flex shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.04] px-6 py-5"
    style={{ width: 340, height: 196 }}
  >
    <span className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#D7E2EA]/55">
      {project.category}
    </span>
    <div>
      <div className="font-display text-2xl font-bold uppercase leading-none text-[#D7E2EA]">
        {project.name}
      </div>
      <div className="mt-2 truncate text-xs text-[#D7E2EA]/50">
        {project.tech.join(' · ')}
      </div>
    </div>
  </figure>
)

/**
 * A continuously-scrolling reel of real project work — the fast visual index
 * that sits between the hero and the detailed Projects cases. Rows drift in
 * opposite directions and pause on hover; static under reduced motion. Marked
 * aria-hidden because every project is fully described in the Projects section.
 */
export const MarqueeSection = () => (
  <section
    aria-hidden="true"
    className="marquee overflow-hidden bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10"
  >
    <div className="flex flex-col gap-3">
      <div
        className="marquee-track"
        style={{ '--marquee-duration': '48s' } as CSSProperties}
      >
        {[...COPY1, ...COPY1].map((p, i) => (
          <Tile key={`r1-${i}`} project={p} />
        ))}
      </div>
      <div
        className="marquee-track reverse"
        style={{ '--marquee-duration': '60s' } as CSSProperties}
      >
        {[...COPY2, ...COPY2].map((p, i) => (
          <Tile key={`r2-${i}`} project={p} />
        ))}
      </div>
    </div>
  </section>
)
