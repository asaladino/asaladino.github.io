import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div>
    <div style={{
      background: 'tomato',
    }}>
      <h1 className={'column'} style={{ padding: '3rem 0' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className={'column'}>
      <ul className={'menu'}>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about/'}>About</Link></li>
        <li><Link to={'/project/'}>Projects</Link></li>
      </ul>
    </div>
  </div>

)

export default Header
