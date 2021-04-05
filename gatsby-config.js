require('dotenv').config()

module.exports = {
  siteMetadata:{
    title:"Performing Khidmat @Mahad al Zahra since 2010",
    description: "I am a full stack serverless developer have a good knowledge of React.js, gatsby.js, Contentful, faunaDB and Netlify serverless Functions",
    author:"M Ismail Hunaid",
    
  },

    plugins:[
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-material-ui',
      {
        resolve:"gatsby-transformer-remark",
        options:{
          plugins:[
            'gatsby-remark-reading-time'
          ]
        }

      },
        {
            resolve:"gatsby-source-contentful",
            options:{
          spaceId: process.env.SPACE_ID,
          accessToken:process.env.ACCESS_TOKEN
            }
        },

    ]
}




