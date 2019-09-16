import React from "react"

import Layout from "../components/Layout/layout"
import PostsList from "../components/PostsList"
import SEO from "../components/SEO/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Posts" />
    <div className="BlogPage">
      <PostsList posts={data.allMarkdownRemark.edges} />
      <div>
        <h1>Posts</h1>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query PostQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
