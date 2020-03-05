import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from 'gatsby';

export default ({data}) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      {data.site.siteMetadata.description}
    </p>
  </Layout>
)

export const query = graphql`query{
  site{
    siteMetadata{
      title,
      description
    }
  }
}`
