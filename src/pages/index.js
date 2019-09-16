import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="f-d-center-screen f-column">
      <h1>Hi people</h1>
      <p>Main page</p>
    </div>
  </Layout>
)

export default IndexPage
