import { motion } from 'framer-motion'
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

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  )
}
