import React from "react"

import SEO from "../../components/SEO/seo"
import Layout from "../../components/Layout/layout"
import PostsList from "../../components/PostsList"

const PostContent = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="BlogPage">
        <PostsList posts={data.allMarkdownRemark.edges} />
        <div className="post-content">
          <h2>{post.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <h4>
            Posted by {post.frontmatter.title} on {post.frontmatter.date}
          </h4>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
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

export default PostContent
