import React from 'react'
import Layout from '../components/Layout'
import { Card, CardContent} from '@material-ui/core';
import * as styles from './huffaz.module.css'
import { graphql, useStaticQuery ,Link} from 'gatsby'
import Head from '../components/Head'


const Huffaz = () => {
  const data = useStaticQuery(graphql`
    query {
        allContentfulHuffaz {
          edges {
            node {
              gender
              name
              slug
              profession
              hafizAtAge
              image {
                fluid{
                  src
                }
              }
            }
          }
        }
      }
      
        
    `
  );

  return (
    <Layout>
      <Head title="Huffaz-Stories"/>
      <div className={styles.card}>
        {data.allContentfulHuffaz.edges.map((edge) => {
          return (

            <Card>
              <Link to={`/inspirational-stories/${edge.node.slug}`}>  
              

              <img className={styles.images} src={edge.node.image.fluid.src} alt={edge.node.name} />




              <CardContent className={styles.cardContent}>

                <p className={styles.text}>
                  {edge.node.profession.toUpperCase()} </p>

                <p className={styles.text} >
                  {edge.node.name.toUpperCase()}
                </p>

                <p className={styles.text}>
                {edge.node.gender.toUpperCase()}

                </p>
                  
              


              </CardContent>
              </Link>

            </Card>








          )
        })}

      </div>







    </Layout>


  )
}

export default Huffaz
// const classes = useStyles();

// const useStyles = makeStyles({
//     root: {
//         width: "300px",
//         background: "green",
//         height: "300px"


//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     title: {
//         fontSize: 14,
//     },
//     pos: {
//         marginBottom: 12,
//     },
// });


{/* <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
        </Typography>
                    <Typography variant="h5" component="h2">

                    </Typography>


                </CardContent>
                <CardActions>
                    <Button size="small"> Read His/Her Succes Story</Button>
                </CardActions>
            </Card> */}

