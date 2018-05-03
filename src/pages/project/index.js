import React from 'react'
import { FadeIn, FlipInX } from 'animate-components'

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
        <h2>Projects</h2>
        <ul>
          {this.state.projects.map((project, key) => {
            return (
              <div key={key}>
                <FlipInX fillMode={'both'} delay={(0.1 + (key / 45)) + 's'}>
                  <li><a href={project.html_url}>{project.name}</a></li>
                </FlipInX>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

// noinspection JSUnusedGlobalSymbols
export default ProjectIndexPage
