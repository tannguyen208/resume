import { Fragment, memo } from 'react'
import Card from '@components/card/Card'

export interface IProject {
  name: string
  desc: string
  logo: string
  duration: string
  position: string
  size: number
  responsibility: string[]
  technology: string
  tool: string
}

export interface IOpenSourceProject {
  name: string
  logo: string
  link: string
  sourceUrl: string
}

type IProps = {
  openSource: IOpenSourceProject[]
  projects: IProject[]
}

function ProfessionalProjects({ openSource, projects }: IProps) {
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
                  <p>{os.name}</p>
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
            <img
              className="rs-project--logo"
              src={project.logo}
              alt={project.name}
            />
            <table>
              <tbody>
                <tr>
                  <td>Project</td>
                  <td className="rs-text-title">{project.name}</td>
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

export default memo(ProfessionalProjects)

