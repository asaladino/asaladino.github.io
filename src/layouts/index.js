import React from 'react'
import PropTypes from 'prop-types'

import 'foundation-sites/dist/css/foundation.min.css'

import Header from '../components/header'
import './index.css'


const Layout = ({ children, data }) => (
  <div>
    <Header siteTitle={data.site.siteMetadata.title}/>
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

// noinspection JSUnusedGlobalSymbols
export default Layout

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
