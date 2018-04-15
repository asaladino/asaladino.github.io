import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <div className={'column'}>
          <div style={{ clear: 'both' }}/>
          {this.props.data.allMarkdownRemark.edges.map(({ node }) => {
            return (<div key={node.id}>
              <h1>{node.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              <p>Posted {node.frontmatter.date}</p>
            </div>)
          })}
        </div>
      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          html
        }
      }
    }
  }
`