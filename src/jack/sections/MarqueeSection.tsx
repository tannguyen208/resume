import { useEffect, useRef, useState } from 'react'
import { MARQUEE_IMAGES } from '../data'

const ROW1 = MARQUEE_IMAGES.slice(0, 11)
const ROW2 = MARQUEE_IMAGES.slice(11)

const Tile = ({ src }: { src: string }) => (
  <img
    src={src}
    alt=""
    loading="lazy"
    className="shrink-0 rounded-2xl object-cover"
    style={{ width: 420, height: 270 }}
  />
)

export const MarqueeSection = () => {
  const ref = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const sectionTop = el.getBoundingClientRect().top + window.scrollY
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Triple each row for seamless edge-to-edge coverage while translating.
  const row1 = [...ROW1, ...ROW1, ...ROW1]
  const row2 = [...ROW2, ...ROW2, ...ROW2]

  return (
    <section ref={ref} className="overflow-hidden bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10">
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {row1.map((src, i) => (
            <Tile key={`r1-${i}`} src={src} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {row2.map((src, i) => (
            <Tile key={`r2-${i}`} src={src} />
          ))}
        </div>
      </div>
    </section>
  )
}
