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

const MainStyled = styled.main`
  padding: 1.5rem;
  max-width: 950px;
  margin: 0 auto;

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
  }

  footer {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px dashed #eee;
  }
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
        const data =
          import.meta.env.MODE === 'development'
            ? (await import('@assets/projects.json')).default
            : await (await fetch(API_URL)).json()

        setOpenSource(data.open_source ?? [])
        setProjects(data.projects ?? [])
        setWorkExperience(data.company_experiences ?? [])
      } catch (error) {
        console.error(error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <MainStyled>
      <Info />
      <WorkExperience workExperience={workExperience} />
      <ProfessionalProjects openSource={openSource} projects={projects} />
      <Education />
      <AwardsAndRecognitions />
      <footer>Made with ❤️ by TanNA</footer>
    </MainStyled>
  )
}
