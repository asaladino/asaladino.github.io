import React from 'react'

class IndexPage extends React.Component {

  render() {
    let posts = [];
    if (this.props.hasOwnProperty('data')) {
      posts = this.props.data.allMarkdownRemark.edges;
    }
    return (
      <div>
        <div className={'column'}>
          <div style={{ clear: 'both' }}/>
          {posts.map(({ node }) => {
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