import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <div>
      <ul className={'menu'}>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about/'}>About</Link></li>
        <li><Link to={'/project/'}>Projects</Link></li>
      </ul>
    </div>
  </div>
)

export default Header
