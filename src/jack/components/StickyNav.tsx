import { useEffect, useRef, useState } from 'react'
import { NAV_LINKS, PERSON } from '../data'

const SECTION_IDS = NAV_LINKS.map((l) => l.toLowerCase())

/**
 * Persistent wayfinding for the long scroll: a slim bar that reveals once the
 * hero has scrolled away and highlights the section currently in view. The hero
 * keeps its own at-rest nav; this is the compact, scrolled-state counterpart.
 */
export const StickyNav = () => {
  const navRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState('')

  // While hidden (translated off-screen) the bar must not hold keyboard focus or
  // be announced — inert removes it from the tab order and the a11y tree.
  useEffect(() => {
    if (navRef.current) navRef.current.inert = !visible
  }, [visible])

  // Reveal once the hero has largely passed.
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setVisible(window.scrollY > window.innerHeight * 0.7))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Whichever section owns the vertical-center band is active.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const toTop = () =>
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })

  return (
    <nav
      ref={navRef}
      aria-label="Section navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out motion-reduce:transition-none ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-[#d7e2ea]/10 bg-[#0c0c0c]/80 px-5 py-3 backdrop-blur-md sm:px-8 md:px-10">
        <button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          className="font-display hidden text-lg font-black uppercase tracking-tight text-[#d7e2ea] transition-opacity hover:opacity-70 sm:block"
        >
          {PERSON.firstName}
        </button>
        <ul className="flex flex-1 items-center justify-between gap-3 sm:flex-none sm:justify-end sm:gap-7">
          {NAV_LINKS.map((link) => {
            const id = link.toLowerCase()
            const isActive = active === id
            return (
              <li key={link}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative inline-block py-1 text-[11px] font-medium uppercase tracking-wider transition-colors sm:text-sm ${
                    isActive ? 'text-[#d7e2ea]' : 'text-[#d7e2ea]/60 hover:text-[#d7e2ea]/90'
                  }`}
                >
                  {link}
                  <span
                    aria-hidden
                    className={`absolute bottom-0 left-0 h-0.5 w-full origin-left bg-[#d7e2ea] transition-transform duration-300 ease-out motion-reduce:transition-none ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
