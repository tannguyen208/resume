import { HeroSection } from './sections/HeroSection'
import { MarqueeSection } from './sections/MarqueeSection'
import { AboutSection } from './sections/AboutSection'
import { ServicesSection } from './sections/ServicesSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ContactButton } from './components/ContactButton'
import { PERSON } from './data'

export const JackLanding = () => (
  <main className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
    <HeroSection />
    <MarqueeSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />

    <footer id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pb-16 pt-24 text-center">
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(2.5rem, 12vw, 150px)' }}
      >
        Let&apos;s talk
      </h2>
      <div className="mt-10 flex justify-center">
        <ContactButton href={`mailto:${PERSON.email}`} />
      </div>
      <div className="mt-8 flex flex-col items-center gap-2 text-[#D7E2EA]">
        <a href={`mailto:${PERSON.email}`} className="transition-opacity hover:opacity-70">
          {PERSON.email}
        </a>
        <a
          href={PERSON.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-70"
        >
          {PERSON.githubLabel}
        </a>
        <span className="text-[#D7E2EA]/50">{PERSON.location}</span>
      </div>
      <div className="mt-12 text-sm text-[#D7E2EA]/40">
        © {new Date().getFullYear()} {PERSON.fullName}
      </div>
    </footer>
  </main>
)
