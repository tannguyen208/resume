import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import styled from 'styled-components'
import Button from '@components/button/Button'

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  display: flex;
  justify-content: flex-end;

  nav {
    padding: 1rem 2rem;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 16px;
  }
`

export default function Header() {
  const navRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  console.log(scaleX)

  useEffect(() => {
    // const actionElements = document.querySelectorAll('.rs-action')
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       console.log(entry)
    //       if (entry.isIntersecting) {
    //         entry.target.classList.add('scroll-animations')
    //       } else {
    //         entry.target.classList.remove('scroll-animation')
    //       }
    //     })
    //   },
    //   { threshold: 0.5 }
    // )
    // observer.observe(actionElements as unknown as Element)
    // return () => {
    //   observer.disconnect()
    // }
  }, [])

  return (
    <HeaderStyled>
      <motion.nav
        ref={navRef}
        transition={{ ease: 'easeOut', duration: 2 }}
        className="rs-actions"
      >
        <a
          className="rs-action btn-github"
          href="https://github.com/tannguyen208"
          target="_blank"
        >
          Github
        </a>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            href="https://github.com/tannguyen208/resume/raw/main/src/assets/CV_TanNA.pdf"
            className="rs-action btn-download"
            title="Download"
            download
          />
        </motion.div>
      </motion.nav>
    </HeaderStyled>
  )
}
