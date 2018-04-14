import React from 'react'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to={'/about/'}>About</Link></li>
          <li><Link to={'/project/'}>Projects</Link></li>
        </ul>
      </div>
    )
  }
}