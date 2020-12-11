import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import SEO from "../components/seo"

const LISTING_QUERY = graphql`
    query BlogPostListing {
    allMarkdownRemark(limit: 5, sort: {
      order: DESC,
      fields: [frontmatter___date]
    }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
const Listing = () => {
  const data = useStaticQuery(LISTING_QUERY)
  const articles = data.allMarkdownRemark.edges.map(({node}, i) => (
    <article key={i}>
      <h2>{node.frontmatter.title}</h2>
      <p>{node.frontmatter.date}</p>
      <p>{node.excerpt}</p>
      <p><Link to={`/posts${node.frontmatter.slug}`}>Read More</Link></p>

    </article>
  ))
    return (
        <>
          <SEO title="Listing" />
          <main>
            { articles }
          </main>
        </>
    )
}

export default Listing
