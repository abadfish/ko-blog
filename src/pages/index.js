import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Listing from "../components/listing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Listing />
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>*/}
  </Layout>
)

export default IndexPage
