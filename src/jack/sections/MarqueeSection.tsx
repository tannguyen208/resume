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
    className="relative mx-1.5 shrink-0 overflow-hidden rounded-2xl"
    style={{ width: 380, height: 244 }}
  >
    <img src={project.image} alt="" loading="lazy" className="h-full w-full object-cover" />
    <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-5 pb-4 pt-12">
      <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#D7E2EA]/85">
        {project.category}
      </span>
      <span className="text-lg font-medium uppercase leading-tight text-white">{project.name}</span>
    </figcaption>
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
      <div className="marquee-track" style={{ '--marquee-duration': '48s' } as CSSProperties}>
        {[...COPY1, ...COPY1].map((p, i) => (
          <Tile key={`r1-${i}`} project={p} />
        ))}
      </div>
      <div className="marquee-track reverse" style={{ '--marquee-duration': '60s' } as CSSProperties}>
        {[...COPY2, ...COPY2].map((p, i) => (
          <Tile key={`r2-${i}`} project={p} />
        ))}
      </div>
    </div>
  </section>
)
