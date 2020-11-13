import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import MainHeader from "../components/mainHeader"
import SEO from "../components/seo"
import Background from "../components/background"

const IndexPage = () => (
  <>
    <Background />
    <Layout>
      <SEO title="Home" />
      <MainHeader />
      {/* <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  </>  
)

export default IndexPage
