import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'


const PostLayout = (props) => {
  console.log(props)
  const { markdownRemark } = props.data
  return (
    <Layout>
      <h1>{ markdownRemark.frontmatter.title }</h1>
      <div dangerouslySetInnerHTML={{
        __html: markdownRemark.html
      }}/>
    </Layout>
  )
}

export default PostLayout

export const query = graphql `
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
}

`


// static query can be used anywhere but does not accept variables (params) and can't use context
// page query accepts params and context but must be used on pages
