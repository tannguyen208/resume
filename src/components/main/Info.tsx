import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Avatar from '@assets/avatar.png'
import styled from 'styled-components'
import Header from '@components/header/Header'

const Container = styled.div`
  .hi {
    font-size: 2em;
  }
  img {
    width: 180px;
    height: 180px;
    margin-right: 1rem;
  }
  a {
    color: var(--primary-color);
    margin-right: 1rem;
  }
  .spacer {
    min-height: 1rem;
  }
`

const Flex = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`

export default function Info() {
  return (
    <Container>
      <Flex>
        <img src={Avatar} alt="tanna-resume" />
      </Flex>
      <div className="spacer" />
      <ul>
        <li>
          Software Engineer with 4+ years of experience building web
          applications with Javascript frameworks.
        </li>
        <li>
          Ability to work under pressure and manage tasks with less supervision.
        </li>
        <li>Have skills in solving problems and teamwork.</li>
        <li>Willing to learn new technologies.</li>
      </ul>

      <div className="spacer" />
      <p>
        Looking for a position in the project where I could develop growing
        experiences, communicate with co-workers to increase product high
        quality, make product scalability, and optimize system's performance as
        well. Besides, I hope to join an environment which is able to learn,
        step up my skills as a Javascript Developer, improve self-skills and
        grow up with advanced opportunities to become a technical lead. Later, I
        want to change my position and become a Full-stack Developer if it’s
        available.
      </p>
    </Container>
  )
}

