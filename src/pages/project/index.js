import React from 'react'
import Link from 'gatsby-link'

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
            projects: projects
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
            {this.state.projects.map(project => {
              return (
                <li><a href={project.html_url}>{project.name}</a></li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default ProjectIndexPage
