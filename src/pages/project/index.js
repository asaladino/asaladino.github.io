import React from 'react'
import { FadeIn } from 'animate-components'

class ProjectIndexPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: [],
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/asaladino/repos')
      .then(response => {
        response.json().then(projects => {
          this.setState({
            projects: projects,
          })
        })
      })
  }

  render() {
    return (
      <div>
        <div className={'column'}>
          <h2>Projects</h2>
          <ul>
            {this.state.projects.map((project, key) => {
              return (
                <div key={key}>
                  <FadeIn fillMode={'both'} style={{ opacity: 0 }} delay={(0.1 + (key / 10)) + 's'}>
                    <li><a href={project.html_url}>{project.name}</a></li>
                  </FadeIn>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default ProjectIndexPage
