import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar";

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <div>
        <Navbar />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="404: Not Found" />
          <h1>Page Not Found</h1>
          <p>You just hit a page that doesn&#39;t exist... I'm sorry.</p>
        </Layout>
      </div>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
