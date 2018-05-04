import React from 'react'
import Link from 'gatsby-link';

import { withPrefix } from "gatsby-link";

const Header = ({ siteTitle, location }) => {
  return (
      <div>
        <div>
          <div className={'grid-container'}>
            <div className={'grid-x'}>
              <div className="cell">
                <h1>
                  <Link to="/">{siteTitle}</Link>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="top-bar">
          <div className="top-bar-left">
            <div className={'grid-container'}>
              <div className={'grid-x'}>
                <div className="cell">
                  <ul className="menu">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about/'}>About</Link></li>
                    <li><Link to={'/project/'}>Projects</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="top-bar-right">
          </div>
        </div>
      </div>
    );
}

export default Header
