import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Header from './header'
import Archive from './archive'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} data={data}/>
      <LayoutFrame>
        <main>{children}</main>
        <Archive />
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </LayoutFrame>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


const LayoutFrame = styled.div `
  margin: 0 auto;
  max-width: 960;
  padding: 0 1.0875rem 1.45rem;
`
// export const query = graphql `
//   query PracticeQuery {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
//
// `
