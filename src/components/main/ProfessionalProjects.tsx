import { Fragment, useEffect, useState } from 'react'
import Card from '@components/card/Card'

interface Project {
  name: string
  desc: string
  duration: string
  position: string
  size: number
  responsibility: string[]
  technology: string
  tool: string
}

interface OpenSourceProject {
  name: string
  logo: string
  link: string
  sourceUrl: string
}

export default function ProfessionalProjects() {
  const [openSource, setOpenSource] = useState<OpenSourceProject[]>([])
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/tannguyen208/resume/main/src/assets/projects.json'
      )
      const data = await response.json()

      setOpenSource(data.open_source || [])
      setProjects(data.projects || [])
    }

    fetchProjects()
  }, [])

  return (
    <section>
      <p className="rs-title">Professional Projects</p>
      {Boolean(openSource.length) && (
        <Fragment>
          <p>* Community Sharing Projects (Open Source)</p>
          <div className="flex flex-wrap">
            {openSource.map((os) => (
              <Card key={os.name} className="rs-project">
                <a href={os.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={os.logo}
                    alt={os.name}
                    width={36}
                    height={36}
                    className="pointer"
                  />
                </a>
                <div className="flex-1">
                  <p>ChatGPT AI</p>
                  <a className="text-tiny" href={os.sourceUrl} target="_blank">
                    Source code
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Fragment>
      )}

      <p>* Company Projects</p>
      <div className="flex flex-wrap">
        {projects.map((project) => (
          <Card key={project.name} className="rs-project">
            <table>
              <tbody>
                <tr>
                  <td>Project</td>
                  <td className="project-name">{project.name}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{project.desc}</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>{project.duration}</td>
                </tr>
                <tr>
                  <td>Position</td>
                  <td>
                    <ul>
                      <li>{project.position}</li>
                      <li>Team Size: {project.size}</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Responsibility</td>
                  <td>
                    <ul>
                      {project.responsibility.map((res, idx) => (
                        <li key={idx}>{res}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Technology</td>
                  <td>{project.technology}</td>
                </tr>
                <tr>
                  <td>Tools</td>
                  <td>{project.tool}</td>
                </tr>
              </tbody>
            </table>
          </Card>
        ))}
      </div>
    </section>
  )
}

