import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { useRef } from 'react'
import type { CSSProperties } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

/**
 * Character-by-character scroll-reveal: each glyph fades from 0.2 → 1 opacity
 * as the paragraph travels through the viewport.
 */
export const AnimatedText = ({ text, className, style }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })
  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <Char
          key={i}
          char={char}
          index={i}
          total={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  )
}

interface CharProps {
  char: string
  index: number
  total: number
  progress: MotionValue<number>
}

const Char = ({ char, index, total, progress }: CharProps) => {
  const start = index / total
  const end = start + 1 / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  const display = char === ' ' ? ' ' : char

  return (
    <span style={{ position: 'relative', display: 'inline-block', whiteSpace: 'pre' }}>
      {/* invisible placeholder reserves layout width */}
      <span style={{ opacity: 0 }}>{display}</span>
      {/* animated glyph sits on top */}
      <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>
        {display}
      </motion.span>
    </span>
  )
}
