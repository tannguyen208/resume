import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FadeIn } from '../components/FadeIn'
import { PROJECTS } from '../data'
import type { Project } from '../data'

const CARD_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

export const ProjectsSection = () => (
  <section
    id="projects"
    className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 pb-20"
  >
    <FadeIn
      as="h2"
      y={40}
      className="hero-heading text-center font-black uppercase leading-none tracking-tight mb-10 sm:mb-14"
      style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
    >
      Projects
    </FadeIn>

    <div className="mx-auto max-w-6xl">
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.num} project={project} index={i} total={PROJECTS.length} />
      ))}
    </div>
  </section>
)

interface ProjectCardProps {
  project: Project
  index: number
  total: number
}

const ProjectCard = ({ project, index, total }: ProjectCardProps) => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  })
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={container}
      className="sticky top-24 md:top-32 flex min-h-[85vh] items-start justify-center"
    >
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className={`relative w-full border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${CARD_RADIUS}`}
      >
        {/* Top row: number / category / name */}
        <div className="mb-3 flex items-start gap-3 sm:mb-5 sm:gap-6">
          <span
            className="font-display font-black leading-none text-[#D7E2EA]"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
          >
            {project.num}
          </span>
          <div className="pt-1 sm:pt-3">
            <div className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
              {project.category}
            </div>
            <h3
              className="font-medium uppercase text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
            >
              {project.name}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p
          className="mb-4 sm:mb-6 max-w-2xl font-light leading-relaxed text-[#D7E2EA]/70"
          style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.15rem)' }}
        >
          {project.desc}
        </p>

        {/* Single project image */}
        <div className={`overflow-hidden bg-[#D7E2EA]/5 ${CARD_RADIUS}`}>
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="w-full object-cover"
            style={{ height: 'clamp(220px, 34vw, 460px)' }}
          />
        </div>
      </motion.div>
    </div>
  )
}
