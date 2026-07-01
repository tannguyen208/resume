import { FadeIn } from '../components/FadeIn'
import { Magnet } from '../components/Magnet'
import { ContactButton } from '../components/ContactButton'
import { DownloadCV } from '../components/DownloadCV'
import { NAV_LINKS, PERSON } from '../data'

export const HeroSection = () => (
  <section
    className="relative flex h-screen flex-col"
    style={{ overflowX: 'clip' }}
  >
    {/* Navbar */}
    <FadeIn
      as="nav"
      delay={0}
      y={-20}
      className="relative z-20 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
    >
      {NAV_LINKS.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="font-medium uppercase tracking-wider text-[#D7E2EA] text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
        >
          {link}
        </a>
      ))}
    </FadeIn>

    {/* Heading + bottom bar */}
    <div className="flex flex-1 flex-col justify-end">
      <div className="overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading w-full whitespace-nowrap px-6 md:px-10 font-black uppercase leading-none tracking-tight text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5"
        >
          Hi, i&apos;m {PERSON.firstName}
        </FadeIn>
      </div>

      <div className="flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn
          delay={0.35}
          y={20}
          className="font-light uppercase tracking-wide leading-snug text-[#D7E2EA] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {PERSON.tagline}
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-col items-end gap-3 sm:flex-row sm:items-center">
            <DownloadCV menuPlacement="top" />
            <ContactButton href={`mailto:${PERSON.email}`} />
          </div>
        </FadeIn>
      </div>
    </div>

    {/* Portrait (magnetic). A positioning wrapper keeps Tailwind translate
        utilities from clashing with the motion/magnet transforms. */}
    <div className="absolute left-1/2 z-10 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:translate-y-0">
      <FadeIn delay={0.6} y={30}>
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div className="relative">
            {/* Soft halo lifts the cut-out figure off the display type behind it. */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  'radial-gradient(closest-side, rgba(12,12,12,0.92), rgba(12,12,12,0.6) 55%, transparent 78%)',
              }}
            />
            <img
              src={PERSON.portrait}
              alt={PERSON.fullName}
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain"
              style={{ filter: 'drop-shadow(0 26px 50px rgba(0,0,0,0.55))' }}
            />
          </div>
        </Magnet>
      </FadeIn>
    </div>
  </section>
)
