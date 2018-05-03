import React from 'react'

class IndexPage extends React.Component {

  render() {
    let posts = [];
    if (this.props.hasOwnProperty('data')) {
      posts = this.props.data.allMarkdownRemark.edges;
    }
    return (
      <div>
        <div>
          <div/>
          {posts.map(({ node }) => {
            return (<div key={node.id}>
              <h2>{node.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              <small>Posted {node.frontmatter.date}</small>
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