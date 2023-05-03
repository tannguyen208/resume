import Card from '@components/card/Card'
import { memo } from 'react'

export interface IWorkExperience {
  name: string
  time: string
  roles: string[]
}

type IProps = {
  workExperience: IWorkExperience[]
}

function WorkExperience({ workExperience }: IProps) {
  return (
    <section className="rs-content">
      <p className="rs-title">Work Experience</p>
      <ul>
        <li>Optimizing the user experience.</li>
        <li>Using HTML, JavaScript and CSS to bring concepts to life.</li>
        <li>Developing and maintaining the user interface.</li>
        <li>Implementing design on mobile websites.</li>
        <li>
          Creating tools that improve site interaction regardless of the
          browser. Managing software workflow.
        </li>
        <li>Using APIs and RESTful Services</li>
        <li>Following SEO best practices.</li>
        <li>Fixing bugs and testing for usability.</li>
        <li>Creating and applying design planning</li>
        <li>
          Working on coding assignments and code reviews for functionality and
          accuracy
        </li>
        <li>
          Training team members and mentoring junior developers with delegated
          tasks
        </li>
      </ul>
      <div className="flex flex-wrap" style={{ gap: 8 }}>
        {workExperience.map((we) => (
          <Card key={we.name}>
            <div>
              <p>
                <span className="rs-text-title">{we.name}</span> - {we.time}
              </p>
              <ul>
                {we.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default memo(WorkExperience)

