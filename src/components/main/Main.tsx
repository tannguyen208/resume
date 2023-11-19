import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Info from './Info'
import WorkExperience, { IWorkExperience } from './WorkExperience'
import ProfessionalProjects, {
  IProject,
  IOpenSourceProject,
} from './ProfessionalProjects'
import Education from './Education'
import AwardsAndRecognitions from './AwardsAndRecognitions'
import _assetProjects from '@assets/data/projects.json'
import Header from '@components/header/Header'

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

const API_URL =
  'https://raw.githubusercontent.com/tannguyen208/resume/main/src/assets/projects.json'

export default function Main() {
  const [openSource, setOpenSource] = useState<IOpenSourceProject[]>([])
  const [projects, setProjects] = useState<IProject[]>([])
  const [workExperience, setWorkExperience] = useState<IWorkExperience[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setOpenSource(_assetProjects.open_source ?? [])
        setProjects(_assetProjects.projects ?? [])
        setWorkExperience(_assetProjects.company_experiences ?? [])
      } catch (error) {
        console.error(error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <MainStyled>
      <Header />
      <Body>
        <Info />
        {/* <WorkExperience workExperience={workExperience} /> */}
        <ProfessionalProjects openSource={openSource} projects={projects} />
        <Education />
        <AwardsAndRecognitions />
      </Body>
      <footer>Made with ❤️ by TanNA</footer>
    </MainStyled>
  )
}
