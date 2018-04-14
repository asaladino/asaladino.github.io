import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: [],
    }
  }

  render() {
    return (
      <div>
        <div className={'column'}>
          <div style={{ clear: 'both' }}/>
          <h1>Oscar Wilde</h1>
          <div>
            <blockquote>
              <p>
                Be yourself; everyone else is already taken.
              </p>
            </blockquote>
          </div>
          <p>Posted April 14, 2018</p>
        </div>
      </div>
    )
  }
}

export default IndexPage