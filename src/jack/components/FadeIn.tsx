import { motion, useReducedMotion } from 'framer-motion'
import type { ComponentType, CSSProperties, ElementType, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  /** HTML tag to render (e.g. 'div', 'h1', 'nav', 'p'). Defaults to 'div'. */
  as?: ElementType
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  style?: CSSProperties
}

export const FadeIn = ({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) => {
  // framer-motion v10 exposes motion.<tag>; pick the matching motion component.
  const MotionTag = (((motion as unknown) as Record<string, unknown>)[as as string] ??
    motion.div) as ComponentType<any>

  const reduce = useReducedMotion()

  // Reduced motion: render the content at its final, fully-visible state with no
  // transform or reveal. Content is always in the DOM either way.
  if (reduce) {
    return (
      <MotionTag className={className} style={style}>
        {children}
      </MotionTag>
    )
  }

  // Reveal is a transform-only slide, never an opacity gate: content stays visible
  // (opacity 1) even if the in-view observer never fires — on hidden tabs, headless
  // renderers, or preview crawlers the section renders, it just doesn't animate.
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ x, y }}
      whileInView={{ x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  )
}
