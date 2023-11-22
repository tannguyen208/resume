import Header from '@components/header/Header'
import styled from 'styled-components'
import AwardsAndRecognitions from './AwardsAndRecognitions'
import Education from './Education'
import Info from './Info'
import ProfessionalProjects from './ProfessionalProjects'
import WorkExperience from './WorkExperience'

const MainStyled = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .rs-info {
    margin: 0 auto;
    width: calc(100vw - 3rem);
  }

  .rs-title {
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  .rs-content {
    margin: 0 auto;
  }

  .rs-text-title {
    font-size: 1.5rem;
    font-weight: bold;ƒ
  }

  .rs-project {
    margin: 12px;

    & td {
      white-space: pre;
    }

    &--logo {
      width: 72px;
      max-height: 72px;
    }
  }

  footer {
    padding: 1rem;
    margin-top: 1rem;
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--container-width);
`

export default function Main() {
  return (
    <MainStyled>
      <Header />
      <Body>
        <Info />
        <WorkExperience />
        <ProfessionalProjects />
        <Education />
        <AwardsAndRecognitions />
      </Body>
      <footer>Made with ❤️ by TanNA</footer>
    </MainStyled>
  )
}
