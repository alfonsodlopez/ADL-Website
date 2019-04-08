import React from "react"
import { Link, graphql } from "gatsby"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import Navbar from '../components/Navbar';
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"



//blue 0a7aa5
//orange cc5a27
//light orange dba995

class BlogIndex extends React.Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: blue,
        secondary: orange,
      },
      status: {
        danger: 'red',
      },
    });
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <MuiThemeProvider theme={theme}>
        <Navbar/>

        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="All posts"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          
          <Bio />
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              )
            })}
        </Layout>
      </MuiThemeProvider>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
