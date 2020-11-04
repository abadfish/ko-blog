import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"


const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(limit: 5, sort: {
      order:DESC,
      fields: [frontmatter___date]
    }) {
      edges {
        node {
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
const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)

  const markdown = data.allMarkdownRemark.edges

  return (
    <>
      <SEO title="Archive" />
      <aside>
        <h3>Archive</h3>
        { markdown.map(e => (
          <p key={e.node.frontmatter.slug}>
            <Link to={`/posts${e.node.frontmatter.slug}`}>{e.node.frontmatter.title}</Link>
          </p>
        ))}
      </aside>

    </>
  )
}

export default Archive
