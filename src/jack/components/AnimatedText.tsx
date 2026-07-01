import { Fragment } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { useRef } from 'react'
import type { CSSProperties } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

// Resting opacity for not-yet-revealed glyphs. 0.6 of #D7E2EA on #0C0C0C is
// 5.75:1 — above WCAG AA — so the copy is legible before and during the reveal.
const FLOOR = 0.6

/**
 * Character-by-character scroll-reveal: each glyph brightens from FLOOR → 1 as the
 * paragraph travels through the viewport. Characters animate individually, but each
 * word is kept intact (no mid-word wrapping) by grouping its glyphs in a non-breaking
 * inline-block with real, breakable spaces between words. The default state is already
 * readable; reduced-motion users get the plain, fully-visible paragraph with no motion.
 */
export const AnimatedText = ({ text, className, style }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  if (reduce) {
    return (
      <p className={className} style={style}>
        {text}
      </p>
    )
  }

  const words = text.split(' ')
  const total = text.length
  let cursor = 0

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, wi) => {
        const start = cursor
        cursor += word.length + 1 // +1 keeps the stagger aligned across the joining space
        return (
          <Fragment key={wi}>
            <span aria-hidden style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {word.split('').map((char, ci) => (
                <Char key={ci} char={char} index={start + ci} total={total} progress={scrollYProgress} />
              ))}
            </span>
            {wi < words.length - 1 ? ' ' : ''}
          </Fragment>
        )
      })}
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
  const opacity = useTransform(progress, [start, end], [FLOOR, 1])

  return (
    <span style={{ position: 'relative', display: 'inline-block', whiteSpace: 'pre' }}>
      {/* invisible placeholder reserves layout width */}
      <span style={{ opacity: 0 }}>{char}</span>
      {/* animated glyph sits on top */}
      <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>{char}</motion.span>
    </span>
  )
}
