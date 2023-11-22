import { Fragment, memo } from 'react'
import Card from '@components/card/Card'
import { resume } from '@data/resume'

type IProps = {}

function ProfessionalProjects(props: IProps) {
  const onLink = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <section>
      <p className="rs-title">Professional Projects</p>
      {Boolean(resume.value.openSources.length) && (
        <Fragment>
          <p>* Community Sharing Projects (Open Source)</p>
          <div className="flex flex-wrap">
            {resume.value.openSources.map((os) => (
              <Card key={os.name} className="rs-project pointer">
                <div className="flex" onClick={() => onLink(os.link)}>
                  <img
                    src={os.logo}
                    alt={os.name}
                    width={36}
                    height={36}
                    className="pointer"
                  />
                  <div style={{ width: 8 }} />
                  <div className="flex-1 prj-details">
                    <p>{os.name}</p>
                    <a
                      className="text-tiny"
                      onClick={() => onLink(os.sourceUrl)}
                    >
                      Source code
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Fragment>
      )}

      <p>* Company Projects</p>
      <div className="flex flex-wrap">
        {resume.value.projects.map((project) => (
          <Card key={project.name} className="rs-project">
            <img
              className="rs-project--logo"
              src={
                new URL(`../../assets/${project.logo}`, import.meta.url).href
              }
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

