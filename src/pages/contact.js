import React from 'react'
import Layout from '../components/Layout'
import {graphql,useStaticQuery} from 'gatsby'

function Contact() {
 // syntax of static Query is     const data = useStaticQuery(graphql``)
 // syntax in gatsby-node.js is   const response = graphql(`  `) here graphql is a fucntion 
// on runtime we use above function  and in build time we use inside function
  const data = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        description
        title
        author
      }
    }
  }
  `)
  
    return (
        
        <Layout>
          <h2>CONTACT US PAGE </h2>
          <h2>  {data.site.siteMetadata.title}   </h2>

          <p>  By The Dua Mubarak of <b style ={{color:"blue",fontSize:18}}> Beloved Aaqa Maula Syedna Mufaddal Saifuddin TUS </b>
          <i> <em style={{color:"blue"}}> {data.site.siteMetadata.description}  </em> </i>
          
          </p> 
          
          <h3> {data.site.siteMetadata.author}</h3>
          
  
      </Layout>
        
      
    )
  }
    

export default Contact
