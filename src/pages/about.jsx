<<<<<<< HEAD
import React, { Component } from 'react'

class AboutPage extends Component {
  render() {
    return (
      <div className={'column'}>
        <div className="about-container">
          <p>About me.</p>
        </div>
      </div>
    )
  }
}

// noinspection JSUnusedGlobalSymbols
export default AboutPage

=======
import React, { Component } from 'react'

class AboutPage extends Component {
  render() {
    return (
      <div className={'grid-container'}>
        <div className={'grid-x'}>
          <div className="cell">
            <h2>About</h2>
            <p>About me.</p>
          </div>
        </div>
      </div>
    )
  }
}

// noinspection JSUnusedGlobalSymbols
export default AboutPage
>>>>>>> 04a0fb5fe116ff383b27402cb2ac000428452ee4
