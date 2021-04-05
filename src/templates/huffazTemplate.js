
// three types of query we need
// 1) useStaticQuery  is used in static pages  const data = useStaticQuery(graphql`query here`) inside functional component 
// 2) query we use in gatsby-node.js const response = await graphql(`query here`) inside createPages function
// 3) query we use in dynamic generated pages const query = graphql `query here` outside functional component 
// 4) query we use on run time @apollo-Client  const GET_BOOKS = gql  `query here` outside functional component 

import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {graphql} from 'gatsby'
import * as styles from './huffazTemplate.module.css'
import {documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
query ($slug:String!){
    contentfulHuffaz(slug: {eq: $slug}) {
      category
      gender
      hafizAtAge
      name
      profession
      slug
      image {
        fluid(maxHeight: 300, maxWidth: 300) {
          src
        }
      }
      branch
      institution
      body {
        raw
      }
    }
  }
  
  

`


function huffazTemplate(props) {
    console.log(props)
    return (
        <div>
            <Header />
            <NavBar />
            <div className={styles.main}>
            <div className={styles.leftContainer}>
                <img className={styles.image}src={props.data.contentfulHuffaz.image.fluid.src} alt={props.data.contentfulHuffaz.name}/>
            </div>
            <div className={styles.rightContainer}>
                <h2>{props.data.contentfulHuffaz.name}</h2>
                <h3>{props.data.contentfulHuffaz.hafizAtAge}</h3>
                <h3>{props.data.contentfulHuffaz.category}</h3>
                <h3>{props.data.contentfulHuffaz.institution}</h3>
                <h3> {props.data.contentfulHuffaz.branch}</h3>
                <p> {documentToReactComponents(JSON.parse(props.data.contentfulHuffaz.body.raw))} </p>


            </div>

            </div>
            

          
            
            <Footer />
        </div>
    )
}

export default huffazTemplate


// category
// hafiz at
// institution
// branch
// stories body 