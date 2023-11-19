import Button from '@components/button/Button'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  font-weight: 700;
  display: flex;
  justify-content: center;

  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);

  nav {
    width: var(--container-width);
    padding: 1rem 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .c-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;
    svg:hover {
      fill: var(--primary-color);
    }
  }

  .btn-download {
    color: #fff;
  }
`

export default function Header() {
  return (
    <HeaderStyled>
      <motion.nav transition={{ ease: 'easeOut', duration: 2 }}>
        <motion.div className="c-links">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/tannguyen208"
            target="_blank"
          >
            <FaGithub color="#7f7e82" size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://twitter.com/tanna48pct"
            target="_blank"
          >
            <FaTwitter color="#7f7e82" size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/tanna48pct"
            target="_blank"
          >
            <FaLinkedin color="#7f7e82" size={24} />
          </motion.a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            href="https://github.com/tannguyen208/resume/raw/main/src/assets/CV_TanNA.pdf"
            className="rs-action btn-download"
            title="My Resume"
            download
          />
        </motion.div>
      </motion.nav>
    </HeaderStyled>
  )
}
