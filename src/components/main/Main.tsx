import styled from 'styled-components'
import Info from './Info'
import WorkExperience from './WorkExperience'
import ProfessionalProjects from './ProfessionalProjects'

const MainStyled = styled.main`
  padding: 1.5rem;

  .rs-info {
    margin: 0 auto;
    width: calc(100vw - 3rem);
  }

  .rs-title {
    font-size: 1.5rem;
  }

  .rs-content {
    margin: 0 auto;
  }

  .rs-project {
    margin: 12px;

    & .project-name {
      font-size: 1.5rem;
      font-weight: bold;
    }

    & td {
      white-space: pre;
    } 
  }
`
export default function Main() {
  return (
    <MainStyled>
      <Info />
      <WorkExperience />
      <ProfessionalProjects />
    </MainStyled>
  )
}
